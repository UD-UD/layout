(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("layout", [], factory);
	else if(typeof exports === 'object')
		exports["layout"] = factory();
	else
		root["layout"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./constants/defaults.js":
/*!*******************************!*\
  !*** ./constants/defaults.js ***!
  \*******************************/
/*! exports provided: DEFAULT_BORDER_COLOR, DEFAULT_BORDER_WIDTH, DEFAULT_WIDTH, DEFAULT_HEIGHT, LAYOUT_ID, LAYOUT_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BORDER_COLOR", function() { return DEFAULT_BORDER_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BORDER_WIDTH", function() { return DEFAULT_BORDER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return DEFAULT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return DEFAULT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_ID", function() { return LAYOUT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_NAME", function() { return LAYOUT_NAME; });
const DEFAULT_BORDER_COLOR = 'cyan';
const DEFAULT_BORDER_WIDTH = '2px';
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 400;
const LAYOUT_ID = 'd2ad88af-7050-4c1c-b407-42745cfe3bd7';
const LAYOUT_NAME = 'fusionBoardLayout';



/**
 * Hello
 */

/***/ }),

/***/ "./controller/controller.js":
/*!**********************************!*\
  !*** ./controller/controller.js ***!
  \**********************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _renderers_html_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/html-renderer */ "./renderers/html-renderer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");



class Controller {
  constructor(data, renderer, container) {
    this.data = data;
    this.renderer = renderer;
    global.__renderer = renderer; // TODO change global into diff place
    this.renderer_id = !_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isDOMElement(container) ? container : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getID(container);
  }

  render() {
    switch (this.renderer) {
      case 'html':
        this.renderHTML();
        break;
    }
  }

  renderHTML() {
    let renderer = new _renderers_html_renderer__WEBPACK_IMPORTED_MODULE_0__["HTMLRenderer"](this.data);
    renderer.createhtml(this.renderer_id);
  }

  customiseNode(node, borderColor, borderWidth) {
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isDOMElement(node)) {
      _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].highLightNode(node, borderColor, borderWidth);
    } else {
      _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].highLightNode(document.getElementById(node), borderColor, borderWidth);
    }
  }

  resetNode(container) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].unHighLightNode(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isDOMElement(container) ? container : document.getElementById(container));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./data-adapters/data-parser.js":
/*!**************************************!*\
  !*** ./data-adapters/data-parser.js ***!
  \**************************************/
/*! exports provided: DataParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataParser", function() { return DataParser; });
/* harmony import */ var _models_data_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/data-point */ "./models/data-point.js");



class DataParser {
  constructor(data) {
    this.data = data;
  }

  defaultDataPointLogic() {
    let nodepoints = [];
    this.getnodePoints(this.data, nodepoints);
    return nodepoints;
  }

  getnodePoints(node, nodepoints) {
    let datapoint = new _models_data_point__WEBPACK_IMPORTED_MODULE_0__["DataPoint"](node);
    nodepoints.push(datapoint);
    node.children.forEach(child => {
      this.getnodePoints(child, nodepoints);
    });
  }
}

/***/ }),

/***/ "./data-adapters/html-data.js":
/*!************************************!*\
  !*** ./data-adapters/html-data.js ***!
  \************************************/
/*! exports provided: HTMLDataAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDataAdapter", function() { return HTMLDataAdapter; });
/* harmony import */ var _data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-parser */ "./data-adapters/data-parser.js");
/* eslint no-useless-constructor: "off" */


class HTMLDataAdapter extends _data_parser__WEBPACK_IMPORTED_MODULE_0__["DataParser"] {
  constructor(data) {
    super(data);
  }

  getCoordinates() {
    return super.defaultDataPointLogic();
  }
}

/***/ }),

