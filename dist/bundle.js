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

/***/ "../layout/src/layout/layout.js":
/*!**************************************!*\
  !*** ../layout/src/layout/layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree */ "../layout/src/tree/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../layout/src/utils/index.js");



class Layout {
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
            let lastSibling = children[i - 1],
                ratio = child.model.ratioWeight / totalWeight;

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
        let preferred,
            cumultiveExtraSpaceAmt = 0,
            alteredDim,
            nonAlteredDim,
            childrenLength = node.children.length;

        for (let index = 0; index < childrenLength; index++) {
            let fn,
                extraSpaceAmt,
                child = node.children[index];

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

                continue;
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
            Layout.setHostSpatialConfig(child);
            this.setHostPosition(child);
        });
    }

    static setHostSpatialConfig(node) {
        let boundBox = node.boundBox;
        if (node.model.host && node.model.host.setSpatialConfig) {
            node.model.host.setSpatialConfig(boundBox.left, boundBox.top, boundBox.width, boundBox.height);
        }
    }

    negotiate() {
        this.negotiateDimension(this.root);
        this.computePosition(this.root);
        this.setHostPosition(this.root);
        return this;
    }

    tree() {
        return this.root;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "../layout/src/tree/index.js":
/*!***********************************!*\
  !*** ../layout/src/tree/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "../layout/src/tree/node.js");


/* harmony default export */ __webpack_exports__["default"] = (_node__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../layout/src/tree/node.js":
/*!**********************************!*\
  !*** ../layout/src/tree/node.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "../layout/src/utils/index.js");


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

}

/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "../layout/src/utils/DummyComponent/DummyComponent.js":
/*!************************************************************!*\
  !*** ../layout/src/utils/DummyComponent/DummyComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable require-jsdoc */
class DummyComponent {
    constructor(seed, dimensions) {
        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
    }

    getLogicalSpace() {
        return {
            width: this.dimensions.width - 1 * this.seed,
            height: this.dimensions.height - 1 * this.seed
        };
    }

    setSpatialConfig(x, y, width, height) {
        this.position = { top: y, left: x };
        this.dimensions = { width, height };
    }
}

/* harmony default export */ __webpack_exports__["default"] = (DummyComponent);

/***/ }),

/***/ "../layout/src/utils/DummyComponent/index.js":
/*!***************************************************!*\
  !*** ../layout/src/utils/DummyComponent/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DummyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DummyComponent */ "../layout/src/utils/DummyComponent/DummyComponent.js");


/* harmony default export */ __webpack_exports__["default"] = (_DummyComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../layout/src/utils/dummycomponent/DummyComponent.js":
/*!************************************************************!*\
  !*** ../layout/src/utils/dummycomponent/DummyComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable require-jsdoc */
class DummyComponent {
    constructor(seed, dimensions) {
        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
    }

    getLogicalSpace() {
        return {
            width: this.dimensions.width - 1 * this.seed,
            height: this.dimensions.height - 1 * this.seed
        };
    }

    setSpatialConfig(x, y, width, height) {
        this.position = { top: y, left: x };
        this.dimensions = { width, height };
    }
}

/* harmony default export */ __webpack_exports__["default"] = (DummyComponent);

/***/ }),

/***/ "../layout/src/utils/dummycomponent/index.js":
/*!***************************************************!*\
  !*** ../layout/src/utils/dummycomponent/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DummyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DummyComponent */ "../layout/src/utils/dummycomponent/DummyComponent.js");


/* harmony default export */ __webpack_exports__["default"] = (_DummyComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../layout/src/utils/index.js":
/*!************************************!*\
  !*** ../layout/src/utils/index.js ***!
  \************************************/
/*! exports provided: DummyComponent, isEqual, getNodeId, yExtraSpace, xExtraSpace, determineBoundBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummycomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummycomponent */ "../layout/src/utils/dummycomponent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _dummycomponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../layout/src/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["yExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["xExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineBoundBox", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["determineBoundBox"]; });






/***/ }),

/***/ "../layout/src/utils/utils.js":
/*!************************************!*\
  !*** ../layout/src/utils/utils.js ***!
  \************************************/
