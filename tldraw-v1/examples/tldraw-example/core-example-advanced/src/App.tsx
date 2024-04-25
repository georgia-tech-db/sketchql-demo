import { useStateDesigner } from '@state-designer/react'
import {
  Renderer,
  TLBounds,
  TLKeyboardEventHandler,
  TLPinchEventHandler,
  TLPointerEventHandler,
  TLPointerInfo,
  TLShapeBlurHandler,
  TLWheelEventHandler,
} from '@tldraw/core'
import { Bounds } from '@tldraw/core/src/components/Bounds'
import { Button, Drawer, Upload } from 'antd'
import * as React from 'react'
import { Api } from 'state/api'
import styled from 'stitches.config'
import Gantt2 from './components/Gantt2/Gantt2'
import { TitleLinks } from './components/TitleLinks'
import { Toolbar } from './components/Toolbar'
import { shapeUtils, BoxShape } from './shapes'
import { machine } from './state/machine'
import './styles.css'
import { Console } from 'console'
import DisplayVid from 'video_display'
import QueryPlayer from 'video_player'
import {Plotly} from 'plotly'
import { v4 as uuidv4 } from 'uuid';

declare const window: Window & { api: Api }

type mappingProps = Record<
  string,
  {
    point?: number[]
    time?: string
    startTime?: number
    endTime?: number
    break?: boolean
    color?: string
  }[]
>

interface map {
  [U: string]: object
}

let flag = false // Record Switch
let hasDragObject = false
let startTime = new Date().getTime()

let prevTrackTime = 0

function debounce(fn: (...args: any[]) => void, delay = 500) {
  let time: number | null = null

  function _debounce(...args: any[]) {
    if (time !== null) {
      clearTimeout(time)
    }
    
    time = setTimeout(() => {
      fn(...args)
    }, delay)
  }
  return _debounce
}

const onHoverShape: TLPointerEventHandler = (info, e) => {
  machine.send('HOVERED_SHAPE', info)
}

const onUnhoverShape: TLPointerEventHandler = (info, e) => {
  flag = false
  // startTime = new Date().getTime()
  machine.send('UNHOVERED_SHAPE', info)
}

const onPointShape: TLPointerEventHandler = (info, e) => {
  flag = true
  machine.send('POINTED_SHAPE', info)
  startTime = new Date().getTime()
  console.log('onPointShape')
}

const onPointCanvas: TLPointerEventHandler = (info, e) => {
  machine.send('POINTED_CANVAS', info)
}

const onPointBounds: TLPointerEventHandler = (info, e) => {
  flag = true
  machine.send('POINTED_BOUNDS', info)
  startTime = new Date().getTime()
  console.log('onPointBounds')
}

const onPointHandle: TLPointerEventHandler = (info, e) => {
  machine.send('POINTED_HANDLE', info)
}

const onPointerDown: TLPointerEventHandler = (info, e) => {
  machine.send('STARTED_POINTING', info)
}

const onPointerMove: TLPointerEventHandler = (info, e) => {
  machine.send('MOVED_POINTER', info)
}

const onPan: TLWheelEventHandler = (info, e) => {
  machine.send('PANNED', info)
}

const onPinchStart: TLPinchEventHandler = (info, e) => {
  machine.send('STARTED_PINCHING', info)
}

const onPinch: TLPinchEventHandler = (info, e) => {
  machine.send('PINCHED', info)
}

const onPinchEnd: TLPinchEventHandler = (info, e) => {
  machine.send('STOPPED_PINCHING', info)
}

const onPointBoundsHandle: TLPinchEventHandler = (info, e) => {
  machine.send('POINTED_BOUNDS_HANDLE', info)
}

const onBoundsChange = (bounds: TLBounds) => {
  machine.send('RESIZED', { bounds })
}

