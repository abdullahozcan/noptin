!function(n){var t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(i,o,function(t){return n[t]}.bind(null,o));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=38)}({11:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},19:function(n,t){var e={is_showing:!1,classes:{popup:"noptin-popup",content:"noptin-popup-content",inner:"noptin-popup-inner",close:"noptin-popup-close",closing:"noptin-popup-closing",open:"noptin-popup-open",opening:"noptin-popup-opening",opened:"noptin-popup-opened"},el:"",content:"",open:function(n){var t=this;this.is_showing=!0,this.el=jQuery("<div></div>").addClass("".concat(this.classes.popup," ").concat(this.classes.opening)).hide(),this.el.append('<div class="'.concat(this.classes.inner,'"></div>')),this.el.find(".".concat(this.classes.inner)).append('<div class="'.concat(this.classes.content,'"></div>')),this.content=this.el.find(".".concat(this.classes.content)).html(jQuery(n).prop("outerHTML")),this.el.on("click",(function(n){t.content.is(n.target)||0!==t.content.has(n.target).length||t.close()})),this.el.on("click",".".concat(this.classes.close),(function(){t.close()})),this.el.appendTo("body"),this.transitionThen(this.content,(function(){jQuery("body").addClass(t.classes.open),t.el.show(),t.el.removeClass(t.classes.opening),t.el.addClass(t.classes.opened)}))},replaceContent:function(n){if(!this.is_showing)return!1;this.content.html(jQuery(n).prop("outerHTML"))},close:function(){var n=this;if(!this.is_showing)return!0;this.is_showing=!1,this.el.addClass(this.classes.closing),this.transitionThen(this.content,(function(){jQuery(n.el).remove(),jQuery("body").removeClass(n.classes.open)}))},transitionThen:function(n,t){var e="none"!=n.css("transition")||"none"!=n.css("-webkit-transition"),i=!("none"==n.css("animation-name")&&"none"==n.css("-webkit-animation-name")||"0s"==n.css("animation-duration")&&"0s"==n.css("-webkit-animation-duration")),o=!1,r=function(){o||(t(),o=!0)};i?n.one("webkitAnimationEnd animationend",r):e?n.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",r):r(),setTimeout(r,300)}};jQuery(window).on("keyup",(function(n){27===n.keyCode&&e.close()})),n.exports=e},38:function(n,t,e){!function(n){"use strict";var t=e(39),i=function(){return"key"+Math.random().toString(36).replace(/[^a-z]+/g,"")},o=e(19),r={subscribed:!1,hidePopup:function(){o.close()},logFormView:function(t){n.post(noptin.ajaxurl,{action:"noptin_log_form_impression",_wpnonce:noptin.nonce,form_id:t})},displayPopup:function(t,e){if(n(t).closest(".noptin-optin-main-wrapper").hasClass("noptin-slide_in-main-wrapper"))return this.displaySlideIn(t,e);if(e||!o.is_showing&&!this.subscribed){this.logFormView(n(t).find("input[name=noptin_form_id]").val()),o.is_showing?o.replaceContent(n(t).closest(".noptin-popup-main-wrapper")):o.open(n(t).closest(".noptin-popup-main-wrapper"));var i=n(t).find("input[name=noptin_form_id]").val();void 0!==n(t).data("once-per-session")?localStorage.setItem("noptinFormDisplayed"+i,(new Date).getTime()):sessionStorage.setItem("noptinFormDisplayed"+i,"1")}},displaySlideIn:function(t,e){!e&&this.subscribed||(this.logFormView(n(t).find("input[name=noptin_form_id]").val()),n(t).addClass("noptin-showing"))}},s={immeadiate:function(){r.displayPopup(this)},before_leave:function(){var t=this,e=i(),o=null;n(document).on("mouseleave."+e,(function(i){i.clientY>0||(o=setTimeout((function(){r.displayPopup(t),n(document).off("mouseleave."+e),n(document).off("mouseenter."+e)}),200))})),n(document).on("mouseenter."+e,(function(n){o&&(clearTimeout(o),o=null)}))},on_scroll:function(){var e=this,o=i(),s=parseInt(n(this).data("on-scroll"));n(window).on("scroll."+o,t((function(){n(window).scrollTop()/(n(document).height()-n(window).height())*100>s&&(r.displayPopup(e),n(window).off("scroll."+o))}),500))},after_delay:function(){var t=this,e=1e3*parseInt(n(this).data("after-delay"));setTimeout((function(){r.displayPopup(t)}),e)},after_comment:function(){n("#commentform").on("submit",(function(n){}))},after_click:function(){var t=n(this).data("after-click"),e=this;t&&n("body").on("click",t,(function(n){n.preventDefault(),r.displayPopup(e,!0)}))}};function a(t){n(t).prepend('<label style="display: none;"><input type="checkbox" name="noptin_confirm_submit"/>Are you sure?</label>'),n("body").on("submit",t,(function(t){var e=this;t.preventDefault(),n(this).fadeTo(600,.5).find(".noptin_feedback_success, .noptin_feedback_error").empty().hide();var i={},o=n(this).serializeArray();jQuery.each(o,(function(n,t){i[t.name]=t.value})),i.action="noptin_new_subscriber",i._wpnonce=noptin.nonce,i.conversion_page=window.location.href,n.post(noptin.ajaxurl,i).done((function(t,i,o){if("string"!=typeof t){try{"function"==typeof gtag?gtag("event","subscribe",{method:"Noptin Form"}):"function"==typeof ga&&ga("send","event","Noptin Form","Subscribe","Noptin")}catch(n){console.error(n.message)}if(r.subscribed=!0,"redirect"!=t.action){var s=n(e).find(".noptin_form_redirect").val();s?window.location=s:"msg"==t.action&&(n(e).html('<div class="noptin-big noptin-padded">'+t.msg+"</div>"),n(e).css({display:"flex",justifyContent:"center"}),setTimeout((function(){n(e).closest(".noptin-showing").removeClass("noptin-showing")}),2e3))}else window.location=t.redirect}else n(e).find(".noptin_feedback_error").text(t).show()})).fail((function(){n(e).find(".noptin_feedback_error").text("Could not establish a connection to the server.").show()})).always((function(){n(e).fadeTo(600,1)}))}))}n(".noptin-popup-main-wrapper .noptin-optin-form-wrapper").each((function(){var t=n(this).data("trigger"),e=n(this).find("input[name=noptin_form_id]").val();if(void 0!==n(this).data("once-per-session")&&"after_click"!=t){if(e){var i=localStorage.getItem("noptinFormDisplayed"+e),o=(new Date).getTime();if(i&&o-i<6048e5)return!0;localStorage.removeItem("noptinFormDisplayed"+e)}}else if(e&&"after_click"!=t&&sessionStorage.getItem("noptinFormDisplayed"+e))return;s[t]&&s[t].call(this)})),n(".noptin-slide_in-main-wrapper .noptin-optin-form-wrapper").each((function(){var t=n(this).data("trigger");s[t]&&s[t].call(this)})),n(document).ready((function(){n(document).on("click",".noptin-showing .noptin-popup-close",(function(t){n(this).closest(".noptin-showing").removeClass("noptin-showing")}))})),a(".noptin-optin-form-wrapper form"),n(".wp-block-noptin-email-optin form, .noptin-email-optin-widget form").find("input[type=email]").attr("name","email"),a(".wp-block-noptin-email-optin form, .noptin-email-optin-widget form"),n(document).on("click",".noptin-mark-as-existing-subscriber",(function(n){var t=function(n){var t=new Date;t.setTime(t.getTime()+2592e6);var e="expires="+t.toUTCString();document.cookie="".concat(n,"=1;").concat(e,";path=").concat(noptin.cookie_path)};noptin.cookie&&t(noptin.cookie),t("noptin_email_subscribed"),o.close(),r.subscribed=!0}))}(jQuery)},39:function(n,t,e){(function(t){var e=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,p=a||c||Function("return this")(),u=Object.prototype.toString,l=Math.max,f=Math.min,d=function(){return p.Date.now()};function m(n,t,e){var i,o,r,s,a,c,p=0,u=!1,m=!1,g=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=i,r=o;return i=o=void 0,p=t,s=n.apply(r,e)}function b(n){return p=n,a=setTimeout(_,t),u?y(n):s}function w(n){var e=n-c;return void 0===c||e>=t||e<0||m&&n-p>=r}function _(){var n=d();if(w(n))return T(n);a=setTimeout(_,function(n){var e=t-(n-c);return m?f(e,r-(n-p)):e}(n))}function T(n){return a=void 0,g&&i?y(n):(i=o=void 0,s)}function j(){var n=d(),e=w(n);if(i=arguments,o=this,c=n,e){if(void 0===a)return b(c);if(m)return a=setTimeout(_,t),y(c)}return void 0===a&&(a=setTimeout(_,t)),s}return t=v(t)||0,h(e)&&(u=!!e.leading,r=(m="maxWait"in e)?l(v(e.maxWait)||0,t):r,g="trailing"in e?!!e.trailing:g),j.cancel=function(){void 0!==a&&clearTimeout(a),p=0,i=c=o=a=void 0},j.flush=function(){return void 0===a?s:T(d())},j}function h(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==u.call(n)}(n))return NaN;if(h(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=h(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(e,"");var a=o.test(n);return a||r.test(n)?s(n.slice(2),a?2:8):i.test(n)?NaN:+n}n.exports=function(n,t,e){var i=!0,o=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return h(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),m(n,t,{leading:i,maxWait:t,trailing:o})}}).call(this,e(11))}});