/***/ "./highlighter/highlighter.js":
/*!************************************!*\
  !*** ./highlighter/highlighter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Highligher {
  constructor() {
    this.overlay = document.createElement('div');
    this.addStyleToOverlay();
    this.overlayContent = document.createElement('div');
    this.addStyleToOverlayContent();
    this.overlay.appendChild(this.overlayContent);
  }

  addStyleToOverlay() {
    let overlayStyle = this.overlay.style;
    overlayStyle.backgroundColor = 'rgba(104, 182, 255, 0.35)';
    overlayStyle.position = 'fixed';
    overlayStyle.zIndex = '99999999999999';
    overlayStyle.pointerEvents = 'none';
    overlayStyle.display = 'flex';
    overlayStyle.alignItems = 'center';
    overlayStyle.justifyContent = 'center';
    overlayStyle.borderRadius = '3px';
  }

  addStyleToOverlayContent() {
    let overlayContentStyle = this.overlayContent.style;
    overlayContentStyle.backgroundColor = 'rgba(104, 182, 255, 0.9)';
    overlayContentStyle.fontFamily = 'monospace';
    overlayContentStyle.fontSize = '11px';
    overlayContentStyle.padding = '2px 3px';
    overlayContentStyle.borderRadius = '3px';
    overlayContentStyle.color = 'white';
  }

  showOverlay({
    width = 0,
    height = 0,
    top = 0,
    left = 0
  }, content = '') {
    let overlayStyle = this.overlay.style;
    overlayStyle.width = ~~width + 'px';
    overlayStyle.height = ~~height + 'px';
    overlayStyle.top = ~~top + 'px';
    overlayStyle.left = ~~left + 'px';
    if (content) {
      this.overlayContent.innerHTML = content;
    }
    document.body.appendChild(this.overlay);
  }

  highlight(instance, highlightText) {
    let content = '';
    let rect = instance.getBoundingClientRect();
    if (highlightText) {
      content = `<span style="opacity: .6;">[</span>${highlightText}<span style="opacity: .6;">]</span>`;
    }
    this.showOverlay(rect, content);
  }

  unHighlight() {
    if (this.overlay.parentNode) {
      document.body.removeChild(this.overlay);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Highligher);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Layout, DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-definition */ "./layout-definition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _layout_definition__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"]; });

/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout */ "./layout/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./layout-definition/index.js":
/*!************************************!*\
  !*** ./layout-definition/index.js ***!
  \************************************/
/*! exports provided: LayoutModel, DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-model */ "./layout-definition/layout-model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModel", function() { return _layout_model__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./layout-definition/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["DummyComponent"]; });






/***/ }),

/***/ "./layout-definition/layout-model/index.js":
/*!*************************************************!*\
  !*** ./layout-definition/layout-model/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-model */ "./layout-definition/layout-model/layout-model.js");


/* harmony default export */ __webpack_exports__["default"] = (_layout_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./layout-definition/layout-model/layout-model.js":
/*!********************************************************!*\
  !*** ./layout-definition/layout-model/layout-model.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree */ "./layout-definition/tree/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./layout-definition/utils/index.js");



class LayoutModel {
  constructor(measurements, config) {
    this.measurements = measurements;
    this.config = config;
    this.root = this.createTree(this.config, null);
    this.setBoundBox();
  }

  createTree(config, parent) {
    const node = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"](config);
    if (parent) {
      node._parentCut = parent.getCutType();
      parent.addChildren([node]);
    } else {
      this.root = node;
    }
    for (let lane of config.lanes) {
      this.createTree(lane, node);
    }

    return this.root;
  }

  allocateBoundingBox(node) {
    const totalWeight = node.children.map(child => child.model.ratioWeight).reduce((carry, val) => carry + val, 0);

    node.children.forEach((child, i, children) => {
      let lastSibling = children[i - 1];
      let ratio = child.model.ratioWeight / totalWeight;

      if (child._parentCut === 'h') {
        child.boundBox.width = child.parent.boundBox.width;
        child.boundBox.height = child.parent.boundBox.height * ratio;
        child.boundBox.left = child.parent.boundBox.left;
        child.boundBox.top = i ? lastSibling.boundBox.top + lastSibling.boundBox.height : 0;
      } else {
        child.boundBox.width = child.parent.boundBox.width * ratio;
        child.boundBox.height = child.parent.boundBox.height;
        child.boundBox.top = child.parent.boundBox.top;
        child.boundBox.left = i ? lastSibling.boundBox.left + lastSibling.boundBox.width : 0;
      }
      this.allocateBoundingBox(child);
    });
  }

