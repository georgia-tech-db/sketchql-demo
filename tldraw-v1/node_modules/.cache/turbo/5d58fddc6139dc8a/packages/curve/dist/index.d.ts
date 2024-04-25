export interface TLBezierCurveSegment {
    start: number[];
    tangentStart: number[];
    normalStart: number[];
    pressureStart: number;
    end: number[];
    tangentEnd: number[];
    normalEnd: number[];
    pressureEnd: number;
}
/**
 * Get bezier curve segments that pass through an array of points.
 * @param points
 * @param tension
 */
export declare function getTLBezierCurveSegments(points: number[][], tension?: number): TLBezierCurveSegment[];
/**
 * Evaluate a 2d cubic bezier at a point t on the x axis.
 * @param tx
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
export declare function cubicBezier(tx: number, x1: number, y1: number, x2: number, y2: number): number;
/**
 * Get a bezier curve data for a spline that fits an array of points.
 * @param points An array of points formatted as [x, y]
 * @param k Tension
 */
export declare function getSpline(pts: number[][], k?: number): number[][];
/**
 * Find a point along a curve segment, via pomax.
 * @param t
 * @param points [cpx1, cpy1, cpx2, cpy2, px, py][]
 */
export declare function computePointOnSpline(t: number, points: number[][]): number[];
/**
 * Get a bezier curve data for a spline that fits an array of points.
 * @param pts
 * @param tension
 * @param isClosed
 * @param numOfSegments
 */
export declare function getCurvePoints(pts: number[][], tension?: number, isClosed?: boolean, numOfSegments?: number): number[][];
/**
 * Simplify a line (using Ramer-Douglas-Peucker algorithm).
 * @param points An array of points as [x, y, ...][]
 * @param tolerance The minimum line distance (also called epsilon).
 * @returns Simplified array as [x, y, ...][]
 */
export declare function simplify(points: number[][], tolerance?: number): number[][];
//# sourceMappingURL=index.d.ts.map