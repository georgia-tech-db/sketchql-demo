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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/components/Renderer/Renderer.tsx
import * as React43 from "react";

// src/components/Canvas/Canvas.tsx
import * as React42 from "react";

// src/components/Brush/Brush.tsx
import * as React17 from "react";

// src/components/Container/Container.tsx
import * as React16 from "react";

// src/hooks/useTLContext.tsx
import * as React from "react";
var TLContext = React.createContext({});
function useTLContext() {
  const context = React.useContext(TLContext);
  return context;
}

// src/hooks/useZoomEvents.ts
import { Vec as Vec2 } from "@tldraw/vec";
import { useGesture } from "@use-gesture/react";
import * as React2 from "react";

// src/utils/utils.ts
import { Vec } from "@tldraw/vec";

// src/types.ts
var TLPerformanceMode = /* @__PURE__ */ ((TLPerformanceMode2) => {
  TLPerformanceMode2["TransformSelected"] = "transform_selected";
  TLPerformanceMode2["TranslateSelected"] = "translate_selected";
  TLPerformanceMode2["TransformAll"] = "transform_all";
  TLPerformanceMode2["TranslateAll"] = "translate_all";
  return TLPerformanceMode2;
})(TLPerformanceMode || {});
var TLBoundsEdge = /* @__PURE__ */ ((TLBoundsEdge2) => {
  TLBoundsEdge2["Top"] = "top_edge";
  TLBoundsEdge2["Right"] = "right_edge";
  TLBoundsEdge2["Bottom"] = "bottom_edge";
  TLBoundsEdge2["Left"] = "left_edge";
  return TLBoundsEdge2;
})(TLBoundsEdge || {});
var TLBoundsCorner = /* @__PURE__ */ ((TLBoundsCorner2) => {
  TLBoundsCorner2["TopLeft"] = "top_left_corner";
  TLBoundsCorner2["TopRight"] = "top_right_corner";
  TLBoundsCorner2["BottomRight"] = "bottom_right_corner";
  TLBoundsCorner2["BottomLeft"] = "bottom_left_corner";
  return TLBoundsCorner2;
})(TLBoundsCorner || {});
var SnapPoints = /* @__PURE__ */ ((SnapPoints2) => {
  SnapPoints2["minX"] = "minX";
  SnapPoints2["midX"] = "midX";
  SnapPoints2["maxX"] = "maxX";
  SnapPoints2["minY"] = "minY";
  SnapPoints2["midY"] = "midY";
  SnapPoints2["maxY"] = "maxY";
  return SnapPoints2;
})(SnapPoints || {});

// src/utils/polyfills.ts
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
      return this.replace(str, newStr);
    }
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

