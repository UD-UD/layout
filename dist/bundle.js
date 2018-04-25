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

/***/ "../node_modules/layout-model/dist/layout.js":
/*!***************************************************!*\
  !*** ../node_modules/layout-model/dist/layout.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineBoundBox = exports.xExtraSpace = exports.yExtraSpace = exports.getNodeId = exports.isEqual = exports.DummyComponent = undefined;

var _dummycomponent = __webpack_require__(7);

var _dummycomponent2 = _interopRequireDefault(_dummycomponent);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DummyComponent = _dummycomponent2.default;
exports.isEqual = _utils.isEqual;
exports.getNodeId = _utils.getNodeId;
exports.yExtraSpace = _utils.yExtraSpace;
exports.xExtraSpace = _utils.xExtraSpace;
exports.determineBoundBox = _utils.determineBoundBox;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Layout2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DummyComponent = exports.Layout = undefined;

var _layout = __webpack_require__(1);

var _layout2 = _interopRequireDefault(_layout);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Layout = _layout2.default;
exports.DummyComponent = _utils.DummyComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tree = __webpack_require__(4);

var _tree2 = _interopRequireDefault(_tree);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
    function Layout(measurements, config) {
        _classCallCheck(this, Layout);

        this.measurements = measurements;
        this.config = config;
        this.root = this.createTree(this.config, null);
        this.setBoundBox();
    }

    _createClass(Layout, [{
        key: 'createTree',
        value: function createTree(config, parent) {
            var node = new _tree2.default(config);
            if (parent) {
                node._parentCut = parent.getCutType();
                parent.addChildren([node]);
            } else {
                this.root = node;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = config.lanes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var lane = _step.value;

                    this.createTree(lane, node);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this.root;
        }
    }, {
        key: 'allocateBoundingBox',
        value: function allocateBoundingBox(node) {
            var _this = this;

            var totalWeight = node.children.map(function (child) {
                return child.model.ratioWeight;
            }).reduce(function (carry, val) {
                return carry + val;
            }, 0);

            node.children.forEach(function (child, i, children) {
                var lastSibling = children[i - 1],
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
                _this.allocateBoundingBox(child);
            });
        }
    }, {
        key: 'setBoundBox',
        value: function setBoundBox() {
            this.root.boundBox = {
                top: 0,
                left: 0,
                width: this.measurements.width,
                height: this.measurements.height
            };
            this.allocateBoundingBox(this.root);
        }
    }, {
        key: 'negotiateDimension',
        value: function negotiateDimension(node) {
            var preferred = void 0,
                cumultiveExtraSpaceAmt = 0,
                alteredDim = void 0,
                nonAlteredDim = void 0,
                childrenLength = node.children.length;

            for (var index = 0; index < childrenLength; index++) {
                var fn = void 0,
                    extraSpaceAmt = void 0,
                    child = node.children[index];

                if (child._parentCut === 'h') {
                    fn = _utils.yExtraSpace;
                    alteredDim = 'height';
                    nonAlteredDim = 'width';
                } else {
                    fn = _utils.xExtraSpace;
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
    }, {
        key: 'computePosition',
        value: function computePosition(node) {
            var _this2 = this;

            node.children.forEach(function (child, i, children) {
                var boundBox = (0, _utils.determineBoundBox)(child.boundBox, i, children, child);
                child.boundBox = boundBox;
                _this2.computePosition(child);
            });
        }
    }, {
        key: 'setHostPosition',
        value: function setHostPosition(node) {
            var _this3 = this;

            node.children.forEach(function (child) {
                Layout.setHostSpatialConfig(child);
                _this3.setHostPosition(child);
            });
        }
    }, {
        key: 'negotiate',
        value: function negotiate() {
            this.negotiateDimension(this.root);
            this.computePosition(this.root);
            this.setHostPosition(this.root);
            return this;
        }
    }, {
        key: 'tree',
        value: function tree() {
            return this.root;
        }
    }], [{
        key: 'setHostSpatialConfig',
        value: function setHostSpatialConfig(node) {
            var boundBox = node.boundBox;
            if (node.model.host && node.model.host.setSpatialConfig) {
                node.model.host.setSpatialConfig(boundBox.left, boundBox.top, boundBox.width, boundBox.height);
            }
        }
    }]);

    return Layout;
}();

exports.default = Layout;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _node2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(data) {
        _classCallCheck(this, Node);

        this.model = data;
        this.parent = null;
        this.children = [];

        this.boundBox = {
            top: null,
            left: null,
            height: null,
            width: null
        };

        this._id = (0, _utils.getNodeId)();
    }

    _createClass(Node, [{
        key: 'addChildren',
        value: function addChildren(entries) {
            var _children,
                _this = this;

            (_children = this.children).push.apply(_children, _toConsumableArray(entries));
            entries.forEach(function (e) {
                e.parent = _this;
            });
        }
    }, {
        key: 'isRoot',
        value: function isRoot() {
            return this.parent === null;
        }
    }, {
        key: 'isLeaf',
        value: function isLeaf() {
            return !this.children.length;
        }
    }, {
        key: 'getCutType',
        value: function getCutType() {
            return this.model.cut;
        }
    }, {
        key: 'isPreferred',
        value: function isPreferred() {
            return !!this.model.preferred;
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable require-jsdoc */
var DummyComponent = function () {
    function DummyComponent(seed, dimensions) {
        _classCallCheck(this, DummyComponent);

        this.seed = seed;
        this.dimensions = dimensions;
        this.position = null;
    }

    _createClass(DummyComponent, [{
        key: "getLogicalSpace",
        value: function getLogicalSpace() {
            return {
                width: this.dimensions.width - 1 * this.seed,
                height: this.dimensions.height - 1 * this.seed
            };
        }
    }, {
        key: "setSpatialConfig",
        value: function setSpatialConfig(x, y, width, height) {
            this.position = { top: y, left: x };
            this.dimensions = { width: width, height: height };
        }
    }]);

    return DummyComponent;
}();

