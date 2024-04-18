"use strict";var c=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var g=(i,n,r)=>n in i?c(i,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[n]=r;var x=(i,n)=>{for(var r in n)c(i,r,{get:n[r],enumerable:!0})},f=(i,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let b of M(n))!p.call(i,b)&&b!==r&&c(i,b,{get:()=>n[b],enumerable:!(t=d(n,b))||t.enumerable});return i};var y=i=>f(c({},"__esModule",{value:!0}),i);var m=(i,n,r)=>(g(i,typeof n!="symbol"?n+"":n,r),r);var P={};x(P,{Vec:()=>u,default:()=>L});module.exports=y(P);var e=class{static clamp(n,r,t){return Math.max(r,typeof t!="undefined"?Math.min(n,t):n)}static clampV(n,r,t){return n.map(b=>t?e.clamp(b,r,t):e.clamp(b,r))}static cross(n,r,t){return(r[0]-n[0])*(t[1]-n[1])-(t[0]-n[0])*(r[1]-n[1])}static snap(n,r=1){return[Math.round(n[0]/r)*r,Math.round(n[1]/r)*r]}},u=e;m(u,"neg",n=>[-n[0],-n[1]]),m(u,"add",(n,r)=>[n[0]+r[0],n[1]+r[1]]),m(u,"addScalar",(n,r)=>[n[0]+r,n[1]+r]),m(u,"sub",(n,r)=>[n[0]-r[0],n[1]-r[1]]),m(u,"subScalar",(n,r)=>[n[0]-r,n[1]-r]),m(u,"vec",(n,r)=>[r[0]-n[0],r[1]-n[1]]),m(u,"mul",(n,r)=>[n[0]*r,n[1]*r]),m(u,"mulV",(n,r)=>[n[0]*r[0],n[1]*r[1]]),m(u,"div",(n,r)=>[n[0]/r,n[1]/r]),m(u,"divV",(n,r)=>[n[0]/r[0],n[1]/r[1]]),m(u,"per",n=>[n[1],-n[0]]),m(u,"dpr",(n,r)=>n[0]*r[0]+n[1]*r[1]),m(u,"cpr",(n,r)=>n[0]*r[1]-r[0]*n[1]),m(u,"len2",n=>n[0]*n[0]+n[1]*n[1]),m(u,"len",n=>Math.hypot(n[0],n[1])),m(u,"pry",(n,r)=>e.dpr(n,r)/e.len(r)),m(u,"uni",n=>e.div(n,e.len(n))),m(u,"normalize",n=>e.uni(n)),m(u,"tangent",(n,r)=>e.uni(e.sub(n,r))),m(u,"dist2",(n,r)=>e.len2(e.sub(n,r))),m(u,"dist",(n,r)=>Math.hypot(n[1]-r[1],n[0]-r[0])),m(u,"fastDist",(n,r)=>{let t=[r[0]-n[0],r[1]-n[1]],b=[Math.abs(t[0]),Math.abs(t[1])],a=1/Math.max(b[0],b[1]);return a=a*(1.29289-(b[0]+b[1])*a*.29289),[t[0]*a,t[1]*a]}),m(u,"ang",(n,r)=>Math.atan2(e.cpr(n,r),e.dpr(n,r))),m(u,"angle",(n,r)=>Math.atan2(r[1]-n[1],r[0]-n[0])),m(u,"med",(n,r)=>e.mul(e.add(n,r),.5)),m(u,"rot",(n,r=0)=>[n[0]*Math.cos(r)-n[1]*Math.sin(r),n[0]*Math.sin(r)+n[1]*Math.cos(r)]),m(u,"rotWith",(n,r,t=0)=>{if(t===0)return n;let b=Math.sin(t),a=Math.cos(t),s=n[0]-r[0],o=n[1]-r[1],l=s*a-o*b,h=s*b+o*a;return[l+r[0],h+r[1]]}),m(u,"isEqual",(n,r)=>n[0]===r[0]&&n[1]===r[1]),m(u,"lrp",(n,r,t)=>e.add(n,e.mul(e.sub(r,n),t))),m(u,"int",(n,r,t,b,a=1)=>{let s=(e.clamp(t,b)-t)/(b-t);return e.add(e.mul(n,1-s),e.mul(r,a))}),m(u,"ang3",(n,r,t)=>{let b=e.vec(r,n),a=e.vec(r,t);return e.ang(b,a)}),m(u,"abs",n=>[Math.abs(n[0]),Math.abs(n[1])]),m(u,"rescale",(n,r)=>{let t=e.len(n);return[r*n[0]/t,r*n[1]/t]}),m(u,"isLeft",(n,r,t)=>(r[0]-n[0])*(t[1]-n[1])-(t[0]-n[0])*(r[1]-n[1])),m(u,"clockwise",(n,r,t)=>e.isLeft(n,r,t)>0),m(u,"toFixed",n=>n.map(r=>Math.round(r*100)/100)),m(u,"nearestPointOnLineThroughPoint",(n,r,t)=>e.add(n,e.mul(r,e.pry(e.sub(t,n),r)))),m(u,"distanceToLineThroughPoint",(n,r,t)=>e.dist(t,e.nearestPointOnLineThroughPoint(n,r,t))),m(u,"nearestPointOnLineSegment",(n,r,t,b=!0)=>{let a=e.uni(e.sub(r,n)),s=e.add(n,e.mul(a,e.pry(e.sub(t,n),a)));if(b){if(s[0]<Math.min(n[0],r[0]))return n[0]<r[0]?n:r;if(s[0]>Math.max(n[0],r[0]))return n[0]>r[0]?n:r;if(s[1]<Math.min(n[1],r[1]))return n[1]<r[1]?n:r;if(s[1]>Math.max(n[1],r[1]))return n[1]>r[1]?n:r}return s}),m(u,"distanceToLineSegment",(n,r,t,b=!0)=>e.dist(t,e.nearestPointOnLineSegment(n,r,t,b))),m(u,"nearestPointOnBounds",(n,r)=>[e.clamp(r[0],n.minX,n.maxX),e.clamp(r[1],n.minY,n.maxY)]),m(u,"distanceToBounds",(n,r)=>e.dist(r,e.nearestPointOnBounds(n,r))),m(u,"nudge",(n,r,t)=>e.isEqual(n,r)?n:e.add(n,e.mul(e.uni(e.sub(r,n)),t))),m(u,"nudgeAtAngle",(n,r,t)=>[Math.cos(r)*t+n[0],Math.sin(r)*t+n[1]]),m(u,"toPrecision",(n,r=4)=>[+n[0].toPrecision(r),+n[1].toPrecision(r)]),m(u,"pointsBetween",(n,r,t=6)=>Array.from(Array(t)).map((b,a)=>{let s=a/(t-1),o=Math.min(1,.5+Math.abs(.5-s));return[...e.lrp(n,r,s),o]})),m(u,"slope",(n,r)=>n[0]===r[0]?NaN:(n[1]-r[1])/(n[0]-r[0])),m(u,"max",(...n)=>[Math.max(...n.map(r=>r[0])),Math.max(...n.map(r=>r[1]))]),m(u,"min",(...n)=>[Math.min(...n.map(r=>r[0])),Math.min(...n.map(r=>r[1]))]);var L=u;
//# sourceMappingURL=index.js.map