  setBoundBox() {
    this.root.boundBox = {
      top: 0,
      left: 0,
      width: this.measurements.width,
      height: this.measurements.height
    };
    this.allocateBoundingBox(this.root);
  }

  negotiateDimension(node) {
    let preferred;
    let cumultiveExtraSpaceAmt = 0;
    let alteredDim;
    let nonAlteredDim;
    let childrenLength = node.children.length;

    for (let index = 0; index < childrenLength; index++) {
      let fn;
      let extraSpaceAmt;
      let child = node.children[index];

      if (child._parentCut === 'h') {
        fn = _utils__WEBPACK_IMPORTED_MODULE_1__["yExtraSpace"];
        alteredDim = 'height';
        nonAlteredDim = 'width';
      } else {
        fn = _utils__WEBPACK_IMPORTED_MODULE_1__["xExtraSpace"];
        alteredDim = 'width';
        nonAlteredDim = 'height';
      }
      // if vertical then get extra height from other node and push it to the preferred node.
      // for horizontal cut the same thing is to be done with width
      if (child.isPreferred()) {
        // push extra space in sink. Execute it when all non preferred space are computed.
        preferred = child;

        continue; // eslint-disable-line no-continue
      }
      // reduce own height and save it in a var
      cumultiveExtraSpaceAmt += extraSpaceAmt = fn(child);
      child.boundBox[alteredDim] -= extraSpaceAmt;
      // update nonaltered dim from parent for any change which happened during negotiation
      child.boundBox[nonAlteredDim] = child.parent.boundBox[nonAlteredDim];

      this.negotiateDimension(child);
    }

    if (preferred) {
      preferred.boundBox[alteredDim] += cumultiveExtraSpaceAmt;
      preferred.boundBox[nonAlteredDim] = preferred.parent.boundBox[nonAlteredDim];
      this.negotiateDimension(preferred);
    }
  }

  computePosition(node) {
    node.children.forEach((child, i, children) => {
      let boundBox = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["determineBoundBox"])(child.boundBox, i, children, child);
      child.boundBox = boundBox;
      this.computePosition(child);
    });
  }

  setHostPosition(node) {
    node.children.forEach(child => {
      LayoutModel.setHostSpatialConfig(child);
      this.setHostPosition(child);
    });
  }

  static setHostSpatialConfig(node) {
    let bb = node.boundBox;
    if (node.model.host && node.model.host.setSpatialConfig) {
      let conf = {
        x: bb.left,
        y: bb.top,
        width: bb.width,
        height: bb.height,
        renderAt: node._id
      };

      node.model.host.setSpatialConfig(conf);
    }
  }

  negotiate() {
    this.negotiateDimension(this.root);
    this.computePosition(this.root);
    return this;
  }

  broadcast() {
    this.setHostPosition(this.root);
    return this;
  }

  tree() {
    return this.root;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LayoutModel);

/***/ }),

