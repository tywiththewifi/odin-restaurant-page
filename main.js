(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n    background-color: darkslategrey;\n}\n\np, h1 {\n    color: white;\n}\n\np {\n    font-size: 25px;\n}\n\nheader {\n    display: grid;\n    grid-column: 2/3;\n}\n\nnav {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: grid;\n    grid-template: repeat(2, 1fr) / repeat(5, 1fr);\n}\n\nbutton {\n    height: 50px;\n    margin: 1%;\n}\n\n#main-container {\n    display: grid;\n    grid-template: 0.3fr 1fr / repeat(3, 1fr);\n}\n\n#home_button {\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n}\n\n#menu_button {\n    grid-row: 1 / 3;\n    grid-column: 3 / 4;\n}\n\n#contact_button {\n    grid-row: 1 / 3;\n    grid-column: 4 / 5;\n}\n\n#content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n\n    text-align: center;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var d=t(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r={};(()=>{t.d(r,{_:()=>T});var n=t(72),e=t.n(n),o=t(825),i=t.n(o),a=t(659),c=t.n(a),s=t(56),u=t.n(s),d=t(540),l=t.n(d),f=t(113),p=t.n(f),m=t(365),h={};h.styleTagTransform=p(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;const v=document.getElementById("content");function g(n){v.innerHTML+=`<h1>${n}</h1>`}function y(n){v.innerHTML+=`<p>${n}<p>`}function b(){g("Welcome to Better Than Nothing!"),y("Welcome to Better Than Nothing, where our motto is, 'At least it's edible!' Here at our delightfully minimalist establishment, we pride ourselves on serving dishes that are marginally better than starvation. Our menu features an eclectic array of options, ranging from 'Kinda Tasty' to 'Barely Passable,' guaranteed to tantalize your taste buds with the faint promise of satisfaction. Whether you're craving something that almost resembles food or simply seeking an experience that's just a step above culinary despair, Better Than Nothing is the place for you. Come join us for a dining adventure where mediocrity meets minimalism, and where you'll leave thinking, 'Eh, it wasn't the worst.'")}function _(){g("Menu"),y("Item 1"),y("Item 2"),y("Item 3"),y("Item 4"),y("Item 5")}function x(){g("Conatct Us"),y("For inquiries or reservations, please do not reach out to us."),y("If you must insist, you can find us at:"),y("________________")}document.getElementById("conact_button").addEventListener("click",(function(){T(x)}));const w=document.getElementById("home_button"),I=document.getElementById("menu_button"),E=document.getElementById("contact_button");function T(n){!function(){const n=document.getElementById("content");for(;n.firstChild;)n.removeChild(n.firstChild)}(),n()}w.addEventListener("click",(function(){T(b)})),I.addEventListener("click",(function(){T(_)})),E.addEventListener("click",(function(){T(x)})),b()})()})();