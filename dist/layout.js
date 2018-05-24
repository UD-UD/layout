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

/***/ "../../layout-model/dist/layout.js":
/*!*******************************!*\
  !*** ..-model/dist/layout.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId])
                    /******/return installedModules[moduleId].exports;
                /******/
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // identity function for calling harmony imports with the correct context
            /******/__webpack_require__.i = function (value) {
                return value;
            };
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 2);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getColor = exports.determineBoundBox = exports.xExtraSpace = exports.yExtraSpace = exports.getNodeId = exports.isEqual = exports.DummyComponent = undefined;

            var _dummyComponent = __webpack_require__(7);

            var _dummyComponent2 = _interopRequireDefault(_dummyComponent);

            var _utils = __webpack_require__(8);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.DummyComponent = _dummyComponent2.default;
            exports.isEqual = _utils.isEqual;
            exports.getNodeId = _utils.getNodeId;
            exports.yExtraSpace = _utils.yExtraSpace;
            exports.xExtraSpace = _utils.xExtraSpace;
            exports.determineBoundBox = _utils.determineBoundBox;
            exports.getColor = _utils.getColor;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _layoutModel = __webpack_require__(3);

            var _layoutModel2 = _interopRequireDefault(_layoutModel);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.default = _layoutModel2.default;

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DummyComponent = exports.LayoutModel = undefined;

            var _layoutModel = __webpack_require__(1);

            var _layoutModel2 = _interopRequireDefault(_layoutModel);

            var _utils = __webpack_require__(0);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.LayoutModel = _layoutModel2.default;
            exports.DummyComponent = _utils.DummyComponent;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _tree = __webpack_require__(5);

            var _tree2 = _interopRequireDefault(_tree);

            var _utils = __webpack_require__(0);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var LayoutModel = function () {
                function LayoutModel(measurements, config) {
                    _classCallCheck(this, LayoutModel);

                    this.measurements = measurements;
                    this.config = config;
                    this.root = this.createTree(this.config, null);
                    this.setBoundBox();
                }

                _createClass(LayoutModel, [{
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
                            LayoutModel.setHostSpatialConfig(child);
                            _this3.setHostPosition(child);
                        });
                    }
                }, {
                    key: 'negotiate',
                    value: function negotiate() {
                        this.negotiateDimension(this.root);
                        this.computePosition(this.root);
                        return this;
                    }
                }, {
                    key: 'broadcast',
                    value: function broadcast() {
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
                        var bb = node.boundBox;
                        if (node.model.host && node.model.host.setSpatialConfig) {
                            var conf = {
                                x: bb.left,
                                y: bb.top,
                                width: bb.width,
                                height: bb.height,
                                renderAt: node._id
                            };

                            node.model.host.setSpatialConfig(conf);
                        }
                    }
                }]);

                return LayoutModel;
            }();

            exports.default = LayoutModel;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _utils = __webpack_require__(0);

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

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

                    this.model._id = this._id;
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

                    /**
                     * function to search a node and update it with the config provided.
                     * @param  {Object} nodeconfig - configurations of the node to be updated.
                     */

                }, {
                    key: 'updateNode',
                    value: function updateNode(nodeconfig) {
                        var _this2 = this;

                        if (this._id === nodeconfig._id) {
                            this.model.cut = nodeconfig.cut;
                            this.model.ratioWeight = nodeconfig.ratioWeight;
                        } else {
                            this.model.lanes.forEach(function (node) {
                                if (node._id === nodeconfig._id) {
                                    node.cut = nodeconfig.cut;
                                    node.ratioWeight = nodeconfig.ratioWeight;
                                }
                                _this2.searchNode(node, nodeconfig);
                            });
                        }
                    }

                    // Recursive function to search a node for updating a node.

                }, {
                    key: 'searchNode',
                    value: function searchNode(node, nodeconfig) {
                        var _this3 = this;

                        node.lanes.forEach(function (node1) {
                            if (node1._id === nodeconfig._id) {
                                node1.cut = nodeconfig.cut;
                                node1.ratioWeight = nodeconfig.ratioWeight;
                            } else {
                                _this3.searchNode(node1, nodeconfig);
                            }
                        });
                    }

                    /**
                     * function to delete a node from tree Structure.
                     * @param  {String} nodeId - node Id of the Node
                     */

                }, {
                    key: 'delete',
                    value: function _delete(nodeId) {
                        var _this4 = this;

                        this.model.lanes.forEach(function (node) {
                            if (node._id === nodeId) {
                                // let index = this.children.indexOf(node);
                                var index = _this4.model.lanes.indexOf(node);
                                _this4.model.lanes.splice(index, 1);
                            }
                            _this4.deleteSearchNode(node, nodeId);
                        });
                    }

                    // Recursive function to search a node for deleting a node

                }, {
                    key: 'deleteSearchNode',
                    value: function deleteSearchNode(node, nodeId) {
                        var _this5 = this;

                        node.lanes.forEach(function (node1) {
                            if (node1._id === nodeId) {
                                // let index = node.children.indexOf(node1);
                                var index = node.lanes.indexOf(node1);
                                node.lanes.splice(index, 1);
                            } else {
                                _this5.deleteSearchNode(node1, nodeId);
                            }
                        });
                    }

                    /**
                     * function to add nodes to the tree.
                     * @param  {} nodeId - Node ID where to add the node.
                     * @param  {} nodeArray - New Node Configuration array.
                     */

                }, {
                    key: 'addNode',
                    value: function addNode(nodeId, nodeArray) {
                        var _this6 = this;

                        if (this._id === nodeId) {
                            this.host = null;
                            nodeArray.forEach(function (tempNode) {
                                _this6.model.lanes.push(tempNode);
                            });
                            // this.model.lanes.push(nodeObj);
                        } else {
                            this.model.lanes.forEach(function (node) {
                                if (node._id === nodeId) {
                                    node.host = null;
                                    nodeArray.forEach(function (tempNode) {
                                        node.lanes.push(tempNode);
                                    });
                                    // node.lanes.push(nodeObj);
                                }
                                _this6.addSearchNode(node, nodeId, nodeArray);
                            });
                        }
                    }

                    // Recursive function to search a node for adding a new Node

                }, {
                    key: 'addSearchNode',
                    value: function addSearchNode(node, nodeId, nodeArray) {
                        var _this7 = this;

                        node.lanes.forEach(function (node1) {
                            if (node1._id === nodeId) {
                                node1.host = null;
                                nodeArray.forEach(function (tempNode) {
                                    node1.lanes.push(tempNode);
                                });
                                // node1.lanes.push(nodeObj);
                            } else {
                                _this7.addSearchNode(node1, nodeId, nodeArray);
                            }
                        });
                    }

                    /**
                     * function to get the Node Information
                     * @param  {} nodeId - ID of the Node.
                     */

                }, {
                    key: 'getNode',
                    value: function getNode(nodeId) {
                        var _this8 = this;

                        this.nodeInfo = null;
                        if (this._id === nodeId) {
                            this.nodeInfo = this.model;
                        } else {
                            this.model.lanes.forEach(function (node) {
                                if (node._id === nodeId) {
                                    _this8.nodeInfo = node;
                                }
                                _this8.getSearchNode(node, nodeId);
                            });
                        }
                        return this.nodeInfo;
                    }

                    // Recursive function to search a node for adding a new Node

                }, {
                    key: 'getSearchNode',
                    value: function getSearchNode(node, nodeId) {
                        var _this9 = this;

                        node.lanes.forEach(function (node1) {
                            if (node1._id === nodeId) {
                                _this9.nodeInfo = node1;
                            } else {
                                _this9.getSearchNode(node1, nodeId);
                            }
                        });
                    }
                }]);

                return Node;
            }();

            exports.default = Node;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _Node = __webpack_require__(4);

            var _Node2 = _interopRequireDefault(_Node);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.default = _Node2.default;

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            /* eslint-disable require-jsdoc */

            /* eslint no-undef: "off" */

            var DummyComponent = function () {
                function DummyComponent(seed, dimensions) {
                    _classCallCheck(this, DummyComponent);

                    this.seed = seed;
                    this.dimensions = dimensions;
                    this.position = null;
                    this.renderAt = null;
                    this.type = 'placeHolder';
                }

                _createClass(DummyComponent, [{
                    key: 'getLogicalSpace',
                    value: function getLogicalSpace() {
                        return {
                            width: this.dimensions.width - 2 * this.seed,
                            height: this.dimensions.height - 2 * this.seed
                        };
                    }
                }, {
                    key: 'setSpatialConfig',
                    value: function setSpatialConfig(conf) {
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

                    /* istanbul ignore next */

                }, {
                    key: 'draw',
                    value: function draw() {
                        if (document.getElementById('placeholder' + this.renderAt) !== null) {
                            document.getElementById('placeholder' + this.renderAt).remove();
                        }
                        if (document.getElementById('component' + this.renderAt) !== null) {
                            document.getElementById('component' + this.renderAt).remove();
                        }
                        var doc = document.getElementById(this.renderAt),
                            div = document.createElement('div'),
                            width = Math.max(this.dimensions.width, this.newDimensions.width),
                            height = Math.max(this.dimensions.height, this.newDimensions.height);
                        div.setAttribute('id', 'component' + this.renderAt);

                        div.style.backgroundColor = '#fab1a0'; // getColor();

                        div.style.width = width - this.seed * 2 + 'px';
                        div.style.height = height - this.seed * 2 + 'px';

                        doc.appendChild(div);
                    }
                }]);

                return DummyComponent;
            }();

            exports.default = DummyComponent;

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _dummyComponent = __webpack_require__(6);

            var _dummyComponent2 = _interopRequireDefault(_dummyComponent);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.default = _dummyComponent2.default;

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

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
                    return 'node-' + ++_uid;
                };
            }();

            function yExtraSpace(node) {
                var smallestHeight = 0;
                if (node.getCutType() === 'v') {
                    smallestHeight = smallestExtraHeightHorizontally(node); // eslint-disable-line no-use-before-define
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
                    smallestWidth = smallestExtraWidthVertically(node); // eslint-disable-line no-use-before-define
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
            exports.smallestExtraWidthVertically = smallestExtraWidthVertically;
            exports.smallestExtraHeightHorizontally = smallestExtraHeightHorizontally;

            /***/
        }]
        /******/)
    );
});
//# sourceMappingURL=layout.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../layout/node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

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

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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
const DEFAULT_BORDER_COLOR = '#747474';
const DEFAULT_BORDER_WIDTH = '1px';
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 400;
const LAYOUT_ID = 'd2ad88af-7050-4c1c-b407-42745cfe3bd7';
const LAYOUT_NAME = 'fusionBoardLayout';



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
/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout-model */ "../../layout-model/dist/layout.js");
/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(layout_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return layout_model__WEBPACK_IMPORTED_MODULE_0__["DummyComponent"]; });

