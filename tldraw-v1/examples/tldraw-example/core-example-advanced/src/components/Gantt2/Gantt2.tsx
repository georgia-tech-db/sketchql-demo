import { useStateDesigner } from '@state-designer/react'
import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { machine } from '../../state/machine'
import './base.css'
import './jquery-ui.min.css'
import './style.css'

const CELL_WIDTH = 400
// const MINUTES = 60
const times = 60
const stepSeconds = 60
// const SIDE_TITLE = 2
const SUBTITLE_WIDTH = 78
let gloablStartHour = 0
let totalMovementDuration = 21600

interface listProps {
  driver: string
  series: seriesProps[]
}

interface seriesProps {
  point: number[]
  driver: string
  time: string
  left: number
  width: number
  startTime: number
  endTime: number
}

// time format
function formatTime(date: Date | number = new Date()) {
  console.log("formatting time")
  let initialDate = new Date(date)
  let year = initialDate.getFullYear()
  let month = initialDate.getMonth() //month(0-11, 0 is Jan)
  let day = initialDate.getDate()
  let hours = initialDate.getHours() //hour(0-23)
  let minutes = initialDate.getMinutes() //min(0-59)
  let seconds = initialDate.getSeconds()
  return { year, month, day, hours, minutes, seconds }
}

let interfaceStartTime = new Date().getTime() //Store the timestamp when the interface starts 

function resetInterfaceStartTime() {
  interfaceStartTime = new Date().getTime()
}

// generate time
function genterateClock() {
  let elapsedTime = new Date().getTime() - interfaceStartTime; // Calculate elapsed time
  let elapsedMinutes = elapsedTime / (1000 * 60); // Convert milliseconds to minutes
  let step = times * 2; // Example: 2 hours of timeline

  let result = [];
  for (let i = 0; i < step; i++) {
    let minutes = Math.floor(elapsedMinutes + i * times); // Calculate minutes based on elapsed time
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    let timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    result.push(timeString);
  }
  return result;
}

const timeSpan = genterateClock()

type pointMappingProps = Record<
  string,
  {
    point?: number[]
    time?: string
    startTime?: number
    endTime?: number
    break?: boolean
    startPosition?: number
    endPosition?: number
  }[]
>
interface GanttProps {
  dep: any[]
  isModalOpen: boolean
  pointMapping: pointMappingProps
  onChange: (val: pointMappingProps) => void
}

