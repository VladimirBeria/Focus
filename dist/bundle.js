/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.css */ "./src/test.css");
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_main_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main-style.scss */ "./src/style/main-style.scss");
/* harmony import */ var _style_main_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/header.scss */ "./src/style/header.scss");
/* harmony import */ var _style_header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_header_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scrollbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/scrollbar.scss */ "./src/style/scrollbar.scss");
/* harmony import */ var _style_scrollbar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scrollbar_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/footer.scss */ "./src/style/footer.scss");
/* harmony import */ var _style_footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_footer_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_responsive_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/responsive.scss */ "./src/style/responsive.scss");
/* harmony import */ var _style_responsive_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_responsive_scss__WEBPACK_IMPORTED_MODULE_5__);






var secondarySlider = new Splide('#secondary-slider', {
  fixedWidth: 120,
  height: 100,
  autoplay: true,
  cover: true,
  arrows: false,
  isNavigation: true,
  pagination: false,
  breakpoints: {
    768: {
      fixedWidth: 66,
      height: 65
    }
  }
}).mount();
var primarySlider = new Splide('#image-slider', {
  type: 'fade',
  heightRatio: 0.3,
  cover: true,
  pagination: false,
  arrows: false,
  breakpoints: {
    768: {}
  }
}); // do not call mount() here.

primarySlider.sync(secondarySlider).mount();
new Splide('#slider-1', {
  fixedWidth: 405,
  gap: 100,
  pagination: false,
  perPage: 3,
  type: "loop",
  focus: "center",
  breakpoints: {
    1140: {
      gap: 300
    },
    992: {
      gap: 300,
      perPage: 1,
      fixedWidth: 225
    }
  }
}).mount();
new Splide('#popular-now', {
  fixedWidth: 300,
  gap: 85,
  pagination: false,
  perPage: 4,
  type: "loop",
  breakpoints: {
    1140: {
      perPage: 2,
      gap: 200
    },
    992: {
      gap: 125,
      perPage: 1,
      fixedWidth: 250
    }
  }
}).mount();
new Splide('#slider_large', {
  pagination: false,
  gap: 20,
  perPage: 1,
  type: "loop",
  breakpoints: {
    768: {
      perPage: 1
    }
  }
}).mount();
new Splide('#slider_time', {
  pagination: false,
  gap: 20,
  perPage: 1,
  type: "loop"
}).mount();

/***/ }),

/***/ "./src/style/footer.scss":
/*!*******************************!*\
  !*** ./src/style/footer.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/header.scss":
/*!*******************************!*\
  !*** ./src/style/header.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/main-style.scss":
/*!***********************************!*\
  !*** ./src/style/main-style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/responsive.scss":
/*!***********************************!*\
  !*** ./src/style/responsive.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/scrollbar.scss":
/*!**********************************!*\
  !*** ./src/style/scrollbar.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/test.css":
/*!**********************!*\
  !*** ./src/test.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map