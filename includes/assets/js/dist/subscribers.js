!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}({12:function(t,e){function n(t,e,n,r,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,i)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var s=t.apply(e,r);function a(t){n(s,i,o,a,u,"next",t)}function u(t){n(s,i,o,a,u,"throw",t)}a(void 0)}))}}},23:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function a(t,e,n,r){var i=e&&e.prototype instanceof l?e:l,o=Object.create(i.prototype),s=new S(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return k()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=y(s,n);if(a){if(a===c)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var c={};function l(){}function f(){}function h(){}var d={};d[i]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(x([])));m&&m!==e&&n.call(m,i)&&(d=m);var g=h.prototype=l.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function v(t,e){var r;this._invoke=function(i,o){function s(){return new e((function(r,s){!function r(i,o,s,a){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,a)}))}a(c.arg)}(i,o,r,s)}))}return r=r?r.then(s,s):s()}}function y(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[s]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(v.prototype),v.prototype[o]=function(){return this},t.AsyncIterator=v,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new v(a(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(g),g[s]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;w(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},41:function(t,e,n){"use strict";n.r(e);var r,i,o,s=n(5),a=n.n(s),u=n(12),c=n.n(u),l=n(9),f=n.n(l);n(23);r=jQuery,i=n(42),o=r("#noptin-subscribers-page-data").data(),r(document).ready((function(){r(document).on("click",".noptin-add-subscriber",(function(t){t.preventDefault();var e=null;Swal.fire({title:noptinSubscribers.add,html:r("#noptin-create-subscriber-template").html(),allowOutsideClick:function(){return!Swal.isLoading()},confirmButtonText:noptinSubscribers.save,showCancelButton:!0,cancelButtonText:noptinSubscribers.cancel,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showCloseButton:!0,focusConfirm:!1,showLoaderOnConfirm:!0,onOpen:function(t){r(e=t).find(".noptin-create-subscriber-name").focus()},preConfirm:function(){var t={_wpnonce:noptinSubscribers.nonce,action:"noptin_admin_add_subscriber",name:r(e).find(".noptin-create-subscriber-name").val(),email:r(e).find(".noptin-create-subscriber-email").val(),data:o};return t.email?(jQuery.post(noptinSubscribers.ajaxurl,t).done((function(t){"object"===f()(t)&&t.success?(Swal.fire({icon:"success",title:noptinSubscribers.add_success,showConfirmButton:!1,footer:noptinSubscribers.reloading}),window.location=window.location):(Swal.showValidationMessage(t),Swal.hideLoading())})).fail((function(t){Swal.showValidationMessage(t.statusText),Swal.hideLoading(),console.log(t)})),jQuery.Deferred()):(Swal.showValidationMessage(noptinSubscribers.missing_email),void Swal.hideLoading())}})})),r(document).on("click",".noptin-export-subscribers",(function(t){t.preventDefault();var e=null,n=[];Swal.fire({title:noptinSubscribers.export,html:r("#noptin-subscriber-fields-select-template").html(),allowOutsideClick:function(){return!Swal.isLoading()},confirmButtonText:noptinSubscribers.exportbtn,showCancelButton:!0,cancelButtonText:noptinSubscribers.cancel,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showCloseButton:!0,width:"40rem",onOpen:function(t){e=t,r(t).find(".noptin-subscriber-fields-select").select2({width:"100%"})},preConfirm:function(){n=r(e).find(".noptin-subscriber-fields-select").val()}}).then((function(t){t.value&&Swal.fire({title:noptinSubscribers.file,allowOutsideClick:function(){return!Swal.isLoading()},input:"radio",inputValue:"json",inputOptions:{csv:"CSV",json:"JSON",xml:"XML"},confirmButtonText:noptinSubscribers.download,showCancelButton:!0,cancelButtonText:noptinSubscribers.cancel,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showLoaderOnConfirm:!0,showCloseButton:!0,preConfirm:function(t){var e=r.param({file_type:t,fields:n}),i=r(".noptin-export-subscribers").attr("href")+"&"+e;window.location.href=i}})}))})),r(document).on("click",".noptin-import-subscribers",(function(t){t.preventDefault();var e={totalBatches:0,processedBatches:0,imported:0,skipped:0,running:!1,queue:[],import:function(t){var e=this;return c()(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.clean(t);case 2:t=n.sent,e.queue.push(t),e.totalBatches++,e.run();case 6:case"end":return n.stop()}}),n)})))()},clean:function(t){return c()(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.forEach((function(t){"object"===f()(t)&&null!==t&&(Object.keys(t).forEach((function(e){return null==t[e]&&delete t[e]})),n.push(t))})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))()},run:function(){var t=this;return c()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.queue.length&&!t.running&&(t.running=!0,r(".swal2-footer").find(".noptin-imported").text(t.imported),r(".swal2-footer").find(".noptin-skipped").text(t.skipped),t.doImport()),t.totalBatches==t.processedBatches&&t.done();case 2:case"end":return e.stop()}}),e)})))()},doImport:function(){var t=this;return c()(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.queue.shift(),r={_wpnonce:noptinSubscribers.nonce,subscribers:n,action:"noptin_import_subscribers",data:o},jQuery.post(noptinSubscribers.ajaxurl,r).done((function(e){"object"===f()(e)&&e.success?(t.imported=t.imported+e.data.imported,t.skipped=t.skipped+e.data.skipped):(t.skipped=t.skipped+subcribers.length,console.log(e))})).fail((function(e){console.log(e),t.skipped=t.skipped+n.length})).always((function(){t.processedBatches++,t.running=!1,t.run()}));case 3:case"end":return e.stop()}}),e)})))()},done:function(){var t=this;return c()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Swal.fire({icon:t.imported>0?"success":"info",title:noptinSubscribers.done,confirmButtonText:noptinSubscribers.close,html:"".concat(noptinSubscribers.imported,": ").concat(t.imported," &nbsp; ").concat(noptinSubscribers.skipped,": ").concat(t.skipped),footer:t.imported>0?"":noptinSubscribers.import_fail}),t.imported>0&&(window.location=window.location);case 2:case"end":return e.stop()}}),e)})))()}},n=[];Swal.fire({text:noptinSubscribers.import_title,footer:noptinSubscribers.import_footer,input:"file",inputAttributes:{accept:".csv","aria-label":noptinSubscribers.import_label},allowOutsideClick:function(){return!Swal.isLoading()},confirmButtonText:noptinSubscribers.import,showCancelButton:!0,cancelButtonText:noptinSubscribers.cancel,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showLoaderOnConfirm:!0,showCloseButton:!0,preConfirm:function(t){if(t)return r(".swal2-footer").html('<div>Imported: <span class="noptin-imported">0</span></div><div>&nbsp; Skipped: <span class="noptin-skipped">0</span></div>'),i.parse(t,{complete:function(){e.import(n)},step:function(t){t.data&&10==n.push(t.data)&&(e.import(n),n=[])},worker:!0,header:!0,dynamicTyping:!0}),jQuery.Deferred()}})})),r(".noptin-delete-single-subscriber").on("click",(function(t){t.preventDefault();var e=r(this).attr("href"),n=r(this).data("email");Swal.fire({icon:"warning",titleText:noptinSubscribers.delete_subscriber,text:n,footer:noptinSubscribers.delete_footer,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:noptinSubscribers.delete,cancelButtonText:noptinSubscribers.cancel,preConfirm:function(){window.location.href=e}})})),r(document).on("click",".send-noptin-subscriber-double-optin-email",(function(t){t.preventDefault();var e=r(this).data("email");Swal.fire({icon:"info",html:"".concat(noptinSubscribers.double_optin," <code>").concat(e,"<code>"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:noptinSubscribers.send,showCloseButton:!0,allowOutsideClick:function(){return!Swal.isLoading()},showLoaderOnConfirm:!0,preConfirm:function(){var t={_wpnonce:noptinSubscribers.nonce,action:"noptin_send_double_optin_email",email:e,data:o};return jQuery.post(noptinSubscribers.ajaxurl,t).done((function(t){t.success?Swal.fire(noptinSubscribers.success,t.data,"success"):Swal.fire({icon:"error",title:noptinSubscribers.error,text:t.data,showCloseButton:!0,cancelButtonText:noptinSubscribers.cancel,confirmButtonText:noptinSubscribers.close,confirmButtonColor:"#9e9e9e",footer:'<a href="https://noptin.com/guide/sending-emails/troubleshooting/">'.concat(noptinSubscribers.troubleshoot,"</a>")})})).fail((function(t){Swal.fire({icon:"error",title:noptinSubscribers.connect_error,text:noptinSubscribers.connect_info,showCloseButton:!0,confirmButtonText:noptinSubscribers.close,cancelButtonText:noptinSubscribers.cancel,confirmButtonColor:"#9e9e9e",footer:"<code>Status: ".concat(t.status," &nbsp; Status text: ").concat(t.statusText,"</code>")})})),jQuery.Deferred()}})})),r(".noptin-delete-subscribers").on("click",(function(t){t.preventDefault(),Swal.fire({icon:"question",text:noptinSubscribers.delete_all,footer:noptinSubscribers.no_revert,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:noptinSubscribers.delete,cancelButtonText:noptinSubscribers.cancel,showCloseButton:!0,allowOutsideClick:function(){return!Swal.isLoading()},showLoaderOnConfirm:!0,preConfirm:function(){var t={_wpnonce:noptinSubscribers.nonce,action:"noptin_delete_all_subscribers",data:o};return jQuery.post(noptinSubscribers.ajaxurl,t).done((function(){Swal.fire({icon:"success",title:noptinSubscribers.deleted,showConfirmButton:!1,footer:noptinSubscribers.reloading}),window.location=window.location})).fail((function(t){Swal.fire({icon:"error",title:noptinSubscribers.no_delete,confirmButtonText:noptinSubscribers.close,footer:t.statusText}),console.log(t)})),jQuery.Deferred()}})}))}))},42:function(t,e,n){var r,i,o;
/* @license
Papa Parse
v5.2.0
https://github.com/mholt/PapaParse
License: MIT
*/i=[],void 0===(o="function"==typeof(r=function t(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},n=!e.document&&!!e.postMessage,r=n&&/blob:/i.test((e.location||{}).protocol),i={},o=0,s={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(w(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!w(r.transform)&&r.transform,r.worker&&s.WORKERS_SUPPORTED){var u=function(){if(!s.WORKERS_SUPPORTED)return!1;var n,r,a=(n=e.URL||e.webkitURL||null,r=t.toString(),s.BLOB_URL||(s.BLOB_URL=n.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),u=new e.Worker(a);return u.onmessage=g,u.id=o++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var d=null;return s.NODE_STREAM_INPUT,"string"==typeof n?d=r.download?new c(r):new f(r):!0===n.readable&&w(n.read)&&w(n.on)?d=new h(r):(e.File&&n instanceof File||n instanceof Object)&&(d=new l(r)),d.stream(n)},unparse:function(t,e){var n=!1,r=!0,i=",",o="\r\n",a='"',u=a+a,c=!1,l=null;!function(){if("object"==typeof e){if("string"!=typeof e.delimiter||s.BAD_DELIMITERS.filter((function(t){return-1!==e.delimiter.indexOf(t)})).length||(i=e.delimiter),("boolean"==typeof e.quotes||"function"==typeof e.quotes||Array.isArray(e.quotes))&&(n=e.quotes),"boolean"!=typeof e.skipEmptyLines&&"string"!=typeof e.skipEmptyLines||(c=e.skipEmptyLines),"string"==typeof e.newline&&(o=e.newline),"string"==typeof e.quoteChar&&(a=e.quoteChar),"boolean"==typeof e.header&&(r=e.header),Array.isArray(e.columns)){if(0===e.columns.length)throw new Error("Option columns is empty");l=e.columns}void 0!==e.escapeChar&&(u=e.escapeChar+a)}}();var f=new RegExp(p(a),"g");if("string"==typeof t&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return d(null,t,c);if("object"==typeof t[0])return d(l||h(t[0]),t,c)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:h(t.data[0])),Array.isArray(t.data[0])||"object"==typeof t.data[0]||(t.data=[t.data])),d(t.fields||[],t.data||[],c);throw new Error("Unable to serialize unrecognized input");function h(t){if("object"!=typeof t)return[];var e=[];for(var n in t)e.push(n);return e}function d(t,e,n){var s="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var a=Array.isArray(t)&&0<t.length,u=!Array.isArray(e[0]);if(a&&r){for(var c=0;c<t.length;c++)0<c&&(s+=i),s+=m(t[c],c);0<e.length&&(s+=o)}for(var l=0;l<e.length;l++){var f=a?t.length:e[l].length,h=!1,d=a?0===Object.keys(e[l]).length:0===e[l].length;if(n&&!a&&(h="greedy"===n?""===e[l].join("").trim():1===e[l].length&&0===e[l][0].length),"greedy"===n&&a){for(var p=[],g=0;g<f;g++){var b=u?t[g]:g;p.push(e[l][b])}h=""===p.join("").trim()}if(!h){for(var v=0;v<f;v++){0<v&&!d&&(s+=i);var y=a&&u?t[v]:v;s+=m(e[l][y],v)}l<e.length-1&&(!n||0<f&&!d)&&(s+=o)}}return s}function m(t,e){if(null==t)return"";if(t.constructor===Date)return JSON.stringify(t).slice(1,25);var r=t.toString().replace(f,u);return"boolean"==typeof n&&n||"function"==typeof n&&n(t,e)||Array.isArray(n)&&n[e]||function(t,e){for(var n=0;n<e.length;n++)if(-1<t.indexOf(e[n]))return!0;return!1}(r,s.BAD_DELIMITERS)||-1<r.indexOf(i)||" "===r.charAt(0)||" "===r.charAt(r.length-1)?a+r+a:r}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!n&&!!e.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=m,s.ParserHandle=d,s.NetworkStreamer=c,s.FileStreamer=l,s.StringStreamer=f,s.ReadableStreamStreamer=h,e.jQuery){var a=e.jQuery;a.fn.parse=function(t){var n=t.config||{},r=[];return this.each((function(t){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==r.length){var e,n,i,u=r[0];if(w(t.before)){var c=t.before(u.file,u.inputElem);if("object"==typeof c){if("abort"===c.action)return e=u.file,n=u.inputElem,i=c.reason,void(w(t.error)&&t.error({name:"AbortError"},e,n,i));if("skip"===c.action)return void o();"object"==typeof c.config&&(u.instanceConfig=a.extend(u.instanceConfig,c.config))}else if("skip"===c)return void o()}var l=u.instanceConfig.complete;u.instanceConfig.complete=function(t){w(l)&&l(t,u.file,u.inputElem),o()},s.parse(u.file,u.instanceConfig)}else w(t.complete)&&t.complete()}function o(){r.splice(0,1),i()}}}function u(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var e=y(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new d(e),(this._handle.streamer=this)._config=e}.call(this,t),this.parseChunk=function(t,n){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)e.postMessage({results:a,workerId:s.WORKER_ID,finished:c});else if(w(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!c||!w(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(t){w(this._config.error)?this._config.error(t):r&&this._config.error&&e.postMessage({workerId:s.WORKER_ID,error:t,finished:!1})}}function c(t){var e;(t=t||{}).chunkSize||(t.chunkSize=s.RemoteChunkSize),u.call(this,t),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),n||(e.onload=_(this._chunkLoaded,this),e.onerror=_(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var t=this._config.downloadRequestHeaders;for(var r in t)e.setRequestHeader(r,t[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{e.send(this._config.downloadRequestBody)}catch(t){this._chunkError(t.message)}n&&0===e.status&&this._chunkError()}},this._chunkLoaded=function(){4===e.readyState&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(t){var e=t.getResponseHeader("Content-Range");return null===e?-1:parseInt(e.substring(e.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(t){var n=e.statusText||t;this._sendError(new Error(n))}}function l(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=s.LocalChunkSize),u.call(this,t);var r="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,n=t.slice||t.webkitSlice||t.mozSlice,r?((e=new FileReader).onload=_(this._chunkLoaded,this),e.onerror=_(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);t=n.call(t,this._start,i)}var o=e.readAsText(t,this._config.encoding);r||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function f(t){var e;u.call(this,t=t||{}),this.stream=function(t){return e=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t,n=this._config.chunkSize;return n?(t=e.substring(0,n),e=e.substring(n)):(t=e,e=""),this._finished=!e,this.parseChunk(t)}}}function h(t){u.call(this,t=t||{});var e=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(t){this._input=t,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===e.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=_((function(t){try{e.push("string"==typeof t?t:t.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(t){this._streamError(t)}}),this),this._streamError=_((function(t){this._streamCleanUp(),this._sendError(t)}),this),this._streamEnd=_((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=_((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(t){var e,n,r,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,c=this,l=0,f=0,h=!1,d=!1,g=[],b={data:[],errors:[],meta:{}};if(w(t.step)){var v=t.step;t.step=function(e){if(b=e,x())S();else{if(S(),0===b.data.length)return;l+=e.data.length,t.preview&&l>t.preview?n.abort():(b.data=b.data[0],v(b,c))}}}function _(e){return"greedy"===t.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function S(){if(b&&r&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),r=!1),t.skipEmptyLines)for(var e=0;e<b.data.length;e++)_(b.data[e])&&b.data.splice(e--,1);return x()&&function(){if(b)if(Array.isArray(b.data[0])){for(var e=0;x()&&e<b.data.length;e++)b.data[e].forEach(n);b.data.splice(0,1)}else b.data.forEach(n);function n(e){w(t.transformHeader)&&(e=t.transformHeader(e)),g.push(e)}}(),function(){if(!b||!t.header&&!t.dynamicTyping&&!t.transform)return b;function e(e,n){var r,i=t.header?{}:[];for(r=0;r<e.length;r++){var o=r,s=e[r];t.header&&(o=r>=g.length?"__parsed_extra":g[r]),t.transform&&(s=t.transform(s,o)),s=k(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return t.header&&(r>g.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+r,f+n):r<g.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+r,f+n)),i}var n=1;return!b.data.length||Array.isArray(b.data[0])?(b.data=b.data.map(e),n=b.data.length):b.data=e(b.data,0),t.header&&b.meta&&(b.meta.fields=g),f+=n,b}()}function x(){return t.header&&0===g.length}function k(e,n){return r=e,t.dynamicTypingFunction&&void 0===t.dynamicTyping[r]&&(t.dynamicTyping[r]=t.dynamicTypingFunction(r)),!0===(t.dynamicTyping[r]||t.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(t){if(a.test(t)){var e=parseFloat(t);if(o<e&&e<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function C(t,e,n,r){var i={type:t,code:e,message:n};void 0!==r&&(i.row=r),b.errors.push(i)}this.parse=function(i,o,a){var u=t.quoteChar||'"';if(t.newline||(t.newline=function(t,e){t=t.substring(0,1048576);var n=new RegExp(p(e)+"([^]*?)"+p(e),"gm"),r=(t=t.replace(n,"")).split("\r"),i=t.split("\n"),o=1<i.length&&i[0].length<r[0].length;if(1===r.length||o)return"\n";for(var s=0,a=0;a<r.length;a++)"\n"===r[a][0]&&s++;return s>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,t.delimiter)w(t.delimiter)&&(t.delimiter=t.delimiter(i),b.meta.delimiter=t.delimiter);else{var c=function(e,n,r,i,o){var a,u,c,l;o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var f=0;f<o.length;f++){var h=o[f],d=0,p=0,g=0;c=void 0;for(var b=new m({comments:i,delimiter:h,newline:n,preview:10}).parse(e),v=0;v<b.data.length;v++)if(r&&_(b.data[v]))g++;else{var y=b.data[v].length;p+=y,void 0!==c?0<y&&(d+=Math.abs(y-c),c=y):c=y}0<b.data.length&&(p/=b.data.length-g),(void 0===u||d<=u)&&(void 0===l||l<p)&&1.99<p&&(u=d,a=h,l=p)}return{successful:!!(t.delimiter=a),bestDelimiter:a}}(i,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);c.successful?t.delimiter=c.bestDelimiter:(r=!0,t.delimiter=s.DefaultDelimiter),b.meta.delimiter=t.delimiter}var l=y(t);return t.preview&&t.header&&l.preview++,e=i,n=new m(l),b=n.parse(e,o,a),S(),h?{meta:{paused:!0}}:b||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,n.abort(),e=w(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){c.streamer._halted?(h=!1,c.streamer.parseChunk(e,!0)):setTimeout(c.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),b.meta.aborted=!0,w(t.complete)&&t.complete(b),e=""}}function p(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(t){var e,n=(t=t||{}).delimiter,r=t.newline,i=t.comments,o=t.step,a=t.preview,u=t.fastMode,c=e=void 0===t.quoteChar?'"':t.quoteChar;if(void 0!==t.escapeChar&&(c=t.escapeChar),("string"!=typeof n||-1<s.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var l=0,f=!1;this.parse=function(t,s,h){if("string"!=typeof t)throw new Error("Input must be a string");var d=t.length,m=n.length,g=r.length,b=i.length,v=w(o),y=[],_=[],S=[],x=l=0;if(!t)return M();if(u||!1!==u&&-1===t.indexOf(e)){for(var k=t.split(r),C=0;C<k.length;C++){if(S=k[C],l+=S.length,C!==k.length-1)l+=r.length;else if(h)return M();if(!i||S.substring(0,b)!==i){if(v){if(y=[],D(S.split(n)),P(),f)return M()}else D(S.split(n));if(a&&a<=C)return y=y.slice(0,a),M(!0)}}return M()}for(var E=t.indexOf(n,l),O=t.indexOf(r,l),L=new RegExp(p(c)+p(e),"g"),T=t.indexOf(e,l);;)if(t[l]!==e)if(i&&0===S.length&&t.substring(l,l+b)===i){if(-1===O)return M();l=O+g,O=t.indexOf(r,l),E=t.indexOf(n,l)}else{if(-1!==E&&(E<O||-1===O)){if(!(E<T)){S.push(t.substring(l,E)),l=E+m,E=t.indexOf(n,l);continue}var R=q(E,T,O);if(R&&void 0!==R.nextDelim){E=R.nextDelim,T=R.quoteSearch,S.push(t.substring(l,E)),l=E+m,E=t.indexOf(n,l);continue}}if(-1===O)break;if(S.push(t.substring(l,O)),F(O+g),v&&(P(),f))return M();if(a&&y.length>=a)return M(!0)}else for(T=l,l++;;){if(-1===(T=t.indexOf(e,T+1)))return h||_.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:l}),A();if(T===d-1)return A(t.substring(l,T).replace(L,e));if(e!==c||t[T+1]!==c){if(e===c||0===T||t[T-1]!==c){-1!==E&&E<T+1&&(E=t.indexOf(n,T+1)),-1!==O&&O<T+1&&(O=t.indexOf(r,T+1));var B=I(-1===O?E:Math.min(E,O));if(t[T+1+B]===n){S.push(t.substring(l,T).replace(L,e)),t[l=T+1+B+m]!==e&&(T=t.indexOf(e,l)),E=t.indexOf(n,l),O=t.indexOf(r,l);break}var j=I(O);if(t.substring(T+1+j,T+1+j+g)===r){if(S.push(t.substring(l,T).replace(L,e)),F(T+1+j+g),E=t.indexOf(n,l),T=t.indexOf(e,l),v&&(P(),f))return M();if(a&&y.length>=a)return M(!0);break}_.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:l}),T++}}else T++}return A();function D(t){y.push(t),x=l}function I(e){var n=0;if(-1!==e){var r=t.substring(T+1,e);r&&""===r.trim()&&(n=r.length)}return n}function A(e){return h||(void 0===e&&(e=t.substring(l)),S.push(e),l=d,D(S),v&&P()),M()}function F(e){l=e,D(S),S=[],O=t.indexOf(r,l)}function M(t){return{data:y,errors:_,meta:{delimiter:n,linebreak:r,aborted:f,truncated:!!t,cursor:x+(s||0)}}}function P(){o(M()),y=[],_=[]}function q(r,i,o){var s={nextDelim:void 0,quoteSearch:void 0},a=t.indexOf(e,i+1);if(i<r&&r<a&&(a<o||-1===o)){var u=t.indexOf(n,a);if(-1===u)return s;a<u&&(a=t.indexOf(e,a+1)),s=q(u,a,o)}else s={nextDelim:r,quoteSearch:i};return s}},this.abort=function(){f=!0},this.getCharIndex=function(){return l}}function g(t){var e=t.data,n=i[e.workerId],r=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var o={abort:function(){r=!0,b(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(n.userStep)){for(var s=0;s<e.results.data.length&&(n.userStep({data:e.results.data[s],errors:e.results.errors,meta:e.results.meta},o),!r);s++);delete e.results}else w(n.userChunk)&&(n.userChunk(e.results,o,e.file),delete e.results)}e.finished&&!r&&b(e.workerId,e.results)}function b(t,e){var n=i[t];w(n.userComplete)&&n.userComplete(e),n.terminate(),delete i[t]}function v(){throw new Error("Not implemented.")}function y(t){if("object"!=typeof t||null===t)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=y(t[n]);return e}function _(t,e){return function(){t.apply(e,arguments)}}function w(t){return"function"==typeof t}return r&&(e.onmessage=function(t){var n=t.data;if(void 0===s.WORKER_ID&&n&&(s.WORKER_ID=n.workerId),"string"==typeof n.input)e.postMessage({workerId:s.WORKER_ID,results:s.parse(n.input,n.config),finished:!0});else if(e.File&&n.input instanceof File||n.input instanceof Object){var r=s.parse(n.input,n.config);r&&e.postMessage({workerId:s.WORKER_ID,results:r,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(f.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,s})?r.apply(e,i):r)||(t.exports=o)},5:function(t,e,n){t.exports=n(23)},9:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}});