// src/utils/utils.ts
var TAU = Math.PI * 2;
var _Utils = class {
  static lerp(y1, y2, mu) {
    mu = _Utils.clamp(mu, 0, 1);
    return y1 * (1 - mu) + y2 * mu;
  }
  static lerpColor(color1, color2, factor = 0.5) {
    function h2r(hex) {
      const result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return [parseInt(result2[1], 16), parseInt(result2[2], 16), parseInt(result2[3], 16)];
    }
    function r2h(rgb) {
      return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }
    const c1 = h2r(color1) || [0, 0, 0];
    const c2 = h2r(color2) || [0, 0, 0];
    const result = c1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (c2[i] - c1[i]));
    }
    return r2h(result);
  }
  static modulate(value, rangeA, rangeB, clamp = false) {
    const [fromLow, fromHigh] = rangeA;
    const [v0, v1] = rangeB;
    const result = v0 + (value - fromLow) / (fromHigh - fromLow) * (v1 - v0);
    return clamp ? v0 < v1 ? Math.max(Math.min(result, v1), v0) : Math.max(Math.min(result, v0), v1) : result;
  }
  static clamp(n, min, max) {
    return Math.max(min, typeof max !== "undefined" ? Math.min(n, max) : n);
  }
  static deepClone(obj) {
    if (obj === null)
      return obj;
    if (Array.isArray(obj)) {
      return [...obj];
    }
    if (typeof obj === "object") {
      const clone = __spreadValues({}, obj);
      Object.keys(clone).forEach(
        (key) => clone[key] = typeof obj[key] === "object" ? _Utils.deepClone(obj[key]) : obj[key]
      );
      return clone;
    }
    return obj;
  }
  static rng(seed = "") {
    let x = 0;
    let y = 0;
    let z = 0;
    let w = 0;
    function next() {
      const t = x ^ x << 11;
      x = y;
      y = z;
      z = w;
      w ^= (w >>> 19 ^ t ^ t >>> 8) >>> 0;
      return w / 4294967296;
    }
    for (let k = 0; k < seed.length + 64; k++) {
      x ^= seed.charCodeAt(k) | 0;
      next();
    }
    return next;
  }
  static pointsToLineSegments(points, closed = false) {
    const segments = [];
    for (let i = 1; i < points.length; i++)
      segments.push([points[i - 1], points[i]]);
    if (closed)
      segments.push([points[points.length - 1], points[0]]);
    return segments;
  }
  static getRectangleSides(point, size, rotation = 0) {
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
  static circleFromThreePoints(A, B, C) {
    const [x1, y1] = A;
    const [x2, y2] = B;
    const [x3, y3] = C;
    const a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
    const b = (x1 * x1 + y1 * y1) * (y3 - y2) + (x2 * x2 + y2 * y2) * (y1 - y3) + (x3 * x3 + y3 * y3) * (y2 - y1);
    const c = (x1 * x1 + y1 * y1) * (x2 - x3) + (x2 * x2 + y2 * y2) * (x3 - x1) + (x3 * x3 + y3 * y3) * (x1 - x2);
    const x = -b / (2 * a);
    const y = -c / (2 * a);
    return [x, y, Math.hypot(x - x1, y - y1)];
  }
  static perimeterOfEllipse(rx, ry) {
    const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
    const p = Math.PI * (rx + ry) * (1 + 3 * h / (10 + Math.sqrt(4 - 3 * h)));
    return p;
  }
  static shortAngleDist(a0, a1) {
    const max = Math.PI * 2;
    const da = (a1 - a0) % max;
    return 2 * da % max - da;
  }
  static longAngleDist(a0, a1) {
    return Math.PI * 2 - _Utils.shortAngleDist(a0, a1);
  }
  static lerpAngles(a0, a1, t) {
    return a0 + _Utils.shortAngleDist(a0, a1) * t;
  }
  static angleDelta(a0, a1) {
    return _Utils.shortAngleDist(a0, a1);
  }
  static getSweep(C, A, B) {
    return _Utils.angleDelta(Vec.angle(C, A), Vec.angle(C, B));
  }
  static clampRadians(r) {
    return (Math.PI * 2 + r) % (Math.PI * 2);
  }
  static snapAngleToSegments(r, segments) {
    const seg = Math.PI * 2 / segments;
    return Math.floor((_Utils.clampRadians(r) + seg / 2) / seg) * seg;
  }
  static isAngleBetween(a, b, c) {
    if (c === a || c === b)
      return true;
    const AB = (b - a + TAU) % TAU;
    const AC = (c - a + TAU) % TAU;
    return AB <= Math.PI !== AC > AB;
  }
  static degreesToRadians(d) {
    return d * Math.PI / 180;
  }
  static radiansToDegrees(r) {
    return r * 180 / Math.PI;
  }
  static getArcLength(C, r, A, B) {
    const sweep = _Utils.getSweep(C, A, B);
    return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
  }
  static getSweepFlag(A, B, C) {
    const angleAC = Vec.angle(A, C);
    const angleAB = Vec.angle(A, B);
    const angleCAB = (angleAB - angleAC + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return angleCAB > 0 ? 0 : 1;
  }
  static getLargeArcFlag(A, C, P) {
    const anglePA = Vec.angle(P, A);
    const anglePC = Vec.angle(P, C);
    const angleAPC = (anglePC - anglePA + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return Math.abs(angleAPC) > Math.PI / 2 ? 0 : 1;
  }
  static getArcDashOffset(C, r, A, B, step) {
    const del0 = _Utils.getSweepFlag(C, A, B);
    const len0 = _Utils.getArcLength(C, r, A, B);
    const off0 = del0 < 0 ? len0 : 2 * Math.PI * C[2] - len0;
    return -off0 / 2 + step;
  }
  static getEllipseDashOffset(A, step) {
    const c = 2 * Math.PI * A[2];
    return -c / 2 + -step;
  }
  static pointInCircle(A, C, r) {
    return Vec.dist(A, C) <= r;
  }
  static pointInEllipse(A, C, rx, ry, rotation = 0) {
    rotation = rotation || 0;
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    const delta = Vec.sub(A, C);
    const tdx = cos * delta[0] + sin * delta[1];
    const tdy = sin * delta[0] - cos * delta[1];
    return tdx * tdx / (rx * rx) + tdy * tdy / (ry * ry) <= 1;
  }
  static pointInRect(point, size) {
    return !(point[0] < size[0] || point[0] > point[0] + size[0] || point[1] < size[1] || point[1] > point[1] + size[1]);
  }
  static pointInPolygon(p, points) {
    let wn = 0;
    points.forEach((a, i) => {
      const b = points[(i + 1) % points.length];
      if (a[1] <= p[1]) {
        if (b[1] > p[1] && Vec.cross(a, b, p) > 0) {
          wn += 1;
        }
      } else if (b[1] <= p[1] && Vec.cross(a, b, p) < 0) {
        wn -= 1;
      }
    });
    return wn !== 0;
  }
  static pointInBounds(A, b) {
    return !(A[0] < b.minX || A[0] > b.maxX || A[1] < b.minY || A[1] > b.maxY);
  }
  static pointInPolyline(A, points, distance = 3) {
    for (let i = 1; i < points.length; i++) {
      if (Vec.distanceToLineSegment(points[i - 1], points[i], A) < distance) {
        return true;
      }
    }
    return false;
  }
  static getBoundsSides(bounds) {
    return this.getRectangleSides([bounds.minX, bounds.minY], [bounds.width, bounds.height]);
  }
  static expandBounds(bounds, delta) {
    return {
      minX: bounds.minX - delta,
      minY: bounds.minY - delta,
      maxX: bounds.maxX + delta,
      maxY: bounds.maxY + delta,
      width: bounds.width + delta * 2,
      height: bounds.height + delta * 2
    };
  }
  static boundsCollide(a, b) {
    return !(a.maxX < b.minX || a.minX > b.maxX || a.maxY < b.minY || a.minY > b.maxY);
  }
  static boundsContain(a, b) {
    return a.minX < b.minX && a.minY < b.minY && a.maxY > b.maxY && a.maxX > b.maxX;
  }
  static boundsContained(a, b) {
    return _Utils.boundsContain(b, a);
  }
  static boundsAreEqual(a, b) {
    return !(b.maxX !== a.maxX || b.minX !== a.minX || b.maxY !== a.maxY || b.minY !== a.minY);
  }
  static getBoundsFromPoints(points, rotation = 0) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    if (points.length < 2) {
      minX = 0;
      minY = 0;
      maxX = 1;
      maxY = 1;
    } else {
      for (const [x, y] of points) {
        minX = Math.min(x, minX);
        minY = Math.min(y, minY);
        maxX = Math.max(x, maxX);
        maxY = Math.max(y, maxY);
      }
    }
    if (rotation !== 0) {
      return _Utils.getBoundsFromPoints(
        points.map((pt) => Vec.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], rotation))
      );
    }
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static centerBounds(bounds, point) {
    const boundsCenter = this.getBoundsCenter(bounds);
    const dx = point[0] - boundsCenter[0];
    const dy = point[1] - boundsCenter[1];
    return this.translateBounds(bounds, [dx, dy]);
  }
  static snapBoundsToGrid(bounds, gridSize) {
    const minX = Math.round(bounds.minX / gridSize) * gridSize;
    const minY = Math.round(bounds.minY / gridSize) * gridSize;
    const maxX = Math.round(bounds.maxX / gridSize) * gridSize;
    const maxY = Math.round(bounds.maxY / gridSize) * gridSize;
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }
  static translateBounds(bounds, delta) {
    return {
      minX: bounds.minX + delta[0],
      minY: bounds.minY + delta[1],
      maxX: bounds.maxX + delta[0],
      maxY: bounds.maxY + delta[1],
      width: bounds.width,
      height: bounds.height
    };
  }
  static rotateBounds(bounds, center, rotation) {
    const [minX, minY] = Vec.rotWith([bounds.minX, bounds.minY], center, rotation);
    const [maxX, maxY] = Vec.rotWith([bounds.maxX, bounds.maxY], center, rotation);
    return {
      minX,
      minY,
      maxX,
      maxY,
      width: bounds.width,
      height: bounds.height
    };
  }
  static getRotatedEllipseBounds(x, y, rx, ry, rotation = 0) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    const w = Math.hypot(rx * c, ry * s);
    const h = Math.hypot(rx * s, ry * c);
    return {
      minX: x + rx - w,
      minY: y + ry - h,
      maxX: x + rx + w,
      maxY: y + ry + h,
      width: w * 2,
      height: h * 2
    };
  }
  static getExpandedBounds(a, b) {
    const minX = Math.min(a.minX, b.minX);
    const minY = Math.min(a.minY, b.minY);
    const maxX = Math.max(a.maxX, b.maxX);
    const maxY = Math.max(a.maxY, b.maxY);
    const width = Math.abs(maxX - minX);
    const height = Math.abs(maxY - minY);
    return { minX, minY, maxX, maxY, width, height };
  }
  static getCommonBounds(bounds) {
    if (bounds.length < 2)
      return bounds[0];
    let result = bounds[0];
    for (let i = 1; i < bounds.length; i++) {
      result = _Utils.getExpandedBounds(result, bounds[i]);
    }
    return result;
  }
  static getRotatedCorners(b, rotation = 0) {
    const center = [b.minX + b.width / 2, b.minY + b.height / 2];
    return [
      [b.minX, b.minY],
      [b.maxX, b.minY],
      [b.maxX, b.maxY],
      [b.minX, b.maxY]
    ].map((point) => Vec.rotWith(point, center, rotation));
  }
  static getTransformedBoundingBox(bounds, handle, delta, rotation = 0, isAspectRatioLocked = false) {
    const [ax0, ay0] = [bounds.minX, bounds.minY];
    const [ax1, ay1] = [bounds.maxX, bounds.maxY];
    let [bx0, by0] = [bounds.minX, bounds.minY];
    let [bx1, by1] = [bounds.maxX, bounds.maxY];
    if (handle === "center") {
      return {
        minX: bx0 + delta[0],
        minY: by0 + delta[1],
        maxX: bx1 + delta[0],
        maxY: by1 + delta[1],
        width: bx1 - bx0,
        height: by1 - by0,
        scaleX: 1,
        scaleY: 1
      };
    }
    const [dx, dy] = Vec.rot(delta, -rotation);
    switch (handle) {
      case "top_edge" /* Top */:
      case "top_left_corner" /* TopLeft */:
      case "top_right_corner" /* TopRight */: {
        by0 += dy;
        break;
      }
      case "bottom_edge" /* Bottom */:
      case "bottom_left_corner" /* BottomLeft */:
      case "bottom_right_corner" /* BottomRight */: {
        by1 += dy;
        break;
      }
    }
    switch (handle) {
      case "left_edge" /* Left */:
      case "top_left_corner" /* TopLeft */:
      case "bottom_left_corner" /* BottomLeft */: {
        bx0 += dx;
        break;
      }
      case "right_edge" /* Right */:
      case "top_right_corner" /* TopRight */:
      case "bottom_right_corner" /* BottomRight */: {
        bx1 += dx;
        break;
      }
    }
    const aw = ax1 - ax0;
    const ah = ay1 - ay0;
    const scaleX = (bx1 - bx0) / aw;
    const scaleY = (by1 - by0) / ah;
    const flipX = scaleX < 0;
    const flipY = scaleY < 0;
    const bw = Math.abs(bx1 - bx0);
    const bh = Math.abs(by1 - by0);
    if (isAspectRatioLocked) {
      const ar = aw / ah;
      const isTall = ar < bw / bh;
      const tw = bw * (scaleY < 0 ? 1 : -1) * (1 / ar);
      const th = bh * (scaleX < 0 ? 1 : -1) * ar;
      switch (handle) {
        case "top_left_corner" /* TopLeft */: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case "top_right_corner" /* TopRight */: {
          if (isTall)
            by0 = by1 + tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case "bottom_right_corner" /* BottomRight */: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx1 = bx0 - th;
          break;
        }
        case "bottom_left_corner" /* BottomLeft */: {
          if (isTall)
            by1 = by0 - tw;
          else
            bx0 = bx1 + th;
          break;
        }
        case "bottom_edge" /* Bottom */:
        case "top_edge" /* Top */: {
          const m = (bx0 + bx1) / 2;
          const w = bh * ar;
          bx0 = m - w / 2;
          bx1 = m + w / 2;
          break;
        }
        case "left_edge" /* Left */:
        case "right_edge" /* Right */: {
          const m = (by0 + by1) / 2;
          const h = bw / ar;
          by0 = m - h / 2;
          by1 = m + h / 2;
          break;
        }
      }
    }
    if (rotation % (Math.PI * 2) !== 0) {
      let cv = [0, 0];
      const c0 = Vec.med([ax0, ay0], [ax1, ay1]);
      const c1 = Vec.med([bx0, by0], [bx1, by1]);
      switch (handle) {
        case "top_left_corner" /* TopLeft */: {
          cv = Vec.sub(Vec.rotWith([bx1, by1], c1, rotation), Vec.rotWith([ax1, ay1], c0, rotation));
          break;
        }
        case "top_right_corner" /* TopRight */: {
          cv = Vec.sub(Vec.rotWith([bx0, by1], c1, rotation), Vec.rotWith([ax0, ay1], c0, rotation));
          break;
        }
        case "bottom_right_corner" /* BottomRight */: {
          cv = Vec.sub(Vec.rotWith([bx0, by0], c1, rotation), Vec.rotWith([ax0, ay0], c0, rotation));
          break;
        }
        case "bottom_left_corner" /* BottomLeft */: {
          cv = Vec.sub(Vec.rotWith([bx1, by0], c1, rotation), Vec.rotWith([ax1, ay0], c0, rotation));
          break;
        }
        case "top_edge" /* Top */: {
          cv = Vec.sub(
            Vec.rotWith(Vec.med([bx0, by1], [bx1, by1]), c1, rotation),
            Vec.rotWith(Vec.med([ax0, ay1], [ax1, ay1]), c0, rotation)
          );
          break;
        }
        case "left_edge" /* Left */: {
          cv = Vec.sub(
            Vec.rotWith(Vec.med([bx1, by0], [bx1, by1]), c1, rotation),
            Vec.rotWith(Vec.med([ax1, ay0], [ax1, ay1]), c0, rotation)
          );
          break;
        }
        case "bottom_edge" /* Bottom */: {
          cv = Vec.sub(
            Vec.rotWith(Vec.med([bx0, by0], [bx1, by0]), c1, rotation),
            Vec.rotWith(Vec.med([ax0, ay0], [ax1, ay0]), c0, rotation)
          );
          break;
        }
        case "right_edge" /* Right */: {
          cv = Vec.sub(
            Vec.rotWith(Vec.med([bx0, by0], [bx0, by1]), c1, rotation),
            Vec.rotWith(Vec.med([ax0, ay0], [ax0, ay1]), c0, rotation)
          );
          break;
        }
      }
      ;
      [bx0, by0] = Vec.sub([bx0, by0], cv);
      [bx1, by1] = Vec.sub([bx1, by1], cv);
    }
    if (bx1 < bx0) {
      ;
      [bx1, bx0] = [bx0, bx1];
    }
    if (by1 < by0) {
      ;
      [by1, by0] = [by0, by1];
    }
    return {
      minX: bx0,
      minY: by0,
      maxX: bx1,
      maxY: by1,
      width: bx1 - bx0,
      height: by1 - by0,
      scaleX: (bx1 - bx0) / (ax1 - ax0 || 1) * (flipX ? -1 : 1),
      scaleY: (by1 - by0) / (ay1 - ay0 || 1) * (flipY ? -1 : 1)
    };
  }
  static getTransformAnchor(type, isFlippedX, isFlippedY) {
    let anchor = type;
    switch (type) {
      case "top_left_corner" /* TopLeft */: {
        if (isFlippedX && isFlippedY) {
          anchor = "bottom_right_corner" /* BottomRight */;
        } else if (isFlippedX) {
          anchor = "top_right_corner" /* TopRight */;
        } else if (isFlippedY) {
          anchor = "bottom_left_corner" /* BottomLeft */;
        } else {
          anchor = "bottom_right_corner" /* BottomRight */;
        }
        break;
      }
      case "top_right_corner" /* TopRight */: {
        if (isFlippedX && isFlippedY) {
          anchor = "bottom_left_corner" /* BottomLeft */;
        } else if (isFlippedX) {
          anchor = "top_left_corner" /* TopLeft */;
        } else if (isFlippedY) {
          anchor = "bottom_right_corner" /* BottomRight */;
        } else {
          anchor = "bottom_left_corner" /* BottomLeft */;
        }
        break;
      }
      case "bottom_right_corner" /* BottomRight */: {
        if (isFlippedX && isFlippedY) {
          anchor = "top_left_corner" /* TopLeft */;
        } else if (isFlippedX) {
          anchor = "bottom_left_corner" /* BottomLeft */;
        } else if (isFlippedY) {
          anchor = "top_right_corner" /* TopRight */;
        } else {
          anchor = "top_left_corner" /* TopLeft */;
        }
        break;
      }
      case "bottom_left_corner" /* BottomLeft */: {
        if (isFlippedX && isFlippedY) {
          anchor = "top_right_corner" /* TopRight */;
        } else if (isFlippedX) {
          anchor = "bottom_right_corner" /* BottomRight */;
        } else if (isFlippedY) {
          anchor = "top_left_corner" /* TopLeft */;
        } else {
          anchor = "top_right_corner" /* TopRight */;
        }
        break;
      }
    }
    return anchor;
  }
  static getRelativeTransformedBoundingBox(bounds, initialBounds, initialShapeBounds, isFlippedX, isFlippedY) {
    const nx = (isFlippedX ? initialBounds.maxX - initialShapeBounds.maxX : initialShapeBounds.minX - initialBounds.minX) / initialBounds.width;
    const ny = (isFlippedY ? initialBounds.maxY - initialShapeBounds.maxY : initialShapeBounds.minY - initialBounds.minY) / initialBounds.height;
    const nw = initialShapeBounds.width / initialBounds.width;
    const nh = initialShapeBounds.height / initialBounds.height;
    const minX = bounds.minX + bounds.width * nx;
    const minY = bounds.minY + bounds.height * ny;
    const width = bounds.width * nw;
    const height = bounds.height * nh;
    return {
      minX,
      minY,
      maxX: minX + width,
      maxY: minY + height,
      width,
      height
    };
  }
  static getRotatedSize(size, rotation) {
    const center = Vec.div(size, 2);
    const points = [[0, 0], [size[0], 0], size, [0, size[1]]].map(
      (point) => Vec.rotWith(point, center, rotation)
    );
    const bounds = _Utils.getBoundsFromPoints(points);
    return [bounds.width, bounds.height];
  }
  static getBoundsCenter(bounds) {
    return [bounds.minX + bounds.width / 2, bounds.minY + bounds.height / 2];
  }
  static getBoundsWithCenter(bounds) {
    const center = _Utils.getBoundsCenter(bounds);
    return __spreadProps(__spreadValues({}, bounds), {
      midX: center[0],
      midY: center[1]
    });
  }
  static getCommonTopLeft(points) {
    const min = [Infinity, Infinity];
    points.forEach((point) => {
      min[0] = Math.min(min[0], point[0]);
      min[1] = Math.min(min[1], point[1]);
    });
    return min;
  }
  static getFromCache(cache, item, getNext) {
    let value = cache.get(item);
    if (value === void 0) {
      cache.set(item, getNext());
      value = cache.get(item);
      if (value === void 0) {
        throw Error("Cache did not include item!");
      }
    }
    return value;
  }
  static uniqueId(a = "") {
    return a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, _Utils.uniqueId);
  }
  static rotateArray(arr, offset) {
    return arr.map((_, i) => arr[(i + offset) % arr.length]);
  }
  static debounce(fn, ms = 0) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(args), ms);
    };
  }
  static getSvgPathFromStroke(points, closed = true) {
    const len = points.length;
    if (len < 4) {
      return ``;
    }
    let a = points[0];
    let b = points[1];
    const c = points[2];
    let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(
      2
    )} ${average(b[0], c[0]).toFixed(2)},${average(b[1], c[1]).toFixed(2)} T`;
    for (let i = 2, max = len - 1; i < max; i++) {
      a = points[i];
      b = points[i + 1];
      result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
    }
    if (closed) {
      result += "Z";
    }
    return result;
  }
  static getSvgPathFromStrokePoints(points, closed = false) {
    const len = points.length;
    if (len < 4) {
      return ``;
    }
    let a = points[0].point;
    let b = points[1].point;
    const c = points[2].point;
    let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(
      2
    )} ${average(b[0], c[0]).toFixed(2)},${average(b[1], c[1]).toFixed(2)} T`;
    for (let i = 2, max = len - 1; i < max; i++) {
      a = points[i].point;
      b = points[i + 1].point;
      result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
    }
    if (closed) {
      result += "Z";
    }
    return result;
  }
  static getPerfectDashProps(length, strokeWidth, style, snap = 1, outset = true, lengthRatio = 2) {
    let dashLength;
    let strokeDashoffset;
    let ratio;
    if (style.toLowerCase() === "dashed") {
      dashLength = strokeWidth * lengthRatio;
      ratio = 1;
      strokeDashoffset = outset ? (dashLength / 2).toString() : "0";
    } else if (style.toLowerCase() === "dotted") {
      dashLength = strokeWidth / 100;
      ratio = 100;
      strokeDashoffset = "0";
    } else {
      return {
        strokeDasharray: "none",
        strokeDashoffset: "none"
      };
    }
    let dashes = Math.floor(length / dashLength / (2 * ratio));
    dashes -= dashes % snap;
    dashes = Math.max(dashes, 4);
    const gapLength = Math.max(
      dashLength,
      (length - dashes * dashLength) / (outset ? dashes : dashes - 1)
    );
    return {
      strokeDasharray: [dashLength, gapLength].join(" "),
      strokeDashoffset
    };
  }
  static isMobileSafari() {
    if (typeof window === "undefined")
      return false;
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i);
  }
  static throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function(...args) {
      if (!inThrottle) {
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
        lastResult = func(...args);
      }
      return lastResult;
    };
  }
  static isDarwin() {
    return /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  }
  static metaKey(e) {
    return _Utils.isDarwin() ? e.metaKey : e.ctrlKey;
  }
  static lns(str) {
    const result = str.split("");
    result.push(...result.splice(0, Math.round(result.length / 5)));
    result.push(...result.splice(0, Math.round(result.length / 4)));
    result.push(...result.splice(0, Math.round(result.length / 3)));
    result.push(...result.splice(0, Math.round(result.length / 2)));
    return result.reverse().map((n) => +n ? +n < 5 ? 5 + +n : +n > 5 ? +n - 5 : n : n).join("");
  }
};
var Utils = _Utils;
__publicField(Utils, "getSnapPoints", (bounds, others, snapDistance) => {
  const A = __spreadValues({}, bounds);
  const offset = [0, 0];
  const snapLines = [];
  const snaps = {
    ["minX" /* minX */]: { id: "minX" /* minX */, isSnapped: false },
    ["midX" /* midX */]: { id: "midX" /* midX */, isSnapped: false },
    ["maxX" /* maxX */]: { id: "maxX" /* maxX */, isSnapped: false },
    ["minY" /* minY */]: { id: "minY" /* minY */, isSnapped: false },
    ["midY" /* midY */]: { id: "midY" /* midY */, isSnapped: false },
    ["maxY" /* maxY */]: { id: "maxY" /* maxY */, isSnapped: false }
  };
  const xs = ["midX" /* midX */, "minX" /* minX */, "maxX" /* maxX */];
  const ys = ["midY" /* midY */, "minY" /* minY */, "maxY" /* maxY */];
  const snapResults = others.map((B) => {
    const rx = xs.flatMap(
      (f, i) => xs.map((t, k) => {
        const gap = A[f] - B[t];
        const distance = Math.abs(gap);
        return {
          f,
          t,
          gap,
          distance,
          isCareful: i === 0 || i + k === 3
        };
      })
    );
    const ry = ys.flatMap(
      (f, i) => ys.map((t, k) => {
        const gap = A[f] - B[t];
        const distance = Math.abs(gap);
        return {
          f,
          t,
          gap,
          distance,
          isCareful: i === 0 || i + k === 3
        };
      })
    );
    return [B, rx, ry];
  });
  let gapX = Infinity;
  let gapY = Infinity;
  let minX = Infinity;
  let minY = Infinity;
  snapResults.forEach(([_, rx, ry]) => {
    rx.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minX) {
        minX = r.distance;
        gapX = r.gap;
      }
    });
    ry.forEach((r) => {
      if (r.distance < snapDistance && r.distance < minY) {
        minY = r.distance;
        gapY = r.gap;
      }
    });
  });
  snapResults.forEach(([B, rx, ry]) => {
    if (gapX !== Infinity) {
      rx.forEach((r) => {
        if (Math.abs(r.gap - gapX) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
    if (gapY !== Infinity) {
      ry.forEach((r) => {
        if (Math.abs(r.gap - gapY) < 2) {
          snaps[r.f] = __spreadProps(__spreadValues({}, snaps[r.f]), {
            isSnapped: true,
            to: B[r.t],
            B,
            distance: r.distance
          });
        }
      });
    }
  });
  offset[0] = gapX === Infinity ? 0 : gapX;
  offset[1] = gapY === Infinity ? 0 : gapY;
  A.minX -= offset[0];
  A.midX -= offset[0];
  A.maxX -= offset[0];
  A.minY -= offset[1];
  A.midY -= offset[1];
  A.maxY -= offset[1];
  xs.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const x = A[id];
    snapLines.push(
      id === "minX" /* minX */ ? [
        [x, A.midY],
        [x, B.minY],
        [x, B.maxY]
      ] : [
        [x, A.minY],
        [x, A.maxY],
        [x, B.minY],
        [x, B.maxY]
      ]
    );
  });
  ys.forEach((from) => {
    const snap = snaps[from];
    if (!snap.isSnapped)
      return;
    const { id, B } = snap;
    const y = A[id];
    snapLines.push(
      id === "midY" /* midY */ ? [
        [A.midX, y],
        [B.minX, y],
        [B.maxX, y]
      ] : [
        [A.minX, y],
        [A.maxX, y],
        [B.minX, y],
        [B.maxX, y]
      ]
    );
  });
  return { offset, snapLines };
});
__publicField(Utils, "deepMerge", (target, patch) => {
  const result = __spreadValues({}, target);
  const entries = Object.entries(patch);
  for (const [key, value] of entries)
    result[key] = value === Object(value) && !Array.isArray(value) ? _Utils.deepMerge(result[key], value) : value;
  return result;
});
function average(a, b) {
  return (a + b) / 2;
}

