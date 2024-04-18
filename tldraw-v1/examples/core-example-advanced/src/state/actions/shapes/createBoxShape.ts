import { TLBoundsCorner, TLPointerInfo } from '@tldraw/core';
import { shapeUtils } from 'shapes';
import type { Action } from 'state/constants';
import { mutables } from 'state/mutables';


const generateRandomColor = (): string => {
  const randomHue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${randomHue}, 70%, 50%)`;
  return randomColor;
};

const getUserInput = (): string => {
  return prompt('Label for Object:');
};


export const createBoxShape: Action = (data, payload: TLPointerInfo) => {
  const userInput = getUserInput();

  if (userInput !== null) {
    const shape = shapeUtils.box.getShape({
      parentId: 'page1',
      point: mutables.currentPoint,
      size: [1, 1],
      childIndex: Object.values(data.page.shapes).length,
      color: generateRandomColor(),
      label: userInput, 
    });

    data.page.shapes[shape.id] = shape;
    data.pageState.selectedIds = [shape.id];

    mutables.pointedBoundsHandleId = TLBoundsCorner.BottomRight;
  }
};
