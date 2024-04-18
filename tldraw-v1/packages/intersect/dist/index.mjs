var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
import { Vec } from "@tldraw/vec";
function createIntersection(message, ...points) {
  const didIntersect = points.length > 0;
  return { didIntersect, message, points };
}
function getRectangleSides(point, size, rotation = 0) {
  const center = [point[0] + size[0] / 2, point[1] + size[1] / 2];
  const tl = Vec.rotWith(point, center, rotation);
  const tr = Vec.rotWith(Vec.add(point, [size[0], 0]), center, rotation);
  const br = Vec.rotWith(Vec.add(point, size), center, rotation);
  const bl = Vec.rotWith(Vec.add(point, [0, size[1]]), center, rotation);
  return [
    ["top", [tl, tr]],
    ["right", [tr, br]],
    ["bottom", [br, bl]],
    ["left", [bl, tl]]
  ];
}
function isAngleBetween(a, b, c) {
  if (c === a || c === b)
    return true;
  const PI2 = Math.PI * 2;
  const AB = (b - a + PI2) % PI2;
  const AC = (c - a + PI2) % PI2;
  return AB <= Math.PI !== AC > AB;
}
function intersectLineLine(AB, PQ) {
  const slopeAB = Vec.slope(AB[0], AB[1]);
  const slopePQ = Vec.slope(PQ[0], PQ[1]);
  if (slopeAB === slopePQ)
    return void 0;
  if (Number.isNaN(slopeAB) && !Number.isNaN(slopePQ)) {
    return [AB[0][0], (AB[0][0] - PQ[0][0]) * slopePQ + PQ[0][1]];
  }
  if (Number.isNaN(slopePQ) && !Number.isNaN(slopeAB)) {
    return [PQ[0][0], (PQ[0][0] - AB[0][0]) * slopeAB + AB[0][1]];
  }
  const x = (slopeAB * AB[0][0] - slopePQ * PQ[0][0] + PQ[0][1] - AB[0][1]) / (slopeAB - slopePQ);
  const y = slopePQ * (x - PQ[0][0]) + PQ[0][1];
  return [x, y];
}
function intersectRayRay(p0, n0, p1, n1) {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const det = n1[0] * n0[1] - n1[1] * n0[0];
  const u = (dy * n1[0] - dx * n1[1]) / det;
  const v = (dy * n0[0] - dx * n0[1]) / det;
  if (u < 0 || v < 0)
    return createIntersection("miss");
  const m0 = n0[1] / n0[0];
  const m1 = n1[1] / n1[0];
  const b0 = p0[1] - m0 * p0[0];
  const b1 = p1[1] - m1 * p1[0];
  const x = (b1 - b0) / (m0 - m1);
  const y = m0 * x + b0;
  return Number.isFinite(x) ? createIntersection("intersection", [x, y]) : createIntersection("parallel");
}
function intersectRayLineSegment(origin, direction, a1, a2) {
  const [x, y] = origin;
  const [dx, dy] = direction;
  const [x1, y1] = a1;
  const [x2, y2] = a2;
  if (dy / dx !== (y2 - y1) / (x2 - x1)) {
    const d = dx * (y2 - y1) - dy * (x2 - x1);
    if (d !== 0) {
      const r = ((y - y1) * (x2 - x1) - (x - x1) * (y2 - y1)) / d;
      const s = ((y - y1) * dx - (x - x1) * dy) / d;
      if (r >= 0 && s >= 0 && s <= 1) {
        return createIntersection("intersection", [x + r * dx, y + r * dy]);
      }
    }
  }
  return createIntersection("no intersection");
}
function intersectRayRectangle(origin, direction, point, size, rotation = 0) {
  return intersectRectangleRay(point, size, rotation, origin, direction);
}
function intersectRayEllipse(origin, direction, center, rx, ry, rotation) {
  const a1 = origin;
  const a2 = Vec.mul(direction, 999999999);
  return intersectLineSegmentEllipse(a1, a2, center, rx, ry, rotation);
}
function intersectRayBounds(origin, direction, bounds, rotation = 0) {
  const { minX, minY, width, height } = bounds;
  return intersectRayRectangle(origin, direction, [minX, minY], [width, height], rotation);
}
function intersectLineSegmentRay(a1, a2, origin, direction) {
  return intersectRayLineSegment(origin, direction, a1, a2);
}
function intersectLineSegmentLineSegment(a1, a2, b1, b2) {
  const AB = Vec.sub(a1, b1);
  const BV = Vec.sub(b2, b1);
  const AV = Vec.sub(a2, a1);
  const ua_t = BV[0] * AB[1] - BV[1] * AB[0];
  const ub_t = AV[0] * AB[1] - AV[1] * AB[0];
  const u_b = BV[1] * AV[0] - BV[0] * AV[1];
  if (ua_t === 0 || ub_t === 0) {
    return createIntersection("coincident");
  }
  if (u_b === 0) {
    return createIntersection("parallel");
  }
  if (u_b !== 0) {
    const ua = ua_t / u_b;
    const ub = ub_t / u_b;
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
      return createIntersection("intersection", Vec.add(a1, Vec.mul(AV, ua)));
    }
  }
  return createIntersection("no intersection");
}
function intersectLineSegmentRectangle(a1, a2, point, size) {
  return intersectRectangleLineSegment(point, size, a1, a2);
}
function intersectLineSegmentArc(a1, a2, center, radius, start, end) {
  const sa = Vec.angle(center, start);
  const ea = Vec.angle(center, end);
  const ellipseTest = intersectEllipseLineSegment(center, radius, radius, 0, a1, a2);
  if (!ellipseTest.didIntersect)
    return createIntersection("no intersection");
  const points = ellipseTest.points.filter(
    (point) => isAngleBetween(sa, ea, Vec.angle(center, point))
  );
  if (points.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectLineSegmentCircle(a1, a2, c, r) {
  const a = (a2[0] - a1[0]) * (a2[0] - a1[0]) + (a2[1] - a1[1]) * (a2[1] - a1[1]);
  const b = 2 * ((a2[0] - a1[0]) * (a1[0] - c[0]) + (a2[1] - a1[1]) * (a1[1] - c[1]));
  const cc = c[0] * c[0] + c[1] * c[1] + a1[0] * a1[0] + a1[1] * a1[1] - 2 * (c[0] * a1[0] + c[1] * a1[1]) - r * r;
  const deter = b * b - 4 * a * cc;
  if (deter < 0) {
    return createIntersection("outside");
  }
  if (deter === 0) {
    return createIntersection("tangent");
  }
  const e = Math.sqrt(deter);
  const u1 = (-b + e) / (2 * a);
  const u2 = (-b - e) / (2 * a);
  if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
    if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
      return createIntersection("outside");
    } else {
      return createIntersection("inside");
    }
  }
  const results = [];
  if (0 <= u1 && u1 <= 1)
    results.push(Vec.lrp(a1, a2, u1));
  if (0 <= u2 && u2 <= 1)
    results.push(Vec.lrp(a1, a2, u2));
  return createIntersection("intersection", ...results);
}
function intersectLineSegmentEllipse(a1, a2, center, rx, ry, rotation = 0) {
  if (rx === 0 || ry === 0 || Vec.isEqual(a1, a2)) {
    return createIntersection("no intersection");
  }
  rx = rx < 0 ? rx : -rx;
  ry = ry < 0 ? ry : -ry;
  a1 = Vec.sub(Vec.rotWith(a1, center, -rotation), center);
  a2 = Vec.sub(Vec.rotWith(a2, center, -rotation), center);
  const diff = Vec.sub(a2, a1);
  const A = diff[0] * diff[0] / rx / rx + diff[1] * diff[1] / ry / ry;
  const B = 2 * a1[0] * diff[0] / rx / rx + 2 * a1[1] * diff[1] / ry / ry;
  const C = a1[0] * a1[0] / rx / rx + a1[1] * a1[1] / ry / ry - 1;
  const tValues = [];
  const discriminant = B * B - 4 * A * C;
  if (discriminant === 0) {
    tValues.push(-B / 2 / A);
  } else if (discriminant > 0) {
    const root = Math.sqrt(discriminant);
    tValues.push((-B + root) / 2 / A);
    tValues.push((-B - root) / 2 / A);
  }
  const points = tValues.filter((t) => t >= 0 && t <= 1).map((t) => Vec.add(center, Vec.add(a1, Vec.mul(Vec.sub(a2, a1), t)))).map((p) => Vec.rotWith(p, center, rotation));
  return createIntersection("intersection", ...points);
}
function intersectLineSegmentBounds(a1, a2, bounds) {
  return intersectBoundsLineSegment(bounds, a1, a2);
}
function intersectLineSegmentPolyline(a1, a2, points) {
  const pts = [];
  for (let i = 1; i < points.length; i++) {
    const int = intersectLineSegmentLineSegment(a1, a2, points[i - 1], points[i]);
    if (int) {
      pts.push(...int.points);
    }
  }
  if (pts.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectLineSegmentPolygon(a1, a2, points) {
  const pts = [];
  for (let i = 1; i < points.length + 1; i++) {
    const int = intersectLineSegmentLineSegment(a1, a2, points[i - 1], points[i % points.length]);
    if (int) {
      pts.push(...int.points);
    }
  }
  if (pts.length === 0) {
    return createIntersection("no intersection");
  }
  return createIntersection("intersection", ...points);
}
function intersectRectangleRay(point, size, rotation, origin, direction) {
  const sideIntersections = getRectangleSides(point, size, rotation).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectRayLineSegment(origin, direction, a1, a2);
      if (intersection) {
        acc.push(createIntersection(message, ...intersection.points));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleLineSegment(point, size, a1, a2) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [b1, b2]]) => {
      const intersection = intersectLineSegmentLineSegment(a1, a2, b1, b2);
      if (intersection) {
        acc.push(createIntersection(message, ...intersection.points));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleRectangle(point1, size1, point2, size2) {
  const sideIntersections = getRectangleSides(point1, size1).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersections = intersectRectangleLineSegment(point2, size2, a1, a2);
      acc.push(
        ...intersections.map(
          (int) => createIntersection(`${message} ${int.message}`, ...int.points)
        )
      );
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleArc(point, size, center, radius, start, end) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectArcLineSegment(center, radius, start, end, a1, a2);
      if (intersection) {
        acc.push(__spreadProps(__spreadValues({}, intersection), { message }));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleCircle(point, size, c, r) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectLineSegmentCircle(a1, a2, c, r);
      if (intersection) {
        acc.push(__spreadProps(__spreadValues({}, intersection), { message }));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleEllipse(point, size, c, rx, ry, rotation = 0) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectLineSegmentEllipse(a1, a2, c, rx, ry, rotation);
      if (intersection) {
        acc.push(__spreadProps(__spreadValues({}, intersection), { message }));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectangleBounds(point, size, bounds) {
  const { minX, minY, width, height } = bounds;
  return intersectRectangleRectangle(point, size, [minX, minY], [width, height]);
}
function intersectRectanglePolyline(point, size, points) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectLineSegmentPolyline(a1, a2, points);
      if (intersection.didIntersect) {
        acc.push(createIntersection(message, ...intersection.points));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectRectanglePolygon(point, size, points) {
  const sideIntersections = getRectangleSides(point, size).reduce(
    (acc, [message, [a1, a2]]) => {
      const intersection = intersectLineSegmentPolygon(a1, a2, points);
      if (intersection.didIntersect) {
        acc.push(createIntersection(message, ...intersection.points));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function intersectArcLineSegment(center, radius, start, end, a1, a2) {
  return intersectLineSegmentArc(a1, a2, center, radius, start, end);
}
function intersectArcRectangle(center, radius, start, end, point, size) {
  return intersectRectangleArc(point, size, center, radius, start, end);
}
function intersectArcBounds(center, radius, start, end, bounds) {
  const { minX, minY, width, height } = bounds;
  return intersectArcRectangle(center, radius, start, end, [minX, minY], [width, height]);
}
function intersectCircleLineSegment(c, r, a1, a2) {
  return intersectLineSegmentCircle(a1, a2, c, r);
}
function intersectCircleCircle(c1, r1, c2, r2) {
  let dx = c2[0] - c1[0], dy = c2[1] - c1[1];
  const d = Math.sqrt(dx * dx + dy * dy), x = (d * d - r2 * r2 + r1 * r1) / (2 * d), y = Math.sqrt(r1 * r1 - x * x);
  dx /= d;
  dy /= d;
  return createIntersection(
    "intersection",
    [c1[0] + dx * x - dy * y, c1[1] + dy * x + dx * y],
    [c1[0] + dx * x + dy * y, c1[1] + dy * x - dx * y]
  );
}
function intersectCircleRectangle(c, r, point, size) {
  return intersectRectangleCircle(point, size, c, r);
}
function intersectCircleBounds(c, r, bounds) {
  const { minX, minY, width, height } = bounds;
  return intersectCircleRectangle(c, r, [minX, minY], [width, height]);
}
function intersectEllipseRay(center, rx, ry, rotation, point, direction) {
  return intersectRayEllipse(point, direction, center, rx, ry, rotation);
}
function intersectEllipseLineSegment(center, rx, ry, rotation = 0, a1, a2) {
  if (rx === ry) {
    return intersectLineSegmentCircle(a1, a2, center, rx);
  }
  return intersectLineSegmentEllipse(a1, a2, center, rx, ry, rotation);
}
function intersectEllipseRectangle(center, rx, ry, rotation = 0, point, size) {
  if (rx === ry) {
    return intersectRectangleCircle(point, size, center, rx);
  }
  return intersectRectangleEllipse(point, size, center, rx, ry, rotation);
}
function intersectEllipseEllipse(_c1, _rx1, _ry1, _r1, _c2, _rx2, _ry2, _r2) {
  return createIntersection("no intersection");
}
function intersectEllipseCircle(c, rx, ry, rotation, c2, r2) {
  return intersectEllipseEllipse(c, rx, ry, rotation, c2, r2, r2, 0);
}
function intersectEllipseBounds(c, rx, ry, rotation, bounds) {
  const { minX, minY, width, height } = bounds;
  return intersectEllipseRectangle(c, rx, ry, rotation, [minX, minY], [width, height]);
}
function intersectBoundsRay(bounds, origin, direction) {
  const { minX, minY, width, height } = bounds;
  return intersectRayRectangle(origin, direction, [minX, minY], [width, height]);
}
function intersectBoundsLineSegment(bounds, a1, a2) {
  const { minX, minY, width, height } = bounds;
  return intersectLineSegmentRectangle(a1, a2, [minX, minY], [width, height]);
}
function intersectBoundsRectangle(bounds, point, size) {
  const { minX, minY, width, height } = bounds;
  return intersectRectangleRectangle(point, size, [minX, minY], [width, height]);
}
function intersectBoundsBounds(bounds1, bounds2) {
  return intersectRectangleRectangle(
    [bounds1.minX, bounds1.minY],
    [bounds1.width, bounds1.height],
    [bounds2.minX, bounds2.minY],
    [bounds2.width, bounds2.height]
  );
}
function intersectBoundsArc(bounds, center, radius, start, end) {
  const { minX, minY, width, height } = bounds;
  return intersectArcRectangle(center, radius, start, end, [minX, minY], [width, height]);
}
function intersectBoundsCircle(bounds, c, r) {
  const { minX, minY, width, height } = bounds;
  return intersectCircleRectangle(c, r, [minX, minY], [width, height]);
}
function intersectBoundsEllipse(bounds, c, rx, ry, rotation = 0) {
  const { minX, minY, width, height } = bounds;
  return intersectEllipseRectangle(c, rx, ry, rotation, [minX, minY], [width, height]);
}
function intersectBoundsPolyline(bounds, points) {
  return intersectPolylineBounds(points, bounds);
}
function intersectBoundsPolygon(bounds, points) {
  return intersectPolygonBounds(points, bounds);
}
function intersectPolylineLineSegment(points, a1, a2) {
  return intersectLineSegmentPolyline(a1, a2, points);
}
function intersectPolylineRectangle(points, point, size) {
  return intersectRectanglePolyline(point, size, points);
}
function intersectPolylineBounds(points, bounds) {
  return intersectRectanglePolyline(
    [bounds.minX, bounds.minY],
    [bounds.width, bounds.height],
    points
  );
}
function intersectPolygonLineSegment(points, a1, a2) {
  return intersectLineSegmentPolyline(a1, a2, points);
}
function intersectPolygonRectangle(points, point, size) {
  return intersectRectanglePolyline(point, size, points);
}
function intersectPolygonBounds(points, bounds) {
  return intersectRectanglePolygon(
    [bounds.minX, bounds.minY],
    [bounds.width, bounds.height],
    points
  );
}
function intersectRayPolygon(origin, direction, points) {
  const sideIntersections = pointsToLineSegments(points, true).reduce(
    (acc, [a1, a2], i) => {
      const intersection = intersectRayLineSegment(origin, direction, a1, a2);
      if (intersection) {
        acc.push(createIntersection(i.toString(), ...intersection.points));
      }
      return acc;
    },
    []
  );
  return sideIntersections.filter((int) => int.didIntersect);
}
function pointsToLineSegments(points, closed = false) {
  const segments = [];
  for (let i = 1; i < points.length; i++)
    segments.push([points[i - 1], points[i]]);
  if (closed)
    segments.push([points[points.length - 1], points[0]]);
  return segments;
}
export {
  intersectArcBounds,
  intersectArcLineSegment,
  intersectArcRectangle,
  intersectBoundsArc,
  intersectBoundsBounds,
  intersectBoundsCircle,
  intersectBoundsEllipse,
  intersectBoundsLineSegment,
  intersectBoundsPolygon,
  intersectBoundsPolyline,
  intersectBoundsRay,
  intersectBoundsRectangle,
  intersectCircleBounds,
  intersectCircleCircle,
  intersectCircleLineSegment,
  intersectCircleRectangle,
  intersectEllipseBounds,
  intersectEllipseCircle,
  intersectEllipseEllipse,
  intersectEllipseLineSegment,
  intersectEllipseRay,
  intersectEllipseRectangle,
  intersectLineLine,
  intersectLineSegmentArc,
  intersectLineSegmentBounds,
  intersectLineSegmentCircle,
  intersectLineSegmentEllipse,
  intersectLineSegmentLineSegment,
  intersectLineSegmentPolygon,
  intersectLineSegmentPolyline,
  intersectLineSegmentRay,
  intersectLineSegmentRectangle,
  intersectPolygonBounds,
  intersectPolygonLineSegment,
  intersectPolygonRectangle,
  intersectPolylineBounds,
  intersectPolylineLineSegment,
  intersectPolylineRectangle,
  intersectRayBounds,
  intersectRayEllipse,
  intersectRayLineSegment,
  intersectRayPolygon,
  intersectRayRay,
  intersectRayRectangle,
  intersectRectangleArc,
  intersectRectangleBounds,
  intersectRectangleCircle,
  intersectRectangleEllipse,
  intersectRectangleLineSegment,
  intersectRectanglePolygon,
  intersectRectanglePolyline,
  intersectRectangleRay,
  intersectRectangleRectangle,
  pointsToLineSegments
};
//# sourceMappingURL=index.mjs.map