// src/utils/index.ts
var utils_default = Utils;

// src/hooks/useZoomEvents.ts
function useZoomEvents(zoomRef, ref) {
  const rOriginPoint = React2.useRef(void 0);
  const rPinchPoint = React2.useRef(void 0);
  const rDelta = React2.useRef([0, 0]);
  const rWheelLastTimeStamp = React2.useRef(0);
  const { inputs: inputs2, bounds, callbacks } = useTLContext();
  React2.useEffect(() => {
    const preventGesture = (event) => event.preventDefault();
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);
  const handleWheel = React2.useCallback(
    ({ event: e }) => {
      var _a, _b, _c, _d;
      e.preventDefault();
      if (inputs2.isPinching || e.timeStamp <= rWheelLastTimeStamp.current)
        return;
      rWheelLastTimeStamp.current = e.timeStamp;
      const [x, y, z] = normalizeWheel(e);
      if ((e.altKey || e.ctrlKey || e.metaKey) && e.buttons === 0) {
        const point = (_b = (_a = inputs2.pointer) == null ? void 0 : _a.point) != null ? _b : [bounds.width / 2, bounds.height / 2];
        const delta2 = [...point, z * 0.618];
        const info2 = inputs2.pan(delta2, e);
        (_c = callbacks.onZoom) == null ? void 0 : _c.call(callbacks, __spreadProps(__spreadValues({}, info2), { delta: delta2 }), e);
        return;
      }
      const delta = Vec2.mul(
        e.shiftKey && !utils_default.isDarwin() ? [y, 0] : [x, y],
        0.5
      );
      if (Vec2.isEqual(delta, [0, 0]))
        return;
      const info = inputs2.pan(delta, e);
      (_d = callbacks.onPan) == null ? void 0 : _d.call(callbacks, info, e);
    },
    [callbacks, inputs2, bounds]
  );
  const handlePinchStart = React2.useCallback(
    ({ origin, event }) => {
      var _a;
      if (event instanceof WheelEvent)
        return;
      const elm = ref.current;
      if (!elm || !(event.target === elm || elm.contains(event.target)))
        return;
      const info = inputs2.pinch(origin, origin);
      inputs2.isPinching = true;
      (_a = callbacks.onPinchStart) == null ? void 0 : _a.call(callbacks, info, event);
      rPinchPoint.current = info.point;
      rOriginPoint.current = info.origin;
      rDelta.current = [0, 0];
    },
    [callbacks, inputs2, bounds]
  );
  const handlePinch = React2.useCallback(
    ({ origin, offset, event }) => {
      var _a;
      if (event instanceof WheelEvent)
        return;
      const elm = ref.current;
      if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
        return;
      if (!rOriginPoint.current)
        return;
      const info = inputs2.pinch(origin, rOriginPoint.current);
      const trueDelta = Vec2.sub(info.delta, rDelta.current);
      rDelta.current = info.delta;
      (_a = callbacks.onPinch) == null ? void 0 : _a.call(
        callbacks,
        __spreadProps(__spreadValues({}, info), {
          point: info.point,
          origin: rOriginPoint.current,
          delta: [...trueDelta, offset[0]]
        }),
        event
      );
      rPinchPoint.current = origin;
    },
    [callbacks, inputs2, bounds]
  );
  const handlePinchEnd = React2.useCallback(({ origin, event }) => {
    var _a;
    const elm = ref.current;
    if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
      return;
    const info = inputs2.pinch(origin, origin);
    inputs2.isPinching = false;
    (_a = callbacks.onPinchEnd) == null ? void 0 : _a.call(callbacks, info, event);
    rPinchPoint.current = void 0;
    rOriginPoint.current = void 0;
    rDelta.current = [0, 0];
  }, []);
  useGesture(
    {
      onWheel: handleWheel,
      onPinchStart: handlePinchStart,
      onPinch: handlePinch,
      onPinchEnd: handlePinchEnd
    },
    {
      target: ref,
      eventOptions: { passive: false },
      pinch: {
        from: [zoomRef.current, 0],
        scaleBounds: () => {
          return { from: zoomRef.current, max: 5, min: 0.1 };
        }
      }
    }
  );
}
var MAX_ZOOM_STEP = 10;
function normalizeWheel(event) {
  const { deltaY, deltaX } = event;
  let deltaZ = 0;
  if (event.ctrlKey || event.metaKey) {
    const signY = Math.sign(event.deltaY);
    const absDeltaY = Math.abs(event.deltaY);
    let dy = deltaY;
    if (absDeltaY > MAX_ZOOM_STEP) {
      dy = MAX_ZOOM_STEP * signY;
    }
    deltaZ = dy;
  }
  return [deltaX, deltaY, deltaZ];
}

// src/hooks/useSafariFocusOutFix.tsx
import { useEffect as useEffect2 } from "react";
function useSafariFocusOutFix() {
  const { callbacks } = useTLContext();
  useEffect2(() => {
    function handleFocusOut() {
      var _a;
      (_a = callbacks.onShapeBlur) == null ? void 0 : _a.call(callbacks);
    }
    if (utils_default.isMobileSafari()) {
      document.addEventListener("focusout", handleFocusOut);
      return () => document.removeEventListener("focusout", handleFocusOut);
    }
    return () => null;
  }, [callbacks]);
}

// src/hooks/useCanvasEvents.tsx
import * as React3 from "react";
function useCanvasEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  return React3.useMemo(() => {
    return {
      onPointerDown: (e) => {
        var _a, _b, _c;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        e.currentTarget.setPointerCapture(e.pointerId);
        if (e.button === 2) {
          (_a = callbacks.onRightPointCanvas) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e, "canvas"), e);
          return;
        }
        const info = inputs2.pointerDown(e, "canvas");
        if (e.button === 0) {
          (_b = callbacks.onPointCanvas) == null ? void 0 : _b.call(callbacks, info, e);
        }
        (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
      },
      onPointerMove: (e) => {
        var _a, _b;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        const info = inputs2.pointerMove(e, "canvas");
        if (e.buttons === 1) {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            (_a = callbacks.onDragCanvas) == null ? void 0 : _a.call(callbacks, info, e);
          }
        }
        (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
      },
      onPointerUp: (e) => {
        var _a, _b, _c, _d, _e;
        if (e.dead)
          return;
        else
          e.dead = true;
        inputs2.activePointer = void 0;
        if (!inputs2.pointerIsValid(e))
          return;
        const isDoubleClick = inputs2.isDoubleClick();
        const info = inputs2.pointerUp(e, "canvas");
        if (e.button === 2) {
          (_a = callbacks.onPointerUp) == null ? void 0 : _a.call(callbacks, info, e);
          return;
        }
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_b = e.currentTarget) == null ? void 0 : _b.releasePointerCapture(e.pointerId);
        }
        if (e.button === 0) {
          if (isDoubleClick && !(info.altKey || info.metaKey)) {
            (_c = callbacks.onDoubleClickCanvas) == null ? void 0 : _c.call(callbacks, info, e);
          }
          (_d = callbacks.onReleaseCanvas) == null ? void 0 : _d.call(callbacks, info, e);
        }
        (_e = callbacks.onPointerUp) == null ? void 0 : _e.call(callbacks, info, e);
      },
      onDrop: callbacks.onDrop,
      onDragOver: callbacks.onDragOver
    };
  }, [callbacks, inputs2]);
}

// src/hooks/useShapeEvents.tsx
import * as React4 from "react";
function useShapeEvents(id) {
  const { rPageState, rSelectionBounds, callbacks, inputs: inputs2 } = React4.useContext(TLContext);
  return React4.useMemo(
    () => ({
      onPointerDown: (e) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.button === 2) {
          (_a = callbacks.onRightPointShape) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e, id), e);
          return;
        }
        const info = inputs2.pointerDown(e, id);
        (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
        if (rSelectionBounds.current && Utils.pointInBounds(info.point, rSelectionBounds.current) && !rPageState.current.selectedIds.includes(id)) {
          if (e.button === 0) {
            (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
            (_d = callbacks.onPointShape) == null ? void 0 : _d.call(callbacks, info, e);
          }
          (_e = callbacks.onPointerDown) == null ? void 0 : _e.call(callbacks, info, e);
          return;
        }
        if (e.button === 0) {
          (_f = callbacks.onPointShape) == null ? void 0 : _f.call(callbacks, info, e);
        }
        (_g = callbacks.onPointerDown) == null ? void 0 : _g.call(callbacks, info, e);
      },
      onPointerUp: (e) => {
        var _a, _b, _c, _d;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.button === 2) {
          return;
        }
        inputs2.activePointer = void 0;
        const isDoubleClick = inputs2.isDoubleClick();
        const info = inputs2.pointerUp(e, id);
        if (e.pointerId && e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
        }
        if (e.button === 0) {
          if (isDoubleClick && !(info.altKey || info.metaKey)) {
            (_b = callbacks.onDoubleClickShape) == null ? void 0 : _b.call(callbacks, info, e);
          }
          (_c = callbacks.onReleaseShape) == null ? void 0 : _c.call(callbacks, info, e);
        }
        (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
      },
      onPointerMove: (e) => {
        var _a, _b;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (e.buttons === 2 || !inputs2.pointerIsValid(e) || inputs2.pointer && e.pointerId !== inputs2.pointer.pointerId) {
          return;
        }
        const info = inputs2.pointerMove(e, id);
        if (e.buttons === 1 && e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_a = callbacks.onDragShape) == null ? void 0 : _a.call(callbacks, info, e);
        }
        (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
      },
      onPointerEnter: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        const info = inputs2.pointerEnter(e, id);
        (_a = callbacks.onHoverShape) == null ? void 0 : _a.call(callbacks, info, e);
      },
      onPointerLeave: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        const info = inputs2.pointerEnter(e, id);
        (_a = callbacks.onUnhoverShape) == null ? void 0 : _a.call(callbacks, info, e);
      }
    }),
    [inputs2, callbacks, id]
  );
}

// src/hooks/useShapeTree.tsx
import { Vec as Vec3 } from "@tldraw/vec";
import * as React5 from "react";
function addToShapeTree(shape, branch, shapes, pageState, assets, isChildOfGhost = false, isChildOfSelected = false, meta, bindingTargetId) {
  const node = {
    shape,
    asset: shape.assetId ? assets[shape.assetId] : void 0,
    meta,
    isChildOfSelected,
    isGhost: shape.isGhost || isChildOfGhost,
    isEditing: pageState.editingId === shape.id,
    isBinding: bindingTargetId === shape.id,
    isSelected: pageState.selectedIds.includes(shape.id),
    isHovered: pageState.hoveredId === shape.id || shape.children !== void 0 && (pageState.hoveredId && shape.children.includes(pageState.hoveredId) || shape.children.some((childId) => pageState.selectedIds.includes(childId)))
  };
  branch.push(node);
  if (shape.children) {
    node.children = [];
    shape.children.map((id) => shapes[id]).filter((childShape) => shapes[childShape.id]).sort((a, b) => a.childIndex - b.childIndex).forEach(
      (childShape) => addToShapeTree(
        childShape,
        node.children,
        shapes,
        pageState,
        assets,
        node.isGhost,
        node.isSelected || node.isChildOfSelected,
        meta
      )
    );
  }
}
function shapeIsInViewport(bounds, viewport) {
  return Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds);
}
function useShapeTree(page, pageState, assets, meta) {
  const { callbacks, shapeUtils, bounds } = useTLContext();
  const rTimeout = React5.useRef();
  const rPreviousCount = React5.useRef(-1);
  const rShapesIdsToRender = React5.useRef(/* @__PURE__ */ new Set());
  const rShapesToRender = React5.useRef(/* @__PURE__ */ new Set());
  const { selectedIds, camera } = pageState;
  const [minX, minY] = Vec3.sub(Vec3.div([0, 0], camera.zoom), camera.point);
  const [maxX, maxY] = Vec3.sub(Vec3.div([bounds.width, bounds.height], camera.zoom), camera.point);
  const viewport = {
    minX,
    minY,
    maxX,
    maxY,
    height: maxX - minX,
    width: maxY - minY
  };
  const shapesToRender = rShapesToRender.current;
  const shapesIdsToRender = rShapesIdsToRender.current;
  shapesToRender.clear();
  shapesIdsToRender.clear();
  const allShapes = Object.values(page.shapes);
  allShapes.filter(
    (shape) => shapeUtils[shape.type].isStateful || selectedIds.includes(shape.id) || shapeIsInViewport(shapeUtils[shape.type].getBounds(shape), viewport)
  ).forEach((shape) => {
    if (shape.parentId === page.id) {
      shapesIdsToRender.add(shape.id);
      shapesToRender.add(shape);
      return;
    }
    const parent = page.shapes[shape.parentId];
    if (parent === void 0) {
      throw Error(`A shape (${shape.id}) has a parent (${shape.parentId}) that does not exist!`);
    } else {
      shapesIdsToRender.add(parent.id);
      shapesToRender.add(parent);
    }
  });
  if (shapesToRender.size !== rPreviousCount.current) {
    if (rTimeout.current) {
      clearTimeout(rTimeout.current);
    }
    rTimeout.current = requestAnimationFrame(() => {
      var _a;
      (_a = callbacks.onRenderCountChange) == null ? void 0 : _a.call(callbacks, Array.from(shapesIdsToRender.values()));
    });
    rPreviousCount.current = shapesToRender.size;
  }
  const bindingTargetId = pageState.bindingId ? page.bindings[pageState.bindingId].toId : void 0;
  const tree = [];
  shapesToRender.forEach((shape) => {
    if (shape === void 0) {
      throw Error("Rendered shapes included a missing shape");
    }
    addToShapeTree(
      shape,
      tree,
      page.shapes,
      pageState,
      assets,
      shape.isGhost,
      false,
      meta,
      bindingTargetId
    );
  });
  tree.sort((a, b) => a.shape.childIndex - b.shape.childIndex);
  return tree;
}