/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout */ "./layout/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"]; });






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

  rawConfig(hostObj) {
    let compMap = this.getComponentMap();
    let compKeys = compMap.keys();
    let compVal = compMap.values();
    if (hostObj.lanes && hostObj.lanes.length) {
      delete hostObj._id;
      hostObj.lanes.forEach(childHost => this.rawConfig(childHost));
    }
    if (hostObj.host != null && typeof hostObj.host !== 'string') {
      let flag = true;
      while (flag) {
        let val = compVal.next().value;
        let key = compKeys.next().value;
        if (val.renderAt === hostObj.host.renderAt) {
          hostObj.host = key;
          delete hostObj._id;
          flag = false;
        }
      }
    }
    return hostObj;
  }

  getComponentMap() {
    return this.componentMap;
  }
  /**
   * function to delete component from Map
   * @param  {} componentId - Id of the component.
   */
  deleteComponent(componentId) {
    this.componentMap.delete(componentId);
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
/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout-model */ "../../layout-model/dist/layout.js");
/* harmony import */ var layout_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(layout_model__WEBPACK_IMPORTED_MODULE_0__);
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

    this.mapComponents = this.layoutDefinition;
  }

  compute() {
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeDiv(_constants_defaults__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_NAME"]);
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].checkComponent(this.mapComponents, this.layoutDef);
    this.layoutDefinition = this.layoutDef.getSanitizedDefinition();
    this._layout = new layout_model__WEBPACK_IMPORTED_MODULE_0__["LayoutModel"]({
      width: this.width,
      height: this.height
    }, this.layoutDefinition);
    this.tree = this._layout.negotiate().tree();
    this._layout.broadcast();
    this.con = new _controller_controller__WEBPACK_IMPORTED_MODULE_3__["Controller"](this.tree, this.skeletonType, this.renderAt);
    this.con.render();
    // Utils.drawComponents(this.layoutDef)
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
   * @param  {Object} config - node configuration to change.
   */
  updateNode(config) {
    this.tree.updateNode(config);
    this.layoutDefinition = this.tree.model;
    this.compute();
  }

  /**
   * function to delete a node from the layout and rerender the layout
   * @param  {String} nodeId - node id to delete
   */
  deleteNode(nodeID) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeDiv('fusionBoardLayout');
    this.tree.delete(nodeID);
    this.exportLayoutDefinition(nodeID);
    let component = this.nodeLayoutConfig;
    component = JSON.parse(component);
    console.log('component ID: ', component);
    if (component.host === null) {
      component.lanes.forEach(comp => {
        if (comp.host === null) {
          this.searchComponent(comp);
        } else {
          this.layoutDef.deleteComponent(comp.host);
        }
      });
    } else {
      this.layoutDef.deleteComponent(component.host);
    }
    this.nodeLayoutConfig = null;
    // this.layoutDefinition = this.tree.model
    this.layoutDefinition = this.layoutDef.rawConfig(this.tree.model);
    this.compute();
  }

  // Recursive function to iterate dummy componrnt to delete them
  searchComponent(component) {
    component.lanes.forEach(comp => {
      if (comp.host === null) {
        this.searchComponent(comp);
      } else {
        this.layoutDef.deleteComponent(comp.host);
      }
    });
  }

  /**
   * function to delete a node from the layout and rerender the layout
   * @param  {Object} nodeId - node id to delete
   * @param  {Object} nodeArray - Node Array to be Added
   */
  addNode(nodeId, nodeArray) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeDiv('fusionBoardLayout');
    // Utils.checkComponent(nodeArray, this.layoutDef)
    this.mapComponents = nodeArray;
    this.tree.addNode(nodeId, nodeArray);
    this.layoutDefinition = this.tree.model;
    this.compute();
  }

  /**
   * function to add the layout definition of the tree.
   * @param  {String} nodeID - node Id of the selected node.
   */
  exportLayoutDefinition(nodeID) {
    this.nodeLayoutConfig = null;
    if (this.tree._id === nodeID) {
      let treeModel = JSON.parse(JSON.stringify(this.tree.model));
      // let treeModel = Utils.deepCopyObject(this.tree.model)
      this.nodeLayoutConfig = JSON.stringify(this.layoutDef.rawConfig(treeModel));
    } else {
      this.tree.children.forEach(node => {
        if (node._id === nodeID) {
          let treeModel = JSON.parse(JSON.stringify(node.model));
          // let treeModel = Utils.deepCopyObject(node.model)
          this.nodeLayoutConfig = JSON.stringify(this.layoutDef.rawConfig(treeModel));
        } else {
          this.searchNode(node, nodeID);
        }
      });
    }
    return this.nodeLayoutConfig;
  }

  // Recursive function to search a node to export Layout Definition.
  searchNode(node, nodeID) {
    node.children.forEach(node1 => {
      if (node1._id === nodeID) {
        let treeModel = JSON.parse(JSON.stringify(node1.model));
        // let treeModel = Utils.deepCopyObject(node1.model)
        this.nodeLayoutConfig = JSON.stringify(this.layoutDef.rawConfig(treeModel));
      } else {
        this.searchNode(node1, nodeID);
      }
    });
  }

  /**
   * function to get the node info.
   * @param  {String} nodeID - node ID.
   */
  getNode(nodeID) {
    let nodeInfo = this.tree.getNode(nodeID);
    return nodeInfo;
  }

  /**
   * Function to add placeHolder to the layout
   */
  // addPlaceHolder () {
  //   if (this.tree.children.length === 0 && this.tree.model.host !== null) {
  //     if (document.getElementById(`placeholder${this.tree._id}`) !== null) { document.getElementById(`placeholder${this.tree._id}`).remove() }
  //     let dummyElem = this.tree.model.host
  //     let doc = document.getElementById(this.tree._id)
  //     let div = document.createElement('div')
  //     div.setAttribute('id', `placeholder${this.tree._id}`)
  //     let width = dummyElem.newDimensions.width
  //     let height = dummyElem.newDimensions.height
  //     div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //     div.style.width = `${width}px`
  //     div.style.height = `${height}px`
  //     div.style.backgroundSize = `${width}px ${height}px`
  //     doc.appendChild(div)
  //   } else {
  //     this.tree.children.forEach((node) => {
  //       if (node.children.length === 0 && node.model.host !== null) {
  //         if (document.getElementById(`placeholder${node._id}`) !== null) { document.getElementById(`placeholder${node._id}`).remove() }
  //         let dummyElem = node.model.host
  //         let doc = document.getElementById(node._id)
  //         let div = document.createElement('div')
  //         div.setAttribute('id', `placeholder${node._id}`)
  //         let width = dummyElem.newDimensions.width
  //         let height = dummyElem.newDimensions.height
  //         div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //         div.style.width = `${width}px`
  //         div.style.height = `${height}px`
  //         div.style.backgroundSize = `${width}px ${height}px`
  //         doc.appendChild(div)
  //       } else {
  //         this.searchPlaceholderNode(node)
  //       }
  //     })
  //   }
  // }

  // // Recursive function to search a node to add placeholder
  // searchPlaceholderNode (node) {
  //   node.children.forEach((node1) => {
  //     if (node1.children.length === 0 && node1.model.host !== null) {
  //       if (document.getElementById(`placeholder${node1._id}`) !== null) { document.getElementById(`placeholder${node1._id}`).remove() }
  //       let dummyElem = node1.model.host
  //       let doc = document.getElementById(node1._id)
  //       let div = document.createElement('div')
  //       div.setAttribute('id', `placeholder${node1._id}`)
  //       let width = dummyElem.newDimensions.width
  //       let height = dummyElem.newDimensions.height
  //       div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //       div.style.width = `${width}px`
  //       div.style.height = `${height}px`
  //       div.style.backgroundSize = `${width}px ${height}px`
  //       doc.appendChild(div)
  //     } else {
  //       this.searchPlaceholderNode(node1)
  //     }
  //   })
  // }
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
    div.style.border = '1px solid #747474';
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


