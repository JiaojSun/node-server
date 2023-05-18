/*! For license information please see 165.js.LICENSE.txt */
"use strict";(self.webpackChunkbasic_host_remote_app2=self.webpackChunkbasic_host_remote_app2||[]).push([[165],{165:(t,e,r)=>{r.r(e);var n=r(558),o=r.n(n),i=r(14);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function y(){}function v(){}function d(){}var m={};f(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==e&&r.call(w,i)&&(m=w);var b=d.prototype=y.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,i,c,u){var l=h(t[n],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==a(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(s).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=f(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),f(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),f(b,l,"Generator"),f(b,i,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const s=function(t){var e="tool1",r=l((0,n.useState)(0),2),a=r[0],f=r[1],s=l((0,n.useState)(0),2),h=s[0],p=s[1],y=l((0,n.useState)([]),2),v=y[0],d=y[1],m=(0,i.useDrag)((function(){return{type:e,item:{type:e,tmp:"测试"},end:function(t,e){var r=0,n=0;if(e.didDrop()){var o=e.getDropResult();o&&(r=o.top,n=o.left),f((function(t){return console.log("useDrag==left========="+t+n),console.log(n),console.log(t),t+n})),p((function(t){return t+r})),console.log("让我看看list的数据=========="),console.log(v),d([{id:"000001",text:"箭头工具",type:"tool1",offsetX:0,offsetY:0}])}else f(0),p(0)},collect:function(t){return{isDragging:!!t.isDragging()}}}})),g=l(m,2),w=g[0].isDragging,b=g[1],x=function(){var t,e=(t=c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d([{id:"000001",text:"箭头工具",type:"tool1"}]);case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){setTimeout((function(){x()}),1500)}),[]),o().createElement("div",null,"`"," ",o().createElement("div",{id:"app2-wrap",style:{width:"300px",height:"600px",border:"4px solid #333",background:"white",position:"absolute",right:"0px"}},o().createElement("h1",null,"这是app2的内容【remote】"),o().createElement("br",null),(v||[]).map((function(t){return o().createElement("div",{style:{position:"absolute",opacity:w?.5:1,top:"".concat(h,"px"),left:"".concat(a,"px")},ref:b,key:t.id},t.text)}))))};var h=r(789);const p=function(){return o().createElement(i.DndProvider,{backend:h.HTML5Backend},o().createElement("div",null,o().createElement("h1",null,"Basic Host-Remote"),o().createElement("h2",null,"App 2"),o().createElement(s,null)))};var y=r(169);r.n(y)().render(o().createElement(p,null),document.getElementById("root"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxjQUNwQmQsSUFBQUEsY0FBQSxXQUNFQSxJQUFBQSxjQUFBLFVBQUkscUJBQ0pBLElBQUFBLGNBQUEsVUFBSSxTQUNKQSxJQUFBQSxjQUFDZSxFQUFXLE9BRUYscUJDSGhCQyxHQUFBQSxPQUFnQmhCLElBQUFBLGNBQUNpQixFQUFHLE1BQUtDLFNBQVNDLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy1ob3N0LXJlbW90ZV9hcHAyLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9iYXNpYy1ob3N0LXJlbW90ZV9hcHAyLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1ob3N0LXJlbW90ZV9hcHAyLy4vc3JjL2Jvb3RzdHJhcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSAndG9vbDEnO1xuXG4gIGNvbnN0IFtvZmZzZXRYLCBzZXRPZmZzZXRYXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb2Zmc2V0WSwgc2V0T2Zmc2V0WV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xuICAgIHR5cGUsIC8vIHR5cGU6IOaMh+WumuWFg+e0oOeahOexu+Wei++8jOWPquacieexu+Wei+ebuOWQjOeahOWFg+e0oOaJjeiDvei/m+ihjGRyb3Dmk43kvZxcbiAgICBpdGVtOiB7IHR5cGUsIHRtcDogJ+a1i+ivlScgfSwgLy8gaXRlbTog5YWD57Sg5Zyo5ouW5ou96L+H56iL5Lit77yM5o+P6L+w6K+l5a+56LGh55qE5pWw5o2u77yM5aaC5p6c5oyH5a6a55qE5piv5LiA5Liq5pa55rOV77yM5YiZ5pa55rOV5Lya5Zyo5byA5aeL5ouW5ou95pe26LCD55So77yM5bm25LiU6ZyA6KaB6L+U5Zue5LiA5Liq5a+56LGh5p2l5o+P6L+w6K+l5YWD57Sg44CCXG4gICAgZW5kKGl0ZW0sIG1vbml0b3IpIHtcbiAgICAgIGxldCB0b3AgPSAwLFxuICAgICAgICBsZWZ0ID0gMDtcbiAgICAgIGlmIChtb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICBjb25zdCBkcm9wUmVzID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7IC8v6I635Y+W5ouW5ou95a+56LGh5omA5aSE5a655Zmo55qE5pWw5o2uXG4gICAgICAgIGlmIChkcm9wUmVzKSB7XG4gICAgICAgICAgdG9wID0gZHJvcFJlcy50b3A7XG4gICAgICAgICAgbGVmdCA9IGRyb3BSZXMubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBzZXRPZmZzZXRYKG9mZnNldFggPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VEcmFnPT1sZWZ0PT09PT09PT09JyArIG9mZnNldFggKyBsZWZ0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsZWZ0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvZmZzZXRYKTtcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0WCArIGxlZnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRPZmZzZXRZKG9mZnNldFkgPT4gb2Zmc2V0WSArIHRvcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCforqnmiJHnnIvnnItsaXN055qE5pWw5o2uPT09PT09PT09PScpO1xuICAgICAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICAgICAgc2V0TGlzdChbeyBpZDogJzAwMDAwMScsIHRleHQ6ICfnrq3lpLTlt6XlhbcnLCB0eXBlOiAndG9vbDEnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwIH1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE9mZnNldFgoMCk7XG4gICAgICAgIHNldE9mZnNldFkoMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBjb2xsZWN077ya5a6D5bqU6K+l6L+U5Zue5LiA5Liq5o+P6L+w54q25oCB55qE5pmu6YCa5a+56LGh77yM54S25ZCO6L+U5Zue5Lul5rOo5YWl5Yiw57uE5Lu25Lit44CC5a6D5o6l5pS25Lik5Liq5Y+C5pWw77yM5LiA5LiqIERyYWdUYXJnZXRNb25pdG9yIOWunuS+i+WSjOaLluaLveWFg+e0oOaPj+i/sOS/oeaBr2l0ZW1cbiAgICAvLyDnrKzkuozkuKrlj4LmlbDmmK/kuIDkuKrmlbDnu4TvvIzooajnpLrlr7nmlrnms5Xmm7TmlrDnmoTnuqbmnZ/vvIzlj6rmnInlvZPmlbDnu4TkuK3nmoTlj4LmlbDlj5HnlJ/mlLnlj5jvvIzmiY3kvJrph43mlrDnlJ/miJDmlrnms5XvvIzln7rkuo5yZWFjdOeahHVzZU1lbW/lrp7njrBcbiAgICBjb2xsZWN0OiBtb25pdG9yID0+ICh7XG4gICAgICBpc0RyYWdnaW5nOiAhIW1vbml0b3IuaXNEcmFnZ2luZygpLFxuICAgIH0pLFxuICB9KSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCByZXQgPSBhd2FpdCByZXFUb29sTGlzdCgpO1xuICAgIC8vIGNvbnN0IGRhdGEgPSByZXQuZGF0YS5kYXRhIHx8IFtdO1xuICAgIC8vIHNldExpc3QoZGF0YSk7XG5cbiAgICBzZXRMaXN0KFt7IGlkOiAnMDAwMDAxJywgdGV4dDogJ+eureWktOW3peWFtycsIHR5cGU6ICd0b29sMScgfV0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXREYXRhKCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBgeycgJ31cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJhcHAyLXdyYXBcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgICAgIGhlaWdodDogJzYwMHB4JyxcbiAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgIzMzMycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoMT7ov5nmmK9hcHAy55qE5YaF5a6544CQcmVtb3Rl44CRPC9oMT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHsvKiA8ZGl2IG9uQ2xpY2s9eygpID0+IHtwcm9wcy5oYW5kbGVDaGFuZ2UgJiYgcHJvcHMuaGFuZGxlQ2hhbmdlKCflt6XlhbcwMScpfX0+5bel5YW3MDE8L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSwgdG9wOiBgJHtvZmZzZXRZfXB4YCxcbiAgICAgICAgbGVmdDogYCR7b2Zmc2V0WH1weGAgfX0gcmVmPXtkcmFnfT7lt6XlhbcwMjwvZGl2PiAqL31cbiAgICAgICAgeyhsaXN0IHx8IFtdKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSxcbiAgICAgICAgICAgICAgICB0b3A6IGAke29mZnNldFl9cHhgLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGAke29mZnNldFh9cHhgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWY9e2RyYWd9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICB7LyogPGRpdiBzdHlsZT17e3dpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcsIGJhY2tncm91bmQ6ICdibHVlJ319IHJlZj17ZHJvcH0gPjwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgcmVmPXtkcm9wfSBzdHlsZT17e3dpZHRoOicxMDBweCcsIGhlaWdodDogJzEwMHB4JywgYmFja2dyb3VuZDogaXNPdmVyID8gJyNGRkFBMDAnIDogJyNGRkZGRkYnIH19PlxuICAgICAgICAgIENvbnRhaW5lclxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPEN1c0RyYWcgLz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgTG9jYWxCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgPGRpdj5cbiAgICAgIDxoMT5CYXNpYyBIb3N0LVJlbW90ZTwvaDE+XG4gICAgICA8aDI+QXBwIDI8L2gyPlxuICAgICAgPExvY2FsQnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gIDwvRG5kUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGltcG9ydCBtb2NrIGZyb20gJy4vbW9jay9tb2NrU2VydmVyJ1xuLy8gaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnXG4vLyBpbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCdcbi8vIGltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnXG4vLyBpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJ1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJkb25lIiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZG9uZVJlc3VsdCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibGVuIiwiYXJyMiIsInByb3BzIiwiX3VzZVN0YXRlMiIsInVzZVN0YXRlIiwib2Zmc2V0WCIsInNldE9mZnNldFgiLCJfdXNlU3RhdGU0Iiwib2Zmc2V0WSIsInNldE9mZnNldFkiLCJfdXNlU3RhdGU2IiwibGlzdCIsInNldExpc3QiLCJfdXNlRHJhZyIsInVzZURyYWciLCJpdGVtIiwidG1wIiwiZW5kIiwibW9uaXRvciIsInRvcCIsImxlZnQiLCJkaWREcm9wIiwiZHJvcFJlcyIsImdldERyb3BSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0ZXh0IiwiY29sbGVjdCIsImlzRHJhZ2dpbmciLCJfdXNlRHJhZzIiLCJkcmFnIiwiZ2V0RGF0YSIsIl9yZWYiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiUmVhY3QiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXAiLCJvcGFjaXR5IiwiY29uY2F0IiwicmVmIiwiRG5kUHJvdmlkZXIiLCJiYWNrZW5kIiwiSFRNTDVCYWNrZW5kIiwiTG9jYWxCdXR0b24iLCJSZWFjdERPTSIsIkFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9