/***/ "./layout-definition/tree/Node.js":
/*!****************************************!*\
  !*** ./layout-definition/tree/Node.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./layout-definition/utils/index.js");


class Node {
  constructor(data) {
    this.model = data;
    this.parent = null;
    this.children = [];

    this.boundBox = {
      top: null,
      left: null,
      height: null,
      width: null
    };

    this._id = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNodeId"])();
  }

  addChildren(entries) {
    this.children.push(...entries);
    entries.forEach(e => {
      e.parent = this;
    });
  }

  isRoot() {
    return this.parent === null;
  }

  isLeaf() {
    return !this.children.length;
  }

  getCutType() {
    return this.model.cut;
  }

  isPreferred() {
    return !!this.model.preferred;
  }

  /**
     * function to search a node and update it with the config provided.
     * @param  {Object} nodeconfig
     */
  updateNode(nodeconfig) {
    if (this._id === nodeconfig._id) {
      this.model.cut = nodeconfig.cut;
      this.model.ratioWeight = nodeconfig.ratioWeight;
    } else {
      this.children.forEach(node => {
        if (node._id === nodeconfig._id) {
          node.model.cut = nodeconfig.cut;
          node.model.ratioWeight = nodeconfig.ratioWeight;
          return;
        }
        this.searchNode(node, nodeconfig);
      });
    }
  }

  // Recursive function to search a node
  searchNode(node, nodeconfig) {
    node.children.forEach(node1 => {
      if (node1._id === nodeconfig._id) {
        node1.model.cut = nodeconfig.cut;
        node1.model.ratioWeight = nodeconfig.ratioWeight;
      } else {
        this.searchNode(node1, nodeconfig);
      }
    });
  }

  /**
     * function to delete a node from tree Structure.
     * @param  {String} nodeId - node Id of the Node
     */
  delete(nodeId) {
    this.children.forEach(node => {
      if (node._id === nodeId) {
        let index = this.children.indexOf(node);
        this.model.lanes.splice(index, 1);
      }
      this.deleteSearchNode(node, nodeId);
    });
  }

  // Recursive function to search a node
  deleteSearchNode(node, nodeId) {
    node.children.forEach(node1 => {
      if (node1._id === nodeId) {
        let index = node.children.indexOf(node1);
        node.model.lanes.splice(index, 1);
      } else {
        this.deleteSearchNode(node1, nodeId);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./layout-definition/tree/index.js":
/*!*****************************************!*\
  !*** ./layout-definition/tree/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./layout-definition/tree/Node.js");


/* harmony default export */ __webpack_exports__["default"] = (_Node__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./layout-definition/utils/dummy-component/dummy-component.js":
/*!********************************************************************!*\
  !*** ./layout-definition/utils/dummy-component/dummy-component.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable require-jsdoc */

/* eslint no-undef: "off" */

class DummyComponent {
  constructor(seed, dimensions) {
    this.seed = seed;
    this.dimensions = dimensions;
    this.position = null;
    this.renderAt = null;
  }

  getLogicalSpace() {
    return {
      width: this.dimensions.width - 2 * this.seed,
      height: this.dimensions.height - 2 * this.seed
    };
  }

  setSpatialConfig(conf) {
    this.position = {
      top: conf.y,
      left: conf.x
    };
    this.newDimensions = {
      width: conf.width,
      height: conf.height
    };
    this.renderAt = conf.renderAt;
  }

  draw() {
    let doc = document.getElementById(this.renderAt);
    let div = document.createElement('div');
    let width = Math.max(this.dimensions.width, this.newDimensions.width);
    let height = Math.max(this.dimensions.height, this.newDimensions.height);

    div.style.backgroundColor = '#fab1a0'; // getColor();

    div.style.width = `${width - this.seed * 2}px`;
    div.style.height = `${height - this.seed * 2}px`;

    doc.appendChild(div);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DummyComponent);

/***/ }),

/***/ "./layout-definition/utils/dummy-component/index.js":
/*!**********************************************************!*\
  !*** ./layout-definition/utils/dummy-component/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy-component */ "./layout-definition/utils/dummy-component/dummy-component.js");


/* harmony default export */ __webpack_exports__["default"] = (_dummy_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./layout-definition/utils/index.js":
/*!******************************************!*\
  !*** ./layout-definition/utils/index.js ***!
  \******************************************/
/*! exports provided: DummyComponent, isEqual, getNodeId, yExtraSpace, xExtraSpace, determineBoundBox, getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy-component */ "./layout-definition/utils/dummy-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _dummy_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./layout-definition/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["yExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["xExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineBoundBox", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["determineBoundBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getColor"]; });






/***/ }),

/***/ "./layout-definition/utils/utils.js":
/*!******************************************!*\
  !*** ./layout-definition/utils/utils.js ***!
  \******************************************/
/*! exports provided: isEqual, getNodeId, yExtraSpace, xExtraSpace, determineBoundBox, smallestExtraWidthVertically, smallestExtraHeightHorizontally */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return getNodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yExtraSpace", function() { return yExtraSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xExtraSpace", function() { return xExtraSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineBoundBox", function() { return determineBoundBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallestExtraWidthVertically", function() { return smallestExtraWidthVertically; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallestExtraHeightHorizontally", function() { return smallestExtraHeightHorizontally; });

/**
 * Compares two strings in lowercase
 *
 * @export
 * @param {string} value the value to be compared
 * @param {string} compareTo whom the value would be compared
 * @return {boolean} true if values are equal
 */
function isEqual(value, compareTo) {
  if (typeof value !== 'string' || typeof compareTo !== 'string') {
    throw new TypeError('value and compareTo must be string');
  }
  return value.toLowerCase() === compareTo.toLowerCase();
}

const getNodeId = (() => {
  let _uid = 0;
  return () => `node-${++_uid}`;
})();

function yExtraSpace(node) {
  let smallestHeight = 0;
  if (node.getCutType() === 'v') {
    smallestHeight = smallestExtraHeightHorizontally(node); // eslint-disable-line no-use-before-define
  } else if (node.getCutType() === 'h') {
    node.children.forEach(child => {
      smallestHeight += yExtraSpace(child);
    });
  } else if (node.model.host && node.model.host.getLogicalSpace) {
    let containerHeight = node.boundBox.height;
    let hostHeight = node.model.host.getLogicalSpace().height;

    smallestHeight = containerHeight - hostHeight;
    if (smallestHeight < 0) {
      smallestHeight = 0;
    }
  } else {
    smallestHeight = 0;
  }
  return smallestHeight;
}

function smallestExtraHeightHorizontally(node) {
  let smallestHeight = Number.MAX_SAFE_INTEGER;
  node.children.forEach(child => {
    let h = yExtraSpace(child);
    if (h < smallestHeight) {
      smallestHeight = h;
    }
  });
  return smallestHeight;
}

function xExtraSpace(node) {
  let smallestWidth = 0;
  if (node.getCutType() === 'h') {
    smallestWidth = smallestExtraWidthVertically(node); // eslint-disable-line no-use-before-define
  } else if (node.getCutType() === 'v') {
    node.children.forEach(child => {
      smallestWidth += xExtraSpace(child);
    });
  } else if (node.model.host && node.model.host.getLogicalSpace) {
    let containerWidth = node.boundBox.width;
    let hostWidth = node.model.host.getLogicalSpace().width;
    smallestWidth = containerWidth - hostWidth;
    if (smallestWidth < 0) {
      smallestWidth = 0;
    }
  } else {
    smallestWidth = 0;
  }
  return smallestWidth;
}

function smallestExtraWidthVertically(node) {
  let smallestWidth = Number.MAX_SAFE_INTEGER;
  node.children.forEach(child => {
    let w = xExtraSpace(child);
    if (w < smallestWidth) {
      smallestWidth = w;
    }
  });
  return smallestWidth;
}

function determineBoundBox(bb, i, arr, instance) {
  if (i) {
    // if not first sibling, take boundbox from previous sibling
    let lastSibling = arr[i - 1];
    return {
      width: bb.width,
      height: bb.height,

      top: instance._parentCut === 'h' ? lastSibling.boundBox.top + lastSibling.boundBox.height : lastSibling.boundBox.top,

      left: instance._parentCut === 'h' ? lastSibling.boundBox.left : lastSibling.boundBox.left + lastSibling.boundBox.width
    };
  }
  // if first sibling, take boundbox from parent
  return {
    width: bb.width,
    height: bb.height,
    top: instance.parent.boundBox.top,
    left: instance.parent.boundBox.left
  };
}



/***/ }),

/***/ "./layout/layout-def.js":
/*!******************************!*\
  !*** ./layout/layout-def.js ***!
  \******************************/
/*! exports provided: LayoutDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDef", function() { return LayoutDef; });
class LayoutDef {
  constructor(layoutDefinition) {
    this.componentMap = new Map();
    this.layoutDefinition = layoutDefinition;
  }

  addComponent(componentId, component) {
    this.componentMap.set(componentId, component);
  }

  addMultipleComponent(componentArray) {
    componentArray.forEach(comp => {
      this.addComponent(comp.id, comp.component);
    });
  }

  getSanitizedDefinition() {
    this.sanitizeConfig(this.layoutDefinition);
    return this.layoutDefinition;
  }

  sanitizeConfig(hostObj) {
    if (hostObj.lanes && hostObj.lanes.length) {
      hostObj.lanes.forEach(childHost => this.sanitizeConfig(childHost));
    }
    if (hostObj.host != null && typeof hostObj.host === 'string') {
      if (this.componentMap.get(hostObj.host) !== undefined) {
        hostObj.host = this.componentMap.get(hostObj.host);
      }
    }
  }

  getComponentMap() {
    return this.componentMap;
  }
}

/***/ }),