class PlaceholderComponent {
  constructor(seed, dimensions) {
    this.seed = seed;
    this.dimensions = dimensions;
    this.position = null;
    this.renderAt = null;
    this.type = 'placeholder';
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

  /* istanbul ignore next */

  draw() {
    // if (document.getElementById(`placeholder${this.renderAt}`) !== null) { document.getElementById(`placeholder${this.renderAt}`).remove() }
    // if (document.getElementById(`component${this.renderAt}`) !== null) { document.getElementById(`component${this.renderAt}`).remove() }
    // let doc = document.getElementById(this.renderAt)
    // let div = document.createElement('div')
    // let width = Math.max(this.dimensions.width, this.newDimensions.width)
    // let height = Math.max(this.dimensions.height, this.newDimensions.height)
    // div.setAttribute('id', `component${this.renderAt}`)
    // div.style.backgroundColor = '#fab1a0' // getColor();
    // div.style.width = `${width - (this.seed * 2)}px`
    // div.style.height = `${height - (this.seed * 2)}px`
    // doc.appendChild(div)

    if (document.getElementById(`placeholder${this.renderAt}`) !== null) {
      document.getElementById(`placeholder${this.renderAt}`).remove();
    }
    let doc = document.getElementById(this.renderAt);
    let div = document.createElement('div');
    div.setAttribute('id', `placeholder${this.renderAt}`);
    let width = this.newDimensions.width;
    let height = this.newDimensions.height;
    div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')";
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundSize = `${width}px ${height}px`;
    doc.appendChild(div);
  }
}

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

