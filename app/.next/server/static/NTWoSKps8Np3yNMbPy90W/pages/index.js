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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oHb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "3gxl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/GridList"
var GridList_ = __webpack_require__("3gxl");

// EXTERNAL MODULE: external "@material-ui/core/GridListTile"
var GridListTile_ = __webpack_require__("+oHb");

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__("dAJ7");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");

// CONCATENATED MODULE: ./src/Copyright.js
var __jsx = external_react_default.a.createElement;



function Copyright() {
  return __jsx(Typography_default.a, {
    style: {
      margin: 7
    },
    variant: "body2",
    color: "secondary",
    align: "center"
  }, "Copyright © ", new Date().getFullYear(), " Loa Loa Teams", " All Rights.");
}
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/Chip"
var Chip_ = __webpack_require__("Sndy");
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);

// EXTERNAL MODULE: external "react-stack-grid"
var external_react_stack_grid_ = __webpack_require__("nog1");

// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__("n9Bu");
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_);

// CONCATENATED MODULE: ./utils/formatMoney.js
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
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });

var pages_jsx = external_react_default.a.createElement;

















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
  } = Object(external_react_["useState"])();
  let {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])();
  let {
    0: designs,
    1: setDesigns
  } = Object(external_react_["useState"])(allDesigns);
  let {
    0: settings,
    1: setSettings
  } = Object(external_react_["useState"])(allSettings);
  let {
    0: maintains,
    1: setMaintains
  } = Object(external_react_["useState"])(allMaintains);
  let {
    0: price,
    1: setPrice
  } = Object(external_react_["useState"])(0);
  let {
    0: maintainPrice,
    1: setMaintainPrice
  } = Object(external_react_["useState"])(0);

  async function getPrice() {
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
    let res = await Object(external_graphql_request_["request"])(url, `query($designs: [ID], $settings: [ID], $maintains: [ID]) {
  design: allPricings(where: { design_some: { id_in: $designs } }) {
    price
  }
  setting: allPricings(where: { setting_some: { id_in: $settings } }) {
    price
  }
  intergrate: allPricings(
    where: {
      design_some: { id_in: $designs }
      setting_some: { id_in: $settings }
    }
  ) {
    price
  }
  maintain: allPricings(where: { maintain_some: { id_in: $maintains } }) {
    price
  }
}`, {
      designs: designs_id,
      settings: settings_id,
      maintains: maintains_id
    });
    let sum = 0;
    let {
      design,
      setting,
      intergrate,
      maintain
    } = res;
    design.map(e => sum += e.price);
    setting.map(e => sum += e.price);
    setPrice(sum);
    sum = 0;
    maintain.map(e => sum += e.price);
    setMaintainPrice(sum);
  }

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));
    window.addEventListener("resize", setHeight(window.innerHeight));
    getPrice();
  });
  return pages_jsx(Grid_default.a, {
    container: true,
    spacing: 0,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    style: {
      backgroundColor: "#212121"
    }
  }, pages_jsx(Container_default.a, {
    maxWidth: "lg"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    sm: 7,
    md: 6
  }, pages_jsx(Typography_default.a, {
    variant: "h5",
    align: "center",
    style: {
      marginTop: 21,
      marginBottom: 21,
      color: "white",
      fontWeight: 800
    }
  }, "Thi\u1EBFt k\u1EBF website/app ph\xE2n kh\xFAc ph\u1ED5 th\xF4ng"), pages_jsx(Typography_default.a, {
    variant: "body1",
    align: "center",
    color: "secondary"
  }, "Gi\xFAp b\u1EA1n s\u1EDF h\u1EEFu m\u1ED9t website/app \u0111\u1EA7y s\xE1ng t\u1EA1o v\u1EDBi c\xF4ng ngh\u1EC7 m\u1EDBi nh\u1EA5t \u0111\u01B0\u1EE3c h\xE0ng tri\u1EC7u ng\u01B0\u1EDDi s\u1EED d\u1EE5ng.", pages_jsx("br", null), pages_jsx(Code_default.a, {
    color: "secondary"
  })), pages_jsx(Typography_default.a, {
    variant: "body1",
    align: "center",
    color: "secondary"
  }, "H\xE2n h\u1EA1nh \u0111\u01B0\u1EE3c h\u1EE3p t\xE1c!")), pages_jsx(Grid_default.a, {
    item: true,
    sm: 5,
    md: 6
  }, pages_jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/development.png"
  }))))), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, pages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320"
  }, pages_jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
  }))), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    style: {
      marginTop: width > 768 ? -75 : 0
    }
  }, pages_jsx(Container_default.a, {
    maxWidth: "lg"
  }, pages_jsx(Typography_default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 21
    }
  }, "GI\u1EDAI THI\u1EC6U"), pages_jsx(Typography_default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    }
  }, "Nhanh, R\u1EBB, \u0110\u1EB9p, Hi\u1EC7n \u0110\u1EA1i.", pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    }
  }, "L\xE0 nh\u1EEFng g\xEC ch\xFAng t\xF4i c\xF3 v\xE0 hy v\u1ECDng mang l\u1EA1i cho b\u1EA1n nhi\u1EC1u h\u01A1n th\u1EBF n\u1EEFa.")), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center"
  }, allTemplates.map(template => pages_jsx(Grid_default.a, {
    item: true,
    xs: 6,
    sm: 6,
    md: 4,
    lg: 2,
    key: template.id
  }, pages_jsx("img", {
    src: template.file.publicUrl,
    style: {
      width: "100%"
    }
  })))), pages_jsx(Typography_default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    }
  }, "B\u1EA0N C\xD3 Y\xCAU C\u1EA6U G\xCC?"), pages_jsx(Typography_default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    }
  }, "Nh\u1EA5n ch\u1ECDn \u0111\u1EC3 b\xE1o gi\xE1!"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "primary",
    align: "center"
  }, formatMoney(price, 0), " - \u0111"), pages_jsx(Typography_default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    }
  }, formatMoney(maintainPrice, 0), " - \u0111 / n\u0103m"), pages_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    }
  }, "Ch\u1EE9c n\u0103ng"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }, "Ch\u1ECDn c\xE1c ch\u1EE9c n\u0103ng v\xE0 th\xE0nh ph\u1EA7n b\u1EA1n mu\u1ED1n xu\u1EA5t hi\u1EC7n tr\xEAn website/app c\u1EE7a m\xECnh."), settings.map(setting => pages_jsx(Chip_default.a, {
    key: setting.id,
    style: {
      margin: 5
    },
    label: setting.name,
    onClick: () => {
      setting.choosed = !Boolean(setting.choosed);
      let newSettinngs = [...settings];
      setSettings(newSettinngs);
    },
    color: setting.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small"
  })), pages_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    }
  }, "Giao di\u1EC7n"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }, "L\u1EF1a ch\u1ECDn m\u1EE9c \u0111\u1ED9, phong c\xE1ch giao di\u1EC7n."), designs.map(design => pages_jsx(Chip_default.a, {
    key: design.id,
    style: {
      margin: 5
    },
    label: design.name,
    onClick: () => {
      design.choosed = !Boolean(design.choosed);
      let newDesigns = [...designs];
      setDesigns(newDesigns);
    },
    color: design.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small"
  })), pages_jsx(Typography_default.a, {
    variant: "h6",
    style: {
      marginTop: 21
    }
  }, "Duy tr\xEC"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }, "M\u1ED9t website/app c\xF3 t\u1ED1c \u0111\u1ED9 t\u1EA3i (load) nhanh gi\xFAp n\xE2ng cao tr\u1EA3i nghi\u1EC7m kh\xE1ch h\xE0ng"), maintains.map(maintain => pages_jsx(Chip_default.a, {
    key: maintain.id,
    style: {
      margin: 5
    },
    label: maintain.name,
    onClick: () => {
      maintain.choosed = !Boolean(maintain.choosed);
      let newMaintain = [...maintains];
      setMaintains(newMaintain);
    },
    color: maintain.choosed ? "primary" : "default",
    variant: "outlined",
    size: "small"
  })), pages_jsx(Typography_default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    }
  }, pages_jsx(Code_default.a, {
    color: "secondary"
  })), pages_jsx(Typography_default.a, {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    }
  }, "Ho\u1EB7c ch\u1EC9 c\u1EA7n g\u1EEDi b\xE0i vi\u1EBFt, h\xECnh \u1EA3nh."), pages_jsx(Typography_default.a, {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 13,
      marginTop: 13
    }
  }, "Loa Loa Teams S\u1EBD B\u1ED1 Tr\xED B\xE0i Vi\u1EBFt, H\xECnh \u1EA2nh. S\xE1ng T\u1EA1o Giao Di\u1EC7n T\u01B0\u01A1ng X\u1EE9ng V\u1EDBi Th\u01B0\u01A1ng Hi\u1EC7u C\u1EE7a B\u1EA1n."), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "primary",
    align: "center",
    style: {
      marginBottom: 21
    }
  }, "6.000.000"))), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    container: true,
    style: {
      backgroundColor: "#212121",
      marginTop: 21,
      padding: 21
    }
  }, pages_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320"
  }, pages_jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
  })), pages_jsx(Container_default.a, {
    maxWidth: "lg"
  }, pages_jsx(Grid_default.a, {
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center"
  }, pages_jsx(Grid_default.a, {
    item: true,
    xs: 6,
    sm: 5,
    md: 4,
    lg: 3
  }, pages_jsx("img", {
    style: {
      width: "100%",
      padding: 21
    },
    src: "/img/coder.png"
  })), pages_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 5,
    md: 4,
    lg: 3
  }, pages_jsx(Typography_default.a, {
    variant: "h6",
    align: "center",
    style: {
      color: "white"
    }
  }, "Li\xEAn H\u1EC7"), pages_jsx(Typography_default.a, {
    variant: "body1",
    align: "center",
    color: "secondary"
  }, "Tr\u1EA7n Ng\u1ECDc Huy", pages_jsx("br", null), "100 Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Li\xEAn Chi\u1EC3u, \u0110\xE0 N\u1EB5ng.", pages_jsx("br", null), "0332813077", pages_jsx("br", null), "truongduchuy910@gmail.com"), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }), pages_jsx(Typography_default.a, {
    variant: "body1",
    color: "secondary"
  }))), pages_jsx(Copyright, null))));
}

Index.getInitialProps = async ctx => {
  var a = "";
  if (false) {}else a = "https://";

  if (ctx.req) {
    var url = a + ctx.req.headers.host + "/admin/api";
  } else {
    var url = window.location.origin + "/admin/api";
  }

  let response = await Object(external_graphql_request_["request"])(url, `query {
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

/***/ "Sndy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "n9Bu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "nog1":
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ })

/******/ });