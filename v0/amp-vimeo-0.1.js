;
(self.AMP=self.AMP||[]).push({m:0,v:"2311171837000",n:"amp-vimeo",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,i){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,i)}function i(n){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var o=Array.isArray;function u(n){return o(n)?n:[n]}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=n[i];return r}function s(n,t){var i="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(i)return(i=i.call(n)).next.bind(i);if(Array.isArray(n)||(i=function(n,t){if(n){if("string"==typeof n)return a(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype,c=f.hasOwnProperty,h=f.toString;function l(n){return"[object Object]"===h.call(n)}function v(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function d(n){return"number"==typeof n&&isFinite(n)}function m(n,t,i,r,e,o,u,a,s,f,c){return n}function p(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null==t||t(n),null}}function y(n){return(n.ownerDocument||n).defaultView}var b,w={bubbles:!0,cancelable:!0};function g(n){var t;null===(t=n.parentElement)||void 0===t||t.removeChild(n)}function k(n,t){n.insertBefore(t,n.firstChild)}function q(n){return n.parent&&n.parent!=n}function j(n,t,i,r){var e=i||{};m(n.ownerDocument);var o=r||w,u=o.bubbles,a=o.cancelable,s=new MessageEvent(t,{data:e,bubbles:u,cancelable:a});n.dispatchEvent(s)}function x(n){var t=n.ownerDocument||n;return b&&b.ownerDocument===t||(b=t.createElement("div")),S}function S(n){return function(n,t){if(m(1===t.length),m(Array.isArray(t)||(r=t,c.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(n){return t[0]}});n.innerHTML=i.createHTML("ignored")}else n.innerHTML=t[0];var r,e=n.firstElementChild;return m(e),m(!e.nextElementSibling),n.removeChild(e),e}(b,n)}function O(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var i=n.message,r=n.stack,e=new Error(i);for(var o in n)e[o]=n[o];return e.stack=r,e}function M(n){for(var t,i=null,r="",e=s(arguments,!0);!(t=e()).done;){var o=t.value;o instanceof Error&&!i?i=O(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function T(n){var t,i;null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n)}function E(n){var t=M.apply(null,arguments);setTimeout((function(){throw T(t),t}))}function P(n){try{for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return n.apply(null,i)}catch(n){E(n)}}function A(n){var t=M.apply(null,arguments);return t.expected=!0,t}function R(n){var t=!1,i=null,r=n;return function(){if(!t){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];i=r.apply(self,e),t=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Y,z=self.__AMP_LOG;function C(n){return z.user||(z.user=I()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(z.user.win,n)?z.userForEmbed||(z.userForEmbed=I()):z.user}function I(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function _(n,t,i,r,e,o,u,a,s,f,c){return n}function U(n,t,i,r,e,o,u,a,s,f,c){return C().assert(n,t,i,r,e,o,u,a,s,f,c)}function L(){return Y||(Y=Promise.resolve(void 0))}var N=function(){var n=this;this.promise=new Promise((function(t,i){n.resolve=t,n.reject=i}))};function W(n){return new Promise((function(t){t(n())}))}function F(n,t){return $(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function J(n,t){return $(D(B(n)),t)}function V(n,t){var i=D(B(n));return Z(i,t)?$(i,t):null}function B(n){return n.nodeType?(t=y(n),F(t,"ampdoc")).getAmpDoc(n):n;var t}function D(n){var t=B(n);return t.isSingleDoc()?t.win:t}function $(n,t){_(Z(n,t));var i=H(n)[t];return i.obj||(_(i.ctor),_(i.context),i.obj=new i.ctor(i.context),_(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function H(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}function Z(n,t){var i=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!i||!i.ctor)}var G=function(n){return V(n,"action")},K=function(n){return F(n,"platform")},Q=function(n){return F(n,"preconnect")},X=function(n){return $(n,"timer")},nn=function(n){return V(n,"url")},tn=function(n){return J(n,"viewport")},rn="autoplay",en="registered",on="load",un="playing",an="pause",sn="ended",fn="muted",cn="unmuted",hn="ad_start",ln="ad_end",vn="playing_manual",dn="paused",mn="video-play",pn="user-interacted";function yn(n){n.signals().signal(pn)}var bn=["<iframe frameborder=0 allowfullscreen></iframe>"];function wn(n,t){var i;null==n||null===(i=n.contentWindow)||void 0===i||i.postMessage(t,"*")}var gn,kn={"play":un,"pause":an,"ended":sn,"volumechange":null};function qn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return JSON.stringify({"method":n,"value":t})}var jn=["Webkit","webkit","Moz","moz","ms","O","o"],xn={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function Sn(n,t,i,r,e){var o=function(n,t,i){if(t.startsWith("--"))return t;gn||(gn=v());var r=gn[t];if(!r||i){if(r=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var i=0;i<jn.length;i++){var r=jn[i]+t;if(void 0!==n[r])return r}return""}(n,e);void 0!==n[o]&&(r=o)}i||(gn[t]=r)}return r}(n.style,t,e);if(o){var u,a=r?i+r:i;n.style.setProperty((u=o.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),jn.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}function On(n){return null==n.__AMP_AUTOPLAY&&(n.__AMP_AUTOPLAY=function(n){var t,i=n.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(n,t){for(var i in t)Sn(n,i,t[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),t=i,W((function(){return t.play()})).catch((function(){})),Promise.resolve(!i.paused)}(n)),n.__AMP_AUTOPLAY}function Mn(n){return n.querySelector("video, iframe")}function Tn(n,t){var i=W((function(){return n.play(!!t)}));return i.catch((function(n){!function(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];T(A.apply(null,i))}("TRYPLAY",n)})),i}var En=/vertical/,Pn=new WeakMap,An=new WeakMap,Rn=new WeakMap;function Yn(n){var t=Pn.get(n);return t||(t=new n.ResizeObserver(zn),Pn.set(n,t)),t}function zn(n){for(var t=new Set,i=n.length-1;i>=0;i--){var r=n[i],e=r.target;if(!t.has(e)){t.add(e);var o=An.get(e);if(o){Rn.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;Cn(a.type,s,r)}}}}}function Cn(n,t,i){if(0==n){var r=i.contentRect,e=r.height;P(t,{width:r.width,height:e})}else if(1==n){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=y(f),h=En.test(function(n,t){return n.getComputedStyle(t)||xn}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}P(t,o)}}var In,_n,Un,Ln=function(){function n(n){this.tp=n,this.ob=!1,this.ub=!1,this.ab=this.ab.bind(this)}var t=n.prototype;return t.updatePlaying=function(n){n!==this.ob&&(this.ob=n,n?(this.ub=!1,function(n,t,i){var r=n.ownerDocument.defaultView;if(r){var e=An.get(n);if(e||(e=[],An.set(n,e),Yn(r).observe(n)),!e.some((function(n){return n.callback===i&&1===n.type}))){e.push({type:1,callback:i});var o=Rn.get(n);o&&setTimeout((function(){return Cn(1,i,o)}))}}}(this.tp,0,this.ab)):function(n,t){!function(n,t,i){var r=An.get(n);if(r&&(function(n,t){for(var r=[],e=0,o=0;o<n.length;o++){var u=n[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(n[e]=u),e++)}var a;e<n.length&&(n.length=e)}(r),0==r.length)){An.delete(n),Rn.delete(n);var e=n.ownerDocument.defaultView;e&&Yn(e).unobserve(n)}}(n,0,t)}(this.tp,this.ab))},t.ab=function(n){var t=n.blockSize,i=n.inlineSize>0&&t>0;if(i!==this.ub){this.ub=i;var r=this.tp;i||r.pause()}},n}();function Nn(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=q(t)&&(r||e)?t.document:void 0;return new t.IntersectionObserver(n,{threshold:o,root:u,rootMargin:e})}function Wn(n){var t,i=null===(t=In)||void 0===t?void 0:t.get(n);if(!i){var r=function(n){In||(In=new WeakMap,_n=new WeakMap),m(_n);var t=_n.get(n);return t||(t=Nn((function(n){for(var i=new Set,r=n.length-1;r>=0;r--){var e,o=n[r].target;i.has(o)||(i.add(o),m(t),t.unobserve(o),m(In),null===(e=In.get(o))||void 0===e||e.resolve(n[r]),In.delete(o))}}),n,{needsRootBounds:!0}),_n.set(n,t)),t}(y(n));m(In),r.observe(n),i=new N,In.set(n,i)}return i.promise}function Fn(n,t,i,r){var e=n,o=i,u=function(n){try{return o(n)}catch(n){var t,i;throw null===(t=(i=self).__AMP_REPORT_ERROR)||void 0===t||t.call(i,n),n}},a=function(){if(void 0!==Un)return Un;Un=!1;try{var n={get capture(){return Un=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return Un}(),s=!(null==r||!r.capture);return e.addEventListener(t,u,a?r:s),function(){null==e||e.removeEventListener(t,u,a?r:s),o=null,e=null,u=null}}function Jn(n,t,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof n.CustomEvent)return new n.CustomEvent(t,e);var o=n.document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,i),o}function Vn(n,t,i,r){return Fn(n,t,i,r)}function Bn(n){return n.data}var Dn=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],$n=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Hn(n,t,i){if(t[i])return t[i];var r=n.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(t[i]=r,r):null}var Zn=function(){function n(){this.xn=null}var t=n.prototype;return t.add=function(n){var t=this;return this.xn||(this.xn=[]),this.xn.push(n),function(){t.remove(n)}},t.remove=function(n){var t,i,r;this.xn&&(i=n,-1!=(r=(t=this.xn).indexOf(i))&&t.splice(r,1))},t.removeAll=function(){this.xn&&(this.xn.length=0)},t.fire=function(n){if(this.xn)for(var t,i=s(this.xn.slice(),!0);!(t=i()).done;)(0,t.value)(n)},t.getHandlerCount=function(){var n,t;return null!==(n=null===(t=this.xn)||void 0===t?void 0:t.length)&&void 0!==n?n:0},n}(),Gn=function(){function n(){this.qy=!1,this.Py=new Zn}var t=n.prototype;return t.onSessionEnd=function(n){this.Py.add(n)},t.beginSession=function(){this.qy=!0},t.endSession=function(){this.qy&&this.Py.fire(),this.qy=!1},t.isSessionActive=function(){return this.qy},n}(),Kn={"title":"","artist":"","album":"","artwork":[{"src":""}]},Qn="video-manager",Xn=function(){function n(n){var t=this;this.ampdoc=n,this.installAutoplayStyles=R((function(){return function(n){!function(n,t,i,r,e){var o=n.getHeadNode();!function(n,t,i,r){var e=n.__AMP_CSS_SM;e||(e=n.__AMP_CSS_SM=v());var o="amp-extension=".concat(r);if(o){var u=Hn(n,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==t&&(u.textContent=t),u}var a=(n.ownerDocument||n).createElement("style");a.textContent=t;a.setAttribute("amp-extension",r),function(n,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;n.insertBefore(t,r)}else k(n,t)}(n,a,Hn(n,e,"amp-runtime")),o&&(e[o]=a)}(o,function(n,t){var i=n.__AMP_CSS_TR;return i?i(t):t}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(n)}(t.ampdoc)})),this.Ay=null,this.Ty=null,this.Cy=null,this.We=X(n.win),this.Yy=G(n.getHeadNode()),this.Uy=function(){return t.Ny()},this.Fy=R((function(){return new it(t.ampdoc,t)})),this.We.delay(this.Uy,1e3)}var t=n.prototype;return t.dispose=function(){if(this.Fy().dispose(),this.Ty.disconnect(),this.Ty=null,this.Ay)for(var n=0;n<this.Ay.length;n++)this.Ay[n].dispose()},t.Ny=function(){for(var n=0;n<this.Ay.length;n++){var t=this.Ay[n];t.getPlayingState()!==dn&&(at(t,"video-seconds-played"),this.Ly(t))}this.We.delay(this.Uy,1e3)},t.Ly=function(n){var t="timeUpdate",i=n.video.getCurrentTime(),r=n.video.getDuration();if(d(i)&&d(r)&&r>0){var e=i/r,o=Jn(this.ampdoc.win,"".concat(Qn,".").concat(t),{"time":i,"percent":e});this.Yy.trigger(n.video.element,t,o,1)}},t.register=function(n){var t=this;_(n);var i=n;if(this._y(n),n.supportsPlatform()&&!this.Jy(n)){this.Ty||(this.Ty=Nn((function(n){return n.forEach((function(n){var i=n.isIntersecting,r=n.target;t.Gy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ty.observe(i.element),Vn(i.element,"reloaded",(function(){return r.videoLoaded()})),this.Ay=this.Ay||[];var r=new tt(this,n);this.Ay.push(r);var e=r.video.element;j(e,en),function(n){n.classList.add("i-amphtml-media-component")}(e),n.signals().signal(en),e.classList.add("i-amphtml-video-interface")}},t._y=function(n){i("play",(function(){return Tn(n,!1)})),i("pause",(function(){return n.pause()})),i("mute",(function(){return n.mute()})),i("unmute",(function(){return n.unmute()}));var t=function(){return n.fullscreenEnter()};function i(t,i){n.registerAction(t,(function(){yn(n),i()}),1)}i("fullscreenenter",t),i("fullscreen",t)},t.Jy=function(n){if(nt(this.Cy,n))return this.Cy;for(var t=0;this.Ay&&t<this.Ay.length;t++){var i=this.Ay[t];if(nt(i,n))return this.Cy=i,i}return null},t.Gy=function(n){return _(this.Jy(n))},t.registerForAutoFullscreen=function(n){this.Fy().register(n)},t.Vy=function(){return this.Fy()},t.getVideoStateProperty=function(n,t){var i=this.ampdoc.getRootNode(),r=C().assertElement(i.getElementById(n),'Could not find an element with id="'.concat(n,'" for VIDEO_STATE')),e=this.Gy(r);return(e?e.getAnalyticsDetails():L()).then((function(n){return n?n[t]:""}))},t.getPlayingState=function(n){return this.Gy(n).getPlayingState()},t.isMuted=function(n){return this.Gy(n).isMuted()},t.userInteracted=function(n){return this.Gy(n).userInteracted()},t.isRollingAd=function(n){return this.Gy(n).isRollingAd()},t.pauseOtherVideos=function(n){this.Ay.forEach((function(t){t.isPlaybackManaged()&&t!==n&&t.getPlayingState()==vn&&t.video.pause()}))},n}(),nt=function(n,t){return!!n&&(n.video===t||n.video.element===t)},tt=function(){function n(n,t){var i=this;this.Hy=n,this.Ki=n.ampdoc,this.video=t,this.Zy=!0,this.Ky=!1,this.ob=!1,this.Qy=!1,this.Ar=!1,this.Xy=new Gn,this.Xy.onSessionEnd((function(){return at(i,"video-session")})),this.Yb=new Gn,this.Yb.onSessionEnd((function(){return at(i,"video-session-visible")})),this.Hb=R((function(){return new ut(i.Ki.win,i)})),this.Kb=!1,this.Qb=!1,this.ng=null,this.sn=!1,this.ig=!1,this.hasAutoplay=t.element.hasAttribute(rn),this.hasAutoplay&&this.Hy.installAutoplayStyles(),this.rg=Kn,this.eg=function(){Tn(i.video,!1)},this.og=function(){i.video.pause()},Vn(t.element,on,(function(){return i.videoLoaded()})),Vn(t.element,an,(function(){return i.ug()})),Vn(t.element,"play",(function(){i.ig=!0,at(i,mn)})),Vn(t.element,un,(function(){return i.ag()})),Vn(t.element,fn,(function(){return i.sn=!0})),Vn(t.element,cn,(function(){i.sn=!1,i.Hy.pauseOtherVideos(i)})),Vn(t.element,"amp:video:tick",(function(n){var t=Bn(n),r=t.eventType;r&&i.sg(r,t.vars)})),Vn(t.element,sn,(function(){i.Qy=!1,at(i,"video-ended")})),Vn(t.element,hn,(function(){i.Qy=!0,at(i,"video-ad-start")})),Vn(t.element,ln,(function(){i.Qy=!1,at(i,"video-ad-end")})),t.signals().whenSignal(en).then((function(){return i.fg()})),this.cg=R((function(){var n="firstPlay",t=Jn(i.Ki.win,n,{}),r=i.video.element;G(r).trigger(r,n,t,1)})),this.hg()}var t=n.prototype;return t.dispose=function(){this.Hb().stop()},t.sg=function(n,t){var i,r,e,o=(e=n,(r="__amp:eventType")in(i={})?Object.defineProperty(i,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[r]=e,i);Object.keys(t).forEach((function(n){o["custom_".concat(n)]=t[n]})),at(this,"video-hosted-custom",o)},t.hg=function(){var n=this;this.video.signals().whenSignal("playback-delegated").then((function(){n.Zy=!1,n.ob&&n.video.pause()}))},t.isMuted=function(){return this.sn},t.isPlaybackManaged=function(){return this.Zy},t.fg=function(){this.lg()&&this.Hy.registerForAutoFullscreen(this),this.hasAutoplay&&this.vg()},t.lg=function(){var n=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!n.hasAttribute("rotate-to-fullscreen"))&&U(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",n)},t.ag=function(){this.ob=!0,this.getPlayingState()==vn&&(this.cg(),this.Hy.pauseOtherVideos(this));var n,t,i,r,e,u=this.video,a=u.element;u.preimplementsMediaSessionAPI()||a.classList.contains("i-amphtml-disable-mediasession")||(function(n,t){var i=nn(n);if(t&&t.artwork){var r=t.artwork;_(o(r)),r.forEach((function(n){if(n){var t=l(n)?n.src:n;U(i.isProtocolValid(t))}}))}}(a,this.rg),n=this.Ki.win,t=this.rg,i=this.eg,r=this.og,"mediaSession"in(e=n.navigator)&&n.MediaMetadata&&(e.mediaSession.metadata=new n.MediaMetadata(Kn),e.mediaSession.metadata=new n.MediaMetadata(t),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.Xy.beginSession(),this.Ar&&this.Yb.beginSession(),this.ig||at(this,mn)},t.ug=function(){at(this,"video-pause"),this.ob=!1,this.Qb?this.Qb=!1:this.Xy.endSession()},t.videoLoaded=function(){this.Ky=!0,this.ng=Mn(this.video.element),this.dg(),this.Hb().start(),this.Ar&&this.pg()},t.dg=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.rg=v(this.video.getMetadata()));var n=this.Ki.win.document;if(!this.rg.artwork||0==this.rg.artwork.length){var t=function(n){var t=n.querySelector('script[type="application/ld+json"]');if(t){var i=p(t.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(n)||function(n){var t=n.querySelector('meta[property="og:image"]');return t?t.getAttribute("content"):void 0}(n)||function(n){var t=n.querySelector('link[rel="shortcut icon"]')||n.querySelector('link[rel="icon"]');return t?t.getAttribute("href"):void 0}(n);t&&(this.rg.artwork=[{"src":t}])}if(!this.rg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.ng.getAttribute("title")||this.ng.getAttribute("aria-label")||n.title;i&&(this.rg.title=i)}}},t.mg=function(){this.Ky&&this.pg()},t.pg=function(){var n=this;this.Ki.isVisible()&&On(this.Ki.win).then((function(t){n.hasAutoplay&&!n.userInteracted()&&t?n.yg():n.bg()}))},t.vg=function(){var n=this;this.video.isInteractive()&&this.video.hideControls(),On(this.Ki.win).then((function(t){t||!n.video.isInteractive()?(n.video.mute(),n.gg()):n.video.showControls()}))},t.gg=function(){var n=this,t=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(pn)){var e=function(n,t){for(var i=x(t)($n),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return g(r),i}(0,r),o=[e],u=[Vn(r,an,(function(){return f(!1)})),Vn(r,un,(function(){return f(!0)})),Vn(r,hn,(function(){s(!1),t.showControls()})),Vn(r,ln,(function(){s(!0),t.hideControls()})),Vn(r,cn,(function(){return yn(t)}))];if(t.isInteractive()){t.hideControls();var a=function(n,t){var i=x(n)(Dn);return t&&t.title&&i.setAttribute("aria-label",t.title),i}(r,this.rg);o.push(a),u.push(Vn(a,"click",(function(){return yn(t)})))}t.mutateElementSkipRemeasure((function(){o.forEach((function(n){r.appendChild(n)}))})),this.Qy&&s(!1),t.signals().whenSignal(pn).then((function(){n.cg(),t.isInteractive()&&t.showControls(),t.unmute(),u.forEach((function(n){n()})),t.mutateElementSkipRemeasure((function(){o.forEach((function(n){g(n)}))}))}))}function s(n){t.mutateElementSkipRemeasure((function(){o.forEach((function(t){!function(n,t){void 0===t&&(t=n.hasAttribute("hidden")),t?n.removeAttribute("hidden"):n.setAttribute("hidden","")}(t,n)}))}))}function f(n){t.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",n)}))}},t.yg=function(){this.Zy&&(this.Ar?(this.Yb.beginSession(),Tn(this.video,!0),this.Kb=!0):(this.ob&&this.Yb.endSession(),this.video.pause(),this.Qb=!0))},t.bg=function(){this.Ar?this.Yb.beginSession():this.ob&&this.Yb.endSession()},t.updateVisibility=function(n){var t=this.Ar;this.Ar=n,n!=t&&this.mg()},t.getPlayingState=function(){return this.ob?this.ob&&this.Kb&&!this.userInteracted()?"playing_auto":vn:dn},t.isRollingAd=function(){return this.Qy},t.userInteracted=function(){return null!=this.video.signals().get(pn)},t.getAnalyticsDetails=function(){var n=this,t=this.video;return Promise.all([On(this.Ki.win),Wn(t.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=n.hasAutoplay&&r,s=t.getPlayedRanges(),f=s.reduce((function(n,t){return n+t[1]-t[0]}),0);return{"autoplay":a,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":o,"id":t.element.id,"muted":n.sn,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":n.getPlayingState(),"width":u}}))},n}(),it=function(){function n(n,t){var i=this;this.Hy=t,this.Ki=n,this.wg=null,this.kg=null,this.Ay=[],this.Sg=[],this.qg=function(){return i.jg()},this.xg=function(n){return i.Og(n)==vn},this.Pg=function(n,t){return i.Ag(n,t)},this.Mg(),this.Rg()}var t=n.prototype;return t.dispose=function(){this.Sg.forEach((function(n){return n()})),this.Sg.length=0},t.register=function(n){var t=n.video,i=t.element;this.Eg(i)&&(this.Ay.push(t),Vn(i,an,this.qg),Vn(i,un,this.qg),Vn(i,sn,this.qg),t.signals().whenSignal(pn).then(this.qg),this.jg())},t.Rg=function(){var n=this,t=this.Ki.getRootNode(),i=function(){return n.Tg()};this.Sg.push(Vn(t,"webkitfullscreenchange",i),Vn(t,"mozfullscreenchange",i),Vn(t,"fullscreenchange",i),Vn(t,"MSFullscreenChange",i))},t.isInLandscape=function(){return(n=this.Ki.win).screen&&"orientation"in n.screen?n.screen.orientation.type.startsWith("landscape"):90==Math.abs(n.orientation);var n},t.Eg=function(n){if("video"==Mn(n).tagName.toLowerCase())return!0;var t=K(this.Ki.win);return!t.isIos()&&!t.isSafari()||function(n){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[n.tagName.toLowerCase()]}(n)},t.Tg=function(){this.wg=null},t.Mg=function(){var n=this,t=this.Ki.win,i=t.screen;if(i&&"orientation"in i){var r=i.orientation;this.Sg.push(Vn(r,"change",(function(){return n.Ig()})))}this.Sg.push(Vn(t,"orientationchange",(function(){return n.Ig()})))},t.Ig=function(){this.isInLandscape()?null!=this.kg&&this.Cg(this.kg):this.wg&&this.Yg(this.wg)},t.Cg=function(n){var t=K(this.Ki.win);this.wg=n,t.isAndroid()&&t.isChrome()?n.fullscreenEnter():this.zg(n).then((function(){return n.fullscreenEnter()}))},t.Yg=function(n){this.wg=null,this.zg(n,"center").then((function(){return n.fullscreenExit()}))},t.zg=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=n.element,r=this.Ug();return this.Ng().then((function(){return Wn(i)})).then((function(n){var e=n.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return L();var s=t||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},t.Ug=function(){return tn(this.Ki)},t.Ng=function(){return X(this.Ki.win).promise(330)},t.jg=function(){var n=this;if(this.isInLandscape())return Promise.resolve(this.kg);this.kg=null;var t=this.Ay.filter(this.xg).map((function(n){return Wn(n.element)}));return Promise.all(t).then((function(t){var i=t.sort(n.Pg)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(t){return n.kg=t})):n.kg}))},t.Ag=function(n,t){var i=n.boundingClientRect,r=n.intersectionRatio,e=t.boundingClientRect,o=r-t.intersectionRatio;if(Math.abs(o)>.1)return o;var u=tn(this.Ki),a=rt(u,i),s=rt(u,e);return a<s||a>s?a-s:i.top-e.top},t.Og=function(n){return this.Hy.getPlayingState(n)},n}();function rt(n,t){var i=t.top+t.height/2,r=n.getSize().height/2;return Math.abs(i-r)}function et(n){return 10*n*5}var ot=function(n){return!!n&&!isNaN(n)&&n>1},ut=function(){function n(n,t){this.We=X(n),this.Fg=t,this.Sg=null,this.Lg=0,this._g=0}var t=n.prototype;return t.start=function(){var n=this,t=this.Fg.video.element;this.stop(),this.Sg=this.Sg||[],this.Jg()?this.Wg(this._g):this.Sg.push(function(t,i,r,e){var o=function(){n.Jg()&&n.Wg(n._g)},u=Fn(t,"loadedmetadata",(function(n){try{o(n)}finally{o=null,u()}}),void 0);return u}(t)),this.Sg.push(Vn(t,sn,(function(){n.Jg()&&n.Bg(100)})))},t.stop=function(){if(this.Sg){for(;this.Sg.length>0;)this.Sg.pop()();this._g++}},t.Jg=function(){var n=this.Fg.video,t=n.getDuration();if(!ot(t))return!1;if(et(t)<250){var i=Math.ceil(5);this.Dg("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",n.element)}return!0},t.Dg=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];C().warn.apply(C(),[Qn].concat(t))},t.Wg=function(n){var t,i=this;if(n==this._g){var r=this.Fg,e=this.We,o=r.video,u=function(){return i.Wg(n)};if(r.getPlayingState()!=dn){var a=o.getDuration();if(ot(a)){var s=(t=et(a),m(!0),Math.min(Math.max(t,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);_(d(c)),this.Bg(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},t.Bg=function(n){n<=0||this.Lg!=n&&(this.Lg=n,this.$g(n))},t.$g=function(n){at(this.Fg,"video-percentage-played",{"normalizedPercentage":n.toString()})},n}();function at(n,t,i){var r=n.video;n.getAnalyticsDetails().then((function(n){i&&Object.assign(n,i),j(r.element,t,n)}))}var st="amp-vimeo",ft=function(n){!function(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),i&&t(n,i)}(c,n);var r,a,f=(r=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=i(r);if(a){var o=i(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return e(this,n)});function c(n){var t;return(t=f.call(this,n)).nb=null,t.mj=R((function(){return t.Aw()})),t.sn=!1,t.ck=function(n){return t.cn(n)},t.yj=null,t.Mb=new Ln(t.element),t}var h=c.prototype;return h.preconnectCallback=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Q(this.win),i=this.getAmpDoc();t.url(i,"https://player.vimeo.com",n),t.url(i,"https://i.vimeocdn.com",n),t.url(i,"https://f.vimeocdn.com",n)},h.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},h.buildCallback=function(){var n,t,i,r;n=this.getAmpDoc(),t="video-manager",i=Xn,function(n,t,i,r,e,o){var u=H(n),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=t,a.sharedInstance=!1,a.resolve&&$(n,i))}(D(r=B(n)),r,t,i)},h.layoutCallback=function(){var n=this,t=this.element,i=U(t.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-vimeo> %s",t);return this.vq().then((function(t){return n.dq(function(n,t,i){return function(n,t,i){if(!t)return n;var r=n.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(t):"?".concat(t))+(r[1]?"#".concat(r[1]):"")}("https://player.vimeo.com/video/".concat(encodeURIComponent(n)),function(n){var t,i,r=[];for(var e in n){var o=n[e];if(null!=o){o=u(o);for(var a=0;a<o.length;a++)r.push((t=e,i=o[a],"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(i))))}}return r.join("&")}({"dnt":i?"1":void 0,"muted":t?"1":void 0}))}(i,t,n.element.hasAttribute("do-not-track")))}))},h.dq=function(n){var t=function(n,t,i,r){var e=n.element,o=x(e)(bn);return function(n,t,i,r){for(var e,o=s(u(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,f=t.getAttribute(a);null!==f&&i.setAttribute(a,f)}}(0,n.element,o),o.src=nn(e).assertHttpsUrl(t,e),function(n,t){n.classList.add("i-amphtml-fill-content")}(o),e.appendChild(o),o}(this,n);return this.nb=t,this.yj=Vn(this.win,"message",this.ck),this.rw("ping"),this.loadPromise(t)},h.unlayoutCallback=function(){return this.dk(),this.Mb.updatePlaying(!1),!0},h.dk=function(){this.nb&&(g(this.nb),this.nb=null),this.yj&&(this.yj(),this.yj=null)},h.vq=function(){return this.element.hasAttribute(rn)?On(this.win):Promise.resolve(!1)},h.Aw=function(){var n,t,i=this.element;n=this.nb,Object.keys(kn).forEach((function(t){wn(n,qn("addEventListener",t))})),(t=i,J(t,"video-manager")).register(this),j(i,on)},h.cn=function(n){if(function(n,t,i){return!(!t||n.source!=t.contentWindow)&&("string"==typeof i?i==n.origin:i.test(n.origin))}(n,this.nb,/^(https?:)?\/\/((player|www)\.)?vimeo.com(?=$|\/)/)){var t=Bn(n);if((i=t)&&(l(i)||i.startsWith("{"))){var i,r,e=l(r=t)?r:p(r);if(null!=e)if("ready"!=e.event&&"ping"!=e.method){var u,a=this.element;switch(e.event){case"play":this.Mb.updatePlaying(!0);break;case"pause":case"ended":this.Mb.updatePlaying(!1)}if(!function(n,t,i){if(null==i[t])return!1;var r=i[t];return(o(r)?r:[r]).forEach((function(t){j(n,t)})),!0}(a,e.event,kn)&&"volumechange"==e.event){var s=e.data&&e.data.volume;if(!s)return;var f=s<=0;if(f==this.sn)return;return this.sn=f,void j(a,(u=f,u?fn:cn))}}else this.mj()}}},h.pauseCallback=function(){this.pause()},h.pause=function(){this.rw("pause")},h.play=function(){this.rw("play")},h.mute=function(){this.sn||this.rw("setVolume","0")},h.unmute=function(){this.rw("setVolume","1")},h.isInteractive=function(){return!0},h.supportsPlatform=function(){return!0},h.preimplementsMediaSessionAPI=function(){return!0},h.preimplementsAutoFullscreen=function(){return!1},h.fullscreenEnter=function(){},h.fullscreenExit=function(){},h.isFullscreen=function(){return!1},h.showControls=function(){},h.hideControls=function(){},h.getMetadata=function(){},h.getDuration=function(){return 0},h.getCurrentTime=function(){return 0},h.getPlayedRanges=function(){return[]},h.rw=function(n,t){wn(this.nb,qn(n,t))},h.seekTo=function(n){this.user().error(st,"`seekTo` not supported.")},c}(n.BaseElement);n.registerElement(st,ft)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-vimeo-0.1.js.map