/***/ "./layout/layout.js":
/*!**************************!*\
  !*** ./layout/layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout-definition */ "./layout-definition/index.js");
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");
/* harmony import */ var _highlighter_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlighter/highlighter */ "./highlighter/highlighter.js");
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/controller */ "./controller/controller.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _layout_def__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-def */ "./layout/layout-def.js");









class Layout {
  constructor(conf) {
    this.renderAt = conf.renderAt;
    this.width = conf.width || _constants_defaults__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_WIDTH"];
    this.height = conf.height || _constants_defaults__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_HEIGHT"];
    this.skeletonType = conf.skeletonType || 'html';
    this.layoutDefinition = conf.layoutDefinition;
    this.layoutDef = new _layout_def__WEBPACK_IMPORTED_MODULE_5__["LayoutDef"](conf.layoutDefinition);
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isDOMElement(this.renderAt)) {
      this.renderAt._layout = this;
    } else {
      document.getElementById(this.renderAt)._layout = this;
    }

    this.highlighter = new _highlighter_highlighter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  compute() {
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeDiv(_constants_defaults__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_NAME"]);
    this.layoutDefinition = this.layoutDef.getSanitizedDefinition();
    this._layout = new _layout_definition__WEBPACK_IMPORTED_MODULE_0__["LayoutModel"]({
      width: this.width,
      height: this.height
    }, this.layoutDefinition);
    this.tree = this._layout.negotiate().tree();
    this._layout.broadcast();
    this.con = new _controller_controller__WEBPACK_IMPORTED_MODULE_3__["Controller"](this.tree, this.skeletonType, this.renderAt);
    this.con.render();
  }

  highlight(nodeId, highlightText) {
    let instance = document.getElementById(nodeId);
    if (instance) {
      this.highlighter.highlight(instance, highlightText);
    }
  }

  unHighlight() {
    this.highlighter.unHighlight();
  }

  addComponent(componentId, component) {
    this.layoutDef.addComponent(componentId, component);
  }

  addMultipleComponent(componentArray) {
    this.layoutDef.addMultipleComponent(componentArray);
  }

  resetNode(node) {
    if (this.con) {
      this.con.resetNode(node);
    }
  }

  /**
   * function to update the node and rerender the layout.
   * @param  {} config - node configuration to change.
   */
  updateNode(config) {
    this.tree.updateNode(config);
    this.layoutDefinition = this.tree.model;
    this.compute();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./models/data-point.js":
/*!******************************!*\
  !*** ./models/data-point.js ***!
  \******************************/
/*! exports provided: DataPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPoint", function() { return DataPoint; });

class DataPoint {
  constructor(node) {
    this.top = node.boundBox.top;
    this.left = node.boundBox.left;
    this.width = node.boundBox.width;
    this.height = node.boundBox.height;
    this._id = node._id;
    this.parent = node.parent;
  }
}

/***/ }),

/***/ "./renderers/html-renderer.js":
/*!************************************!*\
  !*** ./renderers/html-renderer.js ***!
  \************************************/
/*! exports provided: HTMLRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLRenderer", function() { return HTMLRenderer; });
/* harmony import */ var _data_adapters_html_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-adapters/html-data */ "./data-adapters/html-data.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./renderers/renderer.js");
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");




