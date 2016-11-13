(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue"] = factory();
	else
		root["Vue"] = factory();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	var Vue = __webpack_require__(5);
	Vue.component('picker', __webpack_require__(6));
	
	var areas = __webpack_require__(19);
	new Vue({
	    el: '#container',
	    data: function data() {
	        return {
	            list: []
	        };
	    },
	    props: {
	        type: {
	            type: Number,
	            default: 2
	        }
	    },
	    methods: {
	        confirm: function confirm(i, j, k) {
	            var province = this.provinceList[i];
	            var city = this.cityList[j];
	            var area = this.areaList[k];
	            if (this.type === 3) {
	                console.log(province.name, city.name, area.name);
	            } else if (this.type === 2) {
	                console.log(province.name, city.name);
	            } else if (this.type === 1) {
	                console.log(province.name);
	            }
	        },
	        change: function change(itemIndex, index) {
	            if (this.type === 1) return;
	            if (itemIndex === 0) {
	                this.provincePicker(index);
	            } else if (itemIndex === 1 && this.type === 3) {
	                this.cityPicker(index);
	            }
	        },
	        provincePicker: function provincePicker(idx) {
	            this.cityList = areas[1][idx];
	            if (this.type === 2) {
	                this.list.splice(1, 1, this.cityList);
	            } else {
	                this.areaList = areas[2][idx][0];
	                this.list.splice(1, 2, this.cityList, this.areaList);
	            }
	
	            this.provinceIdx = idx;
	        },
	        cityPicker: function cityPicker(idx) {
	            this.areaList = areas[2][this.provinceIdx][idx];
	            this.list.splice(2, 1, this.areaList);
	        }
	    },
	    mounted: function mounted() {
	        this.provinceIdx = 0;
	        this.provinceList = areas[0];
	        this.cityList = areas[1][0];
	        this.areaList = areas[2][0][0];
	        if (this.type === 1) {
	            this.list = this.provinceList;
	        } else if (this.type === 2) {
	            this.list = [this.provinceList, this.cityList];
	        } else if (this.type === 3) {
	            this.list = [this.provinceList, this.cityList, this.areaList];
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\nbody {\n  margin: 0;\n  background: #ddd;\n}\n\n.choose-result {\n  text-align: center;\n  position: absolute;\n  top: 100px;\n  width: 80%;\n  background-color: #fff;\n}\n\n.choose-result .choose-result-cnt {\n  margin-top: 30px;\n}\n\n\ninput {\n  border: 1px solid #5e5e5e;\n  height: 30px;\n  width: 200px;\n}\n\n\n.picker-header {\n  height: 40px;\n  width: 100%;\n  background-color: #F5F5F5;\n}\n\n.picker-header .picker-title {\n  float: left;\n  width: 50%;\n  text-align: center;\n  line-height: 40px;\n  color: #959595;\n  font-size: 15px;\n}", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.2
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
	};
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';
	
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var hasProxy;
	var proxyHandlers;
	var initProxy;
	
	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var uid$2 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*  */
	
	
	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$1 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val, seen) {
	  var i, keys;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = Array.isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) { traverse(val[i], seen); }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) { traverse(val[keys[i]], seen); }
	    }
	  }
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return
	      }
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}
	
	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if ("development" !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	};
	
	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, i));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text;
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist_" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	function mergeVNodeHook (def$$1, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def$$1.__injected || (def$$1.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def$$1[hookKey];
	    if (oldHook) {
	      def$$1[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def$$1[hookKey] = hook;
	    }
	  }
	}
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
	      vm.$forceUpdate();
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	  };
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  if (isObject(Ctor)) {
	    Ctor = Vue$3.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  data = data || {};
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  vnode.functionalContext = context;
	  if (data.slot) {
	    (vnode.data || (vnode.data = {})).slot = data.slot;
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}
	
	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$3.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0);
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (typeof tree[i] !== 'string') {
	          tree[i].isStatic = true;
	          tree[i].key = "__static__" + index + "_" + i;
	        }
	      }
	    } else {
	      tree.isStatic = true;
	      tree.key = "__static__" + index;
	    }
	    return tree
	  };
	
	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && "development" !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}
	
	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	
	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent;
	    opts.propsData = options.propsData;
	    opts._parentVnode = options._parentVnode;
	    opts._parentListeners = options._parentListeners;
	    opts._renderChildren = options._renderChildren;
	    opts._componentTag = options._componentTag;
	    if (options.render) {
	      opts.render = options.render;
	      opts.staticRenderFns = options.staticRenderFns;
	    }
	  }
	
	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor;
	    var options = Ctor.options;
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options;
	      var cachedSuperOptions = Ctor.superOptions;
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions;
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	        if (options.name) {
	          options.components[options.name] = Ctor;
	        }
	      }
	    }
	    return options
	  }
	}
	
	function Vue$3 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);
	
	var warn = noop;
	var formatComponentName;
	
	{
	  var hasConsole = typeof console !== 'undefined';
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components;
	    var def;
	    for (var key in components) {
	      var lower = key.toLowerCase();
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        "development" !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        );
	        continue
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue$3.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child);
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	        name = null;
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub
	  };
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$3);
	
	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});
	
	Vue$3.version = '2.0.2';
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	);
	
	
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	var isPreTag = function (tag) { return tag === 'pre'; };
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function childNodes (node) {
	  return node.childNodes
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    nodeOps.removeChild(parent, el);
	  }
	
	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.child) && (
	      !data.keepAlive ||
	      vnode.context._isBeingDestroyed
	    )) {
	      invokeDestroyHook(i._vnode);
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	
	        createElm(vnode, insertedVnodeQueue);
	
	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    res[getRawDirName(dir)] = dir;
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || (
	    dir.name + (
	      dir.modifiers
	        ? '.' + Object.keys(dir.modifiers).join('.')
	        : ''
	    )
	  )
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	// skip type checking this file because we need to attach private properties
	// to elements
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined;
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};
	
	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }
	
	  var needClone = style.__ob__;
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }
	
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }
	
	  for (name in oldStyle) {
	    if (style[name] == null) {
	      el.style[normalize(name)] = '';
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur == null ? '' : cur;
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});
	
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;
	
	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);
	
	// install platform patch function
	Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1;
	
	// wrap mount
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);
	
	/*  */
	
	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}
	
	// According to
	// https://w3c.github.io/DOM-Parsing/#dfn-serializing-an-attribute-value
	// when serializing innerHTML, <, >, ", & should be encoded as entities.
	// However, only some browsers, e.g. PhantomJS, encodes < and >.
	// this causes problems with the in-browser parser.
	var shouldDecodeTags = inBrowser ? shouldDecode('>', '&gt;') : false;
	
	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
	
	/*  */
	
	var decoder = document.createElement('div');
	
	function decodeHTML (html) {
	  decoder.innerHTML = html;
	  return decoder.textContent
	}
	
	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */
	
	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */
	
	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);
	
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	
	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});
	
	// Special Elements (can contain anything)
	var isSpecialTag = makeMap('script,style', true);
	
	var reCache = {};
	
	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;
	
	function decodeAttr (value, shouldDecodeTags, shouldDecodeNewlines) {
	  if (shouldDecodeTags) {
	    value = value.replace(ltRE, '<').replace(gtRE, '>');
	  }
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value.replace(ampRE, '&').replace(quoteRE, '"')
	}
	
	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var isFromDOM = options.isFromDOM;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (/^<!--/.test(html)) {
	          var commentEnd = html.indexOf('-->');
	
	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }
	
	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (/^<!\[/.test(html)) {
	          var conditionalEnd = html.indexOf(']>');
	
	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }
	
	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }
	
	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }
	
	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }
	
	      var text = void 0;
	      if (textEnd >= 0) {
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      } else {
	        text = html;
	        html = '';
	      }
	
	      if (options.chars) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }
	
	    if (html === last) {
	      throw new Error('Error parsing template:\n\n' + html)
	    }
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }
	
	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }
	
	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;
	
	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }
	
	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
	
	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: isFromDOM ? decodeAttr(
	          value,
	          options.shouldDecodeTags,
	          options.shouldDecodeNewlines
	        ) : value
	      };
	    }
	
	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }
	
	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }
	
	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }
	
	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}
	
	/*  */
	
	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;
	
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	
	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }
	
	  return expression
	}
	
	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}
	
	/*  */
	
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	
	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});
	
	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}
	
	/*  */
	
	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}
	
	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}
	
	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}
	
	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}
	
	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}
	
	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}
	
	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return dynamicValue
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}
	
	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}
	
	/*  */
	
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var specialNewlineRE = /\u2028|\u2029/g;
	
	var decodeHTMLCached = cached(decodeHTML);
	
	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;
	
	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    isFromDOM: options.isFromDOM,
	    shouldDecodeTags: options.shouldDecodeTags,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
	
	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }
	
	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }
	
	      if ("client" !== 'server' && isForbiddenTag(element)) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }
	
	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }
	
	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);
	
	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;
	
	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }
	
	      function checkRootConstraints (el) {
	        {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }
	
	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if ("development" !== 'production' && !stack.length && !warned) {
	        // allow 2 root elements with v-if and v-else
	        if (root.if && element.else) {
	          checkRootConstraints(element);
	          root.elseBlock = element;
	        } else {
	          warned = true;
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent);
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },
	
	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },
	
	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          // #3895 special character
	          text = text.replace(specialNewlineRE, '');
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}
	
	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}
	
	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}
	
	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}
	
	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}
	
	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}
	
	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true;
	  }
	}
	
	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    prev.elseBlock = el;
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    );
	  }
	}
	
	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}
	
	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget;
	    }
	  }
	}
	
	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}
	
	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        if (modifiers && modifiers.prop) {
	          isProp = true;
	          name = camelize(name);
	          if (name === 'innerHtml') { name = 'innerHTML'; }
	        }
	        if (isProp || platformMustUseProp(name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been deprecated. ' +
	            'Use v-bind or the colon shorthand instead.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}
	
	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}
	
	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}
	
	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name]) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}
	
	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}
	
	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}
	
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;
	
	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}
	
	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}
	
	/*  */
	
	var isStaticKey;
	var isPlatformReservedTag;
	
	var genStaticKeysCached = cached(genStaticKeys$1);
	
	/**
	 * Goal of the optimizier: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}
	
	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}
	
	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}
	
	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.once || node.static) {
	      node.staticRoot = true;
	      node.staticInFor = isInFor;
	      return
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], !!node.for);
	      }
	    }
	  }
	}
	
	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    Object.keys(node).every(isStaticKey)
	  ))
	}
	
	/*  */
	
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*\s*$/;
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};
	
	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;'
	};
	
	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}
	
	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}
	
	function genKeyFilter (keys) {
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}
	
	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}
	
	/*  */
	
	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}
	
	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};
	
	/*  */
	
	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var currentOptions;
	
	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}
	
	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    // hoist static sub-trees out
	    el.staticProcessed = true;
	    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el);
	    } else {
	      var data = genData(el);
	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}
	
	function genIf (el) {
	  var exp = el.if;
	  el.ifProcessed = true; // avoid recursion
	  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
	}
	
	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
	}
	
	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}
	
	function genData (el) {
	  if (el.plain) {
	    return
	  }
	
	  var data = '{';
	
	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }
	
	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}
	
	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}
	
	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}
	
	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}
	
	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : JSON.stringify(text.text)
	}
	
	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return children
	    ? ("_t(" + slotName + "," + children + ")")
	    : ("_t(" + slotName + ")")
	}
	
	function genComponent (el) {
	  var children = genChildren(el);
	  return ("_h(" + (el.component) + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}
	
	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
	  }
	  return res.slice(0, -1)
	}
	
	/*  */
	
	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}
	
	/*  */
	
	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	
	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}
	
	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}
	
	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}
	
	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}
	
	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}
	
	/*  */
	
	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been deprecated. ' +
	        'Use v-bind or the colon shorthand instead.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}
	
	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}
	
	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};
	
	/*  */
	
	function transformNode$1 (el) {
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}
	
	function genData$2 (el) {
	  return el.styleBinding
	    ? ("style:(" + (el.styleBinding) + "),")
	    : ''
	}
	
	var style$1 = {
	  transformNode: transformNode$1,
	  genData: genData$2
	};
	
	var modules$1 = [
	  klass$1,
	  style$1
	];
	
	/*  */
	
	var warn$3;
	
	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    return genSelect(el, value)
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value);
	  } else {
	    return genDefaultModel(el, value, modifiers)
	  }
	}
	
	function genCheckboxModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + valueBinding + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}
	
	function genRadioModel (el, value) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', (value + "=" + valueBinding), null, true);
	}
	
	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }
	
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';
	
	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : "$event";
	  var code = number || type === 'number'
	    ? (value + "=_n(" + valueExpression + ")")
	    : (value + "=" + valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (needCompositionGuard) {
	    // need runtime directive code to help with composition events
	    return true
	  }
	}
	
	function genSelect (el, value) {
	  {
	    el.children.some(checkOptionWarning);
	  }
	  var code = value + "=Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){return \"_value\" in o ? o._value : o.value})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');
	  addHandler(el, 'change', code, null, true);
	  // need runtime to help with possible dynamically generated options
	  return true
	}
	
	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}
	
	/*  */
	
	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	/*  */
	
	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}
	
	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};
	
	/*  */
	
	var cache = Object.create(null);
	
	var baseOptions = {
	  isIE: isIE,
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};
	
	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}
	
	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}
	
	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}
	
	/*  */
	
	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});
	
	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);
	
	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }
	
	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    var isFromDOM = false;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          isFromDOM = true;
	          template = idToTemplate(template);
	        }
	      } else if (template.nodeType) {
	        isFromDOM = true;
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      isFromDOM = true;
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        isFromDOM: isFromDOM,
	        shouldDecodeTags: shouldDecodeTags,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	Vue$3.compile = compileToFunctions;
	
	return Vue$3;
	
	})));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5).use(__webpack_require__(7));
	__webpack_require__(11);
	
	var defaultFnObj = {
	    type: Function,
	    required: false,
	    default: function _default() {
	        return function () {};
	    }
	};
	module.exports = {
	    template: __webpack_require__(13),
	    data: function data() {
	        return { open: false };
	    },
	
	    props: {
	        list: {
	            type: [Object, Array],
	            required: true
	        },
	        label: {
	            type: String,
	            required: false,
	            default: 'label'
	        },
	        curIdxs: {
	            type: Array,
	            required: false,
	            default: function _default() {
	                if (this.list[0] instanceof Array) {
	                    var arr = [];
	                    for (var i = 0; i < this.list.length; i++) {
	                        arr[i] = 0;
	                    }
	                    return arr;
	                }
	                return [0, 0, 0];
	            }
	        },
	        cancel: defaultFnObj,
	        confirm: defaultFnObj,
	        change: defaultFnObj
	    },
	    computed: {
	        datas: function datas() {
	            var list = this.list;
	            if (!(this.list[0] instanceof Array)) {
	                list = [this.list];
	            }
	            var obj = {};
	            list.forEach(function (arr, index) {
	                obj[index] = arr;
	            });
	            return obj;
	        },
	        style: function style() {
	            var length = Object.keys(this.datas).length;
	            return {
	                width: 100 / length + '%',
	                float: 'left'
	            };
	        }
	    },
	    watch: {
	        // curIdxs(val, oval){
	        //     this.cache = val;
	        // }
	    },
	    methods: {
	        openWin: function openWin() {
	            this.open = true;
	        },
	        close: function close() {
	            this.open = false;
	            this.cancel();
	        },
	        choose: function choose() {
	            this.open = false;
	            this.confirm.apply(this, this.cache);
	        },
	        picker: function picker(index, alias) {
	            this.cache[parseInt(alias)] = index;
	            this.change(parseInt(alias), index);
	        }
	    },
	    mounted: function mounted() {
	
	        this.$nextTick(function () {
	            this.cache = this.curIdxs;
	        });
	    },
	
	    components: {
	        'wag_picker_cpt': __webpack_require__(14)
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Touch = __webpack_require__(8);
	
	var app = module.exports = {};
	app.install = function (Vue, options) {
	
	    options = options || {};
	    var longTapTime = options.longTapTime || 350;
	
	    Vue.directive('touch', {
	        bind: function (el, binding, vnode) {
	            var touch = el.touch = new Touch(el);
	            var longTapTimeout = null;
	            var handler = function (res) {
	                var e = res.e;
	                if (typeof binding.value === 'function') {
	                    var _handler = function () {
	                        if (binding.modifiers.self) {
	                            if (e.target === e.currentTarget) {
	                                binding.value(e);
	                            }
	                        } else {
	                            binding.value(e);
	                        }
	                    }
	
	                    switch (binding.arg) {
	                        case 'tap':
	                            if (Math.abs(res.x1 - res.x2) < 30 && Math.abs(res.y1 - res.y2) < 30) {
	                                _handler();
	                            }
	                            break;
	                        case 'longtap':
	                            _handler();
	                            break;
	                    }
	                }
	            };
	
	            var modify = function (e) {
	                if (binding.modifiers.stop) {
	                    e.stopPropagation();
	                }
	                if (binding.modifiers.prevent) {
	                    e.preventDefault();
	                }
	            }
	
	            touch.on('touch:start', function (res) {
	                modify(res.e);
	                longTapTimeout = setTimeout(function () {
	                    handler(res);
	                }, longTapTime);
	            });
	
	            touch.on('touch:move', function () {
	                clearTimeout(longTapTimeout);
	            });
	
	            touch.on('touch:end', function (res) {
	                clearTimeout(longTapTimeout);
	                modify(res.e);
	                handler(res);
	            });
	
	            touch.start();
	        },
	        unbind: function (el) {
	            //删除dom监听事件
	            el.touch._remove();
	            el.touch = null;
	        }
	    });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	//触摸事件处理
	var Event = __webpack_require__(9);
	var domEventHelper = __webpack_require__(10);
	
	function Touch(el) {
	    Event.call(this);
	    this.el = el || document;
	    this.touch = null;
	    this.lastTimestamp = Date.now();
	    this.spend = 0;
	    this.x1 = this.y1 = this.x2 = this.y2 = undefined;
	}
	
	Touch.prototype = Object.create(Event.prototype, {
	    'constructor': {
	        value: Touch
	    }
	});
	
	Touch.prototype._add = function () {
	    domEventHelper.add(this.el, 'touchstart', this.touchStart.bind(this), false);
	    domEventHelper.add(this.el, 'touchmove', this.touchMove.bind(this), false);
	    domEventHelper.add(this.el, 'touchend', this.touchEnd.bind(this), false);
	    domEventHelper.add(this.el, 'touchcancel', this.touchCancel.bind(this), false);
	};
	
	Touch.prototype._remove = function () {
	    domEventHelper.remove(this.el, 'touchstart');
	    domEventHelper.remove(this.el, 'touchmove');
	    domEventHelper.remove(this.el, 'touchend');
	    domEventHelper.remove(this.el, 'touchcancel');
	};
	
	Touch.prototype.touchStart = function (e) {
	    this.lastTimestamp = Date.now();
	    var touch = e.touches[0];
	    this.touch = touch;
	    this.touch.el = 'tagName' in touch.target ?
	        touch.target : touch.target.parentNode;
	
	    this.x2 = this.x1 = touch.pageX;
	    this.y2 = this.y1 = touch.pageY;
	    this.trigger('touch:start', {
	        x1: this.x1,
	        y1: this.y1,
	        e: e,
	        el: this.touch.el,
	        timestamp: this.lastTimestamp
	    });
	};
	
	Touch.prototype.touchMove = function (e) {
	    this.spend = Date.now() - this.lastTimestamp;
	    var touch = e.touches[0];
	    var yrange = 0;
	    var xrange = 0;
	    if (this.y2) {
	        yrange = this.y2 - touch.pageY;
	        xrange = this.x2 - touch.pageX;
	    }
	
	    this.x2 = touch.pageX;
	    this.y2 = touch.pageY;
	
	    this.trigger('touch:move', {
	        x1: this.x1,
	        y1: this.y1,
	        x2: this.x2,
	        y2: this.y2,
	        e: e,
	        toUp: yrange > 0,
	        toLeft: xrange > 0,
	        xrange: xrange,
	        yrange: yrange,
	        spend: this.spend
	    });
	};
	
	Touch.prototype.touchEnd = function (e) {
	    this.spend = Date.now() - this.lastTimestamp;
	    this.trigger('touch:end', {
	        x1: this.x1,
	        y1: this.y1,
	        x2: this.x2,
	        y2: this.y2,
	        dir: swipeDirection(this.x1, this.x2, this.y1, this.y2),
	        e: e,
	        spend: this.spend
	    });
	};
	
	Touch.prototype.touchCancel = function () {
	    //this.pause('touch:start touch:move touch:end');
	    this.trigger('touch:cancel', {
	        x1: this.x1,
	        y1: this.y1,
	        x2: this.x2,
	        y2: this.y2,
	        dir: swipeDirection(this.x1, this.x2, this.y1, this.y2),
	        spend: this.spend
	    });
	    this.spend = 0;
	    this.touch = null;
	    this.x1 = this.y1 = this.x2 = this.y2 = undefined;
	};
	
	Touch.prototype.start = function () {
	    this._add();
	    var _this = this;
	    window.addEventListener('scroll', function (e) {
	        // this.touchCancel();
	        _this.trigger('scroll', e);
	    }, false);
	
	    //重新绑定dom
	    this.on('touch:el', function (e) {
	        _this._remove();
	        _this.el = el;
	        _this._add();
	    });
	};
	
	function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >=
	    Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'left' : 'right') : (y1 - y2 > 0 ? 'up' : 'down')
	}
	
	module.exports = Touch;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	
	    /**
	     * Event事件对象
	     * cxt上下文
	     * @constructor
	     */
	    function Event(cxt) {
	        this._events = {};
	        this.cxt = cxt;
	    }
	
	    //off,pause,resume通用方法
	    function eventsApi(self, name, cb, cxt) {
	        var events = {};
	
	        for (var key in self._events) {
	            events[key] = self._events[key];
	        }
	
	        if (name) {
	            events = {};
	            name.split(/\s/).forEach(function (ename) {
	                if (ename && self._events[ename]) {
	                    events[ename] = self._events[ename];
	                }
	            });
	        }
	
	        var keys = Object.keys(events);
	        if (keys.length === 0) return this;
	
	        if (cb && typeof cb === 'function') {
	            keys.forEach(function (key) {
	                events[key] = events[key].filter(function (event) {
	                    return event.cb == cb;
	                });
	            });
	        }
	
	        if (cxt) {
	            keys.forEach(function (key) {
	                events[key] = events[key].filter(function (event) {
	                    return event.cxt == cxt;
	                });
	            });
	        }
	
	        return events;
	    }
	
	    //暂停,恢复通用方法
	    function eventsPauseApi(self, name, cb, cxt, val) {
	        var events = eventsApi(self, name, cb, cxt);
	        for (var key in events) {
	            events[key].forEach(function (item) {
	                item.pause = val;
	            });
	        }
	    }
	
	    //on,once通用方法
	    function eventsOnApi(self, name, cb, cxt, once) {
	        if (!name || typeof cb != 'function' || typeof name !== 'string') return this;
	        name.split(/\s/).forEach(function (ename) {
	            if (!ename) return;
	            var handlers = self._events[ename] || [];
	            handlers.push({
	                cb: cb,
	                cxt: cxt || self.cxt || self,
	                pause: false,
	                i: 0,
	                once: once
	            });
	            self._events[ename] = handlers;
	        });
	    }
	
	    /**
	     * 绑定一个事件
	     * @param name 只能是字符串
	     * @param cb
	     * @param cxt
	     * @returns {Event}
	     */
	    Event.prototype.on = function (name, cb, cxt) {
	        eventsOnApi(this, name, cb, cxt, false);
	        return this;
	    };
	
	    Event.prototype.once = function (name, cb, cxt) {
	        eventsOnApi(this, name, cb, cxt, true);
	        return this;
	    };
	
	    /**
	     * 卸载某个事件
	     * @param name
	     * @returns {Event}
	     */
	    Event.prototype.off = function (name, cb, cxt) {
	
	        var events = eventsApi(this, name, cb, cxt);
	        for (var key in events) {
	            var e = this._events[key];
	            events[key].slice(0).forEach(function (item) {
	                e.splice(e.indexOf(item), 1);
	            });
	        }
	
	        return this;
	    }
	
	    /**
	     * 暂停某个事件,用法同off
	     * @param name
	     * @returns {Event}
	     */
	    Event.prototype.pause = function (name, cb, cxt) {
	        eventsPauseApi(this, name, cb, cxt, true);
	        return this;
	    };
	
	    /**
	     * 恢复某个事件,用法同off
	     * @param name
	     * @returns {Event}
	     */
	    Event.prototype.resume = function (name, cb, cxt) {
	        eventsPauseApi(this, name, cb, cxt, false);
	        return this;
	    };
	
	    /**
	     * 触发某个事件
	     * @param name
	     * @returns {Event}
	     */
	    Event.prototype.trigger = function (name) {
	
	        var self = this;
	        if (!name || typeof name !== 'string') return this;
	        var len = arguments.length;
	        var args = [], i = 1;
	        while (i < len) {
	            args.push(arguments[i++]);
	        }
	
	        name.split(/\s/).forEach(function (ename) {
	            if (ename && self._events[ename]) {
	                self._events[ename].forEach(function (handle) {
	                    if (!handle.pause && !(handle.i === 1 && handle.once)) {
	                        handle.cb.apply(handle.cxt, args);
	                        handle.i++;
	                    }
	                });
	            }
	        });
	
	        return this;
	    };
	
	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = Event;
	        }
	        exports.Event = Event;
	    } else {
	        window.Event = Event;
	    }
	
	})();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	
	    var stack = {};
	    var i = 1;
	    var helper = {};
	
	    helper.add = function (el, event, cb, useCapture) {
	        el._uid = el._uid || i++;
	        var obj = stack[el._uid] = stack[el._uid] ? stack[el._uid] : {};
	        var arr = obj[event] = obj[event] ? obj[event] : [];
	        arr.push(cb);
	        el.addEventListener(event, cb, !!useCapture);
	    };
	
	    helper.remove = function (el, event, cb) {
	        if (typeof cb === 'function' && cb.name) {
	            el.removeEventListener(event, cb);
	        } else if (el._uid && stack[el._uid]) {
	            var obj = stack[el._uid];
	            var keys = [];
	            if (event) {
	                if (obj[event]) {
	                    keys.push(event);
	                }
	            } else {
	                keys = Object.keys(obj);
	            }
	
	            keys.forEach(function (key) {
	                obj[key].forEach(function (_cb) {
	                    el.removeEventListener(event, _cb);
	                });
	                delete obj[key];
	            });
	
	        }
	    };
	
	    //引入Node中
	    Node.prototype.addEvent = function (event, cb, useCapture) {
	        helper.add(this, event, cb, useCapture);
	        return this;
	    }
	
	    Node.prototype.removeEvent = function (event, cb) {
	        helper.remove(this, event, cb);
	        return this;
	    }
	
	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = helper;
	        }
	        exports.domEventHelper = helper;
	    } else {
	        window.domEventHelper = helper;
	    }
	
	})();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n   transform\n       1: transform的值有先后顺序,如rotateX(40deg) translateZ(60px);表示先在X轴旋转40度,再在Z轴上移动60px\n           如果translateZ(60px) rotateX(40deg);表示先在Z轴上移动60px,再在X轴旋转40度\n      2: transform-origin要和transform一起使用才有效\n*/\n.picker-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.4);\n  -webkit-transition-duration: opacity z-index;\n  transition-duration: opacity z-index;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  opacity: 0;\n  text-align: left;\n}\n.picker-container.open {\n  z-index: 1;\n  opacity: 1;\n}\n.picker-container.open .picker-wrapper {\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n}\n.picker-container .picker-wrapper {\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  overflow: hidden;\n  transition: transform 0.3s linear;\n  -webkit-transition: -webkit-transform 0.3s linear;\n  transform: translate3d(0, 250px, 0);\n  -webkit-transform: translate3d(0, 250px, 0);\n}\n.picker-container .picker-wrapper .picker-action {\n  box-sizing: border-box;\n  background-color: #fff;\n  padding: 5px 10px;\n  box-shadow: 0 -1px 3px 1px #ddd;\n  border-bottom: 1px solid #e5e5e5;\n}\n.picker-container .picker-wrapper .picker-action .picker-btn {\n  display: inline-block;\n  outline: none;\n  line-height: 1.42;\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  color: #316ccb;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.picker-container .picker-wrapper .picker-action .picker-btn.picker-btn-confirm {\n  float: right;\n}\n.m-picker,\n.m-picker * {\n  box-sizing: border-box;\n}\n.m-picker {\n  height: 200px;\n  background-color: #fff;\n}\n.m-picker .m-picker-inner {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);\n  -webkit-mask-box-image: linear-gradient(top, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);\n}\n.m-picker .m-picker-inner .m-picker-list,\n.m-picker .m-picker-inner .m-picker-rule {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  margin-top: -18px;\n  width: 100%;\n  list-style: none;\n  padding: 0;\n  line-height: 36px;\n  height: 36px;\n}\n.m-picker .m-picker-inner .m-picker-rule {\n  z-index: 2;\n  border-top: 1px solid rgba(0,0,0,0.1);\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n.m-picker .m-picker-inner .m-picker-list {\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n}\n.m-picker .m-picker-inner .m-picker-list li {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  color: #959595;\n/* 超出的部分省略 */\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n/* 元素不面向屏幕时是否可见 */\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.m-picker .m-picker-inner .m-picker-list li.highlight {\n  color: #353535;\n  font-weight: bold;\n}\n.open-wrapper {\n  display: inline-block;\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"open-wrapper\" v-touch:tap=\"openWin\">\n    <slot></slot>\n  </div>\n  <div v-touch:tap=\"close\" class=\"picker-container\" :class=\"{'open':open}\">\n    <div class=\"picker-wrapper\" v-touch:tap.stop>\n      <div class=\"picker-action\">\n        <span class=\"picker-btn\" v-touch:tap=\"close\">取消</span>\n        <span class=\"picker-btn picker-btn-confirm\" v-touch:tap=\"choose\">确定</span>\n      </div>\n      <slot name=\"header\"></slot>\n      <div :style=\"style\" v-for=\"(item, index) in datas\" :key=\"index\">\n        <wag_picker_cpt :list=\"item\" @picker=\"picker\" :alias=\"index\" :label=\"label\" :cur-idx=\"curIdxs[index]\"></wag_picker_cpt>\n      </div>\n\n    </div>\n  </div>\n</div>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Touch = __webpack_require__(8);
	var quart = __webpack_require__(15).quart;
	
	module.exports = {
	    template: __webpack_require__(18),
	    data: function data() {
	        return {
	            distinct: 0,
	            speed: 0.5,
	            curIndex: 0,
	            threshold: 20,
	            animatePause: true
	        };
	    },
	
	    props: ['alias', 'list', 'curIdx', 'label'],
	    watch: {
	        list: function list() {
	            this.$nextTick(this.reload);
	        },
	        curIdx: function curIdx(val, oval) {
	            this.curIndex = val;
	            this.distinct = val * this.threshold;
	            //当下标变化时,自动滚动到指定位置
	            if (this.$list) {
	                this.highlight(oval, val);
	            }
	            if (this.$container) {
	                this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
	            }
	        }
	    },
	    computed: {
	        maxVal: function maxVal() {
	            return (this.list.length - 1) * this.threshold;
	        }
	    },
	    methods: {
	        move: function move(res) {
	            var distinct = this.distinct;
	            distinct += res.yrange * this.speed;
	            this.distinct = this.internalCal(distinct);
	        },
	        end: function end() {
	            var distinct = this.distinct;
	            this.distinct = this.internalCal(distinct, true);
	            this.$container.style.webkitTransition = '100ms ease-out';
	            this.$emit('picker', this.curIndex, this.alias);
	        },
	        internalCal: function internalCal(distinct, isEnd) {
	            var threshold = this.threshold;
	            var baseNum = isEnd ? -0 : threshold * 2;
	            if (distinct > this.maxVal + baseNum) {
	                distinct = this.maxVal + baseNum;
	            }
	            if (distinct < -baseNum) {
	                distinct = -baseNum;
	            }
	
	            var base = parseInt(distinct / threshold);
	            var min = threshold * base;
	            var max = min + threshold;
	            var interval = max;
	            if (distinct - min <= max - distinct) {
	                interval = min;
	            }
	            distinct = isEnd ? interval : distinct;
	            if (distinct >= 0 && distinct <= this.maxVal) {
	                //选中的下表
	                var idx = interval / threshold;
	                this.highlight(this.curIndex, idx);
	                this.curIndex = idx;
	            }
	
	            this.$container.style.webkitTransform = 'rotateX(' + distinct + 'deg)';
	            this.showCal();
	            return distinct;
	        },
	        showCal: function showCal() {
	            //小于13全部显示
	            //if (this.list.length <= 13) return;
	            var min = this.curIndex - 5;
	            var max = this.curIndex + 5;
	            for (var i = 0, len = this.list.length; i < len; i++) {
	                this.$list[i].style.visibility = i >= min && i <= max ? 'visible' : 'hidden';
	            }
	        },
	        startInertiaScroll: function startInertiaScroll(res) {
	            var _this = this;
	
	            //缓动
	            var v = (res.y1 - res.y2) / res.spend;
	            var duration = Math.abs(v / 0.0006); //速度减到0
	            var dist = v * duration / 2; //最后执行的距离
	            var _distinct = this.distinct;
	            var minVal = -this.threshold * 2;
	            var maxVal = this.maxVal + this.threshold * 2;
	            var index = 0,
	                r = 0;
	            duration /= 5;
	            var _inertiaMove = function _inertiaMove() {
	                if (_this.animatePause) {
	                    _this.distinct = _distinct;
	                    return;
	                }
	                r = quart.easeOut(index++, _this.distinct, dist, duration);
	                _distinct = _this.internalCal(r);
	                if (index < duration && r >= minVal && r <= maxVal) {
	                    requestAnimationFrame(_inertiaMove);
	                } else {
	                    _this.animatePause = true;
	                    _this.distinct = _distinct;
	                    _this.end();
	                }
	            };
	            _inertiaMove();
	        },
	        highlight: function highlight(pidx, idx) {
	            var len = this.$list.length;
	            if (pidx < len) {
	                this.$list[pidx].classList.remove('highlight');
	            }
	            if (idx < len) {
	                this.$list[idx].classList.add('highlight');
	            }
	        },
	        reload: function reload() {
	            var _this2 = this;
	
	            //当数据变化时,重新加载数据
	            this.$container = this.$el.querySelector('.m-picker-list');
	            this.$list = this.$container.querySelectorAll('li');
	            this.highlight(this.curIndex, 0);
	            this.curIndex = 0;
	            this.distinct = this.curIndex * this.threshold;
	            this.showCal();
	            this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
	            this.$container.addEventListener("webkitTransitionEnd", function () {
	                _this2.$container.style.webkitTransition = null;
	            });
	        }
	    },
	    mounted: function mounted() {
	        var _this3 = this;
	
	        this.$nextTick(function () {
	            _this3.$options.ready.call(_this3);
	        });
	    },
	    ready: function ready() {
	        var _this4 = this;
	
	        this.curIndex = parseInt(this.curIdx);
	        if (this.list.length > 0) {
	            this.reload();
	        }
	
	        var touch = new Touch(this.$el);
	        touch.start();
	        touch.on('touch:start', function (res) {
	            //暂停执行缓动
	            _this4.animatePause = true;
	            res.e.preventDefault();
	        });
	
	        touch.on('touch:move', function (res) {
	            res.e.preventDefault();
	            _this4.move(res);
	        });
	
	        touch.on('touch:end', function (res) {
	            res.e.preventDefault();
	            if (Math.abs(res.y1 - res.y2) < _this4.threshold * 2) {
	                _this4.end();
	            } else {
	                _this4.animatePause = false;
	                _this4.startInertiaScroll(res);
	            }
	        });
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = module.exports = __webpack_require__(16);
	$.animate = __webpack_require__(17);

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*
	 * 常用动画算法,借用张鑫旭的Tween.js,
	 *
	 * linear：无缓动效果
	 * quadratic：二次方的缓动（t^2）
	 * cubic：三次方的缓动（t^3）
	 * quartic：四次方的缓动（t^4）
	 * quintic：五次方的缓动（t^5）
	 * Sinusoidal：正弦曲线的缓动（sin(t)）
	 * Exponential：指数曲线的缓动（2^t）
	 * Circular：圆形曲线的缓动（sqrt(1-t^2)）
	 * elastic：指数衰减的正弦曲线缓动
	 * 超过范围的三次方缓动（(s+1)*t^3 – s*t^2）
	 * 指数衰减的反弹缓动
	 *
	 * t: current time（当前时间）
	 * b: beginning value（初始值）
	 * c: change in value（变化量）
	 * d: duration（持续时间）
	 */
	var Tween = {
	    linear: function (t, b, c, d) {
	        return c * t / d + b;
	    },
	    quad: {
	        easeIn: function (t, b, c, d) {
	            return c * (t /= d) * t + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return -c * (t /= d) * (t - 2) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	            return -c / 2 * ((--t) * (t - 2) - 1) + b;
	        }
	    },
	    cubic: {
	        easeIn: function (t, b, c, d) {
	            return c * (t /= d) * t * t + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t + 1) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t + 2) + b;
	        }
	    },
	    quart: {
	        easeIn: function (t, b, c, d) {
	            return c * (t /= d) * t * t * t + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	        }
	    },
	    quint: {
	        easeIn: function (t, b, c, d) {
	            return c * (t /= d) * t * t * t * t + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	        }
	    },
	    sine: {
	        easeIn: function (t, b, c, d) {
	            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return c * Math.sin(t / d * (Math.PI / 2)) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	        }
	    },
	    expo: {
	        easeIn: function (t, b, c, d) {
	            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if (t == 0) return b;
	            if (t == d) return b + c;
	            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	        }
	    },
	    circ: {
	        easeIn: function (t, b, c, d) {
	            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	        },
	        easeOut: function (t, b, c, d) {
	            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	        },
	        easeInOut: function (t, b, c, d) {
	            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	        }
	    },
	    elastic: {
	        easeIn: function (t, b, c, d, a, p) {
	            var s;
	            if (t == 0) return b;
	            if ((t /= d) == 1) return b + c;
	            if (typeof p == "undefined") p = d * .3;
	            if (!a || a < Math.abs(c)) {
	                s = p / 4;
	                a = c;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        },
	        easeOut: function (t, b, c, d, a, p) {
	            var s;
	            if (t == 0) return b;
	            if ((t /= d) == 1) return b + c;
	            if (typeof p == "undefined") p = d * .3;
	            if (!a || a < Math.abs(c)) {
	                a = c;
	                s = p / 4;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
	        },
	        easeInOut: function (t, b, c, d, a, p) {
	            var s;
	            if (t == 0) return b;
	            if ((t /= d / 2) == 2) return b + c;
	            if (typeof p == "undefined") p = d * (.3 * 1.5);
	            if (!a || a < Math.abs(c)) {
	                a = c;
	                s = p / 4;
	            } else {
	                s = p / (2 * Math.PI) * Math.asin(c / a);
	            }
	            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	        }
	    },
	    back: {
	        easeIn: function (t, b, c, d, s) {
	            if (typeof s == "undefined") s = 1.70158;
	            return c * (t /= d) * t * ((s + 1) * t - s) + b;
	        },
	        easeOut: function (t, b, c, d, s) {
	            if (typeof s == "undefined") s = 1.70158;
	            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	        },
	        easeInOut: function (t, b, c, d, s) {
	            if (typeof s == "undefined") s = 1.70158;
	            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
	            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	        }
	    },
	    bounce: {
	        easeIn: function (t, b, c, d) {
	            return c - Tween.bounce.easeOut(d - t, 0, c, d) + b;
	        },
	        easeOut: function (t, b, c, d) {
	            if ((t /= d) < (1 / 2.75)) {
	                return c * (7.5625 * t * t) + b;
	            } else if (t < (2 / 2.75)) {
	                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
	            } else if (t < (2.5 / 2.75)) {
	                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
	            } else {
	                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	            }
	        },
	        easeInOut: function (t, b, c, d) {
	            if (t < d / 2) {
	                return Tween.bounce.easeIn(t * 2, 0, c, d) * .5 + b;
	            } else {
	                return Tween.bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	            }
	        }
	    }
	}
	
	module.exports = Tween;

/***/ },
/* 17 */
/***/ function(module, exports) {

	(function () {
	    var lastTime = 0;
	
	    window.requestAnimationFrame = window.requestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame ||
	        function (callback) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
	            var id = setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	
	    window.cancelAnimationFrame = window.cancelAnimationFrame ||
	        window.webkitCancelAnimationFrame ||
	        window.mozCancelAnimationFrame ||
	        function (id) {
	            clearTimeout(id);
	        };
	})();
	


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-picker\">\n  <div class=\"m-picker-inner\">\n    <div class=\"m-picker-rule\"></div>\n    <ul class=\"m-picker-list\">\n      <li v-for=\"(item, index) of list\" :key=\"index\"\n          :style=\"{transform: 'rotateX(' + (-threshold * index) +'deg) translateZ(90px)'}\">{{typeof item === 'string' ? item : item[label]}}\n      </li>\n    </ul>\n  </div>\n</div>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";module.exports=[[{name:"北京",code:"110000"},{name:"天津",code:"120000"},{name:"河北省",code:"130000"},{name:"山西省",code:"140000"},{name:"内蒙古自治区",code:"150000"},{name:"辽宁省",code:"210000"},{name:"吉林省",code:"220000"},{name:"黑龙江省",code:"230000"},{name:"上海",code:"310000"},{name:"江苏省",code:"320000"},{name:"浙江省",code:"330000"},{name:"安徽省",code:"340000"},{name:"福建省",code:"350000"},{name:"江西省",code:"360000"},{name:"山东省",code:"370000"},{name:"河南省",code:"410000"},{name:"湖北省",code:"420000"},{name:"湖南省",code:"430000"},{name:"广东省",code:"440000"},{name:"广西壮族自治区",code:"450000"},{name:"海南省",code:"460000"},{name:"重庆",code:"500000"},{name:"四川省",code:"510000"},{name:"贵州省",code:"520000"},{name:"云南省",code:"530000"},{name:"西藏自治区",code:"540000"},{name:"陕西省",code:"610000"},{name:"甘肃省",code:"620000"},{name:"青海省",code:"630000"},{name:"宁夏回族自治区",code:"640000"},{name:"新疆维吾尔自治区",code:"650000"},{name:"台湾省",code:"710000"},{name:"香港特别行政区",code:"810000"},{name:"澳门特别行政区",code:"820000"},{name:"海外",code:"990000"}],[[{name:"北京市",code:"110100"}],[{name:"天津市",code:"120100"}],[{name:"石家庄市",code:"130100"},{name:"唐山市",code:"130200"},{name:"秦皇岛市",code:"130300"},{name:"邯郸市",code:"130400"},{name:"邢台市",code:"130500"},{name:"保定市",code:"130600"},{name:"张家口市",code:"130700"},{name:"承德市",code:"130800"},{name:"沧州市",code:"130900"},{name:"廊坊市",code:"131000"},{name:"衡水市",code:"131100"}],[{name:"太原市",code:"140100"},{name:"大同市",code:"140200"},{name:"阳泉市",code:"140300"},{name:"长治市",code:"140400"},{name:"晋城市",code:"140500"},{name:"朔州市",code:"140600"},{name:"晋中市",code:"140700"},{name:"运城市",code:"140800"},{name:"忻州市",code:"140900"},{name:"临汾市",code:"141000"},{name:"吕梁市",code:"141100"}],[{name:"呼和浩特市",code:"150100"},{name:"包头市",code:"150200"},{name:"乌海市",code:"150300"},{name:"赤峰市",code:"150400"},{name:"通辽市",code:"150500"},{name:"鄂尔多斯市",code:"150600"},{name:"呼伦贝尔市",code:"150700"},{name:"巴彦淖尔市",code:"150800"},{name:"乌兰察布市",code:"150900"},{name:"兴安盟",code:"152200"},{name:"锡林郭勒盟",code:"152500"},{name:"阿拉善盟",code:"152900"}],[{name:"沈阳市",code:"210100"},{name:"大连市",code:"210200"},{name:"鞍山市",code:"210300"},{name:"抚顺市",code:"210400"},{name:"本溪市",code:"210500"},{name:"丹东市",code:"210600"},{name:"锦州市",code:"210700"},{name:"营口市",code:"210800"},{name:"阜新市",code:"210900"},{name:"辽阳市",code:"211000"},{name:"盘锦市",code:"211100"},{name:"铁岭市",code:"211200"},{name:"朝阳市",code:"211300"},{name:"葫芦岛市",code:"211400"}],[{name:"长春市",code:"220100"},{name:"吉林市",code:"220200"},{name:"四平市",code:"220300"},{name:"辽源市",code:"220400"},{name:"通化市",code:"220500"},{name:"白山市",code:"220600"},{name:"松原市",code:"220700"},{name:"白城市",code:"220800"},{name:"延边朝鲜族自治州",code:"222400"}],[{name:"哈尔滨市",code:"230100"},{name:"齐齐哈尔市",code:"230200"},{name:"鸡西市",code:"230300"},{name:"鹤岗市",code:"230400"},{name:"双鸭山市",code:"230500"},{name:"大庆市",code:"230600"},{name:"伊春市",code:"230700"},{name:"佳木斯市",code:"230800"},{name:"七台河市",code:"230900"},{name:"牡丹江市",code:"231000"},{name:"黑河市",code:"231100"},{name:"绥化市",code:"231200"},{name:"大兴安岭地区",code:"232700"}],[{name:"上海市",code:"310100"}],[{name:"南京市",code:"320100"},{name:"无锡市",code:"320200"},{name:"徐州市",code:"320300"},{name:"常州市",code:"320400"},{name:"苏州市",code:"320500"},{name:"南通市",code:"320600"},{name:"连云港市",code:"320700"},{name:"淮安市",code:"320800"},{name:"盐城市",code:"320900"},{name:"扬州市",code:"321000"},{name:"镇江市",code:"321100"},{name:"泰州市",code:"321200"},{name:"宿迁市",code:"321300"}],[{name:"杭州市",code:"330100"},{name:"宁波市",code:"330200"},{name:"温州市",code:"330300"},{name:"嘉兴市",code:"330400"},{name:"湖州市",code:"330500"},{name:"绍兴市",code:"330600"},{name:"金华市",code:"330700"},{name:"衢州市",code:"330800"},{name:"舟山市",code:"330900"},{name:"台州市",code:"331000"},{name:"丽水市",code:"331100"}],[{name:"合肥市",code:"340100"},{name:"芜湖市",code:"340200"},{name:"蚌埠市",code:"340300"},{name:"淮南市",code:"340400"},{name:"马鞍山市",code:"340500"},{name:"淮北市",code:"340600"},{name:"铜陵市",code:"340700"},{name:"安庆市",code:"340800"},{name:"黄山市",code:"341000"},{name:"滁州市",code:"341100"},{name:"阜阳市",code:"341200"},{name:"宿州市",code:"341300"},{name:"六安市",code:"341500"},{name:"亳州市",code:"341600"},{name:"池州市",code:"341700"},{name:"宣城市",code:"341800"}],[{name:"福州市",code:"350100"},{name:"厦门市",code:"350200"},{name:"莆田市",code:"350300"},{name:"三明市",code:"350400"},{name:"泉州市",code:"350500"},{name:"漳州市",code:"350600"},{name:"南平市",code:"350700"},{name:"龙岩市",code:"350800"},{name:"宁德市",code:"350900"}],[{name:"南昌市",code:"360100"},{name:"景德镇市",code:"360200"},{name:"萍乡市",code:"360300"},{name:"九江市",code:"360400"},{name:"新余市",code:"360500"},{name:"鹰潭市",code:"360600"},{name:"赣州市",code:"360700"},{name:"吉安市",code:"360800"},{name:"宜春市",code:"360900"},{name:"抚州市",code:"361000"},{name:"上饶市",code:"361100"}],[{name:"济南市",code:"370100"},{name:"青岛市",code:"370200"},{name:"淄博市",code:"370300"},{name:"枣庄市",code:"370400"},{name:"东营市",code:"370500"},{name:"烟台市",code:"370600"},{name:"潍坊市",code:"370700"},{name:"济宁市",code:"370800"},{name:"泰安市",code:"370900"},{name:"威海市",code:"371000"},{name:"日照市",code:"371100"},{name:"莱芜市",code:"371200"},{name:"临沂市",code:"371300"},{name:"德州市",code:"371400"},{name:"聊城市",code:"371500"},{name:"滨州市",code:"371600"},{name:"菏泽市",code:"371700"}],[{name:"郑州市",code:"410100"},{name:"开封市",code:"410200"},{name:"洛阳市",code:"410300"},{name:"平顶山市",code:"410400"},{name:"安阳市",code:"410500"},{name:"鹤壁市",code:"410600"},{name:"新乡市",code:"410700"},{name:"焦作市",code:"410800"},{name:"济源市",code:"410881"},{name:"濮阳市",code:"410900"},{name:"许昌市",code:"411000"},{name:"漯河市",code:"411100"},{name:"三门峡市",code:"411200"},{name:"南阳市",code:"411300"},{name:"商丘市",code:"411400"},{name:"信阳市",code:"411500"},{name:"周口市",code:"411600"},{name:"驻马店市",code:"411700"}],[{name:"武汉市",code:"420100"},{name:"黄石市",code:"420200"},{name:"十堰市",code:"420300"},{name:"宜昌市",code:"420500"},{name:"襄阳市",code:"420600"},{name:"鄂州市",code:"420700"},{name:"荆门市",code:"420800"},{name:"孝感市",code:"420900"},{name:"荆州市",code:"421000"},{name:"黄冈市",code:"421100"},{name:"咸宁市",code:"421200"},{name:"随州市",code:"421300"},{name:"恩施土家族苗族自治州",code:"422800"},{name:"仙桃市",code:"429004"},{name:"潜江市",code:"429005"},{name:"天门市",code:"429006"},{name:"神农架林区",code:"429021"}],[{name:"长沙市",code:"430100"},{name:"株洲市",code:"430200"},{name:"湘潭市",code:"430300"},{name:"衡阳市",code:"430400"},{name:"邵阳市",code:"430500"},{name:"岳阳市",code:"430600"},{name:"常德市",code:"430700"},{name:"张家界市",code:"430800"},{name:"益阳市",code:"430900"},{name:"郴州市",code:"431000"},{name:"永州市",code:"431100"},{name:"怀化市",code:"431200"},{name:"娄底市",code:"431300"},{name:"湘西土家族苗族自治州",code:"433100"}],[{name:"广州市",code:"440100"},{name:"韶关市",code:"440200"},{name:"深圳市",code:"440300"},{name:"珠海市",code:"440400"},{name:"汕头市",code:"440500"},{name:"佛山市",code:"440600"},{name:"江门市",code:"440700"},{name:"湛江市",code:"440800"},{name:"茂名市",code:"440900"},{name:"肇庆市",code:"441200"},{name:"惠州市",code:"441300"},{name:"梅州市",code:"441400"},{name:"汕尾市",code:"441500"},{name:"河源市",code:"441600"},{name:"阳江市",code:"441700"},{name:"清远市",code:"441800"},{name:"东莞市",code:"441900"},{name:"中山市",code:"442000"},{name:"潮州市",code:"445100"},{name:"揭阳市",code:"445200"},{name:"云浮市",code:"445300"}],[{name:"南宁市",code:"450100"},{name:"柳州市",code:"450200"},{name:"桂林市",code:"450300"},{name:"梧州市",code:"450400"},{name:"北海市",code:"450500"},{name:"防城港市",code:"450600"},{name:"钦州市",code:"450700"},{name:"贵港市",code:"450800"},{name:"玉林市",code:"450900"},{name:"百色市",code:"451000"},{name:"贺州市",code:"451100"},{name:"河池市",code:"451200"},{name:"来宾市",code:"451300"},{name:"崇左市",code:"451400"}],[{name:"海口市",code:"460100"},{name:"三亚市",code:"460200"},{name:"三沙市",code:"460300"},{name:"五指山市",code:"469001"},{name:"琼海市",code:"469002"},{name:"儋州市",code:"469003"},{name:"文昌市",code:"469005"},{name:"万宁市",code:"469006"},{name:"东方市",code:"469007"},{name:"定安县",code:"469025"},{name:"屯昌县",code:"469026"},{name:"澄迈县",code:"469027"},{name:"临高县",code:"469028"},{name:"白沙黎族自治县",code:"469030"},{name:"昌江黎族自治县",code:"469031"},{name:"乐东黎族自治县",code:"469033"},{name:"陵水黎族自治县",code:"469034"},{name:"保亭黎族苗族自治县",code:"469035"},{name:"琼中黎族苗族自治县",code:"469036"}],[{name:"重庆市",code:"500100"}],[{name:"成都市",code:"510100"},{name:"自贡市",code:"510300"},{name:"攀枝花市",code:"510400"},{name:"泸州市",code:"510500"},{name:"德阳市",code:"510600"},{name:"绵阳市",code:"510700"},{name:"广元市",code:"510800"},{name:"遂宁市",code:"510900"},{name:"内江市",code:"511000"},{name:"乐山市",code:"511100"},{name:"南充市",code:"511300"},{name:"眉山市",code:"511400"},{name:"宜宾市",code:"511500"},{name:"广安市",code:"511600"},{name:"达州市",code:"511700"},{name:"雅安市",code:"511800"},{name:"巴中市",code:"511900"},{name:"资阳市",code:"512000"},{name:"阿坝藏族羌族自治州",code:"513200"},{name:"甘孜藏族自治州",code:"513300"},{name:"凉山彝族自治州",code:"513400"}],[{name:"贵阳市",code:"520100"},{name:"六盘水市",code:"520200"},{name:"遵义市",code:"520300"},{name:"安顺市",code:"520400"},{name:"铜仁市",code:"522200"},{name:"黔西南布依族苗族自治州",code:"522300"},{name:"毕节市",code:"522400"},{name:"黔东南苗族侗族自治州",code:"522600"},{name:"黔南布依族苗族自治州",code:"522700"}],[{name:"昆明市",code:"530100"},{name:"曲靖市",code:"530300"},{name:"玉溪市",code:"530400"},{name:"保山市",code:"530500"},{name:"昭通市",code:"530600"},{name:"丽江市",code:"530700"},{name:"普洱市",code:"530800"},{name:"临沧市",code:"530900"},{name:"楚雄彝族自治州",code:"532300"},{name:"红河哈尼族彝族自治州",code:"532500"},{name:"文山壮族苗族自治州",code:"532600"},{name:"西双版纳傣族自治州",code:"532800"},{name:"大理白族自治州",code:"532900"},{name:"德宏傣族景颇族自治州",code:"533100"},{name:"怒江傈僳族自治州",code:"533300"},{name:"迪庆藏族自治州",code:"533400"}],[{name:"拉萨市",code:"540100"},{name:"昌都市",code:"542100"},{name:"山南地区",code:"542200"},{name:"日喀则市",code:"542300"},{name:"那曲地区",code:"542400"},{name:"阿里地区",code:"542500"},{name:"林芝地区",code:"542600"}],[{name:"西安市",code:"610100"},{name:"铜川市",code:"610200"},{name:"宝鸡市",code:"610300"},{name:"咸阳市",code:"610400"},{name:"渭南市",code:"610500"},{name:"延安市",code:"610600"},{name:"汉中市",code:"610700"},{name:"榆林市",code:"610800"},{name:"安康市",code:"610900"},{name:"商洛市",code:"611000"}],[{name:"兰州市",code:"620100"},{name:"嘉峪关市",code:"620200"},{name:"金昌市",code:"620300"},{name:"白银市",code:"620400"},{name:"天水市",code:"620500"},{name:"武威市",code:"620600"},{name:"张掖市",code:"620700"},{name:"平凉市",code:"620800"},{name:"酒泉市",code:"620900"},{name:"庆阳市",code:"621000"},{name:"定西市",code:"621100"},{name:"陇南市",code:"621200"},{name:"临夏回族自治州",code:"622900"},{name:"甘南藏族自治州",code:"623000"}],[{name:"西宁市",code:"630100"},{name:"海东市",code:"632100"},{name:"海北藏族自治州",code:"632200"},{name:"黄南藏族自治州",code:"632300"},{name:"海南藏族自治州",code:"632500"},{name:"果洛藏族自治州",code:"632600"},{name:"玉树藏族自治州",code:"632700"},{name:"海西蒙古族藏族自治州",code:"632800"}],[{name:"银川市",code:"640100"},{name:"石嘴山市",code:"640200"},{name:"吴忠市",code:"640300"},{name:"固原市",code:"640400"},{name:"中卫市",code:"640500"}],[{name:"乌鲁木齐市",code:"650100"},{name:"克拉玛依市",code:"650200"},{name:"吐鲁番地区",code:"652100"},{name:"哈密地区",code:"652200"},{name:"昌吉回族自治州",code:"652300"},{name:"博尔塔拉蒙古自治州",code:"652700"},{name:"巴音郭楞蒙古自治州",code:"652800"},{name:"阿克苏地区",code:"652900"},{name:"克孜勒苏柯尔克孜自治州",code:"653000"},{name:"喀什地区",code:"653100"},{name:"和田地区",code:"653200"},{name:"伊犁哈萨克自治州",code:"654000"},{name:"塔城地区",code:"654200"},{name:"阿勒泰地区",code:"654300"},{name:"石河子市",code:"659001"},{name:"阿拉尔市",code:"659002"},{name:"图木舒克市",code:"659003"},{name:"五家渠市",code:"659004"}],[{name:"台北市",code:"710100"},{name:"高雄市",code:"710200"},{name:"台南市",code:"710300"},{name:"台中市",code:"710400"},{name:"金门县",code:"710500"},{name:"南投县",code:"710600"},{name:"基隆市",code:"710700"},{name:"新竹市",code:"710800"},{name:"嘉义市",code:"710900"},{name:"新北市",code:"711100"},{name:"宜兰县",code:"711200"},{name:"新竹县",code:"711300"},{name:"桃园县",code:"711400"},{name:"苗栗县",code:"711500"},{name:"彰化县",code:"711700"},{name:"嘉义县",code:"711900"},{name:"云林县",code:"712100"},{name:"屏东县",code:"712400"},{name:"台东县",code:"712500"},{name:"花莲县",code:"712600"},{name:"澎湖县",code:"712700"},{name:"连江县",code:"712800"}],[{name:"香港岛",code:"810100"},{name:"九龙",code:"810200"},{name:"新界",code:"810300"}],[{name:"澳门半岛",code:"820100"},{name:"离岛",code:"820200"}],[{name:"海外",code:"990100"}]],[[[{name:"东城区",code:"110101"},{name:"西城区",code:"110102"},{name:"朝阳区",code:"110105"},{name:"丰台区",code:"110106"},{name:"石景山区",code:"110107"},{name:"海淀区",code:"110108"},{name:"门头沟区",code:"110109"},{name:"房山区",code:"110111"},{name:"通州区",code:"110112"},{name:"顺义区",code:"110113"},{name:"昌平区",code:"110114"},{name:"大兴区",code:"110115"},{name:"怀柔区",code:"110116"},{name:"平谷区",code:"110117"},{name:"密云县",code:"110228"},{name:"延庆县",code:"110229"}]],[[{name:"和平区",code:"120101"},{name:"河东区",code:"120102"},{name:"河西区",code:"120103"},{name:"南开区",code:"120104"},{name:"河北区",code:"120105"},{name:"红桥区",code:"120106"},{name:"东丽区",code:"120110"},{name:"西青区",code:"120111"},{name:"津南区",code:"120112"},{name:"北辰区",code:"120113"},{name:"武清区",code:"120114"},{name:"宝坻区",code:"120115"},{name:"宁河县",code:"120221"},{name:"静海县",code:"120223"},{name:"蓟县",code:"120225"},{name:"滨海新区",code:"120116"}]],[[{name:"长安区",code:"130102"},{name:"桥东区",code:"130103"},{name:"桥西区",code:"130104"},{name:"新华区",code:"130105"},{name:"井陉矿区",code:"130107"},{name:"裕华区",code:"130108"},{name:"井陉县",code:"130121"},{name:"正定县",code:"130123"},{name:"栾城区",code:"130124"},{name:"行唐县",code:"130125"},{name:"灵寿县",code:"130126"},{name:"高邑县",code:"130127"},{name:"深泽县",code:"130128"},{name:"赞皇县",code:"130129"},{name:"无极县",code:"130130"},{name:"平山县",code:"130131"},{name:"元氏县",code:"130132"},{name:"赵县",code:"130133"},{name:"辛集市",code:"130181"},{name:"藁城区",code:"130182"},{name:"晋州市",code:"130183"},{name:"新乐市",code:"130184"},{name:"鹿泉区",code:"130185"}],[{name:"路南区",code:"130202"},{name:"路北区",code:"130203"},{name:"古冶区",code:"130204"},{name:"开平区",code:"130205"},{name:"丰南区",code:"130207"},{name:"丰润区",code:"130208"},{name:"滦县",code:"130223"},{name:"滦南县",code:"130224"},{name:"乐亭县",code:"130225"},{name:"迁西县",code:"130227"},{name:"玉田县",code:"130229"},{name:"曹妃甸区",code:"130230"},{name:"遵化市",code:"130281"},{name:"迁安市",code:"130283"}],[{name:"海港区",code:"130302"},{name:"山海关区",code:"130303"},{name:"北戴河区",code:"130304"},{name:"青龙满族自治县",code:"130321"},{name:"昌黎县",code:"130322"},{name:"抚宁县",code:"130323"},{name:"卢龙县",code:"130324"}],[{name:"邯山区",code:"130402"},{name:"丛台区",code:"130403"},{name:"复兴区",code:"130404"},{name:"峰峰矿区",code:"130406"},{name:"邯郸县",code:"130421"},{name:"临漳县",code:"130423"},{name:"成安县",code:"130424"},{name:"大名县",code:"130425"},{name:"涉县",code:"130426"},{name:"磁县",code:"130427"},{name:"肥乡县",code:"130428"},{name:"永年县",code:"130429"},{name:"邱县",code:"130430"},{name:"鸡泽县",code:"130431"},{name:"广平县",code:"130432"},{name:"馆陶县",code:"130433"},{name:"魏县",code:"130434"},{name:"曲周县",code:"130435"},{name:"武安市",code:"130481"}],[{name:"桥东区",code:"130502"},{name:"桥西区",code:"130503"},{name:"邢台县",code:"130521"},{name:"临城县",code:"130522"},{name:"内丘县",code:"130523"},{name:"柏乡县",code:"130524"},{name:"隆尧县",code:"130525"},{name:"任县",code:"130526"},{name:"南和县",code:"130527"},{name:"宁晋县",code:"130528"},{name:"巨鹿县",code:"130529"},{name:"新河县",code:"130530"},{name:"广宗县",code:"130531"},{name:"平乡县",code:"130532"},{name:"威县",code:"130533"},{name:"清河县",code:"130534"},{name:"临西县",code:"130535"},{name:"南宫市",code:"130581"},{name:"沙河市",code:"130582"}],[{name:"新市区",code:"130602"},{name:"北市区",code:"130603"},{name:"南市区",code:"130604"},{name:"满城县",code:"130621"},{name:"清苑县",code:"130622"},{name:"涞水县",code:"130623"},{name:"阜平县",code:"130624"},{name:"徐水县",code:"130625"},{name:"定兴县",code:"130626"},{name:"唐县",code:"130627"},{name:"高阳县",code:"130628"},{name:"容城县",code:"130629"},{name:"涞源县",code:"130630"},{name:"望都县",code:"130631"},{name:"安新县",code:"130632"},{name:"易县",code:"130633"},{name:"曲阳县",code:"130634"},{name:"蠡县",code:"130635"},{name:"顺平县",code:"130636"},{name:"博野县",code:"130637"},{name:"雄县",code:"130638"},{name:"涿州市",code:"130681"},{name:"定州市",code:"130682"},{name:"安国市",code:"130683"},{name:"高碑店市",code:"130684"}],[{name:"桥东区",code:"130702"},{name:"桥西区",code:"130703"},{name:"宣化区",code:"130705"},{name:"下花园区",code:"130706"},{name:"宣化县",code:"130721"},{name:"张北县",code:"130722"},{name:"康保县",code:"130723"},{name:"沽源县",code:"130724"},{name:"尚义县",code:"130725"},{name:"蔚县",code:"130726"},{name:"阳原县",code:"130727"},{name:"怀安县",code:"130728"},{name:"万全县",code:"130729"},{name:"怀来县",code:"130730"},{name:"涿鹿县",code:"130731"},{name:"赤城县",code:"130732"},{name:"崇礼县",code:"130733"}],[{name:"双桥区",code:"130802"},{name:"双滦区",code:"130803"},{name:"鹰手营子矿区",code:"130804"},{name:"承德县",code:"130821"},{name:"兴隆县",code:"130822"},{name:"平泉县",code:"130823"},{name:"滦平县",code:"130824"},{name:"隆化县",code:"130825"},{name:"丰宁满族自治县",code:"130826"},{name:"宽城满族自治县",code:"130827"},{name:"围场满族蒙古族自治县",code:"130828"}],[{name:"新华区",code:"130902"},{name:"运河区",code:"130903"},{name:"沧县",code:"130921"},{name:"青县",code:"130922"},{name:"东光县",code:"130923"},{name:"海兴县",code:"130924"},{name:"盐山县",code:"130925"},{name:"肃宁县",code:"130926"},{name:"南皮县",code:"130927"},{name:"吴桥县",code:"130928"},{name:"献县",code:"130929"},{name:"孟村回族自治县",code:"130930"},{name:"泊头市",code:"130981"},{name:"任丘市",code:"130982"},{name:"黄骅市",code:"130983"},{name:"河间市",code:"130984"}],[{name:"安次区",code:"131002"},{name:"广阳区",code:"131003"},{name:"固安县",code:"131022"},{name:"永清县",code:"131023"},{name:"香河县",code:"131024"},{name:"大城县",code:"131025"},{name:"文安县",code:"131026"},{name:"大厂回族自治县",code:"131028"},{name:"霸州市",code:"131081"},{name:"三河市",code:"131082"}],[{name:"桃城区",code:"131102"},{name:"枣强县",code:"131121"},{name:"武邑县",code:"131122"},{name:"武强县",code:"131123"},{name:"饶阳县",code:"131124"},{name:"安平县",code:"131125"},{name:"故城县",code:"131126"},{name:"景县",code:"131127"},{name:"阜城县",code:"131128"},{name:"冀州市",code:"131181"},{name:"深州市",code:"131182"}]],[[{name:"小店区",code:"140105"},{name:"迎泽区",code:"140106"},{name:"杏花岭区",code:"140107"},{name:"尖草坪区",code:"140108"},{name:"万柏林区",code:"140109"},{name:"晋源区",code:"140110"},{name:"清徐县",code:"140121"},{name:"阳曲县",code:"140122"},{name:"娄烦县",code:"140123"},{name:"古交市",code:"140181"}],[{name:"城区",code:"140202"},{name:"矿区",code:"140203"},{name:"南郊区",code:"140211"},{name:"新荣区",code:"140212"},{name:"阳高县",code:"140221"},{name:"天镇县",code:"140222"},{name:"广灵县",code:"140223"},{name:"灵丘县",code:"140224"},{name:"浑源县",code:"140225"},{name:"左云县",code:"140226"},{name:"大同县",code:"140227"}],[{name:"城区",code:"140302"},{name:"矿区",code:"140303"},{name:"郊区",code:"140311"},{name:"平定县",code:"140321"},{name:"盂县",code:"140322"}],[{name:"长治县",code:"140421"},{name:"襄垣县",code:"140423"},{name:"屯留县",code:"140424"},{name:"平顺县",code:"140425"},{name:"黎城县",code:"140426"},{name:"壶关县",code:"140427"},{name:"长子县",code:"140428"},{name:"武乡县",code:"140429"},{name:"沁县",code:"140430"},{name:"沁源县",code:"140431"},{name:"潞城市",code:"140481"},{name:"城区",code:"140482"},{name:"郊区",code:"140483"}],[{name:"城区",code:"140502"},{name:"沁水县",code:"140521"},{name:"阳城县",code:"140522"},{name:"陵川县",code:"140524"},{name:"泽州县",code:"140525"},{name:"高平市",code:"140581"}],[{name:"朔城区",code:"140602"},{name:"平鲁区",code:"140603"},{name:"山阴县",code:"140621"},{name:"应县",code:"140622"},{name:"右玉县",code:"140623"},{name:"怀仁县",code:"140624"}],[{name:"榆次区",code:"140702"},{name:"榆社县",code:"140721"},{name:"左权县",code:"140722"},{name:"和顺县",code:"140723"},{name:"昔阳县",code:"140724"},{name:"寿阳县",code:"140725"},{name:"太谷县",code:"140726"},{name:"祁县",code:"140727"},{name:"平遥县",code:"140728"},{name:"灵石县",code:"140729"},{name:"介休市",code:"140781"}],[{name:"盐湖区",code:"140802"},{name:"临猗县",code:"140821"},{name:"万荣县",code:"140822"},{name:"闻喜县",code:"140823"},{name:"稷山县",code:"140824"},{name:"新绛县",code:"140825"},{name:"绛县",code:"140826"},{name:"垣曲县",code:"140827"},{name:"夏县",code:"140828"},{name:"平陆县",code:"140829"},{name:"芮城县",code:"140830"},{name:"永济市",code:"140881"},{name:"河津市",code:"140882"}],[{name:"忻府区",code:"140902"},{name:"定襄县",code:"140921"},{name:"五台县",code:"140922"},{name:"代县",code:"140923"},{name:"繁峙县",code:"140924"},{name:"宁武县",code:"140925"},{name:"静乐县",code:"140926"},{name:"神池县",code:"140927"},{name:"五寨县",code:"140928"},{name:"岢岚县",code:"140929"},{name:"河曲县",code:"140930"},{name:"保德县",code:"140931"},{name:"偏关县",code:"140932"},{name:"原平市",code:"140981"}],[{name:"尧都区",code:"141002"},{name:"曲沃县",code:"141021"},{name:"翼城县",code:"141022"},{name:"襄汾县",code:"141023"},{name:"洪洞县",code:"141024"},{name:"古县",code:"141025"},{name:"安泽县",code:"141026"},{name:"浮山县",code:"141027"},{name:"吉县",code:"141028"},{name:"乡宁县",code:"141029"},{name:"大宁县",code:"141030"},{name:"隰县",code:"141031"},{name:"永和县",code:"141032"},{name:"蒲县",code:"141033"},{name:"汾西县",code:"141034"},{name:"侯马市",code:"141081"},{name:"霍州市",code:"141082"}],[{name:"离石区",code:"141102"},{name:"文水县",code:"141121"},{name:"交城县",code:"141122"},{name:"兴县",code:"141123"},{name:"临县",code:"141124"},{name:"柳林县",code:"141125"},{name:"石楼县",code:"141126"},{name:"岚县",code:"141127"},{name:"方山县",code:"141128"},{name:"中阳县",code:"141129"},{name:"交口县",code:"141130"},{name:"孝义市",code:"141181"},{name:"汾阳市",code:"141182"}]],[[{name:"新城区",code:"150102"},{name:"回民区",code:"150103"},{name:"玉泉区",code:"150104"},{name:"赛罕区",code:"150105"},{name:"土默特左旗",code:"150121"},{name:"托克托县",code:"150122"},{name:"和林格尔县",code:"150123"},{name:"清水河县",code:"150124"},{name:"武川县",code:"150125"}],[{name:"东河区",code:"150202"},{name:"昆都仑区",code:"150203"},{name:"青山区",code:"150204"},{name:"石拐区",code:"150205"},{name:"白云鄂博矿区",code:"150206"},{name:"九原区",code:"150207"},{name:"土默特右旗",code:"150221"},{name:"固阳县",code:"150222"},{name:"达尔罕茂明安联合旗",code:"150223"}],[{name:"海勃湾区",code:"150302"},{name:"海南区",code:"150303"},{name:"乌达区",code:"150304"}],[{name:"红山区",code:"150402"},{name:"元宝山区",code:"150403"},{name:"松山区",code:"150404"},{name:"阿鲁科尔沁旗",code:"150421"},{name:"巴林左旗",code:"150422"},{name:"巴林右旗",code:"150423"},{name:"林西县",code:"150424"},{name:"克什克腾旗",code:"150425"},{name:"翁牛特旗",code:"150426"},{name:"喀喇沁旗",code:"150428"},{name:"宁城县",code:"150429"},{name:"敖汉旗",code:"150430"}],[{name:"科尔沁区",code:"150502"},{name:"科尔沁左翼中旗",code:"150521"},{name:"科尔沁左翼后旗",code:"150522"},{name:"开鲁县",code:"150523"},{name:"库伦旗",code:"150524"},{name:"奈曼旗",code:"150525"},{name:"扎鲁特旗",code:"150526"},{name:"霍林郭勒市",code:"150581"}],[{name:"东胜区",code:"150602"},{name:"达拉特旗",code:"150621"},{name:"准格尔旗",code:"150622"},{name:"鄂托克前旗",code:"150623"},{name:"鄂托克旗",code:"150624"},{name:"杭锦旗",code:"150625"},{name:"乌审旗",code:"150626"},{name:"伊金霍洛旗",code:"150627"}],[{name:"海拉尔区",code:"150702"},{name:"扎赉诺尔区",code:"150703"},{name:"阿荣旗",code:"150721"},{name:"莫力达瓦达斡尔族自治旗",code:"150722"},{name:"鄂伦春自治旗",code:"150723"},{name:"鄂温克族自治旗",code:"150724"},{name:"陈巴尔虎旗",code:"150725"},{name:"新巴尔虎左旗",code:"150726"},{name:"新巴尔虎右旗",code:"150727"},{name:"满洲里市",code:"150781"},{name:"牙克石市",code:"150782"},{name:"扎兰屯市",code:"150783"},{name:"额尔古纳市",code:"150784"},{name:"根河市",code:"150785"}],[{name:"临河区",code:"150802"},{name:"五原县",code:"150821"},{name:"磴口县",code:"150822"},{name:"乌拉特前旗",code:"150823"},{name:"乌拉特中旗",code:"150824"},{name:"乌拉特后旗",code:"150825"},{name:"杭锦后旗",code:"150826"}],[{name:"集宁区",code:"150902"},{name:"卓资县",code:"150921"},{name:"化德县",code:"150922"},{name:"商都县",code:"150923"},{name:"兴和县",code:"150924"},{name:"凉城县",code:"150925"},{name:"察哈尔右翼前旗",code:"150926"},{name:"察哈尔右翼中旗",code:"150927"},{name:"察哈尔右翼后旗",code:"150928"},{name:"四子王旗",code:"150929"},{name:"丰镇市",code:"150981"}],[{name:"乌兰浩特市",code:"152201"},{name:"阿尔山市",code:"152202"},{name:"科尔沁右翼前旗",code:"152221"},{name:"科尔沁右翼中旗",code:"152222"},{name:"扎赉特旗",code:"152223"},{name:"突泉县",code:"152224"}],[{name:"二连浩特市",code:"152501"},{name:"锡林浩特市",code:"152502"},{name:"阿巴嘎旗",code:"152522"},{name:"苏尼特左旗",code:"152523"},{name:"苏尼特右旗",code:"152524"},{name:"东乌珠穆沁旗",code:"152525"},{name:"西乌珠穆沁旗",code:"152526"},{name:"太仆寺旗",code:"152527"},{name:"镶黄旗",code:"152528"},{name:"正镶白旗",code:"152529"},{name:"正蓝旗",code:"152530"},{name:"多伦县",code:"152531"}],[{name:"阿拉善左旗",code:"152921"},{name:"阿拉善右旗",code:"152922"},{name:"额济纳旗",code:"152923"}]],[[{name:"和平区",code:"210102"},{name:"沈河区",code:"210103"},{name:"大东区",code:"210104"},{name:"皇姑区",code:"210105"},{name:"铁西区",code:"210106"},{name:"苏家屯区",code:"210111"},{name:"浑南区",code:"210112"},{name:"新城子区",code:"210113"},{name:"于洪区",code:"210114"},{name:"辽中县",code:"210122"},{name:"康平县",code:"210123"},{name:"法库县",code:"210124"},{name:"新民市",code:"210181"},{name:"沈北新区",code:"210184"}],[{name:"中山区",code:"210202"},{name:"西岗区",code:"210203"},{name:"沙河口区",code:"210204"},{name:"甘井子区",code:"210211"},{name:"旅顺口区",code:"210212"},{name:"金州区",code:"210213"},{name:"长海县",code:"210224"},{name:"瓦房店市",code:"210281"},{name:"普兰店市",code:"210282"},{name:"庄河市",code:"210283"}],[{name:"铁东区",code:"210302"},{name:"铁西区",code:"210303"},{name:"立山区",code:"210304"},{name:"千山区",code:"210311"},{name:"台安县",code:"210321"},{name:"岫岩满族自治县",code:"210323"},{name:"海城市",code:"210381"}],[{name:"新抚区",code:"210402"},{name:"东洲区",code:"210403"},{name:"望花区",code:"210404"},{name:"顺城区",code:"210411"},{name:"抚顺县",code:"210421"},{name:"新宾满族自治县",code:"210422"},{name:"清原满族自治县",code:"210423"}],[{name:"平山区",code:"210502"},{name:"溪湖区",code:"210503"},{name:"明山区",code:"210504"},{name:"南芬区",code:"210505"},{name:"本溪满族自治县",code:"210521"},{name:"桓仁满族自治县",code:"210522"}],[{name:"元宝区",code:"210602"},{name:"振兴区",code:"210603"},{name:"振安区",code:"210604"},{name:"宽甸满族自治县",code:"210624"},{name:"东港市",code:"210681"},{name:"凤城市",code:"210682"}],[{name:"古塔区",code:"210702"},{name:"凌河区",code:"210703"},{name:"太和区",code:"210711"},{name:"黑山县",code:"210726"},{name:"义县",code:"210727"},{name:"凌海市",code:"210781"},{name:"北镇市",code:"210782"}],[{name:"站前区",code:"210802"},{name:"西市区",code:"210803"},{name:"鲅鱼圈区",code:"210804"},{name:"老边区",code:"210811"},{name:"盖州市",code:"210881"},{name:"大石桥市",code:"210882"}],[{name:"海州区",code:"210902"},{name:"新邱区",code:"210903"},{name:"太平区",code:"210904"},{name:"清河门区",code:"210905"},{name:"细河区",code:"210911"},{name:"阜新蒙古族自治县",code:"210921"},{name:"彰武县",code:"210922"}],[{name:"白塔区",code:"211002"},{name:"文圣区",code:"211003"},{name:"宏伟区",code:"211004"},{name:"弓长岭区",code:"211005"},{name:"太子河区",code:"211011"},{name:"辽阳县",code:"211021"},{name:"灯塔市",code:"211081"}],[{name:"双台子区",code:"211102"},{name:"兴隆台区",code:"211103"},{name:"大洼县",code:"211121"},{name:"盘山县",code:"211122"}],[{name:"银州区",code:"211202"},{name:"清河区",code:"211204"},{name:"铁岭县",code:"211221"},{name:"西丰县",code:"211223"},{name:"昌图县",code:"211224"},{name:"调兵山市",code:"211281"},{name:"开原市",code:"211282"}],[{name:"双塔区",code:"211302"},{name:"龙城区",code:"211303"},{name:"朝阳县",code:"211321"},{name:"建平县",code:"211322"},{name:"喀喇沁左翼蒙古族自治县",code:"211324"},{name:"北票市",code:"211381"},{name:"凌源市",code:"211382"}],[{name:"连山区",code:"211402"},{name:"龙港区",code:"211403"},{name:"南票区",code:"211404"},{name:"绥中县",code:"211421"},{name:"建昌县",code:"211422"},{name:"兴城市",code:"211481"}]],[[{name:"南关区",code:"220102"},{name:"宽城区",code:"220103"},{name:"朝阳区",code:"220104"},{name:"二道区",code:"220105"},{name:"绿园区",code:"220106"},{name:"双阳区",code:"220112"},{name:"农安县",code:"220122"},{name:"九台区",code:"220181"},{name:"榆树市",code:"220182"},{name:"德惠市",code:"220183"}],[{name:"昌邑区",code:"220202"},{name:"龙潭区",code:"220203"},{name:"船营区",code:"220204"},{name:"丰满区",code:"220211"},{name:"永吉县",code:"220221"},{name:"蛟河市",code:"220281"},{name:"桦甸市",code:"220282"},{name:"舒兰市",code:"220283"},{name:"磐石市",code:"220284"}],[{name:"铁西区",code:"220302"},{name:"铁东区",code:"220303"},{name:"梨树县",code:"220322"},{name:"伊通满族自治县",code:"220323"},{name:"公主岭市",code:"220381"},{name:"双辽市",code:"220382"}],[{name:"龙山区",code:"220402"},{name:"西安区",code:"220403"},{name:"东丰县",code:"220421"},{name:"东辽县",code:"220422"}],[{name:"东昌区",code:"220502"},{name:"二道江区",code:"220503"},{name:"通化县",code:"220521"},{name:"辉南县",code:"220523"},{name:"柳河县",code:"220524"},{name:"梅河口市",code:"220581"},{name:"集安市",code:"220582"}],[{name:"浑江区",code:"220602"},{name:"抚松县",code:"220621"},{name:"靖宇县",code:"220622"},{name:"长白朝鲜族自治县",code:"220623"},{name:"江源区",code:"220625"},{name:"临江市",code:"220681"}],[{name:"宁江区",code:"220702"},{name:"前郭尔罗斯蒙古族自治县",code:"220721"},{name:"长岭县",code:"220722"},{name:"乾安县",code:"220723"},{name:"扶余市",code:"220724"}],[{name:"洮北区",code:"220802"},{name:"镇赉县",code:"220821"},{name:"通榆县",code:"220822"},{name:"洮南市",code:"220881"},{name:"大安市",code:"220882"}],[{name:"延吉市",code:"222401"},{name:"图们市",code:"222402"},{name:"敦化市",code:"222403"},{name:"珲春市",code:"222404"},{name:"龙井市",code:"222405"},{name:"和龙市",code:"222406"},{name:"汪清县",code:"222424"},{name:"安图县",code:"222426"}]],[[{name:"道里区",code:"230102"},{name:"南岗区",code:"230103"},{name:"道外区",code:"230104"},{name:"香坊区",code:"230106"},{name:"平房区",code:"230108"},{name:"松北区",code:"230109"},{name:"呼兰区",code:"230111"},{name:"依兰县",code:"230123"},{name:"方正县",code:"230124"},{name:"宾县",code:"230125"},{name:"巴彦县",code:"230126"},{name:"木兰县",code:"230127"},{name:"通河县",code:"230128"},{name:"延寿县",code:"230129"},{name:"阿城区",code:"230181"},{name:"双城区",code:"230182"},{name:"尚志市",code:"230183"},{name:"五常市",code:"230184"}],[{name:"龙沙区",code:"230202"},{name:"建华区",code:"230203"},{name:"铁锋区",code:"230204"},{name:"昂昂溪区",code:"230205"},{name:"富拉尔基区",code:"230206"},{name:"碾子山区",code:"230207"},{name:"梅里斯达斡尔族区",code:"230208"},{name:"龙江县",code:"230221"},{name:"依安县",code:"230223"},{name:"泰来县",code:"230224"},{name:"甘南县",code:"230225"},{name:"富裕县",code:"230227"},{name:"克山县",code:"230229"},{name:"克东县",code:"230230"},{name:"拜泉县",code:"230231"},{name:"讷河市",code:"230281"}],[{name:"鸡冠区",code:"230302"},{name:"恒山区",code:"230303"},{name:"滴道区",code:"230304"},{name:"梨树区",code:"230305"},{name:"城子河区",code:"230306"},{name:"麻山区",code:"230307"},{name:"鸡东县",code:"230321"},{name:"虎林市",code:"230381"},{name:"密山市",code:"230382"}],[{name:"向阳区",code:"230402"},{name:"工农区",code:"230403"},{name:"南山区",code:"230404"},{name:"兴安区",code:"230405"},{name:"东山区",code:"230406"},{name:"兴山区",code:"230407"},{name:"萝北县",code:"230421"},{name:"绥滨县",code:"230422"}],[{name:"尖山区",code:"230502"},{name:"岭东区",code:"230503"},{name:"四方台区",code:"230505"},{name:"宝山区",code:"230506"},{name:"集贤县",code:"230521"},{name:"友谊县",code:"230522"},{name:"宝清县",code:"230523"},{name:"饶河县",code:"230524"}],[{name:"萨尔图区",code:"230602"},{name:"龙凤区",code:"230603"},{name:"让胡路区",code:"230604"},{name:"红岗区",code:"230605"},{name:"大同区",code:"230606"},{name:"肇州县",code:"230621"},{name:"肇源县",code:"230622"},{name:"林甸县",code:"230623"},{name:"杜尔伯特蒙古族自治县",code:"230624"}],[{name:"伊春区",code:"230702"},{name:"南岔区",code:"230703"},{name:"友好区",code:"230704"},{name:"西林区",code:"230705"},{name:"翠峦区",code:"230706"},{name:"新青区",code:"230707"},{name:"美溪区",code:"230708"},{name:"金山屯区",code:"230709"},{name:"五营区",code:"230710"},{name:"乌马河区",code:"230711"},{name:"汤旺河区",code:"230712"},{name:"带岭区",code:"230713"},{name:"乌伊岭区",code:"230714"},{name:"红星区",code:"230715"},{name:"上甘岭区",code:"230716"},{name:"嘉荫县",code:"230722"},{name:"铁力市",code:"230781"}],[{name:"向阳区",code:"230803"},{name:"前进区",code:"230804"},{name:"东风区",code:"230805"},{name:"郊区",code:"230811"},{name:"桦南县",code:"230822"},{name:"桦川县",code:"230826"},{name:"汤原县",code:"230828"},{name:"抚远县",code:"230833"},{name:"同江市",code:"230881"},{name:"富锦市",code:"230882"}],[{name:"新兴区",code:"230902"},{name:"桃山区",code:"230903"},{name:"茄子河区",code:"230904"},{name:"勃利县",code:"230921"}],[{name:"东安区",code:"231002"},{name:"阳明区",code:"231003"},{name:"爱民区",code:"231004"},{name:"西安区",code:"231005"},{name:"东宁县",code:"231024"},{name:"林口县",code:"231025"},{name:"绥芬河市",code:"231081"},{name:"海林市",code:"231083"},{name:"宁安市",code:"231084"},{name:"穆棱市",code:"231085"}],[{name:"爱辉区",code:"231102"},{name:"嫩江县",code:"231121"},{name:"逊克县",code:"231123"},{name:"孙吴县",code:"231124"},{name:"北安市",code:"231181"},{name:"五大连池市",code:"231182"}],[{name:"北林区",code:"231202"},{name:"望奎县",code:"231221"},{name:"兰西县",code:"231222"},{name:"青冈县",code:"231223"},{name:"庆安县",code:"231224"},{name:"明水县",code:"231225"},{name:"绥棱县",code:"231226"},{name:"安达市",code:"231281"},{name:"肇东市",code:"231282"},{name:"海伦市",code:"231283"}],[{name:"松岭区",code:"232702"},{name:"新林区",code:"232703"},{name:"呼中区",code:"232704"},{name:"呼玛县",code:"232721"},{name:"塔河县",code:"232722"},{name:"漠河县",code:"232723"},{name:"加格达奇区",code:"232724"}]],[[{name:"黄浦区",code:"310101"},{name:"徐汇区",code:"310104"},{name:"长宁区",code:"310105"},{name:"静安区",code:"310106"},{name:"普陀区",code:"310107"},{name:"闸北区",code:"310108"},{name:"虹口区",code:"310109"},{name:"杨浦区",code:"310110"},{name:"闵行区",code:"310112"},{name:"宝山区",code:"310113"},{name:"嘉定区",code:"310114"},{name:"浦东新区",code:"310115"},{name:"金山区",code:"310116"},{name:"松江区",code:"310117"},{name:"青浦区",code:"310118"},{name:"奉贤区",code:"310120"},{name:"崇明县",code:"310230"}]],[[{name:"玄武区",code:"320102"},{name:"秦淮区",code:"320104"},{name:"建邺区",code:"320105"},{name:"鼓楼区",code:"320106"},{name:"浦口区",code:"320111"},{name:"栖霞区",code:"320113"},{name:"雨花台区",code:"320114"},{name:"江宁区",code:"320115"},{name:"六合区",code:"320116"},{name:"溧水区",code:"320124"},{name:"高淳区",code:"320125"}],[{name:"崇安区",code:"320202"},{name:"南长区",code:"320203"},{name:"北塘区",code:"320204"},{name:"锡山区",code:"320205"},{name:"惠山区",code:"320206"},{name:"滨湖区",code:"320211"},{name:"宜兴市",code:"320282"},{name:"江阴市",code:"320281"}],[{name:"鼓楼区",code:"320302"},{name:"云龙区",code:"320303"},{name:"贾汪区",code:"320305"},{name:"泉山区",code:"320311"},{name:"丰县",code:"320321"},{name:"沛县",code:"320322"},{name:"铜山区",code:"320323"},{name:"睢宁县",code:"320324"},{name:"新沂市",code:"320381"},{name:"邳州市",code:"320382"}],[{name:"天宁区",code:"320402"},{name:"钟楼区",code:"320404"},{name:"戚墅堰区",code:"320405"},{name:"新北区",code:"320411"},{name:"武进区",code:"320412"},{name:"溧阳市",code:"320481"},{name:"金坛市",code:"320482"}],[{name:"虎丘区",code:"320505"},{name:"吴中区",code:"320506"},{name:"相城区",code:"320507"},{name:"姑苏区",code:"320508"},{name:"常熟市",code:"320581"},{name:"张家港市",code:"320582"},{name:"昆山市",code:"320583"},{name:"吴江区",code:"320584"},{name:"太仓市",code:"320585"}],[{name:"崇川区",code:"320602"},{name:"港闸区",code:"320611"},{name:"通州区",code:"320612"},{name:"海安县",code:"320621"},{name:"如东县",code:"320623"},{name:"启东市",code:"320681"},{name:"如皋市",code:"320682"},{name:"海门市",code:"320684"}],[{name:"连云区",code:"320703"},{name:"新浦区",code:"320705"},{name:"海州区",code:"320706"},{name:"赣榆区",code:"320721"},{name:"东海县",code:"320722"},{name:"灌云县",code:"320723"},{name:"灌南县",code:"320724"}],[{name:"清河区",code:"320802"},{name:"淮安区",code:"320803"},{name:"淮阴区",code:"320804"},{name:"清浦区",code:"320811"},{name:"涟水县",code:"320826"},{name:"洪泽县",code:"320829"},{name:"盱眙县",code:"320830"},{name:"金湖县",code:"320831"}],[{name:"亭湖区",code:"320902"},{name:"盐都区",code:"320903"},{name:"响水县",code:"320921"},{name:"滨海县",code:"320922"},{name:"阜宁县",code:"320923"},{name:"射阳县",code:"320924"},{name:"建湖县",code:"320925"},{name:"东台市",code:"320981"},{name:"大丰市",code:"320982"}],[{name:"广陵区",code:"321002"},{name:"邗江区",code:"321003"},{name:"宝应县",code:"321023"},{name:"仪征市",code:"321081"},{name:"高邮市",code:"321084"},{name:"江都区",code:"321088"}],[{name:"京口区",code:"321102"},{name:"润州区",code:"321111"},{name:"丹徒区",code:"321112"},{name:"丹阳市",code:"321181"},{name:"扬中市",code:"321182"},{name:"句容市",code:"321183"}],[{name:"海陵区",code:"321202"},{name:"高港区",code:"321203"},{name:"兴化市",code:"321281"},{name:"靖江市",code:"321282"},{name:"泰兴市",code:"321283"},{name:"姜堰区",code:"321284"}],[{name:"宿城区",code:"321302"},{name:"宿豫区",code:"321311"},{name:"沭阳县",code:"321322"},{name:"泗阳县",code:"321323"},{name:"泗洪县",code:"321324"}],[]],[[{name:"上城区",code:"330102"},{name:"下城区",code:"330103"},{name:"江干区",code:"330104"},{name:"拱墅区",code:"330105"},{name:"西湖区",code:"330106"},{name:"滨江区",code:"330108"},{name:"萧山区",code:"330109"},{name:"余杭区",code:"330110"},{name:"桐庐县",code:"330122"},{name:"淳安县",code:"330127"},{name:"建德市",code:"330182"},{name:"富阳区",code:"330183"},{name:"临安市",code:"330185"}],[{name:"海曙区",code:"330203"},{name:"江东区",code:"330204"},{name:"江北区",code:"330205"},{name:"北仑区",code:"330206"},{name:"镇海区",code:"330211"},{name:"鄞州区",code:"330212"},{name:"象山县",code:"330225"},{name:"宁海县",code:"330226"},{name:"余姚市",code:"330281"},{name:"慈溪市",code:"330282"},{name:"奉化市",code:"330283"}],[{name:"鹿城区",code:"330302"},{name:"龙湾区",code:"330303"},{name:"瓯海区",code:"330304"},{name:"洞头县",code:"330322"},{name:"永嘉县",code:"330324"},{name:"平阳县",code:"330326"},{name:"苍南县",code:"330327"},{name:"文成县",code:"330328"},{name:"泰顺县",code:"330329"},{name:"瑞安市",code:"330381"},{name:"乐清市",code:"330382"}],[{name:"南湖区",code:"330402"},{name:"秀洲区",code:"330411"},{name:"嘉善县",code:"330421"},{name:"海盐县",code:"330424"},{name:"海宁市",code:"330481"},{name:"平湖市",code:"330482"},{name:"桐乡市",code:"330483"}],[{name:"吴兴区",code:"330502"},{name:"南浔区",code:"330503"},{name:"德清县",code:"330521"},{name:"长兴县",code:"330522"},{name:"安吉县",code:"330523"}],[{name:"越城区",code:"330602"},{name:"柯桥区",code:"330621"},{name:"新昌县",code:"330624"},{name:"诸暨市",code:"330681"},{name:"上虞区",code:"330682"},{name:"嵊州市",code:"330683"}],[{name:"婺城区",code:"330702"},{name:"金东区",code:"330703"},{name:"武义县",code:"330723"},{name:"浦江县",code:"330726"},{name:"磐安县",code:"330727"},{name:"兰溪市",code:"330781"},{name:"义乌市",code:"330782"},{name:"东阳市",code:"330783"},{name:"永康市",code:"330784"}],[{name:"柯城区",code:"330802"},{name:"衢江区",code:"330803"},{name:"常山县",code:"330822"},{name:"开化县",code:"330824"},{name:"龙游县",code:"330825"},{name:"江山市",code:"330881"}],[{name:"定海区",code:"330902"},{name:"普陀区",code:"330903"},{name:"岱山县",code:"330921"},{name:"嵊泗县",code:"330922"}],[{name:"椒江区",code:"331002"},{name:"黄岩区",code:"331003"},{name:"路桥区",code:"331004"},{name:"玉环县",code:"331021"},{name:"三门县",code:"331022"},{name:"天台县",code:"331023"},{name:"仙居县",code:"331024"},{name:"温岭市",code:"331081"},{name:"临海市",code:"331082"}],[{name:"莲都区",code:"331102"},{name:"青田县",code:"331121"},{name:"缙云县",code:"331122"},{name:"遂昌县",code:"331123"},{name:"松阳县",code:"331124"},{name:"云和县",code:"331125"},{name:"庆元县",code:"331126"},{name:"景宁畲族自治县",code:"331127"},{name:"龙泉市",code:"331181"}]],[[{name:"瑶海区",code:"340102"},{name:"庐阳区",code:"340103"},{name:"蜀山区",code:"340104"},{name:"包河区",code:"340111"},{name:"长丰县",code:"340121"},{name:"肥东县",code:"340122"},{name:"肥西县",code:"340123"},{name:"庐江县",code:"341421"},{name:"巢湖市",code:"341400"}],[{name:"镜湖区",code:"340202"},{name:"弋江区",code:"340203"},{name:"鸠江区",code:"340207"},{name:"三山区",code:"340208"},{name:"芜湖县",code:"340221"},{name:"繁昌县",code:"340222"},{name:"南陵县",code:"340223"},{name:"无为县",code:"341422"}],[{name:"龙子湖区",code:"340302"},{name:"蚌山区",code:"340303"},{name:"禹会区",code:"340304"},{name:"淮上区",code:"340311"},{name:"怀远县",code:"340321"},{name:"五河县",code:"340322"},{name:"固镇县",code:"340323"}],[{name:"大通区",code:"340402"},{name:"田家庵区",code:"340403"},{name:"谢家集区",code:"340404"},{name:"八公山区",code:"340405"},{name:"潘集区",code:"340406"},{name:"凤台县",code:"340421"}],[{name:"花山区",code:"340503"},{name:"雨山区",code:"340504"},{name:"博望区",code:"340506"},{name:"当涂县",code:"340521"},{name:"含山县",code:"341423"},{name:"和县",code:"341424"}],[{name:"杜集区",code:"340602"},{name:"相山区",code:"340603"},{name:"烈山区",code:"340604"},{name:"濉溪县",code:"340621"}],[{name:"铜官山区",code:"340702"},{name:"狮子山区",code:"340703"},{name:"郊区",code:"340711"},{name:"铜陵县",code:"340721"}],[{name:"迎江区",code:"340802"},{name:"大观区",code:"340803"},{name:"宜秀区",code:"340811"},{name:"怀宁县",code:"340822"},{name:"枞阳县",code:"340823"},{name:"潜山县",code:"340824"},{name:"太湖县",code:"340825"},{name:"宿松县",code:"340826"},{name:"望江县",code:"340827"},{name:"岳西县",code:"340828"},{name:"桐城市",code:"340881"}],[{name:"屯溪区",code:"341002"},{name:"黄山区",code:"341003"},{name:"徽州区",code:"341004"},{name:"歙县",code:"341021"},{name:"休宁县",code:"341022"},{name:"黟县",code:"341023"},{name:"祁门县",code:"341024"}],[{name:"琅琊区",code:"341102"},{name:"南谯区",code:"341103"},{name:"来安县",code:"341122"},{name:"全椒县",code:"341124"},{name:"定远县",code:"341125"},{name:"凤阳县",code:"341126"},{name:"天长市",code:"341181"},{name:"明光市",code:"341182"}],[{name:"颍州区",code:"341202"},{name:"颍东区",code:"341203"},{name:"颍泉区",code:"341204"},{name:"临泉县",code:"341221"},{name:"太和县",code:"341222"},{name:"阜南县",code:"341225"},{name:"颍上县",code:"341226"},{name:"界首市",code:"341282"}],[{name:"埇桥区",code:"341302"},{name:"砀山县",code:"341321"},{name:"萧县",code:"341322"},{name:"灵璧县",code:"341323"},{name:"泗县",code:"341324"}],[{name:"金安区",code:"341502"},{name:"裕安区",code:"341503"},{name:"寿县",code:"341521"},{name:"霍邱县",code:"341522"},{name:"舒城县",code:"341523"},{name:"金寨县",code:"341524"},{name:"霍山县",code:"341525"}],[{name:"谯城区",code:"341602"},{name:"涡阳县",code:"341621"},{name:"蒙城县",code:"341622"},{name:"利辛县",code:"341623"}],[{name:"贵池区",code:"341702"},{name:"东至县",code:"341721"},{name:"石台县",code:"341722"},{name:"青阳县",code:"341723"}],[{name:"宣州区",code:"341802"},{name:"郎溪县",code:"341821"},{name:"广德县",code:"341822"},{name:"泾县",code:"341823"},{name:"绩溪县",code:"341824"},{name:"旌德县",code:"341825"},{name:"宁国市",code:"341881"}]],[[{name:"鼓楼区",code:"350102"},{name:"台江区",code:"350103"},{name:"仓山区",code:"350104"},{name:"马尾区",code:"350105"},{name:"晋安区",code:"350111"},{name:"闽侯县",code:"350121"},{name:"连江县",code:"350122"},{name:"罗源县",code:"350123"},{name:"闽清县",code:"350124"},{name:"永泰县",code:"350125"},{name:"平潭县",code:"350128"},{name:"福清市",code:"350181"},{name:"长乐市",code:"350182"}],[{name:"思明区",code:"350203"},{name:"海沧区",code:"350205"},{name:"湖里区",code:"350206"},{name:"集美区",code:"350211"},{name:"同安区",code:"350212"},{name:"翔安区",code:"350213"}],[{name:"城厢区",code:"350302"},{name:"涵江区",code:"350303"},{name:"荔城区",code:"350304"},{name:"秀屿区",code:"350305"},{name:"仙游县",code:"350322"}],[{name:"梅列区",code:"350402"},{name:"三元区",code:"350403"},{name:"明溪县",code:"350421"},{name:"清流县",code:"350423"},{name:"宁化县",code:"350424"},{name:"大田县",code:"350425"},{name:"尤溪县",code:"350426"},{name:"沙县",code:"350427"},{name:"将乐县",code:"350428"},{name:"泰宁县",code:"350429"},{name:"建宁县",code:"350430"},{name:"永安市",code:"350481"}],[{name:"鲤城区",code:"350502"},{name:"丰泽区",code:"350503"},{name:"洛江区",code:"350504"},{name:"泉港区",code:"350505"},{name:"惠安县",code:"350521"},{name:"安溪县",code:"350524"},{name:"永春县",code:"350525"},{name:"德化县",code:"350526"},{name:"金门县",code:"350527"},{name:"石狮市",code:"350581"},{name:"晋江市",code:"350582"},{name:"南安市",code:"350583"}],[{name:"芗城区",code:"350602"},{name:"龙文区",code:"350603"},{name:"云霄县",code:"350622"},{name:"漳浦县",code:"350623"},{name:"诏安县",code:"350624"},{name:"长泰县",code:"350625"},{name:"东山县",code:"350626"},{name:"南靖县",code:"350627"},{name:"平和县",code:"350628"},{name:"华安县",code:"350629"},{name:"龙海市",code:"350681"}],[{name:"延平区",code:"350702"},{name:"顺昌县",code:"350721"},{name:"浦城县",code:"350722"},{name:"光泽县",code:"350723"},{name:"松溪县",code:"350724"},{name:"政和县",code:"350725"},{name:"邵武市",code:"350781"},{name:"武夷山市",code:"350782"},{name:"建瓯市",code:"350783"},{name:"建阳区",code:"350784"}],[{name:"新罗区",code:"350802"},{name:"长汀县",code:"350821"},{name:"永定区",code:"350822"},{name:"上杭县",code:"350823"},{name:"武平县",code:"350824"},{name:"连城县",code:"350825"},{name:"漳平市",code:"350881"}],[{name:"蕉城区",code:"350902"},{name:"霞浦县",code:"350921"},{name:"古田县",code:"350922"},{name:"屏南县",code:"350923"},{name:"寿宁县",code:"350924"},{name:"周宁县",code:"350925"},{name:"柘荣县",code:"350926"},{name:"福安市",code:"350981"},{name:"福鼎市",code:"350982"}]],[[{name:"东湖区",code:"360102"},{name:"西湖区",code:"360103"},{name:"青云谱区",code:"360104"},{name:"湾里区",code:"360105"},{name:"青山湖区",code:"360111"},{name:"南昌县",code:"360121"},{name:"新建县",code:"360122"},{name:"安义县",code:"360123"},{name:"进贤县",code:"360124"}],[{name:"昌江区",code:"360202"},{name:"珠山区",code:"360203"},{name:"浮梁县",code:"360222"},{name:"乐平市",code:"360281"}],[{name:"安源区",code:"360302"},{name:"湘东区",code:"360313"},{name:"莲花县",code:"360321"},{name:"上栗县",code:"360322"},{name:"芦溪县",code:"360323"}],[{name:"庐山区",code:"360402"},{name:"浔阳区",code:"360403"},{name:"九江县",code:"360421"},{name:"武宁县",code:"360423"},{name:"修水县",code:"360424"},{name:"永修县",code:"360425"},{name:"德安县",code:"360426"},{name:"星子县",code:"360427"},{name:"都昌县",code:"360428"},{name:"湖口县",code:"360429"},{name:"彭泽县",code:"360430"},{name:"瑞昌市",code:"360481"},{name:"共青城市",code:"360483"}],[{name:"渝水区",code:"360502"},{name:"分宜县",code:"360521"}],[{name:"月湖区",code:"360602"},{name:"余江县",code:"360622"},{name:"贵溪市",code:"360681"}],[{name:"章贡区",code:"360702"},{name:"赣县",code:"360721"},{name:"信丰县",code:"360722"},{name:"大余县",code:"360723"},{name:"上犹县",code:"360724"},{name:"崇义县",code:"360725"},{name:"安远县",code:"360726"},{name:"龙南县",code:"360727"},{name:"定南县",code:"360728"},{name:"全南县",code:"360729"},{name:"宁都县",code:"360730"},{name:"于都县",code:"360731"},{name:"兴国县",code:"360732"},{name:"会昌县",code:"360733"},{name:"寻乌县",code:"360734"},{name:"石城县",code:"360735"},{name:"瑞金市",code:"360781"},{name:"南康区",code:"360782"}],[{name:"吉州区",code:"360802"},{name:"青原区",code:"360803"},{name:"吉安县",code:"360821"},{name:"吉水县",code:"360822"},{name:"峡江县",code:"360823"},{name:"新干县",code:"360824"},{name:"永丰县",code:"360825"},{name:"泰和县",code:"360826"},{name:"遂川县",code:"360827"},{name:"万安县",code:"360828"},{name:"安福县",code:"360829"},{name:"永新县",code:"360830"},{name:"井冈山市",code:"360881"}],[{name:"袁州区",code:"360902"},{name:"奉新县",code:"360921"},{name:"万载县",code:"360922"},{name:"上高县",code:"360923"},{name:"宜丰县",code:"360924"},{name:"靖安县",code:"360925"},{name:"铜鼓县",code:"360926"},{name:"丰城市",code:"360981"},{name:"樟树市",code:"360982"},{name:"高安市",code:"360983"}],[{name:"临川区",code:"361002"},{name:"南城县",code:"361021"},{name:"黎川县",code:"361022"},{name:"南丰县",code:"361023"},{name:"崇仁县",code:"361024"},{name:"乐安县",code:"361025"},{name:"宜黄县",code:"361026"},{name:"金溪县",code:"361027"},{name:"资溪县",code:"361028"},{name:"东乡县",code:"361029"},{name:"广昌县",code:"361030"}],[{name:"信州区",code:"361102"},{name:"上饶县",code:"361121"},{name:"广丰县",code:"361122"},{name:"玉山县",code:"361123"},{name:"铅山县",code:"361124"},{name:"横峰县",code:"361125"},{name:"弋阳县",code:"361126"},{name:"余干县",code:"361127"},{name:"鄱阳县",code:"361128"},{name:"万年县",code:"361129"},{name:"婺源县",code:"361130"},{name:"德兴市",code:"361181"}]],[[{name:"历下区",code:"370102"},{name:"市中区",code:"370103"},{name:"槐荫区",code:"370104"},{name:"天桥区",code:"370105"},{name:"历城区",code:"370112"},{name:"长清区",code:"370113"},{name:"平阴县",code:"370124"},{name:"济阳县",code:"370125"},{name:"商河县",code:"370126"},{name:"章丘市",code:"370181"}],[{name:"市南区",code:"370202"},{name:"市北区",code:"370203"},{name:"黄岛区",code:"370211"},{name:"崂山区",code:"370212"},{name:"李沧区",code:"370213"},{name:"城阳区",code:"370214"},{name:"胶州市",code:"370281"},{name:"即墨市",code:"370282"},{name:"平度市",code:"370283"},{name:"莱西市",code:"370285"}],[{name:"淄川区",code:"370302"},{name:"张店区",code:"370303"},{name:"博山区",code:"370304"},{name:"临淄区",code:"370305"},{name:"周村区",code:"370306"},{name:"桓台县",code:"370321"},{name:"高青县",code:"370322"},{name:"沂源县",code:"370323"}],[{name:"市中区",code:"370402"},{name:"薛城区",code:"370403"},{name:"峄城区",code:"370404"},{name:"台儿庄区",code:"370405"},{name:"山亭区",code:"370406"},{name:"滕州市",code:"370481"}],[{name:"东营区",code:"370502"},{name:"河口区",code:"370503"},{name:"垦利县",code:"370521"},{name:"利津县",code:"370522"},{name:"广饶县",code:"370523"}],[{name:"芝罘区",code:"370602"},{name:"福山区",code:"370611"},{name:"牟平区",code:"370612"},{name:"莱山区",code:"370613"},{name:"长岛县",code:"370634"},{name:"龙口市",code:"370681"},{name:"莱阳市",code:"370682"},{name:"莱州市",code:"370683"},{name:"蓬莱市",code:"370684"},{name:"招远市",code:"370685"},{name:"栖霞市",code:"370686"},{name:"海阳市",code:"370687"}],[{name:"潍城区",code:"370702"},{name:"寒亭区",code:"370703"},{name:"坊子区",code:"370704"},{name:"奎文区",code:"370705"},{name:"临朐县",code:"370724"},{name:"昌乐县",code:"370725"},{name:"青州市",code:"370781"},{name:"诸城市",code:"370782"},{name:"寿光市",code:"370783"},{name:"安丘市",code:"370784"},{name:"高密市",code:"370785"},{name:"昌邑市",code:"370786"}],[{name:"市中区",code:"370802"},{name:"任城区",code:"370811"},{name:"微山县",code:"370826"},{name:"鱼台县",code:"370827"},{name:"金乡县",code:"370828"},{name:"嘉祥县",code:"370829"},{name:"汶上县",code:"370830"},{name:"泗水县",code:"370831"},{name:"梁山县",code:"370832"},{name:"曲阜市",code:"370881"},{name:"兖州区",code:"370882"},{name:"邹城市",code:"370883"}],[{name:"泰山区",code:"370902"},{name:"岱岳区",code:"370903"},{name:"宁阳县",code:"370921"},{name:"东平县",code:"370923"},{name:"新泰市",code:"370982"},{name:"肥城市",code:"370983"}],[{name:"环翠区",code:"371002"},{name:"文登区",code:"371081"},{name:"荣成市",code:"371082"},{name:"乳山市",code:"371083"}],[{name:"东港区",code:"371102"},{name:"岚山区",code:"371103"},{name:"五莲县",code:"371121"},{name:"莒县",code:"371122"}],[{name:"莱城区",code:"371202"},{name:"钢城区",code:"371203"}],[{name:"兰山区",code:"371302"},{name:"罗庄区",code:"371311"},{name:"河东区",code:"371312"},{name:"沂南县",code:"371321"},{name:"郯城县",code:"371322"},{name:"沂水县",code:"371323"},{name:"兰陵县",code:"371324"},{name:"费县",code:"371325"},{name:"平邑县",code:"371326"},{name:"莒南县",code:"371327"},{name:"蒙阴县",code:"371328"},{name:"临沭县",code:"371329"}],[{name:"德城区",code:"371402"},{name:"陵城区",code:"371421"},{name:"宁津县",code:"371422"},{name:"庆云县",code:"371423"},{name:"临邑县",code:"371424"},{name:"齐河县",code:"371425"},{name:"平原县",code:"371426"},{name:"夏津县",code:"371427"},{name:"武城县",code:"371428"},{name:"乐陵市",code:"371481"},{name:"禹城市",code:"371482"}],[{name:"东昌府区",code:"371502"},{name:"阳谷县",code:"371521"},{name:"莘县",code:"371522"},{name:"茌平县",code:"371523"},{name:"东阿县",code:"371524"},{name:"冠县",code:"371525"},{name:"高唐县",code:"371526"},{name:"临清市",code:"371581"}],[{name:"滨城区",code:"371602"},{name:"惠民县",code:"371621"},{name:"阳信县",code:"371622"},{name:"无棣县",code:"371623"},{name:"沾化区",code:"371624"},{name:"博兴县",code:"371625"},{name:"邹平县",code:"371626"}],[{name:"牡丹区",code:"371702"},{name:"曹县",code:"371721"},{name:"单县",code:"371722"},{name:"成武县",code:"371723"},{name:"巨野县",code:"371724"},{name:"郓城县",code:"371725"},{name:"鄄城县",code:"371726"},{name:"定陶县",code:"371727"},{name:"东明县",code:"371728"}]],[[{name:"中原区",code:"410102"},{name:"二七区",code:"410103"},{name:"管城回族区",code:"410104"},{name:"金水区",code:"410105"},{name:"上街区",code:"410106"},{name:"惠济区",code:"410108"},{name:"中牟县",code:"410122"},{name:"巩义市",code:"410181"},{name:"荥阳市",code:"410182"},{name:"新密市",code:"410183"},{name:"新郑市",code:"410184"},{name:"登封市",code:"410185"}],[{name:"龙亭区",code:"410202"},{name:"顺河回族区",code:"410203"},{name:"鼓楼区",code:"410204"},{name:"禹王台区",code:"410205"},{name:"金明区",code:"410211"},{name:"杞县",code:"410221"},{name:"通许县",code:"410222"},{name:"尉氏县",code:"410223"},{name:"祥符区",code:"410224"},{name:"兰考县",code:"410225"}],[{name:"老城区",code:"410302"},{name:"西工区",code:"410303"},{name:"瀍河回族区",code:"410304"},{name:"涧西区",code:"410305"},{name:"吉利区",code:"410306"},{name:"洛龙区",code:"410307"},{name:"孟津县",code:"410322"},{name:"新安县",code:"410323"},{name:"栾川县",code:"410324"},{name:"嵩县",code:"410325"},{name:"汝阳县",code:"410326"},{name:"宜阳县",code:"410327"},{name:"洛宁县",code:"410328"},{name:"伊川县",code:"410329"},{name:"偃师市",code:"410381"}],[{name:"新华区",code:"410402"},{name:"卫东区",code:"410403"},{name:"石龙区",code:"410404"},{name:"湛河区",code:"410411"},{name:"宝丰县",code:"410421"},{name:"叶县",code:"410422"},{name:"鲁山县",code:"410423"},{name:"郏县",code:"410425"},{name:"舞钢市",code:"410481"},{name:"汝州市",code:"410482"}],[{name:"文峰区",code:"410502"},{name:"北关区",code:"410503"},{name:"殷都区",code:"410505"},{name:"龙安区",code:"410506"},{name:"安阳县",code:"410522"},{name:"汤阴县",code:"410523"},{name:"滑县",code:"410526"},{name:"内黄县",code:"410527"},{name:"林州市",code:"410581"}],[{name:"鹤山区",code:"410602"},{name:"山城区",code:"410603"},{name:"淇滨区",code:"410611"},{name:"浚县",code:"410621"},{name:"淇县",code:"410622"}],[{name:"红旗区",code:"410702"},{name:"卫滨区",code:"410703"},{name:"凤泉区",code:"410704"},{name:"牧野区",code:"410711"},{name:"新乡县",code:"410721"},{name:"获嘉县",code:"410724"},{name:"原阳县",code:"410725"},{name:"延津县",code:"410726"},{name:"封丘县",code:"410727"},{name:"长垣县",code:"410728"},{name:"卫辉市",code:"410781"},{name:"辉县市",code:"410782"}],[{name:"解放区",code:"410802"},{name:"中站区",code:"410803"},{name:"马村区",code:"410804"},{name:"山阳区",code:"410811"},{name:"修武县",code:"410821"},{name:"博爱县",code:"410822"},{name:"武陟县",code:"410823"},{name:"温县",code:"410825"},{name:"沁阳市",code:"410882"},{name:"孟州市",code:"410883"}],[{name:"济源市",code:"410885"}],[{name:"华龙区",code:"410902"},{name:"清丰县",code:"410922"},{name:"南乐县",code:"410923"},{name:"范县",code:"410926"},{name:"台前县",code:"410927"},{name:"濮阳县",code:"410928"}],[{name:"魏都区",code:"411002"},{name:"许昌县",code:"411023"},{name:"鄢陵县",code:"411024"},{name:"襄城县",code:"411025"},{name:"禹州市",code:"411081"},{name:"长葛市",code:"411082"}],[{name:"源汇区",code:"411102"},{name:"郾城区",code:"411103"},{name:"召陵区",code:"411104"},{name:"舞阳县",code:"411121"},{name:"临颍县",code:"411122"}],[{name:"湖滨区",code:"411202"},{name:"渑池县",code:"411221"},{name:"陕县",code:"411222"},{name:"卢氏县",code:"411224"},{name:"义马市",code:"411281"},{name:"灵宝市",code:"411282"}],[{name:"宛城区",code:"411302"},{name:"卧龙区",code:"411303"},{name:"南召县",code:"411321"},{name:"方城县",code:"411322"},{name:"西峡县",code:"411323"},{name:"镇平县",code:"411324"},{name:"内乡县",code:"411325"},{name:"淅川县",code:"411326"},{name:"社旗县",code:"411327"},{name:"唐河县",code:"411328"},{name:"新野县",code:"411329"},{name:"桐柏县",code:"411330"},{name:"邓州市",code:"411381"}],[{name:"梁园区",code:"411402"},{name:"睢阳区",code:"411403"},{name:"民权县",code:"411421"},{name:"睢县",code:"411422"},{name:"宁陵县",code:"411423"},{name:"柘城县",code:"411424"},{name:"虞城县",code:"411425"},{name:"夏邑县",code:"411426"},{name:"永城市",code:"411481"}],[{name:"浉河区",code:"411502"},{name:"平桥区",code:"411503"},{name:"罗山县",code:"411521"},{name:"光山县",code:"411522"},{name:"新县",code:"411523"},{name:"商城县",code:"411524"},{name:"固始县",code:"411525"},{name:"潢川县",code:"411526"},{name:"淮滨县",code:"411527"},{name:"息县",code:"411528"}],[{name:"川汇区",code:"411602"},{name:"扶沟县",code:"411621"},{name:"西华县",code:"411622"},{name:"商水县",code:"411623"},{name:"沈丘县",code:"411624"},{name:"郸城县",code:"411625"},{name:"淮阳县",code:"411626"},{name:"太康县",code:"411627"},{name:"鹿邑县",code:"411628"},{name:"项城市",code:"411681"}],[{name:"驿城区",code:"411702"},{name:"西平县",code:"411721"},{name:"上蔡县",code:"411722"},{name:"平舆县",code:"411723"},{name:"正阳县",code:"411724"},{name:"确山县",code:"411725"},{name:"泌阳县",code:"411726"},{name:"汝南县",code:"411727"},{name:"遂平县",code:"411728"},{name:"新蔡县",code:"411729"}]],[[{name:"江岸区",code:"420102"},{name:"江汉区",code:"420103"},{name:"硚口区",code:"420104"},{name:"汉阳区",code:"420105"},{name:"武昌区",code:"420106"},{name:"青山区",code:"420107"},{name:"洪山区",code:"420111"},{name:"东西湖区",code:"420112"},{name:"汉南区",code:"420113"},{name:"蔡甸区",code:"420114"},{name:"江夏区",code:"420115"},{name:"黄陂区",code:"420116"},{name:"新洲区",code:"420117"}],[{name:"黄石港区",code:"420202"},{name:"西塞山区",code:"420203"},{name:"下陆区",code:"420204"},{name:"铁山区",code:"420205"},{name:"阳新县",code:"420222"},{name:"大冶市",code:"420281"}],[{name:"茅箭区",code:"420302"},{name:"张湾区",code:"420303"},{name:"郧阳区",code:"420321"},{name:"郧西县",code:"420322"},{name:"竹山县",code:"420323"},{name:"竹溪县",code:"420324"},{name:"房县",code:"420325"},{name:"丹江口市",code:"420381"}],[{name:"西陵区",code:"420502"},{name:"伍家岗区",code:"420503"},{name:"点军区",code:"420504"},{name:"猇亭区",code:"420505"},{name:"夷陵区",code:"420506"},{name:"远安县",code:"420525"},{name:"兴山县",code:"420526"},{name:"秭归县",code:"420527"},{name:"长阳土家族自治县",code:"420528"},{name:"五峰土家族自治县",code:"420529"},{name:"宜都市",code:"420581"},{name:"当阳市",code:"420582"},{name:"枝江市",code:"420583"}],[{name:"襄城区",code:"420602"},{name:"樊城区",code:"420606"},{name:"襄州区",code:"420607"},{name:"南漳县",code:"420624"},{name:"谷城县",code:"420625"},{name:"保康县",code:"420626"},{name:"老河口市",code:"420682"},{name:"枣阳市",code:"420683"},{name:"宜城市",code:"420684"}],[{name:"梁子湖区",code:"420702"},{name:"华容区",code:"420703"},{name:"鄂城区",code:"420704"}],[{name:"东宝区",code:"420802"},{name:"掇刀区",code:"420804"},{name:"京山县",code:"420821"},{name:"沙洋县",code:"420822"},{name:"钟祥市",code:"420881"}],[{name:"孝南区",code:"420902"},{name:"孝昌县",code:"420921"},{name:"大悟县",code:"420922"},{name:"云梦县",code:"420923"},{name:"应城市",code:"420981"},{name:"安陆市",code:"420982"},{name:"汉川市",code:"420984"}],[{name:"沙市区",code:"421002"},{name:"荆州区",code:"421003"},{name:"公安县",code:"421022"},{name:"监利县",code:"421023"},{name:"江陵县",code:"421024"},{name:"石首市",code:"421081"},{name:"洪湖市",code:"421083"},{name:"松滋市",code:"421087"}],[{name:"黄州区",code:"421102"},{name:"团风县",code:"421121"},{name:"红安县",code:"421122"},{name:"罗田县",code:"421123"},{name:"英山县",code:"421124"},{name:"浠水县",code:"421125"},{name:"蕲春县",code:"421126"},{name:"黄梅县",code:"421127"},{name:"麻城市",code:"421181"},{name:"武穴市",code:"421182"}],[{name:"咸安区",code:"421202"},{name:"嘉鱼县",code:"421221"},{name:"通城县",code:"421222"},{name:"崇阳县",code:"421223"},{name:"通山县",code:"421224"},{name:"赤壁市",code:"421281"}],[{name:"曾都区",code:"421302"},{name:"广水市",code:"421381"},{name:"随县",code:"421321"}],[{name:"恩施市",code:"422801"},{name:"利川市",code:"422802"},{name:"建始县",code:"422822"},{name:"巴东县",code:"422823"},{name:"宣恩县",code:"422825"},{name:"咸丰县",code:"422826"},{name:"来凤县",code:"422827"},{name:"鹤峰县",code:"422828"}],[{name:"仙桃市",code:"429007"}],[{name:"潜江市",code:"429008"}],[{name:"天门市",code:"429009"}],[{name:"神农架林区",code:"429022"}]],[[{name:"芙蓉区",code:"430102"},{name:"天心区",code:"430103"},{name:"岳麓区",code:"430104"},{name:"开福区",code:"430105"},{name:"雨花区",code:"430111"},{name:"长沙县",code:"430121"},{name:"望城区",code:"430122"},{name:"宁乡县",code:"430124"},{name:"浏阳市",code:"430181"}],[{name:"荷塘区",code:"430202"},{name:"芦淞区",code:"430203"},{name:"石峰区",code:"430204"},{name:"天元区",code:"430211"},{name:"株洲县",code:"430221"},{name:"攸县",code:"430223"},{name:"茶陵县",code:"430224"},{name:"炎陵县",code:"430225"},{name:"醴陵市",code:"430281"}],[{name:"雨湖区",code:"430302"},{name:"岳塘区",code:"430304"},{name:"湘潭县",code:"430321"},{name:"湘乡市",code:"430381"},{name:"韶山市",code:"430382"}],[{name:"珠晖区",code:"430405"},{name:"雁峰区",code:"430406"},{name:"石鼓区",code:"430407"},{name:"蒸湘区",code:"430408"},{name:"南岳区",code:"430412"},{name:"衡阳县",code:"430421"},{name:"衡南县",code:"430422"},{name:"衡山县",code:"430423"},{name:"衡东县",code:"430424"},{name:"祁东县",code:"430426"},{name:"耒阳市",code:"430481"},{name:"常宁市",code:"430482"}],[{name:"双清区",code:"430502"},{name:"大祥区",code:"430503"},{name:"北塔区",code:"430511"},{name:"邵东县",code:"430521"},{name:"新邵县",code:"430522"},{name:"邵阳县",code:"430523"},{name:"隆回县",code:"430524"},{name:"洞口县",code:"430525"},{name:"绥宁县",code:"430527"},{name:"新宁县",code:"430528"},{name:"城步苗族自治县",code:"430529"},{name:"武冈市",code:"430581"}],[{name:"岳阳楼区",code:"430602"},{name:"云溪区",code:"430603"},{name:"君山区",code:"430611"},{name:"岳阳县",code:"430621"},{name:"华容县",code:"430623"},{name:"湘阴县",code:"430624"},{name:"平江县",code:"430626"},{name:"汨罗市",code:"430681"},{name:"临湘市",code:"430682"}],[{name:"武陵区",code:"430702"},{name:"鼎城区",code:"430703"},{name:"安乡县",code:"430721"},{name:"汉寿县",code:"430722"},{name:"澧县",code:"430723"},{name:"临澧县",code:"430724"},{name:"桃源县",code:"430725"},{name:"石门县",code:"430726"},{name:"津市市",code:"430781"}],[{name:"永定区",code:"430802"},{name:"武陵源区",code:"430811"},{name:"慈利县",code:"430821"},{name:"桑植县",code:"430822"}],[{name:"资阳区",code:"430902"},{name:"赫山区",code:"430903"},{name:"南县",code:"430921"},{name:"桃江县",code:"430922"},{name:"安化县",code:"430923"},{name:"沅江市",code:"430981"}],[{name:"北湖区",code:"431002"},{name:"苏仙区",code:"431003"},{name:"桂阳县",code:"431021"},{name:"宜章县",code:"431022"},{name:"永兴县",code:"431023"},{name:"嘉禾县",code:"431024"},{name:"临武县",code:"431025"},{name:"汝城县",code:"431026"},{name:"桂东县",code:"431027"},{name:"安仁县",code:"431028"},{name:"资兴市",code:"431081"}],[{name:"零陵区",code:"431102"},{name:"冷水滩区",code:"431103"},{name:"祁阳县",code:"431121"},{name:"东安县",code:"431122"},{name:"双牌县",code:"431123"},{name:"道县",code:"431124"},{name:"江永县",code:"431125"},{name:"宁远县",code:"431126"},{name:"蓝山县",code:"431127"},{name:"新田县",code:"431128"},{name:"江华瑶族自治县",code:"431129"}],[{name:"鹤城区",code:"431202"},{name:"中方县",code:"431221"},{name:"沅陵县",code:"431222"},{name:"辰溪县",code:"431223"},{name:"溆浦县",code:"431224"},{name:"会同县",code:"431225"},{name:"麻阳苗族自治县",code:"431226"},{name:"新晃侗族自治县",code:"431227"},{name:"芷江侗族自治县",code:"431228"},{name:"靖州苗族侗族自治县",code:"431229"},{name:"通道侗族自治县",code:"431230"},{name:"洪江市",code:"431281"}],[{name:"娄星区",code:"431302"},{name:"双峰县",code:"431321"},{name:"新化县",code:"431322"},{name:"冷水江市",code:"431381"},{name:"涟源市",code:"431382"}],[{name:"吉首市",code:"433101"},{name:"泸溪县",code:"433122"},{name:"凤凰县",code:"433123"},{name:"花垣县",code:"433124"},{name:"保靖县",code:"433125"},{name:"古丈县",code:"433126"},{name:"永顺县",code:"433127"},{name:"龙山县",code:"433130"}]],[[{name:"荔湾区",code:"440103"},{name:"越秀区",code:"440104"},{name:"海珠区",code:"440105"},{name:"天河区",code:"440106"},{name:"白云区",code:"440111"},{name:"黄埔区",code:"440112"},{name:"番禺区",code:"440113"},{name:"花都区",code:"440114"},{name:"南沙区",code:"440115"},{name:"萝岗区",code:"440116"},{name:"增城区",code:"440183"},{name:"从化区",code:"440184"}],[{name:"武江区",code:"440203"},{name:"浈江区",code:"440204"},{name:"曲江区",code:"440205"},{name:"始兴县",code:"440222"},{name:"仁化县",code:"440224"},{name:"翁源县",code:"440229"},{name:"乳源瑶族自治县",code:"440232"},{name:"新丰县",code:"440233"},{name:"乐昌市",code:"440281"},{name:"南雄市",code:"440282"}],[{name:"罗湖区",code:"440303"},{name:"福田区",code:"440304"},{name:"南山区",code:"440305"},{name:"宝安区",code:"440306"},{name:"龙岗区",code:"440307"},{name:"盐田区",code:"440308"}],[{name:"香洲区",code:"440402"},{name:"斗门区",code:"440403"},{name:"金湾区",code:"440404"}],[{name:"龙湖区",code:"440507"},{name:"金平区",code:"440511"},{name:"濠江区",code:"440512"},{name:"潮阳区",code:"440513"},{name:"潮南区",code:"440514"},{name:"澄海区",code:"440515"},{name:"南澳县",code:"440523"}],[{name:"禅城区",code:"440604"},{name:"南海区",code:"440605"},{name:"顺德区",code:"440606"},{name:"三水区",code:"440607"},{name:"高明区",code:"440608"}],[{name:"蓬江区",code:"440703"},{name:"江海区",code:"440704"},{name:"新会区",code:"440705"},{name:"台山市",code:"440781"},{name:"开平市",code:"440783"},{name:"鹤山市",code:"440784"},{name:"恩平市",code:"440785"}],[{name:"赤坎区",code:"440802"},{name:"霞山区",code:"440803"},{name:"坡头区",code:"440804"},{name:"麻章区",code:"440811"},{name:"遂溪县",code:"440823"},{name:"徐闻县",code:"440825"},{name:"廉江市",code:"440881"},{name:"雷州市",code:"440882"},{name:"吴川市",code:"440883"}],[{name:"茂南区",code:"440902"},{name:"电白区",code:"440903"},{name:"电白县",code:"440923"},{name:"高州市",code:"440981"},{name:"化州市",code:"440982"},{name:"信宜市",code:"440983"}],[{name:"端州区",code:"441202"},{name:"鼎湖区",code:"441203"},{name:"广宁县",code:"441223"},{name:"怀集县",code:"441224"},{name:"封开县",code:"441225"},{name:"德庆县",code:"441226"},{name:"高要市",code:"441283"},{name:"四会市",code:"441284"}],[{name:"惠城区",code:"441302"},{name:"惠阳区",code:"441303"},{name:"博罗县",code:"441322"},{name:"惠东县",code:"441323"},{name:"龙门县",code:"441324"}],[{name:"梅江区",code:"441402"},{name:"梅县区",code:"441421"},{name:"大埔县",code:"441422"},{name:"丰顺县",code:"441423"},{name:"五华县",code:"441424"},{name:"平远县",code:"441426"},{name:"蕉岭县",code:"441427"},{name:"兴宁市",code:"441481"}],[{name:"城区",code:"441502"},{name:"海丰县",code:"441521"},{name:"陆河县",code:"441523"},{name:"陆丰市",code:"441581"}],[{name:"源城区",code:"441602"},{name:"紫金县",code:"441621"},{name:"龙川县",code:"441622"},{name:"连平县",code:"441623"},{name:"和平县",code:"441624"},{name:"东源县",code:"441625"}],[{name:"江城区",code:"441702"},{name:"阳西县",code:"441721"},{name:"阳东区",code:"441723"},{name:"阳春市",code:"441781"}],[{name:"清城区",code:"441802"},{name:"佛冈县",code:"441821"},{name:"阳山县",code:"441823"},{name:"连山壮族瑶族自治县",code:"441825"},{name:"连南瑶族自治县",code:"441826"},{name:"清新区",code:"441827"},{name:"英德市",code:"441881"},{name:"连州市",code:"441882"}],[{name:"东莞市",code:"441901"}],[{name:"中山市",code:"442001"}],[{name:"湘桥区",code:"445102"},{name:"潮安区",code:"445121"},{name:"饶平县",code:"445122"}],[{name:"榕城区",code:"445202"},{name:"揭东区",code:"445221"},{name:"揭西县",code:"445222"},{name:"惠来县",code:"445224"},{name:"普宁市",code:"445281"}],[{name:"云城区",code:"445302"},{name:"新兴县",code:"445321"},{name:"郁南县",code:"445322"},{name:"云安区",code:"445323"},{name:"罗定市",code:"445381"}]],[[{name:"兴宁区",code:"450102"},{name:"青秀区",code:"450103"},{name:"江南区",code:"450105"},{name:"西乡塘区",code:"450107"},{name:"良庆区",code:"450108"},{name:"邕宁区",code:"450109"},{name:"武鸣县",code:"450122"},{name:"隆安县",code:"450123"},{name:"马山县",code:"450124"},{name:"上林县",code:"450125"},{name:"宾阳县",code:"450126"},{name:"横县",code:"450127"}],[{name:"城中区",code:"450202"},{name:"鱼峰区",code:"450203"},{name:"柳南区",code:"450204"},{name:"柳北区",code:"450205"},{name:"柳江县",code:"450221"},{name:"柳城县",code:"450222"},{name:"鹿寨县",code:"450223"},{name:"融安县",code:"450224"},{name:"融水苗族自治县",code:"450225"},{name:"三江侗族自治县",code:"450226"}],[{name:"秀峰区",code:"450302"},{name:"叠彩区",code:"450303"},{name:"象山区",code:"450304"},{name:"七星区",code:"450305"},{name:"雁山区",code:"450311"},{name:"阳朔县",code:"450321"},{name:"临桂区",code:"450322"},{name:"灵川县",code:"450323"},{name:"全州县",code:"450324"},{name:"兴安县",code:"450325"},{name:"永福县",code:"450326"},{name:"灌阳县",code:"450327"},{name:"龙胜各族自治县",code:"450328"},{name:"资源县",code:"450329"},{name:"平乐县",code:"450330"},{name:"荔浦县",code:"450331"},{name:"恭城瑶族自治县",code:"450332"}],[{name:"万秀区",code:"450403"},{name:"长洲区",code:"450405"},{name:"龙圩区",code:"450406"},{name:"苍梧县",code:"450421"},{name:"藤县",code:"450422"},{name:"蒙山县",code:"450423"},{name:"岑溪市",code:"450481"}],[{name:"海城区",code:"450502"},{name:"银海区",code:"450503"},{name:"铁山港区",code:"450512"},{name:"合浦县",code:"450521"}],[{name:"港口区",code:"450602"},{name:"防城区",code:"450603"},{name:"上思县",code:"450621"},{name:"东兴市",code:"450681"}],[{name:"钦南区",code:"450702"},{name:"钦北区",code:"450703"},{name:"灵山县",code:"450721"},{name:"浦北县",code:"450722"}],[{name:"港北区",code:"450802"},{name:"港南区",code:"450803"},{name:"覃塘区",code:"450804"},{name:"平南县",code:"450821"},{name:"桂平市",code:"450881"}],[{name:"玉州区",code:"450902"},{name:"福绵区",code:"450903"},{name:"容县",code:"450921"},{name:"陆川县",code:"450922"},{name:"博白县",code:"450923"},{name:"兴业县",code:"450924"},{name:"北流市",code:"450981"}],[{name:"右江区",code:"451002"},{name:"田阳县",code:"451021"},{name:"田东县",code:"451022"},{name:"平果县",code:"451023"},{name:"德保县",code:"451024"},{name:"靖西县",code:"451025"},{name:"那坡县",code:"451026"},{name:"凌云县",code:"451027"},{name:"乐业县",code:"451028"},{name:"田林县",code:"451029"},{name:"西林县",code:"451030"},{name:"隆林各族自治县",code:"451031"}],[{name:"八步区",code:"451102"},{name:"昭平县",code:"451121"},{name:"钟山县",code:"451122"},{name:"富川瑶族自治县",code:"451123"}],[{name:"金城江区",code:"451202"},{name:"南丹县",code:"451221"},{name:"天峨县",code:"451222"},{name:"凤山县",code:"451223"},{name:"东兰县",code:"451224"},{name:"罗城仫佬族自治县",code:"451225"},{name:"环江毛南族自治县",code:"451226"},{name:"巴马瑶族自治县",code:"451227"},{name:"都安瑶族自治县",code:"451228"},{name:"大化瑶族自治县",code:"451229"},{name:"宜州市",code:"451281"}],[{name:"兴宾区",code:"451302"},{name:"忻城县",code:"451321"},{name:"象州县",code:"451322"},{name:"武宣县",code:"451323"},{name:"金秀瑶族自治县",code:"451324"},{name:"合山市",code:"451381"}],[{name:"江州区",code:"451402"},{name:"扶绥县",code:"451421"},{name:"宁明县",code:"451422"},{name:"龙州县",code:"451423"},{name:"大新县",code:"451424"},{name:"天等县",code:"451425"},{name:"凭祥市",code:"451481"}]],[[{name:"秀英区",code:"460105"},{name:"龙华区",code:"460106"},{name:"琼山区",code:"460107"},{name:"美兰区",code:"460108"}],[{name:"海棠区",code:"460202"},{name:"吉阳区",code:"460203"},{name:"天涯区",code:"460204"},{name:"崖州区",code:"460205"}],[{name:"西沙群岛",code:"460321"},{name:"南沙群岛",code:"460322"},{name:"中沙群岛的岛礁及其海域",code:"460323"}],[{name:"五指山市",code:"469011"}],[{name:"琼海市",code:"469012"}],[{name:"儋州市",code:"469013"}],[{name:"文昌市",code:"469015"}],[{name:"万宁市",code:"469016"}],[{name:"东方市",code:"469017"}],[{name:"定安县",code:"469021"}],[{name:"屯昌县",code:"469022"}],[{name:"澄迈县",code:"469023"}],[{name:"临高县",code:"469024"}],[{name:"白沙黎族自治县",code:"469040"}],[{name:"昌江黎族自治县",code:"469041"}],[{name:"乐东黎族自治县",code:"469043"}],[{name:"陵水黎族自治县",code:"469044"}],[{name:"保亭黎族苗族自治县",code:"469045"}],[{name:"琼中黎族苗族自治县",code:"469046"}]],[[{name:"万州区",code:"500101"},{name:"涪陵区",code:"500102"},{name:"渝中区",code:"500103"},{name:"大渡口区",code:"500104"},{name:"江北区",code:"500105"},{name:"沙坪坝区",code:"500106"},{name:"九龙坡区",code:"500107"},{name:"南岸区",code:"500108"},{name:"北碚区",code:"500109"},{name:"万盛区",code:"500110"},{name:"双桥区",code:"500111"},{name:"渝北区",code:"500112"},{name:"巴南区",code:"500113"},{name:"黔江区",code:"500114"},{name:"长寿区",code:"500115"},{name:"綦江区",code:"500222"},{name:"潼南县",code:"500223"},{name:"铜梁区",code:"500224"},{name:"大足区",code:"500225"},{name:"荣昌县",code:"500226"},{name:"璧山区",code:"500227"},{name:"梁平县",code:"500228"},{name:"城口县",code:"500229"},{name:"丰都县",code:"500230"},{name:"垫江县",code:"500231"},{name:"武隆县",code:"500232"},{name:"忠县",code:"500233"},{name:"开县",code:"500234"},{name:"云阳县",code:"500235"},{name:"奉节县",code:"500236"},{name:"巫山县",code:"500237"},{name:"巫溪县",code:"500238"},{name:"石柱土家族自治县",code:"500240"},{name:"秀山土家族苗族自治县",code:"500241"},{name:"酉阳土家族苗族自治县",code:"500242"},{name:"彭水苗族土家族自治县",code:"500243"},{name:"江津区",code:"500381"},{name:"合川区",code:"500382"},{name:"永川区",code:"500383"},{name:"南川区",code:"500384"}]],[[{name:"锦江区",code:"510104"},{name:"青羊区",code:"510105"},{name:"金牛区",code:"510106"},{name:"武侯区",code:"510107"},{name:"成华区",code:"510108"},{name:"龙泉驿区",code:"510112"},{name:"青白江区",code:"510113"},{name:"新都区",code:"510114"},{name:"温江区",code:"510115"},{name:"金堂县",code:"510121"},{name:"双流县",code:"510122"},{name:"郫县",code:"510124"},{name:"大邑县",code:"510129"},{name:"蒲江县",code:"510131"},{name:"新津县",code:"510132"},{name:"都江堰市",code:"510181"},{name:"彭州市",code:"510182"},{name:"邛崃市",code:"510183"},{name:"崇州市",code:"510184"}],[{name:"自流井区",code:"510302"},{name:"贡井区",code:"510303"},{name:"大安区",code:"510304"},{name:"沿滩区",code:"510311"},{name:"荣县",code:"510321"},{name:"富顺县",code:"510322"}],[{name:"东区",code:"510402"},{name:"西区",code:"510403"},{name:"仁和区",code:"510411"},{name:"米易县",code:"510421"},{name:"盐边县",code:"510422"}],[{name:"江阳区",code:"510502"},{name:"纳溪区",code:"510503"},{name:"龙马潭区",code:"510504"},{name:"泸县",code:"510521"},{name:"合江县",code:"510522"},{name:"叙永县",code:"510524"},{name:"古蔺县",code:"510525"}],[{name:"旌阳区",code:"510603"},{name:"中江县",code:"510623"},{name:"罗江县",code:"510626"},{name:"广汉市",code:"510681"},{name:"什邡市",code:"510682"},{name:"绵竹市",code:"510683"}],[{name:"涪城区",code:"510703"},{name:"游仙区",code:"510704"},{name:"三台县",code:"510722"},{name:"盐亭县",code:"510723"},{name:"安县",code:"510724"},{name:"梓潼县",code:"510725"},{name:"北川羌族自治县",code:"510726"},{name:"平武县",code:"510727"},{name:"江油市",code:"510781"}],[{name:"利州区",code:"510802"},{name:"昭化区",code:"510811"},{name:"朝天区",code:"510812"},{name:"旺苍县",code:"510821"},{name:"青川县",code:"510822"},{name:"剑阁县",code:"510823"},{name:"苍溪县",code:"510824"}],[{name:"船山区",code:"510903"},{name:"安居区",code:"510904"},{name:"蓬溪县",code:"510921"},{name:"射洪县",code:"510922"},{name:"大英县",code:"510923"}],[{name:"市中区",code:"511002"},{name:"东兴区",code:"511011"},{name:"威远县",code:"511024"},{name:"资中县",code:"511025"},{name:"隆昌县",code:"511028"}],[{name:"市中区",code:"511102"},{name:"沙湾区",code:"511111"},{name:"五通桥区",code:"511112"},{name:"金口河区",code:"511113"},{name:"犍为县",code:"511123"},{name:"井研县",code:"511124"},{name:"夹江县",code:"511126"},{name:"沐川县",code:"511129"},{name:"峨边彝族自治县",code:"511132"},{name:"马边彝族自治县",code:"511133"},{name:"峨眉山市",code:"511181"}],[{name:"顺庆区",code:"511302"},{name:"高坪区",code:"511303"},{name:"嘉陵区",code:"511304"},{name:"南部县",code:"511321"},{name:"营山县",code:"511322"},{name:"蓬安县",code:"511323"},{name:"仪陇县",code:"511324"},{name:"西充县",code:"511325"},{name:"阆中市",code:"511381"}],[{name:"东坡区",code:"511402"},{name:"仁寿县",code:"511421"},{name:"彭山区",code:"511422"},{name:"洪雅县",code:"511423"},{name:"丹棱县",code:"511424"},{name:"青神县",code:"511425"}],[{name:"翠屏区",code:"511502"},{name:"宜宾县",code:"511521"},{name:"南溪区",code:"511522"},{name:"江安县",code:"511523"},{name:"长宁县",code:"511524"},{name:"高县",code:"511525"},{name:"珙县",code:"511526"},{name:"筠连县",code:"511527"},{name:"兴文县",code:"511528"},{name:"屏山县",code:"511529"}],[{name:"广安区",code:"511602"},{name:"前锋区",code:"511603"},{name:"岳池县",code:"511621"},{name:"武胜县",code:"511622"},{name:"邻水县",code:"511623"},{name:"华蓥市",code:"511681"}],[{name:"通川区",code:"511702"},{name:"达川区",code:"511721"},{name:"宣汉县",code:"511722"},{name:"开江县",code:"511723"},{name:"大竹县",code:"511724"},{name:"渠县",code:"511725"},{name:"万源市",code:"511781"}],[{name:"雨城区",code:"511802"},{name:"名山区",code:"511821"},{name:"荥经县",code:"511822"},{name:"汉源县",code:"511823"},{name:"石棉县",code:"511824"},{name:"天全县",code:"511825"},{name:"芦山县",code:"511826"},{name:"宝兴县",code:"511827"}],[{name:"巴州区",code:"511902"},{name:"恩阳区",code:"511903"},{name:"通江县",code:"511921"},{name:"南江县",code:"511922"},{name:"平昌县",code:"511923"}],[{name:"雁江区",code:"512002"},{name:"安岳县",code:"512021"},{name:"乐至县",code:"512022"},{name:"简阳市",code:"512081"}],[{name:"汶川县",code:"513221"},{name:"理县",code:"513222"},{name:"茂县",code:"513223"},{name:"松潘县",code:"513224"},{name:"九寨沟县",code:"513225"},{name:"金川县",code:"513226"},{name:"小金县",code:"513227"},{name:"黑水县",code:"513228"},{name:"马尔康县",code:"513229"},{name:"壤塘县",code:"513230"},{name:"阿坝县",code:"513231"},{name:"若尔盖县",code:"513232"},{name:"红原县",code:"513233"}],[{name:"康定县",code:"513321"},{name:"泸定县",code:"513322"},{name:"丹巴县",code:"513323"},{name:"九龙县",code:"513324"},{name:"雅江县",code:"513325"},{name:"道孚县",code:"513326"},{name:"炉霍县",code:"513327"},{name:"甘孜县",code:"513328"},{name:"新龙县",code:"513329"},{name:"德格县",code:"513330"},{name:"白玉县",code:"513331"},{name:"石渠县",code:"513332"},{name:"色达县",code:"513333"},{name:"理塘县",code:"513334"},{name:"巴塘县",code:"513335"},{name:"乡城县",code:"513336"},{name:"稻城县",code:"513337"},{name:"得荣县",code:"513338"}],[{name:"西昌市",code:"513401"},{name:"木里藏族自治县",code:"513422"},{name:"盐源县",code:"513423"},{name:"德昌县",code:"513424"},{name:"会理县",code:"513425"},{name:"会东县",code:"513426"},{name:"宁南县",code:"513427"},{name:"普格县",code:"513428"},{name:"布拖县",code:"513429"},{name:"金阳县",code:"513430"},{name:"昭觉县",code:"513431"},{name:"喜德县",code:"513432"},{name:"冕宁县",code:"513433"},{name:"越西县",code:"513434"},{name:"甘洛县",code:"513435"},{name:"美姑县",code:"513436"},{name:"雷波县",code:"513437"}]],[[{name:"南明区",code:"520102"},{name:"云岩区",code:"520103"},{name:"花溪区",code:"520111"},{name:"乌当区",code:"520112"},{name:"白云区",code:"520113"},{name:"开阳县",code:"520121"},{name:"息烽县",code:"520122"},{name:"修文县",code:"520123"},{name:"观山湖区",code:"520151"},{name:"清镇市",code:"520181"}],[{name:"钟山区",code:"520201"},{name:"六枝特区",code:"520203"},{name:"水城县",code:"520221"},{name:"盘县",code:"520222"}],[{name:"红花岗区",code:"520302"},{name:"汇川区",code:"520303"},{name:"遵义县",code:"520321"},{name:"桐梓县",code:"520322"},{name:"绥阳县",code:"520323"},{name:"正安县",code:"520324"},{name:"道真仡佬族苗族自治县",code:"520325"},{name:"务川仡佬族苗族自治县",code:"520326"},{name:"凤冈县",code:"520327"},{name:"湄潭县",code:"520328"},{name:"余庆县",code:"520329"},{name:"习水县",code:"520330"},{name:"赤水市",code:"520381"},{name:"仁怀市",code:"520382"}],[{name:"西秀区",code:"520402"},{name:"平坝区",code:"520421"},{name:"普定县",code:"520422"},{name:"镇宁布依族苗族自治县",code:"520423"},{name:"关岭布依族苗族自治县",code:"520424"},{name:"紫云苗族布依族自治县",code:"520425"}],[{name:"碧江区",code:"522201"},{name:"江口县",code:"522222"},{name:"玉屏侗族自治县",code:"522223"},{name:"石阡县",code:"522224"},{name:"思南县",code:"522225"},{name:"印江土家族苗族自治县",code:"522226"},{name:"德江县",code:"522227"},{name:"沿河土家族自治县",code:"522228"},{name:"松桃苗族自治县",code:"522229"},{name:"万山区",code:"522230"}],[{name:"兴义市",code:"522301"},{name:"兴仁县",code:"522322"},{name:"普安县",code:"522323"},{name:"晴隆县",code:"522324"},{name:"贞丰县",code:"522325"},{name:"望谟县",code:"522326"},{name:"册亨县",code:"522327"},{name:"安龙县",code:"522328"}],[{name:"七星关区",code:"522401"},{name:"大方县",code:"522422"},{name:"黔西县",code:"522423"},{name:"金沙县",code:"522424"},{name:"织金县",code:"522425"},{name:"纳雍县",code:"522426"},{name:"威宁彝族回族苗族自治县",code:"522427"},{name:"赫章县",code:"522428"}],[{name:"凯里市",code:"522601"},{name:"黄平县",code:"522622"},{name:"施秉县",code:"522623"},{name:"三穗县",code:"522624"},{name:"镇远县",code:"522625"},{name:"岑巩县",code:"522626"},{name:"天柱县",code:"522627"},{name:"锦屏县",code:"522628"},{name:"剑河县",code:"522629"},{name:"台江县",code:"522630"},{name:"黎平县",code:"522631"},{name:"榕江县",code:"522632"},{name:"从江县",code:"522633"},{name:"雷山县",code:"522634"},{name:"麻江县",code:"522635"},{name:"丹寨县",code:"522636"}],[{name:"都匀市",code:"522701"},{name:"福泉市",code:"522702"},{name:"荔波县",code:"522722"},{name:"贵定县",code:"522723"},{name:"瓮安县",code:"522725"},{name:"独山县",code:"522726"},{name:"平塘县",code:"522727"},{name:"罗甸县",code:"522728"},{name:"长顺县",code:"522729"},{name:"龙里县",code:"522730"},{name:"惠水县",code:"522731"},{name:"三都水族自治县",code:"522732"}]],[[{name:"五华区",code:"530102"},{name:"盘龙区",code:"530103"},{name:"官渡区",code:"530111"},{name:"西山区",code:"530112"},{name:"东川区",code:"530113"},{name:"呈贡区",code:"530121"},{name:"晋宁县",code:"530122"},{name:"富民县",code:"530124"},{name:"宜良县",code:"530125"},{name:"石林彝族自治县",code:"530126"},{name:"嵩明县",code:"530127"},{name:"禄劝彝族苗族自治县",code:"530128"},{name:"寻甸回族彝族自治县",code:"530129"},{name:"安宁市",code:"530181"}],[{name:"麒麟区",code:"530302"},{name:"马龙县",code:"530321"},{name:"陆良县",code:"530322"},{name:"师宗县",code:"530323"},{name:"罗平县",code:"530324"},{name:"富源县",code:"530325"},{name:"会泽县",code:"530326"},{name:"沾益县",code:"530328"},{name:"宣威市",code:"530381"}],[{name:"红塔区",code:"530402"},{name:"江川县",code:"530421"},{name:"澄江县",code:"530422"},{name:"通海县",code:"530423"},{name:"华宁县",code:"530424"},{name:"易门县",code:"530425"},{name:"峨山彝族自治县",code:"530426"},{name:"新平彝族傣族自治县",code:"530427"},{name:"元江哈尼族彝族傣族自治县",code:"530428"}],[{name:"隆阳区",code:"530502"},{name:"施甸县",code:"530521"},{name:"腾冲县",code:"530522"},{name:"龙陵县",code:"530523"},{name:"昌宁县",code:"530524"}],[{name:"昭阳区",code:"530602"},{name:"鲁甸县",code:"530621"},{name:"巧家县",code:"530622"},{name:"盐津县",code:"530623"},{name:"大关县",code:"530624"},{name:"永善县",code:"530625"},{name:"绥江县",code:"530626"},{name:"镇雄县",code:"530627"},{name:"彝良县",code:"530628"},{name:"威信县",code:"530629"},{name:"水富县",code:"530630"}],[{name:"古城区",code:"530702"},{name:"玉龙纳西族自治县",code:"530721"},{name:"永胜县",code:"530722"},{name:"华坪县",code:"530723"},{name:"宁蒗彝族自治县",code:"530724"}],[{name:"思茅区",code:"530802"},{name:"宁洱哈尼族彝族自治县",code:"530821"},{name:"墨江哈尼族自治县",code:"530822"},{name:"景东彝族自治县",code:"530823"},{name:"景谷傣族彝族自治县",code:"530824"},{name:"镇沅彝族哈尼族拉祜族自治县",code:"530825"},{name:"江城哈尼族彝族自治县",code:"530826"},{name:"孟连傣族拉祜族佤族自治县",code:"530827"},{name:"澜沧拉祜族自治县",code:"530828"},{name:"西盟佤族自治县",code:"530829"}],[{name:"临翔区",code:"530902"},{name:"凤庆县",code:"530921"},{name:"云县",code:"530922"},{name:"永德县",code:"530923"},{name:"镇康县",code:"530924"},{name:"双江拉祜族佤族布朗族傣族自治县",code:"530925"},{name:"耿马傣族佤族自治县",code:"530926"},{name:"沧源佤族自治县",code:"530927"}],[{name:"楚雄市",code:"532301"},{name:"双柏县",code:"532322"},{name:"牟定县",code:"532323"},{name:"南华县",code:"532324"},{name:"姚安县",code:"532325"},{name:"大姚县",code:"532326"},{name:"永仁县",code:"532327"},{name:"元谋县",code:"532328"},{name:"武定县",code:"532329"},{name:"禄丰县",code:"532331"}],[{name:"个旧市",code:"532501"},{name:"开远市",code:"532502"},{name:"蒙自市",code:"532522"},{name:"屏边苗族自治县",code:"532523"},{name:"建水县",code:"532524"},{name:"石屏县",code:"532525"},{name:"弥勒市",code:"532526"},{name:"泸西县",code:"532527"},{name:"元阳县",code:"532528"},{name:"红河县",code:"532529"},{name:"金平苗族瑶族傣族自治县",code:"532530"},{name:"绿春县",code:"532531"},{name:"河口瑶族自治县",code:"532532"}],[{name:"文山市",code:"532621"},{name:"砚山县",code:"532622"},{name:"西畴县",code:"532623"},{name:"麻栗坡县",code:"532624"},{name:"马关县",code:"532625"},{name:"丘北县",code:"532626"},{name:"广南县",code:"532627"},{name:"富宁县",code:"532628"}],[{name:"景洪市",code:"532801"},{name:"勐海县",code:"532822"},{name:"勐腊县",code:"532823"}],[{name:"大理市",code:"532901"},{name:"漾濞彝族自治县",code:"532922"},{name:"祥云县",code:"532923"},{name:"宾川县",code:"532924"},{name:"弥渡县",code:"532925"},{name:"南涧彝族自治县",code:"532926"},{name:"巍山彝族回族自治县",code:"532927"},{name:"永平县",code:"532928"},{name:"云龙县",code:"532929"},{name:"洱源县",code:"532930"},{name:"剑川县",code:"532931"},{name:"鹤庆县",code:"532932"}],[{name:"瑞丽市",code:"533102"},{name:"芒市",code:"533103"},{name:"梁河县",code:"533122"},{name:"盈江县",code:"533123"},{name:"陇川县",code:"533124"}],[{name:"泸水县",code:"533321"},{name:"福贡县",code:"533323"},{name:"贡山独龙族怒族自治县",code:"533324"},{name:"兰坪白族普米族自治县",code:"533325"}],[{name:"香格里拉市",code:"533421"},{name:"德钦县",code:"533422"},{name:"维西傈僳族自治县",code:"533423"}]],[[{name:"城关区",code:"540102"},{name:"林周县",code:"540121"},{name:"当雄县",code:"540122"},{name:"尼木县",code:"540123"},{name:"曲水县",code:"540124"},{name:"堆龙德庆县",code:"540125"},{name:"达孜县",code:"540126"},{name:"墨竹工卡县",code:"540127"}],[{name:"卡若区",code:"542121"},{name:"江达县",code:"542122"},{name:"贡觉县",code:"542123"},{name:"类乌齐县",code:"542124"},{name:"丁青县",code:"542125"},{name:"察雅县",code:"542126"},{name:"八宿县",code:"542127"},{name:"左贡县",code:"542128"},{name:"芒康县",code:"542129"},{name:"洛隆县",code:"542132"},{name:"边坝县",code:"542133"}],[{name:"乃东县",code:"542221"},{name:"扎囊县",code:"542222"},{name:"贡嘎县",code:"542223"},{name:"桑日县",code:"542224"},{name:"琼结县",code:"542225"},{name:"曲松县",code:"542226"},{name:"措美县",code:"542227"},{name:"洛扎县",code:"542228"},{name:"加查县",code:"542229"},{name:"隆子县",code:"542231"},{name:"错那县",code:"542232"},{name:"浪卡子县",code:"542233"}],[{name:"桑珠孜区",code:"542301"},{name:"南木林县",code:"542322"},{name:"江孜县",code:"542323"},{name:"定日县",code:"542324"},{name:"萨迦县",code:"542325"},{name:"拉孜县",code:"542326"},{name:"昂仁县",code:"542327"},{name:"谢通门县",code:"542328"},{name:"白朗县",code:"542329"},{name:"仁布县",code:"542330"},{name:"康马县",code:"542331"},{name:"定结县",code:"542332"},{name:"仲巴县",code:"542333"},{name:"亚东县",code:"542334"},{name:"吉隆县",code:"542335"},{name:"聂拉木县",code:"542336"},{name:"萨嘎县",code:"542337"},{name:"岗巴县",code:"542338"}],[{name:"那曲县",code:"542421"},{name:"嘉黎县",code:"542422"},{name:"比如县",code:"542423"},{name:"聂荣县",code:"542424"},{name:"安多县",code:"542425"},{name:"申扎县",code:"542426"},{name:"索县",code:"542427"},{name:"班戈县",code:"542428"},{name:"巴青县",code:"542429"},{name:"尼玛县",code:"542430"},{name:"双湖县",code:"542432"}],[{name:"普兰县",code:"542521"},{name:"札达县",code:"542522"},{name:"噶尔县",code:"542523"},{name:"日土县",code:"542524"},{name:"革吉县",code:"542525"},{name:"改则县",code:"542526"},{name:"措勤县",code:"542527"}],[{name:"林芝县",code:"542621"},{name:"工布江达县",code:"542622"},{name:"米林县",code:"542623"},{name:"墨脱县",code:"542624"},{name:"波密县",code:"542625"},{name:"察隅县",code:"542626"},{name:"朗县",code:"542627"}]],[[{name:"新城区",code:"610102"},{name:"碑林区",code:"610103"},{name:"莲湖区",code:"610104"},{name:"灞桥区",code:"610111"},{name:"未央区",code:"610112"},{name:"雁塔区",code:"610113"},{name:"阎良区",code:"610114"},{name:"临潼区",code:"610115"},{name:"长安区",code:"610116"},{name:"蓝田县",code:"610122"},{name:"周至县",code:"610124"},{name:"户县",code:"610125"},{name:"高陵区",code:"610126"}],[{name:"王益区",code:"610202"},{name:"印台区",code:"610203"},{name:"耀州区",code:"610204"},{name:"宜君县",code:"610222"}],[{name:"渭滨区",code:"610302"},{name:"金台区",code:"610303"},{name:"陈仓区",code:"610304"},{name:"凤翔县",code:"610322"},{name:"岐山县",code:"610323"},{name:"扶风县",code:"610324"},{name:"眉县",code:"610326"},{name:"陇县",code:"610327"},{name:"千阳县",code:"610328"},{name:"麟游县",code:"610329"},{name:"凤县",code:"610330"},{name:"太白县",code:"610331"}],[{name:"秦都区",code:"610402"},{name:"杨陵区",code:"610403"},{name:"渭城区",code:"610404"},{name:"三原县",code:"610422"},{name:"泾阳县",code:"610423"},{name:"乾县",code:"610424"},{name:"礼泉县",code:"610425"},{name:"永寿县",code:"610426"},{name:"彬县",code:"610427"},{name:"长武县",code:"610428"},{name:"旬邑县",code:"610429"},{name:"淳化县",code:"610430"},{name:"武功县",code:"610431"},{name:"兴平市",code:"610481"}],[{name:"临渭区",code:"610502"},{name:"华县",code:"610521"},{name:"潼关县",code:"610522"},{name:"大荔县",code:"610523"},{name:"合阳县",code:"610524"},{name:"澄城县",code:"610525"},{name:"蒲城县",code:"610526"},{name:"白水县",code:"610527"},{name:"富平县",code:"610528"},{name:"韩城市",code:"610581"},{name:"华阴市",code:"610582"}],[{name:"宝塔区",code:"610602"},{name:"延长县",code:"610621"},{name:"延川县",code:"610622"},{name:"子长县",code:"610623"},{name:"安塞县",code:"610624"},{name:"志丹县",code:"610625"},{name:"吴起县",code:"610626"},{name:"甘泉县",code:"610627"},{name:"富县",code:"610628"},{name:"洛川县",code:"610629"},{name:"宜川县",code:"610630"},{name:"黄龙县",code:"610631"},{name:"黄陵县",code:"610632"}],[{name:"汉台区",code:"610702"},{name:"南郑县",code:"610721"},{name:"城固县",code:"610722"},{name:"洋县",code:"610723"},{name:"西乡县",code:"610724"},{name:"勉县",code:"610725"},{name:"宁强县",code:"610726"},{name:"略阳县",code:"610727"},{name:"镇巴县",code:"610728"},{name:"留坝县",code:"610729"},{name:"佛坪县",code:"610730"}],[{name:"榆阳区",code:"610802"},{name:"神木县",code:"610821"},{name:"府谷县",code:"610822"},{name:"横山县",code:"610823"},{name:"靖边县",code:"610824"},{name:"定边县",code:"610825"},{name:"绥德县",code:"610826"},{name:"米脂县",code:"610827"},{name:"佳县",code:"610828"},{name:"吴堡县",code:"610829"},{name:"清涧县",code:"610830"},{name:"子洲县",code:"610831"}],[{name:"汉滨区",code:"610902"},{name:"汉阴县",code:"610921"},{name:"石泉县",code:"610922"},{name:"宁陕县",code:"610923"},{name:"紫阳县",code:"610924"},{name:"岚皋县",code:"610925"},{name:"平利县",code:"610926"},{name:"镇坪县",code:"610927"},{name:"旬阳县",code:"610928"},{name:"白河县",code:"610929"}],[{name:"商州区",code:"611002"},{name:"洛南县",code:"611021"},{name:"丹凤县",code:"611022"},{name:"商南县",code:"611023"},{name:"山阳县",code:"611024"},{name:"镇安县",code:"611025"},{name:"柞水县",code:"611026"}]],[[{name:"城关区",code:"620102"},{name:"七里河区",code:"620103"},{name:"西固区",code:"620104"},{name:"安宁区",code:"620105"},{name:"红古区",code:"620111"},{name:"永登县",code:"620121"},{name:"皋兰县",code:"620122"},{name:"榆中县",code:"620123"}],[{name:"嘉峪关市",code:"620201"}],[{name:"金川区",code:"620302"},{name:"永昌县",code:"620321"}],[{name:"白银区",code:"620402"},{name:"平川区",code:"620403"},{name:"靖远县",code:"620421"},{name:"会宁县",code:"620422"},{name:"景泰县",code:"620423"}],[{name:"秦州区",code:"620502"},{name:"麦积区",code:"620503"},{name:"清水县",code:"620521"},{name:"秦安县",code:"620522"},{name:"甘谷县",code:"620523"},{name:"武山县",code:"620524"},{name:"张家川回族自治县",code:"620525"}],[{name:"凉州区",code:"620602"},{name:"民勤县",code:"620621"},{name:"古浪县",code:"620622"},{name:"天祝藏族自治县",code:"620623"}],[{name:"甘州区",code:"620702"},{name:"肃南裕固族自治县",code:"620721"},{name:"民乐县",code:"620722"},{name:"临泽县",code:"620723"},{name:"高台县",code:"620724"},{name:"山丹县",code:"620725"}],[{name:"崆峒区",code:"620802"},{name:"泾川县",code:"620821"},{name:"灵台县",code:"620822"},{name:"崇信县",code:"620823"},{name:"华亭县",code:"620824"},{name:"庄浪县",code:"620825"},{name:"静宁县",code:"620826"}],[{name:"肃州区",code:"620902"},{name:"金塔县",code:"620921"},{name:"瓜州县",code:"620922"},{name:"肃北蒙古族自治县",code:"620923"},{name:"阿克塞哈萨克族自治县",code:"620924"},{name:"玉门市",code:"620981"},{name:"敦煌市",code:"620982"}],[{name:"西峰区",code:"621002"},{name:"庆城县",code:"621021"},{name:"环县",code:"621022"},{name:"华池县",code:"621023"},{name:"合水县",code:"621024"},{name:"正宁县",code:"621025"},{name:"宁县",code:"621026"},{name:"镇原县",code:"621027"}],[{name:"安定区",code:"621102"},{name:"通渭县",code:"621121"},{name:"陇西县",code:"621122"},{name:"渭源县",code:"621123"},{name:"临洮县",code:"621124"},{name:"漳县",code:"621125"},{name:"岷县",code:"621126"}],[{name:"武都区",code:"621202"},{name:"成县",code:"621221"},{name:"文县",code:"621222"},{name:"宕昌县",code:"621223"},{name:"康县",code:"621224"},{name:"西和县",code:"621225"},{name:"礼县",code:"621226"},{name:"徽县",code:"621227"},{name:"两当县",code:"621228"}],[{name:"临夏市",code:"622901"},{name:"临夏县",code:"622921"},{name:"康乐县",code:"622922"},{name:"永靖县",code:"622923"},{name:"广河县",code:"622924"},{name:"和政县",code:"622925"},{name:"东乡族自治县",code:"622926"},{name:"积石山保安族东乡族撒拉族自治县",code:"622927"}],[{name:"合作市",code:"623001"},{name:"临潭县",code:"623021"},{name:"卓尼县",code:"623022"},{name:"舟曲县",code:"623023"},{name:"迭部县",code:"623024"},{name:"玛曲县",code:"623025"},{name:"碌曲县",code:"623026"},{name:"夏河县",code:"623027"}]],[[{name:"城东区",code:"630102"},{name:"城中区",code:"630103"},{name:"城西区",code:"630104"},{name:"城北区",code:"630105"},{name:"大通回族土族自治县",code:"630121"},{name:"湟中县",code:"630122"},{name:"湟源县",code:"630123"}],[{name:"平安县",code:"632121"},{name:"民和回族土族自治县",code:"632122"},{name:"乐都区",code:"632123"},{name:"互助土族自治县",code:"632126"},{name:"化隆回族自治县",code:"632127"},{name:"循化撒拉族自治县",code:"632128"}],[{name:"门源回族自治县",code:"632221"},{name:"祁连县",code:"632222"},{name:"海晏县",code:"632223"},{name:"刚察县",code:"632224"}],[{name:"同仁县",code:"632321"},{name:"尖扎县",code:"632322"},{name:"泽库县",code:"632323"},{name:"河南蒙古族自治县",code:"632324"}],[{name:"共和县",code:"632521"},{name:"同德县",code:"632522"},{name:"贵德县",code:"632523"},{name:"兴海县",code:"632524"},{name:"贵南县",code:"632525"}],[{name:"玛沁县",code:"632621"},{name:"班玛县",code:"632622"},{name:"甘德县",code:"632623"},{name:"达日县",code:"632624"},{name:"久治县",code:"632625"},{name:"玛多县",code:"632626"}],[{name:"玉树市",code:"632721"},{name:"杂多县",code:"632722"},{name:"称多县",code:"632723"},{name:"治多县",code:"632724"},{name:"囊谦县",code:"632725"},{name:"曲麻莱县",code:"632726"}],[{name:"格尔木市",code:"632801"},{name:"德令哈市",code:"632802"},{name:"乌兰县",code:"632821"},{name:"都兰县",code:"632822"},{name:"天峻县",code:"632823"}]],[[{name:"兴庆区",code:"640104"},{name:"西夏区",code:"640105"},{name:"金凤区",code:"640106"},{name:"永宁县",code:"640121"},{name:"贺兰县",code:"640122"},{name:"灵武市",code:"640181"}],[{name:"大武口区",code:"640202"},{name:"惠农区",code:"640205"},{name:"平罗县",code:"640221"}],[{name:"利通区",code:"640302"},{name:"盐池县",code:"640323"},{name:"同心县",code:"640324"},{name:"青铜峡市",code:"640381"},{name:"红寺堡区",code:"640303"}],[{name:"原州区",code:"640402"},{name:"西吉县",code:"640422"},{name:"隆德县",code:"640423"},{name:"泾源县",code:"640424"},{name:"彭阳县",code:"640425"}],[{name:"沙坡头区",code:"640502"},{name:"中宁县",code:"640521"},{name:"海原县",code:"640522"}]],[[{name:"天山区",code:"650102"},{name:"沙依巴克区",code:"650103"},{name:"新市区",code:"650104"},{name:"水磨沟区",code:"650105"},{name:"头屯河区",code:"650106"},{name:"达坂城区",code:"650107"},{name:"乌鲁木齐县",code:"650121"},{name:"米东区",code:"650109"}],[{name:"独山子区",code:"650202"},{name:"克拉玛依区",code:"650203"},{name:"白碱滩区",code:"650204"},{name:"乌尔禾区",code:"650205"}],[{name:"吐鲁番市",code:"652101"},{name:"鄯善县",code:"652122"},{name:"托克逊县",code:"652123"}],[{name:"哈密市",code:"652201"},{name:"巴里坤哈萨克自治县",code:"652222"},{name:"伊吾县",code:"652223"}],[{name:"昌吉市",code:"652301"},{name:"阜康市",code:"652302"},{name:"呼图壁县",code:"652323"},{name:"玛纳斯县",code:"652324"},{name:"奇台县",code:"652325"},{name:"吉木萨尔县",code:"652327"},{name:"木垒哈萨克自治县",code:"652328"}],[{name:"博乐市",code:"652701"},{name:"阿拉山口市",code:"652702"},{name:"精河县",code:"652722"},{name:"温泉县",code:"652723"}],[{name:"库尔勒市",code:"652801"},{name:"轮台县",code:"652822"},{name:"尉犁县",code:"652823"},{name:"若羌县",code:"652824"},{name:"且末县",code:"652825"},{name:"焉耆回族自治县",code:"652826"},{name:"和静县",code:"652827"},{name:"和硕县",code:"652828"},{name:"博湖县",code:"652829"}],[{name:"阿克苏市",code:"652901"},{name:"温宿县",code:"652922"},{name:"库车县",code:"652923"},{name:"沙雅县",code:"652924"},{name:"新和县",code:"652925"},{name:"拜城县",code:"652926"},{name:"乌什县",code:"652927"},{name:"阿瓦提县",code:"652928"},{name:"柯坪县",code:"652929"}],[{name:"阿图什市",code:"653001"},{name:"阿克陶县",code:"653022"},{name:"阿合奇县",code:"653023"},{name:"乌恰县",code:"653024"}],[{name:"喀什市",code:"653101"},{name:"疏附县",code:"653121"},{name:"疏勒县",code:"653122"},{name:"英吉沙县",code:"653123"},{name:"泽普县",code:"653124"},{name:"莎车县",code:"653125"},{name:"叶城县",code:"653126"},{name:"麦盖提县",code:"653127"},{name:"岳普湖县",code:"653128"},{name:"伽师县",code:"653129"},{name:"巴楚县",code:"653130"},{name:"塔什库尔干塔吉克自治县",code:"653131"}],[{name:"和田市",code:"653201"},{name:"和田县",code:"653221"},{name:"墨玉县",code:"653222"},{name:"皮山县",code:"653223"},{name:"洛浦县",code:"653224"},{name:"策勒县",code:"653225"},{name:"于田县",code:"653226"},{name:"民丰县",code:"653227"}],[{name:"伊宁市",code:"654002"},{name:"奎屯市",code:"654003"},{name:"伊宁县",code:"654021"},{name:"察布查尔锡伯自治县",code:"654022"},{name:"霍城县",code:"654023"},{name:"巩留县",code:"654024"},{name:"新源县",code:"654025"},{name:"昭苏县",code:"654026"},{name:"特克斯县",code:"654027"},{name:"尼勒克县",code:"654028"}],[{name:"塔城市",code:"654201"},{name:"乌苏市",code:"654202"},{name:"额敏县",code:"654221"},{name:"沙湾县",code:"654223"},{name:"托里县",code:"654224"},{name:"裕民县",code:"654225"},{name:"和布克赛尔蒙古自治县",code:"654226"}],[{name:"阿勒泰市",code:"654301"},{name:"布尔津县",code:"654321"},{name:"富蕴县",code:"654322"},{name:"福海县",code:"654323"},{name:"哈巴河县",code:"654324"},{name:"青河县",code:"654325"},{name:"吉木乃县",code:"654326"}],[{name:"石河子市",code:"659005"}],[{name:"阿拉尔市",code:"659006"}],[{name:"图木舒克市",code:"659007"}],[{name:"五家渠市",code:"659008"}]],[[{name:"中正区",code:"710101"},{name:"大同区",code:"710102"},{name:"中山区",code:"710103"},{name:"松山区",code:"710104"},{name:"大安区",code:"710105"},{name:"万华区",code:"710106"},{name:"信义区",code:"710107"},{name:"士林区",code:"710108"},{name:"北投区",code:"710109"},{name:"内湖区",code:"710110"},{name:"南港区",code:"710111"},{name:"文山区",code:"710112"}],[{name:"新兴区",code:"710201"},{name:"前金区",code:"710202"},{name:"盐埕区",code:"710204"},{name:"鼓山区",code:"710205"},{name:"旗津区",code:"710206"},{name:"前镇区",code:"710207"},{name:"三民区",code:"710208"},{name:"左营区",code:"710209"},{name:"楠梓区",code:"710210"},{name:"小港区",code:"710211"},{name:"苓雅区",code:"710241"},{name:"仁武区",code:"710242"},{name:"大社区",code:"710243"},{name:"冈山区",code:"710244"},{name:"路竹区",code:"710245"},{name:"阿莲区",code:"710246"},{name:"田寮区",code:"710247"},{name:"燕巢区",code:"710248"},{name:"桥头区",code:"710249"},{name:"梓官区",code:"710250"},{name:"弥陀区",code:"710251"},{name:"永安区",code:"710252"},{name:"湖内区",code:"710253"},{name:"凤山区",code:"710254"},{name:"大寮区",code:"710255"},{name:"林园区",code:"710256"},{name:"鸟松区",code:"710257"},{name:"大树区",code:"710258"},{name:"旗山区",code:"710259"},{name:"美浓区",code:"710260"},{name:"六龟区",code:"710261"},{name:"内门区",code:"710262"},{name:"杉林区",code:"710263"},{name:"甲仙区",code:"710264"},{name:"桃源区",code:"710265"},{name:"那玛夏区",code:"710266"},{name:"茂林区",code:"710267"},{name:"茄萣区",code:"710268"}],[{name:"中西区",code:"710301"},{name:"东区",code:"710302"},{name:"南区",code:"710303"},{name:"北区",code:"710304"},{name:"安平区",code:"710305"},{name:"安南区",code:"710306"},{name:"永康区",code:"710339"},{name:"归仁区",code:"710340"},{name:"新化区",code:"710341"},{name:"左镇区",code:"710342"},{name:"玉井区",code:"710343"},{name:"楠西区",code:"710344"},{name:"南化区",code:"710345"},{name:"仁德区",code:"710346"},{name:"关庙区",code:"710347"},{name:"龙崎区",code:"710348"},{name:"官田区",code:"710349"},{name:"麻豆区",code:"710350"},{name:"佳里区",code:"710351"},{name:"西港区",code:"710352"},{name:"七股区",code:"710353"},{name:"将军区",code:"710354"},{name:"学甲区",code:"710355"},{name:"北门区",code:"710356"},{name:"新营区",code:"710357"},{name:"后壁区",code:"710358"},{name:"白河区",code:"710359"},{name:"东山区",code:"710360"},{name:"六甲区",code:"710361"},{name:"下营区",code:"710362"},{name:"柳营区",code:"710363"},{name:"盐水区",code:"710364"},{name:"善化区",code:"710365"},{name:"大内区",code:"710366"},{name:"山上区",code:"710367"},{name:"新市区",code:"710368"},{name:"安定区",code:"710369"}],[{name:"中区",code:"710401"},{name:"东区",code:"710402"},{name:"南区",code:"710403"},{name:"西区",code:"710404"},{name:"北区",code:"710405"},{name:"北屯区",code:"710406"},{name:"西屯区",code:"710407"},{name:"南屯区",code:"710408"},{name:"太平区",code:"710431"},{name:"大里区",code:"710432"},{name:"雾峰区",code:"710433"},{name:"乌日区",code:"710434"},{name:"丰原区",code:"710435"},{name:"后里区",code:"710436"},{name:"石冈区",code:"710437"},{name:"东势区",code:"710438"},{name:"和平区",code:"710439"},{name:"新社区",code:"710440"},{name:"潭子区",code:"710441"},{name:"大雅区",code:"710442"},{name:"神冈区",code:"710443"},{name:"大肚区",code:"710444"},{name:"沙鹿区",code:"710445"},{name:"龙井区",code:"710446"},{name:"梧栖区",code:"710447"},{name:"清水区",code:"710448"},{name:"大甲区",code:"710449"},{name:"外埔区",code:"710450"},{name:"大安区",code:"710451"}],[{name:"金沙镇",code:"710507"},{name:"金湖镇",code:"710508"},{name:"金宁乡",code:"710509"},{name:"金城镇",code:"710510"},{name:"烈屿乡",code:"710511"},{name:"乌坵乡",code:"710512"}],[{name:"南投市",code:"710614"},{name:"中寮乡",code:"710615"},{name:"草屯镇",code:"710616"},{name:"国姓乡",code:"710617"},{name:"埔里镇",code:"710618"},{name:"仁爱乡",code:"710619"},{name:"名间乡",code:"710620"},{name:"集集镇",code:"710621"},{name:"水里乡",code:"710622"},{name:"鱼池乡",code:"710623"},{name:"信义乡",code:"710624"},{name:"竹山镇",code:"710625"},{name:"鹿谷乡",code:"710626"}],[{name:"仁爱区",code:"710701"},{name:"信义区",code:"710702"},{name:"中正区",code:"710703"},{name:"中山区",code:"710704"},{name:"安乐区",code:"710705"},{name:"暖暖区",code:"710706"},{name:"七堵区",code:"710707"}],[{name:"东区",code:"710801"},{name:"北区",code:"710802"},{name:"香山区",code:"710803"}],[{name:"东区",code:"710901"},{name:"西区",code:"710902"}],[{name:"万里区",code:"711130"},{name:"金山区",code:"711131"},{name:"板桥区",code:"711132"},{name:"汐止区",code:"711133"},{name:"深坑区",code:"711134"},{name:"石碇区",code:"711135"},{name:"瑞芳区",code:"711136"},{name:"平溪区",code:"711137"},{name:"双溪区",code:"711138"},{name:"贡寮区",code:"711139"},{name:"新店区",code:"711140"},{name:"坪林区",code:"711141"},{name:"乌来区",code:"711142"},{name:"永和区",code:"711143"},{name:"中和区",code:"711144"},{name:"土城区",code:"711145"},{name:"三峡区",code:"711146"},{name:"树林区",code:"711147"},{name:"莺歌区",code:"711148"},{name:"三重区",code:"711149"},{name:"新庄区",code:"711150"},{name:"泰山区",code:"711151"},{name:"林口区",code:"711152"},{name:"芦洲区",code:"711153"},{name:"五股区",code:"711154"},{name:"八里区",code:"711155"},{name:"淡水区",code:"711156"},{name:"三芝区",code:"711157"},{name:"石门区",code:"711158"}],[{name:"宜兰市",code:"711214"},{name:"头城镇",code:"711215"},{name:"礁溪乡",code:"711216"},{name:"壮围乡",code:"711217"},{name:"员山乡",code:"711218"},{name:"罗东镇",code:"711219"},{name:"三星乡",code:"711220"},{name:"大同乡",code:"711221"},{name:"五结乡",code:"711222"},{name:"冬山乡",code:"711223"},{name:"苏澳镇",code:"711224"},{name:"南澳乡",code:"711225"},{name:"钓鱼台",code:"711226"}],[{name:"竹北市",code:"711314"},{name:"湖口乡",code:"711315"},{name:"新丰乡",code:"711316"},{name:"新埔镇",code:"711317"},{name:"关西镇",code:"711318"},{name:"芎林乡",code:"711319"},{name:"宝山乡",code:"711320"},{name:"竹东镇",code:"711321"},{name:"五峰乡",code:"711322"},{name:"横山乡",code:"711323"},{name:"尖石乡",code:"711324"},{name:"北埔乡",code:"711325"},{name:"峨眉乡",code:"711326"}],[{name:"中坜市",code:"711414"},{name:"平镇市",code:"711415"},{name:"龙潭乡",code:"711416"},{name:"杨梅市",code:"711417"},{name:"新屋乡",code:"711418"},{name:"观音乡",code:"711419"},{name:"桃园市",code:"711420"},{name:"龟山乡",code:"711421"},{name:"八德市",code:"711422"},{name:"大溪镇",code:"711423"},{name:"复兴乡",code:"711424"},{name:"大园乡",code:"711425"},{name:"芦竹乡",code:"711426"}],[{name:"竹南镇",code:"711519"},{name:"头份镇",code:"711520"},{name:"三湾乡",code:"711521"},{name:"南庄乡",code:"711522"},{name:"狮潭乡",code:"711523"},{name:"后龙镇",code:"711524"},{name:"通霄镇",code:"711525"},{name:"苑里镇",code:"711526"},{name:"苗栗市",code:"711527"},{name:"造桥乡",code:"711528"},{name:"头屋乡",code:"711529"},{name:"公馆乡",code:"711530"},{name:"大湖乡",code:"711531"},{name:"泰安乡",code:"711532"},{name:"铜锣乡",code:"711533"},{name:"三义乡",code:"711534"},{name:"西湖乡",code:"711535"},{name:"卓兰镇",code:"711536"}],[{name:"彰化市",code:"711727"},{name:"芬园乡",code:"711728"},{name:"花坛乡",code:"711729"},{name:"秀水乡",code:"711730"},{name:"鹿港镇",code:"711731"},{name:"福兴乡",code:"711732"},{name:"线西乡",code:"711733"},{name:"和美镇",code:"711734"},{name:"伸港乡",code:"711735"},{name:"员林镇",code:"711736"},{name:"社头乡",code:"711737"},{name:"永靖乡",code:"711738"},{name:"埔心乡",code:"711739"},{name:"溪湖镇",code:"711740"},{name:"大村乡",code:"711741"},{name:"埔盐乡",code:"711742"},{name:"田中镇",code:"711743"},{name:"北斗镇",code:"711744"},{name:"田尾乡",code:"711745"},{name:"埤头乡",code:"711746"},{name:"溪州乡",code:"711747"},{name:"竹塘乡",code:"711748"},{name:"二林镇",code:"711749"},{name:"大城乡",code:"711750"},{name:"芳苑乡",code:"711751"},{name:"二水乡",code:"711752"}],[{name:"番路乡",code:"711919"},{name:"梅山乡",code:"711920"},{name:"竹崎乡",code:"711921"},{name:"阿里山乡",code:"711922"},{name:"中埔乡",code:"711923"},{name:"大埔乡",code:"711924"},{name:"水上乡",code:"711925"},{name:"鹿草乡",code:"711926"},{name:"太保市",code:"711927"},{name:"朴子市",code:"711928"},{name:"东石乡",code:"711929"},{name:"六脚乡",code:"711930"},{name:"新港乡",code:"711931"},{name:"民雄乡",code:"711932"},{name:"大林镇",code:"711933"},{name:"溪口乡",code:"711934"},{name:"义竹乡",code:"711935"},{name:"布袋镇",code:"711936"}],[{name:"斗南镇",code:"712121"},{name:"大埤乡",code:"712122"},{name:"虎尾镇",code:"712123"},{name:"土库镇",code:"712124"},{name:"褒忠乡",code:"712125"},{name:"东势乡",code:"712126"},{name:"台西乡",code:"712127"},{name:"仑背乡",code:"712128"},{name:"麦寮乡",code:"712129"},{name:"斗六市",code:"712130"},{name:"林内乡",code:"712131"},{name:"古坑乡",code:"712132"},{name:"莿桐乡",code:"712133"},{name:"西螺镇",code:"712134"},{name:"二仑乡",code:"712135"},{name:"北港镇",code:"712136"},{name:"水林乡",code:"712137"},{name:"口湖乡",code:"712138"},{name:"四湖乡",code:"712139"},{name:"元长乡",code:"712140"}],[{name:"屏东市",code:"712434"},{name:"三地门乡",code:"712435"},{name:"雾台乡",code:"712436"},{name:"玛家乡",code:"712437"},{name:"九如乡",code:"712438"},{name:"里港乡",code:"712439"},{name:"高树乡",code:"712440"},{name:"盐埔乡",code:"712441"},{name:"长治乡",code:"712442"},{name:"麟洛乡",code:"712443"},{name:"竹田乡",code:"712444"},{name:"内埔乡",code:"712445"},{name:"万丹乡",code:"712446"},{name:"潮州镇",code:"712447"},{name:"泰武乡",code:"712448"},{name:"来义乡",code:"712449"},{name:"万峦乡",code:"712450"},{name:"崁顶乡",code:"712451"},{name:"新埤乡",code:"712452"},{name:"南州乡",code:"712453"},{name:"林边乡",code:"712454"},{name:"东港镇",code:"712455"},{name:"琉球乡",code:"712456"},{name:"佳冬乡",code:"712457"},{name:"新园乡",code:"712458"},{name:"枋寮乡",code:"712459"},{name:"枋山乡",code:"712460"},{name:"春日乡",code:"712461"},{name:"狮子乡",code:"712462"},{name:"车城乡",code:"712463"},{name:"牡丹乡",code:"712464"},{name:"恒春镇",code:"712465"},{name:"满州乡",code:"712466"}],[{name:"台东市",code:"712517"},{name:"绿岛乡",code:"712518"},{name:"兰屿乡",code:"712519"},{name:"延平乡",code:"712520"},{name:"卑南乡",code:"712521"},{name:"鹿野乡",code:"712522"},{name:"关山镇",code:"712523"},{name:"海端乡",code:"712524"},{name:"池上乡",code:"712525"},{name:"东河乡",code:"712526"},{name:"成功镇",code:"712527"},{name:"长滨乡",code:"712528"},{name:"金峰乡",code:"712529"},{name:"大武乡",code:"712530"},{name:"达仁乡",code:"712531"},{name:"太麻里乡",code:"712532"}],[{name:"花莲市",code:"712615"},{name:"新城乡",code:"712616"},{name:"太鲁阁",code:"712617"},{name:"秀林乡",code:"712618"},{name:"吉安乡",code:"712619"},{name:"寿丰乡",code:"712620"},{name:"凤林镇",code:"712621"},{name:"光复乡",code:"712622"},{name:"丰滨乡",code:"712623"},{name:"瑞穗乡",code:"712624"},{name:"万荣乡",code:"712625"},{name:"玉里镇",code:"712626"},{name:"卓溪乡",code:"712627"},{name:"富里乡",code:"712628"}],[{name:"马公市",code:"712707"},{name:"西屿乡",code:"712708"},{name:"望安乡",code:"712709"},{name:"七美乡",code:"712710"},{name:"白沙乡",code:"712711"},{name:"湖西乡",code:"712712"}],[{name:"南竿乡",code:"712805"},{name:"北竿乡",code:"712806"},{name:"莒光乡",code:"712807"},{name:"东引乡",code:"712808"}]],[[{name:"中西区",code:"810101"},{name:"湾仔",code:"810102"},{name:"东区",code:"810103"},{name:"南区",code:"810104"}],[{name:"九龙城区",code:"810201"},{name:"油尖旺区",code:"810202"},{name:"深水埗区",code:"810203"},{name:"黄大仙区",code:"810204"},{name:"观塘区",code:"810205"}],[{name:"北区",code:"810301"},{name:"大埔区",code:"810302"},{name:"沙田区",code:"810303"},{name:"西贡区",code:"810304"},{name:"元朗区",code:"810305"},{name:"屯门区",code:"810306"},{name:"荃湾区",code:"810307"},{name:"葵青区",code:"810308"},{name:"离岛区",code:"810309"}]],[[{name:"澳门半岛",code:"820101"}],[{name:"离岛",code:"820201"}]],[[{name:"海外",code:"990101"}]]]];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map