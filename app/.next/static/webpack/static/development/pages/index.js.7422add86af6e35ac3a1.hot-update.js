webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridList */ "../node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "../node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "../node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ "../node_modules/graphql-request/dist/src/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "../node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "../node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Chip */ "../node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-stack-grid */ "../node_modules/react-stack-grid/lib/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Code */ "../node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_formatMoney__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/formatMoney */ "./utils/formatMoney.js");


var _jsxFileName = "/home/truongduchuy910/apps/loaloa.me/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















function Index(_ref) {
  var allDesigns = _ref.allDesigns,
      allSettings = _ref.allSettings,
      allMaintains = _ref.allMaintains,
      allTemplates = _ref.allTemplates,
      url = _ref.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(allDesigns),
      designs = _useState3[0],
      setDesigns = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(allSettings),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(allMaintains),
      maintains = _useState5[0],
      setMaintains = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      price = _useState6[0],
      setPrice = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      maintainPrice = _useState7[0],
      setMaintainPrice = _useState7[1];

  function getPrice() {
    var designs_id, settings_id, maintains_id, res, sum, design, setting, intergrate, maintain;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPrice$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            designs_id = [];
            designs.map(function (design) {
              if (design.choosed) designs_id.push(design.id);
            });
            settings_id = [];
            settings.map(function (setting) {
              if (setting.choosed) settings_id.push(setting.id);
            });
            maintains_id = [];
            maintains.map(function (maintain) {
              if (maintain.choosed) maintains_id.push(maintain.id);
            });

            if (!(designs_id.length && settings_id.length && maintains_id.length)) {
              _context.next = 20;
              break;
            }

            _context.next = 9;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])(url, "query($designs: [ID], $settings: [ID], $maintains: [ID]) {\n  design: allPricings(where: { design_every: { id_in: $designs } }) {\n    price\n  }\n  setting: allPricings(where: { setting_every: { id_in: $settings } }) {\n    price\n  }\n  intergrate: allPricings(\n    where: {\n      design_every: { id_in: $designs }\n      setting_every: { id_in: $settings }\n    }\n  ) {\n    price\n  }\n  maintain: allPricings(where: { maintain_some: { id_in: $maintains } }) {\n    price\n  }\n}", {
              designs: designs_id,
              settings: settings_id,
              maintains: maintains_id
            }));

          case 9:
            res = _context.sent;
            sum = 0;
            design = res.design, setting = res.setting, intergrate = res.intergrate, maintain = res.maintain;
            design.map(function (e) {
              return sum += e.price;
            });
            setting.map(function (e) {
              return sum += e.price;
            });
            setPrice(sum);
            sum = 0;
            maintain.map(function (e) {
              return sum += e.price;
            });
            setMaintainPrice(sum);
            _context.next = 20;
            break;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("resize", setWidth(window.innerWidth));
    window.addEventListener("resize", setHeight(window.innerHeight));
    getPrice();
  });
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 0,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    style: {
      backgroundColor: "#212121"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    sm: 7,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      lineNumber: 92
    },
    __self: this
  }, "Thi\u1EBFt k\u1EBF website/app ph\xE2n kh\xFAc ph\u1ED5 th\xF4ng"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Gi\xFAp b\u1EA1n s\u1EDF h\u1EEFu m\u1ED9t website/app \u0111\u1EA7y s\xE1ng t\u1EA1o v\u1EDBi c\xF4ng ngh\u1EC7 m\u1EDBi nh\u1EA5t \u0111\u01B0\u1EE3c h\xE0ng tri\u1EC7u ng\u01B0\u1EDDi s\u1EED d\u1EE5ng.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "H\xE2n h\u1EA1nh \u0111\u01B0\u1EE3c h\u1EE3p t\xE1c!")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    sm: 5,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
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
      lineNumber: 115
    },
    __self: this
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    style: {
      marginTop: width > 768 ? -75 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "GI\u1EDAI THI\u1EC6U"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Nhanh, R\u1EBB, \u0110\u1EB9p, Hi\u1EC7n \u0110\u1EA1i.", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "L\xE0 nh\u1EEFng g\xEC ch\xFAng t\xF4i c\xF3 v\xE0 hy v\u1ECDng mang l\u1EA1i cho b\u1EA1n nhi\u1EC1u h\u01A1n th\u1EBF n\u1EEFa.")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, allTemplates.map(function (template) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      sm: 6,
      md: 4,
      lg: 2,
      key: template.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("img", {
      src: template.file.publicUrl,
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }));
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "B\u1EA0N C\xD3 Y\xCAU C\u1EA6U G\xCC?"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Nh\u1EA5n ch\u1ECDn \u0111\u1EC3 b\xE1o gi\xE1!"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "primary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, Object(_utils_formatMoney__WEBPACK_IMPORTED_MODULE_18__["default"])(price, 0), " - \u0111"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, Object(_utils_formatMoney__WEBPACK_IMPORTED_MODULE_18__["default"])(maintainPrice, 0), " - \u0111 / n\u0103m"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Ch\u1EE9c n\u0103ng"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Ch\u1ECDn c\xE1c ch\u1EE9c n\u0103ng v\xE0 th\xE0nh ph\u1EA7n b\u1EA1n mu\u1ED1n xu\u1EA5t hi\u1EC7n tr\xEAn website/app c\u1EE7a m\xECnh."), settings.map(function (setting) {
    return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: setting.id,
      style: {
        margin: 5
      },
      label: setting.name,
      onClick: function onClick() {
        setting.choosed = !Boolean(setting.choosed);

        var newSettinngs = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(settings);

        setSettings(newSettinngs);
      },
      color: setting.choosed ? "primary" : "default",
      variant: "outlined",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    });
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Giao di\u1EC7n"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "L\u1EF1a ch\u1ECDn m\u1EE9c \u0111\u1ED9, phong c\xE1ch giao di\u1EC7n."), designs.map(function (design) {
    return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: design.id,
      style: {
        margin: 5
      },
      label: design.name,
      onClick: function onClick() {
        design.choosed = !Boolean(design.choosed);

        var newDesigns = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(designs);

        setDesigns(newDesigns);
      },
      color: design.choosed ? "primary" : "default",
      variant: "outlined",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    });
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    style: {
      marginTop: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Duy tr\xEC"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "M\u1ED9t website/app c\xF3 t\u1ED1c \u0111\u1ED9 t\u1EA3i (load) nhanh gi\xFAp n\xE2ng cao tr\u1EA3i nghi\u1EC7m kh\xE1ch h\xE0ng"), maintains.map(function (maintain) {
    return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: maintain.id,
      style: {
        margin: 5
      },
      label: maintain.name,
      onClick: function onClick() {
        maintain.choosed = !Boolean(maintain.choosed);

        var newMaintain = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(maintains);

        setMaintains(newMaintain);
      },
      color: maintain.choosed ? "primary" : "default",
      variant: "outlined",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    });
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginTop: 34
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    align: "center",
    style: {
      fontWeight: 800
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Ho\u1EB7c ch\u1EC9 c\u1EA7n g\u1EEDi b\xE0i vi\u1EBFt, h\xECnh \u1EA3nh."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "secondary",
    align: "center",
    style: {
      marginBottom: 13,
      marginTop: 13
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "Loa Loa Teams S\u1EBD B\u1ED1 Tr\xED B\xE0i Vi\u1EBFt, H\xECnh \u1EA2nh. S\xE1ng T\u1EA1o Giao Di\u1EC7n T\u01B0\u01A1ng X\u1EE9ng V\u1EDBi Th\u01B0\u01A1ng Hi\u1EC7u C\u1EE7a B\u1EA1n."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "primary",
    align: "center",
    style: {
      marginBottom: 21
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "6.000.000"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 280
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("path", {
    fill: "#212121",
    fillOpacity: "1",
    d: "M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 6,
    sm: 5,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
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
      lineNumber: 296
    },
    __self: this
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: 12,
    sm: 5,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    align: "center",
    style: {
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "Li\xEAn H\u1EC7"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    align: "center",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Tr\u1EA7n Ng\u1ECDc Huy", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), "100 Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Li\xEAn Chi\u1EC3u, \u0110\xE0 N\u1EB5ng.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), "0332813077", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }), "truongduchuy910@gmail.com"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }))), __jsx(_src_Copyright__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }))));
}

Index.getInitialProps = function _callee(ctx) {
  var a, url, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          a = "";
          if (true) a = "http://";else {}

          if (ctx.req) {
            url = a + ctx.req.headers.host + "/admin/api";
          } else {
            url = window.location.origin + "/admin/api";
          }

          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])(url, "query {\n  allDesigns {\n    id\n    name\n  }\n  allSettings {\n    id \n    name \n  }\n  allMaintains {\n    id\n    name \n  }\n  allTemplates {\n    id\n    file {\n      publicUrl\n    }\n  }\n}\n"));

        case 5:
          response = _context2.sent;
          response.url = url;
          return _context2.abrupt("return", response);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.7422add86af6e35ac3a1.hot-update.js.map