(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Yn="160",So=0,sa=1,Eo=2,Ns=1,To=2,jt=3,or=0,vt=1,qt=2,nr=0,kr=1,oa=2,la=3,ca=4,bo=5,gr=100,Ao=101,wo=102,ua=103,ha=104,Ro=200,Co=201,Lo=202,Po=203,Fn=204,Bn=205,Uo=206,Do=207,Io=208,No=209,Oo=210,Fo=211,Bo=212,Ho=213,zo=214,Go=0,Vo=1,ko=2,Vi=3,Wo=4,Xo=5,jo=6,qo=7,Os=0,Yo=1,Ko=2,ar=0,Zo=1,Jo=2,$o=3,Qo=4,el=5,tl=6,Fs=300,Xr=301,jr=302,Hn=303,zn=304,Yi=306,Gn=1e3,It=1001,Vn=1002,pt=1003,da=1004,nn=1005,At=1006,rl=1007,si=1008,sr=1009,il=1010,nl=1011,Kn=1012,Bs=1013,tr=1014,rr=1015,oi=1016,Hs=1017,zs=1018,xr=1020,al=1021,Nt=1023,sl=1024,ol=1025,Mr=1026,qr=1027,ll=1028,Gs=1029,cl=1030,Vs=1031,ks=1033,an=33776,sn=33777,on=33778,ln=33779,fa=35840,pa=35841,ma=35842,ga=35843,Ws=36196,_a=37492,va=37496,xa=37808,Ma=37809,ya=37810,Sa=37811,Ea=37812,Ta=37813,ba=37814,Aa=37815,wa=37816,Ra=37817,Ca=37818,La=37819,Pa=37820,Ua=37821,cn=36492,Da=36494,Ia=36495,ul=36283,Na=36284,Oa=36285,Fa=36286,Xs=3e3,yr=3001,hl=3200,dl=3201,fl=0,pl=1,Rt="",at="srgb",Kt="srgb-linear",Zn="display-p3",Ki="display-p3-linear",ki="linear",Ye="srgb",Wi="rec709",Xi="p3",Tr=7680,Ba=519,ml=512,gl=513,_l=514,js=515,vl=516,xl=517,Ml=518,yl=519,Ha=35044,za="300 es",kn=1035,Yt=2e3,ji=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],un=Math.PI/180,Wn=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function hn(i,e,t){return(1-t)*i+t*e}function Ga(i){return(i&i-1)===0&&i!==0}function Xn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*n+e.x,this.y=a*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,r,n,a,o,s,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c)}set(e,t,r,n,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],m=r[5],_=r[8],g=n[0],p=n[3],h=n[6],T=n[1],x=n[4],w=n[7],P=n[2],R=n[5],A=n[8];return a[0]=o*g+s*T+l*P,a[3]=o*p+s*x+l*R,a[6]=o*h+s*w+l*A,a[1]=c*g+u*T+f*P,a[4]=c*p+u*x+f*R,a[7]=c*h+u*w+f*A,a[2]=d*g+m*T+_*P,a[5]=d*p+m*x+_*R,a[8]=d*h+m*w+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*a*u+r*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,m=c*a-o*l,_=t*f+r*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(n*c-u*r)*g,e[2]=(s*r-n*o)*g,e[3]=d*g,e[4]=(u*t-n*l)*g,e[5]=(n*a-s*t)*g,e[6]=m*g,e[7]=(r*l-c*t)*g,e[8]=(o*t-r*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(dn.makeScale(e,t)),this}rotate(e){return this.premultiply(dn.makeRotation(-e)),this}translate(e,t){return this.premultiply(dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dn=new Oe;function qs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function El(){const i=qi("canvas");return i.style.display="block",i}const Va={};function ai(i){i in Va||(Va[i]=!0,console.warn(i))}const ka=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wa=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mi={[Kt]:{transfer:ki,primaries:Wi,toReference:i=>i,fromReference:i=>i},[at]:{transfer:Ye,primaries:Wi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ki]:{transfer:ki,primaries:Xi,toReference:i=>i.applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(ka)},[Zn]:{transfer:Ye,primaries:Xi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(ka).convertLinearToSRGB()}},Tl=new Set([Kt,Ki]),ke={enabled:!0,_workingColorSpace:Kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=mi[e].toReference,n=mi[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return mi[i].primaries},getTransfer:function(i){return i===Rt?ki:mi[i].transfer}};function Wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let br;class Ys{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=qi("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Wr(a[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wr(t[r]/255)*255):t[r]=Wr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bl=0;class Ks{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(pn(n[o].image)):a.push(pn(n[o]))}else a=pn(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function pn(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ys.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Al=0;class yt extends Kr{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,r=It,n=It,a=At,o=si,s=Nt,l=sr,c=yt.DEFAULT_ANISOTROPY,u=Rt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=li(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===yr?at:Rt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Vn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Vn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?yr:Xs}set encoding(e){ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?at:Rt}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Fs;yt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,r=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],u=o[1],f=o[5],d=o[9],m=o[2],_=o[6],g=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(s+1)/2,T=(f+1)/2,x=(g+1)/2,w=(l+u)/4,P=(c+m)/4,R=(d+_)/4;return h>T&&h>x?h<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(h),n=w/r,a=P/r):T>x?T<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(T),r=w/n,a=R/n):x<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(x),r=P/a,n=R/a),this.set(r,n,a,t),this}let p=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(p)<.001&&(p=1),this.x=(_-d)/p,this.y=(c-m)/p,this.z=(u-l)/p,this.w=Math.acos((s+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wl extends Kr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yr?at:Rt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new yt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ks(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends wl{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Zs extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],g=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-s;const h=l*d+c*m+u*_+f*g,T=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,h*T);p=Math.sin(p*R)/P,s=Math.sin(s*R)/P}const w=s*T;if(l=l*p+d*w,c=c*p+m*w,u=u*p+_*w,f=f*p+g*w,p===1-s){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,a,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-s*m,e[t+2]=c*_+u*m+s*d-l*f,e[t+3]=u*_-s*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),f=s(a/2),d=l(r/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=r+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(r>s&&r>f){const m=2*Math.sqrt(1+r-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-r-f);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-r-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-a*l,this._y=n*u+o*l+a*s-r*c,this._z=a*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=r*f+this._x*d,this._y=n*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(a),r*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,r=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-a*n),f=2*(a*r-o*t);return this.x=t+l*c+o*f-s*u,this.y=r+l*u+s*c-a*f,this.z=n+l*f+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mn.copy(this).projectOnVector(e),this.sub(mn)}reflect(e){return this.sub(mn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mn=new U,Xa=new ci;class ui{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Lt):Lt.fromBufferAttribute(a,o),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gi.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gi.copy(r.boundingBox)),gi.applyMatrix4(e.matrixWorld),this.union(gi)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ei),_i.subVectors(this.max,ei),Ar.subVectors(e.a,ei),wr.subVectors(e.b,ei),Rr.subVectors(e.c,ei),Zt.subVectors(wr,Ar),Jt.subVectors(Rr,wr),ur.subVectors(Ar,Rr);let t=[0,-Zt.z,Zt.y,0,-Jt.z,Jt.y,0,-ur.z,ur.y,Zt.z,0,-Zt.x,Jt.z,0,-Jt.x,ur.z,0,-ur.x,-Zt.y,Zt.x,0,-Jt.y,Jt.x,0,-ur.y,ur.x,0];return!gn(t,Ar,wr,Rr,_i)||(t=[1,0,0,0,1,0,0,0,1],!gn(t,Ar,wr,Rr,_i))?!1:(vi.crossVectors(Zt,Jt),t=[vi.x,vi.y,vi.z],gn(t,Ar,wr,Rr,_i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gt=[new U,new U,new U,new U,new U,new U,new U,new U],Lt=new U,gi=new ui,Ar=new U,wr=new U,Rr=new U,Zt=new U,Jt=new U,ur=new U,ei=new U,_i=new U,vi=new U,hr=new U;function gn(i,e,t,r,n){for(let a=0,o=i.length-3;a<=o;a+=3){hr.fromArray(i,a);const s=n.x*Math.abs(hr.x)+n.y*Math.abs(hr.y)+n.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=r.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Cl=new ui,ti=new U,_n=new U;class hi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Cl.setFromPoints(e).getCenter(r);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ti.subVectors(e,this.center);const t=ti.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(ti,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_n.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ti.copy(e.center).add(_n)),this.expandByPoint(ti.copy(e.center).sub(_n))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new U,vn=new U,xi=new U,$t=new U,xn=new U,Mi=new U,Mn=new U;class Jn{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){vn.copy(e).add(t).multiplyScalar(.5),xi.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(vn);const a=e.distanceTo(t)*.5,o=-this.direction.dot(xi),s=$t.dot(this.direction),l=-$t.dot(xi),c=$t.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*l-s,d=o*s-l,_=a*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),m=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(vn).addScaledVector(xi,d),m}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const r=Vt.dot(this.direction),n=Vt.dot(Vt)-r*r,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),r>o||a>n||((a>r||isNaN(r))&&(r=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,r,n,a){xn.subVectors(t,e),Mi.subVectors(r,e),Mn.crossVectors(xn,Mi);let o=this.direction.dot(Mn),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;$t.subVectors(this.origin,e);const l=s*this.direction.dot(Mi.crossVectors($t,Mi));if(l<0)return null;const c=s*this.direction.dot(xn.cross($t));if(c<0||l+c>o)return null;const u=-s*$t.dot(Mn);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,r,n,a,o,s,l,c,u,f,d,m,_,g,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,o,s,l,c,u,f,d,m,_,g,p)}set(e,t,r,n,a,o,s,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=n,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Cr.setFromMatrixColumn(e,0).length(),a=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,m=o*f,_=s*u,g=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-s*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d+g*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=m*s-_,t[6]=g+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d-g*s,t[4]=-o*f,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*u,t[9]=g-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,_=s*u,g=s*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,g=s*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,g=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=s*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ll,e,Pl)}lookAt(e,t,r){const n=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),Qt.crossVectors(r,xt),Qt.lengthSq()===0&&(Math.abs(r.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),Qt.crossVectors(r,xt)),Qt.normalize(),yi.crossVectors(xt,Qt),n[0]=Qt.x,n[4]=yi.x,n[8]=xt.x,n[1]=Qt.y,n[5]=yi.y,n[9]=xt.y,n[2]=Qt.z,n[6]=yi.z,n[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],m=r[13],_=r[2],g=r[6],p=r[10],h=r[14],T=r[3],x=r[7],w=r[11],P=r[15],R=n[0],A=n[4],q=n[8],y=n[12],E=n[1],z=n[5],G=n[9],ae=n[13],C=n[2],H=n[6],V=n[10],X=n[14],W=n[3],k=n[7],J=n[11],Q=n[15];return a[0]=o*R+s*E+l*C+c*W,a[4]=o*A+s*z+l*H+c*k,a[8]=o*q+s*G+l*V+c*J,a[12]=o*y+s*ae+l*X+c*Q,a[1]=u*R+f*E+d*C+m*W,a[5]=u*A+f*z+d*H+m*k,a[9]=u*q+f*G+d*V+m*J,a[13]=u*y+f*ae+d*X+m*Q,a[2]=_*R+g*E+p*C+h*W,a[6]=_*A+g*z+p*H+h*k,a[10]=_*q+g*G+p*V+h*J,a[14]=_*y+g*ae+p*X+h*Q,a[3]=T*R+x*E+w*C+P*W,a[7]=T*A+x*z+w*H+P*k,a[11]=T*q+x*G+w*V+P*J,a[15]=T*y+x*ae+w*X+P*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+a*l*f-n*c*f-a*s*d+r*c*d+n*s*m-r*l*m)+g*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*u-a*l*u)+p*(+t*c*f-t*s*m-a*o*f+r*o*m+a*s*u-r*c*u)+h*(-n*s*u-t*l*f+t*s*d+n*o*f-r*o*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],T=f*p*c-g*d*c+g*l*m-s*p*m-f*l*h+s*d*h,x=_*d*c-u*p*c-_*l*m+o*p*m+u*l*h-o*d*h,w=u*g*c-_*f*c+_*s*m-o*g*m-u*s*h+o*f*h,P=_*f*l-u*g*l-_*s*d+o*g*d+u*s*p-o*f*p,R=t*T+r*x+n*w+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(g*d*a-f*p*a-g*n*m+r*p*m+f*n*h-r*d*h)*A,e[2]=(s*p*a-g*l*a+g*n*c-r*p*c-s*n*h+r*l*h)*A,e[3]=(f*l*a-s*d*a-f*n*c+r*d*c+s*n*m-r*l*m)*A,e[4]=x*A,e[5]=(u*p*a-_*d*a+_*n*m-t*p*m-u*n*h+t*d*h)*A,e[6]=(_*l*a-o*p*a-_*n*c+t*p*c+o*n*h-t*l*h)*A,e[7]=(o*d*a-u*l*a+u*n*c-t*d*c-o*n*m+t*l*m)*A,e[8]=w*A,e[9]=(_*f*a-u*g*a-_*r*m+t*g*m+u*r*h-t*f*h)*A,e[10]=(o*g*a-_*s*a+_*r*c-t*g*c-o*r*h+t*s*h)*A,e[11]=(u*s*a-o*f*a-u*r*c+t*f*c+o*r*m-t*s*m)*A,e[12]=P*A,e[13]=(u*g*n-_*f*n+_*r*d-t*g*d-u*r*p+t*f*p)*A,e[14]=(_*s*n-o*g*n-_*r*l+t*g*l+o*r*p-t*s*p)*A,e[15]=(o*f*n-u*s*n+u*r*l-t*f*l-o*r*d+t*s*d)*A,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,o){return this.set(1,r,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,f=s+s,d=a*c,m=a*u,_=a*f,g=o*u,p=o*f,h=s*f,T=l*c,x=l*u,w=l*f,P=r.x,R=r.y,A=r.z;return n[0]=(1-(g+h))*P,n[1]=(m+w)*P,n[2]=(_-x)*P,n[3]=0,n[4]=(m-w)*R,n[5]=(1-(d+h))*R,n[6]=(p+T)*R,n[7]=0,n[8]=(_+x)*A,n[9]=(p-T)*A,n[10]=(1-(d+g))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=Cr.set(n[0],n[1],n[2]).length();const o=Cr.set(n[4],n[5],n[6]).length(),s=Cr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Pt.copy(this);const l=1/a,c=1/o,u=1/s;return Pt.elements[0]*=l,Pt.elements[1]*=l,Pt.elements[2]*=l,Pt.elements[4]*=c,Pt.elements[5]*=c,Pt.elements[6]*=c,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,t.setFromRotationMatrix(Pt),r.x=a,r.y=o,r.z=s,this}makePerspective(e,t,r,n,a,o,s=Yt){const l=this.elements,c=2*a/(t-e),u=2*a/(r-n),f=(t+e)/(t-e),d=(r+n)/(r-n);let m,_;if(s===Yt)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ji)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,o,s=Yt){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(o-a),d=(t+e)*c,m=(r+n)*u;let _,g;if(s===Yt)_=(o+a)*f,g=-2*f;else if(s===ji)_=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Cr=new U,Pt=new tt,Ll=new U(0,0,0),Pl=new U(1,1,1),Qt=new U,yi=new U,xt=new U,ja=new tt,qa=new ci;class Zi{constructor(e=0,t=0,r=0,n=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],f=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Js{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ul=0;const Ya=new U,Lr=new ci,kt=new tt,Si=new U,ri=new U,Dl=new U,Il=new ci,Ka=new U(1,0,0),Za=new U(0,1,0),Ja=new U(0,0,1),Nl={type:"added"},Ol={type:"removed"};class mt extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new Zi,r=new ci,n=new U(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new tt},normalMatrix:{value:new Oe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Ka,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ka,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Si.copy(e):Si.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(ri,Si,this.up):kt.lookAt(Si,ri,this.up),this.quaternion.setFromRotationMatrix(kt),n&&(kt.extractRotation(n.matrixWorld),Lr.setFromRotationMatrix(kt),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ol)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ri,e,Dl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ri,Il,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new U,Wt=new U,yn=new U,Xt=new U,Pr=new U,Ur=new U,$a=new U,Sn=new U,En=new U,Tn=new U;let Ei=!1;class Dt{constructor(e=new U,t=new U,r=new U){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Ut.subVectors(e,t),n.cross(Ut);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){Ut.subVectors(n,t),Wt.subVectors(r,t),yn.subVectors(e,t);const o=Ut.dot(Ut),s=Ut.dot(Wt),l=Ut.dot(yn),c=Wt.dot(Wt),u=Wt.dot(yn),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const d=1/f,m=(c*l-s*u)*d,_=(o*u-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Xt)===null?!1:Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,r,n,a,o,s,l){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),this.getInterpolation(e,t,r,n,a,o,s,l)}static getInterpolation(e,t,r,n,a,o,s,l){return this.getBarycoord(e,t,r,n,Xt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Xt.x),l.addScaledVector(o,Xt.y),l.addScaledVector(s,Xt.z),l)}static isFrontFacing(e,t,r,n){return Ut.subVectors(r,t),Wt.subVectors(e,t),Ut.cross(Wt).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Ut.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,a){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),Dt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}getInterpolation(e,t,r,n,a){return Dt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let o,s;Pr.subVectors(n,r),Ur.subVectors(a,r),Sn.subVectors(e,r);const l=Pr.dot(Sn),c=Ur.dot(Sn);if(l<=0&&c<=0)return t.copy(r);En.subVectors(e,n);const u=Pr.dot(En),f=Ur.dot(En);if(u>=0&&f<=u)return t.copy(n);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(Pr,o);Tn.subVectors(e,a);const m=Pr.dot(Tn),_=Ur.dot(Tn);if(_>=0&&m<=_)return t.copy(a);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(r).addScaledVector(Ur,s);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return $a.subVectors(a,n),s=(f-u)/(f-u+(m-_)),t.copy(n).addScaledVector($a,s);const h=1/(p+g+d);return o=g*h,s=d*h,t.copy(r).addScaledVector(Pr,o).addScaledVector(Ur,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $s={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ti={h:0,s:0,l:0};function bn(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=ke.workingColorSpace){return this.r=e,this.g=t,this.b=r,ke.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=ke.workingColorSpace){if(e=Sl(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=bn(o,a,e+1/3),this.g=bn(o,a,e),this.b=bn(o,a,e-1/3)}return ke.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const r=$s[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return ke.fromWorkingColorSpace(ut.copy(this),e),Math.round(_t(ut.r*255,0,255))*65536+Math.round(_t(ut.g*255,0,255))*256+Math.round(_t(ut.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(ut.copy(this),t);const r=ut.r,n=ut.g,a=ut.b,o=Math.max(r,n,a),s=Math.min(r,n,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case r:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-r)/f+2;break;case a:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=at){ke.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,r=ut.g,n=ut.b;return e!==at?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Ti);const r=hn(er.h,Ti.h,t),n=hn(er.s,Ti.s,t),a=hn(er.l,Ti.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new He;He.NAMES=$s;let Fl=0;class Zr extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=li(),this.name="",this.type="Material",this.blending=kr,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fn,this.blendDst=Bn,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fn&&(r.blendSrc=this.blendSrc),this.blendDst!==Bn&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qs extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new U,bi=new We;class Ct{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix3(e),this.setXY(t,bi.x,bi.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Qr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=gt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),r=gt(r,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),r=gt(r,this.array),n=gt(n,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class eo extends Ct{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class to extends Ct{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ot extends Ct{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Bl=0;const bt=new tt,An=new mt,Dr=new U,Mt=new ui,ii=new ui,nt=new U;class Ft extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qs(e)?to:eo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Oe().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bt.makeRotationFromQuaternion(e),this.applyMatrix4(bt),this}rotateX(e){return bt.makeRotationX(e),this.applyMatrix4(bt),this}rotateY(e){return bt.makeRotationY(e),this.applyMatrix4(bt),this}rotateZ(e){return bt.makeRotationZ(e),this.applyMatrix4(bt),this}translate(e,t,r){return bt.makeTranslation(e,t,r),this.applyMatrix4(bt),this}scale(e,t,r){return bt.makeScale(e,t,r),this.applyMatrix4(bt),this}lookAt(e){return An.lookAt(e),An.updateMatrix(),this.applyMatrix4(An.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];Mt.setFromBufferAttribute(a),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const r=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(nt.addVectors(Mt.min,ii.min),Mt.expandByPoint(nt),nt.addVectors(Mt.max,ii.max),Mt.expandByPoint(nt)):(Mt.expandByPoint(ii.min),Mt.expandByPoint(ii.max))}Mt.getCenter(r);let n=0;for(let a=0,o=e.count;a<o;a++)nt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(nt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)nt.fromBufferAttribute(s,c),l&&(Dr.fromBufferAttribute(e,c),nt.add(Dr)),n=Math.max(n,r.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<s;E++)c[E]=new U,u[E]=new U;const f=new U,d=new U,m=new U,_=new We,g=new We,p=new We,h=new U,T=new U;function x(E,z,G){f.fromArray(n,E*3),d.fromArray(n,z*3),m.fromArray(n,G*3),_.fromArray(o,E*2),g.fromArray(o,z*2),p.fromArray(o,G*2),d.sub(f),m.sub(f),g.sub(_),p.sub(_);const ae=1/(g.x*p.y-p.x*g.y);isFinite(ae)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ae),T.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(ae),c[E].add(h),c[z].add(h),c[G].add(h),u[E].add(T),u[z].add(T),u[G].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:r.length}]);for(let E=0,z=w.length;E<z;++E){const G=w[E],ae=G.start,C=G.count;for(let H=ae,V=ae+C;H<V;H+=3)x(r[H+0],r[H+1],r[H+2])}const P=new U,R=new U,A=new U,q=new U;function y(E){A.fromArray(a,E*3),q.copy(A);const z=c[E];P.copy(z),P.sub(A.multiplyScalar(A.dot(z))).normalize(),R.crossVectors(q,z);const G=R.dot(u[E])<0?-1:1;l[E*4]=P.x,l[E*4+1]=P.y,l[E*4+2]=P.z,l[E*4+3]=G}for(let E=0,z=w.length;E<z;++E){const G=w[E],ae=G.start,C=G.count;for(let H=ae,V=ae+C;H<V;H+=3)y(r[H+0]),y(r[H+1]),y(r[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const n=new U,a=new U,o=new U,s=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,p),s.add(u),l.add(u),c.add(u),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){s.isInterleavedBufferAttribute?m=l[g]*s.data.stride+s.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new Ct(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new tt,dr=new Jn,Ai=new hi,es=new U,Ir=new U,Nr=new U,Or=new U,wn=new U,wi=new U,Ri=new We,Ci=new We,Li=new We,ts=new U,rs=new U,is=new U,Pi=new U,Ui=new U;class ir extends mt{constructor(e=new Ft,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){wi.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(wn.fromBufferAttribute(f,e),o?wi.addScaledVector(wn,u):wi.addScaledVector(wn.sub(t),u))}t.add(wi)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ai.copy(r.boundingSphere),Ai.applyMatrix4(a),dr.copy(e.ray).recast(e.near),!(Ai.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ai,es)===null||dr.origin.distanceToSquared(es)>(e.far-e.near)**2))&&(Qa.copy(a).invert(),dr.copy(e.ray).applyMatrix4(Qa),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,r){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let w=T,P=x;w<P;w+=3){const R=s.getX(w),A=s.getX(w+1),q=s.getX(w+2);n=Di(this,h,e,r,c,u,f,R,A,q),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),g=Math.min(s.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const T=s.getX(p),x=s.getX(p+1),w=s.getX(p+2);n=Di(this,o,e,r,c,u,f,T,x,w),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=T,P=x;w<P;w+=3){const R=w,A=w+1,q=w+2;n=Di(this,h,e,r,c,u,f,R,A,q),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const T=p,x=p+1,w=p+2;n=Di(this,o,e,r,c,u,f,T,x,w),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Hl(i,e,t,r,n,a,o,s){let l;if(e.side===vt?l=r.intersectTriangle(o,a,n,!0,s):l=r.intersectTriangle(n,a,o,e.side===or,s),l===null)return null;Ui.copy(s),Ui.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ui);return c<t.near||c>t.far?null:{distance:c,point:Ui.clone(),object:i}}function Di(i,e,t,r,n,a,o,s,l,c){i.getVertexPosition(s,Ir),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Or);const u=Hl(i,e,t,r,Ir,Nr,Or,Pi);if(u){n&&(Ri.fromBufferAttribute(n,s),Ci.fromBufferAttribute(n,l),Li.fromBufferAttribute(n,c),u.uv=Dt.getInterpolation(Pi,Ir,Nr,Or,Ri,Ci,Li,new We)),a&&(Ri.fromBufferAttribute(a,s),Ci.fromBufferAttribute(a,l),Li.fromBufferAttribute(a,c),u.uv1=Dt.getInterpolation(Pi,Ir,Nr,Or,Ri,Ci,Li,new We),u.uv2=u.uv1),o&&(ts.fromBufferAttribute(o,s),rs.fromBufferAttribute(o,l),is.fromBufferAttribute(o,c),u.normal=Dt.getInterpolation(Pi,Ir,Nr,Or,ts,rs,is,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new U,materialIndex:0};Dt.getNormal(Ir,Nr,Or,f.normal),u.face=f}return u}class di extends Ft{constructor(e=1,t=1,r=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,r,t,e,o,a,0),_("z","y","x",1,-1,r,t,-e,o,a,1),_("x","z","y",1,1,e,r,t,n,o,2),_("x","z","y",1,-1,e,r,-t,n,o,3),_("x","y","z",1,-1,e,t,r,n,a,4),_("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function _(g,p,h,T,x,w,P,R,A,q,y){const E=w/A,z=P/q,G=w/2,ae=P/2,C=R/2,H=A+1,V=q+1;let X=0,W=0;const k=new U;for(let J=0;J<V;J++){const Q=J*z-ae;for(let oe=0;oe<H;oe++){const B=oe*E-G;k[g]=B*T,k[p]=Q*x,k[h]=C,c.push(k.x,k.y,k.z),k[g]=0,k[p]=0,k[h]=R>0?1:-1,u.push(k.x,k.y,k.z),f.push(oe/A),f.push(1-J/q),X+=1}}for(let J=0;J<q;J++)for(let Q=0;Q<A;Q++){const oe=d+Q+H*J,B=d+Q+H*(J+1),j=d+(Q+1)+H*(J+1),ue=d+(Q+1)+H*J;l.push(oe,B,ue),l.push(B,j,ue),W+=6}s.addGroup(m,W,y),m+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const r=Yr(i[t]);for(const n in r)e[n]=r[n]}return e}function zl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ro(i){return i.getRenderTarget()===null?i.outputColorSpace:ke.workingColorSpace}const Gl={clone:Yr,merge:ft};var Vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vl,this.fragmentShader=kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class io extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends io{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(un*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wn*2*Math.atan(Math.tan(un*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(un*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Br=1;class Wl extends mt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new wt(Fr,Br,e,t);n.layers=this.layers,this.add(n);const a=new wt(Fr,Br,e,t);a.layers=this.layers,this.add(a);const o=new wt(Fr,Br,e,t);o.layers=this.layers,this.add(o);const s=new wt(Fr,Br,e,t);s.layers=this.layers,this.add(s);const l=new wt(Fr,Br,e,t);l.layers=this.layers,this.add(l);const c=new wt(Fr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Yt)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ji)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class no extends yt{constructor(e,t,r,n,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,r,n,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xl extends Sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?at:Rt),this.texture=new no(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new di(5,5,5),a=new Er({name:"CubemapFromEquirect",uniforms:Yr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:vt,blending:nr});a.uniforms.tEquirect.value=t;const o=new ir(n,a),s=t.minFilter;return t.minFilter===si&&(t.minFilter=At),new Wl(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(a)}}const Rn=new U,jl=new U,ql=new Oe;class pr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Rn.subVectors(r,t).cross(jl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Rn),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ql.getNormalMatrix(e),n=this.coplanarPoint(Rn).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new hi,Ii=new U;class ao{constructor(e=new pr,t=new pr,r=new pr,n=new pr,a=new pr,o=new pr){this.planes=[e,t,r,n,a,o]}set(e,t,r,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yt){const r=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],f=n[6],d=n[7],m=n[8],_=n[9],g=n[10],p=n[11],h=n[12],T=n[13],x=n[14],w=n[15];if(r[0].setComponents(l-a,d-c,p-m,w-h).normalize(),r[1].setComponents(l+a,d+c,p+m,w+h).normalize(),r[2].setComponents(l+o,d+u,p+_,w+T).normalize(),r[3].setComponents(l-o,d-u,p-_,w-T).normalize(),r[4].setComponents(l-s,d-f,p-g,w-x).normalize(),t===Yt)r[5].setComponents(l+s,d+f,p+g,w+x).normalize();else if(t===ji)r[5].setComponents(s,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ii.x=n.normal.x>0?e.max.x:e.min.x,Ii.y=n.normal.y>0?e.max.y:e.min.y,Ii.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function so(){let i=null,e=!1,t=null,r=null;function n(a,o){t(a,o),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Yl(i,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,d=c.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,u,f){const d=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){const h=_[g];t?i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(i.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,u),f.version=c.version}}return{get:o,remove:s,update:l}}class $n extends Ft{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,f=e/s,d=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const T=h*d-o;for(let x=0;x<c;x++){const w=x*f-a;_.push(w,-T,0),g.push(0,0,1),p.push(x/s),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<s;T++){const x=T+c*h,w=T+c*(h+1),P=T+1+c*(h+1),R=T+1+c*h;m.push(x,w,R),m.push(w,P,R)}this.setIndex(m),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zl=`#ifdef USE_ALPHAHASH
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
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ql=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ec=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tc=`#ifdef USE_AOMAP
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
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ic=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ac=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lc=`#ifdef USE_IRIDESCENCE
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
#endif`,cc=`#ifdef USE_BUMPMAP
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
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vc=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,xc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mc=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ac=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ic=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oc=`#ifdef USE_GRADIENTMAP
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
}`,Fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Vc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kc=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_u=`#ifdef USE_NORMALMAP
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
#endif`,vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Du=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ku=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ku=`uniform sampler2D t2D;
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`#include <common>
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
}`,th=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rh=`#define DISTANCE
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
}`,ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lh=`#include <common>
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
}`,ch=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uh=`#define LAMBERT
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
}`,hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dh=`#define MATCAP
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
}`,fh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ph=`#define NORMAL
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
}`,mh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gh=`#define PHONG
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
}`,_h=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vh=`#define STANDARD
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
}`,xh=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Mh=`#define TOON
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
}`,yh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Sh=`uniform float size;
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
}`,Eh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Th=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ah=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,wh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ce={alphahash_fragment:Kl,alphahash_pars_fragment:Zl,alphamap_fragment:Jl,alphamap_pars_fragment:$l,alphatest_fragment:Ql,alphatest_pars_fragment:ec,aomap_fragment:tc,aomap_pars_fragment:rc,batching_pars_vertex:ic,batching_vertex:nc,begin_vertex:ac,beginnormal_vertex:sc,bsdfs:oc,iridescence_fragment:lc,bumpmap_pars_fragment:cc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:hc,clipping_planes_pars_vertex:dc,clipping_planes_vertex:fc,color_fragment:pc,color_pars_fragment:mc,color_pars_vertex:gc,color_vertex:_c,common:vc,cube_uv_reflection_fragment:xc,defaultnormal_vertex:Mc,displacementmap_pars_vertex:yc,displacementmap_vertex:Sc,emissivemap_fragment:Ec,emissivemap_pars_fragment:Tc,colorspace_fragment:bc,colorspace_pars_fragment:Ac,envmap_fragment:wc,envmap_common_pars_fragment:Rc,envmap_pars_fragment:Cc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:Vc,envmap_vertex:Pc,fog_vertex:Uc,fog_pars_vertex:Dc,fog_fragment:Ic,fog_pars_fragment:Nc,gradientmap_pars_fragment:Oc,lightmap_fragment:Fc,lightmap_pars_fragment:Bc,lights_lambert_fragment:Hc,lights_lambert_pars_fragment:zc,lights_pars_begin:Gc,lights_toon_fragment:kc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:jc,lights_physical_fragment:qc,lights_physical_pars_fragment:Yc,lights_fragment_begin:Kc,lights_fragment_maps:Zc,lights_fragment_end:Jc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:Qc,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:tu,map_fragment:ru,map_pars_fragment:iu,map_particle_fragment:nu,map_particle_pars_fragment:au,metalnessmap_fragment:su,metalnessmap_pars_fragment:ou,morphcolor_vertex:lu,morphnormal_vertex:cu,morphtarget_pars_vertex:uu,morphtarget_vertex:hu,normal_fragment_begin:du,normal_fragment_maps:fu,normal_pars_fragment:pu,normal_pars_vertex:mu,normal_vertex:gu,normalmap_pars_fragment:_u,clearcoat_normal_fragment_begin:vu,clearcoat_normal_fragment_maps:xu,clearcoat_pars_fragment:Mu,iridescence_pars_fragment:yu,opaque_fragment:Su,packing:Eu,premultiplied_alpha_fragment:Tu,project_vertex:bu,dithering_fragment:Au,dithering_pars_fragment:wu,roughnessmap_fragment:Ru,roughnessmap_pars_fragment:Cu,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Pu,shadowmap_vertex:Uu,shadowmask_pars_fragment:Du,skinbase_vertex:Iu,skinning_pars_vertex:Nu,skinning_vertex:Ou,skinnormal_vertex:Fu,specularmap_fragment:Bu,specularmap_pars_fragment:Hu,tonemapping_fragment:zu,tonemapping_pars_fragment:Gu,transmission_fragment:Vu,transmission_pars_fragment:ku,uv_pars_fragment:Wu,uv_pars_vertex:Xu,uv_vertex:ju,worldpos_vertex:qu,background_vert:Yu,background_frag:Ku,backgroundCube_vert:Zu,backgroundCube_frag:Ju,cube_vert:$u,cube_frag:Qu,depth_vert:eh,depth_frag:th,distanceRGBA_vert:rh,distanceRGBA_frag:ih,equirect_vert:nh,equirect_frag:ah,linedashed_vert:sh,linedashed_frag:oh,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:uh,meshlambert_frag:hh,meshmatcap_vert:dh,meshmatcap_frag:fh,meshnormal_vert:ph,meshnormal_frag:mh,meshphong_vert:gh,meshphong_frag:_h,meshphysical_vert:vh,meshphysical_frag:xh,meshtoon_vert:Mh,meshtoon_frag:yh,points_vert:Sh,points_frag:Eh,shadow_vert:Th,shadow_frag:bh,sprite_vert:Ah,sprite_frag:wh},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ht={basic:{uniforms:ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ft([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ft([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ft([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ft([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ft([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ft([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ft([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ft([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ht.physical={uniforms:ft([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ni={r:0,b:0,g:0};function Rh(i,e,t,r,n,a,o){const s=new He(0);let l=a===!0?0:1,c,u,f=null,d=0,m=null;function _(p,h){let T=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?g(s,l):x&&x.isColor&&(g(x,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yi)?(u===void 0&&(u=new ir(new di(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Yr(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ke.getTransfer(x.colorSpace)!==Ye,(f!==x||d!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ir(new $n(2,2),new Er({name:"BackgroundMaterial",uniforms:Yr(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ke.getTransfer(x.colorSpace)!==Ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(Ni,ro(i)),r.buffers.color.setClear(Ni.r,Ni.g,Ni.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(p,h=1){s.set(p),l=h,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(s,l)},render:_}}function Ch(i,e,t,r){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=p(null);let c=l,u=!1;function f(C,H,V,X,W){let k=!1;if(o){const J=g(X,V,H);c!==J&&(c=J,m(c.object)),k=h(C,X,V,W),k&&T(C,X,V,W)}else{const J=H.wireframe===!0;(c.geometry!==X.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=V.id,c.wireframe=J,k=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,q(C,H,V,X),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return r.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(C){return r.isWebGL2?i.bindVertexArray(C):a.bindVertexArrayOES(C)}function _(C){return r.isWebGL2?i.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function g(C,H,V){const X=V.wireframe===!0;let W=s[C.id];W===void 0&&(W={},s[C.id]=W);let k=W[H.id];k===void 0&&(k={},W[H.id]=k);let J=k[X];return J===void 0&&(J=p(d()),k[X]=J),J}function p(C){const H=[],V=[],X=[];for(let W=0;W<n;W++)H[W]=0,V[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:X,object:C,attributes:{},index:null}}function h(C,H,V,X){const W=c.attributes,k=H.attributes;let J=0;const Q=V.getAttributes();for(const oe in Q)if(Q[oe].location>=0){const B=W[oe];let j=k[oe];if(j===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function T(C,H,V,X){const W={},k=H.attributes;let J=0;const Q=V.getAttributes();for(const oe in Q)if(Q[oe].location>=0){let B=k[oe];B===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const j={};j.attribute=B,B&&B.data&&(j.data=B.data),W[oe]=j,J++}c.attributes=W,c.attributesNum=J,c.index=X}function x(){const C=c.newAttributes;for(let H=0,V=C.length;H<V;H++)C[H]=0}function w(C){P(C,0)}function P(C,H){const V=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;V[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),W[C]!==H&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,H),W[C]=H)}function R(){const C=c.newAttributes,H=c.enabledAttributes;for(let V=0,X=H.length;V<X;V++)H[V]!==C[V]&&(i.disableVertexAttribArray(V),H[V]=0)}function A(C,H,V,X,W,k,J){J===!0?i.vertexAttribIPointer(C,H,V,W,k):i.vertexAttribPointer(C,H,V,X,W,k)}function q(C,H,V,X){if(r.isWebGL2===!1&&(C.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=X.attributes,k=V.getAttributes(),J=H.defaultAttributeValues;for(const Q in k){const oe=k[Q];if(oe.location>=0){let B=W[Q];if(B===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){const j=B.normalized,ue=B.itemSize,pe=t.get(B);if(pe===void 0)continue;const fe=pe.buffer,Ae=pe.type,we=pe.bytesPerElement,ye=r.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||B.gpuType===Bs);if(B.isInterleavedBufferAttribute){const ze=B.data,N=ze.stride,ht=B.offset;if(ze.isInstancedInterleavedBuffer){for(let _e=0;_e<oe.locationSize;_e++)P(oe.location+_e,ze.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let _e=0;_e<oe.locationSize;_e++)w(oe.location+_e);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let _e=0;_e<oe.locationSize;_e++)A(oe.location+_e,ue/oe.locationSize,Ae,j,N*we,(ht+ue/oe.locationSize*_e)*we,ye)}else{if(B.isInstancedBufferAttribute){for(let ze=0;ze<oe.locationSize;ze++)P(oe.location+ze,B.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ze=0;ze<oe.locationSize;ze++)w(oe.location+ze);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ze=0;ze<oe.locationSize;ze++)A(oe.location+ze,ue/oe.locationSize,Ae,j,ue*we,ue/oe.locationSize*ze*we,ye)}}else if(J!==void 0){const j=J[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(oe.location,j);break;case 3:i.vertexAttrib3fv(oe.location,j);break;case 4:i.vertexAttrib4fv(oe.location,j);break;default:i.vertexAttrib1fv(oe.location,j)}}}}R()}function y(){G();for(const C in s){const H=s[C];for(const V in H){const X=H[V];for(const W in X)_(X[W].object),delete X[W];delete H[V]}delete s[C]}}function E(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const V in H){const X=H[V];for(const W in X)_(X[W].object),delete X[W];delete H[V]}delete s[C.id]}function z(C){for(const H in s){const V=s[H];if(V[C.id]===void 0)continue;const X=V[C.id];for(const W in X)_(X[W].object),delete X[W];delete V[C.id]}}function G(){ae(),u=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:ae,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function Lh(i,e,t,r){const n=r.isWebGL2;let a;function o(u){a=u}function s(u,f){i.drawArrays(a,u,f),t.update(f,a,1)}function l(u,f,d){if(d===0)return;let m,_;if(n)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,u,f,d),t.update(f,a,d)}function c(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{m.multiDrawArraysWEBGL(a,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Ph(i,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=o||e.has("OES_texture_float"),P=x&&w,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:R}}function Uh(i){const e=this;let t=null,r=0,n=!1,a=!1;const o=new pr,s=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||r!==0||n;return n=d,r=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!n||_===null||_.length===0||a&&!p)a?u(null):c();else{const T=a?0:r,x=T*4;let w=h.clippingState||null;l.value=w,w=u(_,d,x,m);for(let P=0;P!==x;++P)w[P]=t[P];h.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,T=d.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,w=m;x!==g;++x,w+=4)o.copy(f[x]).applyMatrix4(T,s),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Dh(i){let e=new WeakMap;function t(o,s){return s===Hn?o.mapping=Xr:s===zn&&(o.mapping=jr),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===Hn||s===zn)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xl(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Ih extends io{constructor(e=-1,t=1,r=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,ns=[.125,.215,.35,.446,.526,.582],_r=20,Cn=new Ih,as=new He;let Ln=null,Pn=0,Un=0;const mr=(1+Math.sqrt(5))/2,Hr=1/mr,ss=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,mr,Hr),new U(0,mr,-Hr),new U(Hr,0,mr),new U(-Hr,0,mr),new U(mr,Hr,0),new U(-mr,Hr,0)];class os{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ln=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ln,Pn,Un),e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ln=this._renderer.getRenderTarget(),Pn=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:At,minFilter:At,generateMipmaps:!1,type:oi,format:Nt,colorSpace:Kt,depthBuffer:!1},n=ls(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ls(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nh(a)),this._blurMaterial=Oh(a,e,t)}return n}_compileMaterial(e){const t=new ir(this._lodPlanes[0],e);this._renderer.compile(t,Cn)}_sceneToCubeUV(e,t,r,n){const a=new wt(90,1,t,r),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(as),l.toneMapping=ar,l.autoClear=!1;const f=new Qs({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),d=new ir(new di,f);let m=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,m=!0):(f.color.copy(as),m=!0);for(let g=0;g<6;g++){const p=g%3;p===0?(a.up.set(0,o[g],0),a.lookAt(s[g],0,0)):p===1?(a.up.set(0,0,o[g]),a.lookAt(0,s[g],0)):(a.up.set(0,o[g],0),a.lookAt(0,0,s[g]));const h=this._cubeSize;Oi(n,p*h,g>2?h:0,h,h),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Xr||e.mapping===jr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cs());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new ir(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Oi(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,Cn)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=ss[(n-1)%ss.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",a),this._halfBlur(o,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ir(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*_r-1),g=a/_,p=isFinite(a)?1+Math.floor(u*g):_r;p>_r&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const h=[];let T=0;for(let A=0;A<_r;++A){const q=A/g,y=Math.exp(-q*q/2);h.push(y),A===0?T+=y:A<p&&(T+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-r;const w=this._sizeLods[n],P=3*w*(n>x-Gr?n-x+Gr:0),R=4*(this._cubeSize-w);Oi(t,P,R,3*w,2*w),l.setRenderTarget(t),l.render(f,Cn)}}function Nh(i){const e=[],t=[],r=[];let n=i;const a=i-Gr+1+ns.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>i-Gr?l=ns[o-i+Gr-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,T=new Float32Array(g*_*m),x=new Float32Array(p*_*m),w=new Float32Array(h*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,q=R>2?0:-1,y=[A,q,0,A+2/3,q,0,A+2/3,q+1,0,A,q,0,A+2/3,q+1,0,A,q+1,0];T.set(y,g*_*R),x.set(d,p*_*R);const E=[R,R,R,R,R,R];w.set(E,h*_*R)}const P=new Ft;P.setAttribute("position",new Ct(T,g)),P.setAttribute("uv",new Ct(x,p)),P.setAttribute("faceIndex",new Ct(w,h)),e.push(P),n>Gr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ls(i,e,t){const r=new Sr(i,e,t);return r.texture.mapping=Yi,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oi(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function Oh(i,e,t){const r=new Float32Array(_r),n=new U(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function cs(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function us(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Qn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fh(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===Hn||l===zn,u=l===Xr||l===jr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new os(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new os(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Bh(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Hh(i,e,t,r){const n={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let x=0,w=T.length;x<w;x+=3){const P=T[x+0],R=T[x+1],A=T[x+2];d.push(P,R,R,A,A,P)}}else if(_!==void 0){const T=_.array;g=_.version;for(let x=0,w=T.length/3-1;x<w;x+=3){const P=x+0,R=x+1,A=x+2;d.push(P,R,R,A,A,P)}}else return;const p=new(qs(d)?to:eo)(d,1);p.version=g;const h=a.get(f);h&&e.remove(h),a.set(f,p)}function u(f){const d=a.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function zh(i,e,t,r){const n=r.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(a,_,s,m*l),t.update(_,a,1)}function f(m,_,g){if(g===0)return;let p,h;if(n)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](a,_,s,m*l,g),t.update(_,a,g)}function d(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<g;h++)this.render(m[h]/l,_[h]);else{p.multiDrawElementsWEBGL(a,_,0,s,m,0,g);let h=0;for(let T=0;T<g;T++)h+=_[T];t.update(h,a,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function Gh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Vh(i,e){return i[0]-e[0]}function kh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wh(i,e,t){const r={},n=new Float32Array(8),a=new WeakMap,o=new st,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=a.get(u);if(g===void 0||g.count!==_){let T=function(){ae.dispose(),a.delete(u),u.removeEventListener("dispose",T)};g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),w===!0&&(y=2),P===!0&&(y=3);let E=u.attributes.position.count*y,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*z*4*_),ae=new Zs(G,E,z,_);ae.type=rr,ae.needsUpdate=!0;const C=y*4;for(let H=0;H<_;H++){const V=R[H],X=A[H],W=q[H],k=E*z*4*H;for(let J=0;J<V.count;J++){const Q=J*C;x===!0&&(o.fromBufferAttribute(V,J),G[k+Q+0]=o.x,G[k+Q+1]=o.y,G[k+Q+2]=o.z,G[k+Q+3]=0),w===!0&&(o.fromBufferAttribute(X,J),G[k+Q+4]=o.x,G[k+Q+5]=o.y,G[k+Q+6]=o.z,G[k+Q+7]=0),P===!0&&(o.fromBufferAttribute(W,J),G[k+Q+8]=o.x,G[k+Q+9]=o.y,G[k+Q+10]=o.z,G[k+Q+11]=W.itemSize===4?o.w:1)}}g={count:_,texture:ae,size:new We(E,z)},a.set(u,g),u.addEventListener("dispose",T)}let p=0;for(let T=0;T<d.length;T++)p+=d[T];const h=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",h),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let _=r[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];r[u.id]=_}for(let x=0;x<m;x++){const w=_[x];w[0]=x,w[1]=d[x]}_.sort(kh);for(let x=0;x<8;x++)x<m&&_[x][1]?(s[x][0]=_[x][0],s[x][1]=_[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Vh);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const w=s[x],P=w[0],R=w[1];P!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+x)!==g[P]&&u.setAttribute("morphTarget"+x,g[P]),p&&u.getAttribute("morphNormal"+x)!==p[P]&&u.setAttribute("morphNormal"+x,p[P]),n[x]=R,h+=R):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const T=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:l}}function Xh(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class oo extends yt{constructor(e,t,r,n,a,o,s,l,c,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Mr&&(r=tr),r===void 0&&u===qr&&(r=xr),super(null,n,a,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lo=new yt,co=new oo(1,1);co.compareFunction=js;const uo=new Zs,ho=new Rl,fo=new no,hs=[],ds=[],fs=new Float32Array(16),ps=new Float32Array(9),ms=new Float32Array(4);function Jr(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=hs[n];if(a===void 0&&(a=new Float32Array(n),hs[n]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function rt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function it(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ji(i,e){let t=ds[e];t===void 0&&(t=new Int32Array(e),ds[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2fv(this.addr,e),it(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;i.uniform3fv(this.addr,e),it(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4fv(this.addr,e),it(t,e)}}function Zh(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(rt(t,r))return;ms.set(r),i.uniformMatrix2fv(this.addr,!1,ms),it(t,r)}}function Jh(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(rt(t,r))return;ps.set(r),i.uniformMatrix3fv(this.addr,!1,ps),it(t,r)}}function $h(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(rt(t,r))return;fs.set(r),i.uniformMatrix4fv(this.addr,!1,fs),it(t,r)}}function Qh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2iv(this.addr,e),it(t,e)}}function td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3iv(this.addr,e),it(t,e)}}function rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4iv(this.addr,e),it(t,e)}}function id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2uiv(this.addr,e),it(t,e)}}function ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3uiv(this.addr,e),it(t,e)}}function sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4uiv(this.addr,e),it(t,e)}}function od(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);const a=this.type===i.SAMPLER_2D_SHADOW?co:lo;t.setTexture2D(e||a,n)}function ld(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ho,n)}function cd(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||fo,n)}function ud(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||uo,n)}function hd(i){switch(i){case 5126:return jh;case 35664:return qh;case 35665:return Yh;case 35666:return Kh;case 35674:return Zh;case 35675:return Jh;case 35676:return $h;case 5124:case 35670:return Qh;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return rd;case 5125:return id;case 36294:return nd;case 36295:return ad;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ud}}function dd(i,e){i.uniform1fv(this.addr,e)}function fd(i,e){const t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function pd(i,e){const t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function md(i,e){const t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function gd(i,e){const t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _d(i,e){const t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vd(i,e){const t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xd(i,e){i.uniform1iv(this.addr,e)}function Md(i,e){i.uniform2iv(this.addr,e)}function yd(i,e){i.uniform3iv(this.addr,e)}function Sd(i,e){i.uniform4iv(this.addr,e)}function Ed(i,e){i.uniform1uiv(this.addr,e)}function Td(i,e){i.uniform2uiv(this.addr,e)}function bd(i,e){i.uniform3uiv(this.addr,e)}function Ad(i,e){i.uniform4uiv(this.addr,e)}function wd(i,e,t){const r=this.cache,n=e.length,a=Ji(t,n);rt(r,a)||(i.uniform1iv(this.addr,a),it(r,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||lo,a[o])}function Rd(i,e,t){const r=this.cache,n=e.length,a=Ji(t,n);rt(r,a)||(i.uniform1iv(this.addr,a),it(r,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||ho,a[o])}function Cd(i,e,t){const r=this.cache,n=e.length,a=Ji(t,n);rt(r,a)||(i.uniform1iv(this.addr,a),it(r,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||fo,a[o])}function Ld(i,e,t){const r=this.cache,n=e.length,a=Ji(t,n);rt(r,a)||(i.uniform1iv(this.addr,a),it(r,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||uo,a[o])}function Pd(i){switch(i){case 5126:return dd;case 35664:return fd;case 35665:return pd;case 35666:return md;case 35674:return gd;case 35675:return _d;case 35676:return vd;case 5124:case 35670:return xd;case 35667:case 35671:return Md;case 35668:case 35672:return yd;case 35669:case 35673:return Sd;case 5125:return Ed;case 36294:return Td;case 36295:return bd;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Rd;case 35680:case 36300:case 36308:case 36293:return Cd;case 36289:case 36303:case 36311:case 36292:return Ld}}class Ud{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hd(t.type)}}class Dd{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pd(t.type)}}class Id{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],r)}}}const Dn=/(\w+)(\])?(\[|\.)?/g;function gs(i,e){i.seq.push(e),i.map[e.id]=e}function Nd(i,e,t){const r=i.name,n=r.length;for(Dn.lastIndex=0;;){const a=Dn.exec(r),o=Dn.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){gs(t,c===void 0?new Ud(s,i,e):new Dd(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new Id(s),gs(t,u)),t=u}}}class Gi{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);Nd(a,o,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function _s(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Od=37297;let Fd=0;function Bd(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function Hd(i){const e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(i);let r;switch(e===t?r="":e===Xi&&t===Wi?r="LinearDisplayP3ToLinearSRGB":e===Wi&&t===Xi&&(r="LinearSRGBToLinearDisplayP3"),i){case Kt:case Ki:return[r,"LinearTransferOETF"];case at:case Zn:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function vs(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Bd(i.getShaderSource(e),o)}else return n}function zd(i,e){const t=Hd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gd(i,e){let t;switch(e){case Zo:t="Linear";break;case Jo:t="Reinhard";break;case $o:t="OptimizedCineon";break;case Qo:t="ACESFilmic";break;case tl:t="AgX";break;case el:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function kd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vr).join(`
`)}function Wd(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Xd(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Vr(i){return i!==""}function xs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ms(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function jn(i){return i.replace(jd,Yd)}const qd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yd(i,e){let t=Ce[e];if(t===void 0){const r=qd.get(e);if(r!==void 0)t=Ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jn(t)}const Kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ys(i){return i.replace(Kd,Zd)}function Zd(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Ss(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ns?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===To?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function $d(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xr:case jr:e="ENVMAP_TYPE_CUBE";break;case Yi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function ef(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Os:e="ENVMAP_BLENDING_MULTIPLY";break;case Yo:e="ENVMAP_BLENDING_MIX";break;case Ko:e="ENVMAP_BLENDING_ADD";break}return e}function tf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function rf(i,e,t,r){const n=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Jd(t),c=$d(t),u=Qd(t),f=ef(t),d=tf(t),m=t.isWebGL2?"":Vd(t),_=kd(t),g=Wd(a),p=n.createProgram();let h,T,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),h.length>0&&(h+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),T.length>0&&(T+=`
`)):(h=[Ss(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),T=[m,Ss(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ar?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,zd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=jn(o),o=xs(o,t),o=Ms(o,t),s=jn(s),s=xs(s,t),s=Ms(s,t),o=ys(o),s=ys(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const w=x+h+o,P=x+T+s,R=_s(n,n.VERTEX_SHADER,w),A=_s(n,n.FRAGMENT_SHADER,P);n.attachShader(p,R),n.attachShader(p,A),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function q(G){if(i.debug.checkShaderErrors){const ae=n.getProgramInfoLog(p).trim(),C=n.getShaderInfoLog(R).trim(),H=n.getShaderInfoLog(A).trim();let V=!0,X=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,p,R,A);else{const W=vs(n,R,"vertex"),k=vs(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+W+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(C===""||H==="")&&(X=!1);X&&(G.diagnostics={runnable:V,programLog:ae,vertexShader:{log:C,prefix:h},fragmentShader:{log:H,prefix:T}})}n.deleteShader(R),n.deleteShader(A),y=new Gi(n,p),E=Xd(n,p)}let y;this.getUniforms=function(){return y===void 0&&q(this),y};let E;this.getAttributes=function(){return E===void 0&&q(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(p,Od)),z},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let nf=0;class af{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new sf(e),t.set(e,r)),r}}class sf{constructor(e){this.id=nf++,this.code=e,this.usedTimes=0}}function of(i,e,t,r,n,a,o){const s=new Js,l=new af,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,E,z,G,ae){const C=G.fog,H=ae.geometry,V=y.isMeshStandardMaterial?G.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),W=X&&X.mapping===Yi?X.image.height:null,k=_[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Q=J!==void 0?J.length:0;let oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let B,j,ue,pe;if(k){const $e=Ht[k];B=$e.vertexShader,j=$e.fragmentShader}else B=y.vertexShader,j=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const fe=i.getRenderTarget(),Ae=ae.isInstancedMesh===!0,we=ae.isBatchedMesh===!0,ye=!!y.map,ze=!!y.matcap,N=!!X,ht=!!y.aoMap,_e=!!y.lightMap,Te=!!y.bumpMap,he=!!y.normalMap,Ke=!!y.displacementMap,Le=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,I=y.anisotropy>0,$=y.clearcoat>0,K=y.iridescence>0,Z=y.sheen>0,de=y.transmission>0,ne=I&&!!y.anisotropyMap,le=$&&!!y.clearcoatMap,xe=$&&!!y.clearcoatNormalMap,Pe=$&&!!y.clearcoatRoughnessMap,Y=K&&!!y.iridescenceMap,Ve=K&&!!y.iridescenceThicknessMap,Fe=Z&&!!y.sheenColorMap,Ee=Z&&!!y.sheenRoughnessMap,ge=!!y.specularMap,ce=!!y.specularColorMap,Re=!!y.specularIntensityMap,Ge=de&&!!y.transmissionMap,Ze=de&&!!y.thicknessMap,Ie=!!y.gradientMap,ee=!!y.alphaMap,b=y.alphaTest>0,te=!!y.alphaHash,se=!!y.extensions,be=!!H.attributes.uv1,ve=!!H.attributes.uv2,Xe=!!H.attributes.uv3;let je=ar;return y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:u,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:j,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:we,instancing:Ae,instancingColor:Ae&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Kt,map:ye,matcap:ze,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:W,aoMap:ht,lightMap:_e,bumpMap:Te,normalMap:he,displacementMap:d&&Ke,emissiveMap:Le,normalMapObjectSpace:he&&y.normalMapType===pl,normalMapTangentSpace:he&&y.normalMapType===fl,metalnessMap:S,roughnessMap:v,anisotropy:I,anisotropyMap:ne,clearcoat:$,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,iridescence:K,iridescenceMap:Y,iridescenceThicknessMap:Ve,sheen:Z,sheenColorMap:Fe,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:ce,specularIntensityMap:Re,transmission:de,transmissionMap:Ge,thicknessMap:Ze,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===kr,alphaMap:ee,alphaTest:b,alphaHash:te,combine:y.combine,mapUv:ye&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:_e&&g(y.lightMap.channel),bumpMapUv:Te&&g(y.bumpMap.channel),normalMapUv:he&&g(y.normalMap.channel),displacementMapUv:Ke&&g(y.displacementMap.channel),emissiveMapUv:Le&&g(y.emissiveMap.channel),metalnessMapUv:S&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:ne&&g(y.anisotropyMap.channel),clearcoatMapUv:le&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:ce&&g(y.specularColorMap.channel),specularIntensityMapUv:Re&&g(y.specularIntensityMap.channel),transmissionMapUv:Ge&&g(y.transmissionMap.channel),thicknessMapUv:Ze&&g(y.thicknessMap.channel),alphaMapUv:ee&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ve,vertexUv3s:Xe,pointsUvs:ae.isPoints===!0&&!!H.attributes.uv&&(ye||ee),fog:!!C,useFog:y.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&ke.getTransfer(y.map.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)E.push(z),E.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(T(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),y.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),y.push(s.mask)}function w(y){const E=_[y.type];let z;if(E){const G=Ht[E];z=Gl.clone(G.uniforms)}else z=y.uniforms;return z}function P(y,E){let z;for(let G=0,ae=c.length;G<ae;G++){const C=c[G];if(C.cacheKey===E){z=C,++z.usedTimes;break}}return z===void 0&&(z=new rf(i,E,y,a),c.push(z)),z}function R(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:q}}function lf(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function r(a,o,s){i.get(a)[o]=s}function n(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Es(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ts(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function o(f,d,m,_,g,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function s(f,d,m,_,g,p){const h=o(f,d,m,_,g,p);m.transmission>0?r.push(h):m.transparent===!0?n.push(h):t.push(h)}function l(f,d,m,_,g,p){const h=o(f,d,m,_,g,p);m.transmission>0?r.unshift(h):m.transparent===!0?n.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||cf),r.length>1&&r.sort(d||Es),n.length>1&&n.sort(d||Es)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:s,unshift:l,finish:u,sort:c}}function uf(){let i=new WeakMap;function e(r,n){const a=i.get(r);let o;return a===void 0?(o=new Ts,i.set(r,[o])):n>=a.length?(o=new Ts,a.push(o)):o=a[n],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function df(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ff=0;function pf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mf(i,e){const t=new hf,r=df(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const a=new U,o=new tt,s=new tt;function l(u,f){let d=0,m=0,_=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,p=0,h=0,T=0,x=0,w=0,P=0,R=0,A=0,q=0,y=0;u.sort(pf);const E=f===!0?Math.PI:1;for(let G=0,ae=u.length;G<ae;G++){const C=u[G],H=C.color,V=C.intensity,X=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*V*E,m+=H.g*V*E,_+=H.b*V*E;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],V);y++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const J=C.shadow,Q=r.get(C);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=k,g++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(H).multiplyScalar(V*E),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[h]=k;const J=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&q++),n.spotLightMatrix[h]=J.matrix,C.castShadow){const Q=r.get(C);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[h]=Q,n.spotShadowMap[h]=W,R++}h++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(H).multiplyScalar(V),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=k,T++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*E),k.distance=C.distance,k.decay=C.decay,C.castShadow){const J=C.shadow,Q=r.get(C);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=C.shadow.matrix,P++}n.point[p]=k,p++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(V*E),k.groundColor.copy(C.groundColor).multiplyScalar(V*E),n.hemi[x]=k,x++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const z=n.hash;(z.directionalLength!==g||z.pointLength!==p||z.spotLength!==h||z.rectAreaLength!==T||z.hemiLength!==x||z.numDirectionalShadows!==w||z.numPointShadows!==P||z.numSpotShadows!==R||z.numSpotMaps!==A||z.numLightProbes!==y)&&(n.directional.length=g,n.spot.length=h,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=R+A-q,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=q,n.numLightProbes=y,z.directionalLength=g,z.pointLength=p,z.spotLength=h,z.rectAreaLength=T,z.hemiLength=x,z.numDirectionalShadows=w,z.numPointShadows=P,z.numSpotShadows=R,z.numSpotMaps=A,z.numLightProbes=y,n.version=ff++)}function c(u,f){let d=0,m=0,_=0,g=0,p=0;const h=f.matrixWorldInverse;for(let T=0,x=u.length;T<x;T++){const w=u[T];if(w.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(h),d++}else if(w.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(h),_++}else if(w.isRectAreaLight){const P=n.rectArea[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),s.identity(),o.copy(w.matrixWorld),o.premultiply(h),s.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(s),P.halfHeight.applyMatrix4(s),g++}else if(w.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),m++}else if(w.isHemisphereLight){const P=n.hemi[p];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:n}}function bs(i,e){const t=new mf(i,e),r=[],n=[];function a(){r.length=0,n.length=0}function o(u){r.push(u)}function s(u){n.push(u)}function l(u){t.setup(r,u)}function c(u){t.setupView(r,u)}return{init:a,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function gf(i,e){let t=new WeakMap;function r(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new bs(i,e),t.set(a,[l])):o>=s.length?(l=new bs(i,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class _f extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vf extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yf(i,e,t){let r=new ao;const n=new We,a=new We,o=new st,s=new _f({depthPacking:dl}),l=new vf,c={},u=t.maxTextureSize,f={[or]:vt,[vt]:or,[qt]:qt},d=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:xf,fragmentShader:Mf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ir(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let h=this.type;this.render=function(R,A,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),G=i.state;G.setBlending(nr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ae=h!==jt&&this.type===jt,C=h===jt&&this.type!==jt;for(let H=0,V=R.length;H<V;H++){const X=R[H],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const k=W.getFrameExtents();if(n.multiply(k),a.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/k.x),n.x=a.x*k.x,W.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/k.y),n.y=a.y*k.y,W.mapSize.y=a.y)),W.map===null||ae===!0||C===!0){const Q=this.type!==jt?{minFilter:pt,magFilter:pt}:{};W.map!==null&&W.map.dispose(),W.map=new Sr(n.x,n.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const J=W.getViewportCount();for(let Q=0;Q<J;Q++){const oe=W.getViewport(Q);o.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),G.viewport(o),W.updateMatrices(X,Q),r=W.getFrustum(),w(A,q,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===jt&&T(W,q),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(y,E,z)};function T(R,A){const q=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sr(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,q,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,q,m,g,null)}function x(R,A,q,y){let E=null;const z=q.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)E=z;else if(E=q.isPointLight===!0?l:s,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,ae=A.uuid;let C=c[G];C===void 0&&(C={},c[G]=C);let H=C[ae];H===void 0&&(H=E.clone(),C[ae]=H,A.addEventListener("dispose",P)),E=H}if(E.visible=A.visible,E.wireframe=A.wireframe,y===jt?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=q}return E}function w(R,A,q,y,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===jt)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld);const G=e.update(R),ae=R.material;if(Array.isArray(ae)){const C=G.groups;for(let H=0,V=C.length;H<V;H++){const X=C[H],W=ae[X.materialIndex];if(W&&W.visible){const k=x(R,W,y,E);R.onBeforeShadow(i,R,A,q,G,k,X),i.renderBufferDirect(q,null,G,k,R,X),R.onAfterShadow(i,R,A,q,G,k,X)}}}else if(ae.visible){const C=x(R,ae,y,E);R.onBeforeShadow(i,R,A,q,G,C,null),i.renderBufferDirect(q,null,G,C,R,null),R.onAfterShadow(i,R,A,q,G,C,null)}}const z=R.children;for(let G=0,ae=z.length;G<ae;G++)w(z[G],A,q,y,E)}function P(R){R.target.removeEventListener("dispose",P);for(const A in c){const q=c[A],y=R.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}function Sf(i,e,t){const r=t.isWebGL2;function n(){let b=!1;const te=new st;let se=null;const be=new st(0,0,0,0);return{setMask:function(ve){se!==ve&&!b&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){b=ve},setClear:function(ve,Xe,je,$e,St){St===!0&&(ve*=$e,Xe*=$e,je*=$e),te.set(ve,Xe,je,$e),be.equals(te)===!1&&(i.clearColor(ve,Xe,je,$e),be.copy(te))},reset:function(){b=!1,se=null,be.set(-1,0,0,0)}}}function a(){let b=!1,te=null,se=null,be=null;return{setTest:function(ve){ve?we(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ve){te!==ve&&!b&&(i.depthMask(ve),te=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Go:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){b=ve},setClear:function(ve){be!==ve&&(i.clearDepth(ve),be=ve)},reset:function(){b=!1,te=null,se=null,be=null}}}function o(){let b=!1,te=null,se=null,be=null,ve=null,Xe=null,je=null,$e=null,St=null;return{setTest:function(qe){b||(qe?we(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(qe){te!==qe&&!b&&(i.stencilMask(qe),te=qe)},setFunc:function(qe,dt,Bt){(se!==qe||be!==dt||ve!==Bt)&&(i.stencilFunc(qe,dt,Bt),se=qe,be=dt,ve=Bt)},setOp:function(qe,dt,Bt){(Xe!==qe||je!==dt||$e!==Bt)&&(i.stencilOp(qe,dt,Bt),Xe=qe,je=dt,$e=Bt)},setLocked:function(qe){b=qe},setClear:function(qe){St!==qe&&(i.clearStencil(qe),St=qe)},reset:function(){b=!1,te=null,se=null,be=null,ve=null,Xe=null,je=null,$e=null,St=null}}}const s=new n,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,h=!1,T=null,x=null,w=null,P=null,R=null,A=null,q=null,y=new He(0,0,0),E=0,z=!1,G=null,ae=null,C=null,H=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=k>=2);let Q=null,oe={};const B=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ue=new st().fromArray(B),pe=new st().fromArray(j);function fe(b,te,se,be){const ve=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(b,Xe),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<se;je++)r&&(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(te+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ae[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(i.DEPTH_TEST),l.setFunc(Vi),Le(!1),S(sa),we(i.CULL_FACE),he(nr);function we(b){d[b]!==!0&&(i.enable(b),d[b]=!0)}function ye(b){d[b]!==!1&&(i.disable(b),d[b]=!1)}function ze(b,te){return m[b]!==te?(i.bindFramebuffer(b,te),m[b]=te,r&&(b===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=te),b===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function N(b,te){let se=g,be=!1;if(b)if(se=_.get(te),se===void 0&&(se=[],_.set(te,se)),b.isWebGLMultipleRenderTargets){const ve=b.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,je=ve.length;Xe<je;Xe++)se[Xe]=i.COLOR_ATTACHMENT0+Xe;se.length=ve.length,be=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,be=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function ht(b){return p!==b?(i.useProgram(b),p=b,!0):!1}const _e={[gr]:i.FUNC_ADD,[Ao]:i.FUNC_SUBTRACT,[wo]:i.FUNC_REVERSE_SUBTRACT};if(r)_e[ua]=i.MIN,_e[ha]=i.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(_e[ua]=b.MIN_EXT,_e[ha]=b.MAX_EXT)}const Te={[Ro]:i.ZERO,[Co]:i.ONE,[Lo]:i.SRC_COLOR,[Fn]:i.SRC_ALPHA,[Oo]:i.SRC_ALPHA_SATURATE,[Io]:i.DST_COLOR,[Uo]:i.DST_ALPHA,[Po]:i.ONE_MINUS_SRC_COLOR,[Bn]:i.ONE_MINUS_SRC_ALPHA,[No]:i.ONE_MINUS_DST_COLOR,[Do]:i.ONE_MINUS_DST_ALPHA,[Fo]:i.CONSTANT_COLOR,[Bo]:i.ONE_MINUS_CONSTANT_COLOR,[Ho]:i.CONSTANT_ALPHA,[zo]:i.ONE_MINUS_CONSTANT_ALPHA};function he(b,te,se,be,ve,Xe,je,$e,St,qe){if(b===nr){h===!0&&(ye(i.BLEND),h=!1);return}if(h===!1&&(we(i.BLEND),h=!0),b!==bo){if(b!==T||qe!==z){if((x!==gr||R!==gr)&&(i.blendEquation(i.FUNC_ADD),x=gr,R=gr),qe)switch(b){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,P=null,A=null,q=null,y.set(0,0,0),E=0,T=b,z=qe}return}ve=ve||te,Xe=Xe||se,je=je||be,(te!==x||ve!==R)&&(i.blendEquationSeparate(_e[te],_e[ve]),x=te,R=ve),(se!==w||be!==P||Xe!==A||je!==q)&&(i.blendFuncSeparate(Te[se],Te[be],Te[Xe],Te[je]),w=se,P=be,A=Xe,q=je),($e.equals(y)===!1||St!==E)&&(i.blendColor($e.r,$e.g,$e.b,St),y.copy($e),E=St),T=b,z=!1}function Ke(b,te){b.side===qt?ye(i.CULL_FACE):we(i.CULL_FACE);let se=b.side===vt;te&&(se=!se),Le(se),b.blending===kr&&b.transparent===!1?he(nr):he(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),s.setMask(b.colorWrite);const be=b.stencilWrite;c.setTest(be),be&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),I(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(b){G!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),G=b)}function S(b){b!==So?(we(i.CULL_FACE),b!==ae&&(b===sa?i.cullFace(i.BACK):b===Eo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),ae=b}function v(b){b!==C&&(W&&i.lineWidth(b),C=b)}function I(b,te,se){b?(we(i.POLYGON_OFFSET_FILL),(H!==te||V!==se)&&(i.polygonOffset(te,se),H=te,V=se)):ye(i.POLYGON_OFFSET_FILL)}function $(b){b?we(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function K(b){b===void 0&&(b=i.TEXTURE0+X-1),Q!==b&&(i.activeTexture(b),Q=b)}function Z(b,te,se){se===void 0&&(Q===null?se=i.TEXTURE0+X-1:se=Q);let be=oe[se];be===void 0&&(be={type:void 0,texture:void 0},oe[se]=be),(be.type!==b||be.texture!==te)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(b,te||Ae[b]),be.type=b,be.texture=te)}function de(){const b=oe[Q];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(b){ue.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),ue.copy(b))}function Ge(b){pe.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),pe.copy(b))}function Ze(b,te){let se=f.get(te);se===void 0&&(se=new WeakMap,f.set(te,se));let be=se.get(b);be===void 0&&(be=i.getUniformBlockIndex(te,b.name),se.set(b,be))}function Ie(b,te){const se=f.get(te).get(b);u.get(te)!==se&&(i.uniformBlockBinding(te,se,b.__bindingPointIndex),u.set(te,se))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,oe={},m={},_=new WeakMap,g=[],p=null,h=!1,T=null,x=null,w=null,P=null,R=null,A=null,q=null,y=new He(0,0,0),E=0,z=!1,G=null,ae=null,C=null,H=null,V=null,ue.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:we,disable:ye,bindFramebuffer:ze,drawBuffers:N,useProgram:ht,setBlending:he,setMaterial:Ke,setFlipSided:Le,setCullFace:S,setLineWidth:v,setPolygonOffset:I,setScissorTest:$,activeTexture:K,bindTexture:Z,unbindTexture:de,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:ge,texImage3D:ce,updateUBOMapping:Ze,uniformBlockBinding:Ie,texStorage2D:Fe,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Pe,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ve,scissor:Re,viewport:Ge,reset:ee}}function Ef(i,e,t,r,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):qi("canvas")}function g(S,v,I,$){let K=1;if((S.width>$||S.height>$)&&(K=$/Math.max(S.width,S.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const Z=v?Xn:Math.floor,de=Z(K*S.width),ne=Z(K*S.height);f===void 0&&(f=_(de,ne));const le=I?_(de,ne):f;return le.width=de,le.height=ne,le.getContext("2d").drawImage(S,0,0,de,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+de+"x"+ne+")."),le}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Ga(S.width)&&Ga(S.height)}function h(S){return s?!1:S.wrapS!==It||S.wrapT!==It||S.minFilter!==pt&&S.minFilter!==At}function T(S,v){return S.generateMipmaps&&v&&S.minFilter!==pt&&S.minFilter!==At}function x(S){i.generateMipmap(S)}function w(S,v,I,$,K=!1){if(s===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=v;if(v===i.RED&&(I===i.FLOAT&&(Z=i.R32F),I===i.HALF_FLOAT&&(Z=i.R16F),I===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.R8UI),I===i.UNSIGNED_SHORT&&(Z=i.R16UI),I===i.UNSIGNED_INT&&(Z=i.R32UI),I===i.BYTE&&(Z=i.R8I),I===i.SHORT&&(Z=i.R16I),I===i.INT&&(Z=i.R32I)),v===i.RG&&(I===i.FLOAT&&(Z=i.RG32F),I===i.HALF_FLOAT&&(Z=i.RG16F),I===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RGBA){const de=K?ki:ke.getTransfer($);I===i.FLOAT&&(Z=i.RGBA32F),I===i.HALF_FLOAT&&(Z=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Z=de===Ye?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function P(S,v,I){return T(S,I)===!0||S.isFramebufferTexture&&S.minFilter!==pt&&S.minFilter!==At?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){return S===pt||S===da||S===nn?i.NEAREST:i.LINEAR}function A(S){const v=S.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&u.delete(v)}function q(S){const v=S.target;v.removeEventListener("dispose",q),z(v)}function y(S){const v=r.get(S);if(v.__webglInit===void 0)return;const I=S.source,$=d.get(I);if($){const K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys($).length===0&&d.delete(I)}r.remove(S)}function E(S){const v=r.get(S);i.deleteTexture(v.__webglTexture);const I=S.source,$=d.get(I);delete $[v.__cacheKey],o.memory.textures--}function z(S){const v=S.texture,I=r.get(S),$=r.get(v);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(I.__webglFramebuffer[K]))for(let Z=0;Z<I.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(I.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(I.__webglFramebuffer[K]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[K])}else{if(Array.isArray(I.__webglFramebuffer))for(let K=0;K<I.__webglFramebuffer.length;K++)i.deleteFramebuffer(I.__webglFramebuffer[K]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let K=0;K<I.__webglColorRenderbuffer.length;K++)I.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[K]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,Z=v.length;K<Z;K++){const de=r.get(v[K]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),r.remove(v[K])}r.remove(v),r.remove(S)}let G=0;function ae(){G=0}function C(){const S=G;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),G+=1,S}function H(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){const I=r.get(S);if(S.isVideoTexture&&Ke(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(I,S,v);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function X(S,v){const I=r.get(S);if(S.version>0&&I.__version!==S.version){ue(I,S,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function W(S,v){const I=r.get(S);if(S.version>0&&I.__version!==S.version){ue(I,S,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function k(S,v){const I=r.get(S);if(S.version>0&&I.__version!==S.version){pe(I,S,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}const J={[Gn]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[Vn]:i.MIRRORED_REPEAT},Q={[pt]:i.NEAREST,[da]:i.NEAREST_MIPMAP_NEAREST,[nn]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},oe={[ml]:i.NEVER,[yl]:i.ALWAYS,[gl]:i.LESS,[js]:i.LEQUAL,[_l]:i.EQUAL,[Ml]:i.GEQUAL,[vl]:i.GREATER,[xl]:i.NOTEQUAL};function B(S,v,I){if(I?(i.texParameteri(S,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,J[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Q[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==It||v.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==pt&&v.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===pt||v.minFilter!==nn&&v.minFilter!==si||v.type===rr&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===oi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||r.get(v).__currentAnisotropy)&&(i.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy)}}function j(S,v){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const Z=H(v);if(Z!==S.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[Z].usedTimes++;const de=K[S.__cacheKey];de!==void 0&&(K[S.__cacheKey].usedTimes--,de.usedTimes===0&&E(v)),S.__cacheKey=Z,S.__webglTexture=K[Z].texture}return I}function ue(S,v,I){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const K=j(S,v),Z=v.source;t.bindTexture($,S.__webglTexture,i.TEXTURE0+I);const de=r.get(Z);if(Z.version!==de.__version||K===!0){t.activeTexture(i.TEXTURE0+I);const ne=ke.getPrimaries(ke.workingColorSpace),le=v.colorSpace===Rt?null:ke.getPrimaries(v.colorSpace),xe=v.colorSpace===Rt||ne===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=h(v)&&p(v.image)===!1;let Y=g(v.image,Pe,!1,n.maxTextureSize);Y=Le(v,Y);const Ve=p(Y)||s,Fe=a.convert(v.format,v.colorSpace);let Ee=a.convert(v.type),ge=w(v.internalFormat,Fe,Ee,v.colorSpace,v.isVideoTexture);B($,v,Ve);let ce;const Re=v.mipmaps,Ge=s&&v.isVideoTexture!==!0&&ge!==Ws,Ze=de.__version===void 0||K===!0,Ie=P(v,Y,Ve);if(v.isDepthTexture)ge=i.DEPTH_COMPONENT,s?v.type===rr?ge=i.DEPTH_COMPONENT32F:v.type===tr?ge=i.DEPTH_COMPONENT24:v.type===xr?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:v.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Mr&&ge===i.DEPTH_COMPONENT&&v.type!==Kn&&v.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=tr,Ee=a.convert(v.type)),v.format===qr&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,v.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=xr,Ee=a.convert(v.type))),Ze&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ge,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,ge,Y.width,Y.height,0,Fe,Ee,null));else if(v.isDataTexture)if(Re.length>0&&Ve){Ge&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ie,ge,Re[0].width,Re[0].height);for(let ee=0,b=Re.length;ee<b;ee++)ce=Re[ee],Ge?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,Fe,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,ee,ge,ce.width,ce.height,0,Fe,Ee,ce.data);v.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ie,ge,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,Fe,Ee,Y.data)):t.texImage2D(i.TEXTURE_2D,0,ge,Y.width,Y.height,0,Fe,Ee,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ge,Re[0].width,Re[0].height,Y.depth);for(let ee=0,b=Re.length;ee<b;ee++)ce=Re[ee],v.format!==Nt?Fe!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,Y.depth,Fe,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ge,ce.width,ce.height,Y.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,Y.depth,Fe,Ee,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ge,ce.width,ce.height,Y.depth,0,Fe,Ee,ce.data)}else{Ge&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ie,ge,Re[0].width,Re[0].height);for(let ee=0,b=Re.length;ee<b;ee++)ce=Re[ee],v.format!==Nt?Fe!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,Fe,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,Fe,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,ee,ge,ce.width,ce.height,0,Fe,Ee,ce.data)}else if(v.isDataArrayTexture)Ge?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Fe,Ee,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,Y.width,Y.height,Y.depth,0,Fe,Ee,Y.data);else if(v.isData3DTexture)Ge?(Ze&&t.texStorage3D(i.TEXTURE_3D,Ie,ge,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Fe,Ee,Y.data)):t.texImage3D(i.TEXTURE_3D,0,ge,Y.width,Y.height,Y.depth,0,Fe,Ee,Y.data);else if(v.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(i.TEXTURE_2D,Ie,ge,Y.width,Y.height);else{let ee=Y.width,b=Y.height;for(let te=0;te<Ie;te++)t.texImage2D(i.TEXTURE_2D,te,ge,ee,b,0,Fe,Ee,null),ee>>=1,b>>=1}}else if(Re.length>0&&Ve){Ge&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ie,ge,Re[0].width,Re[0].height);for(let ee=0,b=Re.length;ee<b;ee++)ce=Re[ee],Ge?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Fe,Ee,ce):t.texImage2D(i.TEXTURE_2D,ee,ge,Fe,Ee,ce);v.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ie,ge,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ee,Y)):t.texImage2D(i.TEXTURE_2D,0,ge,Fe,Ee,Y);T(v,Ve)&&x($),de.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function pe(S,v,I){if(v.image.length!==6)return;const $=j(S,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+I);const Z=r.get(K);if(K.version!==Z.__version||$===!0){t.activeTexture(i.TEXTURE0+I);const de=ke.getPrimaries(ke.workingColorSpace),ne=v.colorSpace===Rt?null:ke.getPrimaries(v.colorSpace),le=v.colorSpace===Rt||de===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let ee=0;ee<6;ee++)!xe&&!Pe?Y[ee]=g(v.image[ee],!1,!0,n.maxCubemapSize):Y[ee]=Pe?v.image[ee].image:v.image[ee],Y[ee]=Le(v,Y[ee]);const Ve=Y[0],Fe=p(Ve)||s,Ee=a.convert(v.format,v.colorSpace),ge=a.convert(v.type),ce=w(v.internalFormat,Ee,ge,v.colorSpace),Re=s&&v.isVideoTexture!==!0,Ge=Z.__version===void 0||$===!0;let Ze=P(v,Ve,Fe);B(i.TEXTURE_CUBE_MAP,v,Fe);let Ie;if(xe){Re&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,ce,Ve.width,Ve.height);for(let ee=0;ee<6;ee++){Ie=Y[ee].mipmaps;for(let b=0;b<Ie.length;b++){const te=Ie[b];v.format!==Nt?Ee!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b,0,0,te.width,te.height,Ee,te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b,ce,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b,0,0,te.width,te.height,Ee,ge,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b,ce,te.width,te.height,0,Ee,ge,te.data)}}}else{Ie=v.mipmaps,Re&&Ge&&(Ie.length>0&&Ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,ce,Y[0].width,Y[0].height));for(let ee=0;ee<6;ee++)if(Pe){Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Y[ee].width,Y[ee].height,Ee,ge,Y[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ce,Y[ee].width,Y[ee].height,0,Ee,ge,Y[ee].data);for(let b=0;b<Ie.length;b++){const te=Ie[b].image[ee].image;Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b+1,0,0,te.width,te.height,Ee,ge,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b+1,ce,te.width,te.height,0,Ee,ge,te.data)}}else{Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee,ge,Y[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ce,Ee,ge,Y[ee]);for(let b=0;b<Ie.length;b++){const te=Ie[b];Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b+1,0,0,Ee,ge,te.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,b+1,ce,Ee,ge,te.image[ee])}}}T(v,Fe)&&x(i.TEXTURE_CUBE_MAP),Z.__version=K.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function fe(S,v,I,$,K,Z){const de=a.convert(I.format,I.colorSpace),ne=a.convert(I.type),le=w(I.internalFormat,de,ne,I.colorSpace);if(!r.get(v).__hasExternalTextures){const xe=Math.max(1,v.width>>Z),Pe=Math.max(1,v.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,le,xe,Pe,v.depth,0,de,ne,null):t.texImage2D(K,Z,le,xe,Pe,0,de,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,r.get(I).__webglTexture,0,Te(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,r.get(I).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(S,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let $=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||he(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===rr?$=i.DEPTH_COMPONENT32F:K.type===tr&&($=i.DEPTH_COMPONENT24));const Z=Te(v);he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,$,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,$,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const $=Te(v);I&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<$.length;K++){const Z=$[K],de=a.convert(Z.format,Z.colorSpace),ne=a.convert(Z.type),le=w(Z.internalFormat,de,ne,Z.colorSpace),xe=Te(v);I&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,le,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const I=r.get(v.depthTexture).__webglTexture,$=Te(v);if(v.depthTexture.format===Mr)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(v.depthTexture.format===qr)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function ye(S){const v=r.get(S),I=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,S)}else if(I){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[$],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(S,v,I){const $=r.get(S);v!==void 0&&fe($.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&ye(S)}function N(S){const v=S.texture,I=r.get(S),$=r.get(v);S.addEventListener("dispose",q),S.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++);const K=S.isWebGLCubeRenderTarget===!0,Z=S.isWebGLMultipleRenderTargets===!0,de=p(S)||s;if(K){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let le=0;le<v.mipmaps.length;le++)I.__webglFramebuffer[ne][le]=i.createFramebuffer()}else I.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)I.__webglFramebuffer[ne]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Z)if(n.drawBuffers){const ne=S.texture;for(let le=0,xe=ne.length;le<xe;le++){const Pe=r.get(ne[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&S.samples>0&&he(S)===!1){const ne=Z?v:[v];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const xe=ne[le];I.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Pe=a.convert(xe.format,xe.colorSpace),Y=a.convert(xe.type),Ve=w(xe.internalFormat,Pe,Y,xe.colorSpace,S.isXRRenderTarget===!0),Fe=Te(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,I.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),B(i.TEXTURE_CUBE_MAP,v,de);for(let ne=0;ne<6;ne++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)fe(I.__webglFramebuffer[ne][le],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else fe(I.__webglFramebuffer[ne],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);T(v,de)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const ne=S.texture;for(let le=0,xe=ne.length;le<xe;le++){const Pe=ne[le],Y=r.get(Pe);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture),B(i.TEXTURE_2D,Pe,de),fe(I.__webglFramebuffer,S,Pe,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),T(Pe,de)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(s?ne=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,$.__webglTexture),B(ne,v,de),s&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)fe(I.__webglFramebuffer[le],S,v,i.COLOR_ATTACHMENT0,ne,le);else fe(I.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,ne,0);T(v,de)&&x(ne),t.unbindTexture()}S.depthBuffer&&ye(S)}function ht(S){const v=p(S)||s,I=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0,K=I.length;$<K;$++){const Z=I[$];if(T(Z,v)){const de=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ne=r.get(Z).__webglTexture;t.bindTexture(de,ne),x(de),t.unbindTexture()}}}function _e(S){if(s&&S.samples>0&&he(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],I=S.width,$=S.height;let K=i.COLOR_BUFFER_BIT;const Z=[],de=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=r.get(S),le=S.isWebGLMultipleRenderTargets===!0;if(le)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){Z.push(i.COLOR_ATTACHMENT0+xe),S.depthBuffer&&Z.push(de);const Pe=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Pe===!1&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]),Pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),le){const Y=r.get(v[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,I,$,0,0,I,$,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);const Pe=r.get(v[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Te(S){return Math.min(n.maxSamples,S.samples)}function he(S){const v=r.get(S);return s&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Le(S,v){const I=S.colorSpace,$=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===kn||I!==Kt&&I!==Rt&&(ke.getTransfer(I)===Ye?s===!1?e.has("EXT_sRGB")===!0&&$===Nt?(S.format=kn,S.minFilter=At,S.generateMipmaps=!1):v=Ys.sRGBToLinear(v):($!==Nt||K!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}this.allocateTextureUnit=C,this.resetTextureUnits=ae,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=he}function Tf(i,e,t){const r=t.isWebGL2;function n(a,o=Rt){let s;const l=ke.getTransfer(o);if(a===sr)return i.UNSIGNED_BYTE;if(a===Hs)return i.UNSIGNED_SHORT_4_4_4_4;if(a===zs)return i.UNSIGNED_SHORT_5_5_5_1;if(a===il)return i.BYTE;if(a===nl)return i.SHORT;if(a===Kn)return i.UNSIGNED_SHORT;if(a===Bs)return i.INT;if(a===tr)return i.UNSIGNED_INT;if(a===rr)return i.FLOAT;if(a===oi)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===al)return i.ALPHA;if(a===Nt)return i.RGBA;if(a===sl)return i.LUMINANCE;if(a===ol)return i.LUMINANCE_ALPHA;if(a===Mr)return i.DEPTH_COMPONENT;if(a===qr)return i.DEPTH_STENCIL;if(a===kn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===ll)return i.RED;if(a===Gs)return i.RED_INTEGER;if(a===cl)return i.RG;if(a===Vs)return i.RG_INTEGER;if(a===ks)return i.RGBA_INTEGER;if(a===an||a===sn||a===on||a===ln)if(l===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===an)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===sn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===on)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ln)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===an)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===sn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===on)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ln)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fa||a===pa||a===ma||a===ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ws)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_a||a===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===_a)return l===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===va)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===xa||a===Ma||a===ya||a===Sa||a===Ea||a===Ta||a===ba||a===Aa||a===wa||a===Ra||a===Ca||a===La||a===Pa||a===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===xa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ma)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ya)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ea)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ta)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ba)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Aa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===wa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ra)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ca)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===La)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ua)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===cn||a===Da||a===Ia)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===cn)return l===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ul||a===Na||a===Oa||a===Fa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===cn)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xr?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:n}}class bf extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class In{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,r),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Fi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class wf extends Kr{constructor(e,t){super();const r=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const T=[],x=[],w=new We;let P=null;const R=new wt;R.layers.enable(1),R.viewport=new st;const A=new wt;A.layers.enable(2),A.viewport=new st;const q=[R,A],y=new bf;y.layers.enable(1),y.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=T[B];return j===void 0&&(j=new In,T[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=T[B];return j===void 0&&(j=new In,T[B]=j),j.getGripSpace()},this.getHand=function(B){let j=T[B];return j===void 0&&(j=new In,T[B]=j),j.getHandSpace()};function G(B){const j=x.indexOf(B.inputSource);if(j===-1)return;const ue=T[j];ue!==void 0&&(ue.update(B.inputSource,B.frame,c||o),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function ae(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",ae),n.removeEventListener("inputsourceschange",C);for(let B=0;B<T.length;B++){const j=x[B];j!==null&&(x[B]=null,T[B].disconnect(j))}E=null,z=null,e.setRenderTarget(p),m=null,d=null,f=null,n=null,h=null,oe.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",ae),n.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Sr(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ue=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?qr:Mr,ue=g.stencil?xr:tr);const fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};f=new XRWebGLBinding(n,t),d=f.createProjectionLayer(fe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Sr(d.textureWidth,d.textureHeight,{format:Nt,type:sr,depthTexture:new oo(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),oe.setContext(n),oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function C(B){for(let j=0;j<B.removed.length;j++){const ue=B.removed[j],pe=x.indexOf(ue);pe>=0&&(x[pe]=null,T[pe].disconnect(ue))}for(let j=0;j<B.added.length;j++){const ue=B.added[j];let pe=x.indexOf(ue);if(pe===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=x.length){x.push(ue),pe=Ae;break}else if(x[Ae]===null){x[Ae]=ue,pe=Ae;break}if(pe===-1)break}const fe=T[pe];fe&&fe.connect(ue)}}const H=new U,V=new U;function X(B,j,ue){H.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);const pe=H.distanceTo(V),fe=j.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,we=fe[14]/(fe[10]-1),ye=fe[14]/(fe[10]+1),ze=(fe[9]+1)/fe[5],N=(fe[9]-1)/fe[5],ht=(fe[8]-1)/fe[0],_e=(Ae[8]+1)/Ae[0],Te=we*ht,he=we*_e,Ke=pe/(-ht+_e),Le=Ke*-ht;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Le),B.translateZ(Ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const S=we+Ke,v=ye+Ke,I=Te-Le,$=he+(pe-Le),K=ze*ye/v*S,Z=N*ye/v*S;B.projectionMatrix.makePerspective(I,$,K,Z,S,v),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;y.near=A.near=R.near=B.near,y.far=A.far=R.far=B.far,(E!==y.near||z!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,z=y.far);const j=B.parent,ue=y.cameras;W(y,j);for(let pe=0;pe<ue.length;pe++)W(ue[pe],j);ue.length===2?X(y,R,A):y.projectionMatrix.copy(R.projectionMatrix),k(B,y,j)};function k(B,j,ue){ue===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Wn*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let J=null;function Q(B,j){if(u=j.getViewerPose(c||o),_=j,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let pe=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let fe=0;fe<ue.length;fe++){const Ae=ue[fe];let we=null;if(m!==null)we=m.getViewport(Ae);else{const ze=f.getViewSubImage(d,Ae);we=ze.viewport,fe===0&&(e.setRenderTargetTextures(h,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(h))}let ye=q[fe];ye===void 0&&(ye=new wt,ye.layers.enable(fe),ye.viewport=new st,q[fe]=ye),ye.matrix.fromArray(Ae.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ae.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(y.matrix.copy(ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(ye)}}for(let ue=0;ue<T.length;ue++){const pe=x[ue],fe=T[ue];pe!==null&&fe!==void 0&&fe.update(pe,j,c||o)}J&&J(B,j),j.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:j}),_=null}const oe=new so;oe.setAnimationLoop(Q),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function Rf(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function r(p,h){h.color.getRGB(p.fogColor.value,ro(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,T,x,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),f(p,h)):h.isMeshPhongMaterial?(a(p,h),u(p,h)):h.isMeshStandardMaterial?(a(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,w)):h.isMeshMatcapMaterial?(a(p,h),_(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),g(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&s(p,h)):h.isPointsMaterial?l(p,h,T,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===vt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===vt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function s(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Cf(i,e,t,r){let n={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,x){const w=x.program;r.uniformBlockBinding(T,w)}function c(T,x){let w=n[T.id];w===void 0&&(_(T),w=u(T),n[T.id]=w,T.addEventListener("dispose",p));const P=x.program;r.updateUBOMapping(T,P);const R=e.render.frame;a[T.id]!==R&&(d(T),a[T.id]=R)}function u(T){const x=f();T.__bindingPointIndex=x;const w=i.createBuffer(),P=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function f(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const x=n[T.id],w=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=w.length;R<A;R++){const q=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,E=q.length;y<E;y++){const z=q[y];if(m(z,R,y,P)===!0){const G=z.__offset,ae=Array.isArray(z.value)?z.value:[z.value];let C=0;for(let H=0;H<ae.length;H++){const V=ae[H],X=g(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+C,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,C),C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,x,w,P){const R=T.value,A=x+"_"+w;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const q=P[A];if(typeof R=="number"||typeof R=="boolean"){if(q!==R)return P[A]=R,!0}else if(q.equals(R)===!1)return q.copy(R),!0}return!1}function _(T){const x=T.uniforms;let w=0;const P=16;for(let A=0,q=x.length;A<q;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,z=y.length;E<z;E++){const G=y[E],ae=Array.isArray(G.value)?G.value:[G.value];for(let C=0,H=ae.length;C<H;C++){const V=ae[C],X=g(V),W=w%P;W!==0&&P-W<X.boundary&&(w+=P-W),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=X.storage}}}const R=w%P;return R>0&&(w+=P-R),T.__size=w,T.__cache={},this}function g(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function h(){for(const T in n)i.deleteBuffer(n[T]);o=[],n={},a={}}return{bind:l,update:c,dispose:h}}class po{constructor(e={}){const{canvas:t=El(),context:r=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const x=this;let w=!1,P=0,R=0,A=null,q=-1,y=null;const E=new st,z=new st;let G=null;const ae=new He(0);let C=0,H=t.width,V=t.height,X=1,W=null,k=null;const J=new st(0,0,H,V),Q=new st(0,0,H,V);let oe=!1;const B=new ao;let j=!1,ue=!1,pe=null;const fe=new tt,Ae=new We,we=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?X:1}let N=r;function ht(M,L){for(let O=0;O<M.length;O++){const F=M[O],D=t.getContext(F,L);if(D!==null)return D}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yn}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",te,!1),N===null){const L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),N=ht(L,M),N===null)throw ht(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _e,Te,he,Ke,Le,S,v,I,$,K,Z,de,ne,le,xe,Pe,Y,Ve,Fe,Ee,ge,ce,Re,Ge;function Ze(){_e=new Bh(N),Te=new Ph(N,_e,e),_e.init(Te),ce=new Tf(N,_e,Te),he=new Sf(N,_e,Te),Ke=new Gh(N),Le=new lf,S=new Ef(N,_e,he,Le,Te,ce,Ke),v=new Dh(x),I=new Fh(x),$=new Yl(N,Te),Re=new Ch(N,_e,$,Te),K=new Hh(N,$,Ke,Re),Z=new Xh(N,K,$,Ke),Fe=new Wh(N,Te,S),Pe=new Uh(Le),de=new of(x,v,I,_e,Te,Re,Pe),ne=new Rf(x,Le),le=new uf,xe=new gf(_e,Te),Ve=new Rh(x,v,I,he,Z,d,l),Y=new yf(x,Z,Te),Ge=new Cf(N,Ke,Te,he),Ee=new Lh(N,_e,Ke,Te),ge=new zh(N,_e,Ke,Te),Ke.programs=de.programs,x.capabilities=Te,x.extensions=_e,x.properties=Le,x.renderLists=le,x.shadowMap=Y,x.state=he,x.info=Ke}Ze();const Ie=new wf(x,N);this.xr=Ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=_e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(H,V,!1))},this.getSize=function(M){return M.set(H,V)},this.setSize=function(M,L,O=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,V=L,t.width=Math.floor(M*X),t.height=Math.floor(L*X),O===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(H*X,V*X).floor()},this.setDrawingBufferSize=function(M,L,O){H=M,V=L,X=O,t.width=Math.floor(M*O),t.height=Math.floor(L*O),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,L,O,F){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,L,O,F),he.viewport(E.copy(J).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,L,O,F){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,L,O,F),he.scissor(z.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){he.setScissorTest(oe=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(M=!0,L=!0,O=!0){let F=0;if(M){let D=!1;if(A!==null){const ie=A.texture.format;D=ie===ks||ie===Vs||ie===Gs}if(D){const ie=A.texture.type,me=ie===sr||ie===tr||ie===Kn||ie===xr||ie===Hs||ie===zs,Me=Ve.getClearColor(),Se=Ve.getClearAlpha(),Be=Me.r,Ue=Me.g,De=Me.b;me?(m[0]=Be,m[1]=Ue,m[2]=De,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Be,_[1]=Ue,_[2]=De,_[3]=Se,N.clearBufferiv(N.COLOR,0,_))}else F|=N.COLOR_BUFFER_BIT}L&&(F|=N.DEPTH_BUFFER_BIT),O&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),xe.dispose(),Le.dispose(),v.dispose(),I.dispose(),Z.dispose(),Re.dispose(),Ge.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",St),Ie.removeEventListener("sessionend",qe),pe&&(pe.dispose(),pe=null),dt.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=Ke.autoReset,L=Y.enabled,O=Y.autoUpdate,F=Y.needsUpdate,D=Y.type;Ze(),Ke.autoReset=M,Y.enabled=L,Y.autoUpdate=O,Y.needsUpdate=F,Y.type=D}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function se(M){const L=M.target;L.removeEventListener("dispose",se),be(L)}function be(M){ve(M),Le.remove(M)}function ve(M){const L=Le.get(M).programs;L!==void 0&&(L.forEach(function(O){de.releaseProgram(O)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,O,F,D,ie){L===null&&(L=ye);const me=D.isMesh&&D.matrixWorld.determinant()<0,Me=vo(M,L,O,F,D);he.setMaterial(F,me);let Se=O.index,Be=1;if(F.wireframe===!0){if(Se=K.getWireframeAttribute(O),Se===void 0)return;Be=2}const Ue=O.drawRange,De=O.attributes.position;let ot=Ue.start*Be,et=(Ue.start+Ue.count)*Be;ie!==null&&(ot=Math.max(ot,ie.start*Be),et=Math.min(et,(ie.start+ie.count)*Be)),Se!==null?(ot=Math.max(ot,0),et=Math.min(et,Se.count)):De!=null&&(ot=Math.max(ot,0),et=Math.min(et,De.count));const Et=et-ot;if(Et<0||Et===1/0)return;Re.setup(D,F,Me,O,Se);let zt,Je=Ee;if(Se!==null&&(zt=$.get(Se),Je=ge,Je.setIndex(zt)),D.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*ze()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(D.isLine){let Ne=F.linewidth;Ne===void 0&&(Ne=1),he.setLineWidth(Ne*ze()),D.isLineSegments?Je.setMode(N.LINES):D.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else D.isPoints?Je.setMode(N.POINTS):D.isSprite&&Je.setMode(N.TRIANGLES);if(D.isBatchedMesh)Je.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)Je.renderInstances(ot,Et,D.count);else if(O.isInstancedBufferGeometry){const Ne=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,$i=Math.min(O.instanceCount,Ne);Je.renderInstances(ot,Et,$i)}else Je.render(ot,Et)};function Xe(M,L,O){M.transparent===!0&&M.side===qt&&M.forceSinglePass===!1?(M.side=vt,M.needsUpdate=!0,pi(M,L,O),M.side=or,M.needsUpdate=!0,pi(M,L,O),M.side=qt):pi(M,L,O)}this.compile=function(M,L,O=null){O===null&&(O=M),p=xe.get(O),p.init(),T.push(p),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(x._useLegacyLights);const F=new Set;return M.traverse(function(D){const ie=D.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Me=ie[me];Xe(Me,O,D),F.add(Me)}else Xe(ie,O,D),F.add(ie)}),T.pop(),p=null,F},this.compileAsync=function(M,L,O=null){const F=this.compile(M,L,O);return new Promise(D=>{function ie(){if(F.forEach(function(me){Le.get(me).currentProgram.isReady()&&F.delete(me)}),F.size===0){D(M);return}setTimeout(ie,10)}_e.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let je=null;function $e(M){je&&je(M)}function St(){dt.stop()}function qe(){dt.start()}const dt=new so;dt.setAnimationLoop($e),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(M){je=M,Ie.setAnimationLoop(M),M===null?dt.stop():dt.start()},Ie.addEventListener("sessionstart",St),Ie.addEventListener("sessionend",qe),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(L),L=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,A),p=xe.get(M,T.length),p.init(),T.push(p),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),B.setFromProjectionMatrix(fe),ue=this.localClippingEnabled,j=Pe.init(this.clippingPlanes,ue),g=le.get(M,h.length),g.init(),h.push(g),Bt(M,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,k),this.info.render.frame++,j===!0&&Pe.beginShadows();const O=p.state.shadowsArray;if(Y.render(O,M,L),j===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,M),p.setupLights(x._useLegacyLights),L.isArrayCamera){const F=L.cameras;for(let D=0,ie=F.length;D<ie;D++){const me=F[D];ea(g,M,me,me.viewport)}}else ea(g,M,L);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,L),Re.resetDefaultState(),q=-1,y=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Bt(M,L,O,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||B.intersectsSprite(M)){F&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const ie=Z.update(M),me=M.material;me.visible&&g.push(M,ie,me,O,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||B.intersectsObject(M))){const ie=Z.update(M),me=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),we.copy(ie.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(me)){const Me=ie.groups;for(let Se=0,Be=Me.length;Se<Be;Se++){const Ue=Me[Se],De=me[Ue.materialIndex];De&&De.visible&&g.push(M,ie,De,O,we.z,Ue)}}else me.visible&&g.push(M,ie,me,O,we.z,null)}}const D=M.children;for(let ie=0,me=D.length;ie<me;ie++)Bt(D[ie],L,O,F)}function ea(M,L,O,F){const D=M.opaque,ie=M.transmissive,me=M.transparent;p.setupLightsView(O),j===!0&&Pe.setGlobalState(x.clippingPlanes,O),ie.length>0&&_o(D,ie,L,O),F&&he.viewport(E.copy(F)),D.length>0&&fi(D,L,O),ie.length>0&&fi(ie,L,O),me.length>0&&fi(me,L,O),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function _o(M,L,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const D=Te.isWebGL2;pe===null&&(pe=new Sr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?oi:sr,minFilter:si,samples:D?4:0})),x.getDrawingBufferSize(Ae),D?pe.setSize(Ae.x,Ae.y):pe.setSize(Xn(Ae.x),Xn(Ae.y));const ie=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(ae),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const me=x.toneMapping;x.toneMapping=ar,fi(M,O,F),S.updateMultisampleRenderTarget(pe),S.updateRenderTargetMipmap(pe);let Me=!1;for(let Se=0,Be=L.length;Se<Be;Se++){const Ue=L[Se],De=Ue.object,ot=Ue.geometry,et=Ue.material,Et=Ue.group;if(et.side===qt&&De.layers.test(F.layers)){const zt=et.side;et.side=vt,et.needsUpdate=!0,ta(De,O,F,ot,et,Et),et.side=zt,et.needsUpdate=!0,Me=!0}}Me===!0&&(S.updateMultisampleRenderTarget(pe),S.updateRenderTargetMipmap(pe)),x.setRenderTarget(ie),x.setClearColor(ae,C),x.toneMapping=me}function fi(M,L,O){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ie=M.length;D<ie;D++){const me=M[D],Me=me.object,Se=me.geometry,Be=F===null?me.material:F,Ue=me.group;Me.layers.test(O.layers)&&ta(Me,L,O,Se,Be,Ue)}}function ta(M,L,O,F,D,ie){M.onBeforeRender(x,L,O,F,D,ie),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(x,L,O,F,M,ie),D.transparent===!0&&D.side===qt&&D.forceSinglePass===!1?(D.side=vt,D.needsUpdate=!0,x.renderBufferDirect(O,L,F,D,M,ie),D.side=or,D.needsUpdate=!0,x.renderBufferDirect(O,L,F,D,M,ie),D.side=qt):x.renderBufferDirect(O,L,F,D,M,ie),M.onAfterRender(x,L,O,F,D,ie)}function pi(M,L,O){L.isScene!==!0&&(L=ye);const F=Le.get(M),D=p.state.lights,ie=p.state.shadowsArray,me=D.state.version,Me=de.getParameters(M,D.state,ie,L,O),Se=de.getProgramCacheKey(Me);let Be=F.programs;F.environment=M.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(M.isMeshStandardMaterial?I:v).get(M.envMap||F.environment),Be===void 0&&(M.addEventListener("dispose",se),Be=new Map,F.programs=Be);let Ue=Be.get(Se);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===me)return ia(M,Me),Ue}else Me.uniforms=de.getUniforms(M),M.onBuild(O,Me,x),M.onBeforeCompile(Me,x),Ue=de.acquireProgram(Me,Se),Be.set(Se,Ue),F.uniforms=Me.uniforms;const De=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Pe.uniform),ia(M,Me),F.needsLights=Mo(M),F.lightsStateVersion=me,F.needsLights&&(De.ambientLightColor.value=D.state.ambient,De.lightProbe.value=D.state.probe,De.directionalLights.value=D.state.directional,De.directionalLightShadows.value=D.state.directionalShadow,De.spotLights.value=D.state.spot,De.spotLightShadows.value=D.state.spotShadow,De.rectAreaLights.value=D.state.rectArea,De.ltc_1.value=D.state.rectAreaLTC1,De.ltc_2.value=D.state.rectAreaLTC2,De.pointLights.value=D.state.point,De.pointLightShadows.value=D.state.pointShadow,De.hemisphereLights.value=D.state.hemi,De.directionalShadowMap.value=D.state.directionalShadowMap,De.directionalShadowMatrix.value=D.state.directionalShadowMatrix,De.spotShadowMap.value=D.state.spotShadowMap,De.spotLightMatrix.value=D.state.spotLightMatrix,De.spotLightMap.value=D.state.spotLightMap,De.pointShadowMap.value=D.state.pointShadowMap,De.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ue,F.uniformsList=null,Ue}function ra(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Gi.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function ia(M,L){const O=Le.get(M);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function vo(M,L,O,F,D){L.isScene!==!0&&(L=ye),S.resetTextureUnits();const ie=L.fog,me=F.isMeshStandardMaterial?L.environment:null,Me=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kt,Se=(F.isMeshStandardMaterial?I:v).get(F.envMap||me),Be=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),De=!!O.morphAttributes.position,ot=!!O.morphAttributes.normal,et=!!O.morphAttributes.color;let Et=ar;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=x.toneMapping);const zt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=zt!==void 0?zt.length:0,Ne=Le.get(F),$i=p.state.lights;if(j===!0&&(ue===!0||M!==y)){const Tt=M===y&&F.id===q;Pe.setState(F,M,Tt)}let Qi=!1;F.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==$i.state.version||Ne.outputColorSpace!==Me||D.isBatchedMesh&&Ne.batching===!1||!D.isBatchedMesh&&Ne.batching===!0||D.isInstancedMesh&&Ne.instancing===!1||!D.isInstancedMesh&&Ne.instancing===!0||D.isSkinnedMesh&&Ne.skinning===!1||!D.isSkinnedMesh&&Ne.skinning===!0||D.isInstancedMesh&&Ne.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ne.instancingColor===!1&&D.instanceColor!==null||Ne.envMap!==Se||F.fog===!0&&Ne.fog!==ie||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Pe.numPlanes||Ne.numIntersection!==Pe.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==Ue||Ne.morphTargets!==De||Ne.morphNormals!==ot||Ne.morphColors!==et||Ne.toneMapping!==Et||Te.isWebGL2===!0&&Ne.morphTargetsCount!==Je)&&(Qi=!0):(Qi=!0,Ne.__version=F.version);let lr=Ne.currentProgram;Qi===!0&&(lr=pi(F,L,D));let na=!1,$r=!1,en=!1;const lt=lr.getUniforms(),cr=Ne.uniforms;if(he.useProgram(lr.program)&&(na=!0,$r=!0,en=!0),F.id!==q&&(q=F.id,$r=!0),na||y!==M){lt.setValue(N,"projectionMatrix",M.projectionMatrix),lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const Tt=lt.map.cameraPosition;Tt!==void 0&&Tt.setValue(N,we.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,$r=!0,en=!0)}if(D.isSkinnedMesh){lt.setOptional(N,D,"bindMatrix"),lt.setOptional(N,D,"bindMatrixInverse");const Tt=D.skeleton;Tt&&(Te.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(N,"boneTexture",Tt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}D.isBatchedMesh&&(lt.setOptional(N,D,"batchingTexture"),lt.setValue(N,"batchingTexture",D._matricesTexture,S));const tn=O.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0&&Te.isWebGL2===!0)&&Fe.update(D,O,lr),($r||Ne.receiveShadow!==D.receiveShadow)&&(Ne.receiveShadow=D.receiveShadow,lt.setValue(N,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(cr.envMap.value=Se,cr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),$r&&(lt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&xo(cr,en),ie&&F.fog===!0&&ne.refreshFogUniforms(cr,ie),ne.refreshMaterialUniforms(cr,F,X,V,pe),Gi.upload(N,ra(Ne),cr,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Gi.upload(N,ra(Ne),cr,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&lt.setValue(N,"center",D.center),lt.setValue(N,"modelViewMatrix",D.modelViewMatrix),lt.setValue(N,"normalMatrix",D.normalMatrix),lt.setValue(N,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Tt=F.uniformsGroups;for(let rn=0,yo=Tt.length;rn<yo;rn++)if(Te.isWebGL2){const aa=Tt[rn];Ge.update(aa,lr),Ge.bind(aa,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function xo(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Mo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,L,O){Le.get(M.texture).__webglTexture=L,Le.get(M.depthTexture).__webglTexture=O;const F=Le.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const O=Le.get(M);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,O=0){A=M,P=L,R=O;let F=!0,D=null,ie=!1,me=!1;if(M){const Me=Le.get(M);Me.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(N.FRAMEBUFFER,null),F=!1):Me.__webglFramebuffer===void 0?S.setupRenderTarget(M):Me.__hasExternalTextures&&S.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Be=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[L])?D=Be[L][O]:D=Be[L],ie=!0):Te.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?D=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?D=Be[O]:D=Be,E.copy(M.viewport),z.copy(M.scissor),G=M.scissorTest}else E.copy(J).multiplyScalar(X).floor(),z.copy(Q).multiplyScalar(X).floor(),G=oe;if(he.bindFramebuffer(N.FRAMEBUFFER,D)&&Te.drawBuffers&&F&&he.drawBuffers(M,D),he.viewport(E),he.scissor(z),he.setScissorTest(G),ie){const Me=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,O)}else if(me){const Me=Le.get(M.texture),Se=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,O||0,Se)}q=-1},this.readRenderTargetPixels=function(M,L,O,F,D,ie,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){he.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Se=M.texture,Be=Se.format,Ue=Se.type;if(Be!==Nt&&ce.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ue===oi&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ue!==sr&&ce.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===rr&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&O>=0&&O<=M.height-D&&N.readPixels(L,O,F,D,ce.convert(Be),ce.convert(Ue),ie)}finally{const Se=A!==null?Le.get(A).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(M,L,O=0){const F=Math.pow(2,-O),D=Math.floor(L.image.width*F),ie=Math.floor(L.image.height*F);S.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,M.x,M.y,D,ie),he.unbindTexture()},this.copyTextureToTexture=function(M,L,O,F=0){const D=L.image.width,ie=L.image.height,me=ce.convert(O.format),Me=ce.convert(O.type);S.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,D,ie,me,Me,L.image.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,me,L.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,F,M.x,M.y,me,Me,L.image),F===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(M,L,O,F,D=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ie=M.max.x-M.min.x+1,me=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,Se=ce.convert(F.format),Be=ce.convert(F.type);let Ue;if(F.isData3DTexture)S.setTexture3D(F,0),Ue=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),Ue=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),et=N.getParameter(N.UNPACK_SKIP_PIXELS),Et=N.getParameter(N.UNPACK_SKIP_ROWS),zt=N.getParameter(N.UNPACK_SKIP_IMAGES),Je=O.isCompressedTexture?O.mipmaps[D]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Ue,D,L.x,L.y,L.z,ie,me,Me,Se,Be,Je.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ue,D,L.x,L.y,L.z,ie,me,Me,Se,Je.data)):N.texSubImage3D(Ue,D,L.x,L.y,L.z,ie,me,Me,Se,Be,Je),N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,et),N.pixelStorei(N.UNPACK_SKIP_ROWS,Et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt),D===0&&F.generateMipmaps&&N.generateMipmap(Ue),he.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,he.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zn?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===Ki?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?yr:Xs}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?at:Kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lf extends po{}Lf.prototype.isWebGL1Renderer=!0;class Pf extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mo extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const As=new U,ws=new U,Rs=new tt,Nn=new Jn,Bi=new hi;class Uf extends mt{constructor(e=new Ft,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)As.fromBufferAttribute(t,n-1),ws.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=As.distanceTo(ws);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bi.copy(r.boundingSphere),Bi.applyMatrix4(n),Bi.radius+=a,e.ray.intersectsSphere(Bi)===!1)return;Rs.copy(n).invert(),Nn.copy(e.ray).applyMatrix4(Rs);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new U,u=new U,f=new U,d=new U,m=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const p=Math.max(0,o.start),h=Math.min(_.count,o.start+o.count);for(let T=p,x=h-1;T<x;T+=m){const w=_.getX(T),P=_.getX(T+1);if(c.fromBufferAttribute(g,w),u.fromBufferAttribute(g,P),Nn.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),h=Math.min(g.count,o.start+o.count);for(let T=p,x=h-1;T<x;T+=m){if(c.fromBufferAttribute(g,T),u.fromBufferAttribute(g,T+1),Nn.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const Cs=new U,Ls=new U;class Df extends Uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)Cs.fromBufferAttribute(t,n),Ls.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Cs.distanceTo(Ls);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class go extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ps=new tt,qn=new Jn,Hi=new hi,zi=new U;class If extends mt{constructor(e=new Ft,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hi.copy(r.boundingSphere),Hi.applyMatrix4(n),Hi.radius+=a,e.ray.intersectsSphere(Hi)===!1)return;Ps.copy(n).invert(),qn.copy(e.ray).applyMatrix4(Ps);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=r.index,u=r.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);zi.fromBufferAttribute(u,g),Us(zi,g,l,n,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)zi.fromBufferAttribute(u,m),Us(zi,m,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Us(i,e,t,r,n,a,o){const s=qn.distanceSqToPoint(i);if(s<t){const l=new U;qn.closestPointToPoint(i,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Nf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ds(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ds();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ds(){return(typeof performance>"u"?Date:performance).now()}class Of extends Df{constructor(e=10,t=10,r=4473924,n=8947848){r=new He(r),n=new He(n);const a=t/2,o=e/t,s=e/2,l=[],c=[];for(let d=0,m=0,_=-s;d<=t;d++,_+=o){l.push(-s,0,_,s,0,_),l.push(_,0,-s,_,0,s);const g=d===a?r:n;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const u=new Ft;u.setAttribute("position",new Ot(l,3)),u.setAttribute("color",new Ot(c,3));const f=new mo({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yn);function Ff(){const i=document.getElementById("webgl");if(!i)return;const e=new po({canvas:i,antialias:!0,alpha:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=new Pf,r=new wt(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=30;const n=2e3,a=new Ft,o=new Float32Array(n*3),s=new Float32Array(n*3);for(let g=0;g<n;g++){o[g*3]=(Math.random()-.5)*100,o[g*3+1]=(Math.random()-.5)*100,o[g*3+2]=(Math.random()-.5)*100;const p=new He("#00ffc4"),h=new He("#9a4dff"),T=Math.random()>.6?p:h;s[g*3]=T.r,s[g*3+1]=T.g,s[g*3+2]=T.b}a.setAttribute("position",new Ct(o,3)),a.setAttribute("color",new Ct(s,3));const l=new go({size:.18,vertexColors:!0,transparent:!0,opacity:.7}),c=new If(a,l);t.add(c);const u=new Of(80,30,65476,662058);u.position.y=-15,u.material.opacity=.15,u.material.transparent=!0,t.add(u);let f=0,d=0;document.addEventListener("mousemove",g=>{f=(g.clientX/window.innerWidth-.5)*2,d=(g.clientY/window.innerHeight-.5)*2}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});const m=new Nf,_=()=>{requestAnimationFrame(_);const g=m.getElapsedTime();c.rotation.y=g*.02+f*.05,c.rotation.x=g*.01+d*.03,u.rotation.y=g*.01,e.render(t,r)};_()}function Bf(){const i=document.getElementById("terminal-input"),e=document.getElementById("terminal-output"),t=document.getElementById("terminal-toggle-btn"),r=document.getElementById("hud-terminal"),n=document.querySelector(".hud-panel-container");if(!i||!e)return;const a={help:()=>`Available commands:
  whoami     — display operator profile
  skills     — list skill matrix
  projects   — list security projects
  certs      — list certifications
  contact    — show contact info
  clear      — clear terminal
  nmap       — run mock port scan
  status     — system status`,whoami:()=>`Operator: Shubham Sharma
Degree:   B.Tech CSE — Cybersecurity & Digital Forensics
University: VIT Bhopal University
Focus:    Penetration Testing | IoT Security | Digital Forensics
Status:   Open to Internships`,skills:()=>`[SEC] Kali Linux | Burp Suite | Metasploit | Nmap | Wireshark | SQLmap | Gobuster
[DEV] Python | Java | SQL | Bash | HTML/CSS | JavaScript
[DOM] Web App Pentesting | Network Security | IoT Security | Digital Forensics`,projects:()=>`[01] BruteForceLab — Brute force simulation framework
     Contribution: GUI Development & System Integration
[02] VITGuard     — 6-Layer IoT Security Monitoring System
     Contribution: Victim App Simulation + Security Engine`,certs:()=>`[THM] TryHackMe Labs                    — Active
[GCP] Google Cybersecurity Certificate  — Completed
[CY1] Foundations of Cybersecurity      — Completed
[NET] Bits and Bytes of Networking      — Completed
[MDB] MongoDB Developer                 — Completed
[eJPT] eJPT / CEH Training             — In Progress`,contact:()=>`Email:    shubham2chaipa1102@gmail.com
GitHub:   github.com/shubham24bcy10391-ux
LinkedIn: linkedin.com/in/shubham-sharma-513230325
WhatsApp: +91 7891464270`,clear:()=>(e.innerHTML="",null),nmap:()=>(setTimeout(()=>o("PORT     STATE  SERVICE  VERSION"),300),setTimeout(()=>o("22/tcp   open   ssh      OpenSSH 8.9"),600),setTimeout(()=>o("80/tcp   open   http     nginx 1.18"),900),setTimeout(()=>o("443/tcp  open   https    nginx 1.18"),1200),setTimeout(()=>o("3306/tcp open   mysql    MySQL 8.0"),1500),setTimeout(()=>o("[DONE] Scan complete. 4 services discovered."),1800),"> Starting Nmap scan on target 192.168.1.1..."),status:()=>`SYS_STATUS:    ONLINE
THREAT_LEVEL:  MINIMAL
FIREWALL:      ACTIVE
IDS:           ARMED
UPTIME:        ${Math.floor(Math.random()*999)} hours
OPERATOR:      AUTHENTICATED`};function o(s,l=""){const c=document.createElement("div");c.textContent=s,l&&(c.style.color=l),e.appendChild(c),e.scrollTop=e.scrollHeight}i.addEventListener("keydown",s=>{if(s.key!=="Enter")return;const l=i.value.trim().toLowerCase();if(!l)return;o(`guest@shubham.sec:~$ ${l}`,"#00ffc4");const c=a[l];if(c){const u=c();u&&u.split(`
`).forEach(f=>o(f))}else o(`bash: ${l}: command not found. Type 'help' for available commands.`,"#ff3366");i.value=""}),t&&r&&n&&t.addEventListener("click",()=>{r.classList.toggle("minimized"),n.classList.toggle("terminal-minimized"),t.textContent=r.classList.contains("minimized")?"□ EXPAND":"_ MINIMIZE"})}function Hf(){const i=document.getElementById("vitguard-logs"),e=document.getElementById("btn-inject-threat"),t=document.getElementById("btn-toggle-ids"),r=document.getElementById("vitguard-ids-status"),n=document.getElementById("vitguard-target");if(!i||!e)return;let a=!0;const o={lock:{el:document.getElementById("node-lock"),line:document.getElementById("line-lock"),name:"SmartLock_Node"},cam:{el:document.getElementById("node-cam"),line:document.getElementById("line-cam"),name:"IP_Camera_Node"},sensor:{el:document.getElementById("node-sensor"),line:document.getElementById("line-sensor"),name:"ThermalSensor"}};function s(c,u=""){vr(i,c,u)}e.addEventListener("click",()=>{const c=n.value,u=o[c];!u||!u.el||(s(`[ATTACK] Injecting exploit payload to ${u.name}...`,"#ff3366"),u.el.classList.add("active-threat"),u.line&&u.line.setAttribute("stroke","rgba(255,51,102,0.7)"),l(u.el),a?setTimeout(()=>{s(`[IDS]    Anomaly detected on ${u.name}!`,"#ffcc00"),setTimeout(()=>{s("[IDS]    Threat neutralized. Node quarantined.","#00ffc4"),u.el.classList.remove("active-threat"),u.line&&u.line.setAttribute("stroke","rgba(0,255,196,0.3)")},1500)},1e3):(s("[WARN]   IDS offline! Exploit executing undetected.","#ff3366"),setTimeout(()=>{s(`[BREACH] ${u.name} COMPROMISED.`,"#ff3366")},1200)))}),t.addEventListener("click",()=>{a=!a,r.textContent=a?"ARMED":"DISABLED",r.style.color=a?"#00ff66":"#ff3366",s(`[SYS]    IDS Firewall ${a?"ARMED":"DISABLED"}.`,a?"#00ffc4":"#ff3366")});function l(c){const u=document.getElementById("packet-container"),f=document.getElementById("node-gw");if(!u||!f||!c)return;const d=f.getBoundingClientRect(),m=c.getBoundingClientRect(),_=u.getBoundingClientRect(),g=d.left+d.width/2-_.left,p=d.top+d.height/2-_.top,h=m.left+m.width/2-_.left,T=m.top+m.height/2-_.top,x=document.createElement("div");x.className="exploit-packet",x.style.left=g+"px",x.style.top=p+"px",u.appendChild(x);const w=performance.now(),P=800;function R(A){const q=Math.min((A-w)/P,1);x.style.left=g+(h-g)*q+"px",x.style.top=p+(T-p)*q+"px",q<1?requestAnimationFrame(R):x.remove()}requestAnimationFrame(R)}}function zf(){const i=document.getElementById("btn-start-brute"),e=document.getElementById("brute-logs"),t=document.getElementById("brute-password"),r=document.getElementById("brute-speed"),n=document.getElementById("vault-status"),a=[document.getElementById("ring-1"),document.getElementById("ring-2"),document.getElementById("ring-3")];if(!i||!e)return;let o=!1;function s(c,u=""){vr(e,c,u)}function l(c,u){c&&(c.querySelectorAll(".ring-num").forEach((f,d)=>{f.style.color=d===u?"#ffffff":"",f.style.textShadow=d===u?"0 0 8px #00ffc4":""}),c.scrollTop=u*30)}i.addEventListener("click",()=>{if(o)return;const c=t.value.replace(/\D/g,"").slice(0,3).padStart(3,"0"),u=parseInt(r.value);if(c.split("").map(Number),c.length!==3){s("[ERROR] Enter a valid 3-digit password.","#ff3366");return}o=!0,i.textContent="CRACKING...",i.disabled=!0,n.textContent="LOCKED",n.style.color="#ff3366",a.forEach(_=>_&&_.classList.add("spinning")),s(`[INIT]  Target lock: ${c}`,"#ffcc00"),s(`[INIT]  Speed: ${u===1?"Realistic":u===10?"High Speed":"Matrix Level"}`),s("[ATCK]  Initiating dictionary key injection...","#ff3366");let f=0;const d=999,m=setInterval(()=>{const _=Math.floor(f/100),g=Math.floor(f%100/10),p=f%10;l(a[0],_),l(a[1],g),l(a[2],p),(f%Math.max(1,Math.floor(100/u))===0||f===parseInt(c))&&s(`[KEY]   Trying: ${String(f).padStart(3,"0")}`,f===parseInt(c)?"#00ff66":""),f===parseInt(c)?(clearInterval(m),a.forEach(h=>h&&h.classList.remove("spinning")),a.forEach(h=>h&&h.classList.add("cracked")),n.textContent="CRACKED",n.style.color="#00ff66",s(`[BOOM]  PASSWORD FOUND: ${c}`,"#00ff66"),s(`[INFO]  ${f+1} keys attempted.`),s("[WARN]  Use strong passwords! Weak credentials = easy breach.","#ffcc00"),o=!1,i.textContent="RUN_DECRYPTION_ATTACK",i.disabled=!1,setTimeout(()=>a.forEach(h=>h&&h.classList.remove("cracked")),3e3)):f>=d&&(clearInterval(m),a.forEach(h=>h&&h.classList.remove("spinning")),s("[FAIL]  Target not found in range 000-999.","#ff3366"),o=!1,i.textContent="RUN_DECRYPTION_ATTACK",i.disabled=!1),f++},u===1?66:u===10?5:1)})}const ni=["> INITIATING AETHERSEC CORE BOOT...","> Loading kernel security modules...","> Mounting encrypted filesystem [AES-256]...","> Initializing network interface eth0...","> Binding firewall rules [iptables]...","> Starting intrusion detection daemon...","> Loading threat intelligence feeds...","> Connecting to MQTT broker...","> Authenticating operator credentials...","> Decrypting user profile [SHUBHAM.SEC]...","> Calibrating HUD holographic layer...","> Loading skill matrices...","> Syncing certification logs...","> All systems nominal. Welcome, Operator.","> AETHERSEC HUD v1.0.8 — ONLINE"],On=document.getElementById("boot-logs"),Gf=document.getElementById("boot-bar"),Vf=document.getElementById("boot-percent"),Is=document.getElementById("boot-loader"),kf=document.getElementById("hud-container");let zr=0;const Wf=setInterval(()=>{if(zr<ni.length){const i=document.createElement("div");i.textContent=ni[zr],i.style.color=ni[zr].includes("ONLINE")||ni[zr].includes("nominal")?"#00ffc4":"",On.appendChild(i),On.scrollTop=On.scrollHeight;const e=Math.round((zr+1)/ni.length*100);Gf.style.width=e+"%",Vf.textContent=e+"%",zr++}else clearInterval(Wf),setTimeout(()=>{Is.classList.add("fade-out"),setTimeout(()=>{Is.style.display="none",kf.classList.remove("hidden"),Xf()},800)},600)},120);function Xf(){Ff(),Bf(),Hf(),zf(),jf(),Kf(),qf(),Yf(),Jf(),Zf(),$f()}function jf(){const i=document.querySelectorAll(".nav-item"),e=document.querySelectorAll(".hud-section");document.getElementById("hud-time"),i.forEach(t=>{t.addEventListener("click",()=>{i.forEach(n=>n.classList.remove("active")),e.forEach(n=>n.classList.remove("active")),t.classList.add("active");const r=document.getElementById("sect-"+t.dataset.target);r&&r.classList.add("active")})})}function qf(){const i=document.getElementById("hud-time"),e=()=>{const t=new Date;i.textContent=t.toLocaleTimeString("en-US",{hour12:!1})};e(),setInterval(e,1e3)}function Yf(){const i=document.getElementById("binary-stream");if(!i)return;const e=()=>{let t="";for(let r=0;r<200;r++)t+=Math.random()>.5?"1":"0",(r+1)%40===0&&(t+=`
`);i.textContent=t};e(),setInterval(e,800)}function Kf(){const i=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".skill-category-card"),t=document.getElementById("skill-inspector");i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(a=>a.classList.remove("active")),r.classList.add("active");const n=r.dataset.filter;e.forEach(a=>{a.style.display=n==="all"||a.dataset.cat===n?"":"none"})})}),document.querySelectorAll(".skill-tag").forEach(r=>{r.addEventListener("mouseenter",()=>{t.innerHTML=`<span style="color:#00ffc4">> SKILL_ANALYSIS: </span><span style="color:#fff">${r.textContent}</span> — ${r.dataset.desc||"Security tool in active use."}`}),r.addEventListener("mouseleave",()=>{t.innerHTML='<span class="inspector-prompt">> HOVER OVER ANY MATRIX NODE TO ANALYZE SKILL METRICS...</span>'})}),document.querySelectorAll(".proj-tab").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".proj-tab").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".project-screen").forEach(a=>a.classList.remove("active")),r.classList.add("active");const n=document.getElementById("proj-"+r.dataset.project);n&&n.classList.add("active")})})}function Zf(){setTimeout(()=>{document.querySelectorAll(".progress-fill").forEach(i=>{const e=i.style.width;i.style.width="0%",setTimeout(()=>{i.style.width=e},200)})},300)}function Jf(){const i=document.getElementById("sound-toggle"),e=i.querySelector(".icon-sound-off"),t=i.querySelector(".icon-sound-on"),r=i.querySelector(".btn-text");let n=!1;i.addEventListener("click",()=>{n=!n,e.classList.toggle("hidden",n),t.classList.toggle("hidden",!n),r.textContent=n?"AUDIO ON":"AUDIO OFF"})}function $f(){const i=document.getElementById("contact-form"),e=document.getElementById("contact-transmission-log");!i||!e||i.addEventListener("submit",t=>{t.preventDefault();const r=document.getElementById("form-name").value,n=document.getElementById("form-email").value,a=document.getElementById("form-message").value;vr(e,`[TX] Packet initialized from: ${r}`),vr(e,`[TX] Source address: ${n}`),vr(e,`[TX] Payload size: ${a.length} bytes`),vr(e,"[TX] Encrypting with AES-256..."),setTimeout(()=>vr(e,"[OK] Transmission complete. Awaiting response."),1e3),window.location.href=`mailto:shubham2chaipa1102@gmail.com?subject=Portfolio Contact from ${r}&body=${a}`})}function vr(i,e,t=""){const r=document.createElement("div");r.textContent=e,t&&(r.style.color=t),i.appendChild(r),i.scrollTop=i.scrollHeight}
