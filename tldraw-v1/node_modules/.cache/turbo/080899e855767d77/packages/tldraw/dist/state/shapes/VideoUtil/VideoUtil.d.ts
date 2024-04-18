import * as React from 'react';
import { TDShapeUtil } from '~state/shapes/TDShapeUtil';
import { transformRectangle, transformSingleRectangle } from '~state/shapes/shared';
import { TDShapeType, VideoShape } from '~types';
declare type T = VideoShape;
declare type E = HTMLDivElement;
export declare class VideoUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Video;
    canBind: boolean;
    canEdit: boolean;
    canClone: boolean;
    isAspectRatioLocked: boolean;
    showCloneHandles: boolean;
    isStateful: boolean;
    getShape: (props: Partial<T>) => T;
    Component: React.ForwardRefExoticComponent<Pick<TLComponentProps<T_1, E_1, M_1>, "isGhost" | "meta" | "bounds" | "isEditing" | "shape" | "events" | "onShapeChange" | "onShapeBlur" | "asset" | "isBinding" | "isHovered" | "isSelected" | "isChildOfSelected"> & React.RefAttributes<HTMLDivElement>>;
    Indicator: (props: {
        shape: VideoShape;
        meta: any;
        isHovered: boolean;
        isSelected: boolean;
        bounds: TLBounds;
    }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    getBounds: (shape: T) => TLBounds;
    shouldRender: (prev: T, next: T) => boolean;
    getSvgElement: (shape: VideoShape) => SVGImageElement;
    transform: typeof transformRectangle;
    transformSingle: typeof transformSingleRectangle;
}
export {};
//# sourceMappingURL=VideoUtil.d.ts.map