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

/***/ "./drawing-manager/drawingManager.js":
/*!*******************************************!*\
  !*** ./drawing-manager/drawingManager.js ***!
  \*******************************************/
/*! exports provided: DrawingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony import */ var _renderers_html_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/html-renderer */ "./renderers/html-renderer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");



class DrawingManager {
  constructor(data, renderer, container) {
    this.data = data;
    this.renderer = renderer;
    global.__renderer = renderer; // TODO change global into diff place
    this.renderer_id = !_utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].isDOMElement(container) ? container : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getID(container);
  }

  _drawLayout() {
    switch (this.renderer) {
      case 'html':
        this.renderHTML();
        break;
    }
  }

  _drawComponent(componentData) {
    componentData.children.forEach(node => {
      let componentHolder = document.getElementById(node._id);
      if (node.model && node.model.host) {
        node.model.host.component.mount(componentHolder);
      }
      this._drawComponent(node);
    });
  }

  draw() {
    this._drawLayout();
    this._drawComponent(this.data);
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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: LayoutManager, DummyComponent, LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-component */ "./layout-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _layout_component__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });

/* harmony import */ var _layout_manager_layoutManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-manager/layoutManager */ "./layout-manager/layoutManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutManager", function() { return _layout_manager_layoutManager__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./layout-component/dummy-component.js":
/*!*********************************************!*\
  !*** ./layout-component/dummy-component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layoutComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutComponent */ "./layout-component/layoutComponent.js");
/* eslint-disable require-jsdoc */

/* eslint no-undef: "off" */



class DummyComponent extends _layoutComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(seed, dimensions) {
    super(seed, dimensions);
    this.seed = seed;
  }

  getLogicalSpace() {
    return {
      width: this.boundBox.width - 2 * this.seed,
      height: this.boundBox.height - 2 * this.seed
    };
  }

  setSpatialConfig(conf) {
    this.boundBox.top = conf.y;
    this.boundBox.left = conf.x;

    this.boundBox.newDimensions = {
      width: conf.width,
      height: conf.height
    };
    this.renderAt = conf.renderAt;
  }

  set componentName(name) {
    this._componentName = name;
  }

  get componentName() {
    return this._componentName;
  }

  set chartComponent(componentObj) {
    this._component = componentObj;
  }

  get chartComponent() {
    return this._chartComponent;
  }

  draw() {
    if (!this.component) {
      throw new Error(`Component not set for ${this.componentName}`);
    }
    this.component.mount(document.getElementById(this.renderAt)); // Change the draw method to component draw
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DummyComponent);

/***/ }),

/***/ "./layout-component/index.js":
/*!***********************************!*\
  !*** ./layout-component/index.js ***!
  \***********************************/
/*! exports provided: DummyComponent, LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy-component */ "./layout-component/dummy-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return _dummy_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _layoutComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutComponent */ "./layout-component/layoutComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layoutComponent__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./layout-component/layoutComponent.js":
/*!*********************************************!*\
  !*** ./layout-component/layoutComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutComponent; });
class LayoutComponent {
  constructor(seed, dimensions) {
    this.seed = seed;
    this.boundBox = {};
    this.boundBox.height = dimensions.height;
    this.boundBox.width = dimensions.width;
    this.boundBox.top = null;
    this.boundBox.left = null;
    this.chartComponent = null;
    this.renderAt = null;
    this.target = null;
    this.position = null;
    this.componentName = null;
  }

  getLogicalSpace() {
    throw new Error('getLogicalSpace is not defined');
  }

  setSpatialConfig(conf) {
    throw new Error('setSpatialSpace is not defined');
  }

  draw() {
    throw new Error('draw is not defined');
  }
}

/***/ }),

/***/ "./layout-definition/definition-manager/definitionModel.js":
/*!*****************************************************************!*\
  !*** ./layout-definition/definition-manager/definitionModel.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionModel; });
class DefinitionModel {
  constructor(host, cut, ratioWeight, preferred, lanes) {
    this.host = host || null;
    this.cut = cut | 'h';
    this.ratioWeight = ratioWeight || 1;
    this.preferred = preferred || false;
    this.lanes = lanes || [];
    this._remainingHeight = 0;
    this._remainingWidth = 0;
  }
  // get host () {
  //   return this._host
  // }

  // set host (host) {
  //   this._host = host
  //   return this
  // }
  // get cut () {
  //   return this._cut
  // }

  // set cut (cut) {
  //   this._cut = cut
  //   return this
  // }
  // get ratioWeight () {
  //   return this._ratioWeight
  // }

  // set ratioWeight (ratioWeight) {
  //   this._ratioWeight = ratioWeight
  //   return this
  // }
  // get preferred () {
  //   return this._preferred
  // }

  // set preferred (preferred) {
  //   this._preferred = preferred
  //   return this
  // }
  // get lanes () {
  //   return this._lanes
  // }

  // set lanes (lanes) {
  //   this._lanes = lanes
  //   return this
  // }

  // set _remainingHeight (h) {
  //   this.__remainingHeight = h
  // }

  // get _remainingHeight () {
  //   return this.__remainingHeight
  // }

  // set _remainingWidth (w) {
  //   this.__remainingWidth = w
  // }

  // get _remainingWidth () {
  //   return this.__remainingWidth
  // }
}

/***/ }),