const onKeyDown: TLKeyboardEventHandler = (key, info, e) => {
  switch (key) {
    case 'Alt':
    case 'Meta':
    case 'Control':
    case 'Shift': {
      machine.send('TOGGLED_MODIFIER', info)
      break
    }
    case 'Backspace': {
      machine.send('DELETED', info)
      break
    }
    case 'Escape': {
      machine.send('CANCELLED', info)
      break
    }
    case '0': {
      machine.send('ZOOMED_TO_ACTUAL', info)
      break
    }
    case '1': {
      machine.send('ZOOMED_TO_FIT', info)
      break
    }
    case '2': {
      machine.send('ZOOMED_TO_SELECTION', info)
      break
    }
    case '=': {
      if (info.metaKey || info.ctrlKey) {
        e.preventDefault()
        machine.send('ZOOMED_IN', info)
      }
      break
    }
    case '-': {
      if (info.metaKey || info.ctrlKey) {
        e.preventDefault()
        machine.send('ZOOMED_OUT', info)
      }
      break
    }
    case 's':
    case 'v': {
      machine.send('SELECTED_TOOL', { name: 'select' })
      break
    }
    case 'r':
    case 'b': {
      machine.send('SELECTED_TOOL', { name: 'box' })
      break
    }
    case 'd': {
      machine.send('SELECTED_TOOL', { name: 'pencil' })
      break
    }
    case 'e': {
      machine.send('SELECTED_TOOL', { name: 'eraser' })
      break
    }
    case 'a': {
      if (info.metaKey || info.ctrlKey) {
        machine.send('SELECTED_ALL')
        e.preventDefault()
      } else {
        machine.send('SELECTED_TOOL', { name: 'arrow' })
      }
      break
    }
    case 'z': {
      if (info.metaKey || info.ctrlKey) {
        if (info.shiftKey) {
          machine.send('REDO')
        } else {
          machine.send('UNDO')
        }
      }
      break
    }
  }
}

const onKeyUp: TLKeyboardEventHandler = (key, info, e) => {
  switch (key) {
    case 'Alt':
    case 'Meta':
    case 'Control':
    case 'Shift': {
      machine.send('TOGGLED_MODIFIER', info)
      break
    }
  }
}

interface AppProps {
  onMount?: (api: Api) => void
}

let pointMapping: any = {}

const userDefinedShapes = [
  { id: 'customID1', /* other shape properties */ },
  { id: 'customID2', /* other shape properties */ },
];

