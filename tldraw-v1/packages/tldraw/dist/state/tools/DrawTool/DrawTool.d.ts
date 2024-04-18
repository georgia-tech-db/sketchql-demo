import { TLPointerEventHandler } from '@tldraw/core';
import { BaseTool } from '~state/tools/BaseTool';
import { TDShapeType } from '~types';
export declare class DrawTool extends BaseTool {
    type: TDShapeType.Draw;
    private lastShapeId?;
    onEnter: () => void;
    onCancel: () => void;
    onPointerDown: TLPointerEventHandler;
    onPointerMove: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
}
//# sourceMappingURL=DrawTool.d.ts.map