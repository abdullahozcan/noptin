!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=35)}({35:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i,o;i=jQuery,o=n(36),i(document).ready((function(){i(document).on("click",".noptin-export-subscribers",(function(e){e.preventDefault();var t=null,n=[];Swal.fire({title:"Export Subscribers",html:i("#noptin-subscriber-fields-select-template").html(),allowOutsideClick:function(){return!Swal.isLoading()},confirmButtonText:"Export",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showCloseButton:!0,width:"40rem",onOpen:function(e){t=e,i(e).find(".noptin-subscriber-fields-select").select2({width:"100%"})},preConfirm:function(){n=i(t).find(".noptin-subscriber-fields-select").val()}}).then((function(e){e.value&&Swal.fire({title:"Select file type",allowOutsideClick:function(){return!Swal.isLoading()},input:"radio",inputValue:"json",inputOptions:{csv:"CSV",json:"JSON"},confirmButtonText:"Download",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showLoaderOnConfirm:!0,showCloseButton:!0,preConfirm:function(e){var t=i.param({file_type:e,fields:n}),r=i(".noptin-export-subscribers").attr("href")+"&"+t;window.location.href=r}})}))})),i(document).on("click",".noptin-import-subscribers",(function(e){e.preventDefault();var t=0,n=0,i=[],s="All subscribers imported successfully",a="info",u="Done!",l=function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];e.forEach((function(e){"object"===r(e)&&null!==e&&(Object.keys(e).forEach((function(t){return null==e[t]&&delete e[t]})),o.push(e))}));var l={_wpnonce:noptinSubscribers.nonce,subscribers:o,action:"noptin_import_subscribers"};jQuery.post(noptinSubscribers.ajaxurl,l).done((function(e){"object"===r(e)&&e.success?(t+=e.data.imported,n+=e.data.skipped):(n+=o.length,s="An error occurred while importing subscribers",a="error",u="Error!",console.log(e))})).fail((function(e){console.log(e),s=e.statusText,a="error",u="Error!",n+=o.length})).always((function(){i&&Swal.fire({icon:a,title:u,confirmButtonText:"Close",html:"Imported: ".concat(t," &nbsp; Skipped: ").concat(n),footer:s})}))};Swal.fire({text:"Select your Noptin export file below to import subscribers",input:"file",inputAttributes:{accept:".csv","aria-label":"select your import file"},allowOutsideClick:function(){return!Swal.isLoading()},confirmButtonText:"Import",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#424242",showLoaderOnConfirm:!0,showCloseButton:!0,preConfirm:function(e){if(e)return o.parse(e,{complete:function(){l(i,!0)},step:function(e){e.data&&10==i.push(e.data)&&(setTimeout((function(){l(i)}),100),i=[])},worker:!0,header:!0,dynamicTyping:!0}),jQuery.Deferred()}})})),i(".noptin-delete-single-subscriber").on("click",(function(e){e.preventDefault();var t=i(this).attr("href"),n=i(this).data("email");Swal.fire({icon:"warning",titleText:"Delete subscriber",text:n,footer:"This will delete the subscriber and all associated data",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Delete",showCloseButton:!0,preConfirm:function(){window.location.href=t}})})),i(".noptin-delete-subscribers").on("click",(function(e){e.preventDefault(),Swal.fire({icon:"question",text:"Are you sure you want to delete all subscribers?",footer:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Delete",showCloseButton:!0,allowOutsideClick:function(){return!Swal.isLoading()},showLoaderOnConfirm:!0,preConfirm:function(){var e={_wpnonce:noptinSubscribers.nonce,action:"noptin_delete_all_subscribers"};return jQuery.post(noptinSubscribers.ajaxurl,e).done((function(){Swal.fire({icon:"success",title:"Deleted Subscribers",showConfirmButton:!1,footer:"Reloading the page"}),window.location=window.location})).fail((function(e){Swal.fire({icon:"error",title:"Could not delete subscribers",confirmButtonText:"Close",footer:e.statusText}),console.log(e)})),jQuery.Deferred()}})}))}))},36:function(e,t,n){var r,i,o;
/* @license
Papa Parse
v5.1.1
https://github.com/mholt/PapaParse
License: MIT
*/i=[],void 0===(o="function"==typeof(r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=n&&/blob:/i.test((t.location||{}).protocol),i={},o=0,s={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(w(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!w(r.transform)&&r.transform,r.worker&&s.WORKERS_SUPPORTED){var u=function(){if(!s.WORKERS_SUPPORTED)return!1;var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),s.BLOB_URL||(s.BLOB_URL=n.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=g,u.id=o++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var d=null;return s.NODE_STREAM_INPUT,"string"==typeof n?d=r.download?new l(r):new c(r):!0===n.readable&&w(n.read)&&w(n.on)?d=new h(r):(t.File&&n instanceof File||n instanceof Object)&&(d=new f(r)),d.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",o="\r\n",a='"',u=a+a,l=!1,f=null;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(o=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a)}}();var c=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return d(null,e,l);if("object"==typeof e[0])return d(f||h(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),d(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var n in e)t.push(n);return t}function d(e,t,n){var s="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&r){for(var l=0;l<e.length;l++)0<l&&(s+=i),s+=m(e[l],l);0<t.length&&(s+=o)}for(var f=0;f<t.length;f++){var c=a?e.length:t[f].length,h=!1,d=a?0===Object.keys(t[f]).length:0===t[f].length;if(n&&!a&&(h="greedy"===n?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===n&&a){for(var p=[],g=0;g<c;g++){var _=u?e[g]:g;p.push(t[f][_])}h=""===p.join("").trim()}if(!h){for(var y=0;y<c;y++){0<y&&!d&&(s+=i);var b=a&&u?e[y]:y;s+=m(t[f][b],y)}f<t.length-1&&(!n||0<c&&!d)&&(s+=o)}}return s}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=e.toString().replace(c,u);return"boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(r,s.BAD_DELIMITERS)||-1<r.indexOf(i)||" "===r.charAt(0)||" "===r.charAt(r.length-1)?a+r+a:r}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!n&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=m,s.ParserHandle=d,s.NetworkStreamer=l,s.FileStreamer=f,s.StringStreamer=c,s.ReadableStreamStreamer=h,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var n=e.config||{},r=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==r.length){var t,n,i,u=r[0];if(w(e.before)){var l=e.before(u.file,u.inputElem);if("object"==typeof l){if("abort"===l.action)return t=u.file,n=u.inputElem,i=l.reason,void(w(e.error)&&e.error({name:"AbortError"},t,n,i));if("skip"===l.action)return void o();"object"==typeof l.config&&(u.instanceConfig=a.extend(u.instanceConfig,l.config))}else if("skip"===l)return void o()}var f=u.instanceConfig.complete;u.instanceConfig.complete=function(e){w(f)&&f(e,u.file,u.inputElem),o()},s.parse(u.file,u.instanceConfig)}else w(e.complete)&&e.complete()}function o(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+e;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:a,workerId:s.WORKER_ID,finished:l});else if(w(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!l||!w(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)),t.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send()}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(new Error(n))}}function f(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var o=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function c(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=v((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=v((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=v((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=v((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,n,r,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,l=this,f=0,c=0,h=!1,d=!1,g=[],_={data:[],errors:[],meta:{}};if(w(e.step)){var y=e.step;e.step=function(t){if(_=t,C())k();else{if(k(),0===_.data.length)return;f+=t.data.length,e.preview&&f>e.preview?n.abort():(_.data=_.data[0],y(_,l))}}}function v(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(_&&r&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)v(_.data[t])&&_.data.splice(t--,1);return C()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;C()&&t<_.data.length;t++)_.data[t].forEach(n);_.data.splice(0,1)}else _.data.forEach(n);function n(t){w(e.transformHeader)&&(t=e.transformHeader(t)),g.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var o=r,s=t[r];e.header&&(o=r>=g.length?"__parsed_extra":g[r]),e.transform&&(s=e.transform(s,o)),s=S(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return e.header&&(r>g.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+r,c+n):r<g.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+r,c+n)),i}var n=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),n=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=g),c+=n,_}()}function C(){return e.header&&0===g.length}function S(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(a.test(e)){var t=parseFloat(e);if(o<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function x(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),_.errors.push(i)}this.parse=function(i,o,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<r[0].length;if(1===r.length||o)return"\n";for(var s=0,a=0;a<r.length;a++)"\n"===r[a][0]&&s++;return s>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),_.meta.delimiter=e.delimiter);else{var l=function(t,n,r,i,o){var a,u,l,f;o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var c=0;c<o.length;c++){var h=o[c],d=0,p=0,g=0;l=void 0;for(var _=new m({comments:i,delimiter:h,newline:n,preview:10}).parse(t),y=0;y<_.data.length;y++)if(r&&v(_.data[y]))g++;else{var b=_.data[y].length;p+=b,void 0!==l?0<b&&(d+=Math.abs(b-l),l=b):l=b}0<_.data.length&&(p/=_.data.length-g),(void 0===u||d<=u)&&(void 0===f||f<p)&&1.99<p&&(u=d,a=h,f=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),_.meta.delimiter=e.delimiter}var f=b(e);return e.preview&&e.header&&f.preview++,t=i,n=new m(f),_=n.parse(t,o,a),k(),h?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){l.streamer._halted?(h=!1,l.streamer.parseChunk(t,!0)):setTimeout(this.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),_.meta.aborted=!0,w(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,o=e.step,a=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof n||-1<s.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var f=0,c=!1;this.parse=function(e,s,h){if("string"!=typeof e)throw new Error("Input must be a string");var d=e.length,m=n.length,g=r.length,_=i.length,y=w(o),b=[],v=[],k=[],C=f=0;if(!e)return F();if(u||!1!==u&&-1===e.indexOf(t)){for(var S=e.split(r),x=0;x<S.length;x++){if(k=S[x],f+=k.length,x!==S.length-1)f+=r.length;else if(h)return F();if(!i||k.substring(0,_)!==i){if(y){if(b=[],L(k.split(n)),z(),c)return F()}else L(k.split(n));if(a&&a<=x)return b=b.slice(0,a),F(!0)}}return F()}for(var E=e.indexOf(n,f),O=e.indexOf(r,f),R=new RegExp(p(l)+p(t),"g"),T=e.indexOf(t,f);;)if(e[f]!==t)if(i&&0===k.length&&e.substring(f,f+_)===i){if(-1===O)return F();f=O+g,O=e.indexOf(r,f),E=e.indexOf(n,f)}else{if(-1!==E&&(E<O||-1===O)){if(!(E<T)){k.push(e.substring(f,E)),f=E+m,E=e.indexOf(n,f);continue}var D=U(E,T,O);if(D&&void 0!==D.nextDelim){E=D.nextDelim,T=D.quoteSearch,k.push(e.substring(f,E)),f=E+m,E=e.indexOf(n,f);continue}}if(-1===O)break;if(k.push(e.substring(f,O)),M(O+g),y&&(z(),c))return F();if(a&&b.length>=a)return F(!0)}else for(T=f,f++;;){if(-1===(T=e.indexOf(t,T+1)))return h||v.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:f}),B();if(T===d-1)return B(e.substring(f,T).replace(R,t));if(t!==l||e[T+1]!==l){if(t===l||0===T||e[T-1]!==l){-1!==E&&E<T+1&&(E=e.indexOf(n,T+1)),-1!==O&&O<T+1&&(O=e.indexOf(r,T+1));var I=j(-1===O?E:Math.min(E,O));if(e[T+1+I]===n){k.push(e.substring(f,T).replace(R,t)),e[f=T+1+I+m]!==t&&(T=e.indexOf(t,f)),E=e.indexOf(n,f),O=e.indexOf(r,f);break}var A=j(O);if(e.substring(T+1+A,T+1+A+g)===r){if(k.push(e.substring(f,T).replace(R,t)),M(T+1+A+g),E=e.indexOf(n,f),T=e.indexOf(t,f),y&&(z(),c))return F();if(a&&b.length>=a)return F(!0);break}v.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:f}),T++}}else T++}return B();function L(e){b.push(e),C=f}function j(t){var n=0;if(-1!==t){var r=e.substring(T+1,t);r&&""===r.trim()&&(n=r.length)}return n}function B(t){return h||(void 0===t&&(t=e.substring(f)),k.push(t),f=d,L(k),y&&z()),F()}function M(t){f=t,L(k),k=[],O=e.indexOf(r,f)}function F(e){return{data:b,errors:v,meta:{delimiter:n,linebreak:r,aborted:c,truncated:!!e,cursor:C+(s||0)}}}function z(){o(F()),b=[],v=[]}function U(r,i,o){var s={nextDelim:void 0,quoteSearch:void 0},a=e.indexOf(t,i+1);if(i<r&&r<a&&(a<o||-1===o)){var u=e.indexOf(n,a);if(-1===u)return s;a<u&&(a=e.indexOf(t,a+1)),s=U(u,a,o)}else s={nextDelim:r,quoteSearch:i};return s}},this.abort=function(){c=!0},this.getCharIndex=function(){return f}}function g(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(w(n.userStep)){for(var s=0;s<t.results.data.length&&(n.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},o),!r);s++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=i[e];w(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=b(e[n]);return t}function v(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===s.WORKER_ID&&n&&(s.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:s.WORKER_ID,results:s.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=s.parse(n.input,n.config);r&&t.postMessage({workerId:s.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(u.prototype)).constructor=f,(c.prototype=Object.create(c.prototype)).constructor=c,(h.prototype=Object.create(u.prototype)).constructor=h,s})?r.apply(t,i):r)||(e.exports=o)}});