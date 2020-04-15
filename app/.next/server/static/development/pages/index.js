module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-stack-grid */ "react-stack-grid");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Code */ "@material-ui/icons/Code");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_formatMoney__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/formatMoney */ "./utils/formatMoney.js");
var _jsxFileName = "/home/truongduchuy910/apps/loaloa.me/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















function Index({
  allDesigns,
  allSettings,
  allMaintains,
  allTemplates,
  url
}) {
  let {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let {
    0: designs,
    1: setDesigns
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(allDesigns);
  let {
    0: settings,
    1: setSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(allSettings);
  let {
    0: maintains,
    1: setMaintains
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(allMaintains);
  let {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let {
    0: maintainPrice,
    1: setMaintainPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let {
    0: guide,
    1: setGuide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Nhấn chọn để báo giá!");

  async function getPrice() {
    setGuide("Đang tải...");
    let designs_id = [];
    designs.map(design => {
      if (design.choosed) designs_id.push(design.id);
    });
    let settings_id = [];
    settings.map(setting => {
      if (setting.choosed) settings_id.push(setting.id);
    });
    let maintains_id = [];
    maintains.map(maintain => {
      if (maintain.choosed) maintains_id.push(maintain.id);
    });

    if (!designs_id.length) {
      setGuide("Vui lòng chọn Giao diện");
      return false;
    }

    if (!settings_id.length) {
      setGuide("Vui lòng chọn Chức năng");
      return false;
    }

    let res = await Object(graphql_request__WEBPACK_IMPORTED_MODULE_5__["request"])(url, `query($designs: [ID!], $settings: [ID!], $maintains: [ID!]) {
  intergrate: allPricings(
    where: {
      design_every: { id_in: $designs }
      setting_every: { id_in: $settings }
      maintain_every: { id: null }
    }
  ) {
    design {
      name
    }
    setting {
      name
    }
    price
  }
  maintain: allPricings(
    where: {
      design_every: null
      setting_every: null
      maintain_some: { id_in: $maintains }
    }
  ) {
    price
  }
}`, {
      designs: designs_id,
      settings: settings_id,
      maintains: maintains_id
    });
    console.log(res);
    let sum = 0;
    let {
      intergrate,
      maintain
    } = res;
    intergrate.map(e => sum += e.price);
    setPrice(sum);
    sum = 0;
    maintain.map(e => sum += e.price);
    setMaintainPrice(sum);
    setGuide("Dự toán!");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));
    window.addEventListener("resize", setHeight(window.innerHeight));
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    style: {
      backgroundColor: "#212121"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12___default.a, {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    sm: 7,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h5",
    align: "center",
    style: {
      marginTop: 21,
      marginBottom: 21,
      color: "white",
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Thi\u1EBFt k\u1EBF website/app ph\xE2n kh\xFAc ph\u1ED5 th\xF4ng"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Gi\xFAp b\u1EA1n s\u1EDF h\u1EEFu m\u1ED9t website/app \u0111\u1EA7y s\xE1ng t\u1EA1o v\u1EDBi c\xF4ng ngh\u1EC7 m\u1EDBi nh\u1EA5t \u0111\u01B0\u1EE3c h\xE0ng tri\u1EC7u ng\u01B0\u1EDDi s\u1EED d\u1EE5ng.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "H\xE2n h\u1EA1nh \u0111\u01B0\u1EE3c h\u1EE3p t\xE1c!")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    sm: 5,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/development.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: width > 768 ? -75 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12___default.a, {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "GI\u1EDAI THI\u1EC6U"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Nhanh, R\u1EBB, \u0110\u1EB9p, Hi\u1EC7n \u0110\u1EA1i.", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "L\xE0 nh\u1EEFng g\xEC ch\xFAng t\xF4i c\xF3 v\xE0 hy v\u1ECDng mang l\u1EA1i cho b\u1EA1n nhi\u1EC1u h\u01A1n th\u1EBF n\u1EEFa.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, allTemplates.map(template => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    sm: 6,
    md: 4,
    lg: 2,
    key: template.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("img", {
    src: template.file.publicUrl,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "B\u1EA0N C\xD3 Y\xCAU C\u1EA6U G\xCC?"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, guide), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "primary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, Object(_utils_formatMoney__WEBPACK_IMPORTED_MODULE_16__["default"])(price, 0), " - \u0111"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, Object(_utils_formatMoney__WEBPACK_IMPORTED_MODULE_16__["default"])(maintainPrice, 0), " - \u0111 / n\u0103m"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Ch\u1EE9c n\u0103ng"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Ch\u1ECDn c\xE1c ch\u1EE9c n\u0103ng v\xE0 th\xE0nh ph\u1EA7n b\u1EA1n mu\u1ED1n xu\u1EA5t hi\u1EC7n tr\xEAn website/app c\u1EE7a m\xECnh."), settings.map(setting => __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
    key: setting.id,
    style: {
      margin: 5
    },
    label: setting.name,
    onClick: () => {
      setting.choosed = !Boolean(setting.choosed);
      let newSettinngs = [...settings];
      setSettings(newSettinngs);
      getPrice();
    },
    color: setting.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Giao di\u1EC7n"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "L\u1EF1a ch\u1ECDn m\u1EE9c \u0111\u1ED9, phong c\xE1ch giao di\u1EC7n."), designs.map(design => __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
    key: design.id,
    style: {
      margin: 5
    },
    label: design.name,
    onClick: () => {
      design.choosed = !Boolean(design.choosed);
      let newDesigns = [...designs];
      setDesigns(newDesigns);
      getPrice();
    },
    color: design.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Duy tr\xEC"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "M\u1ED9t website/app c\xF3 t\u1ED1c \u0111\u1ED9 t\u1EA3i (load) nhanh gi\xFAp n\xE2ng cao tr\u1EA3i nghi\u1EC7m kh\xE1ch h\xE0ng"), maintains.map(maintain => __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
    key: maintain.id,
    style: {
      margin: 5
    },
    label: maintain.name,
    onClick: () => {
      maintain.choosed = !Boolean(maintain.choosed);
      let newMaintain = [...maintains];
      setMaintains(newMaintain);
      getPrice();
    },
    color: maintain.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "Ho\u1EB7c ch\u1EC9 c\u1EA7n g\u1EEDi b\xE0i vi\u1EBFt, h\xECnh \u1EA3nh."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 13,
      marginTop: 13
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "Loa Loa Teams S\u1EBD B\u1ED1 Tr\xED B\xE0i Vi\u1EBFt, H\xECnh \u1EA2nh. S\xE1ng T\u1EA1o Giao Di\u1EC7n T\u01B0\u01A1ng X\u1EE9ng V\u1EDBi Th\u01B0\u01A1ng Hi\u1EC7u C\u1EE7a B\u1EA1n."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "primary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "6.000.000"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    container: true,
    style: {
      backgroundColor: "#212121",
      marginTop: 21,
      padding: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12___default.a, {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 6,
    sm: 5,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/coder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 5,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h6",
    align: "center",
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Li\xEAn H\u1EC7"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Tr\u1EA7n Ng\u1ECDc Huy", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }), "100 Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Li\xEAn Chi\u1EC3u, \u0110\xE0 N\u1EB5ng.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }), "0332813077", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }), "truongduchuy910@gmail.com"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }))), __jsx(_src_Copyright__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }))));
}

Index.getInitialProps = async ctx => {
  var a = "";
  if (true) a = "http://";else {}

  if (ctx.req) {
    var url = a + ctx.req.headers.host + "/admin/api";
  } else {
    var url = window.location.origin + "/admin/api";
  }

  let response = await Object(graphql_request__WEBPACK_IMPORTED_MODULE_5__["request"])(url, `query {
  allDesigns {
    id
    name
  }
  allSettings {
    id 
    name 
  }
  allMaintains {
    id
    name 
  }
  allTemplates {
    id
    file {
      publicUrl
    }
  }
}
`);
  response.url = url;
  return response;
};

/***/ }),

/***/ "./src/Copyright.js":
/*!**************************!*\
  !*** ./src/Copyright.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Copyright; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/truongduchuy910/apps/loaloa.me/app/src/Copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: 7
    },
    variant: "body2",
    color: "secondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Copyright © ", new Date().getFullYear(), " Loa Loa Teams", " All Rights.");
}

/***/ }),

/***/ "./utils/formatMoney.js":
/*!******************************!*\
  !*** ./utils/formatMoney.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMoney; });
function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {}
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/truongduchuy910/apps/loaloa.me/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/icons/Code":
/*!******************************************!*\
  !*** external "@material-ui/icons/Code" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-stack-grid":
/*!***********************************!*\
  !*** external "react-stack-grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map