// src/hooks/useStyle.tsx
import * as React6 from "react";
var styles = /* @__PURE__ */ new Map();
function makeCssTheme(prefix, theme) {
  return Object.keys(theme).reduce((acc, key) => {
    const value = theme[key];
    if (value) {
      return acc + `${`--${prefix}-${key}`}: ${value};
`;
    }
    return acc;
  }, "");
}
function useTheme(prefix, theme, selector = ":root") {
  React6.useLayoutEffect(() => {
    const style = document.createElement("style");
    const cssTheme = makeCssTheme(prefix, theme);
    style.setAttribute("id", `${prefix}-theme`);
    style.setAttribute("data-selector", selector);
    style.innerHTML = `
        ${selector} {
          ${cssTheme}
        }
      `;
    document.head.appendChild(style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [prefix, theme, selector]);
}
function useStyle(uid, rules) {
  React6.useLayoutEffect(() => {
    if (styles.get(uid)) {
      return () => void 0;
    }
    const style = document.createElement("style");
    style.innerHTML = rules;
    style.setAttribute("id", uid);
    document.head.appendChild(style);
    styles.set(uid, style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(uid);
      }
    };
  }, [uid, rules]);
}
var css = (strings, ...args) => strings.reduce(
  (acc, string, index) => acc + string + (index < args.length ? args[index] : ""),
  ""
);
var defaultTheme = {
  accent: "rgb(255, 0, 0)",
  brushFill: "rgba(0,0,0,.05)",
  brushStroke: "rgba(0,0,0,.25)",
  brushDashStroke: "rgba(0,0,0,.6)",
  selectStroke: "rgb(66, 133, 244)",
  selectFill: "rgba(65, 132, 244, 0.05)",
  binding: "rgba(65, 132, 244, 0.12)",
  background: "rgb(248, 249, 250)",
  foreground: "rgb(51, 51, 51)",
  grid: "rgba(144, 144, 144, 1)"
};
var TLCSS = css`
  .tl-container {
    --tl-zoom: 1;
    --tl-scale: calc(1 / var(--tl-zoom));
    --tl-padding: calc(64px * max(1, var(--tl-scale)));
    --tl-performance-all: auto;
    --tl-performance-selected: auto;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    z-index: 100;
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    background-color: var(--tl-background);
  }
  .tl-container * {
    box-sizing: border-box;
  }
  .tl-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
  }
  .tl-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
    user-select: none;
  }
  .tl-snap-line {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }
  .tl-snap-point {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }
  .tl-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: all;
    overflow: clip;
  }
  .tl-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 0px;
    width: 0px;
    contain: layout style size;
  }
  .tl-absolute {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    contain: layout style size;
  }
  .tl-positioned {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    contain: layout style size;
    will-change: var(--tl-performance-all);
  }
  .tl-positioned-svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    contain: layout style size;
  }
  .tl-positioned-div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: var(--tl-padding);
    overflow: hidden;
    contain: layout style size;
  }
  .tl-positioned-selected {
    will-change: var(--tl-performance-selected);
  }
  .tl-inner-div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .tl-stroke-hitarea {
    fill: none;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .tl-fill-hitarea {
    fill: transparent;
    stroke: transparent;
    stroke-width: calc(24px * var(--tl-scale));
    pointer-events: all;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .tl-counter-scaled {
    transform: scale(var(--tl-scale));
  }
  .tl-dashed {
    stroke-dasharray: calc(2px * var(--tl-scale)), calc(2px * var(--tl-scale));
  }
  .tl-transparent {
    fill: transparent;
    stroke: transparent;
  }
  .tl-cursor-ns {
    cursor: ns-resize;
  }
  .tl-cursor-ew {
    cursor: ew-resize;
  }
  .tl-cursor-nesw {
    cursor: nesw-resize;
  }
  .tl-cursor-nwse {
    cursor: nwse-resize;
  }
  .tl-corner-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
  }
  .tl-rotate-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
    cursor: grab;
  }
  .tl-binding {
    fill: var(--tl-selectFill);
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
  }
  .tl-user {
    left: calc(-15px * var(--tl-scale));
    top: calc(-15px * var(--tl-scale));
    height: calc(35px * var(--tl-scale));
    width: calc(35px * var(--tl-scale));
    transform: scale(var(--tl-scale));
    pointer-events: none;
    will-change: transform;
  }
  .tl-animated {
    transition: transform 200ms linear;
  }
  .tl-indicator {
    fill: transparent;
    stroke-width: calc(1.5px * var(--tl-scale));
    pointer-events: none;
  }
  .tl-user-indicator-bounds {
    border-style: solid;
    border-width: calc(1px * var(--tl-scale));
  }
  .tl-hovered {
    stroke: var(--tl-selectStroke);
  }
  .tl-selected {
    stroke: var(--tl-selectStroke);
  }
  .tl-locked {
    stroke-dasharray: calc(3px * var(--tl-scale)) calc(3px * var(--tl-scale));
  }
  .tl-editing {
    stroke-width: calc(2.5px * min(5, var(--tl-scale)));
  }
  .tl-performance {
    will-change: transform, contents;
  }
  .tl-clone-target {
    pointer-events: all;
  }
  .tl-clone-target:hover .tl-clone-button {
    opacity: 1;
  }
  .tl-clone-button-target {
    cursor: pointer;
    pointer-events: all;
  }
  .tl-clone-button-target:hover .tl-clone-button {
    fill: var(--tl-selectStroke);
  }
  .tl-clone-button {
    opacity: 0;
    r: calc(8px * var(--tl-scale));
    stroke-width: calc(1.5px * var(--tl-scale));
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
  }
  .tl-bounds {
    pointer-events: none;
    contain: layout style size;
  }
  .tl-bounds-bg {
    stroke: none;
    fill: var(--tl-selectFill);
    pointer-events: all;
    contain: layout style size;
  }
  .tl-bounds-center {
    fill: transparent;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1.5px * var(--tl-scale));
  }
  .tl-brush {
    fill: var(--tl-brushFill);
    stroke: var(--tl-brushStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
    contain: layout style size;
  }
  .tl-dashed-brush-line {
    fill: none;
    stroke: var(--tl-brushDashStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
  }
  .tl-brush.dashed {
    stroke: none;
  }
  .tl-handle {
    pointer-events: all;
    cursor: grab;
  }
  .tl-handle:hover .tl-handle-bg {
    fill: var(--tl-selectFill);
  }
  .tl-handle:hover .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }
  .tl-handle:active .tl-handle-bg {
    cursor: grabbing;
    fill: var(--tl-selectFill);
  }
  .tl-handle:active .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }
  .tl-handle {
    fill: var(--tl-background);
    stroke: var(--tl-selectStroke);
    stroke-width: 1.5px;
  }
  .tl-handle-bg {
    fill: transparent;
    stroke: none;
    pointer-events: all;
    r: calc(16px / max(1, var(--tl-zoom)));
  }
  .tl-binding-indicator {
    fill: transparent;
    stroke: var(--tl-binding);
  }
  .tl-centered-g {
    transform: translate(var(--tl-padding), var(--tl-padding));
  }
  .tl-current-parent > *[data-shy='true'] {
    opacity: 1;
  }
  .tl-binding {
    fill: none;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(2px * var(--tl-scale));
  }
  .tl-grid-dot {
    fill: var(--tl-grid);
  }
  .tl-erase-line {
    stroke-linejoin: round;
    stroke-linecap: round;
    pointer-events: none;
    fill: var(--tl-grid);
    opacity: 0.32;
  }
`;
function useTLTheme(theme, selector) {
  const tltheme = React6.useMemo(
    () => __spreadValues(__spreadValues({}, defaultTheme), theme),
    [theme]
  );
  useTheme("tl", tltheme, selector);
  useStyle("tl-canvas", TLCSS);
}

// src/hooks/useBoundsHandleEvents.tsx
import * as React7 from "react";
function useBoundsHandleEvents(id) {
  const { callbacks, inputs: inputs2 } = useTLContext();
  const onPointerDown = React7.useCallback(
    (e) => {
      var _a, _b, _c, _d;
      if (e.dead)
        return;
      else
        e.dead = true;
      if (!inputs2.pointerIsValid(e))
        return;
      (_a = e.currentTarget) == null ? void 0 : _a.setPointerCapture(e.pointerId);
      const info = inputs2.pointerDown(e, id);
      if (e.button === 2) {
        (_b = callbacks.onRightPointBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
        return;
      }
      if (e.button === 0) {
        (_c = callbacks.onPointBoundsHandle) == null ? void 0 : _c.call(callbacks, info, e);
      }
      (_d = callbacks.onPointerDown) == null ? void 0 : _d.call(callbacks, info, e);
    },
    [inputs2, callbacks, id]
  );
  const onPointerUp = React7.useCallback(
    (e) => {
      var _a, _b, _c;
      if (e.dead)
        return;
      else
        e.dead = true;
      if (e.button === 2 || !inputs2.pointerIsValid(e))
        return;
      const info = inputs2.pointerUp(e, id);
      const isDoubleClick = inputs2.isDoubleClick();
      if (e.button === 0) {
        if (isDoubleClick && !(info.altKey || info.metaKey)) {
          (_a = callbacks.onDoubleClickBoundsHandle) == null ? void 0 : _a.call(callbacks, info, e);
        }
        (_b = callbacks.onReleaseBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e);
      }
      (_c = callbacks.onPointerUp) == null ? void 0 : _c.call(callbacks, info, e);
    },
    [inputs2, callbacks, id]
  );
  const onPointerMove = React7.useCallback(
    (e) => {
      var _a, _b;
      if (e.dead)
        return;
      else
        e.dead = true;
      if (!inputs2.pointerIsValid(e))
        return;
      if (e.buttons === 2) {
        return;
      }
      const info = inputs2.pointerMove(e, id);
      if (e.buttons === 1) {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_a = callbacks.onDragBoundsHandle) == null ? void 0 : _a.call(callbacks, info, e);
        }
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
    },
    [inputs2, callbacks, id]
  );
  const onPointerEnter = React7.useCallback(
    (e) => {
      var _a;
      if (!inputs2.pointerIsValid(e))
        return;
      (_a = callbacks.onHoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, id), e);
    },
    [inputs2, callbacks, id]
  );
  const onPointerLeave = React7.useCallback(
    (e) => {
      var _a;
      if (!inputs2.pointerIsValid(e))
        return;
      (_a = callbacks.onUnhoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, id), e);
    },
    [inputs2, callbacks, id]
  );
  return {
    onPointerDown,
    onPointerUp,
    onPointerEnter,
    onPointerMove,
    onPointerLeave
  };
}

// src/hooks/useCameraCss.tsx
import * as React8 from "react";
function useCameraCss(layerRef, containerRef, pageState) {
  const rZoom = React8.useRef();
  const rPoint = React8.useRef();
  React8.useLayoutEffect(() => {
    const { zoom, point } = pageState.camera;
    const didZoom = zoom !== rZoom.current;
    const didPan = point !== rPoint.current;
    rZoom.current = zoom;
    rPoint.current = point;
    if (didZoom || didPan) {
      const layer = layerRef.current;
      if (containerRef && "current" in containerRef) {
        const container = containerRef.current;
        if (didZoom) {
          if (container) {
            container.style.setProperty("--tl-zoom", zoom.toString());
          }
        }
        if (layer) {
          layer.style.setProperty(
            "transform",
            `scale(${zoom}) translateX(${point[0]}px) translateY(${point[1]}px)`
          );
        }
      }
    }
  }, [pageState.camera.zoom, pageState.camera.point]);
}

