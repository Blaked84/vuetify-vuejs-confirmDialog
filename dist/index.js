!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["firebase-uploader"]=t():e["firebase-uploader"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o,r,i,c,a){var s=typeof(e=e||{}).default;"object"!==s&&"function"!==s||(e=e.default);var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId=i),c?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var f=u.render;u.render=function(e,t){return l.call(t),f(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}({props:["title","text","cancelText","confirmText","value"]},function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),o("v-card-text",[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red",flat:""},on:{click:function(){return e.$emit("cancelAction")}}},[t._v(t._s(t.cancelText))]),t._v(" "),o("v-btn",{attrs:{color:"green",flat:""},on:{click:function(){return e.$emit("confirmAction")}}},[t._v(t._s(t.confimText))])],1)],1)],1)},[],!1,null,null,null).exports;n.d(t,"VuetifyConfirmDialog",function(){return o});t.default={install:function(e){e.component("VuetifyConfirmDialog",o)}}}])});