  /**
   * static method to check if dummy component present or not.
   * @param  {} NodeArray - NodeArray to add new Lanes.
   */
  static checkComponent(nodeComponents, layoutDef) {
    let compMap = layoutDef.getComponentMap();
    let compKeys = compMap.keys();
    if (nodeComponents.constructor === Array) {
      nodeComponents.forEach(element => {
        let flag = true;
        while (flag) {
          let key = compKeys.next().value;
          if (key === element.host) {
            flag = false;
          }
          if (key === undefined) {
            flag = false;
            const dummyComponent = new PlaceholderComponent(10, {
              width: _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WIDTH"] / 2,
              height: _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_HEIGHT"] / 2
            });
            layoutDef.addComponent(element.host, dummyComponent);
          }
        }
      });
    } else {
      if (nodeComponents.host === null) {
        nodeComponents.lanes.forEach(tempNode => {
          if (tempNode.host === null) {
            Utils.SearchNode(tempNode.lanes, layoutDef);
          }
        });
      }
    }
  }

  // Recursive function to search a node for adding a new Node
  static SearchNode(nodeComp, layoutDef) {
    nodeComp.forEach(tempNode => {
      if (tempNode.host === null) {
        Utils.SearchNode(tempNode.lanes);
      } else {
        const dummyComponent = new PlaceholderComponent(10, {
          width: _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WIDTH"] / 2,
          height: _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_HEIGHT"] / 2
        });
        layoutDef.addComponent(tempNode.host, dummyComponent);
      }
    });
  }

  /**
   * static method to deep copy objects
   * @param  {} param - object to be deeply copied
   */
  static deepCopyObject(param) {
    let copiedObj, i;
    if (typeof param !== 'object') {
      return param;
    }
    if (!param) {
      return param;
    }
    // copying the array inside an object
    if (Object.prototype.toString.apply(param) === '[object Array]') {
      copiedObj = [];
      for (i = 0; i < param.length; i += 1) {
        copiedObj[i] = Utils.deepCopyObject(param[i]);
      }
      return copiedObj;
    }
    copiedObj = {};
    // rest all kind of keys
    for (i in param) {
      if (param.hasOwnProperty(i)) {
        copiedObj[i] = Utils.deepCopyObject(param[i]);
      }
    }
    return copiedObj;
  }

  /**
   * static method to place the placeholders.
   * @param  {} layoutDef - Layout definitions
   */
  static drawComponents(layoutDef) {
    let compMap = layoutDef.getComponentMap();
    let compKeys = compMap.keys();
    let compVal = compMap.values();
    let flag = true;
    while (flag) {
      let val = compVal.next().value;
      let key = compKeys.next().value;
      if (key !== undefined) {
        val.draw();
      } else {
        flag = false;
      }
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