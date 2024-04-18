import { TDShapeType, TDToolType } from '~types';
import { ArrowTool } from '../../../src/state/tools/ArrowTool';
import { DrawTool } from '../../../src/state/tools/DrawTool';
import { EllipseTool } from '../../../src/state/tools/EllipseTool';
import { EraseTool } from '../../../src/state/tools/EraseTool';
import { LineTool } from '../../../src/state/tools/LineTool';
import { RectangleTool } from '../../../src/state/tools/RectangleTool';
import { SelectTool } from '../../../src/state/tools/SelectTool';
import { StickyTool } from '../../../src/state/tools/StickyTool';
import { TextTool } from '../../../src/state/tools/TextTool';
import { TriangleTool } from '../../../src/state/tools/TriangleTool';
export interface ToolsMap {
    select: typeof SelectTool;
    erase: typeof EraseTool;
    [TDShapeType.Text]: typeof TextTool;
    [TDShapeType.Draw]: typeof DrawTool;
    [TDShapeType.Ellipse]: typeof EllipseTool;
    [TDShapeType.Rectangle]: typeof RectangleTool;
    [TDShapeType.Triangle]: typeof TriangleTool;
    [TDShapeType.Line]: typeof LineTool;
    [TDShapeType.Arrow]: typeof ArrowTool;
    [TDShapeType.Sticky]: typeof StickyTool;
}
export declare type ToolOfType<K extends TDToolType> = ToolsMap[K];
export declare type ArgsOfType<K extends TDToolType> = ConstructorParameters<ToolOfType<K>>;
export declare const tools: {
    [K in TDToolType]: ToolsMap[K];
};
//# sourceMappingURL=index.d.ts.map