/*! exports provided: isEqual, getNodeId, yExtraSpace, xExtraSpace, determineBoundBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return getNodeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yExtraSpace", function() { return yExtraSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xExtraSpace", function() { return xExtraSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineBoundBox", function() { return determineBoundBox; });
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

const getNodeId = function () {
    let _uid = 0;
    return function () {
        ++_uid;
        return `node-${_uid}`;
    };
}();

function yExtraSpace(node) {
    let smallestHeight = 0;
    if (node.getCutType() === 'v') {
        smallestHeight = smallestExtraHeightHorizontally(node);
    } else if (node.getCutType() === 'h') {
        node.children.forEach(child => {
            smallestHeight += yExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        let containerHeight = node.boundBox.height,
            hostHeight = node.model.host.getLogicalSpace().height;

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
        smallestWidth = smallestExtraWidthVertically(node);
    } else if (node.getCutType() === 'v') {
        node.children.forEach(child => {
            smallestWidth += xExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        let containerWidth = node.boundBox.width,
            hostWidth = node.model.host.getLogicalSpace().width;
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

/***/ "./controller/controller.js":
/*!**********************************!*\
  !*** ./controller/controller.js ***!
  \**********************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _renderers_html_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/html-renderer */ "./renderers/html-renderer.js");
/* harmony import */ var _renderers_svg_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderers/svg-renderer */ "./renderers/svg-renderer.js");


class Controller {
  constructor(data, renderer, rendererId) {
    this.data = data;
    this.renderer = renderer;
    this.renderer_id = rendererId;
  }

  render() {
    switch (this.renderer) {
      case 'html':
        this.renderHTML();
        break;
      case 'svg':
        this.renderSVG();
        break;
      case 'canvas':
        this.renderCANVAS();
        break;
    }
  }

  renderHTML() {
    let renderer = new _renderers_html_renderer__WEBPACK_IMPORTED_MODULE_0__["HTMLRenderer"](this.data);
    renderer.createhtml(this.renderer_id);
  }

  renderSVG() {
    let renderer = new _renderers_svg_renderer__WEBPACK_IMPORTED_MODULE_1__["SVGRenderer"](this.data);
    renderer.createhtml(this.renderer_id);
  }
}

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

/***/ "./data-adapters/svg-data.js":
/*!***********************************!*\
  !*** ./data-adapters/svg-data.js ***!
  \***********************************/
/*! exports provided: SVGDataAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGDataAdapter", function() { return SVGDataAdapter; });
/* harmony import */ var _data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-parser */ "./data-adapters/data-parser.js");
/* eslint no-useless-constructor: "off" */


class SVGDataAdapter extends _data_parser__WEBPACK_IMPORTED_MODULE_0__["DataParser"] {
  constructor(data) {
    super(data);
  }

  getCoordinates() {
    return super.defaultDataPointLogic();
  }
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_src_layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/src/layout/layout */ "../layout/src/layout/layout.js");
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller */ "./controller/controller.js");
/* harmony import */ var _layout_src_utils_DummyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/src/utils/DummyComponent */ "../layout/src/utils/DummyComponent/index.js");




const width = 600;

const height = 600;
const component1 = new _layout_src_utils_DummyComponent__WEBPACK_IMPORTED_MODULE_2__["default"](10, {
  width: width / 2,
  height: width / 2
});

const component2 = new _layout_src_utils_DummyComponent__WEBPACK_IMPORTED_MODULE_2__["default"](10, {
  width: width / 2,
  height: width / 2
});

const component3 = new _layout_src_utils_DummyComponent__WEBPACK_IMPORTED_MODULE_2__["default"](10, {
  width: width / 2,
  height: width / 2
});

const component4 = new _layout_src_utils_DummyComponent__WEBPACK_IMPORTED_MODULE_2__["default"](10, {
  width: width / 2,
  height: width / 2
});

