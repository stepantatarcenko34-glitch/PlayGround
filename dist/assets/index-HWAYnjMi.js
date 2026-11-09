(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const zo="187",eh=0,Tl=1,nh=2,Ar=1,Xc=2,ws=3,Ti=0,sn=1,En=2,rs=0,Rs=1,Cs=2,wl=3,Al=4,ih=5,ns=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,uh=202,hh=203,qc=204,$c=205,dh=206,fh=207,ph=208,mh=209,gh=210,_h=211,xh=212,vh=213,Mh=214,Ha=0,Va=1,Wa=2,Us=3,Xa=4,qa=5,$a=6,Ya=7,Yc=0,Sh=1,yh=2,Jn=0,Kc=1,Jc=2,Zc=3,ko=4,Qc=5,jc=6,tu=7,eu=300,os=301,Fs=302,ra=303,aa=304,Fr=1e3,Kn=1001,Ka=1002,qe=1003,bh=1004,$s=1005,ln=1006,oa=1007,ci=1008,fn=1009,nu=1010,iu=1011,Os=1012,Go=1013,Gn=1014,In=1015,Hn=1016,Ho=1017,Vo=1018,ls=1020,su=35902,ru=35899,au=1021,ou=1022,zn=1023,hi=1026,ui=1027,Wo=1028,Xo=1029,wi=1030,qo=1031,$o=1033,Rr=33776,Cr=33777,Pr=33778,Lr=33779,Ja=35840,Za=35841,Qa=35842,ja=35843,to=36196,eo=37492,no=37496,io=37488,so=37489,Or=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,Mo=37821,So=36492,yo=36494,bo=36495,Eo=36283,To=36284,Br=36285,wo=36286,Eh=3200,Ao=0,Th=1,li="",De="srgb",zr="srgb-linear",kr="linear",pe="srgb",la=7680,wh=519,Ah=512,Rh=513,Ch=514,lu=515,Ph=516,Lh=517,cu=518,uu=519,hu=35044,Rl="300 es",Dn=2e3,Bs=2001;function Ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){const i=Gr("canvas");return i.style.display="block",i}const Cl={};function Hr(...i){const t="THREE."+i.shift();console.log(t,...i)}function du(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=du(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=du(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ir(...i){const t=i.join(" ");t in Cl||(Cl[t]=!0,zt(...i))}function Nh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Uh={[Ha]:Ha,[Wa]:$a,[Xa]:Xa,[Us]:qa,[Va]:Va,[$a]:Wa,[Ya]:Ya,[qa]:Us};class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const Ps=Math.PI/180,cs=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Yo(i,t){return(i%t+t)%t}function Fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Oh(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function Bh(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function zh(i,t=1){return t-Math.abs(Yo(i,t*2)-t)}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vh(i,t){return i+Math.random()*(t-i)}function Wh(i){return i*(.5-Math.random())}function Xh(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qh(i){return i*Ps}function $h(i){return i*cs}function Yh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ko(i,t){if(t.constructor===Float32Array)return i;const e=Zr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Jo(i,t){if(t.constructor===Float32Array)return i;const e=Zr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Ro={DEG2RAD:Ps,RAD2DEG:cs,generateUUID:di,clamp:te,euclideanModulo:Yo,mapLinear:Fh,inverseLerp:Oh,lerp:Ls,damp:Bh,pingpong:zh,smoothstep:kh,smootherstep:Gh,randInt:Hh,randFloat:Vh,randFloatSpread:Wh,seededRandom:Xh,degToRad:qh,radToDeg:$h,isPowerOfTwo:Yh,ceilPowerOfTwo:Kh,floorPowerOfTwo:fu,setQuaternionFromProperEuler:Jh,normalize:Jo,denormalize:Ko},ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let Tt=ul;class bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||l!==d||c!==p||u!==g){let f=l*d+c*p+u*g+h*v;f<0&&(d=-d,p=-p,g=-g,v=-v,f=-f);let m=1-o;if(f<.9995){const x=Math.acos(f),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,h=h*m+v*o}else{l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,h=h*m+v*o;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-o*p,t[e+2]=c*g+u*p+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let P=hl;const ca=new P,Ll=new bn,dl=class dl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],f=s[3],m=s[6],x=s[1],E=s[4],y=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*v+o*x+l*A,r[3]=a*f+o*E+l*w,r[6]=a*m+o*y+l*_,r[1]=c*v+u*x+h*A,r[4]=c*f+u*E+h*w,r[7]=c*m+u*y+h*_,r[2]=d*v+p*x+g*A,r[5]=d*f+p*E+g*w,r[8]=d*m+p*y+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;let Wt=dl;const ua=new Wt,Il=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){const i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:t,whitePoint:n,transfer:kr,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const re=Zh();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Gr("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jh=0;class Zo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let td=0;const da=new P;class Qe extends Ci{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Kn,s=Kn,r=ln,a=ci,o=zn,l=fn,c=Qe.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=di(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=eu;Qe.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,A=(m+1)/2,w=(u+d)/4,_=(h+v)/4,b=(g+f)/4;return E>y&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let Te=fl;class ed extends Ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends ed{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nd extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Jr=class Jr{constructor(t,e,n,s,r,a,o,l,c,u,h,d,p,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,v,f)}set(t,e,n,s,r,a,o,l,c,u,h,d,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ni.crossVectors(n,cn),ni.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ni.crossVectors(n,cn)),ni.normalize(),Ys.crossVectors(cn,ni),s[0]=ni.x,s[4]=Ys.x,s[8]=cn.x,s[1]=ni.y,s[5]=Ys.y,s[9]=cn.y,s[2]=ni.z,s[6]=Ys.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],x=n[3],E=n[7],y=n[11],A=n[15],w=s[0],_=s[4],b=s[8],N=s[12],R=s[1],U=s[5],O=s[9],W=s[13],D=s[2],L=s[6],H=s[10],k=s[14],et=s[3],X=s[7],Q=s[11],nt=s[15];return r[0]=a*w+o*R+l*D+c*et,r[4]=a*_+o*U+l*L+c*X,r[8]=a*b+o*O+l*H+c*Q,r[12]=a*N+o*W+l*k+c*nt,r[1]=u*w+h*R+d*D+p*et,r[5]=u*_+h*U+d*L+p*X,r[9]=u*b+h*O+d*H+p*Q,r[13]=u*N+h*W+d*k+p*nt,r[2]=g*w+v*R+f*D+m*et,r[6]=g*_+v*U+f*L+m*X,r[10]=g*b+v*O+f*H+m*Q,r[14]=g*N+v*W+f*k+m*nt,r[3]=x*w+E*R+y*D+A*et,r[7]=x*_+E*U+y*L+A*X,r[11]=x*b+E*O+y*H+A*Q,r[15]=x*N+E*W+y*k+A*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15],x=l*p-c*d,E=o*p-c*h,y=o*d-l*h,A=a*p-c*u,w=a*d-l*u,_=a*h-o*u;return e*(v*x-f*E+m*y)-n*(g*x-f*A+m*w)+s*(g*E-v*A+m*_)-r*(g*y-v*w+f*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],x=e*o-n*a,E=e*l-s*a,y=e*c-r*a,A=n*l-s*o,w=n*c-r*o,_=s*c-r*l,b=u*v-h*g,N=u*f-d*g,R=u*m-p*g,U=h*f-d*v,O=h*m-p*v,W=d*m-p*f,D=x*W-E*O+y*U+A*R-w*N+_*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return t[0]=(o*W-l*O+c*U)*L,t[1]=(s*O-n*W-r*U)*L,t[2]=(v*_-f*w+m*A)*L,t[3]=(d*w-h*_-p*A)*L,t[4]=(l*R-a*W-c*N)*L,t[5]=(e*W-s*R+r*N)*L,t[6]=(f*y-g*_-m*E)*L,t[7]=(u*_-d*y+p*E)*L,t[8]=(a*O-o*R+c*b)*L,t[9]=(n*R-e*O-r*b)*L,t[10]=(g*w-v*y+m*x)*L,t[11]=(h*y-u*w-p*x)*L,t[12]=(o*N-a*U-l*b)*L,t[13]=(e*U-n*N+s*b)*L,t[14]=(v*E-g*A-f*x)*L,t[15]=(u*A-h*E+d*x)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,v=a*u,f=a*h,m=o*h,x=l*c,E=l*u,y=l*h,A=n.x,w=n.y,_=n.z;return s[0]=(1-(v+m))*A,s[1]=(p+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+m))*w,s[6]=(f+x)*w,s[7]=0,s[8]=(g+E)*_,s[9]=(f-x)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);const c=1/a,u=1/o,h=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,e.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Bs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Bs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Jr.prototype.isMatrix4=!0;let ae=Jr;const Ui=new P,Rn=new ae,id=new P(0,0,0),sd=new P(1,1,1),ni=new P,Ys=new P,cn=new P,Nl=new ae,Ul=new bn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rd=0;const Fl=new P,Fi=new bn,Wn=new ae,Ks=new P,ms=new P,ad=new P,od=new bn,Ol=new P(1,0,0),Bl=new P(0,1,0),zl=new P(0,0,1),kl={type:"added"},ld={type:"removed"},Oi={type:"childadded",child:null},fa={type:"childremoved",child:null};class Ae extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new P,e=new on,n=new bn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Wt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(ms,Ks,this.up):Wn.lookAt(Ks,ms,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ae.DEFAULT_UP=new P(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cd={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Yo(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ma(a,r,t+1/3),this.g=ma(a,r,t),this.b=ma(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return re.workingToColorSpace(Je.copy(this),t),Math.round(te(Je.r*255,0,255))*65536+Math.round(te(Je.g*255,0,255))*256+Math.round(te(Je.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=De){re.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Js);const n=Ls(ii.h,Js.h,e),s=Ls(ii.s,Js.s,e),r=Ls(ii.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Qt;Qt.NAMES=mu;class jo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ud extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cn=new P,Xn=new P,ga=new P,qn=new P,Bi=new P,zi=new P,Gl=new P,_a=new P,xa=new P,va=new P,Ma=new Te,Sa=new Te,ya=new Te;class Tn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Xn.subVectors(n,e),ga.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(Xn),l=Cn.dot(ga),c=Xn.dot(Xn),u=Xn.dot(ga),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ma.setScalar(0),Sa.setScalar(0),ya.setScalar(0),Ma.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ma,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Xn.subVectors(t,e),Cn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Bi.subVectors(s,n),zi.subVectors(r,n),_a.subVectors(t,n);const l=Bi.dot(_a),c=zi.dot(_a);if(l<=0&&c<=0)return e.copy(n);xa.subVectors(t,s);const u=Bi.dot(xa),h=zi.dot(xa);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Bi,a);va.subVectors(t,r);const p=Bi.dot(va),g=zi.dot(va);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(zi,o);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Gl.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Gl,o);const m=1/(f+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Qs.subVectors(this.max,gs),ki.subVectors(t.a,gs),Gi.subVectors(t.b,gs),Hi.subVectors(t.c,gs),si.subVectors(Gi,ki),ri.subVectors(Hi,Gi),xi.subVectors(ki,Hi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-xi.z,xi.y,si.z,0,-si.x,ri.z,0,-ri.x,xi.z,0,-xi.x,-si.y,si.x,0,-ri.y,ri.x,0,-xi.y,xi.x,0];return!ba(e,ki,Gi,Hi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ki,Gi,Hi,Qs))?!1:(js.crossVectors(si,ri),e=[js.x,js.y,js.z],ba(e,ki,Gi,Hi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Zs=new Pi,ki=new P,Gi=new P,Hi=new P,si=new P,ri=new P,xi=new P,gs=new P,Qs=new P,js=new P,vi=new P;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ce=new P,tr=new Tt;let hd=0;class Nn extends Ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=t!==void 0?Zr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ko(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Jo(t,this.array)}}class gu extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const dd=new Pi,_s=new P,Ea=new P;class Li{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Ea)),this.expandByPoint(_s.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fd=0;const Sn=new ae,Ta=new Ae,Vi=new P,un=new Pi,xs=new Pi,He=new P;class Pe extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(un.min,xs.min),un.expandByPoint(He),He.addVectors(un.max,xs.max),un.expandByPoint(He)):(un.expandByPoint(xs.min),un.expandByPoint(xs.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)He.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),He.add(Vi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;const u=new P,h=new P,d=new P,p=new Tt,g=new Tt,v=new Tt,f=new P,m=new P;function x(N,R,U){c[N]=c[R]=c[U]=1,u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,U),p.fromBufferAttribute(r,N),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,U),h.sub(u),d.sub(u),g.sub(p),v.sub(p);const O=1/(g.x*v.y-v.x*g.y);isFinite(O)&&(f.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(O),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(O),o[N].add(f),o[R].add(f),o[U].add(f),l[N].add(m),l[R].add(m),l[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,R=E.length;N<R;++N){const U=E[N],O=U.start,W=U.count;for(let D=O,L=O+W;D<L;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new P,A=new P,w=new P,_=new P;function b(N){w.fromBufferAttribute(s,N),_.copy(w);const R=o[N];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(_,R);const O=A.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,O)}for(let N=0,R=n.count;N<R;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new Nn(d,u,h)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hu,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Hl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Hl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Hl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=di()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const tn=new P;class Vr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Zr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ko(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Jo(t,this.data.array)}}const wa=new P,md=new P,gd=new Wt;class oi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gd.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let _d=0;class fi extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Rs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Is extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const vs=new P,Xi=new P,qi=new P,$i=new Tt,Ms=new Tt,xu=new ae,er=new P,Ss=new P,nr=new P,Vl=new Tt,Aa=new Tt,Wl=new Tt;class Dr extends Ae{constructor(t=new Is){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pd(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Vr(n,3,0,!1)),Wi.setAttribute("uv",new Vr(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ir(er.set(-.5,-.5,0),qi,a,Xi,s,r),ir(Ss.set(.5,-.5,0),qi,a,Xi,s,r),ir(nr.set(.5,.5,0),qi,a,Xi,s,r),Vl.set(0,0),Aa.set(1,0),Wl.set(1,1);let o=t.ray.intersectTriangle(er,Ss,nr,!1,vs);if(o===null&&(ir(Ss.set(-.5,.5,0),qi,a,Xi,s,r),Aa.set(0,1),o=t.ray.intersectTriangle(er,nr,Ss,!1,vs),o===null))return;const l=t.ray.origin.distanceTo(vs);l<t.near||l>t.far||e.push({distance:l,point:vs.clone(),uv:Tn.getInterpolation(vs,er,Ss,nr,Vl,Aa,Wl,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ir(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*$i.x-s*$i.y,Ms.y=s*$i.x+r*$i.y):Ms.copy($i),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(xu)}const Yn=new P,Ra=new P,sr=new P,rr=new P;class Qr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),rr.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=rr.dot(this.direction),l=-rr.dot(sr),c=rr.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ra).addScaledVector(sr,d),p}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,p=t.z-a.z,g=e.x-a.x,v=e.y-a.y,f=e.z-a.z,m=n.x-a.x,x=n.y-a.y,E=n.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(u);let _,b,N,R,U,O,W,D,L,H,k,et;if(y>=A&&y>=w?(N=l,O=h,L=g,et=m,l>=0?(_=c,b=u,R=d,U=p,W=v,D=f,H=x,k=E):(_=u,b=c,R=p,U=d,W=f,D=v,H=E,k=x)):A>=w?(N=c,O=d,L=v,et=x,c>=0?(_=u,b=l,R=p,U=h,W=f,D=g,H=E,k=m):(_=l,b=u,R=h,U=p,W=g,D=f,H=m,k=E)):(N=u,O=p,L=f,et=E,u>=0?(_=l,b=c,R=h,U=d,W=g,D=v,H=m,k=x):(_=c,b=l,R=d,U=h,W=v,D=g,H=x,k=m)),N===0)return null;const X=_/N,Q=b/N,nt=1/N,Ct=R-X*O,Nt=U-Q*O,Y=W-X*L,ht=D-Q*L,Et=H-X*et,Ft=k-Q*et,vt=Et*ht-Ft*Y,kt=Ct*Ft-Nt*Et,ot=Y*Nt-ht*Ct;if(s){if(vt<0||kt<0||ot<0)return null}else if((vt<0||kt<0||ot<0)&&(vt>0||kt>0||ot>0))return null;const _t=vt+kt+ot;if(_t===0)return null;const Gt=nt*(vt*O+kt*L+ot*et);return(_t>0?Gt<0:Gt>0)?null:this.at(Gt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xl=new ae,Mi=new Qr,ar=new Li,ql=new P,or=new P,lr=new P,cr=new P,Ca=new P,ur=new P,$l=new P,hr=new P;class Ht extends Ae{constructor(t=new Pe,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Ca.fromBufferAttribute(h,t),a?ur.addScaledVector(Ca,u):ur.addScaledVector(Ca.sub(e),u))}e.add(ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ar,ql)===null||Mi.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),E=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let y=x,A=E;y<A;y+=3){const w=o.getX(y),_=o.getX(y+1),b=o.getX(y+2);s=dr(this,m,t,n,c,u,h,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const x=o.getX(f),E=o.getX(f+1),y=o.getX(f+2);s=dr(this,a,t,n,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),E=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let y=x,A=E;y<A;y+=3){const w=y,_=y+1,b=y+2;s=dr(this,m,t,n,c,u,h,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const x=f,E=f+1,y=f+2;s=dr(this,a,t,n,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function xd(i,t,e,n,s,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ti,o),l===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);const u=xd(i,t,e,n,or,lr,cr,$l);if(u){const h=new P;Tn.getBarycoord($l,or,lr,cr,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,l,c,h,new Tt)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,l,c,h,new Tt)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Tn.getNormal(or,lr,cr,d.normal),u.face=d,u.barycoord=h}return u}class vu extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,u=qe,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends Nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new ae,Kl=new ae,fr=[],Jl=new Pi,vd=new ae,ys=new Ht,bs=new Li;class Ki extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Jl.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),bs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Kl.multiplyMatrices(n,Yi),ys.matrixWorld=Kl,ys.raycast(t,fr);for(let a=0,o=fr.length;a<o;a++){const l=fr[a];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vu(new Float32Array(s*this.count),s,this.count,Wo,In));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new Li,Md=new Tt(.5,.5),pr=new P;class zs{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],f=r[10],m=r[11],x=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,m-g,A-x).normalize(),s[1].setComponents(c+a,p+u,m+g,A+x).normalize(),s[2].setComponents(c+o,p+h,m+v,A+E).normalize(),s[3].setComponents(c-o,p-h,m-v,A-E).normalize(),n)s[4].setComponents(l,d,f,y).normalize(),s[5].setComponents(c-l,p-d,m-f,A-y).normalize();else if(s[4].setComponents(c-l,p-d,m-f,A-y).normalize(),e===Dn)s[5].setComponents(c+l,p+d,m+f,A+y).normalize();else if(e===Bs)s[5].setComponents(l,d,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=Md.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zl=new ae;class tl{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Zl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new zs),n[s].setFromProjectionMatrix(Zl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new zs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new tl().copy(this)}}class Mu extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wr=new P,Xr=new P,Ql=new ae,Es=new Qr,mr=new Li,Pa=new P,jl=new P;class Sd extends Ae{constructor(t=new Pe,e=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Wr.fromBufferAttribute(e,s-1),Xr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Wr.distanceTo(Xr);t.setAttribute("lineDistance",new de(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Ql.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,f=g-1;v<f;v+=c){const m=u.getX(v),x=u.getX(v+1),E=gr(this,t,Es,l,m,x,v);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(p),m=gr(this,t,Es,l,v,f,g-1);m&&e.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,f=g-1;v<f;v+=c){const m=gr(this,t,Es,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=gr(this,t,Es,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Wr.fromBufferAttribute(o,s),Xr.fromBufferAttribute(o,r),e.distanceSqToSegment(Wr,Xr,Pa,jl)>n)return;Pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:jl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Co extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new ae,Po=new Qr,_r=new Li,xr=new P;class ec extends Ae{constructor(t=new Pe,e=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;tc.copy(s).invert(),Po.copy(t.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const f=c.getX(g);xr.fromBufferAttribute(h,f),nc(xr,f,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)xr.fromBufferAttribute(h,g),nc(xr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(i,t,e,n,s,r,a){const o=Po.distanceSqToPoint(i);if(o<e){const l=new P;Po.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Su extends Qe{constructor(t=[],e=os,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ds extends Qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends Qe{constructor(t,e,n=Gn,s,r,a,o=qe,l=qe,c,u=hi,h=1){if(u!==hi&&u!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yu extends us{constructor(t,e=Gn,n=os,s,r,a=qe,o=qe,l,c=hi){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bu extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wn extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function g(v,f,m,x,E,y,A,w,_,b,N){const R=y/_,U=A/b,O=y/2,W=A/2,D=w/2,L=_+1,H=b+1;let k=0,et=0;const X=new P;for(let Q=0;Q<H;Q++){const nt=Q*U-W;for(let Ct=0;Ct<L;Ct++){const Nt=Ct*R-O;X[v]=Nt*x,X[f]=nt*E,X[m]=D,c.push(X.x,X.y,X.z),X[v]=0,X[f]=0,X[m]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(Ct/_),h.push(1-Q/b),k+=1}}for(let Q=0;Q<b;Q++)for(let nt=0;nt<_;nt++){const Ct=d+nt+L*Q,Nt=d+nt+L*(Q+1),Y=d+(nt+1)+L*(Q+1),ht=d+(nt+1)+L*Q;l.push(Ct,Nt,ht),l.push(Nt,Y,ht),et+=6}o.addGroup(p,et,N),p+=et,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jr extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,u=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class nn extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],f=n/2;let m=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function x(){const y=new P,A=new P;let w=0;const _=(e-t)/n;for(let b=0;b<=r;b++){const N=[],R=b/r,U=R*(e-t)+t;for(let O=0;O<=s;O++){const W=O/s,D=W*l+o,L=Math.sin(D),H=Math.cos(D);A.x=U*L,A.y=-R*n+f,A.z=U*H,h.push(A.x,A.y,A.z),y.set(L,_,H).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-R),N.push(g++)}v.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){const R=v[N][b],U=v[N+1][b],O=v[N+1][b+1],W=v[N][b+1];(t>0||N!==0)&&(u.push(R,U,W),w+=3),(e>0||N!==r-1)&&(u.push(U,O,W),w+=3)}c.addGroup(m,w,0),m+=w}function E(y){const A=g,w=new Tt,_=new P;let b=0;const N=y===!0?t:e,R=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,f*R,0),d.push(0,R,0),p.push(.5,.5),g++;const U=g;for(let O=0;O<=s;O++){const D=O/s*l+o,L=Math.cos(D),H=Math.sin(D);_.x=N*H,_.y=f*R,_.z=N*L,h.push(_.x,_.y,_.z),d.push(0,R,0),w.x=L*.5+.5,w.y=H*.5*R+.5,p.push(w.x,w.y),g++}for(let O=0;O<s;O++){const W=A+O,D=U+O;y===!0?u.push(D,D+1,W):u.push(D+1,D,W),b+=3}c.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yi extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new yi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new P,y=new P,A=new P;for(let w=0;w<e.length;w+=3)p(e[w+0],E),p(e[w+1],y),p(e[w+2],A),l(E,y,A,x)}function l(x,E,y,A){const w=A+1,_=[];for(let b=0;b<=w;b++){_[b]=[];const N=x.clone().lerp(y,b/w),R=E.clone().lerp(y,b/w),U=w-b;for(let O=0;O<=U;O++)O===0&&b===w?_[b][O]=N:_[b][O]=N.clone().lerp(R,O/U)}for(let b=0;b<w;b++)for(let N=0;N<2*(w-b)-1;N++){const R=Math.floor(N/2);N%2===0?(d(_[b][R+1]),d(_[b+1][R]),d(_[b][R])):(d(_[b][R+1]),d(_[b+1][R+1]),d(_[b+1][R]))}}function c(x){const E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const x=new P;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const y=f(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;a.push(y,1-A)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const E=a[x+0],y=a[x+2],A=a[x+4],w=Math.max(E,y,A),_=Math.min(E,y,A);w>.9&&_<.1&&(E<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,E){const y=x*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const x=new P,E=new P,y=new P,A=new P,w=new Tt,_=new Tt,b=new Tt;for(let N=0,R=0;N<r.length;N+=9,R+=6){x.set(r[N+0],r[N+1],r[N+2]),E.set(r[N+3],r[N+4],r[N+5]),y.set(r[N+6],r[N+7],r[N+8]),w.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),A.copy(x).add(E).add(y).divideScalar(3);const U=f(A);v(w,R+0,x,U),v(_,R+2,E,U),v(b,R+4,y,U)}}function v(x,E,y,A){A<0&&x.x===1&&(a[E]=x.x-1),y.x===0&&y.z===0&&(a[E]=A/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new ae;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Eu extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yd extends Eu{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ic=new P,sc=new P,La=new nl,Ia=new nl,Da=new nl;class qr extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(sc.subVectors(s[0],s[1]).add(s[0]),c=sc);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ic.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ic),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),La.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,f),Ia.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,f),Da.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ia.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Da.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(La.calc(l),Ia.calc(l),Da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function bd(i,t){const e=1-i;return e*e*t}function Ed(i,t){return 2*(1-i)*i*t}function Td(i,t){return i*i*t}function Ds(i,t,e,n){return bd(i,t)+Ed(i,e)+Td(i,n)}function wd(i,t){const e=1-i;return e*e*e*t}function Ad(i,t){const e=1-i;return 3*e*e*i*t}function Rd(i,t){return 3*(1-i)*i*i*t}function Cd(i,t){return i*i*i*t}function Ns(i,t,e,n,s){return wd(i,t)+Ad(i,e)+Rd(i,n)+Cd(i,s)}class Pd extends Qn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,s.x,r.x,a.x,o.x),Ns(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ld extends Qn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,s.x,r.x,a.x,o.x),Ns(t,s.y,r.y,a.y,o.y),Ns(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Id extends Qn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends Qn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends Qn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends Qn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(t,s.x,r.x,a.x),Ds(t,s.y,r.y,a.y),Ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(rc(o,l.x,c.x,u.x,h.x),rc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var Fd=Object.freeze({__proto__:null,ArcCurve:yd,CatmullRomCurve3:qr,CubicBezierCurve:Pd,CubicBezierCurve3:Ld,EllipseCurve:Eu,LineCurve:Id,LineCurve3:Dd,QuadraticBezierCurve:Nd,QuadraticBezierCurve3:Tu,SplineCurve:Ud});class il extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class Ln extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,p=[],g=[],v=[],f=[];for(let m=0;m<u;m++){const x=m*d-a;for(let E=0;E<c;E++){const y=E*h-r;g.push(y,-x,0),v.push(0,0,1),f.push(E/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const E=x+c*m,y=x+c*(m+1),A=x+1+c*(m+1),w=x+1+c*m;p.push(E,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class sl extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,p=new P,g=new Tt;for(let v=0;v<=s;v++){for(let f=0;f<=n;f++){const m=r+f/n*a;p.x=h*Math.cos(m),p.y=h*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const f=v*(n+1);for(let m=0;m<n;m++){const x=m+f,E=x,y=x+n+1,A=x+n+2,w=x+1;o.push(E,y,w),o.push(y,A,w)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bi extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){const x=[],E=m/n,y=a+E*o,A=t*Math.cos(y),w=Math.sqrt(t*t-A*A);let _=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const N=b/e,R=s+N*r;h.x=-w*Math.cos(R),h.y=A,h.z=w*Math.sin(R),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),f.push(N+_,1-E),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const E=u[m][x+1],y=u[m][x],A=u[m+1][x],w=u[m+1][x+1];(m!==0||a>0)&&p.push(E,y,w),(m!==n-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ks extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],h=[],d=new P,p=new P,g=new P;for(let v=0;v<=n;v++){const f=a+v/n*o;for(let m=0;m<=s;m++){const x=m/s*r;p.x=(t+e*Math.cos(f))*Math.cos(x),p.y=(t+e*Math.cos(f))*Math.sin(x),p.z=e*Math.sin(f),c.push(p.x,p.y,p.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),g.subVectors(p,d).normalize(),u.push(g.x,g.y,g.z),h.push(m/s),h.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){const m=(s+1)*v+f-1,x=(s+1)*(v-1)+f-1,E=(s+1)*(v-1)+f,y=(s+1)*v+f;l.push(m,x,y),l.push(x,E,y)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class $r extends Pe{constructor(t=new Tu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Tt;let u=new P;const h=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function v(){for(let E=0;E<e;E++)f(E);f(r===!1?e:0),x(),m()}function f(E){u=t.getPointAt(E/e,u);const y=a.normals[E],A=a.binormals[E];for(let w=0;w<=s;w++){const _=w/s*Math.PI*2,b=Math.sin(_),N=-Math.cos(_);l.x=N*y.x+b*A.x,l.y=N*y.y+b*A.y,l.z=N*y.z+b*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){const A=(s+1)*(E-1)+(y-1),w=(s+1)*E+(y-1),_=(s+1)*E+y,b=(s+1)*(E-1)+y;g.push(A,w,b),g.push(w,_,b)}}function x(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $r(new Fd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(ac(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ac(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Bd={clone:hs,merge:en};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Gd extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qt extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hd extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vd extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vs extends Ae{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wd extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Na=new ae,oc=new P,lc=new P;class rl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(oc),lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Na,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vr=new P,Mr=new bn,Fn=new P;class Au extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vr,Mr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,Mr,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(vr,Mr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vr,Mr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new P,cc=new Tt,uc=new Tt;class dn extends Au{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,cc,uc),e.subVectors(uc,cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Xd extends rl{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class hc extends Vs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class qd extends rl{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sr extends Vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ru extends Au{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $d extends rl{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new $d}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Yd extends Vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ji=-90,Zi=1;class Lo extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ji,Zi,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ji,Zi,t,e);r.layers=this.layers,this.add(r);const a=new dn(Ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new dn(Ji,Zi,t,e);o.layers=this.layers,this.add(o);const l=new dn(Ji,Zi,t,e);l.layers=this.layers,this.add(l);const c=new dn(Ji,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kd extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const fc=new ae;class Jd{constructor(t,e,n=0,s=1/0){this.ray=new Qr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(pc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Io(t[s],this,n,e);return n.sort(pc),n}}function pc(i,t){return i.distance-t.distance}function Io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Io(r[a],t,e,!0)}}class Zd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(i,t,e,n){const s=Qd(n);switch(e){case au:return i*t;case Wo:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case $o:return i*t*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case ja:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case to:case eo:case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case Or:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case So:case yo:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Br:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qd(i){switch(i){case fn:case nu:return{byteLength:1,components:1};case Os:case iu:case Hn:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Gn:case Go:case In:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);function Cu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:uf,begin_vertex:hf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:vf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:yf,color_vertex:bf,common:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:wf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Df,envmap_pars_fragment:Nf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:qf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:kf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:$f,lights_toon_pars_fragment:Yf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Qf,lights_fragment_begin:jf,lights_fragment_maps:tp,lights_fragment_end:ep,lightprobes_pars_fragment:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:up,metalnessmap_fragment:hp,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:xp,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:yp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:kp,skinning_pars_vertex:Gp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:$p,transmission_fragment:Yp,transmission_pars_fragment:Kp,uv_pars_fragment:Jp,uv_pars_vertex:Zp,uv_vertex:Qp,worldpos_vertex:jp,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distance_vert:l0,distance_frag:c0,equirect_vert:u0,equirect_frag:h0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:x0,meshmatcap_frag:v0,meshnormal_vert:M0,meshnormal_frag:S0,meshphong_vert:y0,meshphong_frag:b0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:w0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:I0,sprite_frag:D0},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Bn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Bn.physical={uniforms:en([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const yr={r:0,b:0,g:0},N0=new ae,Pu=new Wt;Pu.set(-1,0,0,0,1,0,0,0,1);function U0(i,t,e,n,s,r){const a=new Qt(0);let o=s===!0?0:1,l,c,u=null,h=0,d=null;function p(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const y=x.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(x){let E=!1;const y=p(x);y===null?f(a,o):y&&y.isColor&&(f(y,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,E){const y=p(E);y&&y.isCubeTexture?(c===void 0&&(c=new Ht(new wn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:hs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pu),c.material.toneMapped=re.getTransfer(y.colorSpace)!==pe,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ht(new Ln(2,2),new Ai({name:"BackgroundMaterial",uniforms:hs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,E){x.getRGB(yr,wu(i)),e.buffers.color.setClear(yr.r,yr.g,yr.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,f(a,o)},render:g,addToRenderList:v,dispose:m}}function F0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(U,O,W,D,L){let H=!1;const k=h(U,D,W,O);r!==k&&(r=k,c(r.object)),H=p(U,D,W,L),H&&g(U,D,W,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(U,O,W,D),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function h(U,O,W,D){const L=D.wireframe===!0;let H=n[O.id];H===void 0&&(H={},n[O.id]=H);const k=U.isInstancedMesh===!0?U.id:0;let et=H[k];et===void 0&&(et={},H[k]=et);let X=et[W.id];X===void 0&&(X={},et[W.id]=X);let Q=X[L];return Q===void 0&&(Q=d(l()),X[L]=Q),Q}function d(U){const O=[],W=[],D=[];for(let L=0;L<e;L++)O[L]=0,W[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:D,object:U,attributes:{},index:null}}function p(U,O,W,D){const L=r.attributes,H=O.attributes;let k=0;const et=W.getAttributes();for(const X in et)if(et[X].location>=0){const nt=L[X];let Ct=H[X];if(Ct===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Ct=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Ct=U.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(U,O,W,D){const L={},H=O.attributes;let k=0;const et=W.getAttributes();for(const X in et)if(et[X].location>=0){let nt=H[X];nt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor));const Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),L[X]=Ct,k++}r.attributes=L,r.attributesNum=k,r.index=D}function v(){const U=r.newAttributes;for(let O=0,W=U.length;O<W;O++)U[O]=0}function f(U){m(U,0)}function m(U,O){const W=r.newAttributes,D=r.enabledAttributes,L=r.attributeDivisors;W[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),L[U]!==O&&(i.vertexAttribDivisor(U,O),L[U]=O)}function x(){const U=r.newAttributes,O=r.enabledAttributes;for(let W=0,D=O.length;W<D;W++)O[W]!==U[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function E(U,O,W,D,L,H,k){k===!0?i.vertexAttribIPointer(U,O,W,L,H):i.vertexAttribPointer(U,O,W,D,L,H)}function y(U,O,W,D){v();const L=D.attributes,H=W.getAttributes(),k=O.defaultAttributeValues;for(const et in H){const X=H[et];if(X.location>=0){let Q=L[et];if(Q===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){const nt=Q.normalized,Ct=Q.itemSize,Nt=t.get(Q);if(Nt===void 0)continue;const Y=Nt.buffer,ht=Nt.type,Et=Nt.bytesPerElement,Ft=ht===i.INT||ht===i.UNSIGNED_INT||Q.gpuType===Go;if(Q.isInterleavedBufferAttribute){const vt=Q.data,kt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,ot=Q.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t,vt.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<X.locationSize;_t++)f(X.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let _t=0;_t<X.locationSize;_t++)E(X.location+_t,Ct/X.locationSize,ht,nt,kt*Et,(ot+Ct/X.locationSize*_t)*Et,Ft)}else{if(Q.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let vt=0;vt<X.locationSize;vt++)f(X.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let vt=0;vt<X.locationSize;vt++)E(X.location+vt,Ct/X.locationSize,ht,nt,Ct*Et,Ct/X.locationSize*vt*Et,Ft)}}else if(k!==void 0){const nt=k[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(X.location,nt);break;case 3:i.vertexAttrib3fv(X.location,nt);break;case 4:i.vertexAttrib4fv(X.location,nt);break;default:i.vertexAttrib1fv(X.location,nt)}}}}x()}function A(){N();for(const U in n){const O=n[U];for(const W in O){const D=O[W];for(const L in D){const H=D[L];for(const k in H)u(H[k].object),delete H[k];delete D[L]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;const O=n[U.id];for(const W in O){const D=O[W];for(const L in D){const H=D[L];for(const k in H)u(H[k].object),delete H[k];delete D[L]}}delete n[U.id]}function _(U){for(const O in n){const W=n[O];for(const D in W){const L=W[D];if(L[U.id]===void 0)continue;const H=L[U.id];for(const k in H)u(H[k].object),delete H[k];delete L[U.id]}}}function b(U){for(const O in n){const W=n[O],D=U.isInstancedMesh===!0?U.id:0,L=W[D];if(L!==void 0){for(const H in L){const k=L[H];for(const et in k)u(k[et].object),delete k[et];delete L[H]}delete W[D],Object.keys(W).length===0&&delete n[O]}}}function N(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function O0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function B0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==zn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const b=_===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==fn&&_!==In&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:w}}function z0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const x=r?0:n,E=x*4;let y=m.clippingState||null;l.value=y,y=u(g,d,E,p);for(let A=0;A!==E;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const m=p+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let E=0,y=p;E!==v;++E,y+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}class al extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Su(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wn(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:rs});r.uniforms.tEquirect.value=e;const a=new Ht(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=ln),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const gc=256,k0=3,G0=20,Lu=256,Iu=16,H0=3,V0=new P,W0=new Qt;class Yr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lo(1,10,null),this._boxMesh=new Ht(new wn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=V0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(W0));const f=new Lo(n,s,u);return f.position.copy(o),f.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,fu(t))}_fromTexture(t,e){t.mapping===os||t.mapping===Fs?this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=_c(t,!1,!1),n=Math.log2(t)-k0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_c(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===Fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=X0(),this._integrationMaterial=q0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Iu);for(let a=0;a<=n;a++){const o=Yr.lodToRoughness(a,n);if(a>n-H0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Lu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=$0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function _c(i,t,e){return new al(i,{minFilter:ci,generateMipmaps:t,type:Hn,colorSpace:zr,depthBuffer:e})}function Ws(i,t,e){return new Ai({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:sn,blending:rs,depthTest:!1,depthWrite:!1})}function X0(){return Ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function q0(){return Ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Iu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return Ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${G0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xc(){return Ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vc(){return Ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Y0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===ra||p===aa)if(t.has(d)){const g=t.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new al(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,g=p===ra||p===aa,v=p===os||p===Fs;if(g||v){let f=e.get(d);const m=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Yr(i)),f=g?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),f.texture;if(f!==void 0)return f.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Yr(i)),f=g?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,p){return p===ra?d.mapping=os:p===aa&&(d.mapping=Fs),d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function K0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ir("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(g){const v=g.attributes;for(const f in v)t.update(v[f],i.ARRAY_BUFFER)}function h(g){const v=g.index,f=g.attributes.position;let m=0;if(f===void 0)return;const x=v!==null?v.array.length:f.array.length/3-1,E=f.count>=65535?_u:gu,y=new E(Math.ceil(x/3)*6,1),A=y.array;if(v!==null){const _=v.array;m=v.version;for(let b=0,N=0;b<x;b+=3){const R=_[b+0],U=_[b+1],O=_[b+2];A[N++]=R,A[N++]=U,A[N++]=U,A[N++]=O,A[N++]=O,A[N++]=R}}else{m=f.version;for(let _=0,b=0;_<x;_+=3){const N=_+0,R=_+1,U=_+2;A[b++]=N,A[b++]=R,A[b++]=R,A[b++]=U,A[b++]=U,A[b++]=N}}y.version=m;const w=r.get(g);w&&t.remove(w),r.set(g,y)}function d(g){const v=r.get(g);if(v){const f=g.index;f!==null&&v.version<f.version&&h(g)}else h(g);return r.get(g)}function p(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function Z0(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),e.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*a,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,p);let v=0;for(let f=0;f<p;f++)v+=d[f];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Q0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){const n=new WeakMap,s=new Te;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let R=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var p=R;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),f===!0&&(y=3);let A=o.attributes.position.count*y,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const _=new Float32Array(A*w*4*h),b=new pu(_,A,w,h);b.type=In,b.needsUpdate=!0;const N=y*4;for(let U=0;U<h;U++){const O=m[U],W=x[U],D=E[U],L=A*w*4*U;for(let H=0;H<O.count;H++){const k=H*N;g===!0&&(s.fromBufferAttribute(O,H),_[L+k+0]=s.x,_[L+k+1]=s.y,_[L+k+2]=s.z,_[L+k+3]=0),v===!0&&(s.fromBufferAttribute(W,H),_[L+k+4]=s.x,_[L+k+5]=s.y,_[L+k+6]=s.z,_[L+k+7]=0),f===!0&&(s.fromBufferAttribute(D,H),_[L+k+8]=s.x,_[L+k+9]=s.y,_[L+k+10]=s.z,_[L+k+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new Tt(A,w)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const em={[Kc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function nm(i,t,e,n,s,r){const a=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Pe;u.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new de([0,2,0,0,2,0],2));const h=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ht(u,h),p=new Ru(-1,1,1,-1,0,1);let g=null,v=null,f=!1,m,x=null,E=[],y=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<E.length;_++){const b=E[_];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){E=A,y=E.length>0&&E[0].isRenderPass===!0;const w=a.width,_=a.height;E.length>0&&o===null&&(o=new kn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new kn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new us(w,_),r===!0&&(c.format=ui,c.type=ls)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){const R=E[N];R.setSize&&R.setSize(w,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,w){if(f||A.toneMapping===Jn&&E.length===0)return!1;if(x=w,w!==null){const _=w.width,b=w.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return y===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Jn,!0},this.hasRenderPass=function(){return y},this.end=function(A,w){A.toneMapping=m,f=!0;let _=a,b=o;for(let N=0;N<E.length;N++){const R=E[N];R.enabled!==!1&&(R.render(A,b,_,w),R.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,h.defines={},re.getTransfer(g)===pe&&(h.defines.SRGB_TRANSFER="");const N=em[v];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,p),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const Du=new Qe,Nu=new us(1,1),Uu=new yu(1),Fu=new pu,Ou=new nd,Bu=new Su,Mc=[],Sc=[],yc=new Float32Array(16),bc=new Float32Array(9),Ec=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ec.set(n),i.uniformMatrix2fv(this.addr,!1,Ec),Oe(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Oe(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),Oe(e,n)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function ea(i){return i.version===0&&(i.compareFunction=uu,i.needsUpdate=!0),i}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ea(Nu):r=Du,e.setTexture2D(t||r,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ou,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ea(Uu):r=Bu,e.setTextureCube(t||r,s)}function Sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fu,s)}function ym(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}function bm(i,t){i.uniform1fv(this.addr,t)}function Em(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Tm(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function wm(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Lm(i,t){i.uniform2iv(this.addr,t)}function Im(i,t){i.uniform3iv(this.addr,t)}function Dm(i,t){i.uniform4iv(this.addr,t)}function Nm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ea(Nu):a=Du;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zm(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ou,r[a])}function km(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ea(Uu):a=Bu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Gm(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fu,r[a])}function Hm(i){switch(i){case 5126:return bm;case 35664:return Em;case 35665:return Tm;case 35666:return wm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tc(e,c===void 0?new Vm(o,i,t):new Wm(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Xm(o),Tc(e,h)),e=h}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);qm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $m=37297;let Ym=0;function Km(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ac=new Wt;function Jm(i){re._getMatrix(Ac,re.workingColorSpace,i);const t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case kr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Km(i.getShaderSource(t),o)}else return r}function Zm(i,t){const e=Jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Qm={[Kc]:"Linear",[Jc]:"Reinhard",[Zc]:"Cineon",[ko]:"ACESFilmic",[jc]:"AgX",[tu]:"Neutral",[Qc]:"Custom"};function jm(i,t){const e=Qm[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new P;function tg(){re.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(sg,rg)}function rg(i,t){const e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Do(e)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(ag,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lg={[Ar]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function cg(i){return lg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ug={[Fs]:"ENVMAP_MODE_REFRACTION"};function hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dg={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function fg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dg[i.combine]||"ENVMAP_BLENDING_NONE"}function pg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=cg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hg(e),h=fg(e),d=eg(e),p=ng(r),g=s.createProgram();let v,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(As).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(As).join(`
`),f.length>0&&(f+=`
`)):(v=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),f=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Do(a),a=Cc(a,e),a=Pc(a,e),o=Do(o),o=Cc(o,e),o=Pc(o,e),a=Lc(a),o=Lc(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=m+v+a,E=m+f+o,y=wc(s,s.VERTEX_SHADER,x),A=wc(s,s.FRAGMENT_SHADER,E);s.attachShader(g,y),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(A)||"",D=U.trim(),L=O.trim(),H=W.trim();let k=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,A);else{const X=Rc(s,y,"vertex"),Q=Rc(s,A,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+X+`
`+Q)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(L===""||H==="")&&(et=!1);et&&(R.diagnostics={runnable:k,programLog:D,vertexShader:{log:L,prefix:v},fragmentShader:{log:H,prefix:f}})}s.deleteShader(y),s.deleteShader(A),_=new Nr(s,g),b=ig(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,$m)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _g(t),e.set(t,n)),n}}class _g{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}}function xg(i){return i===wi||i===Or||i===Br}function vg(i,t,e,n,s,r){const a=new Qo,o=new gg,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,N,R,U,O){const W=R.fog,D=U.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||L,H),et=d[_.type];let X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=Q!==void 0?Q.length:0;let Ct=0;D.morphAttributes.position!==void 0&&(Ct=1),D.morphAttributes.normal!==void 0&&(Ct=2),D.morphAttributes.color!==void 0&&(Ct=3);let Nt,Y,ht,Et;if(et){const Mt=Bn[et];Nt=Mt.vertexShader,Y=Mt.fragmentShader}else{Nt=_.vertexShader,Y=_.fragmentShader;const Mt=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,Mt,fe),ht=Mt.id,Et=fe.id}const Ft=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),kt=U.isInstancedMesh===!0,ot=U.isBatchedMesh===!0,_t=!!_.map,Gt=!!_.matcap,ee=!!k,$t=ee&&k.isPMREMTexture===!0,Le=!!_.aoMap,ye=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,Un=!!_.displacementMap,ze=!!_.emissiveMap,_n=!!_.metalnessMap,xn=!!_.roughnessMap,vn=_.anisotropy>0,F=_.clearcoat>0,Mn=_.diffuseRoughness>0,Me=_.dispersion>0,Se=_.retroreflectivity>0,xt=_.iridescence>0,Ie=_.sheen>0,Ot=_.transmission>0,Vt=vn&&!!_.anisotropyMap,T=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,z=F&&!!_.clearcoatRoughnessMap,st=Mn&&!!_.diffuseRoughnessMap,j=xt&&!!_.iridescenceMap,ct=xt&&!!_.iridescenceThicknessMap,mt=Ie&&!!_.sheenColorMap,$=Ie&&!!_.sheenRoughnessMap,K=!!_.specularMap,dt=!!_.specularColorMap,C=!!_.specularIntensityMap,J=Ot&&!!_.transmissionMap,q=Ot&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,It=!!_.alphaHash,Kt=!!_.extensions;let rt=Jn;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Ut=$t?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Yt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:Y,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ot,batchingColor:ot&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:Gt,envMap:ee,envMapMode:ee&&k.mapping,envMapPMREM:$t,envMapMaxLod:$t?Ut.length-1:null,envMapSize:$t?Ut[0].width:null,aoMap:Le,lightMap:ye,bumpMap:Be,normalMap:me,displacementMap:Un,emissiveMap:ze,normalMapObjectSpace:me&&_.normalMapType===Th,normalMapTangentSpace:me&&_.normalMapType===Ao,packedNormalMap:me&&_.normalMapType===Ao&&xg(_.normalMap.format),metalnessMap:_n,roughnessMap:xn,anisotropy:vn,anisotropyMap:Vt,clearcoat:F,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:Mn,diffuseRoughnessMap:st,dispersion:Me,retroreflection:Se,iridescence:xt,iridescenceMap:j,iridescenceThicknessMap:ct,sheen:Ie,sheenColorMap:mt,sheenRoughnessMap:$,specularMap:K,specularColorMap:dt,specularIntensityMap:C,transmission:Ot,transmissionMap:J,thicknessMap:q,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:It,combine:_.combine,mapUv:_t&&p(_.map.channel),aoMapUv:Le&&p(_.aoMap.channel),lightMapUv:ye&&p(_.lightMap.channel),bumpMapUv:Be&&p(_.bumpMap.channel),normalMapUv:me&&p(_.normalMap.channel),displacementMapUv:Un&&p(_.displacementMap.channel),emissiveMapUv:ze&&p(_.emissiveMap.channel),metalnessMapUv:_n&&p(_.metalnessMap.channel),roughnessMapUv:xn&&p(_.roughnessMap.channel),anisotropyMapUv:Vt&&p(_.anisotropyMap.channel),clearcoatMapUv:T&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&p(_.sheenRoughnessMap.channel),specularMapUv:K&&p(_.specularMap.channel),specularColorMapUv:dt&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:J&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(me||vn),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(_t||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Ct,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function v(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const b=d[_.type];let N;if(b){const R=Bn[b];N=Bd.clone(R.uniforms)}else N=_.uniforms;return N}function E(_,b){let N=u.get(b);return N!==void 0?++N.usedTimes:(N=new pg(i,b,_,s),c.push(N),u.set(b,N)),N}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:w}}function Mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,v,f,m){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:f,group:m},i[t]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=f,x.group=m),t++,x}function l(d,p,g,v,f,m,x){x.reversedDepth===!0&&(f=-f);const E=o(d,p,g,v,f,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(d,p,g,v,f,m){const x=o(d,p,g,v,f,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(d,p){e.length>1&&e.sort(d||Sg),n.length>1&&n.sort(p||Dc),s.length>1&&s.sort(p||Dc)}function h(){for(let d=t,p=i.length;d<p;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function yg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Qt};break;case"SpotLight":e={position:new P,direction:new P,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){const t=new bg,e=Eg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ae,a=new ae;function o(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,x=0,E=0,y=0,A=0,w=0,_=0,b=0,N=0,R=0;c.sort(wg);for(let O=0,W=c.length;O<W;O++){const D=c[O],L=D.color,H=D.intensity,k=D.distance;let et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wi?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*H,h+=L.g*H,d+=L.b*H;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],H);R++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=et;const Ct=Q.getViewportCount();for(let Nt=0;Nt<Ct;Nt++)n.sunShadowMatrix[v+Nt]=Q.getMatrix(Nt),n.sunShadowCascade[v+Nt]=Q._cascadeData[Nt];v+=Ct,g++}n.sun[p]=X,p++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[f]=nt,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=D.shadow.matrix,A++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(L).multiplyScalar(H),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;const Q=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,Q.updateMatrices(D),D.castShadow&&N++),n.spotLightMatrix[x]=Q.matrix,D.castShadow){const nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=et,_++}x++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(L).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=X,E++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=D.shadow.matrix,w++}n.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(H),X.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.sunLength!==p||U.directionalLength!==f||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==b||U.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=f,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,U.sunLength=p,U.directionalLength=f,U.pointLength=m,U.spotLength=x,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=b,U.numLightProbes=R,n.version=Tg++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0,f=0;const m=u.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){const y=c[x];if(y.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),h++}else if(y.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(y.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const A=n.hemi[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:n}}function Uc(i){const t=new Ag(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):e.push(h)}function o(h){n.push(h)}function l(){t.setup(e),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Uc(i),t.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ig=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Fc=new ae,Ts=new P,Fa=new P;function Dg(i,t,e){let n=new zs;const s=new Tt,r=new Tt,a=new Te,o=new Hd,l=new Vd,c={},u=e.maxTextureSize,h={[Ti]:sn,[sn]:Ti,[En]:En},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Cg,fragmentShader:Pg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let m=this.type;this.render=function(w,_,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===Xc&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);const N=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(rs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(L=>L.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,L=w.length;D<L;D++){const H=w[D],k=H.shadow;if(k===void 0){zt("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const et=k.getFrameExtents();s.multiply(et),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,k.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ws){if(H.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new kn(s.x,s.y,{format:wi,type:Hn,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new us(s.x,s.y,In),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe}else H.isPointLight?(k.map=new al(s.x),k.map.depthTexture=new yu(s.x,Gn)):(k.map=new kn(s.x,s.y),k.map.depthTexture=new us(s.x,s.y,Gn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=hi,this.type===Ar?(k.map.depthTexture.compareFunction=X?cu:lu,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,b);const nt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:b.layers;for(let Ct=0;Ct<Q;Ct++){const Nt=k.getCamera(Ct);if(H.isPointLight){const Y=k.camera,ht=k.matrix,Et=H.distance||Y.far;Et!==Y.far&&(Y.far=Et,Y.updateProjectionMatrix()),Ts.setFromMatrixPosition(H.matrixWorld),Y.position.copy(Ts),Fa.copy(Y.position),Fa.add(Lg[Ct]),Y.up.copy(Ig[Ct]),Y.lookAt(Fa),Y.updateMatrixWorld(),ht.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Fc.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Fc,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ct),i.clear();else{Ct===0&&(i.setRenderTarget(k.map),i.clear());const Y=k.getViewport(Ct);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(a)}n=k.getFrustum(Ct),y(_,b,Nt,H,nt,this.type)}k.isPointLightShadow!==!0&&this.type===ws&&x(k,b),k.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(N,R,U)};function x(w,_){const b=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new kn(s.x,s.y,{format:wi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,b,p,v,null)}function E(w,_,b,N){let R=null;const U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=R.uuid,W=_.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let L=D[W];L===void 0&&(L=R.clone(),D[W]=L,_.addEventListener("dispose",A)),R=L}if(R.visible=_.visible,R.wireframe=_.wireframe,N===ws?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:h[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=b}return R}function y(w,_,b,N,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===ws)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const D=t.update(w),L=w.material;if(Array.isArray(L)){const H=D.groups;for(let k=0,et=H.length;k<et;k++){const X=H[k],Q=L[X.materialIndex];if(Q&&Q.visible){const nt=E(w,Q,N,U);w.onBeforeShadow(i,w,_,b,D,nt,X),i.renderBufferDirect(b,null,D,nt,w,X),w.onAfterShadow(i,w,_,b,D,nt,X)}}}else if(L.visible){const H=E(w,L,N,U);w.onBeforeShadow(i,w,_,b,D,H,null),i.renderBufferDirect(b,null,D,H,w,null),w.onAfterShadow(i,w,_,b,D,H,null)}}const W=w.children;for(let D=0,L=W.length;D<L;D++)y(W[D],_,b,N,R,U)}function A(w){w.target.removeEventListener("dispose",A);for(const b in c){const N=c[b],R=w.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function Ng(i,t){function e(){let C=!1;const J=new Te;let q=null;const ft=new Te(0,0,0,0);return{setMask:function(lt){q!==lt&&!C&&(i.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){C=lt},setClear:function(lt,ut,It,Kt,rt){rt===!0&&(lt*=Kt,ut*=Kt,It*=Kt),J.set(lt,ut,It,Kt),ft.equals(J)===!1&&(i.clearColor(lt,ut,It,Kt),ft.copy(J))},reset:function(){C=!1,q=null,ft.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,q=null,ft=null,lt=null;return{setReversed:function(ut){if(J!==ut){const It=t.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),J=ut;const Kt=lt;lt=null,this.setClear(Kt)}},getReversed:function(){return J},setTest:function(ut){ut?vt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(ut){q!==ut&&!C&&(i.depthMask(ut),q=ut)},setFunc:function(ut){if(J&&(ut=Uh[ut]),ft!==ut){switch(ut){case Ha:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){C=ut},setClear:function(ut){lt!==ut&&(lt=ut,J&&(ut=1-ut),i.clearDepth(ut))},reset:function(){C=!1,q=null,ft=null,lt=null,J=!1}}}function s(){let C=!1,J=null,q=null,ft=null,lt=null,ut=null,It=null,Kt=null,rt=null;return{setTest:function(Ut){C||(Ut?vt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Ut){J!==Ut&&!C&&(i.stencilMask(Ut),J=Ut)},setFunc:function(Ut,Yt,Mt){(q!==Ut||ft!==Yt||lt!==Mt)&&(i.stencilFunc(Ut,Yt,Mt),q=Ut,ft=Yt,lt=Mt)},setOp:function(Ut,Yt,Mt){(ut!==Ut||It!==Yt||Kt!==Mt)&&(i.stencilOp(Ut,Yt,Mt),ut=Ut,It=Yt,Kt=Mt)},setLocked:function(Ut){C=Ut},setClear:function(Ut){rt!==Ut&&(i.clearStencil(Ut),rt=Ut)},reset:function(){C=!1,J=null,q=null,ft=null,lt=null,ut=null,It=null,Kt=null,rt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],v=null,f=!1,m=null,x=null,E=null,y=null,A=null,w=null,_=null,b=new Qt(0,0,0),N=0,R=!1,U=null,O=null,W=null,D=null,L=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,et=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=et>=2);let Q=null,nt={};const Ct=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Y=new Te().fromArray(Ct),ht=new Te().fromArray(Nt);function Et(C,J,q,ft){const lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(C,ut),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<q;It++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(J+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}const Ft={};Ft[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Us),Be(!1),me(Tl),vt(i.CULL_FACE),Le(rs);function vt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function kt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function ot(C,J){return d[C]!==J?(i.bindFramebuffer(C,J),d[C]=J,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function _t(C,J){let q=g,ft=!1;if(C){q=p.get(J),q===void 0&&(q=[],p.set(J,q));const lt=C.textures;if(q.length!==lt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,It=lt.length;ut<It;ut++)q[ut]=i.COLOR_ATTACHMENT0+ut;q.length=lt.length,ft=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ft=!0);ft&&i.drawBuffers(q)}function Gt(C){return v!==C?(i.useProgram(C),v=C,!0):!1}const ee={[ns]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};ee[ah]=i.MIN,ee[oh]=i.MAX;const $t={[lh]:i.ZERO,[ch]:i.ONE,[uh]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[$c]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(C,J,q,ft,lt,ut,It,Kt,rt,Ut){if(C===rs){f===!0&&(kt(i.BLEND),f=!1);return}if(f===!1&&(vt(i.BLEND),f=!0),C!==ih){if(C!==m||Ut!==R){if((x!==ns||A!==ns)&&(i.blendEquation(i.FUNC_ADD),x=ns,A=ns),Ut)switch(C){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",C);break}else switch(C){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",C);break}E=null,y=null,w=null,_=null,b.set(0,0,0),N=0,m=C,R=Ut}return}lt=lt||J,ut=ut||q,It=It||ft,(J!==x||lt!==A)&&(i.blendEquationSeparate(ee[J],ee[lt]),x=J,A=lt),(q!==E||ft!==y||ut!==w||It!==_)&&(i.blendFuncSeparate($t[q],$t[ft],$t[ut],$t[It]),E=q,y=ft,w=ut,_=It),(Kt.equals(b)===!1||rt!==N)&&(i.blendColor(Kt.r,Kt.g,Kt.b,rt),b.copy(Kt),N=rt),m=C,R=!1}function ye(C,J){C.side===En?kt(i.CULL_FACE):vt(i.CULL_FACE);let q=C.side===sn;J&&(q=!q),Be(q),C.blending===Rs&&C.transparent===!1?Le(rs):Le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ft=C.stencilWrite;o.setTest(ft),ft&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function me(C){C!==eh?(vt(i.CULL_FACE),C!==O&&(C===Tl?i.cullFace(i.BACK):C===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),O=C}function Un(C){C!==W&&(k&&i.lineWidth(C),W=C)}function ze(C,J,q){C?(vt(i.POLYGON_OFFSET_FILL),(D!==J||L!==q)&&(D=J,L=q,a.getReversed()&&(J=-J,q=-q),i.polygonOffset(J,q))):kt(i.POLYGON_OFFSET_FILL)}function _n(C){C?vt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function xn(C){C===void 0&&(C=i.TEXTURE0+H-1),Q!==C&&(i.activeTexture(C),Q=C)}function vn(C,J,q){q===void 0&&(Q===null?q=i.TEXTURE0+H-1:q=Q);let ft=nt[q];ft===void 0&&(ft={type:void 0,texture:void 0},nt[q]=ft),(ft.type!==C||ft.texture!==J)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(C,J||Ft[C]),ft.type=C,ft.texture=J)}function F(){const C=nt[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Mn(){try{i.compressedTexImage2D(...arguments)}catch(C){le("WebGLState:",C)}}function Me(){try{i.compressedTexImage3D(...arguments)}catch(C){le("WebGLState:",C)}}function Se(){try{i.texSubImage2D(...arguments)}catch(C){le("WebGLState:",C)}}function xt(){try{i.texSubImage3D(...arguments)}catch(C){le("WebGLState:",C)}}function Ie(){try{i.compressedTexSubImage2D(...arguments)}catch(C){le("WebGLState:",C)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(C){le("WebGLState:",C)}}function Vt(){try{i.texStorage2D(...arguments)}catch(C){le("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){le("WebGLState:",C)}}function M(){try{i.texImage2D(...arguments)}catch(C){le("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){le("WebGLState:",C)}}function st(C){return h[C]!==void 0?h[C]:i.getParameter(C)}function j(C,J){h[C]!==J&&(i.pixelStorei(C,J),h[C]=J)}function ct(C){Y.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function mt(C){ht.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ht.copy(C))}function $(C,J){let q=c.get(J);q===void 0&&(q=new WeakMap,c.set(J,q));let ft=q.get(C);ft===void 0&&(ft=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,ft,ft),q.set(C,ft))}function K(C,J,q){const lt=c.get(J).get(C);l[lt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,q),l[lt]=q)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,nt={},d={},l={},p=new WeakMap,g=[],v=null,f=!1,m=null,x=null,E=null,y=null,A=null,w=null,_=null,b=new Qt(0,0,0),N=0,R=!1,U=null,O=null,W=null,D=null,L=null,Y.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:kt,bindFramebuffer:ot,drawBuffers:_t,useProgram:Gt,setBlending:Le,setMaterial:ye,setFlipSided:Be,setCullFace:me,setLineWidth:Un,setPolygonOffset:ze,setScissorTest:_n,activeTexture:xn,bindTexture:vn,unbindTexture:F,compressedTexImage2D:Mn,compressedTexImage3D:Me,texImage2D:M,texImage3D:z,pixelStorei:j,getParameter:st,updateUBOMapping:$,uniformBlockBinding:K,texStorage2D:Vt,texStorage3D:T,texSubImage2D:Se,texSubImage3D:xt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ot,scissor:ct,viewport:mt,reset:dt}}function Ug(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,h=new Set;let d;const p=new WeakMap,g=new Set,v=new FinalizationRegistry(T=>g.delete(T));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return f?new OffscreenCanvas(T,M):Gr("canvas")}function x(T,M,z){let st=1;const j=Vt(T);if((j.width>z||j.height>z)&&(st=z/Math.max(j.width,j.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ct=Math.floor(st*j.width),mt=Math.floor(st*j.height);d===void 0&&(d=m(ct,mt));const $=M?m(ct,mt):d;return $.width=ct,$.height=mt,$.getContext("2d").drawImage(T,0,0,ct,mt),zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ct+"x"+mt+")."),$}else return"data"in T&&zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function E(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,M,z,st,j,ct=!1){if(T!==null){if(i[T]!==void 0)return i[T];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let mt;st&&(mt=t.get("EXT_texture_norm16"),mt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&mt&&($=mt.R16_EXT),z===i.SHORT&&mt&&($=mt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&mt&&($=mt.RG16_EXT),z===i.SHORT&&mt&&($=mt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_SHORT&&mt&&($=mt.RGB16_EXT),z===i.SHORT&&mt&&($=mt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){const K=ct?kr:re.getTransfer(j);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=K===pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&mt&&($=mt.RGBA16_EXT),z===i.SHORT&&mt&&($=mt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,M){let z;return T?M===null||M===Gn||M===ls?z=i.DEPTH24_STENCIL8:M===In?z=i.DEPTH32F_STENCIL8:M===Os&&(z=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===ls?z=i.DEPTH_COMPONENT24:M===In?z=i.DEPTH_COMPONENT32F:M===Os&&(z=i.DEPTH_COMPONENT16),z}function b(T,M){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function N(T){const M=new WeakRef(T);n.get(T).__ref=M,g.add(M),v.register(T,M,M)}function R(T){const M=n.get(T).__ref;M!==void 0&&(g.delete(M),v.unregister(M))}function U(T){W(T.target)}function O(T){D(T.target)}function W(T){T.removeEventListener("dispose",U),R(T),H(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function D(T){T.removeEventListener("dispose",O),R(T),et(T)}function L(){for(const T of g){const M=T.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):W(M))}g.clear(),h.clear()}function H(T){const M=n.get(T);if(M.__webglInit===void 0)return;const z=T.source,st=p.get(z);if(st){const j=st[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(T),Object.keys(st).length===0&&p.delete(z)}n.remove(T)}function k(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const z=T.source,st=p.get(z);delete st[M.__cacheKey],a.memory.textures--}function et(T){const M=n.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();const z=T.depthTexture;if(z&&z.renderTarget===T&&W(z),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ct=0;ct<M.__webglFramebuffer[j].length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[j][ct]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const st=T.textures;for(let j=0,ct=st.length;j<ct;j++){const mt=n.get(st[j]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(st[j])}n.remove(T)}let X=0;function Q(){X=0}function nt(){return X}function Ct(T){X=T}function Nt(){const T=X;return T>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Y(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ht(T,M){const z=n.get(T);if(T.isVideoTexture&&Ie(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const st=T.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,T,M);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Et(T,M){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ye(z,T,M);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Ft(T,M){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ye(z,T,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function vt(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Be(z,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const kt={[Fr]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},ot={[qe]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},_t={[Ah]:i.NEVER,[uu]:i.ALWAYS,[Rh]:i.LESS,[lu]:i.LEQUAL,[Ch]:i.EQUAL,[cu]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function Gt(T,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===oa||M.magFilter===$s||M.magFilter===ci||M.minFilter===ln||M.minFilter===oa||M.minFilter===$s||M.minFilter===ci)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,kt[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,kt[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,kt[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==$s&&M.minFilter!==ci||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",U),N(M));const st=M.source;let j=p.get(st);j===void 0&&(j={},p.set(st,j));const ct=Y(M);if(ct!==T.__cacheKey){j[ct]===void 0&&(j[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ct].usedTimes++;const mt=j[T.__cacheKey];mt!==void 0&&(j[T.__cacheKey].usedTimes--,mt.usedTimes===0&&k(M)),T.__cacheKey=ct,T.__webglTexture=j[ct].texture}return z}function $t(T,M,z){return Math.floor(Math.floor(T/z)/M)}function Le(T,M,z,st){const ct=T.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,st,M.data);else{ct.sort((C,J)=>C.start-J.start);let mt=0;for(let C=1;C<ct.length;C++){const J=ct[mt],q=ct[C],ft=J.start+J.count,lt=$t(q.start,M.width,4),ut=$t(J.start,M.width,4);q.start<=ft+1&&lt===ut&&$t(q.start+q.count-1,M.width,4)===lt?J.count=Math.max(J.count,q.start+q.count-J.start):(++mt,ct[mt]=q)}ct.length=mt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let C=0,J=ct.length;C<J;C++){const q=ct[C],ft=Math.floor(q.start/4),lt=Math.ceil(q.count/4),ut=ft%M.width,It=Math.floor(ft/M.width),Kt=lt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,ut,It,Kt,rt,z,st,M.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function ye(T,M,z){let st=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=i.TEXTURE_3D);const j=ee(T,M),ct=M.source;e.bindTexture(st,T.__webglTexture,i.TEXTURE0+z);const mt=n.get(ct);if(ct.version!==mt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const rt=re.getPrimaries(re.workingColorSpace),Ut=M.colorSpace===li?null:re.getPrimaries(M.colorSpace),Yt=M.colorSpace===li||rt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let K=x(M.image,!1,s.maxTextureSize);K=Ot(M,K);const dt=r.convert(M.format,M.colorSpace),C=r.convert(M.type);let J=w(M.internalFormat,dt,C,M.normalized,M.colorSpace,M.isVideoTexture);Gt(st,M);let q;const ft=M.mipmaps,lt=M.isVideoTexture!==!0,ut=mt.__version===void 0||j===!0,It=ct.dataReady,Kt=b(M,K);if(M.isDepthTexture)J=_(M.format===ui,M.type),ut&&(lt?e.texStorage2D(i.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,dt,C,null));else if(M.isDataTexture)if(ft.length>0){lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,ft[0].width,ft[0].height);for(let rt=0,Ut=ft.length;rt<Ut;rt++)q=ft[rt],lt?It&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,dt,C,q.data):e.texImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,dt,C,q.data);M.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,K.width,K.height),It&&Le(M,K,dt,C)):e.texImage2D(i.TEXTURE_2D,0,J,K.width,K.height,0,dt,C,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,J,ft[0].width,ft[0].height,K.depth);for(let rt=0,Ut=ft.length;rt<Ut;rt++)if(q=ft[rt],M.format!==zn)if(dt!==null)if(lt){if(It)if(M.layerUpdates.size>0){const Yt=mc(q.width,q.height,M.format,M.type);for(const Mt of M.layerUpdates){const fe=q.data.subarray(Mt*Yt/q.data.BYTES_PER_ELEMENT,(Mt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Mt,q.width,q.height,1,dt,fe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,K.depth,dt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,J,q.width,q.height,K.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,q.width,q.height,K.depth,dt,C,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,J,q.width,q.height,K.depth,0,dt,C,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Kt,J,ft[0].width,ft[0].height);for(let rt=0,Ut=ft.length;rt<Ut;rt++)q=ft[rt],M.format!==zn?dt!==null?lt?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?It&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,q.width,q.height,dt,C,q.data):e.texImage2D(i.TEXTURE_2D,rt,J,q.width,q.height,0,dt,C,q.data)}else if(M.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,J,K.width,K.height,K.depth),It)if(M.layerUpdates.size>0){const rt=mc(K.width,K.height,M.format,M.type);for(const Ut of M.layerUpdates){const Yt=K.data.subarray(Ut*rt/K.data.BYTES_PER_ELEMENT,(Ut+1)*rt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,K.width,K.height,1,dt,C,Yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,C,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,dt,C,K.data);else if(M.isData3DTexture)lt?(ut&&e.texStorage3D(i.TEXTURE_3D,Kt,J,K.width,K.height,K.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,C,K.data)):e.texImage3D(i.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,dt,C,K.data);else if(M.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(i.TEXTURE_2D,Kt,J,K.width,K.height);else{let rt=K.width,Ut=K.height;for(let Yt=0;Yt<Kt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,J,rt,Ut,0,dt,C,null),rt>>=1,Ut>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),K.parentNode!==rt){rt.appendChild(K),h.add(M),rt.onpaint=Ut=>{const Yt=Ut.changedElements;for(const Mt of h)Yt.includes(Mt.image)&&(Mt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Yt=i.RGBA,Mt=i.RGBA,fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,Mt,fe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&ut){const rt=Vt(ft[0]);e.texStorage2D(i.TEXTURE_2D,Kt,J,rt.width,rt.height)}for(let rt=0,Ut=ft.length;rt<Ut;rt++)q=ft[rt],lt?It&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,dt,C,q):e.texImage2D(i.TEXTURE_2D,rt,J,dt,C,q);M.generateMipmaps=!1}else if(lt){if(ut){const rt=Vt(K);e.texStorage2D(i.TEXTURE_2D,Kt,J,rt.width,rt.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,C,K)}else e.texImage2D(i.TEXTURE_2D,0,J,dt,C,K);E(M)&&M.mipmapsAutoUpdate===!0&&y(st),mt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Be(T,M,z){if(M.image.length!==6)return;const st=ee(T,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const ct=n.get(j);if(j.version!==ct.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const mt=re.getPrimaries(re.workingColorSpace),$=M.colorSpace===li?null:re.getPrimaries(M.colorSpace),K=M.colorSpace===li||mt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,J=[];for(let Mt=0;Mt<6;Mt++)!dt&&!C?J[Mt]=x(M.image[Mt],!0,s.maxCubemapSize):J[Mt]=C?M.image[Mt].image:M.image[Mt],J[Mt]=Ot(M,J[Mt]);const q=J[0],ft=r.convert(M.format,M.colorSpace),lt=r.convert(M.type);let ut=w(M.internalFormat,ft,lt,M.normalized,M.colorSpace);const It=M.isVideoTexture!==!0,Kt=ct.__version===void 0||st===!0,rt=j.dataReady;let Ut=b(M,q);Gt(i.TEXTURE_CUBE_MAP,M);let Yt;if(M.isDepthTexture){if(ut=_(M.format===ui,M.type),Kt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,q.width,q.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,q.width,q.height,0,ft,lt,null)}else if(dt){It&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ut,q.width,q.height);for(let Mt=0;Mt<6;Mt++){Yt=J[Mt].mipmaps;for(let fe=0;fe<Yt.length;fe++){const ke=Yt[fe];M.format!==zn?ft!==null?It?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,0,0,ke.width,ke.height,ft,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,ut,ke.width,ke.height,0,ke.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,0,0,ke.width,ke.height,ft,lt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,ut,ke.width,ke.height,0,ft,lt,ke.data)}}}else{if(Yt=M.mipmaps,It&&Kt){Yt.length>0&&Ut++;const Mt=Vt(J[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ut,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(C){It?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,J[Mt].width,J[Mt].height,ft,lt,J[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,J[Mt].width,J[Mt].height,0,ft,lt,J[Mt].data);for(let fe=0;fe<Yt.length;fe++){const ti=Yt[fe].image[Mt].image;It?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,0,0,ti.width,ti.height,ft,lt,ti.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,ut,ti.width,ti.height,0,ft,lt,ti.data)}}else{It?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ft,lt,J[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,ft,lt,J[Mt]);for(let fe=0;fe<Yt.length;fe++){const ke=Yt[fe];It?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,0,0,ft,lt,ke.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,ut,ft,lt,ke.image[Mt])}}}E(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ct.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,z,st,j,ct){const mt=r.convert(z.format,z.colorSpace),$=r.convert(z.type),K=w(z.internalFormat,mt,$,z.normalized,z.colorSpace),dt=n.get(M),C=n.get(z);if(C.__renderTarget=M,!dt.__hasExternalTextures){const J=Math.max(1,M.width>>ct),q=Math.max(1,M.height>>ct);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ct,K,J,q,M.depth,0,mt,$,null):e.texImage2D(j,ct,K,J,q,0,mt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,j,C.__webglTexture,0,Se(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,j,C.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Un(T,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const st=M.depthTexture,j=st&&st.isDepthTexture?st.type:null,ct=_(M.stencilBuffer,j),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(M),ct,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(M),ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,T)}else{const st=M.textures;for(let j=0;j<st.length;j++){const ct=st[j],mt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),K=w(ct.internalFormat,mt,$,ct.normalized,ct.colorSpace);xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(M),K,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(M),K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(T,M,z){const st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(M.depthTexture);j.__renderTarget=M;const ct=st?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ct.width!==M.width||ct.height!==M.height)&&(ct.width=M.width,ct.height=M.height,M.depthTexture.needsUpdate=!0),st?vt(M.depthTexture,0):ht(M.depthTexture,0);const mt=j.__webglTexture,$=Se(M),K=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,dt=M.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===hi)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,mt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,mt,0);else if(M.depthTexture.format===ui)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,mt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(T){const M=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const st=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",j)};st.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=st}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)ze(M.__webglFramebuffer[st],T,st);else T.texture.mipmaps.length>0?ze(M.__webglFramebuffer[0],T,0):ze(M.__webglFramebuffer,T,0);else if(z){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=i.createRenderbuffer(),Un(M.__webglDepthbuffer[st],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Un(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(T,M,z){const st=n.get(T);M!==void 0&&me(st.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&_n(T)}function vn(T){const M=T.texture,z=n.get(T),st=n.get(M);T.addEventListener("dispose",O),N(T);const j=T.textures,ct=T.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=M.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let K=0;K<M.mipmaps.length;K++)z.__webglFramebuffer[$][K]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let $=0,K=j.length;$<K;$++){const dt=n.get(j[$]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&xt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const K=j[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const dt=r.convert(K.format,K.colorSpace),C=r.convert(K.type),J=w(K.internalFormat,dt,C,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),q=Se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Un(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)me(z.__webglFramebuffer[$][K],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else me(z.__webglFramebuffer[$],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);E(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let $=0,K=j.length;$<K;$++){const dt=j[$],C=n.get(dt);let J=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,C.__webglTexture),Gt(J,dt),me(z.__webglFramebuffer,T,dt,i.COLOR_ATTACHMENT0+$,J,0),E(dt)&&y(J)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,st.__webglTexture),Gt($,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)me(z.__webglFramebuffer[K],T,M,i.COLOR_ATTACHMENT0,$,K);else me(z.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,$,0);E(M)?y($):M.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&_n(T)}function F(T){const M=T.textures;for(let z=0,st=M.length;z<st;z++){const j=M[z];if(E(j)&&j.mipmapsAutoUpdate===!0){const ct=A(T),mt=n.get(j).__webglTexture;e.bindTexture(ct,mt),y(ct),e.unbindTexture()}}}const Mn=[];function Me(T){if(T.samples>0){if(xt(T)===!1){const M=T.textures,z=T.width,st=T.height;let j=i.COLOR_BUFFER_BIT;const ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(T),$=M.length>1;if($)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const C=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,st,0,0,z,st,j,i.NEAREST),l===!0&&(Mn.length=0,Mn.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Mn.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const C=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Se(T){return Math.min(s.maxSamples,T.samples)}function xt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ot(T,M){const z=T.colorSpace,st=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==zr&&z!==li&&(re.getTransfer(z)===pe?(st!==zn||j!==fn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",z)),M}function Vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=Q,this.getTextureUnits=nt,this.setTextureUnits=Ct,this.setTexture2D=ht,this.setTexture2DArray=Et,this.setTexture3D=Ft,this.setTextureCube=vt,this.rebindTextures=xn,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xt,this.dispose=L}function Fg(i,t){function e(n,s=li){let r;const a=re.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===ou)return i.RGB;if(n===zn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Lr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Za||n===Qa||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===Or||n===ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===eo)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===yo||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eo||n===To||n===Br||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ai({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kg extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",f=new zg,m={},x=e.getContextAttributes();let E=null,y=null;const A=[],w=[],_=new Tt;let b=null,N=null;const R=new dn;R.viewport=new Te;const U=new dn;U.viewport=new Te;const O=[R,U],W=new Kd;let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ht=A[Y];return ht===void 0&&(ht=new pa,A[Y]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Y){let ht=A[Y];return ht===void 0&&(ht=new pa,A[Y]=ht),ht.getGripSpace()},this.getHand=function(Y){let ht=A[Y];return ht===void 0&&(ht=new pa,A[Y]=ht),ht.getHandSpace()};function H(Y){const ht=w.indexOf(Y.inputSource);if(ht===-1)return;const Et=A[ht];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||a),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<A.length;Y++){const ht=w[Y];ht!==null&&(w[Y]=null,A[Y].disconnect(ht))}D=null,L=null,f.reset();for(const Y in m)delete m[Y];if(t.setRenderTarget(E),p=null,d=null,h=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),N!==null){const Y=N.camera;Y.fov=N.fov,Y.zoom=N.zoom,Y.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ft=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=x.stencil?ui:hi,Ft=x.stencil?ls:Gn);const kt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new kn(d.textureWidth,d.textureHeight,{format:zn,type:fn,depthTexture:new us(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new kn(p.framebufferWidth,p.framebufferHeight,{format:zn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function et(Y){for(let ht=0;ht<Y.removed.length;ht++){const Et=Y.removed[ht],Ft=w.indexOf(Et);Ft>=0&&(w[Ft]=null,A[Ft].disconnect(Et))}for(let ht=0;ht<Y.added.length;ht++){const Et=Y.added[ht];let Ft=w.indexOf(Et);if(Ft===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(Et),Ft=kt;break}else if(w[kt]===null){w[kt]=Et,Ft=kt;break}if(Ft===-1)break}const vt=A[Ft];vt&&vt.connect(Et)}}function X(Y,ht){ht===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ht.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ht=Y.near,Et=Y.far;f.texture!==null&&(f.depthNear>0&&(ht=f.depthNear),f.depthFar>0&&(Et=f.depthFar)),W.near=U.near=R.near=ht,W.far=U.far=R.far=Et,(D!==W.near||L!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,L=W.far),W.layers.mask=Y.layers.mask|6,R.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const Ft=Y.parent,vt=W.cameras;X(W,Ft);for(let kt=0;kt<vt.length;kt++)X(vt[kt],Ft);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&Y.isPerspectiveCamera&&(N={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,W,Ft)};function Q(Y,ht,Et){Et===null?Y.matrix.copy(ht.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ht.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(Y){return m[Y]};let nt=null;function Ct(Y,ht){if(u=ht.getViewerPose(c||a),g=ht,u!==null){const Et=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ft=!1;Et.length!==W.cameras.length&&(W.cameras.length=0,Ft=!0);for(let _t=0;_t<Et.length;_t++){const Gt=Et[_t];let ee=null;if(p!==null)ee=p.getViewport(Gt);else{const Le=h.getViewSubImage(d,Gt);ee=Le.viewport,_t===0&&(t.setRenderTargetTextures(y,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(y))}let $t=O[_t];$t===void 0&&($t=new dn,$t.layers.enable(_t),$t.viewport=new Te,O[_t]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ee.x,ee.y,ee.width,ee.height),_t===0&&(W.matrix.copy($t.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ft===!0&&W.cameras.push($t)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const _t=h.getDepthInformation(Et[0]);_t&&_t.isValid&&_t.texture&&f.init(_t,s.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let _t=0;_t<Et.length;_t++){const Gt=Et[_t].camera;if(Gt){let ee=m[Gt];ee||(ee=new bu,m[Gt]=ee);const $t=h.getCameraImage(Gt);ee.sourceTexture=$t}}}}for(let Et=0;Et<A.length;Et++){const Ft=w[Et],vt=A[Et];Ft!==null&&vt!==void 0&&vt.update(Ft,ht,c||a)}nt&&nt(Y,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Nt=new Cu;Nt.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}}const Gg=new ae,zu=new Wt;zu.set(-1,0,0,0,1,0,0,0,1);function Hg(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,wu(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,x,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,y)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,x,E):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===sn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===sn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const x=t.get(m),E=x.envMap,y=x.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(zu),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,x,E){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=E*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const x=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={};function a(x,E){const y=E.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,E){let y=s[x.id];y===void 0&&(g(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",f));const A=E.program;n.updateUBOMapping(x,A);const w=t.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){const E=i.createBuffer(),y=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(x){const E=s[x.id],y=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){const b=y[w];if(Array.isArray(b))for(let N=0,R=b.length;N<R;N++)u(b[N],w,N,A);else u(b,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,E,y,A){if(d(x,E,y,A)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let N=0;N<_.length;N++){const R=_[N],U=v(R,!0);h(R,x.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,x.__data)}}function h(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function d(x,E,y,A){const w=x.value,_=E+"_"+y;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);const b=A[_];let N=!1;for(let R=0;R<w.length;R++)p(w[R],b,R)===!0&&(N=!0);return N}return p(w,A,_)}function p(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{const A=E[y];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(x){const E=x.uniforms;let y=0;const A=16;for(let _=0,b=E.length;_<b;_++){const N=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,U=N.length;R<U;R++){const O=N[R],W=Array.isArray(O.value)?O.value:[O.value],D=Array.isArray(E[_])||Array.isArray(O.value);let L=y;for(let k=0,et=W.length;k<et;k++){const X=W[k],Q=v(X,D),nt=y%A,Ct=nt%Q.boundary,Nt=nt+Ct;y+=Ct,Nt!==0&&A-Nt<Q.storage&&(y+=A-Nt),k===0&&(L=y),y+=Q.storage}const H=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new H((y-L)/Float32Array.BYTES_PER_ELEMENT),O.__offset=L}}const w=y%A;return w>0&&(y+=A-w),x.__size=y,x.__cache={},this}function v(x,E){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(x){const E=x.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}const Wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Xg(){return On===null&&(On=new vu(Wg,16,16,wi,Hn),On.name="DFG_LUT",On.minFilter=ln,On.magFilter=ln,On.wrapS=Kn,On.wrapT=Kn,On.generateMipmaps=!1,On.needsUpdate=!0),On}class qg{constructor(t={}){const{canvas:e=Dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=p,f=new Set([$o,qo,Xo]),m=new Set([fn,Gn,Os,ls,Ho,Vo]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const _=[],b=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1,O=null,W=null,D=null,L=null;this._outputColorSpace=De;let H=0,k=0,et=null,X=-1,Q=null;const nt=new Te,Ct=new Te;let Nt=null;const Y=new Qt(0);let ht=0,Et=e.width,Ft=e.height,vt=1,kt=null,ot=null;const _t=new Te(0,0,Et,Ft),Gt=new Te(0,0,Et,Ft);let ee=!1;const $t=new zs,Le=new tl;let ye=!1,Be=!1;const me=new ae,Un=new P,ze=new Te,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xn=!1;function vn(){return et===null?vt:1}let F=n;function Mn(S,I){return e.getContext(S,I)}let Me,Se,xt,Ie,Ot,Vt,T,M,z,st,j,ct,mt,$,K,dt,C,J,q,ft,lt,ut,It;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),F===null){const I="webgl2";if(F=Mn(I,S),F===null)throw Mn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(S){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),le("WebGLRenderer: "+S.message),S}function Kt(){Me=new K0(F),Me.init(),lt=new Fg(F,Me),Se=new B0(F,Me,t,lt),xt=new Ng(F,Me),Se.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),W=F.createFramebuffer(),D=F.createFramebuffer(),L=F.createFramebuffer(),Ie=new Q0(F),Ot=new Mg,Vt=new Ug(F,Me,xt,Ot,Se,lt,Ie),T=new Y0(R),M=new jd(F),ut=new F0(F,M),z=new J0(F,M,Ie,ut),st=new tm(F,z,M,ut,Ie),J=new j0(F,Se,Vt),K=new z0(Ot),j=new vg(R,T,Me,Se,ut,K),ct=new Hg(R,Ot),mt=new yg,$=new Rg(Me),C=new U0(R,T,xt,st,g,l),dt=new Dg(R,st,Se),It=new Vg(F,Ie,Se,xt),q=new O0(F,Me,Ie),ft=new Z0(F,Me,Ie),Ie.programs=j.programs,R.capabilities=Se,R.extensions=Me,R.properties=Ot,R.renderLists=mt,R.shadowMap=dt,R.state=xt,R.info=Ie}v!==fn&&(N=new nm(v,e.width,e.height,o,s,r));const rt=new kg(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(S){S!==void 0&&(vt=S,this.setSize(Et,Ft,!1))},this.getSize=function(S){return S.set(Et,Ft)},this.setSize=function(S,I,V=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=S,Ft=I,e.width=Math.floor(S*vt),e.height=Math.floor(I*vt),V===!0&&(e.style.width=S+"px",e.style.height=I+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Et*vt,Ft*vt).floor()},this.setDrawingBufferSize=function(S,I,V){Et=S,Ft=I,vt=V,e.width=Math.floor(S*V),e.height=Math.floor(I*V),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(v===fn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(nt)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,I,V,B){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,I,V,B),xt.viewport(nt.copy(_t).multiplyScalar(vn()).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,I,V,B){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,I,V,B),xt.scissor(Ct.copy(Gt).multiplyScalar(vn()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){xt.setScissorTest(ee=S)},this.setOpaqueSort=function(S){kt=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,V=!0){let B=0;if(S){let G=!1;if(et!==null){const gt=et.texture.format;G=f.has(gt)}if(G){const gt=et.texture.type,wt=m.has(gt),pt=C.getClearColor(),yt=C.getClearAlpha(),Pt=pt.r,Xt=pt.g,ne=pt.b;wt?(x[0]=Pt,x[1]=Xt,x[2]=ne,x[3]=yt,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=Pt,E[1]=Xt,E[2]=ne,E[3]=yt,F.clearBufferiv(F.COLOR,0,E))}else B|=F.COLOR_BUFFER_BIT}I&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),C.dispose(),mt.dispose(),$.dispose(),Vt.dispose(),Ot.dispose(),T.dispose(),st.dispose(),z.dispose(),ut.dispose(),It.dispose(),j.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ml),rt.removeEventListener("sessionend",gl),mi.stop()};function Ut(S){S.preventDefault(),Hr("WebGLRenderer: Context Lost."),U=!0}function Yt(){Hr("WebGLRenderer: Context Restored."),U=!1;const S=Ie.autoReset,I=dt.enabled,V=dt.autoUpdate,B=dt.needsUpdate,G=dt.type;Kt(),Ie.autoReset=S,dt.enabled=I,dt.autoUpdate=V,dt.needsUpdate=B,dt.type=G}function Mt(S){le("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const I=S.target;I.removeEventListener("dispose",fe),ke(I)}function ke(S){ti(S),Ot.remove(S)}function ti(S){const I=Ot.get(S).programs;I!==void 0&&(I.forEach(function(V){j.releaseProgram(V)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,V,B,G,gt){I===null&&(I=_n);const wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,pt=Qu(S,I,V,B,G);xt.setMaterial(B,wt);let yt=V.index,Pt=1;if(B.wireframe===!0){if(yt=z.getWireframeAttribute(V),yt===void 0)return;Pt=2}const Xt=V.drawRange,ne=V.attributes.position;let At=Xt.start*Pt,ie=(Xt.start+Xt.count)*Pt;gt!==null&&(At=Math.max(At,gt.start*Pt),ie=Math.min(ie,(gt.start+gt.count)*Pt)),yt!==null?(At=Math.max(At,0),ie=Math.min(ie,yt.count)):ne!=null&&(At=Math.max(At,0),ie=Math.min(ie,ne.count));const Re=ie-At;if(Re<0||Re===1/0)return;ut.setup(G,B,pt,V,yt);let _e,ge=q;if(yt!==null&&(_e=M.get(yt),ge=ft,ge.setIndex(_e)),G.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*vn()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(G.isLine){let $e=B.linewidth;$e===void 0&&($e=1),xt.setLineWidth($e*vn()),G.isLineSegments?ge.setMode(F.LINES):G.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else G.isPoints?ge.setMode(F.POINTS):G.isSprite&&ge.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))ge.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Rt=G._multiDrawCounts,je=G._multiDrawCount,ue=yt?M.get(yt).bytesPerElement:1,gi=Ot.get(B).currentProgram.getUniforms();for(let Ye=0;Ye<je;Ye++)gi.setValue(F,"_gl_DrawID",Ye),ge.render($e[Ye]/ue,Rt[Ye])}else if(G.isInstancedMesh)ge.renderInstances(At,Re,G.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rt=Math.min(V.instanceCount,$e);ge.renderInstances(At,Re,Rt)}else ge.render(At,Re)};function pl(S,I,V,B){O!==null&&S.isNodeMaterial&&O.setObject(B,S),ye===!0&&K.setState(S,V,!1),S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,ps(S,I,B),S.side=Ti,S.needsUpdate=!0,ps(S,I,B),S.side=En):ps(S,I,B)}this.compile=function(S,I,V=null){V===null&&(V=S),O!==null&&O.renderStart(S,I,V),w=$.get(V),w.init(I),b.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Be=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Be),ye===!0&&K.setGlobalState(this.clippingPlanes,I),O!==null&&dt.render(w.state.shadowsArray,V,I);const B=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const pt=gt[wt];pl(pt,V,I,G),B.add(pt)}else pl(gt,V,I,G),B.add(gt)}),w=b.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(S,I,V=null){const B=this.compile(S,I,V);return new Promise(G=>{function gt(){if(B.forEach(function(wt){const yt=Ot.get(wt).currentProgram;(yt===void 0||yt.isReady())&&B.delete(wt)}),B.size===0){G(S);return}setTimeout(gt,10)}Me.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ia=null;function Ju(S){ia&&ia(S)}function ml(){mi.stop()}function gl(){mi.start()}const mi=new Cu;mi.setAnimationLoop(Ju),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(S){ia=S,rt.setAnimationLoop(S),S===null?mi.stop():mi.start()},rt.addEventListener("sessionstart",ml),rt.addEventListener("sessionend",gl),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(S,I);const V=rt.enabled===!0&&rt.isPresenting===!0,B=N!==null&&(et===null||V)&&N.begin(R,et);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(I),I=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,et),w=$.get(S,b.length),w.init(I),w.state.textureUnits=Vt.getTextureUnits(),b.push(w),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Le.setFromArrayCamera(I):$t.setFromProjectionMatrix(me,Dn,I.reversedDepth),Be=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Be),A=mt.get(S,_.length),A.init(),_.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const wt=R.xr.getDepthSensingMesh();wt!==null&&sa(wt,I,-1/0,R.sortObjects)}sa(S,I,0,R.sortObjects),A.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(kt,ot),xn=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,xn&&C.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),ye===!0&&K.beginShadows();const G=w.state.shadowsArray;if(dt.render(G,S,I),ye===!0&&K.endShadows(),(B&&N.hasRenderPass())===!1){const wt=A.opaque,pt=A.transmissive;if(w.setupLights(),I.isArrayCamera){const yt=I.cameras;if(pt.length>0)for(let Pt=0,Xt=yt.length;Pt<Xt;Pt++){const ne=yt[Pt];xl(wt,pt,S,ne)}xn&&C.render(S);for(let Pt=0,Xt=yt.length;Pt<Xt;Pt++){const ne=yt[Pt];_l(A,S,ne,ne.viewport)}}else pt.length>0&&xl(wt,pt,S,I),xn&&C.render(S),_l(A,S,I)}et!==null&&k===0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et)),B&&N.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),ut.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(w=b[b.length-1],Vt.setTextureUnits(w.state.textureUnits),ye===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,O!==null&&O.renderEnd()};function sa(S,I,V,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){const wt=I.isArrayCamera?Le:$t;if(!S.frustumCulled||S.intersectsFrustum(wt)){B&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const pt=st.update(S),yt=S.material;yt.visible&&A.push(S,pt,yt,V,ze.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){const wt=I.isArrayCamera?Le:$t;if(!S.frustumCulled||S.intersectsFrustum(wt)){const pt=st.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),ze.copy(pt.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(yt)){const Pt=pt.groups;for(let Xt=0,ne=Pt.length;Xt<ne;Xt++){const At=Pt[Xt],ie=yt[At.materialIndex];ie&&ie.visible&&A.push(S,pt,ie,V,ze.z,At,I)}}else yt.visible&&A.push(S,pt,yt,V,ze.z,null,I)}}}const gt=S.children;for(let wt=0,pt=gt.length;wt<pt;wt++)sa(gt[wt],I,V,B)}function _l(S,I,V,B){const{opaque:G,transmissive:gt,transparent:wt}=S;w.setupLightsView(V),ye===!0&&K.setGlobalState(R.clippingPlanes,V),B&&xt.viewport(nt.copy(B)),G.length>0&&Xs(G,I,V),gt.length>0&&Xs(gt,I,V),wt.length>0&&Xs(wt,I,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function xl(S,I,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const At=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new kn(1,1,{generateMipmaps:!0,type:At?Hn:fn,minFilter:ci,samples:Math.max(4,Se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const gt=w.state.transmissionRenderTarget[B.id],wt=B.viewport||nt;gt.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);const pt=R.getRenderTarget(),yt=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(gt),R.getClearColor(Y),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),xn&&C.render(V);const Xt=R.toneMapping;R.toneMapping=Jn;const ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ye===!0&&K.setGlobalState(R.clippingPlanes,B),Xs(S,V,B),Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ie=0,Re=I.length;ie<Re;ie++){const _e=I[ie],{object:ge,geometry:$e,material:Rt,group:je}=_e;if(Rt.side===En&&ge.layers.test(B.layers)){const ue=Rt.side;Rt.side=sn,Rt.needsUpdate=!0,vl(ge,V,B,$e,Rt,je),Rt.side=ue,Rt.needsUpdate=!0,At=!0}}At===!0&&(Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt))}R.setRenderTarget(pt,yt,Pt),R.setClearColor(Y,ht),ne!==void 0&&(B.viewport=ne),R.toneMapping=Xt}function Xs(S,I,V){const B=I.isScene===!0?I.overrideMaterial:null;for(let G=0,gt=S.length;G<gt;G++){const wt=S[G],{object:pt,geometry:yt,group:Pt}=wt;let Xt=wt.material;Xt.allowOverride===!0&&B!==null&&(Xt=B),pt.layers.test(V.layers)&&vl(pt,I,V,yt,Xt,Pt)}}function vl(S,I,V,B,G,gt){O!==null&&G.isNodeMaterial&&O.setObject(S,G),S.onBeforeRender(R,I,V,B,G,gt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(R,I,V,B,S,gt),G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,R.renderBufferDirect(V,I,B,G,S,gt),G.side=Ti,G.needsUpdate=!0,R.renderBufferDirect(V,I,B,G,S,gt),G.side=En):R.renderBufferDirect(V,I,B,G,S,gt),S.onAfterRender(R,I,V,B,G,gt)}function Ml(S){let I=0;for(const V of S)V.texture!==null&&I++;return I}function ps(S,I,V){I.isScene!==!0&&(I=_n);const B=Ot.get(S),G=w.state.lights,gt=w.state.shadowsArray,wt=G.state.version,pt=j.getParameters(S,G.state,gt,I,V,w.state.lightProbeGridArray),yt=j.getProgramCacheKey(pt);let Pt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const Xt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=T.get(S.envMap||B.environment,Xt),B.envMapRotation=B.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",fe),Pt=new Map,B.programs=Pt,B.programVariants=new Map);let ne=Pt.get(yt);if(ne!==void 0){if(B.currentProgram===ne&&B.lightsStateVersion===wt)return yl(S,pt),ne}else pt.uniforms=j.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,V,pt),S.onBeforeCompile(pt,R),ne=j.acquireProgram(pt,yt),Pt.set(yt,ne),B.uniforms=pt.uniforms;const At=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=K.uniform),yl(S,pt),B.needsLights=th(S),B.lightsStateVersion=wt,B.needsLights&&(At.ambientLightColor.value=G.state.ambient,At.lightProbe.value=G.state.probe,At.sunLights.value=G.state.sun,At.sunLightShadows.value=G.state.sunShadow,At.directionalLights.value=G.state.directional,At.directionalLightShadows.value=G.state.directionalShadow,At.spotLights.value=G.state.spot,At.spotLightShadows.value=G.state.spotShadow,At.rectAreaLights.value=G.state.rectArea,At.ltc_1.value=G.state.rectAreaLTC1,At.ltc_2.value=G.state.rectAreaLTC2,At.pointLights.value=G.state.point,At.pointLightShadows.value=G.state.pointShadow,At.hemisphereLights.value=G.state.hemi,At.sunShadowMatrix.value=G.state.sunShadowMatrix,At.sunShadowCascade.value=G.state.sunShadowCascade,At.directionalShadowMatrix.value=G.state.directionalShadowMatrix,At.spotLightMatrix.value=G.state.spotLightMatrix,At.spotLightMap.value=G.state.spotLightMap,At.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=Ml(w.state.lightProbeGridArray),B.currentProgram=ne,B.uniformsList=null,ne}function Zu(S,I,V,B,G){const gt=Ot.get(S),wt=gt.currentProgram.id+","+B+","+G;let pt=gt.programVariants.get(wt);return pt===void 0?(pt=ps(S,I,V),gt.programVariants.set(wt,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=B,gt.toneMapping=G),pt}function Sl(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Nr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function yl(S,I){const V=Ot.get(S);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Qu(S,I,V,B,G){I.isScene!==!0&&(I=_n),Vt.resetTextureUnits();const gt=I.fog,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,pt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=T.get(B.envMap||wt,yt),Xt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ne=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,Re=!!V.morphAttributes.color;let _e=Jn;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(_e=R.toneMapping);const ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$e=ge!==void 0?ge.length:0,Rt=Ot.get(B),je=w.state.lights;if(ye===!0&&(Be===!0||S!==Q)){const be=S===Q&&B.id===X;K.setState(B,S,be)}let ue=!1,gi=!1;B.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==je.state.version||G.isBatchedMesh&&Rt.batching===!1||!G.isBatchedMesh&&Rt.batching===!0||G.isBatchedMesh&&Rt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Rt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Rt.instancing===!1||!G.isInstancedMesh&&Rt.instancing===!0||G.isSkinnedMesh&&Rt.skinning===!1||!G.isSkinnedMesh&&Rt.skinning===!0||G.isInstancedMesh&&Rt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Rt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Rt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Rt.instancingMorph===!1&&G.morphTexture!==null||Rt.envMap!==Pt||B.fog===!0&&Rt.fog!==gt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==K.numPlanes||Rt.numIntersection!==K.numIntersection)||Rt.vertexAlphas!==Xt||Rt.vertexTangents!==ne||Rt.morphTargets!==At||Rt.morphNormals!==ie||Rt.morphColors!==Re||Rt.morphTargetsCount!==$e||Rt.numLightProbeGrids!==Ml(w.state.lightProbeGridArray)?ue=!0:(Rt.outputColorSpace!==pt||Rt.toneMapping!==_e)&&(gi=!0):(ue=!0,Rt.__version=B.version);let Ye=Rt.currentProgram;(ue===!0||gi===!0)&&(Ye=gi===!0?Zu(B,I,G,pt,_e):ps(B,I,G),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Ye,Rt));let qs=!1,ei=!1,_i=!1;const oe=Ye.getUniforms(),We=Rt.uniforms;if(xt.useProgram(Ye.program)&&(qs=!0,ei=!0,_i=!0),B.id!==X&&(X=B.id,ei=!0),qs||Q!==S){xt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),oe.setValue(F,"projectionMatrix",S.projectionMatrix),oe.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ge=oe.map.cameraPosition;Ge!==void 0&&Ge.setValue(F,Un.setFromMatrixPosition(S.matrixWorld)),Se.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,ei=!0,_i=!0)}if(Rt.needsLights&&(je.state.sunShadowMap.length>0&&oe.setValue(F,"sunShadowMap",je.state.sunShadowMap,Vt),je.state.directionalShadowMap.length>0&&oe.setValue(F,"directionalShadowMap",je.state.directionalShadowMap,Vt),je.state.spotShadowMap.length>0&&oe.setValue(F,"spotShadowMap",je.state.spotShadowMap,Vt),je.state.pointShadowMap.length>0&&oe.setValue(F,"pointShadowMap",je.state.pointShadowMap,Vt)),G.isSkinnedMesh){oe.setOptional(F,G,"bindMatrix"),oe.setOptional(F,G,"bindMatrixInverse");const be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),oe.setValue(F,"boneTexture",be.boneTexture,Vt))}G.isBatchedMesh&&(oe.setOptional(F,G,"batchingTexture"),oe.setValue(F,"batchingTexture",G._matricesTexture,Vt),oe.setOptional(F,G,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",G._indirectTexture,Vt),oe.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",G._colorsTexture,Vt));const An=V.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&J.update(G,V,Ye),(ei||Rt.receiveShadow!==G.receiveShadow)&&(Rt.receiveShadow=G.receiveShadow,oe.setValue(F,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(We.envMapIntensity.value=I.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Xg()),ei){if(oe.setValue(F,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&ju(We,_i),gt&&B.fog===!0&&ct.refreshFogUniforms(We,gt),ct.refreshMaterialUniforms(We,B,vt,Ft,w.state.transmissionRenderTarget[S.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){const be=y;let Ge=0;for(const Vn of w.state.lightProbeGridArray)Vn.texture!==null&&(be.textures[Ge]=Vn.texture,be.min[Ge]=Vn.boundingBox.min,be.max[Ge]=Vn.boundingBox.max,be.resolution[Ge]=Vn.resolution,Ge++);for(const Vn in be)be[Vn].length=Ge;We.probesSH.value=be.textures,We.probesMin.value=be.min,We.probesMax.value=be.max,We.probesResolution.value=be.resolution}Nr.upload(F,Sl(Rt),We,Vt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Nr.upload(F,Sl(Rt),We,Vt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(F,"center",G.center),oe.setValue(F,"modelViewMatrix",G.modelViewMatrix),oe.setValue(F,"normalMatrix",G.normalMatrix),oe.setValue(F,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const be=B.uniformsGroups;for(let Ge=0,Vn=be.length;Ge<Vn;Ge++){const El=be[Ge];It.update(El,Ye),It.bind(El,Ye)}}return Ye}function ju(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function th(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(S,I,V){const B=Ot.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ot.get(S.texture).__webglTexture=I,Ot.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const V=Ot.get(S);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,V=0){et=S,H=I,k=V;let B=null,G=!1,gt=!1;if(S){const pt=Ot.get(S);if(pt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(F.FRAMEBUFFER,pt.__webglFramebuffer),nt.copy(S.viewport),Ct.copy(S.scissor),Nt=S.scissorTest,xt.viewport(nt),xt.scissor(Ct),xt.setScissorTest(Nt),X=-1;return}else if(pt.__webglFramebuffer===void 0)Vt.setupRenderTarget(S);else if(pt.__hasExternalTextures)Vt.rebindTextures(S,Ot.get(S.texture).__webglTexture,Ot.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Xt=S.depthTexture;if(pt.__boundDepthTexture!==Xt){if(Xt!==null&&Ot.has(Xt)&&(S.width!==Xt.image.width||S.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(gt=!0);const Pt=Ot.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?B=Pt[I][V]:B=Pt[I],G=!0):S.samples>0&&Vt.useMultisampledRTT(S)===!1?B=Ot.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[V]:B=Pt,nt.copy(S.viewport),Ct.copy(S.scissor),Nt=S.scissorTest}else nt.copy(_t).multiplyScalar(vt).floor(),Ct.copy(Gt).multiplyScalar(vt).floor(),Nt=ee;if(V!==0&&(B=W),xt.bindFramebuffer(F.FRAMEBUFFER,B)&&xt.drawBuffers(S,B),xt.viewport(nt),xt.scissor(Ct),xt.setScissorTest(Nt),G){const pt=Ot.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,V)}else if(gt){const pt=I;for(let yt=0;yt<S.textures.length;yt++){const Pt=Ot.get(S.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,Pt.__webglTexture,V,pt)}}else if(S!==null&&V!==0){const pt=Ot.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,V)}X=-1};function bl(S){const I=Ot.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=Se.textureFormatReadable(S.format),I.__typeReadable=Se.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,V,B,G,gt,wt,pt=0){if(!(S&&S.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt){xt.bindFramebuffer(F.FRAMEBUFFER,yt);try{const Pt=S.textures[pt],Xt=Pt.format,ne=Pt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt);const At=bl(Pt);if(At.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&V>=0&&V<=S.height-G&&F.readPixels(I,V,B,G,lt.convert(Xt),lt.convert(ne),gt)}finally{const Pt=et!==null?Ot.get(et).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,I,V,B,G,gt,wt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ot.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(yt=yt[wt],Array.isArray(yt)&&(yt=yt[0])),yt)if(I>=0&&I<=S.width-B&&V>=0&&V<=S.height-G){xt.bindFramebuffer(F.FRAMEBUFFER,yt);const Pt=S.textures[pt],Xt=Pt.format,ne=Pt.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt);const At=bl(Pt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(I,V,B,G,lt.convert(Xt),lt.convert(ne),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Re=et!==null?Ot.get(et).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,Re);const _e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Nh(F,_e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ie),F.deleteSync(_e),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,V=0){const B=Math.pow(2,-V),G=Math.floor(S.image.width*B),gt=Math.floor(S.image.height*B),wt=I!==null?I.x:0,pt=I!==null?I.y:0;Vt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,wt,pt,G,gt),xt.unbindTexture()},this.copyTextureToTexture=function(S,I,V=null,B=null,G=0,gt=0){let wt,pt,yt,Pt,Xt,ne,At,ie,Re;const _e=S.isCompressedTexture?S.mipmaps[gt]:S.image;if(V!==null)wt=V.max.x-V.min.x,pt=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Xt=V.min.y,ne=V.isBox3?V.min.z:0;else{const oe=Math.pow(2,-G);wt=Math.floor(_e.width*oe),pt=Math.floor(_e.height*oe),S.isDataArrayTexture?yt=_e.depth:S.isData3DTexture?yt=Math.floor(_e.depth*oe):yt=1,Pt=0,Xt=0,ne=0}B!==null?(At=B.x,ie=B.y,Re=B.z):(At=0,ie=0,Re=0);const ge=lt.convert(I.format),$e=lt.convert(I.type);let Rt;I.isData3DTexture?(Vt.setTexture3D(I,0),Rt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Vt.setTexture2DArray(I,0),Rt=F.TEXTURE_2D_ARRAY):(Vt.setTexture2D(I,0),Rt=F.TEXTURE_2D),xt.activeTexture(F.TEXTURE0),xt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),xt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),xt.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const je=xt.getParameter(F.UNPACK_ROW_LENGTH),ue=xt.getParameter(F.UNPACK_IMAGE_HEIGHT),gi=xt.getParameter(F.UNPACK_SKIP_PIXELS),Ye=xt.getParameter(F.UNPACK_SKIP_ROWS),qs=xt.getParameter(F.UNPACK_SKIP_IMAGES);xt.pixelStorei(F.UNPACK_ROW_LENGTH,_e.width),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e.height),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),xt.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);const ei=S.isDataArrayTexture||S.isData3DTexture,_i=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const oe=Ot.get(S),We=Ot.get(I),An=Ot.get(oe.__renderTarget),be=Ot.get(We.__renderTarget);xt.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ge=0;Ge<yt;Ge++)ei&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(S).__webglTexture,G,ne+Ge),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(I).__webglTexture,gt,Re+Ge)),F.blitFramebuffer(Pt,Xt,Pt+wt,Xt+pt,At,ie,At+wt,ie+pt,F.DEPTH_BUFFER_BIT,F.NEAREST);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ot.has(S)){const oe=Ot.get(S),We=Ot.get(I);xt.bindFramebuffer(F.READ_FRAMEBUFFER,D),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let An=0;An<yt;An++)ei?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.__webglTexture,G,ne+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,oe.__webglTexture,G),_i?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,gt,Re+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,gt),G!==0?F.blitFramebuffer(Pt,Xt,Pt+wt,Xt+pt,At,ie,At+wt,ie+pt,F.COLOR_BUFFER_BIT,F.NEAREST):_i?F.copyTexSubImage3D(Rt,gt,At,ie,Re+An,Pt,Xt,wt,pt):F.copyTexSubImage2D(Rt,gt,At,ie,Pt,Xt,wt,pt);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _i?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Rt,gt,At,ie,Re,wt,pt,yt,ge,$e,_e.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Rt,gt,At,ie,Re,wt,pt,yt,ge,_e.data):F.texSubImage3D(Rt,gt,At,ie,Re,wt,pt,yt,ge,$e,_e):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,At,ie,wt,pt,ge,$e,_e.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,At,ie,_e.width,_e.height,ge,_e.data):F.texSubImage2D(F.TEXTURE_2D,gt,At,ie,wt,pt,ge,$e,_e);xt.pixelStorei(F.UNPACK_ROW_LENGTH,je),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,gi),xt.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,qs),gt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&F.generateMipmap(Rt),xt.unbindTexture()},this.initRenderTarget=function(S){Ot.get(S).__webglFramebuffer===void 0&&Vt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Vt.setTextureCube(S,0):S.isData3DTexture?Vt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Vt.setTexture2DArray(S,0):Vt.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){H=0,k=0,et=null,xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}function jn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function pi(i=512){const t=document.createElement("canvas");return t.width=t.height=i,[t,t.getContext("2d")]}function Ii(i,t=1,e=!0){const n=new ds(i);return n.wrapS=n.wrapT=Fr,n.repeat.set(t,t),e&&(n.colorSpace=De),n.anisotropy=4,n}function Di(i,t,e,n){const s=i.getImageData(0,0,t,t),r=s.data;for(let a=0;a<r.length;a+=4){const o=(n()-.5)*e;r[a]+=o,r[a+1]+=o,r[a+2]+=o}i.putImageData(s,0,0)}function $g(i=7){const[e,n]=pi(512),s=jn(i);n.fillStyle="#6b675f",n.fillRect(0,0,512,512);for(let r=0;r<2600;r++){const a=s()*2.2;n.fillStyle=`rgba(${30+s()*120},${28+s()*110},${24+s()*100},${.08+s()*.2})`,n.beginPath(),n.arc(s()*512,s()*512,a,0,7),n.fill()}for(let r=0;r<16;r++){const a=s()*512,o=s()*512,l=14+s()*72,c=n.createRadialGradient(a,o,2,a,o,l);c.addColorStop(0,`rgba(20,17,13,${.12+s()*.22})`),c.addColorStop(1,"rgba(20,17,13,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,7),n.fill()}n.strokeStyle="rgba(25,22,18,0.55)";for(let r=0;r<12;r++){n.lineWidth=.6+s()*1.3;let a=s()*512,o=s()*512;n.beginPath(),n.moveTo(a,o);for(let l=0;l<8;l++)a+=(s()-.5)*34,o+=(s()-.5)*34,n.lineTo(a,o);n.stroke()}return n.strokeStyle="rgba(20,18,15,0.45)",n.lineWidth=3,n.beginPath(),n.moveTo(0,256),n.lineTo(512,258),n.stroke(),Di(n,512,26,s),Ii(e,4)}function Ur(i=3,t="#5a5b55"){const[n,s]=pi(512),r=jn(i),a=s.createLinearGradient(0,0,512,0);for(let o=0;o<=64;o++){const l=o/64,c=.5+.5*Math.sin(l*Math.PI*16);a.addColorStop(l,`rgba(${20+c*40},${22+c*40},${20+c*36},1)`)}s.fillStyle=t,s.fillRect(0,0,512,512),s.fillStyle=a,s.globalAlpha=.55,s.fillRect(0,0,512,512),s.globalAlpha=1;for(let o=0;o<90;o++){const l=r()*512,c=r()*512*.7,u=1+r()*8,h=12+r()*150,d=s.createLinearGradient(l,c,l,c+h);d.addColorStop(0,`rgba(${90+r()*50},${40+r()*25},${20+r()*15},${.16+r()*.3})`),d.addColorStop(1,"rgba(60,30,15,0)"),s.fillStyle=d,s.fillRect(l,c,u,h)}for(let o=0;o<400;o++)s.fillStyle=`rgba(${120+r()*80},${55+r()*40},${25+r()*20},${.05+r()*.25})`,s.fillRect(r()*512,r()*512,1+r()*5,1+r()*3);return Di(s,512,20,r),Ii(n,2)}function is(i=11){const[e,n]=pi(512),s=jn(i);n.fillStyle="#4a423a",n.fillRect(0,0,512,512);for(let r=0;r<1400;r++){const a=s()*512,o=s()*512,l=1+s()*22,c=n.createRadialGradient(a,o,0,a,o,l),u=s()>.5;c.addColorStop(0,u?`rgba(${140+s()*70},${60+s()*40},${25+s()*20},0.55)`:`rgba(${45+s()*30},${42+s()*25},${36+s()*20},0.6)`),c.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,7),n.fill()}return Di(n,512,30,s),Ii(e,2)}function ss(i="#4f6b66",t=21){const[n,s]=pi(512),r=jn(t);s.fillStyle=i,s.fillRect(0,0,512,512);for(let a=0;a<60;a++){const o=r()*512,l=r()*512,c=20+r()*90,u=s.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,`rgba(210,200,180,${.02+r()*.06})`),u.addColorStop(1,"rgba(210,200,180,0)"),s.fillStyle=u,s.beginPath(),s.arc(o,l,c,0,7),s.fill()}for(let a=0;a<90;a++){s.strokeStyle=r()>.5?"rgba(220,215,200,0.16)":"rgba(40,38,34,0.2)",s.lineWidth=.5+r(),s.beginPath();const o=r()*512,l=r()*512;s.moveTo(o,l),s.lineTo(o+(r()-.5)*100,l+(r()-.5)*30),s.stroke()}for(let a=0;a<110;a++){const o=r()*512,l=r()*512,c=1+r()*18,u=s.createRadialGradient(o,l,0,o,l,c),h=.08+r()*.35;u.addColorStop(0,`rgba(${110+r()*55},${50+r()*30},${18+r()*15},${h})`),u.addColorStop(1,"rgba(90,40,15,0)"),s.fillStyle=u,s.beginPath(),s.arc(o,l,c,0,7),s.fill()}return Di(s,512,14,r),Ii(n,2)}function yn(i=5,t="#67513a"){const[n,s]=pi(512),r=jn(i);s.fillStyle=t,s.fillRect(0,0,512,512);for(let a=0;a<70;a++){const o=r()*512;s.strokeStyle=`rgba(${30+r()*60},${20+r()*40},${12+r()*25},${.1+r()*.3})`,s.lineWidth=.5+r()*3,s.beginPath(),s.moveTo(0,o);for(let l=0;l<=512;l+=40)s.lineTo(l,o+Math.sin(l*.02+a)*4+(r()-.5)*3);s.stroke()}for(let a=0;a<6;a++){const o=r()*512,l=r()*512,c=6+r()*16;s.strokeStyle="rgba(40,26,15,0.5)",s.lineWidth=2,s.beginPath(),s.ellipse(o,l,c,c*.45,0,0,7),s.stroke()}for(let a=0;a<20;a++)s.fillStyle="rgba(30,28,25,0.35)",s.beginPath(),s.arc(r()*512,r()*512,1+r()*2,0,7),s.fill();return Di(s,512,18,r),Ii(n,3)}function Oc(i=9){const[e,n]=pi(512),s=jn(i);n.fillStyle="#56583a",n.fillRect(0,0,512,512);for(let r=0;r<9e3;r++){const a=s();n.strokeStyle=a>.7?`rgba(${120+s()*50},${105+s()*40},${50+s()*30},0.35)`:`rgba(${50+s()*40},${55+s()*35},${25+s()*25},0.45)`,n.lineWidth=.7;const o=s()*512,l=s()*512;n.beginPath(),n.moveTo(o,l),n.lineTo(o+(s()-.5)*4,l-3-s()*5),n.stroke()}return Di(n,512,18,s),Ii(e,40)}function Bc(i=13){const[e,n]=pi(512),s=jn(i);n.fillStyle="#6a5a44",n.fillRect(0,0,512,512);for(let a=0;a<5e3;a++){n.fillStyle=`rgba(${50+s()*90},${40+s()*70},${25+s()*45},${.1+s()*.3})`;const o=s()*2.5;n.beginPath(),n.arc(s()*512,s()*512,o,0,7),n.fill()}for(const a of[150,362]){const o=n.createLinearGradient(a-30,0,a+30,0);o.addColorStop(0,"rgba(40,30,20,0)"),o.addColorStop(.5,"rgba(40,30,20,0.35)"),o.addColorStop(1,"rgba(40,30,20,0)"),n.fillStyle=o,n.fillRect(a-30,0,60,512)}Di(n,512,24,s);const r=Ii(e,1);return r.repeat.set(1,6),r}function zc(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#3b4d63"),s.addColorStop(.32,"#7d7a72"),s.addColorStop(.52,"#c98e5b"),s.addColorStop(.62,"#e3b075"),s.addColorStop(.76,"#8a7a62"),s.addColorStop(1,"#3c3b34"),n.fillStyle=s,n.fillRect(0,0,1024,512);const r=jn(31);for(let l=0;l<70;l++){const c=r()*1024,u=30+r()*190,h=40+r()*150,d=5+r()*22,p=n.createRadialGradient(c,u,0,c,u,h);p.addColorStop(0,`rgba(238,214,185,${.03+r()*.08})`),p.addColorStop(1,"rgba(238,214,185,0)"),n.save(),n.translate(c,u),n.scale(1,d/h),n.fillStyle=p,n.beginPath(),n.arc(0,0,h,0,7),n.fill(),n.restore()}const a=n.createRadialGradient(760,300,0,760,300,180);a.addColorStop(0,"rgba(255,220,160,0.85)"),a.addColorStop(.2,"rgba(255,200,130,0.35)"),a.addColorStop(1,"rgba(255,200,130,0)"),n.fillStyle=a,n.fillRect(0,0,1024,512);const o=new ds(e);return o.colorSpace=De,o}function No(i,t="#d9cfb8",e="#2a241c"){const[n,s]=pi(256);s.fillStyle=t,s.fillRect(0,0,256,256);const r=jn(i.join("").length+3);for(let l=0;l<1200;l++)s.fillStyle=`rgba(80,65,45,${r()*.08})`,s.fillRect(r()*256,r()*256,2,2);s.strokeStyle="rgba(60,45,30,0.35)",s.lineWidth=3,s.strokeRect(8,8,240,240),s.fillStyle=e,s.textAlign="center",s.textBaseline="middle";const a=Array.isArray(i)?i:[i];a.forEach((l,c)=>{s.font=`bold ${Math.min(44,230/Math.max(6,l.length))}px 'Special Elite', monospace`,s.fillText(l,128,128+(c-(a.length-1)/2)*46)});const o=new ds(n);return o.colorSpace=De,o}function Oa(i,t=""){const s=document.createElement("canvas");s.width=512,s.height=256;const r=s.getContext("2d");r.fillStyle="#d8cdb4",r.fillRect(0,0,512,256),r.strokeStyle="#2c2b26",r.lineWidth=10,r.strokeRect(10,10,492,236),r.fillStyle="#22211d",r.textAlign="center",r.font="bold 84px 'Barlow Condensed', sans-serif",r.fillText(i,512/2,t?112:150),t&&(r.font="500 30px 'IBM Plex Mono', monospace",r.fillText(t,512/2,174));const a=new ds(s);return a.colorSpace=De,a}function Yg(){const e=document.createElement("canvas");e.width=256,e.height=340;const n=e.getContext("2d");n.fillStyle="#b9ab8d",n.fillRect(0,0,256,340),n.fillStyle="#3a3a34",n.fillRect(16,16,224,308),n.fillStyle="#d7c9a9",n.font="bold 30px 'Barlow Condensed'",n.textAlign="center",n.fillText("KEEP",256/2,68),n.fillText("AMERICA",256/2,100),n.fillText("RUNNING",256/2,132),n.strokeStyle="#c2542a",n.lineWidth=6,n.beginPath(),n.arc(256/2,215,52,0,7),n.stroke(),n.fillStyle="#c2542a",n.font="bold 46px 'Barlow Condensed'",n.fillText("V8",256/2,232),n.fillStyle="#9a8b70",n.font="500 13px 'IBM Plex Mono'",n.fillText("HOLLOW CREEK GARAGE",256/2,300);const s=new ds(e);return s.colorSpace=De,s}const kc=()=>ss("#52706a",41),Kg=()=>is(43);function ve(i,t=.85,e=.1,n={}){return new qt({color:i,roughness:t,metalness:e,...n})}function bt(i,t,e,n,s=0,r=0,a=0,o=null,l=!0){const c=new Ht(new wn(i,t,e),n);return c.position.set(s,r,a),c.castShadow=l,c.receiveShadow=!0,o&&o.add(c),c}function we(i,t,e,n,s,r=0,a=0,o=0,l=null){const c=new Ht(new nn(i,t,e,n),s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,l&&l.add(c),c}const Xe={battery:{name:"Battery",tool:10,bolts:2,torque:[6,9],spot:new P(-.58,1.02,2.12),note:"12V lead-acid. Terminals snug — do not crush the posts."},carb:{name:"Carburetor",tool:10,bolts:2,torque:[12,16],spot:new P(0,1.52,1.86),note:"Two-barrel. Mount gasket dry. Throttle linkage must move free."},alternator:{name:"Alternator",tool:12,bolts:2,torque:[20,26],spot:new P(.58,1,2.28),note:"Belts should deflect about half an inch. Too tight kills the bearing."},radiator:{name:"Radiator",tool:12,bolts:2,torque:[10,14],spot:new P(0,1.1,2.52),note:"Upper and lower hoses. Do not overtighten the plastic tanks."},plugs:{name:"Spark plugs",tool:14,bolts:4,torque:[18,22],spot:new P(0,1.6,1.58),note:'Four plugs. Gap 0.035". Hand-thread first, then torque cold.'},wheels:{name:"Wheels",tool:19,bolts:4,torque:[88,104],spot:new P(0,.55,.2),note:"Four wheels. Star-pattern torque. Re-check after the first mile."}};class Jg{constructor(){this.group=new Zt,this.group.name="truck",this.parts={},this.mountBoxes={},this.boltMeshes={},this.wheels=[],this.spin=0,this.logs=null,this.installed={},this.engineRunning=!1,this.exhaust=[],this.build()}build(){const t=this.group,e=new qt({map:kc(),color:12174525,roughness:.78,metalness:.28}),n=new qt({map:kc(),color:8227461,roughness:.85,metalness:.22}),s=new qt({map:Kg(),color:9073506,roughness:.95,metalness:.1}),r=ve(7830134,.5,.75),a=ve(3421743,.62,.7),o=ve(1579285,.95,.02),l=new qt({color:10399914,roughness:.18,metalness:.55,transparent:!0,opacity:.42}),c=new qt({color:2963251,roughness:.3,metalness:.4,transparent:!0,opacity:.8}),u=ve(12038562,.28,.95),h=ve(1776664,.85,.2),d=ve(5984582,.68,.55),p=ve(13813161,.8,.05),g=new Zt;t.add(g);for(const ot of[-.62,.62])bt(.12,.2,5,s,ot,.6,-.1,g);for(const ot of[-2.2,-1,.4,1.5,2.45])bt(1.4,.12,.12,s,0,.6,ot,g);bt(1.25,.08,5,ve(2763559,.95),0,.72,-.1,g);for(const ot of[1.55,-1.65]){const _t=we(.075,.075,1.75,10,a,0,.47,ot,g);_t.rotation.z=Math.PI/2;for(const Gt of[-.9,.9]){const ee=we(.26,.26,.1,18,s,Gt,.47,ot,g);ee.rotation.z=Math.PI/2,bt(.09,.34,.34,s,Gt+Math.sign(Gt)*.03,.47,ot,g)}}for(const ot of[1.55,-1.65])for(const _t of[-.8,.8])bt(.16,.5,.22,s,_t,.25,ot,g),bt(.34,.06,.4,ve(9062955,.9,.2),_t,.52,ot,g);const v=new Zt;t.add(v),bt(1.92,.78,1.72,e,0,1.04,.42,v),bt(1.82,.72,.22,e,0,1.82,-.34,v),bt(1.86,.1,1.42,n,0,2.18,.36,v),bt(.12,.74,1.3,e,-.89,1.82,.42,v),bt(.12,.74,1.3,e,.89,1.82,.42,v);const f=bt(1.62,.78,.04,l,0,1.84,1.03,v);f.rotation.x=-.2,bt(.03,.62,.98,c,-.955,1.84,.36,v),bt(.03,.62,.98,c,.955,1.84,.36,v),bt(1.4,.5,.03,c,0,1.86,-.46,v);for(const ot of[-.967,.967]){bt(.012,.72,.9,n,ot,1.06,.38,v),bt(.05,.05,.27,u,ot+Math.sign(ot)*.02,1.24,.28,v);const _t=bt(.05,.04,.22,a,ot+Math.sign(ot)*.16,1.55,.86,v);_t.rotation.y=Math.sign(ot)*.15,bt(.04,.18,.28,a,ot+Math.sign(ot)*.28,1.6,.91,v).rotation.y=Math.sign(ot)*.15}bt(1.7,.16,.7,h,0,.9,.9,v),bt(.56,.5,.5,ve(4339757,.9),-.42,1.25,.25,v),bt(.56,.5,.5,ve(4339757,.9),.42,1.25,.25,v);const m=new Ht(new ks(.19,.028,8,20),h);m.position.set(-.42,1.55,.92),m.rotation.x=Math.PI/2.7,v.add(m),bt(.22,.14,.01,p,.45,1.8,-.475,v);const x=new Zt;t.add(x);for(const ot of[-.91,.91]){bt(.2,.48,1.45,e,ot,.98,1.62,x);const _t=we(.36,.36,.12,16,s,ot,.72,1.55,x);_t.rotation.z=Math.PI/2}bt(1.82,.3,.22,n,0,.86,2.38,x),bt(1.74,.5,.14,e,0,1.08,2.44,x);for(let ot=-6;ot<=6;ot++)bt(.03,.4,.06,h,ot*.12,1.08,2.5,x);for(const ot of[-.66,.66]){const _t=we(.13,.13,.08,16,p,ot,1.1,2.5,x);_t.rotation.x=Math.PI/2;const Gt=new Ht(new ks(.14,.03,6,18),u);Gt.position.set(ot,1.1,2.52),x.add(Gt)}const E=bt(2.02,.16,.18,u,0,.78,2.6,x);E.castShadow=!0,bt(.55,.16,.02,p,0,.78,2.7,x),bt(1.5,.1,1.4,h,0,.83,1.65,x),bt(.78,.6,1,d,0,1.05,1.72,x),bt(.62,.2,.9,a,0,1.39,1.72,x),bt(.68,.11,.82,ve(7035973,.72,.5),0,1.53,1.7,x);for(let ot=0;ot<4;ot++)bt(.04,.03,.8,s,-.28+ot*.19,1.58,1.7,x);for(let ot=0;ot<4;ot++){const _t=we(.035,.035,.34,8,s,0,1.28,1.38+ot*.18,x);_t.rotation.x=Math.PI/2}const y=we(.05,.05,1.1,8,s,.47,.92,1.7,x);y.rotation.x=Math.PI/2;for(const[ot,_t,Gt,ee]of[[.32,1.02,2.28,.12],[-.25,1.02,2.28,.09],[0,1.05,2.3,.2]]){const $t=we(ee,ee,.07,16,a,ot,_t,Gt,x);$t.rotation.x=Math.PI/2}const A=new qr([new P(-.38,1.3,2.3),new P(-.4,1.55,2.2),new P(-.1,1.58,1.95)]),w=new Ht(new $r(A,8,.035,6,!1),h);x.add(w);const _=new Zt;_.position.set(0,1.35,1.32),_.rotation.x=-1.24;const b=bt(1.8,.06,1.3,e,0,0,.65,_);b.castShadow=!0,bt(1.62,.02,1.12,ve(3487023,.92),0,-.042,.65,_);for(const ot of[.25,.65,1.05])bt(1.5,.035,.06,a,0,-.06,ot,_);bt(.1,.02,.7,ve(9272154,.95),-.4,-.058,.65,_);const N=bt(.03,.03,.72,r,-.55,.3,.55,t);N.rotation.x=-.65,t.add(_);const R=new Zt;t.add(R),bt(1.92,.12,2.1,s,0,.83,-1.55,R);for(const ot of[-.94,.94])bt(.08,.62,2.05,e,ot,1.18,-1.55,R);bt(1.92,.62,.08,e,0,1.18,-2.62,R),bt(1.9,.08,.2,n,0,1.5,-2.55,R);for(const ot of[-.8,.8]){const _t=we(.4,.4,.2,14,n,ot,.92,-1.65,R);_t.rotation.z=Math.PI/2}for(const ot of[-.72,.72])bt(.28,.14,.05,ve(8004120,.55,.1,{emissive:2229764}),ot,.95,-2.67,R);bt(1.98,.14,.16,u,0,.72,-2.72,R);const U=new nn(.43,.43,.3,26),O=new nn(.27,.27,.31,18),W=new nn(.09,.09,.33,12);for(const[ot,_t]of[[-.94,1.55],[.94,1.55],[-.94,-1.65],[.94,-1.65]]){const Gt=new Zt;Gt.position.set(ot,.43,_t),Gt.rotation.z=Math.PI/2;const ee=new Ht(U,o);ee.castShadow=!0,ee.receiveShadow=!0,Gt.add(ee);const $t=new Ht(O,r);$t.castShadow=!0,Gt.add($t);const Le=new Ht(W,u);Gt.add(Le);for(let ye=0;ye<12;ye++){const Be=ye/12*Math.PI*2,me=new Ht(new wn(.06,.31,.1),o);me.position.set(Math.cos(Be)*.41,.15,Math.sin(Be)*.41),me.rotation.y=-Be,Gt.add(me)}Gt.visible=!1,t.add(Gt),this.wheels.push(Gt)}const D=we(.09,.09,.05,12,u,.78,1.04,-2.28,t);D.rotation.x=Math.PI/2;const L=we(.045,.045,2.4,8,a,.5,.4,-1.4,t);L.rotation.x=Math.PI/2;const H=we(.055,.055,.18,8,u,.5,.4,-2.62,t);H.rotation.x=Math.PI/2,bt(1.2,.05,.4,ve(7159596,.95),.1,1.54,.1,v);const k=new qt({color:9276546,roughness:.55,metalness:.65}),et=new Zt;bt(.34,.26,.22,ve(2040866,.7),0,.13,0,et),bt(.3,.05,.2,ve(11906189,.8),0,.27,0,et);for(const ot of[-.1,.1])we(.022,.022,.05,8,u,ot,.3,.02,et);bt(.34,.05,.24,a,0,.02,0,et),et.position.set(-.58,.88,2.12),et.visible=!1,t.add(et),this.parts.battery=et;const X=new Zt;bt(.26,.18,.2,k,0,.1,0,X),bt(.2,.06,.14,a,0,.21,0,X),we(.19,.19,.09,18,u,0,.3,0,X),we(.02,.02,.35,8,r,.23,.05,.02,X),X.position.set(0,1.6,1.86),X.visible=!1,t.add(X),this.parts.carb=X;const Q=new Zt,nt=we(.15,.15,.24,18,k,0,0,0,Q);nt.rotation.z=Math.PI/2;for(let ot=0;ot<6;ot++)we(.03,.03,.22,6,a,-.12,0,0,Q);const Ct=we(.12,.12,.05,16,a,.17,0,0,Q);Ct.rotation.z=Math.PI/2,Q.position.set(.58,1,2.28),Q.visible=!1,t.add(Q),this.parts.alternator=Q;const Nt=new Zt;bt(1,.54,.1,ve(4014140,.75,.4),0,.3,0,Nt);for(let ot=0;ot<14;ot++)bt(.015,.5,.11,a,-.45+ot*.07,.3,0,Nt);bt(.88,.06,.14,s,0,.56,0,Nt),bt(.88,.06,.14,s,0,.04,0,Nt);const Y=new Ht(new $r(new qr([new P(-.35,.58,0),new P(-.4,.72,-.2),new P(-.45,.7,-.55)]),8,.04,6),h);Nt.add(Y),Nt.position.set(0,.82,2.52),Nt.visible=!1,t.add(Nt),this.parts.radiator=Nt;const ht=new Zt;for(let ot=0;ot<4;ot++){const _t=-.27+ot*.18;we(.026,.026,.13,8,r,_t,.07,0,ht),we(.035,.035,.08,10,p,_t,.17,0,ht),bt(.035,.03,.035,u,_t,.25,0,ht),we(.03,.04,.08,8,o,_t,.2,0,ht)}ht.position.set(0,1.58,1.55),ht.visible=!1,t.add(ht),this.parts.plugs=ht;const Et=new Zt,Ft=new qt({map:ss("#6b4c2e",61),color:10127990,roughness:.95}),vt=new nn(.115,.115,1.9,8);for(let ot=0;ot<9;ot++){const _t=new Ht(vt,Ft);_t.rotation.z=Math.PI/2,_t.position.set((ot%3-1)*.23,.98+Math.floor(ot/3)*.21,-1.55+(ot%2?.17:-.11)),_t.castShadow=!0,Et.add(_t)}Et.visible=!1,this.logs=Et,t.add(Et);const kt=new Ht(new jr(1.6,24),new Ze({color:0,transparent:!0,opacity:.33,depthWrite:!1}));kt.rotation.x=-Math.PI/2,kt.position.y=.02,kt.scale.set(1,2.4,1),t.add(kt),this.boltMaterialGood=ve(10198164,.35,.9),this.boltMaterialLoose=ve(12751425,.4,.8),this.boltMaterialStrip=ve(9188130,.55,.6)}setPart(t,e){this.installed[t]=e,t==="wheels"?this.wheels.forEach(n=>{n.visible=e}):this.parts[t]&&(this.parts[t].visible=e)}setCargo(t){this.logs.visible=t}setRunning(t){this.engineRunning=t}makeBolts(t,e){const n=Xe[t];(this.boltMeshes[t]||[]).forEach(l=>l.parent?.remove(l));const r=[],a=new nn(.035,.035,.035,6),o=[];if(t==="wheels")this.wheels.forEach((l,c)=>{for(let u=0;u<4;u++){const h=u/4*Math.PI*2+.4;o.push({x:l.position.x+Math.cos(h)*.2,y:.43+Math.sin(h)*.2,z:l.position.z,parent:this.group})}});else{const l=n.spot,c=n.bolts;for(let u=0;u<c;u++)o.push({x:l.x+(u-(c-1)/2)*.16,y:l.y+.14,z:l.z+.08,parent:this.group})}return o.forEach((l,c)=>{const u=new Ht(a,e?.[c]==="loose"?this.boltMaterialLoose:e?.[c]==="stripped"?this.boltMaterialStrip:this.boltMaterialGood);t==="wheels"?(u.position.set(l.x,l.y,l.z),u.rotation.z=Math.PI/2):u.position.set(l.x,l.y,l.z),u.visible=this.installed[t]!==!1,this.group.add(u),r.push(u)}),this.boltMeshes[t]=r,r}update(t,e=0){if(this.spin+=e*t*2.3,this.wheels.forEach(n=>{n.visible&&n.children.forEach(s=>{s.rotation.y=this.spin})}),this.engineRunning){const n=Math.min(1,Math.abs(e)/8);this.group.position.y=Math.sin(performance.now()*.05)*.0025*(1+n*4),this.group.rotation.z=Math.sin(performance.now()*.031)*8e-4*(1+n*5)}else this.group.rotation.z*=.98}}class Zg{constructor(){this.group=new Zt,this.spin=0,this.build()}build(){const t=this.group,e=new qt({color:9254180,roughness:.7,metalness:.3}),n=ve(2237215,.8,.3),s=ve(11117460,.35,.9),r=ve(1447699,.95);this.wheels=[];for(const c of[-.62,.62]){const u=new Zt;u.position.set(0,.3,c),u.rotation.z=Math.PI/2;const h=new Ht(new nn(.3,.3,.09,20),r);u.add(h);const d=new Ht(new nn(.17,.17,.1,14),s);u.add(d);for(let p=0;p<5;p++){const g=new Ht(new wn(.02,.11,.3),s);g.rotation.y=p/5*Math.PI,u.add(g)}t.add(u),this.wheels.push(u)}bt(.08,.1,1,e,0,.56,0,t).rotation.x=-.1,bt(.22,.18,.42,n,0,.53,.12,t),bt(.24,.24,.44,e,0,.76,.02,t),bt(.3,.08,.45,n,0,.9,-.24,t),bt(.34,.16,.35,n,0,.8,-.62,t);for(const c of[-.08,.08]){const u=bt(.03,.6,.03,s,c,.55,.62,t);u.rotation.x=.22}bt(.62,.035,.04,s,0,.98,.52,t);for(const c of[-.28,.28])bt(.08,.05,.05,n,c,.98,.52,t);const a=we(.1,.1,.08,14,s,0,.87,.66,t);a.rotation.x=Math.PI/2,bt(.18,.14,.02,ve(15128228,.2,.2,{emissive:3353106}),0,.87,.71,t),bt(.18,.2,.28,n,0,.42,.18,t);const o=we(.035,.035,1,8,s,.13,.34,-.22,t);o.rotation.x=Math.PI/2,bt(.03,.2,.05,s,-.13,.4,0,t),bt(.02,.24,.02,s,.3,1.1,.52,t),bt(.12,.08,.02,s,.3,1.22,.52,t);const l=new Ht(new jr(.6,16),new Ze({color:0,transparent:!0,opacity:.3,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.scale.set(.55,1.4,1),t.add(l)}update(t,e=0){this.spin+=e*t*3,this.wheels.forEach(n=>n.children.forEach(s=>{s.rotation.y=this.spin})),this.group.rotation.z=Ro.lerp(this.group.rotation.z,e*.006,.05)}}const Qi=Math.PI*2,an=(i,t,e)=>new P(i,t,e);let Uo=null;function ol(i,t){return t?t.add(i):Uo&&Uo.add(i),i}function at(i,t=.8,e=.1,n={}){return new qt({color:i,roughness:t,metalness:e,...n})}function Z(i,t,e,n,s=0,r=0,a=0,o=null,l=!0,c=!0){const u=new Ht(new wn(i,t,e),n);return u.position.set(s,r,a),u.castShadow=l,u.receiveShadow=c,ol(u,o)}function se(i,t,e,n,s,r=0,a=0,o=0,l=null){const c=new Ht(new nn(i,t,e,n),s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,ol(c,l)}function ji(i,t,e,n,s,r,a=-Math.PI/2,o=null){const l=new Ht(new Ln(i,t),e);return l.position.set(n,s,r),l.rotation.x=a,l.receiveShadow=!0,ol(l,o)}function ts(i,t,e,n,s=.5){const r=No(i),a=new Dr(new Is({map:r,transparent:!0,depthWrite:!1}));return a.position.set(t,e,n),a.scale.set(s,s,1),a}class Qg{constructor(t,e){this.scene=t,this.renderer=e,this.colliders=[],this.treeColliders=[],this.interactables=[],this.markers={},this.pickups={},this.dust=null,this.exhaust=null,this.clock=0,this.build()}addCollider(t,e,n,s){this.colliders.push({minX:t,maxX:e,minZ:n,maxZ:s})}interact(t,e){return t.userData.interact=e,this.interactables.push(t),t}addHitbox(t,e,n,s,r,a,o,l=this.scene){const c=new Ht(new wn(t,e,n),new Ze({transparent:!0,opacity:0,depthWrite:!1}));return c.position.set(s,r,a),c.userData.interact=o,l.add(c),this.interactables.push(c),c}build(){const t=this.scene;Uo=t,t.background=new Qt(10325881),t.fog=new jo(10130566,62,260),this.buildSky(),this.buildLights(),this.buildGarage(),this.buildProps(),this.buildOutside(),this.buildTruck(),this.buildParticles()}buildSky(){const t=new Ht(new bi(320,32,20),new Ze({map:zc(),side:sn,fog:!1,depthWrite:!1}));t.rotation.y=1.9,this.scene.add(t);const e=new Dr(new Is({map:Er(16769200,0),color:16770747,transparent:!0,blending:Cs,depthWrite:!1,fog:!1}));e.position.set(150,42,210),e.scale.set(90,90,1),this.scene.add(e)}buildLights(){const t=new Wd(11056838,4864552,1.35);this.scene.add(t);const e=new Yd(9074784,.42);this.scene.add(e);const n=new dc(16760954,3.1);n.position.set(46,26,72),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);const s=n.shadow.camera;s.left=-34,s.right=34,s.top=34,s.bottom=-34,s.near=1,s.far=160,n.shadow.bias=-8e-4,n.shadow.normalBias=.035,this.scene.add(n),this.sun=n;const r=new dc(10467535,.55);r.position.set(-12,8,30),this.scene.add(r),this.lamps=[];const a=at(3095091,.55,.5),o=new Ze({color:16766880});[[-3.2,-1.6],[0,-1.6],[3.2,-1.6],[0,2.6],[-5.5,2]].forEach(([d,p],g)=>{const v=new Ht(new yi(.34,.28,18,1,!0),a);v.position.set(d,3.62,p),v.rotation.x=Math.PI,this.scene.add(v);const f=new Ht(new bi(.075,10,8),o);f.position.set(d,3.48,p),this.scene.add(f);const m=se(.008,.008,.9,4,at(1447184,.9),d,4.08,p);this.scene.add(m);const x=new Sr(16758890,g===4?22:58,15,2);x.position.set(d,3.35,p),x.castShadow=g===1,x.castShadow&&(x.shadow.mapSize.set(512,512),x.shadow.bias=-.002),this.scene.add(x),this.lamps.push(x)});const c=new hc(16763530,46,7,.95,.65,2);c.position.set(-5.2,2.4,-4.9),c.target.position.set(-5,1,-4.2),this.scene.add(c,c.target);const u=new hc(11454168,95,24,.72,.85,1.6);u.position.set(.5,3.2,9.2),u.target.position.set(0,1,-1.2),this.scene.add(u,u.target);const h=new Sr(16738858,9,5,2);h.position.set(-8.1,.7,-5.2),this.scene.add(h),this.stoveGlow=h}buildGarage(){const t=new qt({map:$g(3),roughness:.96,metalness:.02,color:12170150});t.map.repeat.set(3,2);const e=new qt({map:Ur(8,"#5c5c53"),roughness:.88,metalness:.18});e.map.repeat.set(4,1.5);const n=new qt({map:Ur(19,"#595a52"),roughness:.9,metalness:.18});n.map.repeat.set(3,1.5),new qt({map:yn(17),roughness:.92,metalness:.02}).map.repeat.set(2,1);const r=new qt({map:yn(23,"#4e3c2a"),roughness:.95});r.map.repeat.set(1,2),at(2368799,.9);const a=new qt({map:is(27),roughness:.9,metalness:.25});Z(18,.2,12,t,0,-.1,0,null,!1,!0),Z(7.4,.12,5,t,0,-.04,8.2,null,!1,!0),Z(2.2,.05,3.6,at(4143922,.95),-3.3,.015,3.6,null,!1,!0),Z(.05,.012,4.6,at(4801328,.98),-2.9,.012,-.6,null,!1,!1),Z(.05,.012,4.6,at(4801328,.98),2.9,.012,-.6,null,!1,!1),Z(18,4.8,.24,e,0,2.4,-6,null,!1,!0),Z(.24,4.8,12,n,-9,2.4,0,null,!1,!0),Z(.24,4.8,12,n,9,2.4,0,null,!1,!0),Z(6.6,4.8,.24,e,-5.7,2.4,6,null,!1,!0),Z(6.6,4.8,.24,e,5.7,2.4,6,null,!1,!0),Z(4.8,1.45,.24,e,0,4.08,6,null,!1,!0),Z(18.5,.3,12.4,at(2829350,.92),0,4.85,0,null,!0,!0);for(let v=-5;v<=5;v+=2.5){Z(18,.18,.14,r,0,4.5,v);for(const f of[-6,-2,2,6])Z(.12,.12,1.4,r,f,4.28,v).rotation.x=.3}for(const v of[.4,2,3.6])Z(17.8,.14,.1,a,0,v,-5.86),Z(.1,.14,11.8,a,-8.86,v,0),Z(.1,.14,11.8,a,8.86,v,0);const o=new Ze({map:zc(),color:14137230,transparent:!0,opacity:.9});for(const[v,f,m,x,E]of[[-5.2,2.7,-5.86,2.3,1.35],[5.4,2.7,-5.86,1.8,1.2]]){ji(x,E,o,v,f,m,0);const y=at(2763043,.9);Z(x+.14,.08,.1,y,v,f+E/2,m+.02),Z(x+.14,.08,.1,y,v,f-E/2,m+.02),Z(.08,E,.1,y,v-x/2,f,m+.02),Z(.08,E,.1,y,v+x/2,f,m+.02),Z(.05,E,.06,y,v,f,m+.03),Z(x,.05,.06,y,v,f,m+.03)}const l=se(.34,.34,4.85,20,jg(),0,4.12,5.9);l.rotation.z=Math.PI/2;for(const v of[-2.42,2.42])Z(.07,3.6,.1,at(3618351,.6,.6),v,2.05,5.86);Z(5,.04,.3,at(4867644,.95),0,.02,5.95,null,!1,!1);const c=new Ht(new Ln(4.6,1),new Ze({map:Oa("HOLLOW CREEK","GARAGE · REPAIRS · TOWING"),transparent:!0}));c.position.set(-5.4,3.55,-5.82),this.scene.add(c);const u=new Ht(new Ln(1,1.32),new Ze({map:Yg(),transparent:!0}));u.position.set(3,2.55,-5.85),this.scene.add(u);const h=new Ht(new Ln(.62,.86),new Ze({map:No(["OCT","31"],"#e5dcc6"),transparent:!0}));h.position.set(1,2.7,-5.84),this.scene.add(h),Z(4.6,1.5,.06,at(6247232,.95),-5,2.55,-5.84);const d=at(3025958,.8);for(let v=0;v<12;v++)for(let f=0;f<4;f++){const m=se(.012,.012,.03,6,d,-7.1+v*.38,1.95+f*.36,-5.8);m.rotation.x=Math.PI/2}const p=at(9277062,.35,.8);for(let v=0;v<6;v++){const f=-6.8+v*.6;Z(.045,.5,.03,at(3877404,.9),f,2.35,-5.78),Z(.15,.05,.035,p,f,2.62,-5.78)}const g=new Ht(new ks(.22,.025,6,20),at(2039321,.9));g.position.set(-2,2.5,-5.78),this.scene.add(g),this.addCollider(-9.4,9.4,-6.4,-5.7),this.addCollider(-9.4,-8.7,-6.4,6.4),this.addCollider(8.7,9.4,-6.4,6.4),this.addCollider(-9.4,-2.3,5.7,6.4),this.addCollider(2.3,9.4,5.7,6.4)}buildProps(){const t=new qt({map:yn(31),roughness:.9}),e=new qt({map:is(37),roughness:.92,metalness:.3});at(2434335,.85);const n=at(8487804,.42,.75),s=at(1513491,.95);Z(4.8,.1,.8,t,-4.9,.95,-5.15);for(const L of[-7.1,-2.7])for(const H of[-5.4,-4.9])Z(.08,.95,.08,e,L,.47,H);Z(4.7,.04,.68,at(3879977,.9),-4.9,.35,-5.15,null,!1,!0),Z(4.8,.12,.05,e,-4.9,.68,-4.78),this.addCollider(-7.4,-2.4,-5.6,-4.7),Z(.28,.16,.3,n,-6.9,1.07,-5.15),Z(.18,.12,.12,e,-6.9,1.18,-5);const r=se(.02,.02,.45,6,n,-6.9,1.2,-5.15);r.rotation.z=Math.PI/2,Z(.25,.2,.3,at(3555900,.7,.4),-3.3,1.12,-5.2);const a=se(.16,.16,.05,16,at(9077106,.9),-3.05,1.14,-5.2);a.rotation.z=Math.PI/2,Z(.5,.02,.06,n,-5.4,1,-4.95).rotation.y=.3,Z(.2,.03,.12,at(12751425,.6,.5),-4.1,1.01,-5.05),se(.11,.09,.24,14,at(2763559,.6,.3),-2,1.12,-5.25),Z(.05,.1,.03,n,-1.93,1.15,-5.25),se(.05,.045,.11,12,at(14209213,.8),-1.65,1.06,-5),Z(.12,.05,.06,at(12169372,.9),-.9,1,-5.2),Z(.44,.25,.18,at(4207915,.85),1.3,1.08,-5.3),Z(.3,.14,.01,at(11708815,.7),1.3,1.08,-5.2);const o=se(.03,.03,.02,10,n,1.4,1.08,-5.19);o.rotation.x=Math.PI/2,this.addHitbox(.6,.5,.4,1.3,1.1,-5.25,{id:"radio",verb:"Turn",label:"Radio"}),Z(.36,.02,.46,at(10255434,.9),-.6,1.02,-4.95),Z(.3,.01,.4,at(14998469,.95),-.6,1.04,-4.95),Z(.18,.04,.06,n,-.6,1.07,-5.12),this.addHitbox(.55,.4,.55,-.6,1.05,-4.95,{id:"manual",verb:"Read",label:"Service manual"});const l=new Zt;Z(.38,.28,.24,at(2304036,.75),0,.14,0,l),Z(.34,.05,.22,at(11906189,.8),0,.29,0,l);for(const L of[-.11,.11])se(.024,.024,.06,8,n,L,.32,.03,l);l.position.set(-4.6,.9,3.55),this.scene.add(l),l.add(ts(["BATTERY"],0,.55,0)),this.registerPickup("battery",l,[-4.6,.9,3.55],.75);const c=new Zt;Z(.3,.22,.24,n,0,.11,0,c),Z(.24,.08,.18,at(3355951,.7),0,.26,0,c),se(.2,.2,.1,16,at(10196618,.4,.8),0,.36,0,c),c.position.set(-3.3,1.01,-5.1),this.scene.add(c),c.add(ts(["CARB"],0,.58,0)),this.registerPickup("carb",c,[-3.3,1.15,-5.1],.6);const u=new Zt;for(const L of[.35,1.1,1.85])Z(.5,.06,3.4,e,0,L,0,u);for(const L of[-1.6,0,1.6])for(const H of[-.22,.22])Z(.06,1.9,.06,e,H,.95,L,u);u.position.set(-8.65,0,-1.4),this.scene.add(u),this.addCollider(-9,-8.3,-3.2,.4);for(let L=0;L<5;L++)se(.1,.1,.28,10,at(4999740,.8,.2),-8.65,.52,-2.7+L*.42);Z(.3,.24,.36,at(3095091,.8),-8.65,1.27,-2.2);const h=new Zt,d=se(.16,.16,.26,16,n,0,0,0,h);d.rotation.z=Math.PI/2;const p=se(.12,.12,.05,14,at(3355695,.7),.17,0,0,h);p.rotation.z=Math.PI/2;for(let L=0;L<6;L++)se(.028,.028,.23,6,at(3882038,.7),-.14,0,0,h);h.position.set(-8.65,1.35,.6),this.scene.add(h),h.add(ts(["ALTERNATOR"],0,.45,0)),this.registerPickup("alternator",h,[-8.6,1.35,.6],.8);const g=new Zt;Z(.95,1.1,.12,at(3882296,.8,.4),0,.55,0,g);for(let L=0;L<12;L++)Z(.02,1.02,.14,at(3092780,.7),-.4+L*.073,.55,0,g);Z(.9,.1,.18,e,0,1.13,0,g),Z(.9,.1,.18,e,0,.03,0,g),g.position.set(-8.6,.62,2.25),g.rotation.x=-.16,this.scene.add(g),g.add(ts(["RADIATOR"],0,.8,.2)),this.registerPickup("radiator",g,[-8.4,1.2,2.25],1.2);const v=new Zt;Z(.3,.16,.22,at(11575940,.9),0,.08,0,v),Z(.26,.02,.18,at(7032627,.9),0,.17,0,v);for(let L=0;L<4;L++)se(.035,.035,.11,8,n,-.09+L*.06,.22,0,v),se(.022,.022,.08,8,at(13682346,.7),-.09+L*.06,.3,0,v);v.position.set(-5.7,1.01,-5.15),this.scene.add(v),v.add(ts(["PLUGS ×4"],0,.55,0)),this.registerPickup("plugs",v,[-5.7,1.15,-5.15],.6);const f=new Zt;for(let L=0;L<4;L++){const H=se(.43,.43,.3,22,s,L%2*.9,.16+Math.floor(L/2)*.34,0,f);H.rotation.z=Math.PI/2;const k=se(.24,.24,.32,16,n,L%2*.9,.16+Math.floor(L/2)*.34,0,f);k.rotation.z=Math.PI/2}f.position.set(5.7,.02,7.7),this.scene.add(f),f.add(ts(["4 WHEELS"],.45,.95,0)),this.registerPickup("wheels",f,[5.7,.7,7.7],1.3);const m=new Zt;Z(.9,.1,2,at(5987922,.9),0,.42,0,m);for(const L of[-.4,.4])for(const H of[-.9,.9])Z(.06,.42,.06,n,L,.21,H,m);Z(.82,.14,1.85,at(7162420,.98),0,.53,-.02,m),Z(.62,.12,.34,at(13287337,.98),0,.62,-.75,m),m.position.set(8.05,0,-3.6),this.scene.add(m),this.addHitbox(1.2,.9,2.2,8.05,.55,-3.6,{id:"cot",verb:"Sleep",label:"Cot"}),this.addCollider(7.4,8.6,-4.8,-2.4);const x=new Zt;Z(.6,.15,.5,at(13091508,.45,.5),0,.85,0,x),Z(.5,.15,.4,at(5526602,.6,.4),0,.78,0,x),se(.018,.018,.3,6,n,0,1.05,-.18,x),Z(.18,.025,.025,n,0,1.19,-.1,x),Z(.55,.7,.4,at(4934208,.8),0,.4,0,x),x.position.set(8.35,0,2.4),x.rotation.y=-Math.PI/2,this.scene.add(x),this.addHitbox(.9,1.1,1,8.2,.9,2.4,{id:"sink",verb:"Wash up / drink",label:"Shop sink"}),this.addCollider(8,8.7,1.9,2.9);const E=Z(.7,.55,.03,at(8161928,.2,.9),8.82,2,2.4);E.rotation.y=Math.PI/2,Z(2.1,.1,.8,t,6.6,.95,-5.2);for(const L of[5.7,7.5])for(const H of[-5.5,-4.9])Z(.07,.95,.07,n,L,.47,H);Z(.5,.4,.4,at(11775131,.8),6.8,1.22,-5.25),Z(.4,.28,.02,at(3034173,.4,.1,{emissive:1915436,emissiveIntensity:.8}),6.8,1.23,-5.04),Z(.5,.06,.3,at(11775131,.8),6.8,1,-5.15),Z(.25,.02,.14,at(3421487,.8),6.8,1.05,-5),this.addHitbox(.7,.7,.6,6.8,1.2,-5.1,{id:"store",verb:"Browse",label:"Parts catalog terminal"}),this.addCollider(5.6,7.7,-5.7,-4.7);const y=new Zt;Z(1.5,1.1,.08,at(6968117,.95),0,0,0,y);for(let L=0;L<6;L++){const H=Z(.32,.22,.012,at(14208694,.95),-.45+L%3*.45,.22-Math.floor(L/3)*.32,.05,y);H.rotation.z=(L%2?-1:1)*.04}y.position.set(8.68,1.75,4.5),y.rotation.y=-Math.PI/2,this.scene.add(y),this.addHitbox(1.7,1.3,.4,8.5,1.75,4.5,{id:"board",verb:"Check",label:"Job board"});for(let L=0;L<4;L++){const H=se(.42,.42,.3,18,s,6.6,.17+L*.31,3.2);H.rotation.z=0}this.addCollider(6.1,7.1,2.7,3.7);for(let L=0;L<2;L++)se(.28,.28,.85,16,new qt({map:is(51+L),roughness:.9,metalness:.3}),-8.1,.43,3.7+L*.62),Z(.02,.5,.02,at(2894629,.9),-7.81,.43,3.7+L*.62);this.addCollider(-8.5,-7.7,3.3,4.7);const A=new Zt;Z(.1,2,.1,e,0,1,0,A),Z(.1,2,.1,e,.8,1,0,A),Z(1,.1,.1,e,.4,2,0,A);const w=Z(.12,.12,2.2,e,.4,2.45,.9,A);w.rotation.x=-.16,Z(.5,.1,.1,e,0,.1,0,A),Z(.5,.1,.1,e,.8,.1,0,A),se(.015,.015,.9,5,n,.4,2,1.85,A),A.position.set(6.6,0,-1),this.scene.add(A),this.addCollider(6.1,7.2,-2.2,-.3),Z(.75,.8,.6,at(2631459,.85,.4),-8.4,.4,-5.1),Z(.5,.25,.03,at(13658666,.4,.1,{emissive:13648906,emissiveIntensity:1.1}),-8.05,.45,-5.1),se(.1,.1,3.6,8,at(2828836,.9),-8.4,2.3,-5.1);for(let L=0;L<7;L++){const H=se(.09,.09,.7,7,new qt({map:yn(70+L),roughness:1}),-7.3,.1+Math.floor(L/3)*.17,-5.45+L%3*.16);H.rotation.z=Math.PI/2}const _=new Zt;Z(.9,.05,.55,n,0,.86,0,_);for(const L of[-.4,.4])for(const H of[-.22,.22])Z(.04,.8,.04,n,L,.45,H,_);for(const L of[-.4,.4]){const H=se(.06,.06,.04,10,s,L,.08,.25,_);H.rotation.z=Math.PI/2}_.position.set(-4.6,0,3.55),this.scene.add(_);const b=new Zt;se(.012,.012,1.75,5,at(1776149,.9),0,.88,0,b);const N=new Ht(new nn(.14,.14,.22,10,1,!0),at(4013365,.6,.5));N.position.set(0,-.02,0),b.add(N);const R=new Ht(new bi(.08,10,8),new Ze({color:16769452}));R.position.set(0,-.02,0),b.add(R);const U=new Sr(16761722,20,5.5,2);U.position.set(0,-.08,0),b.add(U),b.position.set(.9,2.35,1.6),this.scene.add(b);const O={drop:b};this.dropLight=O;const W=new Zt;Z(.55,.08,1.15,at(4338211,.95),0,.12,0,W),Z(.42,.1,.42,at(7031600,.95),0,.2,-.2,W);for(const L of[-.25,.25])for(const H of[-.45,.45]){const k=se(.06,.06,.05,8,at(1513235,.9),L,.06,H,W);k.rotation.z=Math.PI/2}W.position.set(2.4,0,.8),W.rotation.y=.4,this.scene.add(W);const D=se(.32,.32,.12,16,at(3814699,.8,.4),.7,.06,1.1,null);D.scale.z=.7,Z(.55,.3,.28,at(9057058,.75,.3),-2.2,.15,3),Z(.5,.03,.04,at(2763043,.8),-2.2,.32,3),l.position.set(-4.6,.9,3.55),Z(.1,1.6,1.8,e,3.6,1.3,-5.45);for(let L=0;L<4;L++)se(.08,.08,.16,10,at(8206890,.8,.3),3.55,.9+L*.3,-5.9+L%2*.25);this.addHitbox(.7,1,1.2,3.5,1.4,-5.4,{id:"food",verb:"Eat",label:"Beans & crackers"})}registerPickup(t,e,n,s){this.pickups[t]={group:e,pos:an(...n),radius:s,taken:!1},this.addHitbox(s,s,s,n[0],n[1]+s*.1,n[2],{id:`pickup_${t}`,verb:"Pick up",label:Xe[t]?.name||t})}takePickup(t){const e=this.pickups[t];return!e||e.taken?!1:(e.taken=!0,e.group.visible=!1,!0)}buildOutside(){this.grassGround();const t=new qt({map:Bc(63),roughness:.98});t.map.repeat.set(1,40);const e=ji(300,7.2,t,0,.015,26,-Math.PI/2);e.material.map.rotation=Math.PI/2,e.material.map.center.set(.5,.5);for(const[h,d,p,g]of[[0,16,7,20],[64,32,5.5,12],[-58,32,5.5,12]]){const v=ji(p,g,t,h,.02,d);v.material=t}const n=ji(8.2,2.4,new qt({map:Bc(67),roughness:1}),0,.018,7.2);this.scene.add(e,n);const s=at(6183751,1,0);for(let h=0;h<26;h++){const d=h/26*Qi,p=190+Math.sin(h*4.7)*28,g=22+Math.abs(Math.sin(h*2.1))*42,v=new Ht(new yi(34+h%3*14,g,5),s);v.position.set(Math.cos(d)*p,g/2-3,Math.sin(d)*p),v.rotation.y=d,this.scene.add(v)}at(6972482,1,0);for(const[h,d,p,g,v]of[[-40,60,55,35,7432771],[45,72,48,38,6184506],[-75,-30,50,50,6578236]]){const f=ji(p,g,at(v,1,0),h,.012,d);this.scene.add(f)}this.buildTrees(),this.buildFences();const r=new qt({map:yn(81,"#5b4632"),roughness:1}),a=[];for(let h=-90;h<=90;h+=30){se(.16,.22,8.5,7,r,h,4.25,30.5),Z(2.4,.12,.12,r,h,7.4,30.5);for(const d of[-1.05,0,1.05])Z(.07,.22,.07,at(4938322,.6,.6),h+d,7.57,30.5);a.push(an(h,7.7,30.5))}const o=new Mu({color:2828838,transparent:!0,opacity:.7});for(let h=0;h<a.length-1;h++)for(const d of[-1.05,0,1.05]){const p=a[h].clone();p.x+=d;const g=a[h+1].clone();g.x+=d;const v=p.clone().lerp(g,.5);v.y-=1.1;const f=new qr([p,v,g]),m=new Pe().setFromPoints(f.getPoints(10));this.scene.add(new Sd(m,o))}this.roadSign(-9,24.4,"MILLER FARM","2 MI →",1),this.roadSign(10,24.4,"HOLLOW CREEK","STORE ←",-1),this.roadSign(58,24.4,"MILLER","FARM →",1),this.roadSign(-52,24.4,"STORE","← 1/4 MI",-1),this.buildFarm(),this.buildStore();const l=new Zt,c=new qt({map:ss("#6a5a42",89),roughness:.95,metalness:.2});Z(1.7,.6,3.6,c,0,.5,0,l),Z(1.55,.5,1.3,c,0,1.05,.4,l);const u=se(.32,.32,.2,14,at(1710614,.95),-.85,.32,1.1,l);u.rotation.z=Math.PI/2,l.position.set(13.5,0,3.2),l.rotation.y=.3,this.scene.add(l);for(const[h,d]of[[12.6,4.2],[14.4,2.2]])this.treeColliders.push({x:h,z:d,r:1.1});this.buildMarker("miller",64,37,"MILLER FARM"),this.buildMarker("store",-58,37,"HOLLOW CREEK STORE"),this.buildGrassTufts()}grassGround(){const t=Oc(57);t.repeat.set(60,60);const e=new Ht(new Ln(420,420),new qt({map:t,roughness:1,metalness:0}));return e.rotation.x=-Math.PI/2,e.position.y=-.02,e.receiveShadow=!0,this.scene.add(e),e}buildTrees(){const t=Tr(9182),e=[];for(let f=0;f<190;f++){let m,x;if(f<120?(m=-160+t()*320,x=34+t()*130):(m=-170+t()*340,x=-140+t()*150),Math.abs(m)<18&&x>-15&&x<38||Math.abs(x-26)<8||Math.hypot(m-64,x-42)<22||Math.hypot(m+58,x-42)<20)continue;const E=.7+t()*.9;e.push({x:m,z:x,s:E,pine:t()>.62,rot:t()*Qi}),this.treeColliders.push({x:m,z:x,r:.65*E})}const n=new nn(.13,.28,3.4,6),s=new qt({color:4141861,roughness:1}),r=new Ki(n,s,e.length),a=new yi(1.7,4.8,7),o=new il(2,1),l=new qt({color:5657135,roughness:1,flatShading:!0}),c=new qt({color:3753263,roughness:1,flatShading:!0}),u=new Ki(a,c,e.filter(f=>f.pine).length),h=new Ki(o,l,e.filter(f=>!f.pine).length),d=new ae;let p=0,g=0;e.forEach((f,m)=>{d.compose(an(f.x,1.7*f.s,f.z),new bn().setFromEuler(new on(0,f.rot,0)),an(f.s,f.s,f.s)),r.setMatrixAt(m,d),f.pine?(d.compose(an(f.x,3.3*f.s,f.z),new bn().setFromEuler(new on(0,f.rot,0)),an(f.s,f.s,f.s)),u.setMatrixAt(p++,d)):(d.compose(an(f.x,3.7*f.s,f.z),new bn().setFromEuler(new on(0,f.rot,0)),an(f.s*1.1,f.s*.9,f.s*1.1)),h.setMatrixAt(g++,d))}),r.castShadow=!0,u.castShadow=!0,h.castShadow=!0,r.receiveShadow=!0,u.receiveShadow=!0,h.receiveShadow=!0,this.scene.add(r,u,h);const v=at(4014129,1,0);for(let f=0;f<50;f++){const m=f/50*Qi,x=Math.cos(m)*150,E=Math.sin(m)*150,y=new Ht(new yi(4+f%4,12+f%5*3,5),v);y.position.set(x,5,E),this.scene.add(y)}}buildFences(){const t=new qt({map:yn(91,"#6b5a42"),roughness:1}),e=new wn(.14,1.35,.14),n=[];for(let c=-140;c<=140;c+=4.2)Math.abs(c)<6||Math.abs(c-64)<4||Math.abs(c+58)<4||n.push([c,22.5]);const s=new Ki(e,t,n.length),r=new ae;n.forEach(([c,u],h)=>{r.compose(an(c,.67,u),new bn().setFromEuler(new on(0,(h%3-1)*.04,0)),an(1,1,1)),s.setMatrixAt(h,r)}),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s);const a=new qt({map:yn(93,"#705d44"),roughness:1}),o=[[-140,-6.5],[6.5,60],[68,136]];for(const[c,u]of o)for(const h of[.55,1.05])Z(u-c,.1,.07,a,(c+u)/2,h,22.5);const l=ji(300,2,at(6183996,1),0,.014,21.4);this.scene.add(l)}buildFarm(){const t=new qt({map:ss("#6e2f24",101),roughness:.92,metalness:.1}),e=new qt({map:is(103),roughness:.9,metalness:.25}),n=new qt({map:yn(107,"#5a4633"),roughness:1}),s=new Zt;Z(13,6,9,t,0,3,0,s),Z(13.6,.3,10.4,e,0,6.2,0,s).rotation.x=.08;for(const f of[-1,1]){const m=Z(13.8,.25,5.4,e,0,7,f*2.4,s);m.rotation.x=f*.5}Z(3.4,4.2,.12,n,0,2.1,4.53,s),Z(.12,4.2,.12,at(13682090,.95),0,2.1,4.6,s);const r=Z(3.3,.16,.05,at(11642250,.95),0,2.1,4.61,s);r.rotation.z=.75;const a=Z(3.3,.16,.05,at(11642250,.95),0,2.1,4.62,s);a.rotation.z=-.75,Z(.7,.7,.1,at(13682090,.9),0,4.9,4.62,s),s.position.set(64,0,45),this.scene.add(s),this.addCollider(57,71,40.2,49.8),se(2.3,2.3,11,20,new qt({map:Ur(111,"#6f6f64"),roughness:.85,metalness:.25}),74.5,5.5,48);const o=new Ht(new bi(2.3,16,8,0,Qi,0,Math.PI/2),at(6579290,.8,.4));o.position.set(74.5,11,48),this.scene.add(o),this.addCollider(72,77,45.5,50.5);const l=new Zt;Z(8,4.2,6,new qt({map:ss("#8a7b62",113),roughness:.95}),0,2.1,0,l);for(const f of[-1,1]){const m=Z(8.8,.2,3.8,e,0,5,f*1.5,l);m.rotation.x=f*.55}for(const f of[-2.5,.4])Z(1,1.1,.05,at(2829093,.4,.3),f,2.3,3.05,l),Z(.9,.9,.02,at(15187836,.5,.1,{emissive:12745260,emissiveIntensity:1.1}),f,2.3,3.08,l);Z(1.2,2.2,.1,at(4928804,.95),2.5,1.1,3.03,l),Z(8.4,.15,2,n,0,.6,4,l);for(const f of[-3.6,0,3.6])Z(.14,2.6,.14,n,f,1.8,4.8,l);Z(8.4,.12,.12,n,0,3.1,4.8,l),l.position.set(48,0,46),this.scene.add(l),this.addCollider(43.8,52.2,42.8,49.2);const c=new qt({map:Oc(117),color:13087610,roughness:1});for(let f=0;f<5;f++){const m=se(.9,.9,1.4,14,c,52+f*2.1,.9,36+f%2*1.7);m.rotation.z=Math.PI/2}for(let f=0;f<8;f++){const m=se(.12,.12,1.5,7,new qt({map:yn(121+f,"#5b422c"),roughness:1}),57.5+f%3*.25,.15+Math.floor(f/3)*.22,38.2);m.rotation.z=Math.PI/2}const u=at(7827519,1),h=new wn(.05,1.6,.05),d=380,p=new Ki(h,u,d),g=Tr(55),v=new ae;for(let f=0;f<d;f++){const x=34+Math.floor(f/20)*.9+g()*.35,E=28+f%20*.9+g()*.4;v.compose(an(x,.8,E),new bn().setFromEuler(new on(g()*.1,g()*Qi,g()*.12)),an(1,.8+g()*.5,1)),p.setMatrixAt(f,v)}p.castShadow=!0,this.scene.add(p)}buildStore(){const t=new qt({map:ss("#6f6a58",131),roughness:.95}),e=new qt({map:is(137),roughness:.9,metalness:.2}),n=new Zt;Z(9,4.4,6,t,0,2.2,0,n);for(const l of[-1,1]){const c=Z(10,.2,4,e,0,5,l*1.6,n);c.rotation.x=l*.45}for(const l of[-2.8,-1,1.6])Z(1.5,2,.05,at(2897715,.2,.4),l,2,3.04,n),Z(1.35,1.85,.02,at(14661754,.5,.1,{emissive:10249252,emissiveIntensity:1}),l,2,3.07,n);Z(1.2,2.4,.1,at(3877661,.95),3,1.2,3.04,n);const s=new Ht(new Ln(5.4,1.1),new Ze({map:Oa("HOLLOW CREEK STORE","FEED · FUEL · GENERAL GOODS"),transparent:!0}));s.position.set(0,3.55,3.12),n.add(s);const r=new Zt;Z(.6,1.8,.45,at(9341564,.7,.3),0,.9,0,r),Z(.45,.4,.02,at(2435107,.5),0,1.4,.24,r),Z(.05,.6,.05,at(2303008,.8),.33,1.1,.1,r),r.position.set(-5.3,0,4.8),n.add(r),Z(9.4,.15,1.8,new qt({map:yn(141),roughness:1}),0,.55,3.9,n);for(const l of[-4.2,0,4.2])Z(.12,2.9,.12,new qt({map:yn(143),roughness:1}),l,1.9,4.7,n);Z(9.4,.12,.12,at(4274733,.95),0,3.3,4.7,n);const a=new Ht(new bi(.07,8,6),new Ze({color:16766362}));a.position.set(0,3,4.3),n.add(a);const o=new Sr(16757866,8,8,2);o.position.set(0,2.9,4.2),n.add(o),n.position.set(-58,0,42),this.scene.add(n),this.addCollider(-62.7,-53.3,38.8,45.2)}roadSign(t,e,n,s,r){const a=new Zt;se(.045,.045,2.1,6,new qt({map:yn(151),roughness:1}),0,1.05,0,a);const o=new Ht(new Ln(1.7,.7),new Ze({map:Oa(n,s),transparent:!0,side:En}));o.position.set(0,1.8,.02),a.add(o),a.position.set(t,0,e),a.rotation.y=r>0?0:Math.PI,this.scene.add(a)}buildMarker(t,e,n,s){const r=new Zt,a=new Ht(new sl(1.7,2,40),new Ze({color:14263361,transparent:!0,opacity:.75,side:En,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.04,r.add(a);const o=new Ht(new nn(1.7,1.7,7,24,1,!0),new Ze({color:14263361,transparent:!0,opacity:.045,side:En,depthWrite:!1,blending:Cs}));o.position.y=3.5,r.add(o);const l=new Dr(new Is({map:No([s],"#e2d6ba"),transparent:!0,depthWrite:!1}));l.scale.set(1.5,.75,1),l.position.y=3.4,r.add(l),r.position.set(e,0,n),r.visible=!1,this.scene.add(r),this.markers[t]={group:r,ring:a,beam:o,x:e,z:n,label:s}}buildGrassTufts(){const t=Tr(202),e=new yi(.05,.36,3),n=at(6776639,1),s=new Ki(e,n,700),r=new ae;let a=0;for(;a<700;){const o=-35+t()*70,l=7+t()*16;Math.abs(o)<4.2&&l<26||l>21&&l<31||(r.compose(an(o,.18,l),new bn().setFromEuler(new on(0,t()*Qi,(t()-.5)*.2)),an(.7+t()*.8,.6+t()*.8,.7+t()*.8)),s.setMatrixAt(a++,r))}s.receiveShadow=!0,this.scene.add(s)}buildTruck(){const t=new Jg;t.group.position.set(0,0,-.6),this.scene.add(t.group),this.truck=t,this.addCollider(-1.2,1.2,-3.6,2.2);const e=new Zg;e.group.position.set(4.7,0,8.3),e.group.rotation.y=-.3,this.scene.add(e.group),this.moped=e;const n=-.6,s=Xe;for(const[r,a]of Object.entries(s))if(r==="wheels")for(const[o,l]of[[-.94,1.55],[.94,1.55],[-.94,-1.65],[.94,-1.65]])this.addHitbox(.75,.9,.75,o,.55,l+n,{id:"mount_wheels",verb:"Install",label:"Wheel (19mm)"},t.group).position.set(o,.55,l);else{const o=a.spot,l=r==="plugs"?-.5:o.x;this.addHitbox(.55,.55,.55,l,o.y+.12,o.z,{id:`mount_${r}`,verb:"Install",label:`${a.name} (${a.tool}mm · ${a.torque[0]}–${a.torque[1]} Nm)`},t.group)}this.addHitbox(.34,.4,.34,.95,1.3,1.55,{id:"tune",verb:"Tune",label:"Engine bay / diagnostic"},t.group),this.addHitbox(.7,1,.8,-1.15,1.35,.35,{id:"ignition",verb:"Crank",label:"Driver door / ignition"},t.group),this.addHitbox(.35,.35,.35,.78,1.04,-2.28,{id:"fuel_tank",verb:"Fill",label:"Fuel tank"},t.group),this.addHitbox(.3,.34,.3,.48,1.58,1.3,{id:"oil_fill",verb:"Fill",label:"Engine oil"},t.group),this.addHitbox(.32,.26,.32,.22,1.62,2.55,{id:"coolant_fill",verb:"Fill",label:"Coolant"},t.group),this.addHitbox(.9,1.2,1.4,-1.1,1.1,.2,{id:"truck_drive",verb:"Get in",label:"The Patient"},t.group),this.addHitbox(1,1.2,1.8,0,.7,0,{id:"moped_drive",verb:"Ride",label:"Moped"},e.group),this.mountHints={};for(const[r,a]of Object.entries(Xe)){const o=r==="wheels"?new P(0,.9,.1):a.spot.clone(),l=new Dr(new Is({map:Er(14263361,.05),transparent:!0,depthWrite:!1,opacity:.8}));l.position.copy(o).add(new P(0,r==="wheels"?.7:.35,0)),l.scale.set(.22,.22,1),l.visible=!1,this.truck.group.add(l),this.mountHints[r]=l}}buildParticles(){const e=new Float32Array(1260),n=Tr(771);for(let d=0;d<420;d++)e[d*3]=-8+n()*16,e[d*3+1]=.2+n()*4.2,e[d*3+2]=-5.6+n()*11.2;const s=new Pe;s.setAttribute("position",new Nn(e,3));const r=new Co({size:.025,color:16768942,transparent:!0,opacity:.55,map:Er(16777215),depthWrite:!1,blending:Cs,sizeAttenuation:!0});this.dust=new ec(s,r),this.dust.frustumCulled=!1,this.scene.add(this.dust);const a=70,o=new Float32Array(a*3),l=new Float32Array(a),c=new Float32Array(a*3),u=new Pe;u.setAttribute("position",new Nn(o,3));const h=new Co({size:.35,color:11905688,transparent:!0,opacity:.22,map:Er(16777215),depthWrite:!1});this.exhaust=new ec(u,h),this.exhaust.frustumCulled=!1,this.scene.add(this.exhaust),this.exhaustData={pos:o,life:l,vel:c,count:a,cursor:0};for(let d=0;d<a;d++)o[d*3+1]=-50}puffExhaust(){const t=this.exhaustData,e=t.cursor++%t.count,n=this.truck.group.position;t.pos[e*3]=n.x+.5,t.pos[e*3+1]=.4,t.pos[e*3+2]=n.z-3.25,t.vel[e*3]=(Math.random()-.5)*.2,t.vel[e*3+1]=.35+Math.random()*.3,t.vel[e*3+2]=-.15,t.life[e]=1.4+Math.random()}setMarker(t,e){const n=this.markers[t];n&&(n.group.visible=e)}setLampMode(t){this.lamps.forEach((e,n)=>{e.intensity=t==="night"?40:24})}update(t,e){this.clock+=t;const n=this.dust;if(n){const r=n.geometry.attributes.position;for(let a=0;a<r.count;a++)r.array[a*3]+=Math.sin(e*.4+a)*7e-4,r.array[a*3+1]+=Math.cos(e*.3+a*.7)*5e-4,r.array[a*3+2]+=Math.sin(e*.23+a*1.3)*4e-4;r.needsUpdate=!0}const s=this.exhaustData;if(s){const r=this.exhaust.geometry.attributes.position;for(let a=0;a<s.count;a++)s.life[a]>0&&(s.life[a]-=t,s.pos[a*3]+=s.vel[a*3]*t,s.pos[a*3+1]+=s.vel[a*3+1]*t,s.pos[a*3+2]+=s.vel[a*3+2]*t,s.vel[a*3+1]+=t*.12,s.life[a]<=0&&(s.pos[a*3+1]=-50));r.needsUpdate=!0}this.stoveGlow&&(this.stoveGlow.intensity=4.2+Math.sin(e*9.3)*.7+Math.sin(e*17.1)*.4);for(const r of Object.values(this.markers)){if(!r.group.visible)continue;const a=1+Math.sin(e*2.2)*.04;r.ring.scale.set(a,a,1),r.beam.material.opacity=.035+Math.sin(e*2.2)*.012}}}function jg(){return new qt({map:Ur(171,"#6b6a60"),roughness:.8,metalness:.3})}function Er(i=16777215,t=.2){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),s=n.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,`rgba(${i>>16&255},${i>>8&255},${i&255},1)`),s.addColorStop(t,`rgba(${i>>16&255},${i>>8&255},${i&255},0.55)`),s.addColorStop(1,`rgba(${i>>16&255},${i>>8&255},${i&255},0)`),n.fillStyle=s,n.fillRect(0,0,64,64);const r=new ds(e);return r.colorSpace=De,r}function Tr(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ba="baremetal.v1",Gc=[{id:"boltKit",name:"Bolt & stud kit",desc:"Extractor + 6 replacement bolts",price:6,unit:"kit"},{id:"oil",name:"Engine oil",desc:"5 qt, 10W-30. Do not run it dry.",price:9,unit:"jug"},{id:"coolant",name:"Antifreeze",desc:"Pre-mixed. A dry block cracks.",price:8,unit:"jug"},{id:"fuel",name:"Fuel can",desc:"Five gallons of regular.",price:12,unit:"can"},{id:"water",name:"Spring water",desc:"A clean gallon. Drink up.",price:2,unit:"gal"},{id:"beans",name:"Cold beans",desc:"A can and a fork. Calories.",price:5,unit:"can"},{id:"coffee",name:"Coffee",desc:"Burnt, black, effective.",price:3,unit:"cup"},{id:"cigarettes",name:"Cigarettes",desc:"Stress down. Lungs up.",price:5,unit:"pack"},{id:"soap",name:"Lye soap",desc:"Greaseless hands, briefly.",price:3,unit:"bar"}],es={courier:{title:"Parts run",pay:35,desc:"Miller is out of ignition points. Take the crate out to the farm. Moped is fine.",req:"Any vehicle · one drop"},firewood:{title:"Firewood",pay:150,desc:"Load the bed at Miller's woodlot, then run it back to the store before dark.",req:"The truck · bed must be empty"}},xe=(i,t,e)=>Math.max(t,Math.min(e,i)),wr=i=>String(i).padStart(2,"0");class t_{constructor(t){this.sound=t,this.ui=null,this.dead=!1,this.paused=!1,this.newGame()}newGame(){const t=Math.round((2.1+Math.random()*1.1)*10)/10,e=Math.round(5+Math.random()*7),n=Math.round((.22+Math.random()*.05)*100)/100;this.specs={mix:t,timing:e,valve:n},this.state={version:1,money:42,day:1,minutes:1060,meters:{hunger:66,thirst:72,fatigue:44,stress:32,hygiene:58},health:100,parts:{battery:!1,carb:!1,alternator:!1,radiator:!1,plugs:!1,wheels:!1},bolts:{},inventory:{oil:1,coolant:1,fuel:1,water:1,beans:2,coffee:1,cigarettes:1,boltKit:0,soap:0},fluids:{oil:0,coolant:0,fuel:0},tune:{mix:Math.round((3.7+Math.random()*.6)*10)/10,timing:-4,valve:.34},engineRunning:!1,job:null,cargo:!1,truck:{x:0,z:-.6,heading:0},stats:{torques:0,stripped:0,loose:0,crashes:0,jobs:0,km:0},startedAt:0},this.dead=!1}attachUI(t){this.ui=t}save(){try{localStorage.setItem(Ba,JSON.stringify({specs:this.specs,state:this.state}))}catch{}}load(){try{const t=localStorage.getItem(Ba);if(!t)return!1;const e=JSON.parse(t);return!e?.state||e.state.version!==1?!1:(this.specs=e.specs,this.state=e.state,this.state.job?.id==="firewood"&&this.state.job.deadlineDay==null&&(this.state.job.deadlineDay=this.state.day),this.dead=this.state.health<=0,!this.dead)}catch{return!1}}wipe(){try{localStorage.removeItem(Ba)}catch{}}get s(){return this.state}clockLabel(){const t=(this.s.minutes%1440+1440)%1440;return`DAY ${this.s.day} · ${wr(Math.floor(t/60))}:${wr(Math.floor(t%60))}`}clockShort(){const t=(this.s.minutes%1440+1440)%1440;return`${wr(Math.floor(t/60))}:${wr(Math.floor(t%60))}`}isNight(){const t=(this.s.minutes%1440+1440)%1440;return t<360||t>20.5*60}advance(t){for(this.s.minutes+=t;this.s.minutes>=1440;)this.s.minutes-=1440,this.s.day++;this.checkJobDeadline()}checkJobDeadline(){const t=this.s.job,e=t?.deadlineDay??this.s.day;return t?.id!=="firewood"||this.s.day<e||this.s.day===e&&this.s.minutes<20.5*60?!1:(this.s.job=null,this.s.cargo=!1,this.onJobExpired?.(),this.ui?.toast("Too late for the firewood run. The job is gone.","bad"),this.save(),!0)}tick(t){if(this.dead)return;const e=t*1.15;this.advance(e);const n=this.s.meters;n.hunger=xe(n.hunger-.115*e,0,100),n.thirst=xe(n.thirst-.175*e,0,100),n.fatigue=xe(n.fatigue+.07*e,0,100),n.hygiene=xe(n.hygiene-.045*e,0,100),n.hygiene<25&&(n.stress+=.02*e),n.fatigue>75&&(n.stress+=.025*e),n.stress=xe(n.stress-.01*e,0,100);let s=0;n.hunger<=0&&(s+=.28),n.thirst<=0&&(s+=.42),n.fatigue>=100&&(s+=.15),n.stress>=100&&(s+=.1),s>0&&this.damage(s*t,"Your body gives out"),Math.random()<t*.008&&n.hunger<12&&this.sound?.tone({freq:70,dur:.4,gain:.04,type:"sine"}),this.s.engineRunning&&this.s.fluids.fuel>0&&(this.s.fluids.fuel=xe(this.s.fluids.fuel-t*.03,0,100),this.s.fluids.fuel<=0&&(this.s.engineRunning=!1,this.sound?.stopEngine(),this.ui?.toast("The engine coughs dry. Out of fuel.","bad"))),this.s.engineRunning&&this.s.fluids.oil>0&&(this.s.fluids.oil=xe(this.s.fluids.oil-t*8e-4,0,100)),this.checkDeath()}damage(t,e){this.dead||(this.s.health=xe(this.s.health-t,0,100),this.s.health<=0&&this.die(e))}checkDeath(){this.s.health<=0&&!this.dead&&this.die("Your body gives out")}die(t){this.dead||(this.dead=!0,this.s.health=0,this.s.engineRunning=!1,this.wipe(),this.sound?.stopEngine(),this.sound?.stopMoped(),this.ui?.showDeath(t||"The garage keeps its secrets."))}hasPart(t){return this.s.parts[t]}givePart(t,e=1){this.s.inventory[t]=(this.s.inventory[t]||0)+e}installPart(t){return this.s.parts[t]||!this.s.inventory[t]?!1:(this.s.inventory[t]--,this.s.parts[t]=!0,this.s.bolts[t]=new Array(Xe[t].bolts).fill(null),!0)}torqueSpec(t){return Xe[t].torque}nextBolt(t){const e=this.s.bolts[t];return e?e.findIndex(n=>n!=="good"):-1}applyTorque(t,e,n){const s=Xe[t],[r,a]=s.torque;let o;return n<r?(o="loose",this.s.stats.loose++):n>a*1.32?(o="stripped",this.s.stats.stripped++):(o="good",this.s.stats.torques++),this.s.bolts[t][e]=o,this.save(),o}looseBolts(){let t=0;for(const e of Object.values(this.s.bolts))for(const n of e)n==="loose"&&t++;return t}strippedBolts(){let t=0;for(const e of Object.values(this.s.bolts))for(const n of e)n==="stripped"&&t++;return t}allBoltsGood(t){const e=this.s.bolts[t]||[];return e.length>0&&e.every(n=>n==="good")}wheelsSafe(){return this.allBoltsGood("wheels")}missingParts(){return Object.keys(Xe).filter(t=>!this.s.parts[t])}fill(t){const e=this.s.inventory;return e[t]?(e[t]--,this.s.fluids[t]=100,this.advance(6),this.save(),this.sound?.slurp(),{ok:!0,msg:t==="oil"?"Oil to the full mark.":t==="coolant"?"Coolant topped up.":"Tank filled. Smells like money."}):{ok:!1,msg:`No ${t==="coolant"?"antifreeze":t} left. The parts terminal sells more.`}}tuneError(){const t=this.s.tune,e=this.specs,n=Math.abs(t.mix-e.mix)/1,s=Math.abs(t.timing-e.timing)/7,r=Math.abs(t.valve-e.valve)/.1,a=(Math.min(1,n)+Math.min(1,s)+Math.min(1,r))/3;return{mix:n,timing:s,valve:r,total:a,score:xe(1-a,0,1)}}vacuum(){const t=this.tuneError();return Math.max(3,19.5-t.total*15+(this.s.engineRunning?Math.sin(performance.now()*.002)*.35:0))}idleRpm(){const t=this.tuneError();return Math.round(820+t.total*330+(this.s.engineRunning?Math.sin(performance.now()*.003)*35:0))}setTune(t,e){this.s.tune[t]=e,this.save()}engineReadiness(){const t=this.missingParts();if(t.length)return{ok:!1,msg:`Still missing: ${t.map(n=>Xe[n].name).join(", ")}.`};const e=this.s.fluids;return e.oil<12?{ok:!1,msg:"No oil in the crankcase. It will seize."}:e.coolant<12?{ok:!1,msg:"The radiator is dry. Fill the coolant."}:e.fuel<3?{ok:!1,msg:"The tank is empty. Add fuel."}:{ok:!0}}startEngine(){if(this.s.engineRunning)return this.s.engineRunning=!1,this.sound?.stopEngine(),this.save(),{running:!1,msg:"Engine off."};const t=this.engineReadiness();if(!t.ok)return{running:!1,msg:t.msg};const e=this.tuneError();let n=e.score;if(n-=this.looseBolts()*.035,n-=this.strippedBolts()*.05,n>=.52){this.s.engineRunning=!0,this.sound?.startEngine(),this.sound?.revEngine(this.idleRpm(),xe(1-n,0,1)),this.advance(3),this.save();const r=this.looseBolts();let a="It catches. Rough, but alive.";return n>.82&&(a="It catches clean. The Patient lives."),r&&(a+=` ${r} loose bolt${r>1?"s":""} will come back to bite you.`),{running:!0,msg:a,score:n}}this.sound?.crank(1.8,!1),this.advance(4),this.save();let s="It cranks and cranks, then nothing. Check the service log.";return e.mix>.5?s="It coughs black smoke and floods. The mixture is off.":e.timing>.5?s="It kicks back against the starter. Timing is wrong.":e.valve>.5&&(s="It hisses and stumbles. Valves are out of adjustment."),{running:!1,msg:s,score:n}}drink(){return this.s.meters.thirst=xe(this.s.meters.thirst+38,0,100),this.s.meters.hygiene=xe(this.s.meters.hygiene+18,0,100),this.advance(4),this.sound?.slurp(),this.save(),"Cold well water. It tastes like rust and relief."}eat(){return this.s.inventory.beans<=0?"No food left. The store sells beans.":(this.s.inventory.beans--,this.s.meters.hunger=xe(this.s.meters.hunger+34,0,100),this.s.meters.stress=xe(this.s.meters.stress-3,0,100),this.advance(8),this.sound?.eat(),this.save(),"Cold beans, straight from the can.")}coffee(){return this.s.inventory.coffee<=0?"The pot is empty.":(this.s.inventory.coffee--,this.s.meters.fatigue=xe(this.s.meters.fatigue-22,0,100),this.s.meters.stress=xe(this.s.meters.stress-10,0,100),this.s.meters.thirst=xe(this.s.meters.thirst+5,0,100),this.advance(10),this.sound?.slurp(),this.save(),"Burnt coffee. Your hands stop shaking.")}smoke(){return this.s.inventory.cigarettes<=0?"No cigarettes left.":(this.s.inventory.cigarettes--,this.s.meters.stress=xe(this.s.meters.stress-28,0,100),this.s.health=xe(this.s.health-1,0,100),this.advance(6),this.save(),"You smoke by the door. The fields go quiet.")}sleep(){return this.s.meters.fatigue=8,this.s.meters.hunger=xe(this.s.meters.hunger-14,0,100),this.s.meters.thirst=xe(this.s.meters.thirst-16,0,100),this.s.meters.hygiene=xe(this.s.meters.hygiene-8,0,100),this.s.health=xe(this.s.health+8,0,100),this.advance(480),this.sound?.sleep(),this.save(),"You sleep on the cot. The garage settles around you."}wash(){return this.s.meters.hygiene=xe(this.s.meters.hygiene+55,0,100),this.s.meters.thirst=xe(this.s.meters.thirst+12,0,100),this.advance(12),this.sound?.slurp(),this.save(),"You scrub the grease off. Mostly."}buy(t){const e=Gc.find(n=>n.id===t);return e?this.s.money<e.price?{ok:!1,msg:"You can't afford that."}:(this.s.money-=e.price,this.s.inventory[t]=(this.s.inventory[t]||0)+1,this.advance(2),this.sound?.clunk(),this.save(),{ok:!0,msg:`${e.name} bought.`}):{ok:!1,msg:"Not in stock."}}acceptJob(t){return this.s.job?{ok:!1,msg:"Finish the job you already took."}:es[t]?t==="firewood"&&this.s.cargo?{ok:!1,msg:"The truck bed must be empty for the firewood run."}:(this.s.job={id:t,stage:"to_farm",load:0,...t==="firewood"?{deadlineDay:this.s.day}:{}},this.sound?.ui(),this.save(),this.ui?.toast(t==="courier"?"Parts run taken. Miller farm, east along the road.":"Firewood taken. Load at Miller farm, deliver to the store.","good"),{ok:!0}):{ok:!1,msg:"No such job."}}jobInfo(){return this.s.job?{...this.s.job,...es[this.s.job.id]}:null}completeDelivery(){const t=this.s.job;t&&(this.s.money+=es[t.id].pay,this.s.stats.jobs++,this.s.job=null,this.s.cargo=!1,this.advance(10),this.s.meters.stress=xe(this.s.meters.stress-12,0,100),this.sound?.success(),this.save(),this.ui?.toast(`${es[t.id].title} paid $${es[t.id].pay}.`,"good"))}loadCargo(){this.s.cargo=!0,this.s.job.stage="to_store",this.save()}unloadCargo(){this.s.cargo=!1}objectiveText(){if(this.dead)return"";const t=this.s;if(t.job){const e=this.jobInfo();return e.stage==="to_farm"?`${e.title}: get to Miller farm.`:e.stage==="to_store"?`${e.title}: deliver it to Hollow Creek store.`:e.title}if(!t.engineRunning){const e=this.missingParts();return t.parts.battery?e.length?`${e.length} part${e.length>1?"s":""} still off the truck. The log lists every torque.`:t.fluids.oil<12||t.fluids.coolant<12||t.fluids.fuel<3?"Fluids first. Oil, coolant, fuel.":"Tune it, then crank it. The service log has the numbers.":"The Patient is bare. Find the battery and the service log."}return"The truck runs. Check the job board by the door."}storeItems(){return Gc}jobs(){return es}jobTarget(){const t=this.s.job;return t?t.stage==="to_farm"?{id:"miller",x:64,z:37,label:"Miller farm"}:{id:"store",x:-58,z:37,label:"Hollow Creek store"}:null}showDeath(t){this.ui?.showDeath(t)}}const Bt=i=>document.getElementById(i),e_=["N","NE","E","SE","S","SW","W","NW"];class n_{constructor(t,e){this.game=t,this.sound=e,this.torque=null,this.panel=null,this.torqueHold=!1,this.torqueTimer=null,this.toastTimer=null,this.subTimer=null,this.mobile=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.lastObjective="",this.lastPrompt="",this.actionHeld=!1,this.build(),this.bind()}build(){const t=Bt("survival"),e=[["hunger","HUNGER"],["thirst","THIRST"],["fatigue","FATIGUE"],["stress","STRESS"],["hygiene","HYGIENE"]];t.innerHTML=e.map(([s,r])=>`<div class="meter" data-k="${s}"><span class="ml">${r}</span><div class="mt"><i></i></div><span class="mv">--</span></div>`).join("")+'<div class="meter health" data-k="health"><span class="ml">BODY</span><div class="mt"><i></i></div><span class="mv">--</span></div>';const n=[["HAND","—"],["10","MM"],["12","MM"],["14","MM"],["19","MM"]];Bt("toolbelt").innerHTML=n.map(([s,r],a)=>`<button class="tool${a===0?" sel":""}" data-tool="${a}"><small>${a+1}</small><b>${s}</b><span>${r==="—"?"NO SOCKET":r}</span></button>`).join(""),this.overlay=Bt("overlay"),this.promptEl=Bt("prompt"),this.promptText=Bt("promptText"),this.toastEl=Bt("toast"),this.subEl=Bt("subtitle"),this.toolbelt=Bt("toolbelt"),this.manualPanel=Bt("manualPanel"),this.boardPanel=Bt("boardPanel"),this.storePanel=Bt("storePanel"),this.tunePanel=Bt("tunePanel"),this.torquePanel=Bt("torquePanel"),this.pausePanel=Bt("pausePanel"),this.deathPanel=Bt("deathPanel"),this.mobileEl=Bt("mobile"),this.torqueCanvas=Bt("torqueCanvas"),this.tctx=this.torqueCanvas.getContext("2d"),this.drawGauge(0,30,20,!0)}bind(){Bt("startBtn").addEventListener("click",()=>{this.sound.init(),this.onStart?.()}),this.toolbelt.addEventListener("click",e=>{const n=e.target.closest("[data-tool]");n&&this.onTool?.(Number(n.dataset.tool))}),this.overlay.addEventListener("click",e=>{if(e.target.closest("[data-close]")){this.closePanel();return}const s=e.target.closest("[data-buy]");if(s){this.onBuy?.(s.dataset.buy);return}const r=e.target.closest("[data-job]");if(r){this.onAcceptJob?.(r.dataset.job);return}if(e.target.closest("[data-restart]")){this.onRestart?.();return}if(e.target.closest("[data-resume]")){this.closePanel();return}if(e.target.closest("[data-open-manual]")){this.openPanel("manual");return}if(e.target.closest("[data-crank]")){this.onCrank?.();return}if(e.target.closest("[data-tune-close]")){this.closePanel();return}}),this.tunePanel.addEventListener("input",e=>{const n=e.target.closest("input[data-tune]");if(!n)return;const s=n.dataset.tune,r=Number(n.value);this.game.setTune(s,r),this.updateTuneLive()}),this.torqueCanvas.addEventListener("pointerdown",e=>{e.preventDefault(),this.startHold()}),Bt("torqueHold").addEventListener("pointerdown",e=>{e.preventDefault(),this.startHold()}),window.addEventListener("pointerup",()=>{this.torque&&this.releaseHold()}),window.addEventListener("pointercancel",()=>{this.torque&&this.releaseHold()}),window.addEventListener("keydown",e=>{this.torque&&(e.code==="Space"||e.code==="KeyE")&&(e.preventDefault(),this.startHold())}),window.addEventListener("keyup",e=>{this.torque&&(e.code==="Space"||e.code==="KeyE")&&(e.preventDefault(),this.releaseHold())});const t=Bt("actionBtn");t.addEventListener("pointerdown",e=>{e.preventDefault(),this.actionHeld=!0,this.onAction?.()}),t.addEventListener("pointerup",()=>{this.actionHeld=!1}),t.addEventListener("pointercancel",()=>{this.actionHeld=!1}),t.addEventListener("pointerleave",()=>{this.actionHeld=!1}),document.addEventListener("click",e=>{e.target.closest("button")&&this.sound.ui()})}setStartVisible(t){Bt("start").classList.toggle("hidden",!t)}showGame(){this.setStartVisible(!1),Bt("hud").classList.remove("hidden"),Bt("cinematic").classList.add("off"),setTimeout(()=>Bt("cinematic").classList.add("hidden"),900),this.mobile&&(this.mobileEl.classList.remove("hidden"),document.body.classList.add("mobile")),this.subtitle(`HOLLOW CREEK · 17:40
Bring the dead back to life.`,4600)}subtitle(t,e=3800){this.subEl.textContent=t,this.subEl.classList.add("on"),clearTimeout(this.subTimer),this.subTimer=setTimeout(()=>this.subEl.classList.remove("on"),e)}toast(t,e=""){this.toastEl.textContent=t,this.toastEl.className=`toast on ${e}`,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.classList.remove("on"),4200)}selectTool(t){this.toolbelt.querySelectorAll(".tool").forEach((e,n)=>e.classList.toggle("sel",t===n))}setPrompt(t,{blocked:e=!1,key:n="E",hold:s=0,progress:r=0}={}){if(!t){this.lastPrompt&&this.promptEl.classList.remove("on","holding","blocked"),this.lastPrompt="",Bt("actionBtn").textContent="E";return}t!==this.lastPrompt&&(this.promptText.textContent=t,this.lastPrompt=t),this.promptEl.classList.add("on"),this.promptEl.classList.toggle("blocked",e),this.promptEl.classList.toggle("holding",s>0),this.promptEl.querySelector(".key").textContent=n,this.promptEl.querySelector(".holdbar i").style.width=`${Math.min(100,r*100)}%`,Bt("actionBtn").textContent=s>0?"HOLD":n}updateHUD(t){const e=this.game.state,n=e.meters;for(const h of["hunger","thirst","fatigue","stress","hygiene","health"]){const d=document.querySelector(`.meter[data-k="${h}"]`),p=h==="health"?e.health:n[h];d.querySelector(".mt i").style.width=`${Math.max(0,Math.min(100,p))}%`,d.querySelector(".mv").textContent=Math.round(p),d.classList.toggle("low",p<25)}if(Bt("money").textContent=`$${e.money.toLocaleString("en-US")}`,Bt("clock").textContent=this.game.clockLabel(),t.pos){const h=t.pos.x,d=t.pos.z;let p="HOLLOW CREEK <span>/</span> GARAGE";Math.hypot(h-64,d-37)<26?p="MILLER FARM <span>/</span> WOODLOT":Math.hypot(h+58,d-37)<26?p="HOLLOW CREEK <span>/</span> STORE":(h<-10||h>10||d<-7||d>7)&&(p="HOLLOW CREEK <span>/</span> THE ROAD"),p!==this.lastPlace&&(document.querySelector(".place").innerHTML=p,this.lastPlace=p)}const s=this.game.objectiveText();s!==this.lastObjective&&(Bt("objective").textContent=s,this.lastObjective=s);const r=(t.heading%360+360)%360,a=e_[Math.round(r/45)%8],o=document.querySelector("#compass .card");o&&(o.textContent=a),Bt("hdr").textContent=`${String(Math.round(r)).padStart(3,"0")}°`;const l=this.game.jobTarget();let c="";if(l&&t.pos){const h=Math.round(Math.hypot(l.x-t.pos.x,l.z-t.pos.z));c=`◆ ${l.label.toUpperCase()} · ${h}m`}Bt("jobDist").textContent=c;const u=Bt("speedo");t.driving?(u.classList.remove("hidden"),u.querySelector(".spd b").textContent=Math.round(Math.abs(t.speed)*2.236),u.querySelector(".gear").textContent=t.vehicle==="moped"?"MOPED · 49CC":"THE PATIENT · 4.6L",Bt("fuelBar").querySelector("i").style.width=`${Math.max(0,e.fluids.fuel)}%`):u.classList.add("hidden"),Bt("lowHealth").classList.toggle("on",e.health<28),document.body.classList.toggle("driving",!!t.driving)}openPanel(t){this.closePanel(!0),this.panel=t,t==="manual"&&this.renderManual(),t==="board"&&this.renderBoard(),t==="store"&&this.renderStore(),t==="tune"&&this.renderTune(),t==="pause"&&this.renderPause();const n={manual:this.manualPanel,board:this.boardPanel,store:this.storePanel,tune:this.tunePanel,pause:this.pausePanel,death:this.deathPanel,torque:this.torquePanel}[t];n&&n.classList.remove("hidden"),this.overlay.classList.remove("hidden"),this.overlay.classList.toggle("torquing",t==="torque"),document.body.classList.add("panel-open"),this.onPanelOpen?.(t)}closePanel(t=!1){if(!this.panel){this.overlay.classList.add("hidden");return}const n={manual:this.manualPanel,board:this.boardPanel,store:this.storePanel,tune:this.tunePanel,pause:this.pausePanel,death:this.deathPanel,torque:this.torquePanel}[this.panel];n&&n.classList.add("hidden"),this.panel=null,this.overlay.classList.add("hidden"),this.overlay.classList.remove("torquing"),document.body.classList.remove("panel-open"),t||this.onPanelClose?.(),this.mobile&&this.panel!=="death"&&this.mobileEl.classList.remove("hidden")}closeIf(t){this.panel===t&&this.closePanel()}renderManual(){const t=this.game.specs,e=Object.entries(Xe).map(([n,s])=>`<tr><td>${s.name}</td><td class="nm">${s.tool} mm</td><td class="nm">${s.torque[0]}–${s.torque[1]} Nm</td><td style="font-size:9px">${s.note}</td></tr>`).join("");this.manualPanel.innerHTML=`
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh">
        <div><span class="tag">SERVICE LOG · UNIT 01</span><h2>THE<br/>PATIENT</h2></div>
        <small>HOLLOW CREEK GARAGE<br/>1974 PICKUP · 4.6L I6<br/>3-SPEED · 2WD<br/>PROP. R. VANCE</small>
      </div>
      <p>Rebuilt from three trucks and a bad memory. Everything below is cold spec. If a bolt is loose it will walk out. If you strip it, you pay for it.</p>
      <h3>Torque, cold</h3>
      <table class="spec">
        <tr><th>COMPONENT</th><th>SOCKET</th><th>SPEC</th><th>NOTE</th></tr>
        ${e}
      </table>
      <h3>Engine tune</h3>
      <table class="spec">
        <tr><th>SETTING</th><th>VALUE</th><th>SYMPTOM IF WRONG</th></tr>
        <tr><td>Idle mixture</td><td class="nm">${t.mix.toFixed(1)} turns out</td><td style="font-size:9px">Rich: black smoke. Lean: it hunts and dies.</td></tr>
        <tr><td>Ignition timing</td><td class="nm">${t.timing}° BTDC</td><td style="font-size:9px">Too far: kicks the starter. Too late: flat and hot.</td></tr>
        <tr><td>Valve lash (cold)</td><td class="nm">${t.valve.toFixed(2)} mm</td><td style="font-size:9px">Too tight: it hisses and loses compression.</td></tr>
      </table>
      <div class="note">Fluids are not optional. Engine oil, coolant, fuel. A dry crankcase turns a rebuild into scrap.</div>
      <div class="grid2">
        <div><p style="font-size:11px"><b>Start-up order</b><br/>1. Fit every part.<br/>2. Torque every fastener.<br/>3. Fill oil, coolant, fuel.<br/>4. Set the three tune screws.<br/>5. Crank it.</p></div>
        <div class="figure"><span>FIG. 2 — FIRING ORDER 1-5-3-6-2-4</span></div>
      </div>
      <div class="scribble">"If it won't run, it's fuel, spark, air — or you. — Dad"</div>
    `}renderBoard(){const t=this.game.jobs(),e=this.game.state.job,n=Object.entries(t).map(([s,r])=>{const a=e?.id===s,o=e&&!a;return`<div class="job-card${a?" active":""}">
        ${a?'<span class="active-tag">IN PROGRESS</span>':""}
        <h3>${r.title}</h3>
        <div class="pay">$${r.pay}</div>
        <div class="desc">${r.desc}</div>
        <div class="req">${r.req}</div>
        <button class="btn-small ${a||o?"done":""}" data-job="${s}">${a?"Already taken":o?"Busy":"Take the job"}</button>
      </div>`}).join("");this.boardPanel.innerHTML=`
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#c2542a;color:#f0e4cc">WORK WANTED</span><h2>THE<br/>BOARD</h2></div><small>HOLLOW CREEK<br/>CASH ON DELIVERY<br/>NO CREDIT</small></div>
      <div class="jobs">${n}</div>
      <div class="board-note">Take one job at a time. Deliver clean and the money is yours.</div>
    `}renderStore(){const t=this.game.state,e=this.game.storeItems().map(n=>`
      <div class="store-item">
        <div class="si-name">${n.name}<small>${n.desc.toUpperCase()}</small></div>
        <div class="si-price">$${n.price} / ${n.unit}</div>
        <button data-buy="${n.id}" ${t.money<n.price?"disabled":""}>BUY</button>
      </div>`).join("");this.storePanel.innerHTML=`
      <button class="panel-close" data-close>CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#3d4a38;color:#c9d8b6">TERMINAL 03</span><h2>PARTS<br/>COUNTER</h2></div><small>HOLLOW CREEK AUTO &amp; FEED<br/>OPEN 06:00–20:00<br/>CASH ONLY</small></div>
      <div class="store-head"><span>STOCK / DELIVERY TO GARAGE</span><span>CREDIT: <b>${t.money<20?"THIN":"FAIR"}</b></span></div>
      ${e}
      <div class="balance"><span>BALANCE</span><b>$${t.money}</b></div>
    `}renderTune(){const t=this.game.state.tune;this.tunePanel.innerHTML=`
      <button class="panel-close" data-close style="color:rgba(232,221,197,.6);border-color:rgba(232,221,197,.25)">CLOSE ✕</button>
      <div class="mh"><div><span class="tag" style="background:#c2542a;color:#f3e8d2">BAY 01 / DIAGNOSTIC</span><h2>ENGINE<br/>TUNE</h2></div><small>THE PATIENT · 4.6L I6<br/>IDLE / MIXTURE / VALVE LASH<br/>COLD SPEC IN SERVICE LOG</small></div>
      <p class="sub">Set all three. A vacuum gauge is honest — it peaks when the engine is happy. Watch the needle, listen to the idle.</p>
      <div class="tune-body">
        <div>
          <div class="tune-row"><div class="tl"><label>Idle mixture</label><div class="val"><span id="vMix">${t.mix.toFixed(1)}</span><small>TURNS OUT</small></div></div>
            <input type="range" data-tune="mix" min="0" max="6" step="0.1" value="${t.mix}"></div>
          <div class="tune-row"><div class="tl"><label>Ignition timing</label><div class="val"><span id="vTiming">${t.timing}</span><small>° BTDC</small></div></div>
            <input type="range" data-tune="timing" min="-10" max="20" step="1" value="${t.timing}"></div>
          <div class="tune-row"><div class="tl"><label>Valve clearance</label><div class="val"><span id="vValve">${t.valve.toFixed(2)}</span><small>MM COLD</small></div></div>
            <input type="range" data-tune="valve" min="0.1" max="0.4" step="0.01" value="${t.valve}"></div>
        </div>
        <div class="tune-gauges">
          <div class="gauge"><div class="needle" id="vacNeedle"></div><div class="gnum"><span id="vacNum">0.0</span><small>IN-HG VACUUM</small></div></div>
          <div class="gauge"><div class="needle" id="rpmNeedle" style="background:#8d9d72"></div><div class="gnum"><span id="rpmNum">0</span><small>IDLE RPM</small></div></div>
        </div>
      </div>
      <div class="tune-actions">
        <button class="btn-metal" data-crank>CRANK ENGINE</button>
        <button class="btn-ghost" data-tune-close>STEP AWAY</button>
        <div class="tune-status" id="tuneStatus"></div>
      </div>
      <div class="sheet-note">HOLD THE NUMBERS IN YOUR HEAD — THE LOG IS IN THE DESK DRAWER · TAB</div>
    `,this.updateTuneLive()}updateTuneLive(){if(!this.panel||this.panel!=="tune")return;const t=this.game,e=t.state.tune,n=Bt("vMix"),s=Bt("vTiming"),r=Bt("vValve");n&&(n.textContent=Number(e.mix).toFixed(1)),s&&(s.textContent=e.timing),r&&(r.textContent=Number(e.valve).toFixed(2));const a=t.vacuum(),o=t.idleRpm(),l=Bt("vacNum"),c=Bt("rpmNum");l&&(l.textContent=a.toFixed(1)),c&&(c.textContent=o);const u=Bt("vacNeedle"),h=Bt("rpmNeedle");u&&(u.style.transform=`rotate(${-80+Math.max(0,Math.min(1,a/22))*160}deg)`),h&&(h.style.transform=`rotate(${-80+Math.max(0,Math.min(1,(o-600)/900))*160}deg)`);const d=Bt("tuneStatus");if(d){const p=t.engineReadiness();t.state.engineRunning?d.textContent="ENGINE RUNNING. Fine adjustments live.":p.ok?d.textContent="Ready to crank.":d.textContent=p.msg}}showTorque({part:t,label:e,lo:n,hi:s,index:r,total:a}){this.openPanel("torque"),this.torquePanel.querySelector(".t-label span:first-child").textContent=`${e.toUpperCase()} · BOLT ${r+1}/${a}`,this.torquePanel.querySelector(".t-label span:last-child").textContent=`${n}–${s} Nm`,Bt("tHint").textContent=this.mobile?"HOLD THE BUTTON — RELEASE IN THE GREEN":"HOLD LEFT MOUSE / SPACE — RELEASE IN THE GREEN",Bt("torqueHold").style.display=this.mobile?"block":"none",this.torque={part:t,lo:n,hi:s,index:r,total:a,value:0,max:Math.round(s*1.5),holding:!1,done:!1,tick:0,startedAt:performance.now()},this.torquePanel.classList.remove("holding"),this.drawGauge(0,n,s,!0,this.torque.max),Bt("tValue").textContent="0.0",this.torqueTimer=setTimeout(()=>{this.torque&&!this.torque.holding&&this.torque.value===0&&(Bt("tHint").textContent="HOLD TO TORQUE")},1200)}startHold(){!this.torque||this.torque.done||(this.torque.holding=!0,this.torquePanel.classList.add("holding"),Bt("tHint").textContent="KEEP PRESSURE…",this.sound.ratchet())}releaseHold(){if(!this.torque||this.torque.done||!this.torque.holding||performance.now()-(this.torque.startedAt||0)<180)return;this.torque.holding=!1,this.torque.done=!0,this.torquePanel.classList.remove("holding");const t=Math.min(this.torque.max,this.torque.value);this.onTorqueRelease?.(t)}tickTorque(t){const e=this.torque;if(e){if(e.holding){const n=e.max/2.7;if(e.value+=n*t*(.9+Math.random()*.16),e.tick+=t,e.tick>.3&&(e.tick=0,this.sound.ratchet()),e.value>=e.max){e.value=e.max,this.releaseHold();return}}this.drawGauge(e.value,e.lo,e.hi,!0,e.max),Bt("tValue").textContent=e.value.toFixed(1)}}torqueResult(t,e){if(!this.torque)return;const n=this.torque,s=Bt("tHint");t==="good"?(s.textContent="SEATED. THAT ONE WILL HOLD.",s.style.color="#9dbd82"):t==="loose"?(s.textContent=e<n.lo*.5?"BARELY SNUG — DO IT AGAIN.":"LOOSE. IT WILL WALK OUT. RETRY.",s.style.color="#d9a441"):(s.textContent="STRIPPED THE THREAD. YOU NEED A REPLACEMENT BOLT.",s.style.color="#c2542a",this.sound.wrenchDrop()),this.drawGauge(e,n.lo,n.hi,!1,n.max),setTimeout(()=>{this.torque=null},700)}hideTorque(){clearTimeout(this.torqueTimer),this.torque=null,this.panel==="torque"&&this.closePanel()}drawGauge(t,e,n,s=!0,r=null){const a=this.tctx,o=720;a.clearRect(0,0,o,420);const c=o/2,u=334,h=250,d=r||Math.round(n*1.5),p=x=>Math.PI-x/d*Math.PI;a.fillStyle="rgba(12,12,10,.7)",a.beginPath(),a.arc(c,u,h+26,Math.PI,0),a.closePath(),a.fill();for(let x=0;x<=30;x++){const E=d*x/30,y=p(E),A=x%5===0;a.strokeStyle=A?"rgba(232,221,197,.6)":"rgba(232,221,197,.22)",a.lineWidth=A?3:1.5;const w=h-(A?28:16);a.beginPath(),a.moveTo(c+Math.cos(y)*w,u-Math.sin(y)*w),a.lineTo(c+Math.cos(y)*h,u-Math.sin(y)*h),a.stroke(),A&&(a.fillStyle="rgba(232,221,197,.55)",a.font="500 20px 'IBM Plex Mono', monospace",a.textAlign="center",a.fillText(String(Math.round(E)),c+Math.cos(y)*(h-56),u-Math.sin(y)*(h-56)+7))}a.beginPath(),a.arc(c,u,h,Math.PI,0),a.strokeStyle="rgba(232,221,197,.12)",a.lineWidth=12,a.stroke();const g=Math.min(d,n*1.32);a.beginPath(),a.arc(c,u,h,p(e),p(n),!0),a.strokeStyle="#6d8a5c",a.lineWidth=12,a.stroke(),a.beginPath(),a.arc(c,u,h,p(n),p(g),!0),a.strokeStyle="#d9a441",a.lineWidth=12,a.stroke(),a.beginPath(),a.arc(c,u,h,p(g),p(d),!0),a.strokeStyle="#8e3a1c",a.lineWidth=12,a.stroke(),a.fillStyle="rgba(232,221,197,.4)",a.font="400 15px 'IBM Plex Mono', monospace",a.textAlign="center",a.fillText("SPEC",c,u-h+78);const v=p(Math.min(t,d)),f=c+Math.cos(v)*(h-34),m=u-Math.sin(v)*(h-34);a.strokeStyle=s?"#e8ddc5":"#c2542a",a.lineWidth=4,a.shadowColor="rgba(0,0,0,.7)",a.shadowBlur=8,a.beginPath(),a.moveTo(c,u),a.lineTo(f,m),a.stroke(),a.shadowBlur=0,a.fillStyle=s?"#e8ddc5":"#c2542a",a.beginPath(),a.arc(c,u,14,0,7),a.fill(),a.fillStyle="#14130f",a.beginPath(),a.arc(c,u,5,0,7),a.fill()}renderPause(){const t=this.game.state;this.pausePanel.innerHTML=`
      <h2>PAUSED</h2>
      <p>The world waits. Your body does not.</p>
      <div class="row">
        <button class="primary" data-resume>Resume</button>
        <button data-open-manual>Service manual</button>
        <button data-restart>Burn it down / restart</button>
      </div>
      <p style="margin-top:20px;font-size:8px;letter-spacing:.14em">DAY ${t.day} · ${this.game.clockShort()} · $${t.money} · ${t.stats.torques} BOLTS SEATED</p>
    `}showDeath(t){this.closePanel(!0),this.mobileEl.classList.add("hidden"),document.body.classList.remove("panel-open");const e=this.game.state,n=e.day;this.deathPanel.innerHTML=`
      <div class="death-mark">HOLLOW CREEK · CORONER'S COPY</div>
      <h2>YOU DIED</h2>
      <p class="epitaph">${t}<br/>The garage keeps its secrets. The truck stays where it fell.</p>
      <div class="stats">
        <span>DAYS SURVIVED<b>${n}</b></span>
        <span>BOLTS SEATED<b>${e.stats.torques}</b></span>
        <span>JOBS DONE<b>${e.stats.jobs}</b></span>
        <span>MILES<b>${(e.stats.km*.621).toFixed(1)}</b></span>
      </div>
      <button data-restart>Start Over</button>
      <small>PERMADEATH · NO SAVE · NO SECOND CHANCE</small>
    `,this.deathPanel.classList.remove("hidden"),this.overlay.classList.remove("hidden"),this.overlay.classList.add("torquing"),this.panel="death",this.onPanelOpen?.("death")}hideStartCinematic(){Bt("cinematic").classList.add("off")}}class i_{constructor(t){this.stage=t,this.keys=new Set,this.just=new Set,this.look={x:0,y:0},this.locked=!1,this.dragging=!1,this.touchMove={x:0,y:0},this.enabled=!0,this.onAction=null,this.onTool=null,this.onEscape=null,this.onManual=null,this.onVehicle=null,this.onMap=null,this.coarse=matchMedia("(pointer: coarse)").matches,this.bind()}bind(){window.addEventListener("keydown",a=>{a.repeat||(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),this.just.add(a.code),(a.code==="KeyE"||a.code==="Enter")&&this.onAction?.(),a.code==="Tab"&&this.onManual?.(),a.code==="Escape"&&this.onEscape?.(),a.code==="KeyF"&&this.onVehicle?.(),a.code==="KeyM"&&this.onMap?.(),/^Digit[1-5]$/.test(a.code)&&this.onTool?.(Number(a.code.slice(5))-1))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.keys.clear());const t=this.stage.querySelector("canvas")||this.stage;this.canvas=t,t.addEventListener("mousedown",a=>{this.enabled&&a.button===0&&(!this.coarse&&!this.locked&&document.pointerLockElement!==t&&t.requestPointerLock?.(),this.dragging=!0)}),window.addEventListener("mouseup",()=>{this.dragging=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas}),window.addEventListener("mousemove",a=>{this.enabled&&(this.locked||this.dragging)&&(this.look.x+=a.movementX??0,this.look.y+=a.movementY??0)});let e=null,n=0,s=0;t.addEventListener("pointerdown",a=>{a.pointerType!=="touch"||!this.enabled||(e=a.pointerId,n=a.clientX,s=a.clientY)}),t.addEventListener("pointermove",a=>{a.pointerId===e&&(this.look.x+=(a.clientX-n)*1.5,this.look.y+=(a.clientY-s)*1.5,n=a.clientX,s=a.clientY)});const r=a=>{a.pointerId===e&&(e=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}requestLock(){this.coarse||this.canvas?.requestPointerLock?.()}releaseLock(){document.pointerLockElement&&document.exitPointerLock?.()}axis(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.touchMove.x,e+=this.touchMove.y;const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,y:e}}sprint(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}consumeLook(){const t={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,t}pressed(t){return this.just.has(t)}endFrame(){this.just.clear()}bindJoystick(t,e){let n=null,s=0,r=0;const a=44,o=c=>{if(c.pointerId!==n)return;let u=c.clientX-s,h=c.clientY-r;const d=Math.hypot(u,h);d>a&&(u=u/d*a,h=h/d*a),e.style.transform=`translate(${u}px,${h}px)`,this.touchMove.x=u/a,this.touchMove.y=h/a};t.addEventListener("pointerdown",c=>{n=c.pointerId;const u=t.getBoundingClientRect();s=u.left+u.width/2,r=u.top+u.height/2,t.setPointerCapture(c.pointerId),o(c)}),t.addEventListener("pointermove",o);const l=c=>{c.pointerId===n&&(n=null,this.touchMove.x=0,this.touchMove.y=0,e.style.transform="translate(0,0)")};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}}class s_{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.engine=null,this.moped=null,this.ambient=null,this.radio=null,this.radioTimer=0,this._lastStep=0}init(){if(this.ctx){this.ctx.resume?.();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.65,this.master.connect(this.ctx.destination),this.noiseBuf=this.makeNoise(2.5),this.startAmbient())}makeNoise(t=1){const e=this.ctx,n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),s=n.getChannelData(0);let r=0;for(let a=0;a<s.length;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,s[a]=r*3.2}return n}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.65,this.ctx.currentTime,.05)}startAmbient(){if(!this.ctx)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=340,n.Q.value=.6;const s=t.createGain();s.gain.value=.045;const r=t.createOscillator();r.frequency.value=.07;const a=t.createGain();a.gain.value=.02,r.connect(a).connect(s.gain),e.connect(n).connect(s).connect(this.master),e.start(),r.start(),this.ambient={src:e,gain:s}}burst({freq:t=800,q:e=1,dur:n=.1,gain:s=.2,type:r="bandpass",rate:a=1}={}){if(!this.ctx)return;const o=this.ctx,l=o.createBufferSource();l.buffer=this.noiseBuf,l.playbackRate.value=a;const c=o.createBiquadFilter();c.type=r,c.frequency.value=t,c.Q.value=e;const u=o.createGain(),h=o.currentTime;u.gain.setValueAtTime(s,h),u.gain.exponentialRampToValueAtTime(1e-4,h+n),l.connect(c).connect(u).connect(this.master),l.start(h),l.stop(h+n+.02)}tone({freq:t=440,dur:e=.2,gain:n=.12,type:s="sine",slide:r=0}={}){if(!this.ctx)return;const a=this.ctx,o=a.createOscillator();o.type=s,o.frequency.value=t;const l=a.createGain(),c=a.currentTime;r&&o.frequency.linearRampToValueAtTime(t+r,c+e),l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(n,c+.012),l.gain.exponentialRampToValueAtTime(1e-4,c+e),o.connect(l).connect(this.master),o.start(c),o.stop(c+e+.05)}step(t=1){if(!this.ctx)return;const e=performance.now();e-this._lastStep<250/t||(this._lastStep=e,this.burst({freq:240+Math.random()*120,q:1.4,dur:.09,gain:.055,rate:.7+Math.random()*.2}))}ratchet(){this.burst({freq:2100,q:4,dur:.035,gain:.1,rate:1.6}),setTimeout(()=>this.burst({freq:1700,q:5,dur:.03,gain:.08,rate:1.4}),42)}clunk(){this.tone({freq:92,dur:.22,gain:.18,type:"sine",slide:-30}),this.burst({freq:420,q:1.2,dur:.12,gain:.1,rate:.6})}pickup(){this.clunk(),this.tone({freq:520,dur:.06,gain:.05,type:"triangle"})}error(){this.tone({freq:130,dur:.16,gain:.1,type:"square"}),setTimeout(()=>this.tone({freq:104,dur:.18,gain:.08,type:"square"}),90)}success(){this.tone({freq:330,dur:.22,gain:.08,type:"triangle"}),setTimeout(()=>this.tone({freq:495,dur:.32,gain:.07,type:"triangle"}),140)}ui(){this.burst({freq:900,q:2,dur:.03,gain:.045,rate:1.2})}wrenchDrop(){this.burst({freq:1600,q:6,dur:.2,gain:.12,rate:1.1}),this.tone({freq:220,dur:.3,gain:.06,type:"triangle",slide:-60})}crash(){this.burst({freq:150,q:.7,dur:.5,gain:.3,rate:.5,type:"lowpass"}),this.tone({freq:60,dur:.5,gain:.22,type:"sine",slide:-20}),setTimeout(()=>this.burst({freq:1200,q:2,dur:.3,gain:.1,rate:.8}),60)}slurp(){this.burst({freq:500,q:.8,dur:.35,gain:.08,rate:.5}),this.tone({freq:180,dur:.2,gain:.04,type:"sine",slide:80})}eat(){this.burst({freq:900,q:1,dur:.14,gain:.07,rate:1.2}),setTimeout(()=>this.burst({freq:760,q:1,dur:.14,gain:.06,rate:1.1}),130)}sleep(){this.tone({freq:70,dur:1.6,gain:.06,type:"sine",slide:-20})}startEngine(){if(!this.ctx)return;const t=this.ctx;if(this.engine)return;const e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.value=34;const s=t.createOscillator();s.type="square",s.frequency.value=17;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=320,r.Q.value=1.5;const a=t.createGain();a.gain.value=1e-4;const o=t.createOscillator();o.type="sine",o.frequency.value=5.5;const l=t.createGain();l.gain.value=.025,o.connect(l).connect(a.gain);const c=t.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const u=t.createGain();u.gain.value=.018;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=180,c.connect(h).connect(u).connect(this.master),n.connect(r),s.connect(r),r.connect(a).connect(this.master),n.start(),s.start(),o.start(),c.start(),a.gain.setTargetAtTime(.05,e,.15),this.engine={osc1:n,osc2:s,filter:r,gain:a,lfo:o,rumble:c,rGain:u,rpm:850,rough:0}}stopEngine(){if(!this.engine||!this.ctx)return;const t=this.engine,e=this.ctx.currentTime;t.gain.gain.setTargetAtTime(1e-4,e,.15),setTimeout(()=>{try{t.osc1.stop(),t.osc2.stop(),t.lfo.stop(),t.rumble.stop()}catch{}},500),this.engine=null}revEngine(t=850,e=0){if(!this.engine)return;const n=this.engine,s=this.ctx.currentTime,r=Math.max(22,t/60*3);n.osc1.frequency.setTargetAtTime(r,s,.08),n.osc2.frequency.setTargetAtTime(r*.5,s,.08),n.filter.frequency.setTargetAtTime(260+t*.12,s,.1),n.gain.gain.setTargetAtTime(.038+(t-700)/6e3,s,.12),n.lfo.frequency.setTargetAtTime(3+e*9,s,.2),this.engine.rough!==e&&(n.osc1.detune.setTargetAtTime(e*35,s,.2),this.engine.rough=e)}crank(t=1.8,e=!0){if(!this.ctx)return;const n=this.ctx,s=n.currentTime,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(38,s),r.frequency.linearRampToValueAtTime(55,s+t*.7);const a=n.createGain();a.gain.value=1e-4;const o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=480,r.connect(o).connect(a).connect(this.master),a.gain.setTargetAtTime(.06,s,.08),this.burst({freq:300,q:1.1,dur:.12,gain:.2,rate:.7});for(let l=0;l<Math.floor(t*5);l++)setTimeout(()=>this.burst({freq:280+Math.random()*200,q:2,dur:.1,gain:.08,rate:.6}),160+l*210);setTimeout(()=>{a.gain.setTargetAtTime(1e-4,n.currentTime,.1),r.stop(n.currentTime+.25)},t*1e3),e||setTimeout(()=>{this.tone({freq:86,dur:.25,gain:.1,type:"square",slide:-30}),this.burst({freq:200,q:2,dur:.4,gain:.12,rate:.5})},t*1e3)}startMoped(){if(!this.ctx||this.moped)return;const t=this.ctx,e=t.createOscillator();e.type="square",e.frequency.value=62;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=700;const s=t.createGain();s.gain.value=1e-4;const r=t.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=2;const o=t.createGain();o.gain.value=.02,e.connect(n).connect(s).connect(this.master),r.connect(a).connect(o).connect(this.master),e.start(),r.start(),s.gain.setTargetAtTime(.035,t.currentTime,.1),this.moped={osc:e,filter:n,gain:s,noise:r,ng:o}}revMoped(t=2e3){if(!this.moped)return;const e=this.ctx.currentTime;this.moped.osc.frequency.setTargetAtTime(48+t*.008,e,.1),this.moped.filter.frequency.setTargetAtTime(500+t*.12,e,.1),this.moped.gain.gain.setTargetAtTime(.022+t/16e4,e,.1)}stopMoped(){if(!this.moped)return;const t=this.moped;t.gain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1),setTimeout(()=>{try{t.osc.stop(),t.noise.stop()}catch{}},400),this.moped=null}toggleRadio(){if(!this.ctx)return!1;if(this.radio)return clearInterval(this.radioTimer),this.radio.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1),this.radio=null,!1;const t=this.ctx,e=t.createGain();e.gain.value=1e-4;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.6,e.connect(n).connect(this.master),e.gain.setTargetAtTime(.022,t.currentTime,.4),this.radio={gain:e};const s=[110,138.6,164.8,196,164.8,138.6,123.5,146.8];let r=0;const a=()=>{if(!this.radio)return;const o=this.ctx.currentTime,l=t.createOscillator();l.type="triangle";const c=s[r++%s.length]*(r%16<8?1:1.5);l.frequency.value=c;const u=t.createGain();u.gain.setValueAtTime(1e-4,o),u.gain.exponentialRampToValueAtTime(.12,o+.03),u.gain.exponentialRampToValueAtTime(1e-4,o+.7),l.connect(u).connect(e),l.start(o),l.stop(o+.8),Math.random()>.68&&this.burst({freq:1500,q:3,dur:.04,gain:.02,rate:1.5})};return this.radioTimer=setInterval(a,720),setTimeout(a,200),!0}}const Fo=i=>document.getElementById(i),ku=Fo("stage"),rn=new qg({antialias:!0,powerPreference:"high-performance",stencil:!1});rn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));rn.setSize(window.innerWidth,window.innerHeight);rn.outputColorSpace=De;rn.toneMapping=ko;rn.toneMappingExposure=1.3;rn.shadowMap.enabled=!0;rn.shadowMap.type=Xc;ku.appendChild(rn.domElement);rn.domElement.setAttribute("aria-label","Bare Metal game view");const Gu=new ud,Ne=new dn(64,window.innerWidth/window.innerHeight,.04,360);Ne.rotation.order="YXZ";const he=new s_,tt=new t_(he),Dt=new Qg(Gu,rn),it=new n_(tt,he);tt.attachUI(it);tt.onJobExpired=()=>{Dt.truck.setCargo(!1),Ei()};const Ue=new i_(ku),r_=new Zd;let ce="title",Ri=!1,Ve=null,hn=0,Kr=0;const Hc=[null,10,12,14,19],Lt={pos:new P(2.35,1.62,4.45),yaw:.46,pitch:-.1,bob:0,stepDist:0};let mn=null,jt=0,pn=0,za=0,Ee=null,ka=0;const Oo=new Jd;Oo.far=3.4;const a_=new Tt(0,0),Hu=new P,Vu=new P;it.onStart=o_;it.onTool=i=>{Kr=Hc[i]??0,it.selectTool(i),ce==="walk"&&it.toast(i===0?"Empty hands.":`${Hc[i]}mm socket.`,"")};it.onAction=()=>qu();it.onManual=()=>Yu();it.onEscape=()=>Ku();Ue.onAction=()=>qu();Ue.onTool=i=>it.onTool(i);Ue.onManual=()=>Yu();Ue.onEscape=()=>Ku();it.onBuy=i=>{const t=tt.buy(i);it.toast(t.msg,t.ok?"good":"bad"),it.renderStore(),gn()};it.onAcceptJob=i=>{const t=tt.acceptJob(i);if(!t.ok){it.toast(t.msg,"bad");return}it.closePanel(),Ei(),gn()};it.onCrank=()=>{const i=tt.startEngine();it.updateTuneLive(),it.toast(i.msg,i.running?"good":"bad"),i.running?(tt.s.meters.stress=Math.max(0,tt.s.meters.stress-8),he.revEngine(tt.idleRpm(),.2),na()):(tt.s.meters.stress=Math.min(100,tt.s.meters.stress+4),he.error()),gn()};it.onTorqueRelease=i=>{const t=it.torque;if(!t)return;const e=tt.applyTorque(t.part,t.index,i);it.torqueResult(e,i),Wu(t.part),e==="good"?setTimeout(()=>{const n=tt.nextBolt(t.part);n>=0&&tt.s.parts[t.part]?Gs(t.part,n):v_(t.part)},1250):e==="loose"?setTimeout(()=>{(ce==="walk"||ce==="drive")&&Gs(t.part,t.index)},1400):setTimeout(()=>{it.panel==="torque"&&it.hideTorque(),it.toast("Stripped thread. A bolt kit from the parts terminal will fix it.","bad"),tt.s.meters.stress=Math.min(100,tt.s.meters.stress+8)},1700)};it.onPanelOpen=i=>{i!=="torque"&&(Ri=!0,Ue.releaseLock()),i==="death"&&(Ri=!0)};it.onPanelClose=()=>{(ce==="walk"||ce==="drive")&&(Ri=!1,Ue.coarse||Ue.requestLock())};it.onRestart=()=>{tt.wipe(),location.reload()};Ue.bindJoystick(Fo("joystick"),Fo("joystick").querySelector(".stick"));Ue.onVehicle=()=>{it.panel||(ce==="drive"?cl():ce==="walk"&&Ve?.action==="enter_truck"?Hs("truck"):ce==="walk"&&Ve?.action==="enter_moped"&&Hs("moped"))};window.addEventListener("resize",()=>{Ne.aspect=window.innerWidth/window.innerHeight,Ne.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight),rn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6))});function o_(){const i=tt.load();i||tt.newGame(),l_(),it.showGame(),it.selectTool(0),it.setStartVisible(!1),ce="walk",Ri=!1;const t=tt.s.truck,e=Math.abs(t.x)<8.2&&t.z>-5.2&&t.z<5.2;if(e)Lt.pos.set(Math.max(-6,Math.min(6,t.x+2.95)),1.62,Math.max(-4.8,Math.min(5.2,t.z+5.6)));else{const n=t.heading||0;Lt.pos.set(t.x-Math.cos(n)*3.2,1.62,t.z+Math.sin(n)*3.2)}Lt.yaw=e?.58:Math.atan2(-(t.x-Lt.pos.x),-(t.z-Lt.pos.z)),Lt.pitch=-.08,i&&tt.s.engineRunning&&it.subtitle(`The Patient is still warm.
Another day in Hollow Creek.`,4200),Ue.requestLock(),c_(),gn(),Ei()}function l_(){const i=tt.s;for(const[t,e]of Object.entries(Xe)){const n=!!i.parts[t];Dt.truck.setPart(t,n),n&&(t==="wheels"&&Dt.truck.setPart("wheels",!0),Dt.truck.makeBolts(t,i.bolts[t]||[]));const s=Dt.pickups[t];if(s){const r=n||(i.inventory[t]||0)>0;s.taken=r,s.group.visible=!r}}Dt.truck.group.position.set(i.truck.x,0,i.truck.z),Dt.truck.group.rotation.y=i.truck.heading||0,Dt.truck.setCargo(!!i.cargo),i.engineRunning&&na(),Ei()}function Wu(i){tt.s.bolts[i]&&Dt.truck.makeBolts(i,tt.s.bolts[i])}function na(){tt.s.engineRunning?(he.startEngine(),he.revEngine(tt.idleRpm(),Math.min(1,tt.tuneError().total+tt.looseBolts()*.05))):he.stopEngine()}function Ei(){const i=tt.jobTarget();Dt.setMarker("miller",!!i&&i.id==="miller"),Dt.setMarker("store",!!i&&i.id==="store")}let Vc=!1;function c_(){Vc||(Vc=!0,rn.setAnimationLoop(Xu))}function Xu(){const i=Math.min(.05,r_.getDelta()),t=performance.now()/1e3;ce==="title"?u_(i,t):ce==="dead"||(Ri||it.panel&&it.panel!=="torque"?(Wc(i,t),it.tickTorque(i),gn()):(ce==="walk"&&h_(i),ce==="drive"&&M_(i,t),Wc(i,t),it.tickTorque(i),tt.tick(i),tt.dead&&(ce="dead",Ri=!0),gn(),ka+=i,ka>8&&(ka=0,tt.save()),it.panel==="tune"&&it.updateTuneLive())),rn.render(Gu,Ne),Ue.endFrame()}function Wc(i,t){Dt.update(i,t),tt.s.engineRunning?(he.revEngine(tt.idleRpm()+(ce==="drive"&&mn==="truck"?Math.abs(jt)*85:0),Math.min(1,tt.tuneError().total+tt.looseBolts()*.08)),Math.random()<i*14&&Dt.puffExhaust()):mn==="truck"&&ce==="drive"&&he.revEngine(0,1),Math.random()<i*.06&&!it.panel&&Math.random()>.5&&he.burst({freq:500+Math.random()*600,q:3,dur:.18,gain:.012,rate:.4})}function u_(i,t){Ne.fov=56,Ne.updateProjectionMatrix(),Ne.position.set(4.55+Math.sin(t*.08)*.18,2.02+Math.sin(t*.11)*.04,4.7+Math.cos(t*.06)*.12),Ne.lookAt(.15,1.18,-.55),Dt.update(i,t),tt.s.engineRunning}function h_(i,t){Ne.fov+=(64-Ne.fov)*.1,Ne.updateProjectionMatrix();const e=Ue.consumeLook();it.panel||(Lt.yaw-=e.x*.0022,Lt.pitch-=e.y*.0022,Lt.pitch=Math.max(-1.35,Math.min(1.35,Lt.pitch)));const n=it.panel?{x:0,y:0}:Ue.axis(),s=tt.s.meters.fatigue,r=Ue.sprint()&&s<80&&tt.s.meters.stamina!==0,a=(r?4.2:2.7)*(1-Math.min(.35,s/280))*(tt.s.health<35?.72:1),o=Hu.set(-Math.sin(Lt.yaw),0,-Math.cos(Lt.yaw)),l=Vu.set(Math.cos(Lt.yaw),0,-Math.sin(Lt.yaw)),c=new P;c.addScaledVector(o,-n.y).addScaledVector(l,n.x),c.lengthSq()>0&&c.normalize().multiplyScalar(a*i);const u=d_(c.x,c.z),h=Math.hypot(u.x,u.z);Lt.stepDist+=h,h>5e-4?(Lt.bob+=i*(r?10:7.2),Lt.stepDist>1.6&&(Lt.stepDist=0,he.step(r?1.4:1))):Lt.bob*=.9;const d=Math.sin(Lt.bob)*(r?.045:.028),p=Math.cos(Lt.bob*.5)*.018;Ne.position.set(Lt.pos.x+l.x*p,Lt.pos.y+d,Lt.pos.z+l.z*p),Ne.rotation.set(Lt.pitch,Lt.yaw,Math.sin(Lt.bob*.5)*.004),f_(i),p_()}function d_(i,t){let n=0,s=0;return Bo(Lt.pos.x+i,Lt.pos.z,.26)||(Lt.pos.x+=i,n=i),Bo(Lt.pos.x,Lt.pos.z+t,.26)||(Lt.pos.z+=t,s=t),Lt.pos.x=Math.max(-170,Math.min(170,Lt.pos.x)),Lt.pos.z=Math.max(-170,Math.min(170,Lt.pos.z)),{x:n,z:s}}function Bo(i,t,e){for(const n of Dt.colliders)if(i>n.minX-e&&i<n.maxX+e&&t>n.minZ-e&&t<n.maxZ+e)return!0;for(const n of Dt.treeColliders)if((i-n.x)**2+(t-n.z)**2<(n.r+e)**2)return!0;return!1}function f_(i){if(Ve=null,it.panel){it.setPrompt("");return}Oo.setFromCamera(a_,Ne);const t=Oo.intersectObjects(Dt.interactables,!1);for(const e of t){if(e.distance>3.4)continue;const n=e.object.userData.interact;if(!n)continue;const s=m_(n);if(s){Ve=s;break}}if(Ee=ll(),Ee){const e=Ue.keys.has("KeyE")||it.actionHeld;Ee.enabled&&e?(hn+=i,hn>=Ee.hold&&(hn=0,$u(Ee))):hn=0,it.setPrompt(Ee.text,{blocked:!Ee.enabled,hold:Ee.enabled?Ee.hold:0,progress:hn/Ee.hold,key:"E"});return}hn=0,Ve?it.setPrompt(Ve.blocked?Ve.reason:Ve.text,{blocked:Ve.blocked}):it.setPrompt("")}function p_(){if(Dt.mountHints)for(const[i,t]of Object.entries(Dt.mountHints))t.visible=!tt.s.parts[i]&&(tt.s.inventory[i]||0)>0,t.visible&&(t.material.opacity=.55+Math.sin(performance.now()*.004)*.25)}function m_(i){const t=i.id,e=tt.s;if(t.startsWith("pickup_")){const n=t.slice(7);return Dt.pickups[n]?.taken?null:{text:`Pick up ${Xe[n]?.name||i.label}`,action:"pickup",part:n,key:"E"}}if(t.startsWith("mount_")){const n=t.slice(6),s=Xe[n];if(!s)return null;const r=e.inventory[n]||0;if(!e.parts[n])return r?Kr!==s.tool?{text:`Install ${s.name}`,blocked:!0,reason:`Requires a ${s.tool}mm socket.`,action:"install",part:n}:{text:`Install ${s.name} · ${s.tool}mm`,action:"install",part:n}:{text:`Install ${s.name}`,blocked:!0,reason:`${s.name} is still in the garage.`,action:"install",part:n};const a=tt.nextBolt(n);if(a<0)return{text:`${s.name} · at spec`,action:null};const l=e.bolts[n][a]==="stripped";return Kr!==s.tool?{text:l?"Replace stripped bolt":`Re-torque ${s.name}`,blocked:!0,reason:`Requires a ${s.tool}mm socket.`,action:"retorque",part:n,index:a}:l&&(e.inventory.boltKit||0)<=0?{text:"Replace stripped bolt",blocked:!0,reason:"No bolt kit. The parts terminal sells them.",action:"retorque",part:n,index:a}:{text:l?"Replace stripped bolt":`Torque ${s.name} · bolt ${a+1}/${s.bolts}`,action:"retorque",part:n,index:a}}switch(t){case"manual":return{text:"Read the service log",action:"manual"};case"board":return{text:"Check the job board",action:"board"};case"store":return{text:"Use the parts terminal",action:"store"};case"radio":return{text:"Turn the radio on",action:"radio"};case"cot":return{text:"Sleep until morning",action:"sleep"};case"sink":return{text:"Wash up / drink from the tap",action:"sink"};case"food":return{text:"Eat cold beans",action:"eat"};case"coffee":return{text:"Pour coffee",action:"coffee"};case"cigarettes":return{text:"Smoke one",action:"smoke"};case"tune":return{text:"Tune the engine",action:"tune"};case"ignition":case"truck_drive":return e.engineRunning?{text:"Get into The Patient",action:"enter_truck"}:{text:"Crank the engine",action:"crank"};case"moped_drive":return{text:"Ride the moped",action:"enter_moped"};case"fuel_tank":return(e.inventory.fuel||0)<=0?{text:"Fill the fuel tank",blocked:!0,reason:"No fuel can. Buy one at the parts terminal.",action:"fuel"}:{text:"Fill the fuel tank · 1 can",action:"fuel"};case"oil_fill":return(e.inventory.oil||0)<=0?{text:"Fill engine oil",blocked:!0,reason:"No oil. Buy a jug at the parts terminal.",action:"oil"}:{text:"Fill engine oil · 1 jug",action:"oil"};case"coolant_fill":return(e.inventory.coolant||0)<=0?{text:"Fill coolant",blocked:!0,reason:"No antifreeze. Buy a jug at the parts terminal.",action:"coolant"}:{text:"Fill coolant · 1 jug",action:"coolant"}}return null}function qu(){if(!(ce==="title"||tt.dead)&&!it.panel){if(ce==="drive"){if(ll()?.enabled)return;cl();return}if(!Ee&&Ve){if(Ve.blocked){he.error(),it.toast(Ve.reason||"Not now.","bad"),tt.s.meters.stress=Math.min(100,tt.s.meters.stress+1);return}switch(Ve.action){case"pickup":g_(Ve.part);break;case"install":__(Ve.part);break;case"retorque":x_(Ve.part,Ve.index);break;case"manual":it.openPanel("manual");break;case"board":it.openPanel("board");break;case"store":it.openPanel("store");break;case"tune":it.openPanel("tune");break;case"radio":{const i=he.toggleRadio();it.toast(i?"The radio crackles to life. Something slow and sad.":"Radio off.");break}case"sleep":{const i=tt.sleep();it.toast(i,"good"),he.clunk();break}case"sink":it.toast(tt.wash(),"good");break;case"eat":it.toast(tt.eat(),"");break;case"coffee":it.toast(tt.coffee(),"");break;case"smoke":it.toast(tt.smoke(),"");break;case"crank":{const i=tt.startEngine();it.toast(i.msg,i.running?"good":"bad"),i.running?(na(),tt.s.meters.stress=Math.max(0,tt.s.meters.stress-6)):(tt.s.meters.stress=Math.min(100,tt.s.meters.stress+5),he.error()),gn();break}case"fuel":Ga("fuel");break;case"oil":Ga("oil");break;case"coolant":Ga("coolant");break;case"enter_truck":if(!tt.wheelsSafe()){it.toast("A wheel is loose. Torque the lugs before you drive.","bad"),he.error();break}Hs("truck");break;case"enter_moped":Hs("moped");break}gn()}}}function g_(i){if(!Dt.takePickup(i))return;tt.givePart(i,1),he.pickup();const t=Xe[i];it.toast(`${t.name} in hand. Needs a ${t.tool}mm socket.`,""),tt.save(),gn()}function __(i){if(i==="wheels"&&tt.hasPart("wheels"),!tt.installPart(i)){it.toast("You do not have that part.","bad");return}Dt.truck.setPart(i,!0),Dt.truck.makeBolts(i,tt.s.bolts[i]),he.clunk(),it.toast(`${Xe[i].name} mounted. Torque it to spec.`,""),tt.save(),setTimeout(()=>{tt.s.parts[i]&&Gs(i,0)},350)}function x_(i,t){if(tt.s.bolts[i]?.[t]==="stripped"){if((tt.s.inventory.boltKit||0)<=0){it.toast("No bolt kit to replace the stripped stud.","bad");return}tt.s.inventory.boltKit--,tt.s.bolts[i][t]=null,Wu(i),it.toast("Stud extracted. New bolt threaded in by hand.","good"),he.ratchet()}Gs(i,t)}function Gs(i,t){const e=Xe[i];if(!tt.s.parts[i]||(tt.s.bolts[i]||(tt.s.bolts[i]=new Array(e.bolts).fill(null)),t<0))return;if(Kr!==e.tool){he.error(),it.toast(`Need a ${e.tool}mm socket.`,"bad");return}const[n,s]=e.torque;it.showTorque({part:i,label:e.name,lo:n,hi:s,index:t,total:e.bolts}),it.torque&&(it.torque.startedAt=performance.now())}function v_(i){it.panel==="torque"&&it.hideTorque(),he.success();const t=tt.s.bolts[i].filter(n=>n==="loose").length,e=tt.s.bolts[i].filter(n=>n==="stripped").length;!t&&!e?it.toast(`${Xe[i].name} seated at spec.`,"good"):it.toast(`Done — but ${t} loose, ${e} stripped. Fix them.`,"bad"),tt.save(),gn()}function Ga(i){const t=tt.fill(i);it.toast(t.msg,t.ok?"good":"bad"),t.ok&&he.slurp(),gn()}function ll(){const i=tt.s.job;if(!i)return null;const t=tt.jobTarget();if(!t)return null;ce==="drive"?Dt.truck.group.position:Lt.pos,ce==="drive"?Dt.truck.group.position:Lt.pos;const e=ce==="drive"?mn==="truck"?Dt.truck.group.position.x:Dt.moped.group.position.x:Lt.pos.x,n=ce==="drive"?mn==="truck"?Dt.truck.group.position.z:Dt.moped.group.position.z:Lt.pos.z;return Math.hypot(e-t.x,n-t.z)>9?null:ce!=="drive"?{text:`Get a vehicle for ${t.label}`,enabled:!1,hold:0,act:"none"}:Math.abs(jt)>1.4?{text:"Stop the vehicle to load",enabled:!1,hold:0,act:"none"}:i.id==="firewood"&&mn!=="truck"?{text:"Firewood needs the truck",enabled:!1,hold:0,act:"none"}:i.id==="firewood"&&i.stage==="to_farm"&&tt.s.cargo?{text:"The truck bed must be empty",enabled:!1,hold:0,act:"none"}:i.stage==="to_farm"?{text:i.id==="courier"?"Drop the crate at Miller farm — hold E":"Load firewood at Miller farm — hold E",enabled:!0,hold:i.id==="courier"?2.6:4.2,act:"load"}:{text:"Unload firewood at the store — hold E",enabled:!0,hold:4.2,act:"unload"}}function $u(i){const t=tt.s.job;t&&(i.act==="load"?t.id==="courier"?(tt.completeDelivery(),it.toast("Crate delivered. Miller pays cash.","good"),he.success(),Ei()):(tt.loadCargo(),Dt.truck.setCargo(!0),he.clunk(),it.toast("Bed loaded. Take it to the store.","good"),Ei()):i.act==="unload"&&(tt.unloadCargo(),Dt.truck.setCargo(!1),tt.completeDelivery(),Ei(),he.success()),gn())}function Hs(i){if(i==="truck"){if(!tt.s.engineRunning){it.toast("The engine is dead. Crank it first.","bad");return}if(!tt.wheelsSafe()){it.toast("Wheel nuts are loose. Torque them.","bad");return}mn="truck";const t=tt.s.truck;Dt.truck.group.position.set(t.x,0,t.z),Dt.truck.group.rotation.y=t.heading||0,pn=t.heading||0,jt=0,na()}else mn="moped",pn=Dt.moped.group.rotation.y,jt=0,he.startMoped();ce="drive",Ri=!1,it.setPrompt(""),it.toast(i==="truck"?"The Patient. Three gears, no sympathy.":"The moped. Two wheels, questionable brakes.",""),Ue.releaseLock(),document.body.classList.add("driving"),i==="moped"&&Dt.moped.group.position.set(Dt.moped.group.position.x,0,Dt.moped.group.position.z)}function cl(){if(ce==="drive"){if(mn==="truck"){const i=tt.s.truck;tt.s.truck={x:Dt.truck.group.position.x,z:Dt.truck.group.position.z,heading:pn},i.x=tt.s.truck.x,i.z=tt.s.truck.z,i.heading=pn;const t=new P(Math.cos(pn),0,-Math.sin(pn));Lt.pos.set(Dt.truck.group.position.x-t.x*1.5,1.62,Dt.truck.group.position.z-t.z*1.5),tt.save()}else Lt.pos.set(Dt.moped.group.position.x-1,1.62,Dt.moped.group.position.z),he.stopMoped();Bo(Lt.pos.x,Lt.pos.z,.26)&&Lt.pos.set(Dt.truck.group.position.x+2.2,1.62,Dt.truck.group.position.z+2.5),ce="walk",mn=null,jt=0,document.body.classList.remove("driving"),it.setPrompt(""),it.toast("On foot. The dirt is cold.","")}}function M_(i,t){const e=Ue.axis(),n=mn==="truck",s=n?13.5:9.5,r=n?4.2:2.5,a=n?6.2:5.2,o=9,l=n?Dt.truck.group:Dt.moped.group,c=S_(l.position.x,l.position.z),u=c?.7:2.4;e.y<-.1?jt+=a*-e.y*i*(n?.9:1.1):e.y>.1?jt>.2?jt-=o*e.y*i:jt-=a*.55*e.y*i:jt-=Math.sign(jt)*u*i,c||(jt-=Math.sign(jt)*1.3*i),jt=Math.max(-r,Math.min(s,jt)),Math.abs(jt)<.03&&(jt=0);const h=e.x,d=Math.min(1,Math.abs(jt)/3.2);Math.abs(jt)>.05&&(pn+=h*(n?1.5:2.1)*i*d*Math.sign(jt)),!c&&Math.abs(jt)>4?za=Math.sin(t*17)*.006*Math.abs(jt)/5:za*=.9;const p=Hu.set(Math.sin(pn),0,Math.cos(pn)),g=l.position.x+p.x*jt*i,v=l.position.z+p.z*jt*i;let f=!1;for(const y of Dt.treeColliders)if((g-y.x)**2+(v-y.z)**2<(y.r+(n?1.25:.6))**2){f=!0;break}(g<-160||g>160||v<-160||v>160)&&(f=!0),f?(Math.abs(jt)>5&&(he.crash(),tt.s.meters.stress=Math.min(100,tt.s.meters.stress+9),tt.s.stats.crashes++,tt.damage(Math.min(30,Math.abs(jt)*.9),"The road took you apart"),it.toast("You hit something solid. The frame shudders.","bad"),tt.s.meters.fatigue=Math.min(100,tt.s.meters.fatigue+4)),jt=-jt*.16):(l.position.x=g,l.position.z=v),l.rotation.y=pn,n?(l.rotation.z=Ro.lerp(l.rotation.z,-h*.025*Math.min(1,Math.abs(jt)/8),.08),l.rotation.x=Ro.lerp(l.rotation.x,-e.y*.008,.08),Dt.truck.group.updateMatrixWorld(),Math.abs(jt)>.1&&Dt.truck.update(i,jt),tt.s.truck={x:l.position.x,z:l.position.z,heading:pn},tt.s.stats.km+=Math.abs(jt)*i/1e3,he.revEngine(tt.idleRpm()+Math.abs(jt)*95,Math.min(1,tt.tuneError().total+tt.looseBolts()*.04)),Math.abs(jt)>2&&Math.random()<i*5&&Dt.puffExhaust()):(Dt.moped.update(i,jt),he.revMoped(1200+Math.abs(jt)*190),tt.s.stats.km+=Math.abs(jt)*i/1e3);const m=n?8.2:3.7,x=n?3.7:2.1,E=Vu.set(l.position.x-p.x*m,x,l.position.z-p.z*m);if(y_(l.position.x,l.position.z)&&(E.x=Math.max(-8.2,Math.min(8.2,E.x)),E.z=Math.max(-5.2,Math.min(5.5,E.z)),E.y=Math.min(4.1,E.y)),Ne.position.lerp(E,1-Math.pow(.001,i)),Ne.lookAt(l.position.x+p.x*1.6,1.25+za,l.position.z+p.z*1.6),Ne.fov+=((n?62:68)-Ne.fov)*.08,Ne.updateProjectionMatrix(),Ee=ll(),Ee){const y=Ue.keys.has("KeyE")||it.actionHeld;Ee.enabled?y?(hn+=i,hn>=Ee.hold&&(hn=0,$u(Ee))):hn=0:(hn=0,Ee=null)}Ee?it.setPrompt(Ee.text,{blocked:!Ee.enabled,hold:Ee.enabled?Ee.hold:0,progress:hn/Ee.hold}):it.setPrompt(`Get out · ${c?"ON ROAD":"OFF ROAD"}`,{key:"F"}),gn()}function S_(i,t){return Math.abs(t-26)<4.6&&Math.abs(i)<155||Math.abs(i)<4.2&&t>4&&t<27||Math.abs(i-64)<3.4&&t>25&&t<40||Math.abs(i+58)<3.4&&t>25&&t<40}function y_(i,t){return i>-9&&i<9&&t>-6&&t<6}function gn(){const i=ce==="drive"?mn==="truck"?Dt.truck.group.position:Dt.moped.group.position:Lt.pos;ce==="drive"?pn*180/Math.PI:-Lt.yaw*180/Math.PI+180,it.updateHUD({heading:ce==="drive"?pn*180/Math.PI:Lt.yaw*180/Math.PI%360,pos:i,driving:ce==="drive",speed:jt,vehicle:mn})}function Yu(){ce==="title"||tt.dead||(it.panel==="manual"?it.closePanel():(!it.panel||it.panel==="torque")&&it.openPanel("manual"))}function Ku(){if(!tt.dead){if(it.panel){it.panel!=="death"&&it.closePanel();return}ce!=="title"&&it.openPanel("pause")}}window.BareMetal={game:tt,world:Dt,ui:it,input:Ue,sound:he,get mode(){return ce},get current(){return Ve},get player(){return Lt},teleport(i,t,e=Lt.yaw,n=-.08){Lt.pos.set(i,1.62,t),Lt.yaw=e,Lt.pitch=n},face(i,t,e){const n=i-Lt.pos.x,s=e-Lt.pos.z,r=Math.hypot(n,s);Lt.yaw=Math.atan2(-n,-s),Lt.pitch=Math.atan2(t-Lt.pos.y,r)},enterVehicle:Hs,exitVehicle:cl,startTorque:Gs};rn.setAnimationLoop(Xu);
