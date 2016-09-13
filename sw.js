(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function handleFontRequest(e){var t,r,n;return regeneratorRuntime.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(caches.match(e));case 2:if(t=s.sent,!t){s.next=5;break}return s.abrupt("return",t);case 5:return s.next=7,regeneratorRuntime.awrap(fetch(e.clone()));case 7:return r=s.sent,s.next=10,regeneratorRuntime.awrap(caches.open("svgomg-fonts"));case 10:return n=s.sent,n.put(e,r.clone()),s.abrupt("return",r);case 13:case"end":return s.stop()}},null,this)}require("regenerator-runtime/runtime");var storage=require("../utils/storage"),version=require("../../changelog.json")[0].version,cacheVerion=version.split(".")[0];self.addEventListener("install",function(e){var t=this;e.waitUntil(function(e){var r,n,s;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r=storage.get("active-version"),e.next=3,regeneratorRuntime.awrap(caches.open("svgomg-static-"+cacheVerion));case 3:return n=e.sent,e.next=6,regeneratorRuntime.awrap(n.addAll(["./","imgs/icon.png","css/all.css","js/gzip-worker.js","js/page.js","js/prism-worker.js","js/svgo-worker.js","changelog.json","https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"]));case 6:return e.next=8,regeneratorRuntime.awrap(r);case 8:s=e.sent,s&&s.split(".")[0]!==version.split(".")[0]||self.skipWaiting&&self.skipWaiting();case 10:case"end":return e.stop()}},null,t)}())});var expectedCaches=["svgomg-static-"+cacheVerion];self.addEventListener("activate",function(e){var t=this;e.waitUntil(function(e){var r,n,s,a,c,i,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(caches.keys());case 2:r=e.sent,n=!0,s=!1,a=void 0,e.prev=6,c=r[Symbol.iterator]();case 8:if(n=(i=c.next()).done){e.next=18;break}if(o=i.value,/^svgomg-/.test(o)){e.next=12;break}return e.abrupt("continue",15);case 12:if(expectedCaches.indexOf(o)!=-1){e.next=15;break}return e.next=15,regeneratorRuntime.awrap(caches.delete(o));case 15:n=!0,e.next=8;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(6),s=!0,a=e.t0;case 24:e.prev=24,e.prev=25,!n&&c.return&&c.return();case 27:if(e.prev=27,!s){e.next=30;break}throw a;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.next=34,regeneratorRuntime.awrap(storage.set("active-version",version));case 34:case"end":return e.stop()}},null,t,[[6,20,24,32],[25,,27,31]])}())}),self.addEventListener("fetch",function(e){var t=new URL(e.request.url);"fonts.gstatic.com"==t.host?e.respondWith(handleFontRequest(e.request)):e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))});
//# sourceMappingURL=out.js.map

},{"../../changelog.json":4,"../utils/storage":6,"regenerator-runtime/runtime":3}],2:[function(require,module,exports){
function drainQueue(){if(!draining){draining=!0;for(var e,o=queue.length;o;){e=queue,queue=[];for(var r=-1;++r<o;)e[r]();o=queue.length}draining=!1}}function noop(){}var process=module.exports={},queue=[],draining=!1;process.nextTick=function(e){queue.push(e),draining||setTimeout(drainQueue,0)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],3:[function(require,module,exports){
(function (process,global){
!function(t){"use strict";function r(t,r,e,o){var i=Object.create((r||n).prototype),a=new h(o||[]);return i._invoke=f(t,e,a),i}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function n(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(t){this.arg=t}function u(t){function r(n,o,i,a){var u=e(t[n],t,o);if("throw"!==u.type){var f=u.arg,l=f.value;return l instanceof c?Promise.resolve(l.arg).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(l).then(function(t){f.value=t,i(f)},a)}a(u.arg)}function n(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return o=o?o.then(n,n):n()}"object"==typeof process&&process.domain&&(r=process.domain.bind(r));var o;this._invoke=n}function f(t,r,n){var o=b;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===_){if("throw"===i)throw a;return y()}for(;;){var c=n.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===v){n.delegate=null;var u=c.iterator.return;if(u){var f=e(u,c.iterator,a);if("throw"===f.type){i="throw",a=f.arg;continue}}if("return"===i)continue}var f=e(c.iterator[i],c.iterator,a);if("throw"===f.type){n.delegate=null,i="throw",a=f.arg;continue}i="next",a=v;var l=f.arg;if(!l.done)return o=E,l;n[c.resultName]=l.value,n.next=c.nextLoc,n.delegate=null}if("next"===i)n.sent=n._sent=a;else if("throw"===i){if(o===b)throw o=_,a;n.dispatchException(a)&&(i="next",a=v)}else"return"===i&&n.abrupt("return",a);o=j;var f=e(t,r,n);if("normal"===f.type){o=n.done?_:E;var l={value:f.arg,done:n.done};if(f.arg!==k)return l;n.delegate&&"next"===i&&(a=v)}else"throw"===f.type&&(o=_,i="throw",a=f.arg)}}}function l(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function s(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var r=t[w];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(g.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=v,r.done=!0,r};return n.next=n}}return{next:y}}function y(){return{value:v,done:!0}}var v,g=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol:{},w=d.iterator||"@@iterator",m=d.toStringTag||"@@toStringTag",L="object"==typeof module,x=t.regeneratorRuntime;if(x)return void(L&&(module.exports=x));x=t.regeneratorRuntime=L?module.exports:{},x.wrap=r;var b="suspendedStart",E="suspendedYield",j="executing",_="completed",k={},G=i.prototype=n.prototype;o.prototype=G.constructor=i,i.constructor=o,i[m]=o.displayName="GeneratorFunction",x.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===o||"GeneratorFunction"===(r.displayName||r.name))},x.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,m in t||(t[m]="GeneratorFunction")),t.prototype=Object.create(G),t},x.awrap=function(t){return new c(t)},a(u.prototype),x.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return x.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(G),G[w]=function(){return this},G[m]="Generator",G.toString=function(){return"[object Generator]"},x.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},x.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.tryEntries.forEach(s),!t)for(var r in this)"t"===r.charAt(0)&&g.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?this.next=o.finallyLoc:this.complete(i),k},complete:function(t,r){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&r&&(this.next=r)},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),s(e),k}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;s(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:p(t),resultName:r,nextLoc:e},k}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":2}],4:[function(require,module,exports){
module.exports=[
  {
    "version": "1.9.0",
    "changes": [
      "Settings are now remembered (thanks Simon Knox)",
      "Fixed drag & drop issue (thanks Simon Knox)",
      "Improved keyboard interaction (thanks Ahmad Shadeed)"
    ]
  },
  {
    "version": "1.8.0",
    "changes": [
      "New icon (thanks to Anna Debenham)"
    ]
  },
  {
    "version": "1.7.0",
    "changes": [
      "Button to change background color (thanks to Una Kravets)"
    ]
  },
  {
    "version": "1.6.1",
    "changes": [
      "HTMLmin broke my stuff"
    ]
  },
  {
    "version": "1.6.0",
    "changes": [
      "Copy-to-clipboard button"
    ]
  },
  {
    "version": "1.5.1",
    "changes": [
      "Minor CSS change"
    ]
  },
  {
    "version": "1.5.0",
    "changes": [
      "Updating SVGO"
    ]
  },
  {
    "version": "1.4.3",
    "changes": [
      "Fixing layout in Chrome beta."
    ]
  },
  {
    "version": "1.4.2",
    "changes": [
      "Better cache cleanup."
    ]
  },
  {
    "version": "1.4.1",
    "changes": [
      "Fixes to 'remove hidden items'."
    ]
  },
  {
    "version": "1.4.0",
    "changes": [
      "Updated to SVGO v0.5.1, bringing:",
      "Remove useless defs option.",
      "Round number in number lists.",
      "And loads of fixes!"
    ]
  },
  {
    "version": "1.3.0",
    "changes": [
      "Using manifest spec for icons etc."
    ]
  },
  {
    "version": "1.2.4",
    "changes": [
      "Download button now works in IE."
    ]
  },
  {
    "version": "1.2.3",
    "changes": [
      "Fixing bug introduced by browserify."
    ]
  },
  {
    "version": "1.2.2",
    "changes": [
      "Better font loading."
    ]
  },
  {
    "version": "1.2.1",
    "changes": [
      "Lots of performance improvements."
    ]
  },
  {
    "version": "1.2.0",
    "changes": [
      "Code view.",
      "Prettify code option."
    ]
  },
  {
    "version": "1.1.7",
    "changes": [
      "Performance improvements."
    ]
  },
  {
    "version": "1.1.6",
    "changes": [
      "Fix zooming with mouse wheels."
    ]
  },
  {
    "version": "1.1.5",
    "changes": [
      "Removing erroneous scrollbars in Firefox."
    ]
  },
  {
    "version": "1.1.4",
    "changes": [
      "Fixed 'about' link."
    ]
  },
  {
    "version": "1.1.3",
    "changes": [
      "Reverting some painting stuff until I get a handle on the performance.",
      "Using simpler demo SVG."
    ]
  },
  {
    "version": "1.1.2",
    "changes": [
      "Sharper rendering on desktop Chrome & Safari.",
      "Fixed right mouse button issue."
    ]
  },
  {
    "version": "1.1.1",
    "changes": [
      "Reset zooming on image load."
    ]
  },
  {
    "version": "1.1.0",
    "changes": [
      "Click/touch and drag panning.",
      "Pinch zooming.",
      "Wheel zooming."
    ]
  },
  {
    "version": "1.0.4",
    "changes": [
      "Fixing checkered background in IE.",
      "Improving slider touch interaction."
    ]
  },
  {
    "version": "1.0.3",
    "changes": [
      "Fixing SVG output in Firefox."
    ]
  },
  {
    "version": "1.0.2",
    "changes": [
      "Caching fonts for offline use.",
      "Removing tap delay on iPhone/iPad.",
      "Fixing iOS add-to-homescreen.",
      "Better mobile demo image."
    ]
  },
  {
    "version": "1.0.1",
    "changes": [
      "Layout fixes.",
      "Better mobile keyboard handling.",
      "A lighter demo SVG for mobile.",
      "Fixing drag & drop."
    ]
  },
  {
    "version": "1.0.0",
    "changes": [
      "First release."
    ]
  }
]

},{}],5:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function promisifyRequest(e){return new Promise(function(t,n){function r(n){t(e.result),i()}function o(t){n(e.error),i()}function i(){e.removeEventListener("complete",r),e.removeEventListener("success",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)}e.addEventListener("complete",r),e.addEventListener("success",r),e.addEventListener("error",o),e.addEventListener("abort",o)})}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),IndexedDouchebag=function(){function e(t,n,r){_classCallCheck(this,e);var o=indexedDB.open(t,n);this.ready=promisifyRequest(o),o.onupgradeneeded=function(e){r(o.result,e.oldVersion)}}return _createClass(e,[{key:"transaction",value:function(e,t,n){return this.ready.then(function(r){var o="readonly";t.apply?n=t:t&&(o=t);var i,u=r.transaction(e,o),a=n(u,r),s=promisifyRequest(u);return a?(i=a[0]&&"result"in a[0]?Promise.all(a.map(promisifyRequest)):promisifyRequest(a),s.then(function(){return i})):s})}},{key:"get",value:function(e,t){return this.transaction(e,function(n){return n.objectStore(e).get(t)})}},{key:"put",value:function(e,t,n){return this.transaction(e,"readwrite",function(r){r.objectStore(e).put(n,t)})}},{key:"delete",value:function(e,t){return this.transaction(e,"readwrite",function(n){n.objectStore(e).delete(t)})}}]),e}();module.exports=IndexedDouchebag;
//# sourceMappingURL=out.js.map

},{}],6:[function(require,module,exports){
"use strict";function getIdb(){return idb||(idb=new Idb("svgo-keyval",1,function(e){e.createObjectStore("keyval")})),idb}var Idb=require("./indexeddouchbag"),idb;self.indexedDB?module.exports={get:function(e){return getIdb().get("keyval",e)},set:function(e,t){return getIdb().put("keyval",e,t)},delete:function(e){return getIdb().delete("keyval",e)}}:module.exports={get:function(e){return Promise.resolve(localStorage.getItem(e))},set:function(e,t){return Promise.resolve(localStorage.setItem(e,t))},delete:function(e){return Promise.resolve(localStorage.removeItem(e))}};
//# sourceMappingURL=out.js.map

},{"./indexeddouchbag":5}]},{},[1])


//# sourceMappingURL=sw.js.map