/***/ "./layout-definition/definition-manager/defintionManager.js":
/*!******************************************************************!*\
  !*** ./layout-definition/definition-manager/defintionManager.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionManager; });
/* harmony import */ var _definitionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitionModel */ "./layout-definition/definition-manager/definitionModel.js");


class DefinitionManager {
  constructor(componentMap, totalHeight, totalWidth) {
    this.componentMap = componentMap;
    this.totalHeight = totalHeight;
    this.totalWidth = totalWidth;
  }

  // prepares the targetComponent Map for target Mapping ie. where a component should lie
  _prepareTargetComponentMap() {
    this.targetComponentMap = new Map();
    this.componentMap.forEach((value, key) => {
      if (this.targetComponentMap.has(value.target)) {
        this.targetComponentMap.get(value.target).push(value);
      } else {
        let temp = [];
        temp.push(value);
        this.targetComponentMap.set(value.target, temp);
      }
    });
  }

  // create the config model
  generateConfigModel() {
    this._prepareTargetComponentMap();
    let canvasComponent = this.targetComponentMap.get('canvas');
    let definitionModel = new _definitionModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let tempDefModel = definitionModel;
    definitionModel._remainingHeight = this.totalHeight;
    definitionModel._remainingWidth = this.totalWidth;

    let componentRef = null;

    // insert title
    componentRef = this._getComponent(canvasComponent, 'title');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);

    // insert Subtitle
    componentRef = this._getComponent(canvasComponent, 'subtitle');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);

    // insert color legend
    componentRef = this._getComponent(canvasComponent, 'colorLegend');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);

    // insert shape legend
    componentRef = this._getComponent(canvasComponent, 'shapeLegend');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);

    // insert size legend
    componentRef = this._getComponent(canvasComponent, 'sizeLegend');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);

    // insert chart
    componentRef = this._getComponent(canvasComponent, 'chart');
    tempDefModel = this._placeComponent(tempDefModel, componentRef);
    console.log(tempDefModel);
    return definitionModel;
  }

  _getComponent(canvasComponent, componentName) {
    let comp = canvasComponent.find(component => component.componentName === componentName);
    return comp !== -1 ? comp : null;
  }

  /**
   * @TODO : provide %age support
   * @TODO : provide support for nested placement such as logo in a title
   *
   * @param {DefinitionModel} definitionModel
   * @param {LayoutComponent} component
   */
  _placeComponent(definitionModel, component) {
    if (component == null) {
      return definitionModel;
    }
    let componentDimension = component.getLogicalSpace();
    let componentHeight = componentDimension.height;
    let componentWidth = componentDimension.width;
    let cut = '';
    let componentRatioWidth = 1;
    let leftOvercomponentRationWidth = 1;
    let leftHeight = 0;
    let leftWidth = 0;
    if (component.position === 'top' || component.position === 'bottom') {
      cut = 'h';
      componentRatioWidth = componentHeight / definitionModel._remainingHeight;
      leftHeight = definitionModel._remainingHeight - componentHeight;
      leftWidth = definitionModel._remainingWidth;
    } else {
      cut = 'v';
      componentRatioWidth = componentWidth / definitionModel._remainingWidth;
      leftWidth = definitionModel._remainingHeight - componentWidth;
      leftHeight = definitionModel._remainingHeight;
    }
    leftOvercomponentRationWidth = 1 - componentRatioWidth;

    // update parentModel
    definitionModel.cut = cut;

    let firstLane = new _definitionModel__WEBPACK_IMPORTED_MODULE_0__["default"](component.componentName, null, componentRatioWidth, false, []);
    firstLane._remainingHeight = componentHeight;
    firstLane._remainingWidth = componentWidth;
    let secondLane = new _definitionModel__WEBPACK_IMPORTED_MODULE_0__["default"](null, null, leftOvercomponentRationWidth, true, []);
    secondLane._remainingHeight = leftHeight;
    secondLane._remainingWidth = leftWidth;

    if (component.position === 'top' || component.position === 'left') {
      definitionModel.lanes = [firstLane, secondLane];
    } else {
      definitionModel.lanes = [secondLane, firstLane];
    }
    return secondLane;
  }
}

/***/ }),

/***/ "./layout-definition/definition-manager/index.js":
/*!*******************************************************!*\
  !*** ./layout-definition/definition-manager/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defintionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defintionManager */ "./layout-definition/definition-manager/defintionManager.js");