// initial gantt graph
export default function Gantt2(props: GanttProps) {
  const { onChange, isModalOpen } = props
  // const appState = useStateDesigner(machine)
  const [dataList, setData] = useState<listProps[]>([])

  /**
   *  updating coordinates
   * @param rowData current info before dragging
   * @param index dragging index
   * @param payload current info after dragging
   */
  const resetPointsMapping = (rowData: any, index: number, payload: any) => {
    const pointMapping = props.pointMapping
    Object.keys(pointMapping).forEach((v) => {
      const series = pointMapping[v]
      if (v === rowData.driver) {
        const startDiff = payload.startTime - rowData.startTime
        const endDiff = payload.endTime - rowData.endTime

        pointMapping[v] = series.map((item, seriesIndex) => {
          if (payload.startPosition === seriesIndex) {
            return {
              point: item.point,
              time: new Date(new Date(item.time!).getTime() + +startDiff).toLocaleString(),
              startTime: payload.startTime,
              endTime: payload.endTime,
              left: payload.left,
              width: payload.width
            }
          } else if (seriesIndex > payload.startPosition && seriesIndex < payload.endPosition) {
            return {
              ...item,
              time: new Date(new Date(item.time!).getTime() + +startDiff).toLocaleString(),
              // @ts-ignore
              startTime: item.startTime + startDiff,
              // @ts-ignore
              endTime: item.endTime + endDiff,
            }
          } else if (payload.endPosition === seriesIndex) {
            return {
              ...payload,
              left: payload.left,
              break: true,
              time: new Date(new Date(item.time!).getTime() + +startDiff).toLocaleString(),
            }
          }
          return item
        })
      }
    })
    // updating gantt graph
    console.log(props.pointMapping)
    onChange(props.pointMapping)
  }

  // dragging operation
  function dragBlock(data: any, leftDistance: number) {
    let inlineData = JSON.parse(data.helper.attr('data-block'))
    let inlineIndex = Number(data.helper.attr('data-index'))

    const { originalPosition, position } = data

    let changedInlineData = {}
    let result = dataList.map((v) => {
      if (v.driver === inlineData.driver) {
        return {
          ...v,
          series: v.series.map((item: seriesProps, index: number) => {
            let left = position.left - originalPosition.left
          
            let elapsedMinutes = Math.floor((position.left - originalPosition.left) / CELL_WIDTH)
            let newTime = new Date(interfaceStartTime + elapsedMinutes * 60 * 1000).getTime()
            
            const allCostSeconds = Math.trunc((left / CELL_WIDTH) * stepSeconds) // left/CELL_WIDTH the number of blocks between before dragging and after dragging。*stepSeconds total seconds

            const startTime = new Date(inlineData.startTime + allCostSeconds * 1000).getTime()

            const endTime = new Date(inlineData.endTime + allCostSeconds * 1000).getTime()

            if (index === inlineIndex) {
              const timeDiff = Math.abs(left / CELL_WIDTH) * totalMovementDuration;
              // Adjust start and end times based on the time difference
              const newStartTime = new Date(startTime - timeDiff).getTime();
              const newEndTime = new Date(endTime - timeDiff).getTime();
              changedInlineData = {
                ...item,
                point: [newTime, item.point[1]],
                left: position.left,
                width: CELL_WIDTH,
                driver: item.driver,
                startTime: newStartTime,
                endTime: newEndTime,
                time: new Date(newTime).toLocaleString(),
                
              }
              
              return changedInlineData
            }
            return item
          }),
        }
      } else {
        return v
      }
    })
    result = result.map((v) => {
      if (v.driver == inlineData.driver) {
        let updatedSeries = v.series.slice()
        updatedSeries.push(changedInlineData)
        return { ...v, series: updatedSeries }
      }
      return v

    })
    setData([...result])

    // reset coordinates after dragging
    //resetPointsMapping(inlineData, inlineIndex, changedInlineData)
  }

  // Function to handle button click and increase block width
  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    seriesIndex: number,
    blockIndex: number
  ) => {
    event.stopPropagation(); // Prevent parent event from firing
    const newDataList = dataList.map((item, dataIndex) => {
      if (dataIndex === seriesIndex) {
        // Increase block width by 5
        return {
          ...item,
          series: item.series.map((v: seriesProps, index: number) => {
            if (index === blockIndex) {
              const increaseWidthBy = 5; // Increase width by 5 units
              const newWidth = v.width + increaseWidthBy;
  
              // Calculate new start and end times based on the increased width
              const increaseInSeconds = increaseWidthBy * stepSeconds;
              
              const newEndTime = v.endTime + increaseInSeconds * 1000;
  
              // Log the new mapping to the console
            const newMapping = {
              ...v,
              width: newWidth,
              endTime: newEndTime,
              time: new Date(newEndTime).toLocaleString(),
            };
            console.log('New Mapping:', newMapping);

            return newMapping;
            }
            return v;
          }),
        };
      }
      return item;
    });
    setData(newDataList);
  
};

  // initial graph
  function initCharts() {
    // initial dragging component
    $('.dragItem').draggable({
      containment: 'parent',
      axis: 'x',
      cursor: 'move',
      stop: function (data: any, data1: any) {
        // stop dragging event. Initiate when draggign operation completes

        //corresponding dragging object
        var zj = data1.helper
        var mostTouchDom = getMostTouchDom(zj)
        let curDistance = 0
        if (mostTouchDom != false) {
          if (mostTouchDom.touchRange >= 0) {
            if (
              !eachItemsLR(
                0,
                zj[0],
                mostTouchDom.dom,
                0,
                $(mostTouchDom.dom).position().left - zj.outerWidth()
              )
            ) {
              curDistance = $(mostTouchDom.dom).position().left - zj.outerWidth()
              zj.css('left', curDistance)
            } else {
              curDistance = data1.originalPosition.left
              zj.css('left', data1.originalPosition.left)
            }
          } else {
            if (
              !eachItemsLR(
                0,
                zj[0],
                mostTouchDom.dom,
                1,
                $(mostTouchDom.dom).position().left +
                  $(mostTouchDom.dom).outerWidth() +
                  zj.outerWidth(),
                zj.parent()
              )
            ) {
              curDistance = $(mostTouchDom.dom).position().left + $(mostTouchDom.dom).outerWidth()
              zj.css('left', curDistance)
            } else {
              curDistance = data1.originalPosition.left
              zj.css('left', curDistance)
            }
          }
        }
        dragBlock(data1, curDistance)
      },
    })

    function eachItemsLR(type, item, target, lr, can, box) {
      var bool = false
      var boxRight = typeof box == 'undefined' ? false : box.width()
      $(item)
        .parent()
        .find('.dragItem')
        .each(function () {
          if (item != this && target != this) {
            if (lr == 0) {
              bool = checkPoint(
                type ? $(item).position().left : $(target).position().left - $(item).outerWidth(),
                $(target).position().left,
                $(this).position().left,
                $(this).position().left + $(this).outerWidth()
              )

              if (bool) {
                return false
              }
            } else {
              bool = checkPoint(
                $(target).position().left + $(target).outerWidth(),
                $(target).position().left + $(target).outerWidth() + $(item).outerWidth(),
                $(this).position().left,
                $(this).position().left + $(this).outerWidth()
              )
              if (bool) {
                return false
              }
            }
            if (bool) {
              return false
            }
          }
        })
      return bool || can < 0 || (boxRight === false ? false : can > box.width())
    }
    function getMostTouchDom(zj: any) {
      var choseList: any = []
      zj.parent()
        .find('.dragItem')
        .each(function () {
          if (zj[0] != this) {
            var result = situation(zj, $(this))
            if (result[0] < 4 && result[0] >= 0) {
              choseList.push({
                touchAbs: Math.abs(result[1]),
                dom: this,
                touchRange: result[1],
              })
            }
          }
        })
      if (choseList.length == 0) {
        return false
      }
      choseList.sort(function (a: any, b: any) {
        return a.touchAbs - b.touchAbs
      })
      return choseList[0]
    }

    function situation(a: any, b: any) {
      var aLeft = a.position().left
      var aRight = aLeft + a.outerWidth()
      var bLeft = b.position().left
      var bRight = bLeft + b.outerWidth()

      var l_r = bRight + bLeft - (aRight + aLeft)
      if (aLeft >= bLeft && aRight <= bRight) {
        return [0, l_r]
      }
      if (bLeft >= aLeft && bRight <= aRight) {
        return [1, l_r]
      }
      if (
        (bLeft >= aLeft && bLeft < aRight && bRight > aRight) ||
        (aRight > bLeft && aRight <= bRight && aLeft < bLeft)
      ) {
        return [2, l_r]
      }
      if (
        (bRight > aLeft && bRight <= aRight && bLeft < aLeft) ||
        (aLeft >= bLeft && aLeft < bRight && aRight > bRight)
      ) {
        return [3, l_r]
      }
      return [4, l_r]
    }

    function checkPoint(aLeft: number, aRight: number, bLeft: number, bRight: number) {
      return (
        (aLeft >= bLeft && aRight <= bRight) ||
        (bLeft >= aLeft && bRight <= aRight) ||
        (bLeft >= aLeft && bLeft < aRight && bRight > aRight) ||
        (aRight > bLeft && aRight <= bRight && aLeft < bLeft) ||
        (bRight > aLeft && bRight <= aRight && bLeft < aLeft) ||
        (aLeft >= bLeft && aLeft < bRight && aRight > bRight)
      )
    }
  }

  function moveToView() {
    let { hours, minutes } = formatTime(new Date())
    let currentTime = new Date().getTime()
    let elapsedMinutes = (currentTime - interfaceStartTime) / (1000 * 60)
    const element = document.querySelector('.table')
    let leftDistance = elapsedMinutes * CELL_WIDTH
    //let leftDistance = (pointM - interfaceStartTime) / (1000 * 60) * CELL_WIDTH

    if (element) {
      element.scrollLeft = leftDistance
    }
  }

  useEffect(() => {
    setTimeout(() => {
      initCharts()
    })
  }, [dataList])

  useEffect(() => {
    if (isModalOpen) {
      moveToView()
    }
  }, [isModalOpen])

  function collectTimeSpan(series: seriesProps, startPosition: number, endPosition: number) {
    //@ts-ignore
    let startData = series[startPosition]

    //@ts-ignore
    let endData = series[endPosition]
    return {
      ...startData,
      endTime: endData.endTime,
      startPosition,
      endPosition,
    }
  }

  function sublevelData(pointMapping: any) {
    pointMapping = pointMapping ?? {}
    let sublevelArr: any[] = []
    let curIndex = 0
    Object.keys(pointMapping).forEach((v) => {
      curIndex = 0
      let seriesData = pointMapping[v]
      seriesData.forEach((series: any, seriesIndex: number) => {
        if (series.break && curIndex < seriesData.length) {
          let span = collectTimeSpan(seriesData, curIndex, seriesIndex)
          sublevelArr.push({
            series: [{ ...span }],
            driver: v,
          })
          console.log("Series:", series);
          curIndex = seriesIndex + 1
        }
      })
    })

    let result: Record<string, any> = {}
    Object.keys(sublevelArr).forEach((v: any) => {
      const key = sublevelArr[v].driver
      if (!result[key]) result[key] = sublevelArr[v]
      else result[key].series = result[key].series.concat(sublevelArr[v].series)
    })

    return Object.values(result)
  }

  function normalizeOption(stepData: any) {
    if (!stepData.length) return []
    return stepData.map((point: any) => {
      return {
        driver: point.driver,
        series: point.series.map((v: seriesProps) => {
          let { hours, minutes, seconds } = formatTime(v.startTime)
          let elapsedTime = new Date().getTime() - interfaceStartTime
          let elapsedMinutes = elapsedTime / (1000*60)
          let customStartTimeDiff = elapsedMinutes
          return {
            ...v,
            driver: point.driver,
            left:
              v.left ||
              Math.trunc(
                (v.startTime - interfaceStartTime) / (1000 * 60) * CELL_WIDTH
              ),
            width: v.width || Math.ceil(((v.endTime - v.startTime) / 1000 / 60) * CELL_WIDTH),
          }
        }),
      }
    })
  }

  useEffect(() => {
    let stepData = sublevelData(props.pointMapping)
    let data = normalizeOption(stepData)
    setData(data)
  }, [props.dep])

  return (
    <div className="table-box">
      <div className="table">
        <div
          className="table-body"
          style={{
            width: timeSpan.length * CELL_WIDTH + SUBTITLE_WIDTH * 2 + 'px',
          }}
        >
          <div className="tr tb">
            <div className="tr-left">
              <div className="td" style={{ width: SUBTITLE_WIDTH * 2 + 'px' }}></div>
            </div>
            <div className="tr-right">
              <div className="td day-title0">{new Date().toLocaleDateString()}</div>
            </div>
          </div>

          <div className="tr head">
            <div className="tr-left">
              <div className="td">No.</div>
              <div className="td">Object ID</div>
            </div>
            <div className="tr-right" style={{ width: timeSpan.length * CELL_WIDTH + 'px' }}>
              {timeSpan.map((clock, index) => (
                <div key={index} className="td">
                  {clock}
                </div>
              ))}
            </div>
          </div>

          {dataList.map((item, index) => {
            return (
              <div key={index} className="tr tb">
                <div className="tr-left">
                  <div className="td">{index + 1}</div>
                  <Tooltip title={item.driver} key={index}>
                    <div className="td" title={item.driver}>
                      {item.series[0].label}
                    </div>
                  </Tooltip>
                </div>
                <div className="tr-right">
                  {item.series.map((v: seriesProps, seriesIndex: number) => {
                    return (
                      <Tooltip
                        title={`${new Date(v.startTime).toLocaleTimeString()} - ${new Date(
                          v.endTime
                        ).toLocaleTimeString()}`}
                        key={seriesIndex}
                      >
                        <div
                          key={seriesIndex}
                          data-block={JSON.stringify(v)}
                          data-index={v.label}
                          className="dragItem"
                          style={{ left: `${v.left}px`, width: `${v.width}px`, backgroundColor: item.series[0].color, overflow: 'auto', resize: 'horizontal', cursor: 'ew-resize'}}
                        >
                        <button
                          onClick={(e) => handleButtonClick(e, index, seriesIndex)}
                            style={{
                              position: 'absolute',
                              top: '0',
                              right: '0',
                              padding: '5px 10px',
                              backgroundColor: 'blue',
                              color: 'white',
                              border: 'none',
                              borderRadius: '2px',
                              cursor: 'pointer'
                            }}
                            > </button>
                          {/* <div className="dragBox">{v.label}</div> */}
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}