class HTMLRenderer extends _renderer__WEBPACK_IMPORTED_MODULE_2__["Renderer"] {
  constructor(data) {
    super();
    this.data = data;
    this.coordinates = new _data_adapters_html_data__WEBPACK_IMPORTED_MODULE_0__["HTMLDataAdapter"](this.data).getCoordinates();
  }

  createhtml(id) {
    let mainDiv = document.getElementById(id);
    super.initRenderer(mainDiv, this.data); // Initialise node with layout id
    let parentDiv = this.createAndCustomiseParent();
    this.coordinates.forEach(node => {
      parentDiv.appendChild(this.createAndPositionDiv(node));
    });
    mainDiv.appendChild(parentDiv);
  }

  createAndPositionDiv(node) {
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = node.left + 'px';
    div.style.top = node.top + 'px';
    div.style.height = node.height + 'px';
    div.style.width = node.width + 'px';
    // div.style.border = '1px dotted red'
    // Utils.hoverHandler(div)
    div.id = node._id;
    return div;
  }

  createAndCustomiseParent() {
    let container = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].findContainer(this.coordinates);
    let parentDiv = this.createAndPositionDiv(container);
    parentDiv.id = _constants_defaults__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_NAME"];
    parentDiv.style.position = 'relative';
    return parentDiv;
  }
}