// src/hooks/useSelection.tsx
import * as React9 from "react";
function canvasToScreen(point, camera) {
  return [(point[0] + camera.point[0]) * camera.zoom, (point[1] + camera.point[1]) * camera.zoom];
}
function getShapeUtils(shapeUtils, shape) {
  return shapeUtils[shape.type];
}
function useSelection(page, pageState, shapeUtils) {
  const { rSelectionBounds } = useTLContext();
  const { selectedIds } = pageState;
  const rPrevBounds = React9.useRef();
  let bounds = void 0;
  let rotation = 0;
  let isLocked = false;
  let isLinked = false;
  if (selectedIds.length === 1) {
    const id = selectedIds[0];
    const shape = page.shapes[id];
    if (!shape) {
      throw Error(`selectedIds is set to the id of a shape that doesn't exist: ${id}`);
    }
    rotation = shape.rotation || 0;
    isLocked = shape.isLocked || false;
    const utils = getShapeUtils(shapeUtils, shape);
    bounds = utils.hideBounds ? void 0 : utils.getBounds(shape);
  } else if (selectedIds.length > 1) {
    const selectedShapes = selectedIds.map((id) => page.shapes[id]);
    rotation = 0;
    isLocked = selectedShapes.every((shape) => shape.isLocked);
    bounds = selectedShapes.reduce((acc, shape, i) => {
      if (i === 0) {
        return getShapeUtils(shapeUtils, shape).getRotatedBounds(shape);
      }
      return utils_default.getExpandedBounds(acc, getShapeUtils(shapeUtils, shape).getRotatedBounds(shape));
    }, {});
  }
  if (bounds) {
    const [minX, minY] = canvasToScreen([bounds.minX, bounds.minY], pageState.camera);
    const [maxX, maxY] = canvasToScreen([bounds.maxX, bounds.maxY], pageState.camera);
    isLinked = !!Object.values(page.bindings).find(
      (binding) => selectedIds.includes(binding.toId) || selectedIds.includes(binding.fromId)
    );
    rSelectionBounds.current = {
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  } else {
    rSelectionBounds.current = null;
  }
  const prevBounds = rPrevBounds.current;
  if (!prevBounds || !bounds) {
    rPrevBounds.current = bounds;
  } else if (bounds) {
    if (prevBounds.minX === bounds.minX && prevBounds.minY === bounds.minY && prevBounds.maxX === bounds.maxX && prevBounds.maxY === bounds.maxY) {
      bounds = rPrevBounds.current;
    }
  }
  return { bounds, rotation, isLocked, isLinked };
}

// src/hooks/useHandleEvents.tsx
import * as React10 from "react";
function useHandleEvents(id) {
  const { inputs: inputs2, callbacks } = useTLContext();
  return React10.useMemo(() => {
    return {
      onPointerDown: (e) => {
        var _a, _b, _c;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.button === 2) {
          return;
        }
        (_a = e.currentTarget) == null ? void 0 : _a.setPointerCapture(e.pointerId);
        const info = inputs2.pointerDown(e, id);
        if (e.button === 0) {
          (_b = callbacks.onPointHandle) == null ? void 0 : _b.call(callbacks, info, e);
        }
        (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e);
      },
      onPointerUp: (e) => {
        var _a, _b, _c, _d;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.button === 2) {
          return;
        }
        const isDoubleClick = inputs2.isDoubleClick();
        const info = inputs2.pointerUp(e, id);
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
          if (e.button === 0) {
            if (isDoubleClick && !(info.altKey || info.metaKey)) {
              (_b = callbacks.onDoubleClickHandle) == null ? void 0 : _b.call(callbacks, info, e);
            }
            (_c = callbacks.onReleaseHandle) == null ? void 0 : _c.call(callbacks, info, e);
          }
        }
        (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
      },
      onPointerMove: (e) => {
        var _a, _b;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.buttons === 2) {
          return;
        }
        const info = inputs2.pointerMove(e, id);
        if (e.buttons === 1) {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            (_a = callbacks.onDragHandle) == null ? void 0 : _a.call(callbacks, info, e);
          }
        }
        (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
      },
      onPointerEnter: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        const info = inputs2.pointerEnter(e, id);
        (_a = callbacks.onHoverHandle) == null ? void 0 : _a.call(callbacks, info, e);
      },
      onPointerLeave: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        const info = inputs2.pointerEnter(e, id);
        (_a = callbacks.onUnhoverHandle) == null ? void 0 : _a.call(callbacks, info, e);
      }
    };
  }, [inputs2, callbacks, id]);
}

// src/hooks/usePreventNavigationCss.tsx
import * as React11 from "react";
function usePreventNavigationCss(rCanvas) {
  const { bounds } = useTLContext();
  React11.useEffect(() => {
    const preventGestureNavigation = (event) => {
      event.preventDefault();
    };
    const preventNavigation = (event) => {
      const touchXPosition = event.touches[0].pageX;
      const touchXRadius = event.touches[0].radiusX || 0;
      if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > bounds.width - 10) {
        event.preventDefault();
      }
    };
    const elm = rCanvas.current;
    if (!elm)
      return () => void 0;
    elm.addEventListener("gestureend", preventGestureNavigation);
    elm.addEventListener("gesturechange", preventGestureNavigation);
    elm.addEventListener("gesturestart", preventGestureNavigation);
    elm.addEventListener("touchstart", preventNavigation);
    return () => {
      if (elm) {
        elm.removeEventListener("gestureend", preventGestureNavigation);
        elm.removeEventListener("gesturechange", preventGestureNavigation);
        elm.removeEventListener("gesturestart", preventGestureNavigation);
        elm.removeEventListener("touchstart", preventNavigation);
      }
    };
  }, [rCanvas, bounds.width]);
}

// src/hooks/useBoundsEvents.tsx
import * as React12 from "react";
function useBoundsEvents() {
  const { callbacks, inputs: inputs2 } = useTLContext();
  return React12.useMemo(() => {
    return {
      onPointerDown: (e) => {
        var _a, _b, _c, _d;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.button === 2) {
          (_a = callbacks.onRightPointBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e, "bounds"), e);
          return;
        }
        const info = inputs2.pointerDown(e, "bounds");
        (_b = e.currentTarget) == null ? void 0 : _b.setPointerCapture(e.pointerId);
        if (e.button === 0) {
          (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, info, e);
        }
        (_d = callbacks.onPointerDown) == null ? void 0 : _d.call(callbacks, info, e);
      },
      onPointerUp: (e) => {
        var _a, _b, _c, _d;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (e.button === 2) {
          return;
        }
        inputs2.activePointer = void 0;
        if (!inputs2.pointerIsValid(e))
          return;
        const isDoubleClick = inputs2.isDoubleClick();
        const info = inputs2.pointerUp(e, "bounds");
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          (_a = e.currentTarget) == null ? void 0 : _a.releasePointerCapture(e.pointerId);
        }
        if (e.button === 0) {
          if (isDoubleClick && !(info.altKey || info.metaKey)) {
            (_b = callbacks.onDoubleClickBounds) == null ? void 0 : _b.call(callbacks, info, e);
          }
          (_c = callbacks.onReleaseBounds) == null ? void 0 : _c.call(callbacks, info, e);
        }
        (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e);
      },
      onPointerMove: (e) => {
        var _a, _b;
        if (e.dead)
          return;
        else
          e.dead = true;
        if (!inputs2.pointerIsValid(e))
          return;
        if (e.buttons === 1) {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            (_a = callbacks.onDragBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerMove(e, "bounds"), e);
          }
        }
        const info = inputs2.pointerMove(e, "bounds");
        (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e);
      },
      onPointerEnter: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        (_a = callbacks.onHoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
      },
      onPointerLeave: (e) => {
        var _a;
        if (!inputs2.pointerIsValid(e))
          return;
        (_a = callbacks.onUnhoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e, "bounds"), e);
      }
    };
  }, [inputs2, callbacks]);
}

// src/hooks/usePosition.ts
import * as React13 from "react";
function usePosition(bounds, rotation = 0) {
  const rBounds = React13.useRef(null);
  React13.useLayoutEffect(() => {
    const elm = rBounds.current;
    const transform = `
    translate(
      calc(${bounds.minX}px - var(--tl-padding)),
      calc(${bounds.minY}px - var(--tl-padding))
    )
    rotate(${rotation + (bounds.rotation || 0)}rad)`;
    elm.style.setProperty("transform", transform);
    elm.style.setProperty("width", `calc(${Math.floor(bounds.width)}px + (var(--tl-padding) * 2))`);
    elm.style.setProperty(
      "height",
      `calc(${Math.floor(bounds.height)}px + (var(--tl-padding) * 2))`
    );
  }, [bounds, rotation]);
  return rBounds;
}

// src/hooks/useKeyEvents.ts
import * as React14 from "react";
function useKeyEvents() {
  const { inputs: inputs2, callbacks } = useTLContext();
  React14.useEffect(() => {
    const handleKeyDown = (e) => {
      var _a;
      (_a = callbacks.onKeyDown) == null ? void 0 : _a.call(callbacks, e.key, inputs2.keydown(e), e);
    };
    const handleKeyUp = (e) => {
      var _a;
      inputs2.keyup(e);
      (_a = callbacks.onKeyUp) == null ? void 0 : _a.call(callbacks, e.key, inputs2.keyup(e), e);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inputs2, callbacks]);
}

// src/hooks/usePerformanceCss.ts
import * as React15 from "react";
function usePerformanceCss(performanceMode, rContainer) {
  React15.useLayoutEffect(() => {
    if (rContainer && "current" in rContainer) {
      const container = rContainer == null ? void 0 : rContainer.current;
      if (!container)
        return;
      switch (performanceMode) {
        case "transform_selected" /* TransformSelected */: {
          container.style.setProperty("--tl-performance-all", "auto");
          container.style.setProperty("--tl-performance-selected", "transform, contents");
          break;
        }
        case "transform_all" /* TransformAll */: {
          container.style.setProperty("--tl-performance-all", "transform, contents");
          container.style.setProperty("--tl-performance-selected", "transform, contents");
          break;
        }
        case "translate_selected" /* TranslateSelected */: {
          container.style.setProperty("--tl-performance-all", "auto");
          container.style.setProperty("--tl-performance-selected", "transform");
          break;
        }
        case "translate_all" /* TranslateAll */: {
          container.style.setProperty("--tl-performance-all", "transform");
          container.style.setProperty("--tl-performance-selected", "transform");
          break;
        }
        default: {
          container.style.setProperty("--tl-performance-all", "auto");
          container.style.setProperty("--tl-performance-selected", "auto");
        }
      }
    }
  }, [performanceMode]);
}

// src/components/Container/Container.tsx
import { jsx } from "react/jsx-runtime";
function _Container(_a) {
  var _b = _a, {
    id,
    bounds,
    rotation = 0,
    isGhost = false,
    isSelected = false,
    children
  } = _b, props = __objRest(_b, [
    "id",
    "bounds",
    "rotation",
    "isGhost",
    "isSelected",
    "children"
  ]);
  const rPositioned = usePosition(bounds, rotation);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({
    id,
    ref: rPositioned,
    className: `tl-positioned${isGhost ? " tl-ghost" : ""}${isSelected ? ` tl-positioned-selected` : ""}`,
    "aria-label": "container",
    "data-testid": "container"
  }, props), {
    children
  }));
}
var Container = React16.memo(_Container);

// src/components/Brush/Brush.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function _Brush({ brush, zoom, dashed }) {
  return /* @__PURE__ */ jsx2(Container, {
    bounds: brush,
    rotation: 0,
    children: /* @__PURE__ */ jsxs(SVGContainer, {
      children: [
        /* @__PURE__ */ jsx2("rect", {
          className: "tl-brush" + (dashed ? " dashed" : ""),
          opacity: 1,
          x: 0,
          y: 0,
          width: brush.width,
          height: brush.height,
          "aria-label": "brush"
        }),
        dashed && /* @__PURE__ */ jsxs("g", {
          className: "tl-dashed-brush-line",
          children: [
            /* @__PURE__ */ jsx2(PerfectDashLine, {
              x1: 0,
              y1: 0,
              x2: brush.width,
              y2: 0,
              zoom
            }),
            /* @__PURE__ */ jsx2(PerfectDashLine, {
              x1: brush.width,
              y1: 0,
              x2: brush.width,
              y2: brush.height,
              zoom
            }),
            /* @__PURE__ */ jsx2(PerfectDashLine, {
              x1: 0,
              y1: brush.height,
              x2: brush.width,
              y2: brush.height,
              zoom
            }),
            /* @__PURE__ */ jsx2(PerfectDashLine, {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: brush.height,
              zoom
            })
          ]
        })
      ]
    })
  });
}
var Brush = React17.memo(_Brush);
function PerfectDashLine({ x1, y1, x2, y2, zoom }) {
  const dash = utils_default.getPerfectDashProps(
    Math.hypot(x2 - x1, y2 - y1),
    1 / zoom,
    "dashed",
    1,
    true,
    3
  );
  return /* @__PURE__ */ jsx2("line", {
    x1,
    y1,
    x2,
    y2,
    strokeWidth: 1 / zoom,
    strokeDasharray: dash.strokeDasharray,
    strokeDashoffset: dash.strokeDashoffset
  });
}