exports.default = DummyComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DummyComponent = __webpack_require__(6);

var _DummyComponent2 = _interopRequireDefault(_DummyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DummyComponent2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var getNodeId = function () {
    var _uid = 0;
    return function () {
        ++_uid;
        return 'node-' + _uid;
    };
}();

function yExtraSpace(node) {
    var smallestHeight = 0;
    if (node.getCutType() === 'v') {
        smallestHeight = smallestExtraHeightHorizontally(node);
    } else if (node.getCutType() === 'h') {
        node.children.forEach(function (child) {
            smallestHeight += yExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        var containerHeight = node.boundBox.height,
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
    var smallestHeight = Number.MAX_SAFE_INTEGER;
    node.children.forEach(function (child) {
        var h = yExtraSpace(child);
        if (h < smallestHeight) {
            smallestHeight = h;
        }
    });
    return smallestHeight;
}

function xExtraSpace(node) {
    var smallestWidth = 0;
    if (node.getCutType() === 'h') {
        smallestWidth = smallestExtraWidthVertically(node);
    } else if (node.getCutType() === 'v') {
        node.children.forEach(function (child) {
            smallestWidth += xExtraSpace(child);
        });
    } else if (node.model.host && node.model.host.getLogicalSpace) {
        var containerWidth = node.boundBox.width,
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
    var smallestWidth = Number.MAX_SAFE_INTEGER;
    node.children.forEach(function (child) {
        var w = xExtraSpace(child);
        if (w < smallestWidth) {
            smallestWidth = w;
        }
    });
    return smallestWidth;
}

function determineBoundBox(bb, i, arr, instance) {
    if (i) {
        // if not first sibling, take boundbox from previous sibling
        var lastSibling = arr[i - 1];
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

exports.isEqual = isEqual;
exports.getNodeId = getNodeId;
exports.yExtraSpace = yExtraSpace;
exports.xExtraSpace = xExtraSpace;
exports.determineBoundBox = determineBoundBox;

/***/ })
/******/ ]);
});
//# sourceMappingURL=layout.js.map

/***/ }),

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DEFAULT_BORDER_COLOR = 'cyan';
const DEFAULT_BORDER_WIDTH = '2px';

/* harmony default export */ __webpack_exports__["default"] = ({ DEFAULT_BORDER_COLOR, DEFAULT_BORDER_WIDTH });

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
/* harmony import */ var _renderers_svg_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderers/svg-renderer */ "./renderers/svg-renderer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");




class Controller {
  constructor(data, renderer, container) {
    this.data = data;
    this.renderer = renderer;
    global.__renderer = renderer; // TODO change global into diff place
    this.renderer_id = !_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isDOMElement(container) ? container : _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getID(container);
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

  customiseNode(node, borderColor, borderWidth) {
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isDOMElement(node)) {
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].highLightNode(node, borderColor, borderWidth);
    } else {
      _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].highLightNode(document.getElementById(node), borderColor, borderWidth);
    }
  }

  resetNode(container) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].unHighLightNode(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isDOMElement(container) ? container : document.getElementById(container));
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout-model */ "../node_modules/layout-model/dist/layout.js");
/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(layout_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller */ "./controller/controller.js");
/* eslint no-undef: "off" */



const width = 600;

const height = 600;
const component1 = new layout_model__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"](10, {
  width: width / 2,
  height: width / 2
});

const component2 = new layout_model__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"](10, {
  width: width / 2,
  height: width / 2
});

const component3 = new layout_model__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"](10, {
  width: width / 2,
  height: width / 2
});

const component4 = new layout_model__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"](10, {
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

let layout = new layout_model__WEBPACK_IMPORTED_MODULE_0__["Layout"]({
  width, height
}, config);

var root = layout.negotiate().tree();

let con = new _controller_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"](root, 'html', 'board');
con.render();

global.con = con;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

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
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].hoverHandler(div);
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
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].hoverHandler(rect);
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/defaults */ "./constants/defaults.js");
/* eslint no-undef: "off" */


class Utils {
  static onHover(event) {
    console.log('Hover', JSON.stringify(_constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"]));
    this.highLightNode(event.target, _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_COLOR, _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_WIDTH);
  }

  static offHover(event) {
    this.unHighLightNode(event.target);
  }

  static htmlHover(node, color, width) {
    color = color !== undefined ? color : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_COLOR;
    width = width !== undefined ? width : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_WIDTH;
    node.style.outline = `${color} solid ${width}`;
  }

  static htmlUnHover(node) {
    node.style.outline = '';
  }

  static SVGHover(node, color, width) {
    console.log('Hover');
    color = color !== undefined ? color : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_COLOR;
    width = width !== undefined ? width : _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BORDER_WIDTH;
    node.style.stroke = `${color}`;
    node.style.strokeWidth = `${width}`;
  }

  static SVGUnhover(node) {
    node.style.stroke = '';
    node.style.strokeWidth = '';
  }

  static highLightNode(node, color, width) {
    let renderer = global.__renderer;

    switch (renderer) {
      case 'html':
        this.htmlHover(node, color, width);
        break;
      case 'svg':
        this.SVGHover(node, color, width);
        break;
    }
  }

  static unHighLightNode(node) {
    let renderer = global.__renderer;
    switch (renderer) {
      case 'html':
        this.htmlUnHover(node);
        break;
      case 'svg':
        this.SVGUnhover(node);
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
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

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