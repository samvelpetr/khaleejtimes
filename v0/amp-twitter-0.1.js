;
(self.AMP=self.AMP||[]).push({m:0,v:"2311171837000",n:"amp-twitter",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var o=Array.isArray;function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function a(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,c=Object.prototype,l=c.hasOwnProperty;function s(n){var t=Object.create(null);return n&&Object.assign(t,n),t}function v(n,t,r,e,i,o,u,a,f,c,l){return n}function m(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,e=n.stack,i=new Error(r);for(var o in n)i[o]=n[o];return i.stack=e,i}function h(n){for(var t,r=null,e="",i=a(arguments,!0);!(t=i()).done;){var o=t.value;o instanceof Error&&!r?r=m(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function p(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}function d(n){return JSON.parse(n)}function b(n,t){try{return d(n)}catch(n){return null==t||t(n),null}}function y(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}function w(n){var t,r=parseFloat(n);return"number"==typeof(t=r)&&isFinite(t)?r:void 0}function g(n){return function(n,t){if(v(1===t.length),v(Array.isArray(t)||(e=t,l.call(e,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var r=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(n){return t[0]}});n.innerHTML=r.createHTML("ignored")}else n.innerHTML=t[0];var e,i=n.firstElementChild;return v(i),v(!i.nextElementSibling),n.removeChild(i),i}(f,n)}c.toString;var j=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function O(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return t}}function S(n){var t,r=s();if(!n)return r;for(;t=j.exec(n);){var e=O(t[1],t[1]),i=t[2]?O(t[2].replace(/\+/g," "),t[2]):"";r[e]=i}return r}function E(n){var t=(n||self).location;return S(t.originalHash||t.hash)}var x="";function A(n){var t=n||self;return t.__AMP_MODE?t.__AMP_MODE:t.__AMP_MODE=function(n){return{localDev:!1,development:R(n,E(n)),esm:!1,test:!1,rtvVersion:I(n),ssrReady:!1}}(t)}function I(n){var t;return x||(x=(null===(t=n.AMP_CONFIG)||void 0===t?void 0:t.v)||"01".concat("2311171837000")),x}function R(n,t){var r=t||E(n);return["1","actions","amp","amp4ads","amp4email"].includes(r.development)||!!n.AMP_DEV_MODE}function T(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var F=self.__AMP_LOG;function M(n,t){throw new Error("failed to call initLogConstructor")}function N(n){return F.user||(F.user=k()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(F.user.win,n)?F.userForEmbed||(F.userForEmbed=k()):F.user}function k(n){return M()}function P(){return F.dev||(F.dev=M())}function C(n,t,r,e,i,o,u,a,f,c,l){return n}function D(n,t,r,e,i,o,u,a,f,c,l){return N().assert(n,t,r,e,i,o,u,a,f,c,l)}function L(n,t){return G(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function U(n,t){return G((r=_(n),(e=_(r)).isSingleDoc()?e.win:e),t);var r,e}function _(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,L(t,"ampdoc")).getAmpDoc(n):n;var t,r}function G(n,t){C(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(C(r.ctor),C(r.context),r.obj=new r.ctor(r.context),C(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var J,V=["Webkit","webkit","Moz","moz","ms","O","o"];function z(n,t,r,e,i){var o=function(n,t,r){if(t.startsWith("--"))return t;J||(J=s());var e=J[t];if(!e||r){if(e=t,void 0===n[t]){var i=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var r=0;r<V.length;r++){var e=V[r]+t;if(void 0!==n[e])return e}return""}(n,i);void 0!==n[o]&&(e=o)}r||(J[t]=e)}return e}(n.style,t,i);if(o){var u,a=e?r+e:r;n.style.setProperty((u=o.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),V.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}var B=function(){function n(){}return n.generate=function(n){return function(n){for(var t=n.length,r=5381,e=0;e<t;e++)r=33*r^n.charCodeAt(e);return String(r>>>0)}(function(n){for(var t=[],r=0;1==(null==(o=n)?void 0:o.nodeType)&&r<25;){var e="";n.id&&(e="/".concat(n.id));var i=n.nodeName.toLowerCase();t.push("".concat(i).concat(e).concat(q(n))),r++,n=n.parentElement}var o;return t.join()}(n))},n}();function q(n){for(var t=n.nodeName,r=0,e=0,i=n.previousElementSibling;i&&e<25&&r<100;)i.nodeName==t&&e++,r++,i=i.previousElementSibling;return e<25&&r<100?".".concat(e):""}function H(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function X(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){T(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}var W="__AMP__EXPERIMENT_TOGGLES";function Z(n){var t,r,e,i,u;if(n[W])return n[W];n[W]=s();var f=n[W];v(f);var c=X(X({},null!==(t=n.AMP_CONFIG)&&void 0!==t?t:{}),null!==(r=n.AMP_EXP)&&void 0!==r?r:d((null===(e=n.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var l in c){var m=c[l];"number"==typeof m&&m>=0&&m<=1&&(f[l]=Math.random()<m)}var h=null===(i=n.AMP_CONFIG)||void 0===i?void 0:i["allow-doc-opt-in"];if(o(h)&&h.length){var p=n.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(p)for(var b,y,w=a((null===(b=p.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(y=w()).done;){var g=y.value;h.includes(g)&&(f[g]=!0)}}Object.assign(f,function(n){var t,r="";try{var e;"localStorage"in n&&(r=null!==(e=n.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(n){P().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var i,o=(null===(t=r)||void 0===t?void 0:t.split(/\s*,\s*/g))||[],u=s(),f=a(o,!0);!(i=f()).done;){var c=i.value;c&&("-"==c[0]?u[c.substr(1)]=!1:u[c]=!0)}return u}(n));var j=null===(u=n.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(o(j)&&j.length)for(var O,E=S(n.location.originalHash||n.location.hash),x=a(j,!0);!(O=x()).done;){var A=O.value,I=E["e-".concat(A)];"1"==I&&(f[A]=!0),"0"==I&&(f[A]=!1)}return f}var $,K,Q=function(){return self.AMP.config.urls}(),Y=function(){function n(n){this.G=n,this.K=0,this.Y=0,this.rr=s()}var t=n.prototype;return t.has=function(n){return!!this.rr[n]},t.get=function(n){var t=this.rr[n];if(t)return t.access=++this.Y,t.payload},t.put=function(n,t){this.has(n)||this.K++,this.rr[n]={payload:t,access:this.Y},this.nr()},t.nr=function(){if(!(this.K<=this.G)){var n,t=this.rr,r=this.Y+1;for(var e in t){var i=t[e].access;i<r&&(r=i,n=e)}void 0!==n&&(delete t[n],this.K--)}},n}();function nn(n,t){return $||($=self.document.createElement("a"),K=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Y(100))),function(n,t,r){if(r&&r.has(t))return r.get(t);n.href=t,n.protocol||(n.href=n.href);var e,i={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==i.pathname[0]&&(i.pathname="/"+i.pathname),("http:"==i.protocol&&80==i.port||"https:"==i.protocol&&443==i.port)&&(i.port="",i.host=i.hostname),e=n.origin&&"null"!=n.origin?n.origin:"data:"!=i.protocol&&i.host?i.protocol+"//"+i.host:i.href,i.origin=e;var o=i;return r&&r.put(t,o),o}($,n,t?null:K)}function tn(n){return"https:"==(n=function(n){return"string"==typeof n?nn(n):n}(n)).protocol||"localhost"==n.hostname||"127.0.0.1"==n.hostname||(r=".localhost",(e=(t=n.hostname).length-r.length)>=0&&t.indexOf(r,e)==e);var t,r,e}var rn=function(){return self.AMP.config.urls}(),en={};function on(n,t,r,e){var i=r||t.getAttribute("type");D(i,"Attribute type required for <amp-ad>: %s",t);var o=function(n){for(var t=0,r=n;r&&r!=r.parent;r=r.parent)t++;return String(t)+"-"+fn(n)}(n),u={};return function(n,t){var r=n.dataset;for(var e in r)e.startsWith("vars")||(t[e]=r[e]);var i=n.getAttribute("json");if(i){var o=b(i);if(void 0===o)throw N().createError("Error parsing JSON in json attribute in element %s",n);for(var u in o)t[u]=o[u]}}(t,u),u=function(n,t,r,e){var i=Date.now(),o=t.getAttribute("width"),u=t.getAttribute("height");(e=e||{}).width=w(o),e.height=w(u),t.getAttribute("title")&&(e.title=t.getAttribute("title"));var a=n.location.href;"about:srcdoc"==a&&(a=n.parent.location.href);var f,c,l,s,v=_(t),m=U(t,"documentInfo").get(),h=(s=t,U(s,"viewer")).getUnconfirmedReferrerUrl(),p=function(n){for(var t=n.ownerDocument.body,r=0,e=0,i=n;i&&i!=t;i=i.offsetParent)r+=i.offsetLeft,e+=i.offsetTop;var o=n.offsetHeight;return function(n,t,r,e){return{left:n,top:t,width:r,height:e,bottom:t+e,right:n+r,x:n,y:t}}(r,e,n.offsetWidth,o)}(t);e._context={"ampcontextVersion":"2311171837000","ampcontextFilepath":"".concat(Q.thirdParty,"/").concat("2311171837000","/ampcontext-v0.js"),"sourceUrl":m.sourceUrl,"referrer":h,"canonicalUrl":m.canonicalUrl,"pageViewId":m.pageViewId,"location":{"href":a},"startTime":i,"tagName":t.tagName,"mode":{localDev:!1,development:A(l).development,esm:A(l).esm,test:!1,rtvVersion:A(l).rtvVersion},"canary":(f=n,!(null===(c=f.AMP_CONFIG)||void 0===c||!c.canary)),"hidden":!v.isVisible(),"initialLayoutRect":p?{"left":p.left,"top":p.top,"width":p.width,"height":p.height}:null,"domFingerprint":B.generate(t),"experimentToggles":Z(n),"sentinel":r};var d=t.getAttribute("src");return d&&(e.src=d),e}(n,t,o,u),u.type=i,Object.assign(u._context,e),u}function un(n){return"".concat(rn.thirdParty,"/").concat("2311171837000","/vendor/").concat(n).concat(".js")}function an(n,t,r){return function(n,t,r){var e=t.getMetaByName("amp-3p-iframe-src");if(!e)return null;var i=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return D(null!=n,"%s %s must be available",t,r),D(tn(n)||/^\/\//.test(n),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',t,r,n),n}(e,'meta[name="amp-3p-iframe-src"]');D(-1==i.indexOf("?"),"3p iframe url must not include query string %s in element %s.",i,e);var o=nn(i);return D("localhost"==o.hostname&&!r||o.origin!=nn(n.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",i,o.origin,e),"".concat(i,"?").concat("2311171837000")}(n,t,r)||function(n,t){return n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+fn(n),"https://"+n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(rn.thirdPartyFrameHost,"/").concat("2311171837000","/")+"".concat("frame",".html")}(n)}function fn(n){var t;if(n.crypto&&n.crypto.getRandomValues){var r=new Uint32Array(2);n.crypto.getRandomValues(r),t=String(r[0])+r[1]}else t=String(n.Math.random()).substr(2)+"0";return t}function cn(n){if(n.sandbox&&n.sandbox.supports){for(var t=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],r=0;r<t.length;r++){var e=t[r];if(!n.sandbox.supports(e))return void P().info("3p-frame","Iframe doesn't support %s",e)}n.sandbox=t.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function ln(n){return n.data}var sn="unlisten";function vn(n,t,r){var e=function(n,t){var r=n.listeningFors;return!r&&t&&(r=n.listeningFors=Object.create(null)),r||null}(n,r);if(!e)return e;var i=e[t];return!i&&r&&(i=e[t]=[]),i||null}function mn(n,t){for(var r=t;r&&r!=r.parent;r=r.parent)if(r==n)return!0;return!1}function hn(n){for(var t={"sentinel":sn},r=n.length-1;r>=0;r--){var e=n[r];if(!e.frame.contentWindow){n.splice(r,1);var i=e.events;for(var o in i)i[o].splice(0,1/0).forEach((function(n){n(t)}))}}}function pn(n,t,r,e,i,o){C(n.src),C(!n.parentNode),C(r);var u=n.ownerDocument.defaultView;!function(n){n.listeningFors||n.addEventListener("message",(function(t){if(ln(t)){var r=function(n){return"string"==typeof n&&(n="{"==n.charAt(0)?b(n,(function(n){P().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",n)}))||null:y(n)?function(n){if(!y(n))return null;var t=n.indexOf("{");return v(-1!=t),b(n.substr(t),(function(t){!function(n){var t=h.apply(null,arguments);setTimeout((function(){throw p(t),t}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(t.message)))}))}(n):null),n}(ln(t));if(r&&r.sentinel){var e=function(n,t,r,e){var i,o=vn(n,t);if(!o)return o;for(var u=0;u<o.length;u++){var a=o[u],f=a.frame.contentWindow;if(f){if(e==f||mn(f,e)){i=a;break}}else setTimeout(hn,0,o)}return i?i.events:null}(n,r.sentinel,t.origin,t.source);if(e){var i=e[r.type];if(i){i=i.slice();for(var o=0;o<i.length;o++)(0,i[o])(r,t.source,t.origin,t)}}}}}))}(u);var a,f=function(n,t,r){for(var e,i=function(n,t){return t?n.getAttribute("data-amp-3p-sentinel"):"amp"}(t,r),o=vn(n,i,!0),u=0;u<o.length;u++){var a=o[u];if(a.frame===t){e=a;break}}return e||(e={frame:t,events:Object.create(null)},o.push(e)),e.events}(u,n,e),c=nn(n.src).origin,l=f[t]||(f[t]=[]),s=function(t,e,u,f){if("amp"==t.sentinel){if(e!=n.contentWindow)return;if(c!=u&&("null"!=u||!o))return}(i||e==n.contentWindow)&&(t.sentinel!=sn?r(t,e,u,f):a())};return l.push(s),a=function(){if(s){var n=l.indexOf(s);n>-1&&l.splice(n,1),s=null,l=null,r=null}}}var dn=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M32.29,44.13c7.55,0,11.67-6.25,11.67-11.67c0-0.18,0-0.35-0.01-0.53c0.8-0.58,1.5-1.3,2.05-2.12\n    c-0.74,0.33-1.53,0.55-2.36,0.65c0.85-0.51,1.5-1.31,1.8-2.27c-0.79,0.47-1.67,0.81-2.61,1c-0.75-0.8-1.82-1.3-3-1.3\n    c-2.27,0-4.1,1.84-4.1,4.1c0,0.32,0.04,0.64,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29c-0.35,0.61-0.56,1.31-0.56,2.06\n    c0,1.42,0.72,2.68,1.83,3.42c-0.67-0.02-1.31-0.21-1.86-0.51c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.02\n    c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76\n    c-0.33,0-0.66-0.02-0.98-0.06C27.82,43.45,29.97,44.13,32.29,44.13"></path></svg>'],bn=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(a,n);var e,o,u=(e=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(e);if(o){var u=r(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return i(this,n)});function a(n){var t;return(t=u.call(this,n)).nb=null,t.jN=null,t}a.createLoaderLogoCallback=function(n){var t,r;return{color:"#1DA1F2",content:(r=(t=n).ownerDocument||t,f&&f.ownerDocument===r||(f=r.createElement("div")),g)(dn)}};var c=a.prototype;return c.buildCallback=function(){this.jN=this.getPlaceholder()},c.preconnectCallback=function(n){var t=L(this.win,"preconnect"),r=this.getAmpDoc();!function(n,t,r,e){var i=an(n,r);e.preload(r,i,"document"),e.preload(r,un("twitter"),"script")}(this.win,0,r,t),t.preload(r,"https://platform.twitter.com/widgets.js","script"),t.url(r,"https://syndication.twitter.com",n),t.url(r,"https://pbs.twimg.com",n),t.url(r,"https://cdn.syndication.twimg.com",n)},c.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},c.firstLayoutCompleted=function(){},c.layoutCallback=function(){var n=this,t=function(n,t,r,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=i.allowFullscreen,u=void 0!==o&&o,a=i.initialIntersection;C(void 0===t.isConnected||!0===t.isConnected);var f=on(n,t,r,e);a&&(f._context.initialIntersection=a);var c=n.document.createElement("iframe");en[f.type]||(en[f.type]=0),en[f.type]+=1;var l=t.getAmpDoc(),s=an(n,l),v=nn(s).hostname,m=JSON.stringify({"host":v,"bootstrap":un(f.type),"type":f.type,"count":en[f.type],"attributes":f});return c.src=s,c.ampLocation=nn(s),c.name=m,f.width&&(c.width=f.width),f.height&&(c.height=f.height),f.title&&(c.title=f.title),u&&c.setAttribute("allowfullscreen","true"),c.setAttribute("scrolling","no"),z(c,"border","none"),c.onload=function(){this.readyState="complete"},c.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(r)||cn(c),c.setAttribute("data-amp-3p-sentinel",f._context.sentinel),c}(this.win,this.element,"twitter",null,{allowFullscreen:!0});return t.title=this.element.title||"Twitter",t.classList.add("i-amphtml-fill-content"),this.ON(),pn(t,"embed-size",(function(t){n.IN(t.height)}),!0),pn(t,"no-content",(function(){n.RN()}),!0),this.element.appendChild(t),this.nb=t,this.loadPromise(t)},c.ON=function(){var n,t=this;this.measureMutateElement((function(){n=t.element.getBoundingClientRect().height}),(function(){t.forceChangeHeight(n)}))},c.IN=function(n){var t=this;this.mutateElement((function(){t.toggleLoading(!1),t.jN&&t.togglePlaceholder(!1),t.forceChangeHeight(n)}))},c.RN=function(){var n=this,t=this.getFallback(),r=t||this.jN;this.mutateElement((function(){n.toggleLoading(!1),t&&(n.togglePlaceholder(!1),n.toggleFallback(!0)),r&&n.forceChangeHeight(r.offsetHeight)}))},c.unlayoutOnPause=function(){return!0},c.unlayoutCallback=function(){var n,t;return this.nb&&(null===(t=(n=this.nb).parentElement)||void 0===t||t.removeChild(n),this.nb=null),!0},c.mutatedAttributesCallback=function(n){this.nb&&null!=n["data-tweetid"]&&(this.unlayoutCallback(),this.toggleLoading(!0,!0),this.layoutCallback())},a}(n.BaseElement);n.registerElement("amp-twitter",bn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-twitter-0.1.js.map