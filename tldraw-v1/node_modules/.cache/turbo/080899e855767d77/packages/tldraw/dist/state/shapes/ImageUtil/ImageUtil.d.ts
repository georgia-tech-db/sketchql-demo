import * as React from 'react';
import { TDShapeUtil } from '~state/shapes/TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '~state/shapes/shared';
import { ImageShape, TDShapeType } from '~types';
declare type T = ImageShape;
declare type E = HTMLDivElement;
export declare class ImageUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Image;
    canBind: boolean;
    canClone: boolean;
    isAspectRatioLocked: boolean;
    showCloneHandles: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<TLComponentProps<T_1, E_1, M_1>, "isGhost" | "meta" | "bounds" | "isEditing" | "shape" | "events" | "onShapeChange" | "onShapeBlur" | "asset" | "isBinding" | "isHovered" | "isSelected" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: ImageShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: TLBounds;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
    getSvgElement: (shape: ImageShape) => SVGImageElement;
}
export {};
//# sourceMappingURL=ImageUtil.d.ts.map