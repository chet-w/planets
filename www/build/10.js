webpackJsonp([10],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlBackgroundVideo", function() { return GLBackgroundVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_background_video_core_js__ = __webpack_require__(270);
var GLBackgroundVideoComponent=function(){function e(){this.muted=!0}return e.prototype.componentDidLoad=function(){this.muted&&(this.videoElement.muted=!0)},e.prototype.render=function(){return Object(__WEBPACK_IMPORTED_MODULE_0__gl_background_video_core_js__["b" /* h */])("video",{autoplay:!0,loop:!0,playsinline:!0,preload:"auto",muted:this.muted,src:this.src,poster:this.poster})},Object.defineProperty(e,"is",{get:function(){return"gl-background-video"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{muted:{type:Boolean,attr:"muted"},poster:{type:String,attr:"poster"},src:{type:String,attr:"src"},videoElement:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"video{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}:host-context(.plt-android) video[poster]{-o-object-fit:none;object-fit:none}"},enumerable:!0,configurable:!0}),e}();

/***/ })

});
//# sourceMappingURL=10.js.map