/***/ }),

/***/ "./renderers/renderer.js":
/*!*******************************!*\
  !*** ./renderers/renderer.js ***!
  \*******************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");
/* eslint no-useless-constructor: "off" */


class Renderer {
  constructor() {}

  initRenderer(node, tree) {
    node.className = _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["LAYOUT_ID"];
    node.__logicalTree = tree;
  }
}

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");
/* eslint no-undef: "off" */


class Utils {
  static onHover(event) {
    this.highLightNode(event.target, _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BORDER_COLOR"], _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BORDER_WIDTH"]);
  }

  static offHover(event) {
    this.unHighLightNode(event.target);
  }

  static htmlHover(node, color, width) {
    color = color !== undefined ? color : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BORDER_COLOR"];
    width = width !== undefined ? width : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BORDER_WIDTH"];
    node.style.outline = `${color} solid ${width}`;
  }

  static htmlUnHover(node) {
    node.style.outline = '';
  }

  static highLightNode(node, color, width) {
    let renderer = global.__renderer;

    switch (renderer) {
      case 'html':
        this.htmlHover(node, color, width);
        break;
    }
  }

  static unHighLightNode(node) {
    let renderer = global.__renderer;
    switch (renderer) {
      case 'html':
        this.htmlUnHover(node);
        break;
    }
  }

  static hoverHandler(container) {
    container.addEventListener('mouseover', this.onHover.bind(this));
    container.addEventListener('mouseleave', this.offHover.bind(this));
  }

  static isDOMElement(element) {
    return element instanceof Element;
  }

  static getID(element) {
    return element.id;
  }

  static findContainer(data) {
    return data.filter(coordinate => {
      return coordinate.parent == null;
    })[0];
  }
  /**
   * static method to remove the div
   * @param  {} divId - div ID to be removed.
   */
  static removeDiv(divId) {
    if (document.getElementById(divId) !== null) {
      document.getElementById(divId).remove();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** multi ./index ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index */"./index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=layout.js.map