/* harmony default export */ __webpack_exports__["default"] = (_defintionManager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./layout-definition/index.js":
/*!************************************!*\
  !*** ./layout-definition/index.js ***!
  \************************************/
/*! exports provided: LayoutModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-model */ "./layout-definition/layout-model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModel", function() { return _layout_model__WEBPACK_IMPORTED_MODULE_0__["default"]; });





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

/***/ "./layout-definition/utils/index.js":
/*!******************************************!*\
  !*** ./layout-definition/utils/index.js ***!
  \******************************************/
/*! exports provided: isEqual, getNodeId, yExtraSpace, xExtraSpace, determineBoundBox, getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./layout-definition/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNodeId", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["yExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xExtraSpace", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["xExtraSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineBoundBox", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["determineBoundBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getColor"]; });






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

/***/ "./layout-manager/layout-def.js":
/*!**************************************!*\
  !*** ./layout-manager/layout-def.js ***!
  \**************************************/
/*! exports provided: LayoutDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDef", function() { return LayoutDef; });
class LayoutDef {
  constructor() {
    this.componentMap = new Map();
    this.layoutDefinition = null;
  }

  addComponent(name, component) {
    this.componentMap.set(name, component);
  }

  set layoutDefinition(def) {
    this._layoutDefinition = def;
  }

  get layoutDefinition() {
    return this._layoutDefinition;
  }

  addMultipleComponent(componentArray) {
    componentArray.forEach(comp => {
      this.addComponent(comp.componentName, comp);
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

/***/ "./layout-manager/layoutManager.js":
/*!*****************************************!*\
  !*** ./layout-manager/layoutManager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout-definition */ "./layout-definition/index.js");
/* harmony import */ var _layout_definition_definition_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout-definition/definition-manager */ "./layout-definition/definition-manager/index.js");
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");
/* harmony import */ var _drawing_manager_drawingManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drawing-manager/drawingManager */ "./drawing-manager/drawingManager.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _layout_def__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-def */ "./layout-manager/layout-def.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-component */ "./layout-component/index.js");











class LayoutManager {
  constructor(conf) {
    this.renderAt = conf.renderAt;
    this.width = conf.width || _constants_defaults__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_WIDTH"];
    this.height = conf.height || _constants_defaults__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_HEIGHT"];
    this.skeletonType = conf.skeletonType || 'html';
    this.layoutDefinition = null;
    this.layoutDef = new _layout_def__WEBPACK_IMPORTED_MODULE_5__["LayoutDef"]();
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isDOMElement(this.renderAt)) {
      this.renderAt._layout = this;
    } else {
      document.getElementById(this.renderAt)._layout = this;
    }
  }

  compute() {
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeDiv(_constants_defaults__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_NAME"]);
    this.layoutDefinition = this.calLayOutDef();
    this.layoutDef.layoutDefinition = this.layoutDefinition;
    this.layoutDefinition = this.layoutDef.getSanitizedDefinition();
    this._layout = new _layout_definition__WEBPACK_IMPORTED_MODULE_0__["LayoutModel"]({
      width: this.width,
      height: this.height
    }, this.layoutDefinition);
    this.tree = this._layout.negotiate().tree();
    this._layout.broadcast();
    this.manager = new _drawing_manager_drawingManager__WEBPACK_IMPORTED_MODULE_3__["DrawingManager"](this.tree, this.skeletonType, this.renderAt);

    // this will draw all the components by calling their draw method
    this.manager.draw();
  }

  // this will auto generate the layout definition
  calLayOutDef() {
    let defManager = new _layout_definition_definition_manager__WEBPACK_IMPORTED_MODULE_1__["default"](this.layoutDef.getComponentMap(), this.height, this.width);
    let genLayoutdef = defManager.generateConfigModel();
    return genLayoutdef;
  }
  addComponent(component) {
    this.layoutDef.addComponent(component);
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

  /**
   * This method will be private and only be used to create
   * layout components for default chart components such as title,legend etc
   * @param {Array<{component,name}>} rawComponents : List of Component to be added
   */
  _createLayoutComponents(rawComponentsContainer) {
    let layoutComponents = [];
    // create dummy components and add them
    rawComponentsContainer.forEach(container => {
      let dummy = new _layout_component__WEBPACK_IMPORTED_MODULE_6__["DummyComponent"](0, container.component.getLogicalSpace());
      dummy.component = container.component;
      dummy.componentName = container.name;
      dummy.target = 'canvas';
      dummy.position = container.component.position;
      layoutComponents.push(dummy);
    });
    this.registerComponents(layoutComponents);
  }

  /**
  * This function takes the LayoutComponents and Register them in component store
  * @param {Array<LayoutComponent>} layoutComponents
  */
  registerComponents(layoutComponents) {
    this.addMultipleComponent(layoutComponents);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LayoutManager);

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