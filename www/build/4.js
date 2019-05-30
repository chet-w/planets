webpackJsonp([4],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["applyPolyfill"] = applyPolyfill;
function applyPolyfill(window, document) {/*!
Object.assign
*/
"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(d,f){if(null==d)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(d),b=1;b<arguments.length;b++){var a=arguments[b];if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},writable:!0,configurable:!0});
/*!
Object.entries
*/
Object.entries||(Object.entries=function(c){for(var b=Object.keys(c),a=b.length,d=Array(a);a--;)d[a]=[b[a],c[b[a]]];return d});
/*!
Object.values
*/
Object.values||(Object.values=function(n){return Object.keys(n).map(function(r){return n[r]})});

/*!
Number
*/
void 0===Number.isFinite&&(Number.isFinite=function(a){return"number"===typeof a&&isFinite(a)});
Number.isNaN=Number.isNaN||function(a){return a!==a};
Number.isInteger=Number.isInteger||function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a};
}

/***/ })

});
//# sourceMappingURL=4.js.map