const config = {
  host: null,
  cut: 'v',
  ratioWeight: 1,
  lanes: [{
    host: null,
    cut: 'h',
    ratioWeight: 1,
    preferred: true,
    lanes: [{
      host: component1,
      cut: null,
      ratioWeight: 1,
      preferred: true,
      lanes: []
    }, {
      host: component2,
      cut: null,
      ratioWeight: 1,
      lanes: []
    }]
  }, {
    host: null,
    cut: 'h',
    ratioWeight: 1,
    lanes: [{
      host: component3,
      cut: null,
      ratioWeight: 1,
      lanes: []
    }, {
      host: component4,
      cut: null,
      ratioWeight: 1,
      preferred: true,
      lanes: []
    }]
  }]
};

let layout = new _layout_src_layout_layout__WEBPACK_IMPORTED_MODULE_0__["default"]({
  width, height
}, config);

var root = layout.negotiate().tree();

let con = new _controller_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"](root, 'html', 'board');
con.render();

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



class HTMLRenderer {
  constructor(data) {
    this.data = data;
    this.coordinates = new _data_adapters_html_data__WEBPACK_IMPORTED_MODULE_0__["HTMLDataAdapter"](this.data).getCoordinates();
  }

  createhtml(id) {
    let mainDiv = document.getElementById(id);
    this.coordinates.forEach(node => {
      mainDiv.appendChild(this.createAndPositionDiv(node));
    });
  }

  createAndPositionDiv(node) {
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = node.left + 'px';
    div.style.top = node.top + 'px';
    div.style.height = node.height + 'px';
    div.style.width = node.width + 'px';
    div.style.border = '1px dotted red';
    div.addEventListener('mouseover', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].onHover);
    div.addEventListener('mouseleave', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].offHover);
    div.id = node._id;
    return div;
  }
}

/***/ }),

/***/ "./renderers/svg-renderer.js":
/*!***********************************!*\
  !*** ./renderers/svg-renderer.js ***!
  \***********************************/
/*! exports provided: SVGRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGRenderer", function() { return SVGRenderer; });
/* harmony import */ var _data_adapters_svg_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-adapters/svg-data */ "./data-adapters/svg-data.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");



class SVGRenderer {
  constructor(data) {
    this.data = data;
    this.coordinates = new _data_adapters_svg_data__WEBPACK_IMPORTED_MODULE_0__["SVGDataAdapter"](this.data).getCoordinates();
  }

  createhtml(id) {
    let mainDiv = document.getElementById(id);
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let container = this.findContainer();
    this.setSVGNodeAttributes(svg, {
      'x': container.left,
      'y': container.top,
      'height': container.height,
      'width': container.width,
      'id': container._id
    });
    svg.style.fill = '#e3e3e3';
    svg.style.border = '1px dotted red';
    this.coordinates.forEach(node => {
      if (node.parent !== null) {
        svg.appendChild(this.createAndPositionSVG(node));
      }
    });
    mainDiv.appendChild(svg);
  }

  createAndPositionSVG(node) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    this.setSVGNodeAttributes(rect, {
      'x': node.left,
      'y': node.top,
      'height': node.height,
      'width': node.width,
      'id': node._id
    });
    rect.style.border = '1px dotted red';
    rect.addEventListener('mouseover', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].onSVGHover);
    rect.addEventListener('mouseleave', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].offSVGHover);
    return rect;
  }

  findContainer() {
    return this.coordinates.filter(coordinate => {
      return coordinate.parent == null;
    })[0];
  }

  setSVGNodeAttributes(ele, node) {
    ele.setAttributeNS(null, 'id', node.id);
    ele.setAttributeNS(null, 'x', node.x);
    ele.setAttributeNS(null, 'y', node.y);
    ele.setAttributeNS(null, 'height', node.height);
    ele.setAttributeNS(null, 'width', node.width);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class Utils {
  static onHover(data) {
    console.log('Hover');
    data.target.style.outline = 'cyan solid 1px';
  }

  static offHover(data) {
    data.target.style.outline = '';
  }

  static onSVGHover(data) {
    console.log('Hover');
    data.target.style.stroke = 'cyan';
    data.target.style.strokeWidth = '2px';
  }

  static offSVGHover(data) {
    data.target.style.stroke = '';
    data.target.style.strokeWidth = '';
  }
}

/***/ }),

/***/ 0:
/*!********************!*\
  !*** multi ./main ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main */"./main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map