// src/components/Cursor/Cursor.tsx
import * as React18 from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Cursor = React18.memo(({ color }) => {
  return /* @__PURE__ */ jsxs2("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 35 35",
    fill: "none",
    fillRule: "evenodd",
    children: [
      /* @__PURE__ */ jsxs2("g", {
        fill: "rgba(0,0,0,.2)",
        transform: "translate(1,1)",
        children: [
          /* @__PURE__ */ jsx3("path", {
            d: "m12 24.4219v-16.015l11.591 11.619h-6.781l-.411.124z"
          }),
          /* @__PURE__ */ jsx3("path", {
            d: "m21.0845 25.0962-3.605 1.535-4.682-11.089 3.686-1.553z"
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("g", {
        fill: "white",
        children: [
          /* @__PURE__ */ jsx3("path", {
            d: "m12 24.4219v-16.015l11.591 11.619h-6.781l-.411.124z"
          }),
          /* @__PURE__ */ jsx3("path", {
            d: "m21.0845 25.0962-3.605 1.535-4.682-11.089 3.686-1.553z"
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("g", {
        fill: color,
        children: [
          /* @__PURE__ */ jsx3("path", {
            d: "m19.751 24.4155-1.844.774-3.1-7.374 1.841-.775z"
          }),
          /* @__PURE__ */ jsx3("path", {
            d: "m13 10.814v11.188l2.969-2.866.428-.139h4.768z"
          })
        ]
      })
    ]
  });
});

// src/components/EraseLine/EraseLine.tsx
import getStroke from "perfect-freehand";
import * as React19 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
function _EraseLine({ points, zoom }) {
  if (points.length === 0)
    return null;
  const d = utils_default.getSvgPathFromStroke(
    getStroke(points, { size: 16 / zoom, start: { taper: true } })
  );
  return /* @__PURE__ */ jsx4("path", {
    d,
    className: "tl-erase-line"
  });
}
var EraseLine = React19.memo(_EraseLine);

// src/components/Grid/Grid.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var STEPS = [
  [-1, 0.15, 64],
  [0.05, 0.375, 16],
  [0.15, 1, 4],
  [0.7, 2.5, 1]
];
function Grid({ grid, camera }) {
  return /* @__PURE__ */ jsxs3("svg", {
    className: "tl-grid",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx5("defs", {
        children: STEPS.map(([min, mid, size], i) => {
          const s = size * grid * camera.zoom;
          const xo = camera.point[0] * camera.zoom;
          const yo = camera.point[1] * camera.zoom;
          const gxo = xo > 0 ? xo % s : s + xo % s;
          const gyo = yo > 0 ? yo % s : s + yo % s;
          const opacity = camera.zoom < mid ? utils_default.modulate(camera.zoom, [min, mid], [0, 1]) : 1;
          return /* @__PURE__ */ jsx5("pattern", {
            id: `grid-${i}`,
            width: s,
            height: s,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ jsx5("circle", {
              className: `tl-grid-dot`,
              cx: gxo,
              cy: gyo,
              r: 1,
              opacity
            })
          }, `grid-pattern-${i}`);
        })
      }),
      STEPS.map((_, i) => /* @__PURE__ */ jsx5("rect", {
        width: "100%",
        height: "100%",
        fill: `url(#grid-${i})`
      }, `grid-rect-${i}`))
    ]
  });
}

// src/components/Overlay/Overlay.tsx
import * as React20 from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function _Overlay({ camera: { zoom, point }, children }) {
  const l = 2.5 / zoom;
  return /* @__PURE__ */ jsxs4("svg", {
    className: "tl-overlay",
    children: [
      /* @__PURE__ */ jsx6("defs", {
        children: /* @__PURE__ */ jsx6("g", {
          id: "tl-snap-point",
          children: /* @__PURE__ */ jsx6("path", {
            className: "tl-snap-point",
            d: `M ${-l},${-l} L ${l},${l} M ${-l},${l} L ${l},${-l}`
          })
        })
      }),
      /* @__PURE__ */ jsx6("g", {
        transform: `scale(${zoom}) translate(${point})`,
        children
      })
    ]
  });
}
var Overlay = React20.memo(_Overlay);

// src/components/Page/Page.tsx
import * as React37 from "react";

// src/components/Bounds/Bounds.tsx
import * as React29 from "react";

// src/components/SVGContainer/SVGContainer.tsx
import * as React21 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SVGContainer = React21.memo(
  React21.forwardRef(function SVGContainer2(_a, ref) {
    var _b = _a, { id, className = "", children } = _b, rest = __objRest(_b, ["id", "className", "children"]);
    return /* @__PURE__ */ jsx7("svg", __spreadProps(__spreadValues({
      ref,
      className: `tl-positioned-svg ${className}`
    }, rest), {
      children: /* @__PURE__ */ jsx7("g", {
        id,
        className: "tl-centered-g",
        children
      })
    }));
  })
);

// src/components/Bounds/CenterHandle.tsx
import * as React22 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
function _CenterHandle({ bounds, isLocked, isHidden }) {
  return /* @__PURE__ */ jsx8("rect", {
    className: ["tl-bounds-center", isLocked ? "tl-dashed" : ""].join(" "),
    x: -1,
    y: -1,
    width: bounds.width + 2,
    height: bounds.height + 2,
    opacity: isHidden ? 0 : 1,
    pointerEvents: "none",
    "aria-label": "center handle"
  });
}
var CenterHandle = React22.memo(_CenterHandle);

// src/components/Bounds/CloneButtons.tsx
import * as React24 from "react";

// src/components/Bounds/CloneButton.tsx
import * as React23 from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var ROTATIONS = {
  right: 0,
  bottomRight: 45,
  bottom: 90,
  bottomLeft: 135,
  left: 180,
  topLeft: 225,
  top: 270,
  topRight: 315
};
function _CloneButton({ bounds, side, targetSize, size }) {
  const s = targetSize * 2;
  const x = {
    left: -s,
    topLeft: -s,
    bottomLeft: -s,
    right: bounds.width,
    topRight: bounds.width,
    bottomRight: bounds.width,
    top: bounds.width / 2 - s / 2,
    bottom: bounds.width / 2 - s / 2
  }[side];
  const y = {
    left: bounds.height / 2 - s / 2,
    right: bounds.height / 2 - s / 2,
    top: -s * 2,
    topLeft: -s,
    topRight: -s,
    bottom: bounds.height,
    bottomLeft: bounds.height,
    bottomRight: bounds.height
  }[side];
  const { callbacks, inputs: inputs2 } = useTLContext();
  const handleClick = React23.useCallback(
    (e) => {
      var _a;
      e.stopPropagation();
      const info = inputs2.pointerDown(e, side);
      (_a = callbacks.onShapeClone) == null ? void 0 : _a.call(callbacks, info, e);
    },
    [callbacks.onShapeClone]
  );
  return /* @__PURE__ */ jsxs5("g", {
    className: "tl-clone-target",
    transform: `translate(${x}, ${y})`,
    "aria-label": "clone button",
    children: [
      /* @__PURE__ */ jsx9("rect", {
        className: "tl-transparent",
        width: targetSize * 2,
        height: targetSize * 2
      }),
      /* @__PURE__ */ jsxs5("g", {
        className: "tl-clone-button-target",
        onPointerDown: handleClick,
        transform: `translate(${targetSize}, ${targetSize}) rotate(${ROTATIONS[side]})`,
        children: [
          /* @__PURE__ */ jsx9("circle", {
            className: "tl-transparent ",
            r: targetSize
          }),
          /* @__PURE__ */ jsx9("path", {
            className: "tl-clone-button",
            d: `M -${size / 2},-${size / 2} L ${size / 2},0 -${size / 2},${size / 2} Z`,
            strokeLinejoin: "round"
          })
        ]
      })
    ]
  });
}
var CloneButton = React23.memo(_CloneButton);

// src/components/Bounds/CloneButtons.tsx
import { Fragment, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function _CloneButtons({ targetSize, size, bounds }) {
  return /* @__PURE__ */ jsxs6(Fragment, {
    children: [
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "top"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "right"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "bottom"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "left"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "topLeft"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "topRight"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "bottomLeft"
      }),
      /* @__PURE__ */ jsx10(CloneButton, {
        targetSize,
        size,
        bounds,
        side: "bottomRight"
      })
    ]
  });
}
var CloneButtons = React24.memo(_CloneButtons);

// src/components/Bounds/CornerHandle.tsx
import * as React25 from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var cornerBgClassnames = {
  ["top_left_corner" /* TopLeft */]: "tl-cursor-nwse",
  ["top_right_corner" /* TopRight */]: "tl-cursor-nesw",
  ["bottom_right_corner" /* BottomRight */]: "tl-cursor-nwse",
  ["bottom_left_corner" /* BottomLeft */]: "tl-cursor-nesw"
};
function _CornerHandle({ size, targetSize, isHidden, corner, bounds }) {
  const events = useBoundsHandleEvents(corner);
  const isTop = corner === "top_left_corner" /* TopLeft */ || corner === "top_right_corner" /* TopRight */;
  const isLeft = corner === "top_left_corner" /* TopLeft */ || corner === "bottom_left_corner" /* BottomLeft */;
  return /* @__PURE__ */ jsxs7("g", {
    opacity: isHidden ? 0 : 1,
    children: [
      /* @__PURE__ */ jsx11("rect", __spreadValues({
        className: "tl-transparent " + (isHidden ? "" : cornerBgClassnames[corner]),
        "aria-label": "corner transparent",
        x: (isLeft ? -1 : bounds.width + 1) - targetSize,
        y: (isTop ? -1 : bounds.height + 1) - targetSize,
        width: targetSize * 2,
        height: targetSize * 2,
        pointerEvents: isHidden ? "none" : "all"
      }, events)),
      /* @__PURE__ */ jsx11("rect", {
        className: "tl-corner-handle",
        "aria-label": "corner handle",
        x: (isLeft ? -1 : bounds.width + 1) - size / 2,
        y: (isTop ? -1 : bounds.height + 1) - size / 2,
        width: size,
        height: size,
        pointerEvents: "none"
      })
    ]
  });
}
var CornerHandle = React25.memo(_CornerHandle);

// src/components/Bounds/EdgeHandle.tsx
import * as React26 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var edgeClassnames = {
  ["top_edge" /* Top */]: "tl-cursor-ns",
  ["right_edge" /* Right */]: "tl-cursor-ew",
  ["bottom_edge" /* Bottom */]: "tl-cursor-ns",
  ["left_edge" /* Left */]: "tl-cursor-ew"
};
function _EdgeHandle({ size, isHidden, bounds, edge }) {
  const events = useBoundsHandleEvents(edge);
  const isHorizontal = edge === "top_edge" /* Top */ || edge === "bottom_edge" /* Bottom */;
  const isFarEdge = edge === "right_edge" /* Right */ || edge === "bottom_edge" /* Bottom */;
  const { height, width } = bounds;
  return /* @__PURE__ */ jsx12("rect", __spreadValues({
    pointerEvents: isHidden ? "none" : "all",
    className: "tl-transparent tl-edge-handle " + (isHidden ? "" : edgeClassnames[edge]),
    "aria-label": `${edge} handle`,
    opacity: isHidden ? 0 : 1,
    x: isHorizontal ? size / 2 : (isFarEdge ? width + 1 : -1) - size / 2,
    y: isHorizontal ? (isFarEdge ? height + 1 : -1) - size / 2 : size / 2,
    width: isHorizontal ? Math.max(0, width + 1 - size) : size,
    height: isHorizontal ? size : Math.max(0, height + 1 - size)
  }, events));
}
var EdgeHandle = React26.memo(_EdgeHandle);

// src/components/Bounds/LinkHandle.tsx
import * as React27 from "react";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
function _LinkHandle({ size, bounds, isHidden }) {
  const leftEvents = useBoundsHandleEvents("left");
  const centerEvents = useBoundsHandleEvents("center");
  const rightEvents = useBoundsHandleEvents("right");
  return /* @__PURE__ */ jsxs8("g", {
    cursor: "grab",
    transform: `translate(${bounds.width / 2 - size * 4}, ${bounds.height + size * 2})`,
    "aria-label": "link handle",
    children: [
      /* @__PURE__ */ jsxs8("g", {
        className: "tl-transparent",
        pointerEvents: isHidden ? "none" : "all",
        children: [
          /* @__PURE__ */ jsx13("rect", __spreadValues({
            x: 0,
            y: 0,
            width: size * 2,
            height: size * 2
          }, leftEvents)),
          /* @__PURE__ */ jsx13("rect", __spreadValues({
            x: size * 3,
            y: 0,
            width: size * 2,
            height: size * 2
          }, centerEvents)),
          /* @__PURE__ */ jsx13("rect", __spreadValues({
            x: size * 6,
            y: 0,
            width: size * 2,
            height: size * 2
          }, rightEvents))
        ]
      }),
      /* @__PURE__ */ jsxs8("g", {
        className: "tl-rotate-handle",
        transform: `translate(${size / 2}, ${size / 2})`,
        "aria-label": "link rotate handle",
        children: [
          /* @__PURE__ */ jsx13("path", {
            d: `M 0,${size / 2} L ${size},${size} ${size},0 Z`,
            pointerEvents: "none",
            opacity: isHidden ? 0 : 1
          }),
          /* @__PURE__ */ jsx13("path", {
            transform: `translate(${size * 3}, 0)`,
            d: `M 0,0 L ${size},0 ${size / 2},${size} Z`,
            pointerEvents: "none",
            opacity: isHidden ? 0 : 1
          }),
          /* @__PURE__ */ jsx13("path", {
            transform: `translate(${size * 6}, 0)`,
            d: `M ${size},${size / 2} L 0,0 0,${size} Z`,
            pointerEvents: "none",
            opacity: isHidden ? 0 : 1
          })
        ]
      })
    ]
  });
}
var LinkHandle = React27.memo(_LinkHandle);

// src/components/Bounds/RotateHandle.tsx
import * as React28 from "react";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function _RotateHandle({ bounds, targetSize, size, isHidden }) {
  const events = useBoundsHandleEvents("rotate");
  return /* @__PURE__ */ jsxs9("g", {
    cursor: "grab",
    opacity: isHidden ? 0 : 1,
    children: [
      /* @__PURE__ */ jsx14("circle", __spreadValues({
        className: "tl-transparent",
        "aria-label": "rotate handle transparent",
        cx: bounds.width / 2,
        cy: size * -2,
        r: targetSize,
        pointerEvents: isHidden ? "none" : "all"
      }, events)),
      /* @__PURE__ */ jsx14("circle", {
        className: "tl-rotate-handle",
        "aria-label": "rotate handle",
        cx: bounds.width / 2,
        cy: size * -2,
        r: size / 2,
        pointerEvents: "none"
      })
    ]
  });
}
var RotateHandle = React28.memo(_RotateHandle);

// src/components/Bounds/Bounds.tsx
import { Fragment as Fragment2, jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var _Bounds = function Bounds({
  zoom,
  bounds,
  viewportWidth,
  rotation,
  isHidden,
  isLocked,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideBindingHandles
}) {
  const targetSize = (viewportWidth < 768 ? 16 : 8) / zoom;
  const size = 8 / zoom;
  const smallDimension = Math.min(bounds.width, bounds.height) * zoom;
  const showRotateHandle = !hideRotateHandle && !isHidden && !isLocked && smallDimension > 32;
  const showEdgeHandles = !isHidden && !isLocked && smallDimension > 24;
  const showCornerHandles = !isHidden && !isLocked && smallDimension > 20;
  const showCloneHandles = !hideCloneHandles && smallDimension > 24;
  const showResizeHandles = !hideResizeHandles && !isLocked;
  return /* @__PURE__ */ jsx15(Container, {
    bounds,
    rotation,
    children: /* @__PURE__ */ jsxs10(SVGContainer, {
      children: [
        /* @__PURE__ */ jsx15(CenterHandle, {
          bounds,
          isLocked,
          isHidden
        }),
        showResizeHandles ? /* @__PURE__ */ jsxs10(Fragment2, {
          children: [
            /* @__PURE__ */ jsx15(EdgeHandle, {
              targetSize,
              size,
              bounds,
              edge: "top_edge" /* Top */,
              isHidden: !showEdgeHandles
            }),
            /* @__PURE__ */ jsx15(EdgeHandle, {
              targetSize,
              size,
              bounds,
              edge: "right_edge" /* Right */,
              isHidden: !showEdgeHandles
            }),
            /* @__PURE__ */ jsx15(EdgeHandle, {
              targetSize,
              size,
              bounds,
              edge: "bottom_edge" /* Bottom */,
              isHidden: !showEdgeHandles
            }),
            /* @__PURE__ */ jsx15(EdgeHandle, {
              targetSize,
              size,
              bounds,
              edge: "left_edge" /* Left */,
              isHidden: !showEdgeHandles
            }),
            /* @__PURE__ */ jsx15(CornerHandle, {
              targetSize,
              size,
              bounds,
              isHidden: isHidden || !showCornerHandles,
              corner: "top_left_corner" /* TopLeft */
            }),
            /* @__PURE__ */ jsx15(CornerHandle, {
              targetSize,
              size,
              bounds,
              isHidden: isHidden || !showCornerHandles,
              corner: "top_right_corner" /* TopRight */
            }),
            /* @__PURE__ */ jsx15(CornerHandle, {
              targetSize,
              size,
              bounds,
              isHidden: isHidden || !showCornerHandles,
              corner: "bottom_right_corner" /* BottomRight */
            }),
            /* @__PURE__ */ jsx15(CornerHandle, {
              targetSize,
              size,
              bounds,
              isHidden: isHidden || !showCornerHandles,
              corner: "bottom_left_corner" /* BottomLeft */
            })
          ]
        }) : null,
        showRotateHandle && /* @__PURE__ */ jsx15(RotateHandle, {
          targetSize,
          size,
          bounds,
          isHidden: !showEdgeHandles
        }),
        showCloneHandles && /* @__PURE__ */ jsx15(CloneButtons, {
          bounds,
          targetSize,
          size
        }),
        !hideBindingHandles && /* @__PURE__ */ jsx15(LinkHandle, {
          targetSize,
          size,
          bounds,
          isHidden: !showEdgeHandles
        })
      ]
    })
  });
};
var Bounds2 = React29.memo(_Bounds);

// src/components/Bounds/BoundsBg.tsx
import * as React30 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
function _BoundsBg({ bounds, rotation, isHidden }) {
  const events = useBoundsEvents();
  return /* @__PURE__ */ jsx16(Container, {
    bounds,
    rotation,
    children: /* @__PURE__ */ jsx16(SVGContainer, {
      children: /* @__PURE__ */ jsx16("rect", __spreadValues({
        className: "tl-bounds-bg",
        "aria-label": "bounds bg",
        width: bounds.width,
        height: bounds.height,
        opacity: isHidden ? 0 : 1
      }, events))
    })
  });
}
var BoundsBg = React30.memo(_BoundsBg);

// src/components/Handles/Handles.tsx
import { Vec as Vec4 } from "@tldraw/vec";
import * as React32 from "react";

// src/components/Handles/Handle.tsx
import * as React31 from "react";
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
function _Handle({ id, point }) {
  const events = useHandleEvents(id);
  return /* @__PURE__ */ jsx17(Container, {
    bounds: utils_default.translateBounds(
      {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 0,
        height: 0
      },
      point
    ),
    children: /* @__PURE__ */ jsx17(SVGContainer, {
      children: /* @__PURE__ */ jsxs11("g", __spreadProps(__spreadValues({
        className: "tl-handle",
        "aria-label": "handle"
      }, events), {
        children: [
          /* @__PURE__ */ jsx17("circle", {
            className: "tl-handle-bg",
            pointerEvents: "all"
          }),
          /* @__PURE__ */ jsx17("circle", {
            className: "tl-counter-scaled tl-handle",
            pointerEvents: "none",
            r: 4
          })
        ]
      }))
    })
  });
}
var Handle = React31.memo(_Handle);

// src/components/Handles/Handles.tsx
import { Fragment as Fragment3, jsx as jsx18 } from "react/jsx-runtime";
function _Handles({ shape, zoom }) {
  if (shape.handles === void 0) {
    return null;
  }
  let prev = null;
  const handlesToShow = Object.values(shape.handles).reduce((acc, cur) => {
    const point = Vec4.add(cur.point, shape.point);
    if (!prev || Vec4.dist(point, prev) * zoom >= 32) {
      acc.push(cur);
      prev = point;
    }
    return acc;
  }, []);
  if (handlesToShow.length === 1)
    return null;
  return /* @__PURE__ */ jsx18(Fragment3, {
    children: handlesToShow.map((handle) => /* @__PURE__ */ jsx18(Handle, {
      id: handle.id,
      point: Vec4.add(handle.point, shape.point)
    }, shape.id + "_" + handle.id))
  });
}
var Handles = React32.memo(_Handles);

// src/components/Shape/ShapeNode.tsx
import * as React35 from "react";

// src/components/Shape/Shape.tsx
import * as React34 from "react";

// src/components/Shape/RenderedShape.tsx
import * as React33 from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
function _RenderedShape(props) {
  const ref = props.utils.getRef(props.shape);
  return /* @__PURE__ */ jsx19(props.utils.Component, __spreadValues({
    ref
  }, props));
}
var RenderedShape = React33.memo(_RenderedShape, (prev, next) => {
  if (prev.isHovered !== next.isHovered || prev.isSelected !== next.isSelected || prev.isEditing !== next.isEditing || prev.isBinding !== next.isBinding || prev.isGhost !== next.isGhost || prev.meta !== next.meta) {
    return false;
  }
  if (next.shape !== prev.shape) {
    return !next.utils.shouldRender(next.shape, prev.shape);
  }
  return true;
});

// src/components/Shape/Shape.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function _Shape(_a) {
  var _b = _a, {
    shape,
    utils,
    meta
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta"
  ]);
  const { callbacks } = useTLContext();
  const bounds = utils.getBounds(shape);
  const events = useShapeEvents(shape.id);
  return /* @__PURE__ */ jsx20(Container, {
    id: shape.id,
    bounds,
    rotation: shape.rotation,
    "data-shape": shape.type,
    isGhost: rest.isGhost,
    isSelected: rest.isSelected,
    children: /* @__PURE__ */ jsx20(RenderedShape, __spreadValues({
      shape,
      utils,
      meta,
      events,
      bounds,
      onShapeChange: callbacks.onShapeChange,
      onShapeBlur: callbacks.onShapeBlur
    }, rest))
  });
}
var Shape = React34.memo(_Shape);

// src/components/Shape/ShapeNode.tsx
import { Fragment as Fragment4, jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
function _ShapeNode(_a) {
  var _b = _a, {
    shape,
    utils,
    meta,
    children
  } = _b, rest = __objRest(_b, [
    "shape",
    "utils",
    "meta",
    "children"
  ]);
  return /* @__PURE__ */ jsxs12(Fragment4, {
    children: [
      /* @__PURE__ */ jsx21(Shape, __spreadValues({
        shape,
        utils: utils[shape.type],
        meta
      }, rest)),
      children && children.map((childNode) => /* @__PURE__ */ jsx21(ShapeNode, __spreadValues({
        utils
      }, childNode), childNode.shape.id))
    ]
  });
}
var ShapeNode = React35.memo(_ShapeNode);

// src/components/ShapeIndicator/ShapeIndicator.tsx
import * as React36 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
function _ShapeIndicator({
  isHovered = false,
  isSelected = false,
  isEditing = false,
  shape,
  user,
  meta
}) {
  const { shapeUtils } = useTLContext();
  const utils = shapeUtils[shape.type];
  const bounds = utils.getBounds(shape);
  const rPositioned = usePosition(bounds, shape.rotation);
  return /* @__PURE__ */ jsx22("div", {
    ref: rPositioned,
    draggable: false,
    className: [
      "tl-indicator",
      "tl-absolute",
      isSelected && !user ? "tl-selected" : "tl-hovered",
      isEditing ? "tl-editing" : "",
      shape.isLocked ? "tl-locked" : ""
    ].join(" "),
    children: /* @__PURE__ */ jsx22("svg", {
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ jsx22("g", {
        className: "tl-centered-g",
        stroke: user == null ? void 0 : user.color,
        children: /* @__PURE__ */ jsx22(utils.Indicator, {
          shape,
          meta,
          user,
          bounds,
          isSelected,
          isHovered
        })
      })
    })
  });
}
var ShapeIndicator = React36.memo(_ShapeIndicator);

// src/components/Page/Page.tsx
import { Fragment as Fragment5, jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
function _Page({
  page,
  pageState,
  assets,
  hideBounds,
  hideHandles,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideRotateHandle,
  hideResizeHandles,
  meta
}) {
  const { bounds: rendererBounds, shapeUtils } = useTLContext();
  const shapeTree = useShapeTree(page, pageState, assets, meta);
  const { bounds, isLinked, isLocked, rotation } = useSelection(page, pageState, shapeUtils);
  const {
    selectedIds,
    hoveredId,
    editingId,
    camera: { zoom }
  } = pageState;
  let _hideIndicators = hideIndicators;
  let _hideCloneHandles = true;
  let _isEditing = false;
  let shapeWithHandles = void 0;
  const selectedShapes = selectedIds.map((id) => page.shapes[id]);
  if (selectedShapes.length === 1) {
    const shape = selectedShapes[0];
    _isEditing = editingId === shape.id;
    if (_isEditing)
      _hideIndicators = true;
    const utils = shapeUtils[shape.type];
    _hideCloneHandles = hideCloneHandles || !utils.showCloneHandles;
    if (shape.handles !== void 0 && !_isEditing) {
      shapeWithHandles = shape;
    }
  }
  return /* @__PURE__ */ jsxs13(Fragment5, {
    children: [
      bounds && /* @__PURE__ */ jsx23(BoundsBg, {
        bounds,
        rotation,
        isHidden: hideBounds
      }),
      shapeTree.map((node) => /* @__PURE__ */ jsx23(ShapeNode, __spreadValues({
        utils: shapeUtils
      }, node), node.shape.id)),
      !_hideIndicators && selectedShapes.map((shape) => /* @__PURE__ */ jsx23(ShapeIndicator, {
        shape,
        meta,
        isSelected: true,
        isEditing: _isEditing
      }, "selected_" + shape.id)),
      !_hideIndicators && hoveredId && hoveredId !== editingId && /* @__PURE__ */ jsx23(ShapeIndicator, {
        shape: page.shapes[hoveredId],
        meta,
        isHovered: true
      }, "hovered_" + hoveredId),
      bounds && /* @__PURE__ */ jsx23(Bounds2, {
        zoom,
        bounds,
        viewportWidth: rendererBounds.width,
        isLocked,
        rotation,
        isHidden: hideBounds,
        hideRotateHandle,
        hideResizeHandles,
        hideBindingHandles: hideBindingHandles || !isLinked,
        hideCloneHandles: _hideCloneHandles
      }),
      !hideHandles && shapeWithHandles && /* @__PURE__ */ jsx23(Handles, {
        shape: shapeWithHandles,
        zoom
      })
    ]
  });
}
var Page = React37.memo(_Page);

// src/components/SnapLines/SnapLines.tsx
import * as React38 from "react";
import { Fragment as Fragment6, jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
function _SnapLines({ snapLines }) {
  return /* @__PURE__ */ jsx24(Fragment6, {
    children: snapLines.map((snapLine, i) => /* @__PURE__ */ jsx24(SnapLine, {
      snapLine
    }, i))
  });
}
function _SnapLine({ snapLine }) {
  const bounds = utils_default.getBoundsFromPoints(snapLine);
  return /* @__PURE__ */ jsxs14(Fragment6, {
    children: [
      /* @__PURE__ */ jsx24("line", {
        className: "tl-snap-line",
        x1: bounds.minX,
        y1: bounds.minY,
        x2: bounds.maxX,
        y2: bounds.maxY
      }),
      snapLine.map(([x, y], i) => /* @__PURE__ */ jsx24("use", {
        href: "#tl-snap-point",
        x,
        y
      }, i))
    ]
  });
}
var SnapLine = React38.memo(_SnapLine);
var SnapLines = React38.memo(_SnapLines);

// src/components/User/User.tsx
import * as React39 from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
function User({ user, Cursor: Cursor2 }) {
  const rCursor = React39.useRef(null);
  React39.useLayoutEffect(() => {
    if (rCursor.current) {
      rCursor.current.style.transform = `translate(${user.point[0]}px, ${user.point[1]}px)`;
    }
  }, [user.point]);
  return /* @__PURE__ */ jsx25("div", {
    ref: rCursor,
    className: `tl-absolute tl-user tl-counter-scaled ${user.session ? "" : "tl-animated"}`,
    children: /* @__PURE__ */ jsx25(Cursor2, {
      id: user.id,
      color: user.color,
      metadata: user.metadata
    })
  });
}

// src/components/Users/Users.tsx
import { Fragment as Fragment7, jsx as jsx26 } from "react/jsx-runtime";
function Users({ userId, users, Cursor: Cursor2 }) {
  return /* @__PURE__ */ jsx26(Fragment7, {
    children: Object.values(users).filter((user) => user && user.id !== userId).map((user) => /* @__PURE__ */ jsx26(User, {
      user,
      Cursor: Cursor2
    }, user.id))
  });
}

// src/components/UsersIndicators/UsersIndicators.tsx
import * as React40 from "react";
import { Fragment as Fragment9, jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
function UsersIndicators({
  userId,
  users,
  meta,
  page
}) {
  const { shapeUtils } = useTLContext();
  return /* @__PURE__ */ jsx27(Fragment9, {
    children: Object.values(users).filter(Boolean).filter((user) => user.id !== userId && user.selectedIds.length > 0).map((user) => {
      const shapes = user.selectedIds.map((id) => page.shapes[id]).filter(Boolean);
      if (shapes.length === 0)
        return null;
      const bounds = utils_default.getCommonBounds(
        shapes.map((shape) => shapeUtils[shape.type].getBounds(shape))
      );
      return /* @__PURE__ */ jsxs15(React40.Fragment, {
        children: [
          /* @__PURE__ */ jsx27("div", {
            className: "tl-absolute tl-user-indicator-bounds",
            style: {
              backgroundColor: user.color + "0d",
              borderColor: user.color + "78",
              transform: `translate(${bounds.minX}px, ${bounds.minY}px)`,
              width: bounds.width,
              height: bounds.height,
              pointerEvents: "none"
            }
          }),
          shapes.map((shape) => /* @__PURE__ */ jsx27(ShapeIndicator, {
            shape,
            user,
            meta,
            isHovered: true
          }, `${user.id}_${shape.id}_indicator`))
        ]
      }, user.id + "_shapes");
    })
  });
}

// src/hooks/useResizeObserver.ts
import * as React41 from "react";
var getNearestScrollableContainer = (element) => {
  let parent = element.parentElement;
  while (parent) {
    if (parent === document.body) {
      return document;
    }
    const { overflowY } = window.getComputedStyle(parent);
    const hasScrollableContent = parent.scrollHeight > parent.clientHeight;
    if (hasScrollableContent && (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay")) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document;
};
function useResizeObserver(ref, onBoundsChange) {
  const { inputs: inputs2, callbacks } = useTLContext();
  const rIsMounted = React41.useRef(false);
  const updateBounds = React41.useCallback(() => {
    var _a, _b;
    if (rIsMounted.current) {
      const rect = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect();
      if (rect) {
        const bounds = {
          minX: rect.left,
          maxX: rect.left + rect.width,
          minY: rect.top,
          maxY: rect.top + rect.height,
          width: rect.width,
          height: rect.height
        };
        inputs2.bounds = bounds;
        onBoundsChange(bounds);
        (_b = callbacks.onBoundsChange) == null ? void 0 : _b.call(callbacks, bounds);
      }
    } else {
      rIsMounted.current = true;
    }
  }, [ref, inputs2, callbacks.onBoundsChange]);
  React41.useEffect(() => {
    const scrollingAnchor = ref.current ? getNearestScrollableContainer(ref.current) : document;
    const debouncedupdateBounds = Utils.debounce(updateBounds, 100);
    scrollingAnchor.addEventListener("scroll", debouncedupdateBounds);
    window.addEventListener("resize", debouncedupdateBounds);
    return () => {
      scrollingAnchor.removeEventListener("scroll", debouncedupdateBounds);
      window.removeEventListener("resize", debouncedupdateBounds);
    };
  }, []);
  React41.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (inputs2.isPinching) {
        return;
      }
      if (entries[0].contentRect) {
        updateBounds();
      }
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, inputs2]);
  React41.useEffect(() => {
    updateBounds();
  }, [ref]);
}

// src/components/Canvas/Canvas.tsx
import { jsx as jsx28, jsxs as jsxs16 } from "react/jsx-runtime";
function _Canvas({
  id,
  page,
  pageState,
  assets,
  snapLines,
  eraseLine,
  grid,
  users,
  userId,
  components = {},
  meta,
  performanceMode,
  showDashedBrush,
  hideHandles,
  hideBounds,
  hideIndicators,
  hideBindingHandles,
  hideCloneHandles,
  hideResizeHandles,
  hideRotateHandle,
  hideGrid,
  onBoundsChange,
  hideCursors
}) {
  var _a;
  const rCanvas = React42.useRef(null);
  const rZoomRef = React42.useRef(pageState.camera.zoom);
  rZoomRef.current = pageState.camera.zoom;
  useZoomEvents(rZoomRef, rCanvas);
  useResizeObserver(rCanvas, onBoundsChange);
  useSafariFocusOutFix();
  usePreventNavigationCss(rCanvas);
  const rContainer = React42.useRef(null);
  const rLayer = React42.useRef(null);
  useCameraCss(rLayer, rContainer, pageState);
  usePerformanceCss(performanceMode, rContainer);
  useKeyEvents();
  const events = useCanvasEvents();
  return /* @__PURE__ */ jsx28("div", {
    id,
    className: "tl-container",
    ref: rContainer,
    children: /* @__PURE__ */ jsxs16("div", __spreadProps(__spreadValues({
      id: "canvas",
      className: "tl-absolute tl-canvas",
      ref: rCanvas
    }, events), {
      children: [
        !hideGrid && grid && /* @__PURE__ */ jsx28(Grid, {
          grid,
          camera: pageState.camera
        }),
        /* @__PURE__ */ jsxs16("div", {
          ref: rLayer,
          className: "tl-absolute tl-layer",
          "data-testid": "layer",
          children: [
            /* @__PURE__ */ jsx28(Page, {
              page,
              pageState,
              assets,
              hideBounds,
              hideIndicators,
              hideHandles,
              hideBindingHandles,
              hideCloneHandles,
              hideResizeHandles,
              hideRotateHandle,
              meta
            }),
            users && userId && /* @__PURE__ */ jsx28(UsersIndicators, {
              userId,
              users,
              page,
              meta
            }),
            pageState.brush && /* @__PURE__ */ jsx28(Brush, {
              brush: pageState.brush,
              dashed: showDashedBrush,
              zoom: pageState.camera.zoom
            }),
            users && !hideCursors && /* @__PURE__ */ jsx28(Users, {
              userId,
              users,
              Cursor: (_a = components == null ? void 0 : components.Cursor) != null ? _a : Cursor
            })
          ]
        }),
        /* @__PURE__ */ jsxs16(Overlay, {
          camera: pageState.camera,
          children: [
            eraseLine && /* @__PURE__ */ jsx28(EraseLine, {
              points: eraseLine,
              zoom: pageState.camera.zoom
            }),
            snapLines && /* @__PURE__ */ jsx28(SnapLines, {
              snapLines
            })
          ]
        })
      ]
    }))
  });
}
var Canvas = React42.memo(_Canvas);

// src/inputs.ts
import { Vec as Vec5 } from "@tldraw/vec";
var DOUBLE_CLICK_DURATION = 250;
var Inputs = class {
  constructor() {
    __publicField(this, "pointer");
    __publicField(this, "keyboard");
    __publicField(this, "keys", {});
    __publicField(this, "isPinching", false);
    __publicField(this, "bounds", {
      minX: 0,
      maxX: 640,
      minY: 0,
      maxY: 480,
      width: 640,
      height: 480
    });
    __publicField(this, "pointerUpTime", 0);
    __publicField(this, "activePointer");
    __publicField(this, "panStart", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const info = {
        target: "wheel",
        pointerId: ((_a = this.pointer) == null ? void 0 : _a.pointerId) || 0,
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        delta: [0, 0],
        pressure: 0.5,
        point: Inputs.getPoint(e, this.bounds),
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    });
    __publicField(this, "pan", (delta, e) => {
      if (!this.pointer || this.pointer.target !== "wheel") {
        return this.panStart(e);
      }
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      const prev = this.pointer;
      const point = Inputs.getPoint(e, this.bounds);
      const info = __spreadProps(__spreadValues({}, prev), {
        target: "wheel",
        delta,
        point,
        shiftKey,
        ctrlKey,
        metaKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      return info;
    });
    __publicField(this, "keydown", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      this.keys[e.key] = true;
      return {
        point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
    __publicField(this, "keyup", (e) => {
      var _a, _b;
      const { shiftKey, ctrlKey, metaKey, altKey } = e;
      delete this.keys[e.key];
      return {
        point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
        origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
        key: e.key,
        keys: Object.keys(this.keys),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey
      };
    });
  }
  pointerIsValid(e) {
    if ("pointerId" in e) {
      if (this.activePointer && this.activePointer !== e.pointerId) {
        return false;
      }
    }
    if ("touches" in e) {
      const touch = e.changedTouches[0];
      if (this.activePointer && this.activePointer !== touch.identifier) {
        return false;
      }
    }
    return true;
  }
  touchStart(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    this.activePointer = touch.identifier;
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  touchEnd(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const info = {
      target,
      pointerId: touch.identifier,
      origin: Inputs.getPoint(touch, this.bounds),
      delta: [0, 0],
      point: Inputs.getPoint(touch, this.bounds),
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    this.activePointer = void 0;
    return info;
  }
  touchMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const touch = e.changedTouches[0];
    const prev = this.pointer;
    const point = Inputs.getPoint(touch, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: touch.identifier,
      point,
      delta,
      pressure: Inputs.getPressure(touch),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerDown(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    this.activePointer = e.pointerId;
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      point,
      delta: [0, 0],
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerEnter(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const point = Inputs.getPoint(e, this.bounds);
    const info = {
      target,
      pointerId: e.pointerId,
      origin: point,
      delta: [0, 0],
      point,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  pointerMove(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    return info;
  }
  pointerUp(e, target) {
    const { shiftKey, ctrlKey, metaKey, altKey } = e;
    const prev = this.pointer;
    const point = Inputs.getPoint(e, this.bounds);
    const delta = (prev == null ? void 0 : prev.point) ? Vec5.sub(point, prev.point) : [0, 0];
    this.activePointer = void 0;
    const info = __spreadProps(__spreadValues({
      origin: point
    }, prev), {
      target,
      pointerId: e.pointerId,
      point,
      delta,
      pressure: Inputs.getPressure(e),
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    });
    this.pointer = info;
    this.pointerUpTime = performance.now();
    return info;
  }
  isDoubleClick() {
    if (!this.pointer)
      return false;
    const { origin, point } = this.pointer;
    const isDoubleClick = performance.now() - this.pointerUpTime < DOUBLE_CLICK_DURATION && Vec5.dist(origin, point) < 4;
    if (isDoubleClick)
      this.activePointer = void 0;
    return isDoubleClick;
  }
  clear() {
    this.pointer = void 0;
  }
  resetDoubleClick() {
    this.pointerUpTime = 0;
  }
  pinch(point, origin) {
    const { shiftKey, ctrlKey, metaKey, altKey } = this.keys;
    const delta = Vec5.sub(origin, point);
    const info = {
      pointerId: 0,
      target: "pinch",
      origin,
      delta,
      point: Vec5.sub(Vec5.toFixed(point), [this.bounds.minX, this.bounds.minY]),
      pressure: 0.5,
      shiftKey,
      ctrlKey,
      metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
      altKey,
      spaceKey: this.keys[" "]
    };
    this.pointer = info;
    return info;
  }
  reset() {
    this.pointerUpTime = 0;
    this.pointer = void 0;
    this.keyboard = void 0;
    this.activePointer = void 0;
    this.keys = {};
  }
  static getPoint(e, bounds) {
    return [+e.clientX.toFixed(2) - bounds.minX, +e.clientY.toFixed(2) - bounds.minY];
  }
  static getPressure(e) {
    return "pressure" in e ? +e.pressure.toFixed(2) || 0.5 : 0.5;
  }
  static commandKey() {
    return Utils.isDarwin() ? "\u2318" : "Ctrl";
  }
};
var inputs = new Inputs();

// src/components/Renderer/Renderer.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var EMPTY_OBJECT = Object.freeze({});
function _Renderer(_a) {
  var _b = _a, {
    id = "tl",
    shapeUtils,
    page,
    pageState,
    assets = EMPTY_OBJECT,
    users,
    userId,
    theme,
    meta,
    snapLines,
    eraseLine,
    grid,
    containerRef,
    performanceMode,
    components,
    hideHandles = false,
    hideIndicators = false,
    hideCloneHandles = false,
    hideBindingHandles = false,
    hideResizeHandles = false,
    hideRotateHandles = false,
    hideBounds = false,
    hideGrid = true,
    showDashedBrush = false,
    hideCursors
  } = _b, rest = __objRest(_b, [
    "id",
    "shapeUtils",
    "page",
    "pageState",
    "assets",
    "users",
    "userId",
    "theme",
    "meta",
    "snapLines",
    "eraseLine",
    "grid",
    "containerRef",
    "performanceMode",
    "components",
    "hideHandles",
    "hideIndicators",
    "hideCloneHandles",
    "hideBindingHandles",
    "hideResizeHandles",
    "hideRotateHandles",
    "hideBounds",
    "hideGrid",
    "showDashedBrush",
    "hideCursors"
  ]);
  useTLTheme(theme, "#" + id);
  const rSelectionBounds = React43.useRef(null);
  const rPageState = React43.useRef(pageState);
  React43.useEffect(() => {
    rPageState.current = pageState;
  }, [pageState]);
  const [context, setContext] = React43.useState(() => ({
    callbacks: rest,
    shapeUtils,
    rSelectionBounds,
    rPageState,
    bounds: {
      minX: 0,
      minY: 0,
      maxX: Infinity,
      maxY: Infinity,
      width: Infinity,
      height: Infinity
    },
    inputs: new Inputs()
  }));
  const onBoundsChange = React43.useCallback((bounds) => {
    setContext((context2) => __spreadProps(__spreadValues({}, context2), {
      bounds
    }));
  }, []);
  return /* @__PURE__ */ jsx29(TLContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsx29(Canvas, {
      id,
      page,
      pageState,
      assets,
      snapLines,
      eraseLine,
      grid,
      users,
      userId,
      externalContainerRef: containerRef,
      hideBounds,
      hideIndicators,
      hideHandles,
      hideCloneHandles,
      hideBindingHandles,
      hideRotateHandle: hideRotateHandles,
      hideResizeHandles,
      hideGrid,
      showDashedBrush,
      onBoundsChange,
      performanceMode,
      components,
      meta,
      hideCursors
    })
  });
}
var Renderer = React43.memo(_Renderer);

// src/components/HTMLContainer/HTMLContainer.tsx
import * as React44 from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
var HTMLContainer = React44.memo(
  React44.forwardRef(function HTMLContainer2(_a, ref) {
    var _b = _a, { children, className = "" } = _b, rest = __objRest(_b, ["children", "className"]);
    return /* @__PURE__ */ jsx30("div", __spreadProps(__spreadValues({
      ref,
      className: `tl-positioned-div ${className}`,
      draggable: false
    }, rest), {
      children: /* @__PURE__ */ jsx30("div", {
        className: "tl-inner-div",
        children
      })
    }));
  })
);

// src/TLShapeUtil/TLShapeUtil.tsx
import { intersectPolygonBounds } from "@tldraw/intersect";
import * as React45 from "react";
var TLShapeUtil = class {
  constructor() {
    __publicField(this, "refMap", /* @__PURE__ */ new Map());
    __publicField(this, "boundsCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "showCloneHandles", false);
    __publicField(this, "hideBounds", false);
    __publicField(this, "isStateful", false);
    __publicField(this, "shouldRender", (prev, next) => true);
    __publicField(this, "getRef", (shape) => {
      if (!this.refMap.has(shape.id)) {
        this.refMap.set(shape.id, React45.createRef());
      }
      return this.refMap.get(shape.id);
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      const corners = utils_default.getRotatedCorners(shapeBounds, shape.rotation);
      return corners.every((point) => utils_default.pointInBounds(point, bounds)) || intersectPolygonBounds(corners, bounds).length > 0;
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      return utils_default.getBoundsFromPoints(utils_default.getRotatedCorners(this.getBounds(shape), shape.rotation));
    });
  }
};
__publicField(TLShapeUtil, "Component", (component) => {
  return React45.forwardRef(component);
});
__publicField(TLShapeUtil, "Indicator", (component) => component);
export {
  Cursor,
  HTMLContainer,
  Inputs,
  Renderer,
  SVGContainer,
  SnapPoints,
  TLBoundsCorner,
  TLBoundsEdge,
  TLPerformanceMode,
  TLShapeUtil,
  Utils,
  inputs
};
/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
//# sourceMappingURL=index.mjs.map