export default function App({ onMount }: AppProps) {
  const appState = useStateDesigner(machine)

  const [dep, setDep] = React.useState([])
  const [plotPoints, setPlotPoints] = React.useState([]);

  // const pointMapping = React.useRef<any>({})

  const breakPoint = (state: any) => {
    state.pageState.selectedIds.forEach((item: string) => {
      pointMapping[item] ? pointMapping[item] : (pointMapping[item] = [])
      let endTime = new Date().getTime()
      pointMapping[item].push({
        point: state.page.shapes[item].point,
        id: "box" + userDefinedShapes[0].id,
        time: new Date().toLocaleString(),
        startTime: startTime,
        endTime,
        break: true,
        color: state.page.shapes[item].color,
        label: state.page.shapes[item].label,
      })
    })
    setDep([])
  }

  const track = (state: any) => {
    if (new Date().getTime() - prevTrackTime < 40) {
      return
    }
    state.pageState.selectedIds.forEach((item: string) => {
      pointMapping[item] ? pointMapping[item] : (pointMapping[item] = [])
      let endTime = new Date().getTime()
      pointMapping[item].push({
        point: state.page.shapes[item].point,
        id: "box",
        time: new Date().toLocaleString(),
        startTime: startTime,
        endTime,
        color: state.page.shapes[item].color,
        label: state.page.shapes[item].label,
      })
    })
    prevTrackTime = new Date().getTime()
  }

  let debouncePoint = debounce(breakPoint)

  const onPointerUp: TLPointerEventHandler = (info, e) => {
    flag = false
    machine.send('STOPPED_POINTING', info)
    if (!hasDragObject) return
    track(appState.data)
    debouncePoint(appState.data)
    hasDragObject = false
  }

  const onDragShape: TLPointerEventHandler = (info, e) => {
    hasDragObject = true
  }

  const onDragBounds: TLPointerEventHandler = (info, e) => {
    hasDragObject = true
  }

  React.useEffect(() => {
    const api = new Api(appState)
    onMount?.(api)
    window['api'] = api
  }, [])

  React.useEffect(() => {
    if (!flag) return
    track(appState.data)
    console.log(pointMapping)
  }, [appState])

  const hideBounds = appState.isInAny('transformingSelection', 'translating', 'creating')

  const firstShapeId = appState.data.pageState.selectedIds[0]
  const firstShape = firstShapeId ? appState.data.page.shapes[firstShapeId] : null
  const hideResizeHandles = firstShape
    ? appState.data.pageState.selectedIds.length === 1 &&
      shapeUtils[firstShape.type].hideResizeHandles
    : false

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isUploaderOpen, setIsUploaderOpen] = React.useState(false);

  const showUploader = () => setIsUploaderOpen(true);
  const closeUploader = () => setIsUploaderOpen(false);
  const showModal = () => setIsModalOpen(true)
  const onClose = () => setIsModalOpen(false)

  

  const onChange = (val: mappingProps) => {
    pointMapping = { ...val }
    console.log("Changed")
    setDep([])
  }

  const print_pointMapping = () => {
    console.log(pointMapping)
  }

  function exportAndDownloadImage(data) {
    const exportImage = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const padding = 120;
  
      // Add additional padding to the canvas dimensions
      canvas.width = Math.max(document.documentElement.scrollWidth, window.innerWidth || 0) + padding * 2;
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight || 0) + padding * 2;
  
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      const legend = {};
  
      Object.keys(data).forEach((key, index) => {
        const points = data[key];
  
        const x_coordinates = points.map((point) => point.point[0]);
        const y_coordinates = points.map((point) => point.point[1]);
  
        const scaleX = (canvas.width - 2 * padding) / Math.max(...x_coordinates);
        const scaleY = (canvas.height - 2 * padding) / Math.max(...y_coordinates);
  
        for (let i = 0; i < x_coordinates.length; i++) {
          // Add padding to the calculated coordinates
          const x = (x_coordinates[i] * scaleX) + padding;
          const y = (y_coordinates[i] * scaleY) + padding;
  
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = points[i].color;
          ctx.fill();
          ctx.closePath();
  
          if (!legend[points[i].color]) {
            legend[points[i].color] = [];
          }
          if (!legend[points[i].color].includes(points[i].label)) {
            legend[points[i].color].push(points[i].label);
          }
        }
      });
  
      const legendX = 20;
      const legendY = 20;
      const legendSpacing = 20;
  
      Object.keys(legend).forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.fillRect(legendX, legendY + index * legendSpacing, 15, 15);
        ctx.fillStyle = 'black';
        ctx.fillText(`Object Label: ${legend[color].join(', ')}`, legendX + 20, legendY + 12 + index * legendSpacing);
      });
  
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'pointMapping.png';
        link.click();
      });
    };
  
    exportImage();
  };
  
  const make_json_string = () => {
    let obj: { [key: string]: any } = {}; 
  
    Object.keys(pointMapping).forEach((item) => {
        // Check if obj[item] exists before logging it
        if (obj[item] !== undefined) {
            console.log(obj[item]);
            console.log(typeof obj[item]);
        }
  
        obj[item] = pointMapping[item].filter((point: any) => !point.break);
    });
    
    console.log(JSON.stringify(obj))
    return JSON.stringify(obj)
  };

  const onExport = () => {
    // Ensure 'map' type is correct (it's probably an object, not a map)
    let obj: { [key: string]: any } = {}; 
  
    Object.keys(pointMapping).forEach((item: any) => {
      // Check if obj[item] exists before logging it
      if (obj[item] !== undefined) {
        console.log(obj[item]);
        console.log(typeof obj[item]);
      }
  
      obj[item] = pointMapping[item].filter((point: any) => !point.break);
    });
    
    // download link 
    let blob = new Blob([JSON.stringify(obj)], { type: 'application/json' });
  
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'pointMapping.json';
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 

    exportAndDownloadImage(obj)

  };

  const [isLoading, setIsLoading] = React.useState(false);
  const runPythonFunction = async () => {
    console.log("run query");
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/run-py', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'dataset': 'traffic',
          'query_name': 'left_turn_tldraw1',
          'model_checkpoint': 'data/model_checkpoint/model_cp.pt',
          'json_data': make_json_string()
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);

    } catch (error) {
      console.error('Error occurred during fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runPy = async () => {
    console.log("run query")
    try {
      const response = await fetch('http://127.0.0.1:5000/run-python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);

    } catch (error) {
      console.error('Error occurred during fetch operation:', error);
    }
  };


  const generatePlotPoints = (data: any) => {
    if (!data || !data.pageState || !data.page || !data.page.shapes) {
      return null; // Return null if data is invalid or missing
    }

    const newPlotPoints: JSX.Element[] = []; //array for store elements

    // point mapping
    Object.keys(data.page.shapes).forEach((id) => {
      const shape = data.page.shapes[id];
      if (!shape || !shape.point) {
        return; 
      }
      const [x, y] = shape.point; // get the x and y coordinates
      const color = shape.color;
      console.log(`POINT MAPPING for shape with ID: ${id}, x: ${x}, y: ${y}`);
      // Create PlotPoint component and push to newPlotPoints array
      newPlotPoints.push(
        <PlotPoint key={uuidv4()} style={{ top: y + shape.size[1], left: x - 4 * shape.size[0], background: color }} />
      );
    });

    return newPlotPoints; // Return the array of new PlotPoint components
  };

  // Update plotPoints whenever appState changes
  React.useEffect(() => {
    const newPoints = generatePlotPoints(appState.data);
    setPlotPoints((prevPoints) => [...prevPoints, ...newPoints]);
  }, [appState]);

  return (
    <>
      <AppContainer>
        <Renderer
          shapeUtils={shapeUtils} // Required
          page={appState.data.page} // Required
          pageState={appState.data.pageState} // Required
          performanceMode={appState.data.performanceMode}
          meta={appState.data.meta}
          snapLines={appState.data.overlays.snapLines}
          onPointShape={onPointShape}
          onPointBounds={onPointBounds}
          onPointCanvas={onPointCanvas}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onHoverShape={onHoverShape}
          onUnhoverShape={onUnhoverShape}
          onPointBoundsHandle={onPointBoundsHandle}
          onPointHandle={onPointHandle}
          onPan={onPan}
          onPinchStart={onPinchStart}
          onPinchEnd={onPinchEnd}
          onPinch={onPinch}
          onPointerUp={onPointerUp}
          onBoundsChange={onBoundsChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onDragShape={onDragShape}
          onDragBounds={onDragBounds}
          hideBounds={hideBounds}
          hideHandles={hideBounds}
          hideResizeHandles={hideResizeHandles}
          hideIndicators={hideBounds}
          hideBindingHandles={true}
          >
            {appState.data.pageState.selectedIds.map((id: string) => {
            const x = appState.data.page.shapes[id].point[0];
            const y = appState.data.page.shapes[id].point[1];
          })}
          </Renderer>
          {plotPoints}
        <Toolbar activeStates={appState.active} lastEvent={appState.log[0]} />
        <TitleLinks />
      </AppContainer>

      <TouchBarContainer className="touch-bar">
        <Button type="primary" onClick={showUploader} style = {{marginRight: '10px', borderColor: 'black', background: 'black', color: 'white'}} >
          Upload Dataset
        </Button>
        <Button type="primary" onClick={showModal} style = {{marginRight: '10px', borderColor: 'black', background: 'black', color: 'white'}}>
          Trajectory 
        </Button>
        <QueryPlayer/>
        <Button type="primary" onClick={runPythonFunction} style = {{marginRight: '10px', borderColor: 'black', background: 'black', color: 'white'}}>
          {isLoading ? 'Running...' : 'Run'}
        </Button>
        <DisplayVid/>
      </TouchBarContainer>

      <Drawer
        title="Upload Dataset"
        open={isUploaderOpen}
        mask={false}
        placement="bottom"
        onClose={closeUploader}
        height={400}
      >
        <Upload.Dragger>
          <p className="ant-upload-drag-icon">
          </p>
          <p className="ant-upload-text">Click to Upload Dataset Here</p>
          <p className="ant-upload-hint">
            Supports Video Files
          </p>
        </Upload.Dragger>
      </Drawer>
      
      <Drawer
        title="Records"
        open={isModalOpen}
        mask={false}
        placement="bottom"
        onClose={onClose}
        height={400}
        extra={
          <Button type="primary" onClick={onExport}>
            Output
          </Button>
        }
      >
        {/* show the Gantte graph if data exist, show "Pending" if no data */}
        {Object.keys(pointMapping).length > 0 ? (
          <Gantt2
            dep={dep}
            // Coordinates data
            pointMapping={pointMapping}
            // Dragging event
            onChange={onChange}
            // Open and Close model
            isModalOpen={isModalOpen}
          />
        ) : (
          <TextConatiner>Pending</TextConatiner>
        )}
      </Drawer>
    </>
  )
}

const AppContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  width: '100%',
  height: '100%',
  zIndex: 101,
})



// Create the trajectory records pop-up on the right-bottom corner
const TouchBarContainer = styled('div', {
  position: 'fixed',
  bottom: '60px',
  right: '40px',
  zIndex: 102,
})

const TextConatiner = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
  marginBottom: '30px',
})

const PlotPoint = styled('div', {
  position: 'absolute',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  zIndex: 104,
})

