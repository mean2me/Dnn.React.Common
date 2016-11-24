!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-text-overflow-wrapper"),require("react")):"function"==typeof define&&define.amd?define(["dnn-text-overflow-wrapper","react"],t):"object"==typeof exports?exports.PersonaBarPageHeader=t(require("dnn-text-overflow-wrapper"),require("react")):e.PersonaBarPageHeader=t(e["dnn-text-overflow-wrapper"],e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),i=n(o),a=r(5),s=n(a);r(4);var p=function(e){var t=e.title,r=e.children,n=e.tooltip,o=e.titleMaxWidth;return i["default"].createElement("div",{className:"dnn-persona-bar-page-header"},i["default"].createElement("h3",{title:n},i["default"].createElement(s["default"],{text:t,maxWidth:o})),r)};p.propTypes={title:o.PropTypes.string,children:o.PropTypes.node,tooltip:o.PropTypes.string,titleMaxWidth:o.PropTypes.number},p.defaultProps={titleMaxWidth:500},t["default"]=p},function(e,t,r){t=e.exports=r(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-persona-bar-page-header{position:absolute;top:0;width:100%;height:100px;background-color:#fff;-khtml-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;min-height:103px;z-index:1001;padding:28px 30px 10px}.dnn-persona-bar-page-header button{float:right}.dnn-persona-bar-page-header>h3{display:inline-block;font-size:28px;letter-spacing:1px;line-height:1em;margin:10px 0;font-weight:400;font-family:inherit}.dnn-persona-bar-page-header>h3 .dnn-text-overflow-wrapper{font-size:inherit}.dnn-persona-bar-page-header>h3 .dnn-text-overflow-wrapper .overflow-tooltip{max-width:500px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=c[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(f(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(f(n.parts[i],t));c[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],p=o[3],f={css:a,media:s,sourceMap:p};r[i]?r[i].parts.push(f):t.push(r[i]={id:i,parts:[f]})}return t}function i(e,t){var r=g(),n=m[m.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function p(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function f(e,t){var r,n,o;if(t.singleton){var i=b++;r=x||(x=s(t)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=p(t),n=d.bind(null,r),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=u.bind(null,r),o=function(){a(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function l(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var r=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t){var r=t.css,n=(t.media,t.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var c={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,b=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],p=c[s.id];p.refs--,i.push(p)}if(e){var f=o(e);n(f,t)}for(var a=0;a<i.length;a++){var p=i[a];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete c[p.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.id,n,""]]);r(3)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});