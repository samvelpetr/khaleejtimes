;
(self.AMP=self.AMP||[]).push({m:0,v:"2311171837000",n:"amp-dailymotion",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,r)}return i}function a(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?u(Object(r),!0).forEach((function(i){n(t,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var s=Array.isArray;function f(t){return s(t)?t:[t]}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function h(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return c(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v=Object.prototype,d=v.hasOwnProperty,m=v.toString;function p(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function y(t){return"number"==typeof t&&isFinite(t)}function b(t,n,i,r,e,o,u,a,s,f,c){return t}function w(){return l||(l=Promise.resolve(void 0))}var g,j=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function k(t){return new Promise((function(n){n(t())}))}function O(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function q(t){for(var n,i=null,r="",e=h(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=O(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function x(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function S(t){var n=q.apply(null,arguments);setTimeout((function(){throw x(n),n}))}function M(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){S(t)}}function T(t){var n=q.apply(null,arguments);return n.expected=!0,n}var R=["Webkit","webkit","Moz","moz","ms","O","o"],A={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function E(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;g||(g=p());var r=g[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<R.length;i++){var r=R[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(g[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),R.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function P(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)E(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,k((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function Y(t){return t.querySelector("video, iframe")}function z(t,n){var i=k((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];x(T.apply(null,i))}("TRYPLAY",t)})),i}var C=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function I(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return n}}function U(t){return(t.ownerDocument||t).defaultView}var _={bubbles:!0,cancelable:!0};function N(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function W(t,n){t.insertBefore(n,t.firstChild)}function L(t){return t.parent&&t.parent!=t}function F(t,n,i,r){var e=i||{};b(t.ownerDocument);var o=r||_,u=o.bubbles,a=o.cancelable,s=new MessageEvent(n,{data:e,bubbles:u,cancelable:a});t.dispatchEvent(s)}function J(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function D(t){return B.user||(B.user=V()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(B.user.win,t)?B.userForEmbed||(B.userForEmbed=V()):B.user}function V(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function H(t,n,i,r,e,o,u,a,s,f,c){return t}function Z(t,n,i,r,e,o,u,a,s,f,c){return D().assert(t,n,i,r,e,o,u,a,s,f,c)}function $(t,n){return tt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function G(t,n){return tt(X(Q(t)),n)}function K(t,n){var i=X(Q(t));return it(i,n)?tt(i,n):null}function Q(t){return t.nodeType?(n=U(t),$(n,"ampdoc")).getAmpDoc(t):t;var n}function X(t){var n=Q(t);return n.isSingleDoc()?n.win:n}function tt(t,n){H(it(t,n));var i=nt(t)[n];return i.obj||(H(i.ctor),H(i.context),i.obj=new i.ctor(i.context),H(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function nt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function it(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var rt=function(t){return K(t,"action")},et=function(t){return $(t,"platform")},ot=function(t){return $(t,"preconnect")},ut=function(t){return tt(t,"timer")},at=function(t){return K(t,"url")},st=function(t){return G(t,"viewport")};function ft(t,n){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=f(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(n))}var ct="unstarted",ht="apiready",lt="play",vt="pause",dt=/vertical/,mt=new WeakMap,pt=new WeakMap,yt=new WeakMap;function bt(t){var n=mt.get(t);return n||(n=new t.ResizeObserver(wt),mt.set(t,n)),n}function wt(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=pt.get(e);if(o){yt.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;gt(a.type,s,r)}}}}}function gt(t,n,i){if(0==t){var r=i.contentRect,e=r.height;M(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=U(f),h=dt.test(function(t,n){return t.getComputedStyle(n)||A}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}M(n,o)}}var jt,kt,Ot,qt,xt=function(){function t(t){this.tp=t,this.ob=!1,this.ub=!1,this.ab=this.ab.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.ob&&(this.ob=t,t?(this.ub=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=pt.get(t);if(e||(e=[],pt.set(t,e),bt(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=yt.get(t);o&&setTimeout((function(){return gt(1,i,o)}))}}}(this.tp,0,this.ab)):function(t,n){!function(t,n,i){var r=pt.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){pt.delete(t),yt.delete(t);var e=t.ownerDocument.defaultView;e&&bt(e).unobserve(t)}}(t,0,n)}(this.tp,this.ab))},n.ab=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.ub){this.ub=i;var r=this.tp;i||r.pause()}},t}();function St(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=L(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function Mt(t){var n,i=null===(n=jt)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){jt||(jt=new WeakMap,kt=new WeakMap),b(kt);var n=kt.get(t);return n||(n=St((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),b(n),n.unobserve(o),b(jt),null===(e=jt.get(o))||void 0===e||e.resolve(t[r]),jt.delete(o))}}),t,{needsRootBounds:!0}),kt.set(t,n)),n}(U(t));b(jt),r.observe(t),i=new j,jt.set(t,i)}return i.promise}function Tt(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==Ot)return Ot;Ot=!1;try{var t={get capture(){return Ot=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return Ot}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function Rt(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function At(t,n,i,r){return Tt(t,n,i,r)}function Et(t){return t.data}function Pt(t){var n=t.ownerDocument||t;return qt&&qt.ownerDocument===n||(qt=n.createElement("div")),Yt}function Yt(t){return function(t,n){if(b(1===n.length),b(Array.isArray(n)||(r=n,d.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return n[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=n[0];var r,e=t.firstElementChild;return b(e),b(!e.nextElementSibling),t.removeChild(e),e}(qt,t)}var zt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Ct=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function It(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var Ut=function(){function t(){this.xn=null}var n=t.prototype;return n.add=function(t){var n=this;return this.xn||(this.xn=[]),this.xn.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.xn&&(i=t,-1!=(r=(n=this.xn).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.xn&&(this.xn.length=0)},n.fire=function(t){if(this.xn)for(var n,i=h(this.xn.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.xn)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),_t=function(){function t(){this.qy=!1,this.Py=new Ut}var n=t.prototype;return n.onSessionEnd=function(t){this.Py.add(t)},n.beginSession=function(){this.qy=!0},n.endSession=function(){this.qy&&this.Py.fire(),this.qy=!1},n.isSessionActive=function(){return this.qy},t}(),Nt={"title":"","artist":"","album":"","artwork":[{"src":""}]},Wt="registered",Lt="load",Ft="playing",Jt="pause",Bt="ended",Dt="muted",Vt="unmuted",Ht="ad_start",Zt="ad_end",$t="playing_manual",Gt="paused",Kt="video-play",Qt="user-interacted";function Xt(t){t.signals().signal(Qt)}var tn="video-manager",nn=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=J((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=p());var o="amp-extension=".concat(r);if(o){var u=It(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else W(t,n)}(t,a,It(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.Ay=null,this.Ty=null,this.Cy=null,this.We=ut(t.win),this.Yy=rt(t.getHeadNode()),this.Uy=function(){return n.Ny()},this.Fy=J((function(){return new on(n.ampdoc,n)})),this.We.delay(this.Uy,1e3)}var n=t.prototype;return n.dispose=function(){if(this.Fy().dispose(),this.Ty.disconnect(),this.Ty=null,this.Ay)for(var t=0;t<this.Ay.length;t++)this.Ay[t].dispose()},n.Ny=function(){for(var t=0;t<this.Ay.length;t++){var n=this.Ay[t];n.getPlayingState()!==Gt&&(cn(n,"video-seconds-played"),this.Ly(n))}this.We.delay(this.Uy,1e3)},n.Ly=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(y(i)&&y(r)&&r>0){var e=i/r,o=Rt(this.ampdoc.win,"".concat(tn,".").concat(n),{"time":i,"percent":e});this.Yy.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;H(t);var i=t;if(this._y(t),t.supportsPlatform()&&!this.Jy(t)){this.Ty||(this.Ty=St((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.Gy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ty.observe(i.element),At(i.element,"reloaded",(function(){return r.videoLoaded()})),this.Ay=this.Ay||[];var r=new en(this,t);this.Ay.push(r);var e=r.video.element;F(e,Wt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(Wt),e.classList.add("i-amphtml-video-interface")}},n._y=function(t){i("play",(function(){return z(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Xt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.Jy=function(t){if(rn(this.Cy,t))return this.Cy;for(var n=0;this.Ay&&n<this.Ay.length;n++){var i=this.Ay[n];if(rn(i,t))return this.Cy=i,i}return null},n.Gy=function(t){return H(this.Jy(t))},n.registerForAutoFullscreen=function(t){this.Fy().register(t)},n.Vy=function(){return this.Fy()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=D().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.Gy(r);return(e?e.getAnalyticsDetails():w()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.Gy(t).getPlayingState()},n.isMuted=function(t){return this.Gy(t).isMuted()},n.userInteracted=function(t){return this.Gy(t).userInteracted()},n.isRollingAd=function(t){return this.Gy(t).isRollingAd()},n.pauseOtherVideos=function(t){this.Ay.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==$t&&n.video.pause()}))},t}(),rn=function(t,n){return!!t&&(t.video===n||t.video.element===n)},en=function(){function t(t,n){var i=this;this.Hy=t,this.Ki=t.ampdoc,this.video=n,this.Zy=!0,this.Ky=!1,this.ob=!1,this.Qy=!1,this.Ar=!1,this.Xy=new _t,this.Xy.onSessionEnd((function(){return cn(i,"video-session")})),this.Yb=new _t,this.Yb.onSessionEnd((function(){return cn(i,"video-session-visible")})),this.Hb=J((function(){return new fn(i.Ki.win,i)})),this.Kb=!1,this.Qb=!1,this.ng=null,this.sn=!1,this.ig=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Hy.installAutoplayStyles(),this.rg=Nt,this.eg=function(){z(i.video,!1)},this.og=function(){i.video.pause()},At(n.element,Lt,(function(){return i.videoLoaded()})),At(n.element,Jt,(function(){return i.ug()})),At(n.element,"play",(function(){i.ig=!0,cn(i,Kt)})),At(n.element,Ft,(function(){return i.ag()})),At(n.element,Dt,(function(){return i.sn=!0})),At(n.element,Vt,(function(){i.sn=!1,i.Hy.pauseOtherVideos(i)})),At(n.element,"amp:video:tick",(function(t){var n=Et(t),r=n.eventType;r&&i.sg(r,n.vars)})),At(n.element,Bt,(function(){i.Qy=!1,cn(i,"video-ended")})),At(n.element,Ht,(function(){i.Qy=!0,cn(i,"video-ad-start")})),At(n.element,Zt,(function(){i.Qy=!1,cn(i,"video-ad-end")})),n.signals().whenSignal(Wt).then((function(){return i.fg()})),this.cg=J((function(){var t="firstPlay",n=Rt(i.Ki.win,t,{}),r=i.video.element;rt(r).trigger(r,t,n,1)})),this.hg()}var i=t.prototype;return i.dispose=function(){this.Hb().stop()},i.sg=function(t,i){var r=n({},"__amp:eventType",t);Object.keys(i).forEach((function(t){r["custom_".concat(t)]=i[t]})),cn(this,"video-hosted-custom",r)},i.hg=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.Zy=!1,t.ob&&t.video.pause()}))},i.isMuted=function(){return this.sn},i.isPlaybackManaged=function(){return this.Zy},i.fg=function(){this.lg()&&this.Hy.registerForAutoFullscreen(this),this.hasAutoplay&&this.vg()},i.lg=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&Z(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},i.ag=function(){this.ob=!0,this.getPlayingState()==$t&&(this.cg(),this.Hy.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=at(t);if(n&&n.artwork){var r=n.artwork;H(s(r)),r.forEach((function(t){if(t){var n=(r=t,"[object Object]"===m.call(r)?t.src:t);Z(i.isProtocolValid(n))}var r}))}}(u,this.rg),t=this.Ki.win,n=this.rg,i=this.eg,r=this.og,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(Nt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Xy.beginSession(),this.Ar&&this.Yb.beginSession(),this.ig||cn(this,Kt)},i.ug=function(){cn(this,"video-pause"),this.ob=!1,this.Qb?this.Qb=!1:this.Xy.endSession()},i.videoLoaded=function(){this.Ky=!0,this.ng=Y(this.video.element),this.dg(),this.Hb().start(),this.Ar&&this.pg()},i.dg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.rg=p(this.video.getMetadata()));var t=this.Ki.win.document;if(!this.rg.artwork||0==this.rg.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.rg.artwork=[{"src":n}])}if(!this.rg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.ng.getAttribute("title")||this.ng.getAttribute("aria-label")||t.title;i&&(this.rg.title=i)}}},i.mg=function(){this.Ky&&this.pg()},i.pg=function(){var t=this;this.Ki.isVisible()&&P(this.Ki.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.yg():t.bg()}))},i.vg=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),P(this.Ki.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.gg()):t.video.showControls()}))},i.gg=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Qt)){var e=function(t,n){for(var i=Pt(n)(Ct),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return N(r),i}(0,r),o=[e],u=[At(r,Jt,(function(){return f(!1)})),At(r,Ft,(function(){return f(!0)})),At(r,Ht,(function(){s(!1),n.showControls()})),At(r,Zt,(function(){s(!0),n.hideControls()})),At(r,Vt,(function(){return Xt(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=Pt(t)(zt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.rg);o.push(a),u.push(At(a,"click",(function(){return Xt(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Qy&&s(!1),n.signals().whenSignal(Qt).then((function(){t.cg(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){N(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},i.yg=function(){this.Zy&&(this.Ar?(this.Yb.beginSession(),z(this.video,!0),this.Kb=!0):(this.ob&&this.Yb.endSession(),this.video.pause(),this.Qb=!0))},i.bg=function(){this.Ar?this.Yb.beginSession():this.ob&&this.Yb.endSession()},i.updateVisibility=function(t){var n=this.Ar;this.Ar=t,t!=n&&this.mg()},i.getPlayingState=function(){return this.ob?this.ob&&this.Kb&&!this.userInteracted()?"playing_auto":$t:Gt},i.isRollingAd=function(){return this.Qy},i.userInteracted=function(){return null!=this.video.signals().get(Qt)},i.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([P(this.Ki.win),Mt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.sn,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),on=function(){function t(t,n){var i=this;this.Hy=n,this.Ki=t,this.wg=null,this.kg=null,this.Ay=[],this.Sg=[],this.qg=function(){return i.jg()},this.xg=function(t){return i.Og(t)==$t},this.Pg=function(t,n){return i.Ag(t,n)},this.Mg(),this.Rg()}var n=t.prototype;return n.dispose=function(){this.Sg.forEach((function(t){return t()})),this.Sg.length=0},n.register=function(t){var n=t.video,i=n.element;this.Eg(i)&&(this.Ay.push(n),At(i,Jt,this.qg),At(i,Ft,this.qg),At(i,Bt,this.qg),n.signals().whenSignal(Qt).then(this.qg),this.jg())},n.Rg=function(){var t=this,n=this.Ki.getRootNode(),i=function(){return t.Tg()};this.Sg.push(At(n,"webkitfullscreenchange",i),At(n,"mozfullscreenchange",i),At(n,"fullscreenchange",i),At(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.Ki.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.Eg=function(t){if("video"==Y(t).tagName.toLowerCase())return!0;var n=et(this.Ki.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.Tg=function(){this.wg=null},n.Mg=function(){var t=this,n=this.Ki.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.Sg.push(At(r,"change",(function(){return t.Ig()})))}this.Sg.push(At(n,"orientationchange",(function(){return t.Ig()})))},n.Ig=function(){this.isInLandscape()?null!=this.kg&&this.Cg(this.kg):this.wg&&this.Yg(this.wg)},n.Cg=function(t){var n=et(this.Ki.win);this.wg=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.zg(t).then((function(){return t.fullscreenEnter()}))},n.Yg=function(t){this.wg=null,this.zg(t,"center").then((function(){return t.fullscreenExit()}))},n.zg=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Ug();return this.Ng().then((function(){return Mt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return w();var s=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},n.Ug=function(){return st(this.Ki)},n.Ng=function(){return ut(this.Ki.win).promise(330)},n.jg=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.kg);this.kg=null;var n=this.Ay.filter(this.xg).map((function(t){return Mt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.Pg)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.kg=n})):t.kg}))},n.Ag=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=st(this.Ki),a=un(u,i),s=un(u,e);return a<s||a>s?a-s:i.top-e.top},n.Og=function(t){return this.Hy.getPlayingState(t)},t}();function un(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function an(t){return 10*t*5}var sn=function(t){return!!t&&!isNaN(t)&&t>1},fn=function(){function t(t,n){this.We=ut(t),this.Fg=n,this.Sg=null,this.Lg=0,this._g=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Fg.video.element;this.stop(),this.Sg=this.Sg||[],this.Jg()?this.Wg(this._g):this.Sg.push(function(n,i,r,e){var o=function(){t.Jg()&&t.Wg(t._g)},u=Tt(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.Sg.push(At(n,Bt,(function(){t.Jg()&&t.Bg(100)})))},n.stop=function(){if(this.Sg){for(;this.Sg.length>0;)this.Sg.pop()();this._g++}},n.Jg=function(){var t=this.Fg.video,n=t.getDuration();if(!sn(n))return!1;if(an(n)<250){var i=Math.ceil(5);this.Dg("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.Dg=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];D().warn.apply(D(),[tn].concat(n))},n.Wg=function(t){var n,i=this;if(t==this._g){var r=this.Fg,e=this.We,o=r.video,u=function(){return i.Wg(t)};if(r.getPlayingState()!=Gt){var a=o.getDuration();if(sn(a)){var s=(n=an(a),b(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);H(y(c)),this.Bg(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.Bg=function(t){t<=0||this.Lg!=t&&(this.Lg=t,this.$g(t))},n.$g=function(t){cn(this.Fg,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function cn(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),F(r.element,n,t)}))}var hn=["<iframe frameborder=0 allowfullscreen></iframe>"],ln="amp-dailymotion",vn=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(l,t);var e,u,c=(e=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(u){var i=r(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function l(t){var n;return(n=c.call(this,t)).pw=ct,n.yw=null,n.nb=null,n.sn=!1,n.Kg=null,n.Qg=null,n.bw=null,n.ww=null,n.sw=!1,n.Mb=new xt(n.element),n}var v=l.prototype;return v.preconnectCallback=function(t){ot(this.win).url(this.getAmpDoc(),"https://www.dailymotion.com",t),ot(this.win).url(this.getAmpDoc(),"https://static1.dmcdn.net",t)},v.supportsPlatform=function(){return!0},v.isInteractive=function(){return!0},v.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},v.buildCallback=function(){var t,n,i,r,e;this.yw=Z(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-dailymotion> %s",this.element),n=this.element,i="video-manager",r=nn,function(t,n,i,r,e,o){var u=nt(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&tt(t,i))}(X(e=Q(n)),e,i,r),(t=this.element,G(t,"video-manager")).register(this);var o=new j;this.Kg=o.promise,this.Qg=o.resolve;var u=new j;this.bw=u.promise,this.ww=u.resolve},v.layoutCallback=function(){return H(this.yw),this.nb=(this,t=this.gw(),i=Pt(n=this.element)(hn),function(t,n,i,r){for(var e,o=h(f(["referrerpolicy"]),!0);!(e=o()).done;){var u=e.value,a=n.getAttribute(u);null!==a&&i.setAttribute(u,a)}}(0,this.element,i),i.src=at(n).assertHttpsUrl(t,n),function(t,n){t.classList.add("i-amphtml-fill-content")}(i),n.appendChild(i),i),At(this.win,"message",this.jw.bind(this)),this.loadPromise(this.nb);var t,n,i},v.unlayoutCallback=function(){var t=this.nb;return t&&(this.element.removeChild(t),this.nb=null),this.Mb.updatePlaying(!1),!0},v.jw=function(t){var i;if(function(t,n,i){return!(!n||t.source!=n.contentWindow)&&"https://www.dailymotion.com"==t.origin}(t,this.nb)){var r=Et(t);if(r&&t.type&&"message"==t.type){var e=function(t){var n,i=p();if(!t)return i;for(;n=C.exec(t);){var r=I(n[1],n[1]),e=n[2]?I(n[2].replace(/\+/g," "),n[2]):"";i[r]=e}return i}(r);if(void 0!==e)switch(function(t,n,i){if(null==i[n])return!1;var r=i[n];(s(r)?r:[r]).forEach((function(n){F(t,n)}))}(this.element,e.event,(n(i={},ht,Lt),n(i,"end",[Bt,Jt]),n(i,vt,Jt),n(i,lt,Ft),i)),e.event){case ht:this.Qg(!0);break;case lt:this.pw=e.event,this.Mb.updatePlaying(!0);break;case vt:this.pw=e.event,this.Mb.updatePlaying(!1);break;case"end":this.pw=vt,this.Mb.updatePlaying(!1);break;case"volumechange":var o=0==e.volume||"true"==e.muted;this.pw!=ct&&this.sn==o||(this.sn=o,F(this.element,function(t){return t?Dt:Vt}(o)));break;case"progress":this.ww(!0);break;case"fullscreenchange":this.sw="true"==e.fullscreen}}}},v.rw=function(t,n){var i=this;this.Kg.then((function(){i.nb&&i.nb.contentWindow&&i.nb.contentWindow.postMessage(function(t,n){return JSON.stringify({"command":t,"parameters":n})}(t,n),"https://www.dailymotion.com")}))},v.gw=function(){var t=this.element.dataset,n=t.endscreenEnable,i=t.info,r=t.mute,e=t.sharingEnable,o=t.start,u=t.uiHighlight,s=t.uiLogo;return function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],e=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=arguments.length>7?arguments[7]:void 0,f=arguments.length>8?arguments[8]:void 0,c=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],h=arguments.length>10?arguments[10]:void 0;return ft("https://www.dailymotion.com/embed/video/".concat(encodeURIComponent(n),"?api=1&html=1&app=amp"),a({"endscreen-enable":r?void 0:r,"info":e?void 0:e,"mute":o||i&&P(t)?1:void 0,"sharing-enable":u?void 0:u,"start":s,"ui-highlight":f,"ui-logo":c?void 0:c},h))}(this.win,this.yw,this.element.hasAttribute("autoplay"),"false"!==n,"false"!==i,"true"===r,"false"!==e,o,u,"false"!==s,function(t,n,i){var r=t.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(this.element))},v.pauseCallback=function(){this.pause()},v.play=function(t){var n=this;this.rw("play"),t&&this.pw!=vt&&this.bw.then((function(){n.rw("play")}))},v.pause=function(){this.rw("pause")},v.mute=function(){var t=this;this.rw("muted",[!0]),this.Kg.then((function(){F(t.element,Dt),t.sn=!0}))},v.unmute=function(){var t=this;this.rw("muted",[!1]),this.Kg.then((function(){F(t.element,Vt),t.sn=!1}))},v.showControls=function(){this.rw("controls",[!0])},v.hideControls=function(){this.rw("controls",[!1])},v.fullscreenEnter=function(){var t,n,i=et(this.win);if(i.isSafari()||i.isIos())this.rw("fullscreen",[!0]);else{if(!this.nb)return;(n=(t=this.nb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)}},v.fullscreenExit=function(){var t=et(this.win);if(t.isSafari()||t.isIos())this.rw("fullscreen",[!1]);else{if(!this.nb)return;!function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.nb)}},v.isFullscreen=function(){var t=et(this.win);return t.isSafari()||t.isIos()?this.sw:!!this.nb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.nb)},v.getMetadata=function(){},v.preimplementsMediaSessionAPI=function(){return!1},v.preimplementsAutoFullscreen=function(){return!1},v.getCurrentTime=function(){return 0},v.getDuration=function(){return 1},v.getPlayedRanges=function(){return[]},v.seekTo=function(t){this.user().error(ln,"`seekTo` not supported.")},l}(t.BaseElement);t.registerElement(ln,vn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-dailymotion-0.1.js.map