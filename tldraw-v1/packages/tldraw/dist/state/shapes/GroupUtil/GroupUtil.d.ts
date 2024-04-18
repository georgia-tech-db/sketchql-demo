import * as React from 'react';
import { TDShapeUtil } from '~state/shapes/TDShapeUtil';
import { GroupShape, TDShapeType } from '~types';
declare type T = GroupShape;
declare type E = SVGSVGElement;
export declare class GroupUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Group;
    canBind: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<TLComponentProps<T_1, E_1, M_1>, "isGhost" | "meta" | "bounds" | "isEditing" | "shape" | "events" | "onShapeChange" | "onShapeBlur" | "asset" | "isBinding" | "isHovered" | "isSelected" | "isChildOfSelected"> & React.RefAttributes<SVGSVGElement>>;
    Indicator: (props: {
        shape: GroupShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: TLBounds;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
}
export {};
//# sourceMappingURL=GroupUtil.d.ts.map