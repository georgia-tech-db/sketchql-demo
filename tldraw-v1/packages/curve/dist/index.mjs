function v(n,c=.4){let u=n.length,t=[...n];if(u<2)throw Error("Curve must have at least two points.");for(let r=1;r<u-1;r++){let l=n[r-1],o=n[r],a=n[r+1],x=a[0]-l[0],f=a[1]-l[1],d=Math.hypot(x,f),g=x/d,i=f/d,y=Math.hypot(o[0]-l[0],o[1]-l[1]),p=Math.hypot(o[0]-a[0],o[1]-a[1]);t[r]=[o[0]-g*y*c,o[1]-i*y*c,o[0]+g*p*c,o[1]+i*p*c,g,i]}let e=Math.hypot(n[0][0]+t[1][0]);t[0][2]=(n[0][0]+t[1][0])/2,t[0][3]=(n[0][1]+t[1][1])/2,t[0][4]=(t[1][0]-n[0][0])/e,t[0][5]=(t[1][1]-n[0][1])/e;let s=Math.hypot(n[u-1][1]+t[u-1][1]);t[u-1][0]=(n[u-1][0]+t[u-2][2])/2,t[u-1][1]=(n[u-1][1]+t[u-2][3])/2,t[u-1][4]=(t[u-2][2]-n[u-1][0])/-s,t[u-1][5]=(t[u-2][3]-n[u-1][1])/-s;let b=[];for(let r=1;r<t.length;r++)b.push({start:n[r-1].slice(0,2),tangentStart:t[r-1].slice(2,4),normalStart:t[r-1].slice(4,6),pressureStart:2+((r-1)%2===0?1.5:0),end:n[r].slice(0,2),tangentEnd:t[r].slice(0,2),normalEnd:t[r].slice(4,6),pressureEnd:2+(r%2===0?1.5:0)});return b}function C(n,c,u,t,e){let o=1-3*t+3*c-0,a=3*t-6*c+3*0,x=3*c-3*0,f=0,d=1-3*e+3*u-0,g=3*e-6*u+3*0,i=3*u-3*0,y=0,p=5,h,S,M,m=n;for(h=0;h<p;h++)M=o*m*m*m+a*m*m+x*m+f,S=1/(3*o*m*m+2*a*m+x),m-=(M-n)*S,m=m>1?1:m<0?0:m;return Math.abs(d*m*m*m+g*m*m+i*m*y)}function B(n,c=.5){let u,[t,e,s]=n,b=[];for(let r=1,l=n.length;r<l;r++)u=t,t=e,e=s,s=n[r+2]?n[r+2]:e,b.push([t[0]+(e[0]-u[0])/6*c,t[1]+(e[1]-u[1])/6*c,e[0]-(s[0]-t[0])/6*c,e[1]-(s[1]-t[1])/6*c,n[r][0],n[r][1]]);return b}function z(n,c){if(n===0)return c[0];let u=c.length-1;if(n===1)return c[u];let t=1-n,e=c;if(u===0)return c[0];if(u===1)return[t*e[0][0]+n*e[1][0],t*e[0][1]+n*e[1][1]];let s=t*t,b=n*n,r,l,o,a=0;return u===2?(e=[e[0],e[1],e[2],[0,0]],r=s,l=t*n*2,o=b):(r=s*t,l=s*n*3,o=t*b*3,a=n*b),[r*e[0][0]+l*e[1][0]+o*e[2][0]+a*e[3][0],r*e[0][1]+l*e[1][1]+o*e[2][1]+a*e[3][1]]}function w(n,c=.5,u=!1,t=3){let e=[...n],s=n.length,b=[],r,l,o,a,x,f,d,g,i,y,p;u?(e.unshift(e[s-1]),e.push(e[0])):(e.unshift(e[0]),e.push(e[s-1]));for(let h=1;h<e.length-2;h++)for(let S=0;S<=t;S++)i=S/t,y=Math.pow(i,2),p=Math.pow(i,3),x=2*p-3*y+1,f=-(2*p)+3*y,d=p-2*y+i,g=p-y,r=(e[h+1][0]-e[h-1][0])*c,l=(e[h+2][0]-e[h][0])*c,o=(e[h+1][1]-e[h-1][1])*c,a=(e[h+2][1]-e[h][1])*c,b.push([x*e[h][0]+f*e[h+1][0]+d*r+g*l,x*e[h][1]+f*e[h+1][1]+d*o+g*a]);return b.push(n[n.length-1]),b}function E(n,c=1){let u=n.length,t=n[0],e=n[u-1],[s,b]=t,[r,l]=e;if(u>2){let o=0,a=0,x=Math.hypot(l-b,r-s);for(let f=1;f<u-1;f++){let[d,g]=n[f],i=Math.abs((l-b)*d-(r-s)*g+r*b-l*s)/x;o>i||(o=i,a=f)}if(o>c){let f=E(n.slice(0,a+1),c),d=E(n.slice(a+1),c);return f.concat(d.slice(1))}}return[t,e]}export{z as computePointOnSpline,C as cubicBezier,w as getCurvePoints,B as getSpline,v as getTLBezierCurveSegments,E as simplify};
//# sourceMappingURL=index.mjs.map
