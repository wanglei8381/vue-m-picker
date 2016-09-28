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
	Vue.component('region-picker', __webpack_require__(7));
	var areas = __webpack_require__(14);
	new Vue({
	    el: 'body',
	    data: function data() {
	        return {
	            provinceList: [],
	            cityList: [],
	            areaList: [],
	            province: {},
	            city: {},
	            area: {},
	            provinceIdx: 0,
	            cityIdx: 0,
	            areaIdx: 0,
	            message: '',
	            open: false,
	            isWatch: false
	        };
	    },
	    watch: {
	        provinceIdx: function provinceIdx(idx) {
	            if (!this.isWatch) return;
	            this.cityList = areas[1][idx];
	            this.areaList = areas[2][idx][0];
	            this.city = this.cityList[0];
	            this.area = this.areaList[0];
	            this.cityIdx = 0;
	            this.areaIdx = 0;
	        },
	        cityIdx: function cityIdx(idx) {
	            if (!this.isWatch) return;
	            this.areaList = areas[2][idx][0];
	            this.area = this.areaList[0];
	            this.areaIdx = 0;
	        }
	    },
	    methods: {
	        choose: function choose() {
	            this.open = true;
	        },
	        cancle: function cancle() {
	            this.open = false;
	        },
	        confirm: function confirm() {
	            this.open = false;
	            this.message = this.province.name + '/' + this.city.name + '/' + this.area.name;
	        }
	    },
	    ready: function ready() {
	        var _this = this;
	
	        this.provinceIdx = 1;
	        this.cityIdx = 0;
	        this.areaIdx = 1;
	        this.provinceList = areas[0];
	        this.cityList = areas[1][this.provinceIdx];
	        this.areaList = areas[2][this.provinceIdx][this.cityIdx];
	        this.province = this.provinceList[this.provinceIdx];
	        this.city = this.cityList[this.cityIdx];
	        this.area = this.areaList[this.areaIdx];
	        window.addEventListener('click', function () {
	            _this.open = false;
	        });
	        this.$nextTick(function () {
	            _this.isWatch = true;
	        });
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".choose-result {\n  text-align: center;\n  position: absolute;\n  top: 100px;\n  width: 100%;\n}\n\n.choose-result .choose-result-cnt {\n  margin-top: 30px;\n}\n\n.picker-wrapper {\n  position: fixed;\n  bottom: -260px;\n  width: 100%;\n  transition: bottom 0.3s\n}\n\n.picker-wrapper.open {\n  bottom: 0;\n}\n\n.picker-wrapper .picker-action {\n  box-sizing: border-box;\n  height: 50px;\n  background-color: #f3efef;\n  padding: 8px 10px;\n  box-shadow: 0 -1px 3px 1px #ddd;\n}\n\n.btn {\n  display: inline-block;\n  outline: none;\n  line-height: 1.42;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #fff;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\n.btn.btn-confirm {\n  background-color: #027CFF;\n  border: 1px solid #027CFF;\n  color: #fff;\n  float: right;\n}", ""]);
	
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

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.27
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([^-])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore else */
	  if (inBrowser && window.postMessage && !window.importScripts && // not in WebWorker
	  !(isAndroid && !window.requestAnimationFrame) // not in Android <= 4.3
	  ) {
	      (function () {
	        var NEXT_TICK_TOKEN = '__vue__nextTick__';
	        window.addEventListener('message', function (e) {
	          if (e.source === window && e.data === NEXT_TICK_TOKEN) {
	            nextTickHandler();
	          }
	        });
	        timerFunc = function () {
	          window.postMessage(NEXT_TICK_TOKEN, '*');
	        };
	      })();
	    } else {
	    timerFunc = typeof global !== 'undefined' && global.setImmediate || setTimeout;
	  }
	
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;
	
	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;
	
	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };
	
	function peek() {
	  return str.charCodeAt(index + 1);
	}
	
	function next() {
	  return str.charCodeAt(++index);
	}
	
	function eof() {
	  return index >= len;
	}
	
	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}
	
	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}
	
	function isExpStart(chr) {
	  return expStartChr[chr];
	}
	
	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}
	
	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}
	
	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;
	
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }
	
	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }
	
	    next();
	
	    if (inExp === 0) {
	      break;
	    }
	  }
	}
	
	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */
	
	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }
	
	  return str.slice(start + 1, index) || null;
	}
	
	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}
	
	function parseFilter() {
	  var filter = {};
	  var args;
	
	  state = filterState;
	  filter.name = parseExpression().trim();
	
	  state = filterArgState;
	  args = parseFilterArguments();
	
	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}
	
	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }
	
	  return args;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;
	
	  var filters;
	
	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
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
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
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
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		findVmFromFrag: findVmFromFrag,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
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
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
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
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	        this.updateRef(value);
	      }
	    } else {
	      this.updateRef(value);
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  updateRef: function updateRef(value) {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this.vm || this._scope).$refs;
	    var refs = hash[ref];
	    var key = this._frag.scope.$key;
	    if (!refs) return;
	    if (value) {
	      if (Array.isArray(refs)) {
	        refs.push(findVmFromFrag(this._frag));
	      } else {
	        refs[key] = findVmFromFrag(this._frag);
	      }
	    } else {
	      if (Array.isArray(refs)) {
	        refs.$remove(findVmFromFrag(this._frag));
	      } else {
	        refs[key] = null;
	        delete refs[key];
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;
	
	  var groupedMap = {};
	  var i, j, k, l;
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	    }
	    array.push(dir);
	  }
	
	  var index = 0;
	  var priorities = Object.keys(groupedMap).sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	
	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }
	
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'if' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
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
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
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
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.27';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(8);
	
	var Touch = __webpack_require__(10);
	module.exports = {
	    template: __webpack_require__(13),
	    data: function data() {
	        return {
	            distinct: 0,
	            speed: 0.5
	        };
	    },
	
	    props: {
	        list: {
	            type: Array,
	            required: true
	        },
	        picker: {
	            type: Object,
	            required: true,
	            twoWay: true
	        },
	        label: {
	            type: String,
	            required: false,
	            default: 'label'
	        },
	        value: {
	            type: String,
	            required: false,
	            default: 'value'
	        },
	        curIdx: {
	            type: Number,
	            required: false,
	            default: 0
	        }
	    },
	    watch: {
	        list: 'reload',
	        curIdx: function curIdx(val, oval) {
	            this.distinct = val * 20;
	            //当下标变化时,自动滚动到指定位置
	            if (this.$list) {
	                this.$list[oval].classList.remove('highlight');
	                this.$list[val].classList.add('highlight');
	            }
	            if (this.$container) {
	                this.$container.style.transform = 'rotateX(' + this.distinct + 'deg)';
	            }
	        }
	    },
	    computed: {
	        maxVal: function maxVal() {
	            return (this.list.length - 1) * 20;
	        }
	    },
	    methods: {
	        move: function move(res) {
	            var distinct = this.distinct;
	            distinct += res.yrange * this.speed;
	            this.internalCal(distinct);
	        },
	        end: function end() {
	            var distinct = this.distinct;
	            this.internalCal(distinct, true);
	            this.$container.style.webkitTransition = '100ms ease-out';
	            this.picker = this.list[this.curIdx];
	        },
	        internalCal: function internalCal(distinct, isEnd) {
	            var baseNum = isEnd ? -0 : 20;
	            if (distinct > this.maxVal + baseNum) {
	                distinct = this.maxVal + baseNum;
	            }
	            if (distinct < -baseNum) {
	                distinct = -baseNum;
	            }
	
	            var base = parseInt(distinct / 20);
	            var min = 20 * base;
	            var max = min + 20;
	            var interval = max;
	            if (distinct - min <= max - distinct) {
	                interval = min;
	            }
	            distinct = isEnd ? interval : distinct;
	            if (distinct >= 0 && distinct <= this.maxVal) {
	                //选中的下表
	                var idx = interval / 20;
	                this.$list[this.curIdx].classList.remove('highlight');
	                this.$list[idx].classList.add('highlight');
	                this.curIdx = idx;
	            }
	
	            this.$container.style.transform = 'rotateX(' + distinct + 'deg)';
	            this.distinct = distinct;
	            this.showCal();
	        },
	        showCal: function showCal() {
	            if (this.list.length <= 15) return;
	            var min = this.curIdx - 5;
	            var max = this.curIdx + 5;
	            for (var i = 0, len = this.list.length; i < len; i++) {
	                this.$list[i].style.visibility = i >= min && i <= max ? 'visible' : 'hidden';
	            }
	        },
	        reload: function reload() {
	            var _this = this;
	
	            //当数据变化时,重新加载数据
	            this.$container = this.$el.querySelector('.m-picker-list');
	            this.$list = this.$container.querySelectorAll('li');
	            this.$list[this.curIdx].classList.add('highlight');
	            this.showCal();
	            this.$container.style.transform = 'rotateX(' + this.distinct + 'deg)';
	            this.$container.addEventListener("webkitTransitionEnd", function () {
	                _this.$container.style.webkitTransition = null;
	            });
	        }
	    },
	    ready: function ready() {
	        var _this2 = this;
	
	        if (this.list.length > 0) {
	            this.reload();
	        }
	
	        var touch = new Touch(this.$el);
	        touch.start();
	        touch.on('touch:start', function (res) {
	            res.e.preventDefault();
	        });
	
	        touch.on('touch:move', function (res) {
	            res.e.preventDefault();
	            _this2.move(res);
	        });
	
	        touch.on('touch:end', function (res) {
	            res.e.preventDefault();
	            _this2.end(res);
	        });
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n   transform\n       1: transform的值有先后顺序,如rotateX(40deg) translateZ(60px);表示先在X轴旋转40度,再在Z轴上移动60px\n           如果translateZ(60px) rotateX(40deg);表示先在Z轴上移动60px,再在X轴旋转40度\n      2: transform-origin要和transform一起使用才有效\n*/\n.m-picker,\n.m-picker * {\n  box-sizing: border-box;\n}\n.m-picker {\n  height: 200px;\n  background-color: #ddd;\n}\n.m-picker .m-picker-inner {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);\n  -webkit-mask-box-image: linear-gradient(top, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);\n}\n.m-picker .m-picker-inner .m-picker-list,\n.m-picker .m-picker-inner .m-picker-rule {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  margin-top: -18px;\n  width: 100%;\n  list-style: none;\n  padding: 0;\n  line-height: 36px;\n  height: 36px;\n}\n.m-picker .m-picker-inner .m-picker-rule {\n  z-index: 2;\n  border-top: 1px solid rgba(0,0,0,0.1);\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n.m-picker .m-picker-inner .m-picker-list {\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  perspective: 1000px;\n  -webkit-perspective: 1000px;\n}\n.m-picker .m-picker-inner .m-picker-list li {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  color: #888;\n/* 超出的部分省略 */\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n/* 元素不面向屏幕时是否可见 */\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.m-picker .m-picker-inner .m-picker-list li.highlight {\n  color: #222;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//触摸事件处理
	var Event = __webpack_require__(11);
	var domEventHelper = __webpack_require__(12);
	
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-picker\">\n  <div class=\"m-picker-inner\">\n    <div class=\"m-picker-rule\"></div>\n    <ul class=\"m-picker-list\">\n      <li v-for=\"item of list\"\n          :style=\"{transform: 'rotateX(' + (-20 * $index) +'deg) translateZ(90px)'}\">{{item[label]}}\n      </li>\n    </ul>\n  </div>\n</div>";

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";module.exports=[[{name:"北京",code:"110000"},{name:"天津",code:"120000"},{name:"河北省",code:"130000"},{name:"山西省",code:"140000"},{name:"内蒙古自治区",code:"150000"},{name:"辽宁省",code:"210000"},{name:"吉林省",code:"220000"},{name:"黑龙江省",code:"230000"},{name:"上海",code:"310000"},{name:"江苏省",code:"320000"},{name:"浙江省",code:"330000"},{name:"安徽省",code:"340000"},{name:"福建省",code:"350000"},{name:"江西省",code:"360000"},{name:"山东省",code:"370000"},{name:"河南省",code:"410000"},{name:"湖北省",code:"420000"},{name:"湖南省",code:"430000"},{name:"广东省",code:"440000"},{name:"广西壮族自治区",code:"450000"},{name:"海南省",code:"460000"},{name:"重庆",code:"500000"},{name:"四川省",code:"510000"},{name:"贵州省",code:"520000"},{name:"云南省",code:"530000"},{name:"西藏自治区",code:"540000"},{name:"陕西省",code:"610000"},{name:"甘肃省",code:"620000"},{name:"青海省",code:"630000"},{name:"宁夏回族自治区",code:"640000"},{name:"新疆维吾尔自治区",code:"650000"},{name:"台湾省",code:"710000"},{name:"香港特别行政区",code:"810000"},{name:"澳门特别行政区",code:"820000"},{name:"海外",code:"990000"}],[[{name:"北京市",code:"110100"}],[{name:"天津市",code:"120100"}],[{name:"石家庄市",code:"130100"},{name:"唐山市",code:"130200"},{name:"秦皇岛市",code:"130300"},{name:"邯郸市",code:"130400"},{name:"邢台市",code:"130500"},{name:"保定市",code:"130600"},{name:"张家口市",code:"130700"},{name:"承德市",code:"130800"},{name:"沧州市",code:"130900"},{name:"廊坊市",code:"131000"},{name:"衡水市",code:"131100"}],[{name:"太原市",code:"140100"},{name:"大同市",code:"140200"},{name:"阳泉市",code:"140300"},{name:"长治市",code:"140400"},{name:"晋城市",code:"140500"},{name:"朔州市",code:"140600"},{name:"晋中市",code:"140700"},{name:"运城市",code:"140800"},{name:"忻州市",code:"140900"},{name:"临汾市",code:"141000"},{name:"吕梁市",code:"141100"}],[{name:"呼和浩特市",code:"150100"},{name:"包头市",code:"150200"},{name:"乌海市",code:"150300"},{name:"赤峰市",code:"150400"},{name:"通辽市",code:"150500"},{name:"鄂尔多斯市",code:"150600"},{name:"呼伦贝尔市",code:"150700"},{name:"巴彦淖尔市",code:"150800"},{name:"乌兰察布市",code:"150900"},{name:"兴安盟",code:"152200"},{name:"锡林郭勒盟",code:"152500"},{name:"阿拉善盟",code:"152900"}],[{name:"沈阳市",code:"210100"},{name:"大连市",code:"210200"},{name:"鞍山市",code:"210300"},{name:"抚顺市",code:"210400"},{name:"本溪市",code:"210500"},{name:"丹东市",code:"210600"},{name:"锦州市",code:"210700"},{name:"营口市",code:"210800"},{name:"阜新市",code:"210900"},{name:"辽阳市",code:"211000"},{name:"盘锦市",code:"211100"},{name:"铁岭市",code:"211200"},{name:"朝阳市",code:"211300"},{name:"葫芦岛市",code:"211400"}],[{name:"长春市",code:"220100"},{name:"吉林市",code:"220200"},{name:"四平市",code:"220300"},{name:"辽源市",code:"220400"},{name:"通化市",code:"220500"},{name:"白山市",code:"220600"},{name:"松原市",code:"220700"},{name:"白城市",code:"220800"},{name:"延边朝鲜族自治州",code:"222400"}],[{name:"哈尔滨市",code:"230100"},{name:"齐齐哈尔市",code:"230200"},{name:"鸡西市",code:"230300"},{name:"鹤岗市",code:"230400"},{name:"双鸭山市",code:"230500"},{name:"大庆市",code:"230600"},{name:"伊春市",code:"230700"},{name:"佳木斯市",code:"230800"},{name:"七台河市",code:"230900"},{name:"牡丹江市",code:"231000"},{name:"黑河市",code:"231100"},{name:"绥化市",code:"231200"},{name:"大兴安岭地区",code:"232700"}],[{name:"上海市",code:"310100"}],[{name:"南京市",code:"320100"},{name:"无锡市",code:"320200"},{name:"徐州市",code:"320300"},{name:"常州市",code:"320400"},{name:"苏州市",code:"320500"},{name:"南通市",code:"320600"},{name:"连云港市",code:"320700"},{name:"淮安市",code:"320800"},{name:"盐城市",code:"320900"},{name:"扬州市",code:"321000"},{name:"镇江市",code:"321100"},{name:"泰州市",code:"321200"},{name:"宿迁市",code:"321300"}],[{name:"杭州市",code:"330100"},{name:"宁波市",code:"330200"},{name:"温州市",code:"330300"},{name:"嘉兴市",code:"330400"},{name:"湖州市",code:"330500"},{name:"绍兴市",code:"330600"},{name:"金华市",code:"330700"},{name:"衢州市",code:"330800"},{name:"舟山市",code:"330900"},{name:"台州市",code:"331000"},{name:"丽水市",code:"331100"}],[{name:"合肥市",code:"340100"},{name:"芜湖市",code:"340200"},{name:"蚌埠市",code:"340300"},{name:"淮南市",code:"340400"},{name:"马鞍山市",code:"340500"},{name:"淮北市",code:"340600"},{name:"铜陵市",code:"340700"},{name:"安庆市",code:"340800"},{name:"黄山市",code:"341000"},{name:"滁州市",code:"341100"},{name:"阜阳市",code:"341200"},{name:"宿州市",code:"341300"},{name:"六安市",code:"341500"},{name:"亳州市",code:"341600"},{name:"池州市",code:"341700"},{name:"宣城市",code:"341800"}],[{name:"福州市",code:"350100"},{name:"厦门市",code:"350200"},{name:"莆田市",code:"350300"},{name:"三明市",code:"350400"},{name:"泉州市",code:"350500"},{name:"漳州市",code:"350600"},{name:"南平市",code:"350700"},{name:"龙岩市",code:"350800"},{name:"宁德市",code:"350900"}],[{name:"南昌市",code:"360100"},{name:"景德镇市",code:"360200"},{name:"萍乡市",code:"360300"},{name:"九江市",code:"360400"},{name:"新余市",code:"360500"},{name:"鹰潭市",code:"360600"},{name:"赣州市",code:"360700"},{name:"吉安市",code:"360800"},{name:"宜春市",code:"360900"},{name:"抚州市",code:"361000"},{name:"上饶市",code:"361100"}],[{name:"济南市",code:"370100"},{name:"青岛市",code:"370200"},{name:"淄博市",code:"370300"},{name:"枣庄市",code:"370400"},{name:"东营市",code:"370500"},{name:"烟台市",code:"370600"},{name:"潍坊市",code:"370700"},{name:"济宁市",code:"370800"},{name:"泰安市",code:"370900"},{name:"威海市",code:"371000"},{name:"日照市",code:"371100"},{name:"莱芜市",code:"371200"},{name:"临沂市",code:"371300"},{name:"德州市",code:"371400"},{name:"聊城市",code:"371500"},{name:"滨州市",code:"371600"},{name:"菏泽市",code:"371700"}],[{name:"郑州市",code:"410100"},{name:"开封市",code:"410200"},{name:"洛阳市",code:"410300"},{name:"平顶山市",code:"410400"},{name:"安阳市",code:"410500"},{name:"鹤壁市",code:"410600"},{name:"新乡市",code:"410700"},{name:"焦作市",code:"410800"},{name:"济源市",code:"410881"},{name:"濮阳市",code:"410900"},{name:"许昌市",code:"411000"},{name:"漯河市",code:"411100"},{name:"三门峡市",code:"411200"},{name:"南阳市",code:"411300"},{name:"商丘市",code:"411400"},{name:"信阳市",code:"411500"},{name:"周口市",code:"411600"},{name:"驻马店市",code:"411700"}],[{name:"武汉市",code:"420100"},{name:"黄石市",code:"420200"},{name:"十堰市",code:"420300"},{name:"宜昌市",code:"420500"},{name:"襄阳市",code:"420600"},{name:"鄂州市",code:"420700"},{name:"荆门市",code:"420800"},{name:"孝感市",code:"420900"},{name:"荆州市",code:"421000"},{name:"黄冈市",code:"421100"},{name:"咸宁市",code:"421200"},{name:"随州市",code:"421300"},{name:"恩施土家族苗族自治州",code:"422800"},{name:"仙桃市",code:"429004"},{name:"潜江市",code:"429005"},{name:"天门市",code:"429006"},{name:"神农架林区",code:"429021"}],[{name:"长沙市",code:"430100"},{name:"株洲市",code:"430200"},{name:"湘潭市",code:"430300"},{name:"衡阳市",code:"430400"},{name:"邵阳市",code:"430500"},{name:"岳阳市",code:"430600"},{name:"常德市",code:"430700"},{name:"张家界市",code:"430800"},{name:"益阳市",code:"430900"},{name:"郴州市",code:"431000"},{name:"永州市",code:"431100"},{name:"怀化市",code:"431200"},{name:"娄底市",code:"431300"},{name:"湘西土家族苗族自治州",code:"433100"}],[{name:"广州市",code:"440100"},{name:"韶关市",code:"440200"},{name:"深圳市",code:"440300"},{name:"珠海市",code:"440400"},{name:"汕头市",code:"440500"},{name:"佛山市",code:"440600"},{name:"江门市",code:"440700"},{name:"湛江市",code:"440800"},{name:"茂名市",code:"440900"},{name:"肇庆市",code:"441200"},{name:"惠州市",code:"441300"},{name:"梅州市",code:"441400"},{name:"汕尾市",code:"441500"},{name:"河源市",code:"441600"},{name:"阳江市",code:"441700"},{name:"清远市",code:"441800"},{name:"东莞市",code:"441900"},{name:"中山市",code:"442000"},{name:"潮州市",code:"445100"},{name:"揭阳市",code:"445200"},{name:"云浮市",code:"445300"}],[{name:"南宁市",code:"450100"},{name:"柳州市",code:"450200"},{name:"桂林市",code:"450300"},{name:"梧州市",code:"450400"},{name:"北海市",code:"450500"},{name:"防城港市",code:"450600"},{name:"钦州市",code:"450700"},{name:"贵港市",code:"450800"},{name:"玉林市",code:"450900"},{name:"百色市",code:"451000"},{name:"贺州市",code:"451100"},{name:"河池市",code:"451200"},{name:"来宾市",code:"451300"},{name:"崇左市",code:"451400"}],[{name:"海口市",code:"460100"},{name:"三亚市",code:"460200"},{name:"三沙市",code:"460300"},{name:"五指山市",code:"469001"},{name:"琼海市",code:"469002"},{name:"儋州市",code:"469003"},{name:"文昌市",code:"469005"},{name:"万宁市",code:"469006"},{name:"东方市",code:"469007"},{name:"定安县",code:"469025"},{name:"屯昌县",code:"469026"},{name:"澄迈县",code:"469027"},{name:"临高县",code:"469028"},{name:"白沙黎族自治县",code:"469030"},{name:"昌江黎族自治县",code:"469031"},{name:"乐东黎族自治县",code:"469033"},{name:"陵水黎族自治县",code:"469034"},{name:"保亭黎族苗族自治县",code:"469035"},{name:"琼中黎族苗族自治县",code:"469036"}],[{name:"重庆市",code:"500100"}],[{name:"成都市",code:"510100"},{name:"自贡市",code:"510300"},{name:"攀枝花市",code:"510400"},{name:"泸州市",code:"510500"},{name:"德阳市",code:"510600"},{name:"绵阳市",code:"510700"},{name:"广元市",code:"510800"},{name:"遂宁市",code:"510900"},{name:"内江市",code:"511000"},{name:"乐山市",code:"511100"},{name:"南充市",code:"511300"},{name:"眉山市",code:"511400"},{name:"宜宾市",code:"511500"},{name:"广安市",code:"511600"},{name:"达州市",code:"511700"},{name:"雅安市",code:"511800"},{name:"巴中市",code:"511900"},{name:"资阳市",code:"512000"},{name:"阿坝藏族羌族自治州",code:"513200"},{name:"甘孜藏族自治州",code:"513300"},{name:"凉山彝族自治州",code:"513400"}],[{name:"贵阳市",code:"520100"},{name:"六盘水市",code:"520200"},{name:"遵义市",code:"520300"},{name:"安顺市",code:"520400"},{name:"铜仁市",code:"522200"},{name:"黔西南布依族苗族自治州",code:"522300"},{name:"毕节市",code:"522400"},{name:"黔东南苗族侗族自治州",code:"522600"},{name:"黔南布依族苗族自治州",code:"522700"}],[{name:"昆明市",code:"530100"},{name:"曲靖市",code:"530300"},{name:"玉溪市",code:"530400"},{name:"保山市",code:"530500"},{name:"昭通市",code:"530600"},{name:"丽江市",code:"530700"},{name:"普洱市",code:"530800"},{name:"临沧市",code:"530900"},{name:"楚雄彝族自治州",code:"532300"},{name:"红河哈尼族彝族自治州",code:"532500"},{name:"文山壮族苗族自治州",code:"532600"},{name:"西双版纳傣族自治州",code:"532800"},{name:"大理白族自治州",code:"532900"},{name:"德宏傣族景颇族自治州",code:"533100"},{name:"怒江傈僳族自治州",code:"533300"},{name:"迪庆藏族自治州",code:"533400"}],[{name:"拉萨市",code:"540100"},{name:"昌都市",code:"542100"},{name:"山南地区",code:"542200"},{name:"日喀则市",code:"542300"},{name:"那曲地区",code:"542400"},{name:"阿里地区",code:"542500"},{name:"林芝地区",code:"542600"}],[{name:"西安市",code:"610100"},{name:"铜川市",code:"610200"},{name:"宝鸡市",code:"610300"},{name:"咸阳市",code:"610400"},{name:"渭南市",code:"610500"},{name:"延安市",code:"610600"},{name:"汉中市",code:"610700"},{name:"榆林市",code:"610800"},{name:"安康市",code:"610900"},{name:"商洛市",code:"611000"}],[{name:"兰州市",code:"620100"},{name:"嘉峪关市",code:"620200"},{name:"金昌市",code:"620300"},{name:"白银市",code:"620400"},{name:"天水市",code:"620500"},{name:"武威市",code:"620600"},{name:"张掖市",code:"620700"},{name:"平凉市",code:"620800"},{name:"酒泉市",code:"620900"},{name:"庆阳市",code:"621000"},{name:"定西市",code:"621100"},{name:"陇南市",code:"621200"},{name:"临夏回族自治州",code:"622900"},{name:"甘南藏族自治州",code:"623000"}],[{name:"西宁市",code:"630100"},{name:"海东市",code:"632100"},{name:"海北藏族自治州",code:"632200"},{name:"黄南藏族自治州",code:"632300"},{name:"海南藏族自治州",code:"632500"},{name:"果洛藏族自治州",code:"632600"},{name:"玉树藏族自治州",code:"632700"},{name:"海西蒙古族藏族自治州",code:"632800"}],[{name:"银川市",code:"640100"},{name:"石嘴山市",code:"640200"},{name:"吴忠市",code:"640300"},{name:"固原市",code:"640400"},{name:"中卫市",code:"640500"}],[{name:"乌鲁木齐市",code:"650100"},{name:"克拉玛依市",code:"650200"},{name:"吐鲁番地区",code:"652100"},{name:"哈密地区",code:"652200"},{name:"昌吉回族自治州",code:"652300"},{name:"博尔塔拉蒙古自治州",code:"652700"},{name:"巴音郭楞蒙古自治州",code:"652800"},{name:"阿克苏地区",code:"652900"},{name:"克孜勒苏柯尔克孜自治州",code:"653000"},{name:"喀什地区",code:"653100"},{name:"和田地区",code:"653200"},{name:"伊犁哈萨克自治州",code:"654000"},{name:"塔城地区",code:"654200"},{name:"阿勒泰地区",code:"654300"},{name:"石河子市",code:"659001"},{name:"阿拉尔市",code:"659002"},{name:"图木舒克市",code:"659003"},{name:"五家渠市",code:"659004"}],[{name:"台北市",code:"710100"},{name:"高雄市",code:"710200"},{name:"台南市",code:"710300"},{name:"台中市",code:"710400"},{name:"金门县",code:"710500"},{name:"南投县",code:"710600"},{name:"基隆市",code:"710700"},{name:"新竹市",code:"710800"},{name:"嘉义市",code:"710900"},{name:"新北市",code:"711100"},{name:"宜兰县",code:"711200"},{name:"新竹县",code:"711300"},{name:"桃园县",code:"711400"},{name:"苗栗县",code:"711500"},{name:"彰化县",code:"711700"},{name:"嘉义县",code:"711900"},{name:"云林县",code:"712100"},{name:"屏东县",code:"712400"},{name:"台东县",code:"712500"},{name:"花莲县",code:"712600"},{name:"澎湖县",code:"712700"},{name:"连江县",code:"712800"}],[{name:"香港岛",code:"810100"},{name:"九龙",code:"810200"},{name:"新界",code:"810300"}],[{name:"澳门半岛",code:"820100"},{name:"离岛",code:"820200"}],[{name:"海外",code:"990100"}]],[[[{name:"东城区",code:"110101"},{name:"西城区",code:"110102"},{name:"朝阳区",code:"110105"},{name:"丰台区",code:"110106"},{name:"石景山区",code:"110107"},{name:"海淀区",code:"110108"},{name:"门头沟区",code:"110109"},{name:"房山区",code:"110111"},{name:"通州区",code:"110112"},{name:"顺义区",code:"110113"},{name:"昌平区",code:"110114"},{name:"大兴区",code:"110115"},{name:"怀柔区",code:"110116"},{name:"平谷区",code:"110117"},{name:"密云县",code:"110228"},{name:"延庆县",code:"110229"}]],[[{name:"和平区",code:"120101"},{name:"河东区",code:"120102"},{name:"河西区",code:"120103"},{name:"南开区",code:"120104"},{name:"河北区",code:"120105"},{name:"红桥区",code:"120106"},{name:"东丽区",code:"120110"},{name:"西青区",code:"120111"},{name:"津南区",code:"120112"},{name:"北辰区",code:"120113"},{name:"武清区",code:"120114"},{name:"宝坻区",code:"120115"},{name:"宁河县",code:"120221"},{name:"静海县",code:"120223"},{name:"蓟县",code:"120225"},{name:"滨海新区",code:"120116"}]],[[{name:"长安区",code:"130102"},{name:"桥东区",code:"130103"},{name:"桥西区",code:"130104"},{name:"新华区",code:"130105"},{name:"井陉矿区",code:"130107"},{name:"裕华区",code:"130108"},{name:"井陉县",code:"130121"},{name:"正定县",code:"130123"},{name:"栾城区",code:"130124"},{name:"行唐县",code:"130125"},{name:"灵寿县",code:"130126"},{name:"高邑县",code:"130127"},{name:"深泽县",code:"130128"},{name:"赞皇县",code:"130129"},{name:"无极县",code:"130130"},{name:"平山县",code:"130131"},{name:"元氏县",code:"130132"},{name:"赵县",code:"130133"},{name:"辛集市",code:"130181"},{name:"藁城区",code:"130182"},{name:"晋州市",code:"130183"},{name:"新乐市",code:"130184"},{name:"鹿泉区",code:"130185"}],[{name:"路南区",code:"130202"},{name:"路北区",code:"130203"},{name:"古冶区",code:"130204"},{name:"开平区",code:"130205"},{name:"丰南区",code:"130207"},{name:"丰润区",code:"130208"},{name:"滦县",code:"130223"},{name:"滦南县",code:"130224"},{name:"乐亭县",code:"130225"},{name:"迁西县",code:"130227"},{name:"玉田县",code:"130229"},{name:"曹妃甸区",code:"130230"},{name:"遵化市",code:"130281"},{name:"迁安市",code:"130283"}],[{name:"海港区",code:"130302"},{name:"山海关区",code:"130303"},{name:"北戴河区",code:"130304"},{name:"青龙满族自治县",code:"130321"},{name:"昌黎县",code:"130322"},{name:"抚宁县",code:"130323"},{name:"卢龙县",code:"130324"}],[{name:"邯山区",code:"130402"},{name:"丛台区",code:"130403"},{name:"复兴区",code:"130404"},{name:"峰峰矿区",code:"130406"},{name:"邯郸县",code:"130421"},{name:"临漳县",code:"130423"},{name:"成安县",code:"130424"},{name:"大名县",code:"130425"},{name:"涉县",code:"130426"},{name:"磁县",code:"130427"},{name:"肥乡县",code:"130428"},{name:"永年县",code:"130429"},{name:"邱县",code:"130430"},{name:"鸡泽县",code:"130431"},{name:"广平县",code:"130432"},{name:"馆陶县",code:"130433"},{name:"魏县",code:"130434"},{name:"曲周县",code:"130435"},{name:"武安市",code:"130481"}],[{name:"桥东区",code:"130502"},{name:"桥西区",code:"130503"},{name:"邢台县",code:"130521"},{name:"临城县",code:"130522"},{name:"内丘县",code:"130523"},{name:"柏乡县",code:"130524"},{name:"隆尧县",code:"130525"},{name:"任县",code:"130526"},{name:"南和县",code:"130527"},{name:"宁晋县",code:"130528"},{name:"巨鹿县",code:"130529"},{name:"新河县",code:"130530"},{name:"广宗县",code:"130531"},{name:"平乡县",code:"130532"},{name:"威县",code:"130533"},{name:"清河县",code:"130534"},{name:"临西县",code:"130535"},{name:"南宫市",code:"130581"},{name:"沙河市",code:"130582"}],[{name:"新市区",code:"130602"},{name:"北市区",code:"130603"},{name:"南市区",code:"130604"},{name:"满城县",code:"130621"},{name:"清苑县",code:"130622"},{name:"涞水县",code:"130623"},{name:"阜平县",code:"130624"},{name:"徐水县",code:"130625"},{name:"定兴县",code:"130626"},{name:"唐县",code:"130627"},{name:"高阳县",code:"130628"},{name:"容城县",code:"130629"},{name:"涞源县",code:"130630"},{name:"望都县",code:"130631"},{name:"安新县",code:"130632"},{name:"易县",code:"130633"},{name:"曲阳县",code:"130634"},{name:"蠡县",code:"130635"},{name:"顺平县",code:"130636"},{name:"博野县",code:"130637"},{name:"雄县",code:"130638"},{name:"涿州市",code:"130681"},{name:"定州市",code:"130682"},{name:"安国市",code:"130683"},{name:"高碑店市",code:"130684"}],[{name:"桥东区",code:"130702"},{name:"桥西区",code:"130703"},{name:"宣化区",code:"130705"},{name:"下花园区",code:"130706"},{name:"宣化县",code:"130721"},{name:"张北县",code:"130722"},{name:"康保县",code:"130723"},{name:"沽源县",code:"130724"},{name:"尚义县",code:"130725"},{name:"蔚县",code:"130726"},{name:"阳原县",code:"130727"},{name:"怀安县",code:"130728"},{name:"万全县",code:"130729"},{name:"怀来县",code:"130730"},{name:"涿鹿县",code:"130731"},{name:"赤城县",code:"130732"},{name:"崇礼县",code:"130733"}],[{name:"双桥区",code:"130802"},{name:"双滦区",code:"130803"},{name:"鹰手营子矿区",code:"130804"},{name:"承德县",code:"130821"},{name:"兴隆县",code:"130822"},{name:"平泉县",code:"130823"},{name:"滦平县",code:"130824"},{name:"隆化县",code:"130825"},{name:"丰宁满族自治县",code:"130826"},{name:"宽城满族自治县",code:"130827"},{name:"围场满族蒙古族自治县",code:"130828"}],[{name:"新华区",code:"130902"},{name:"运河区",code:"130903"},{name:"沧县",code:"130921"},{name:"青县",code:"130922"},{name:"东光县",code:"130923"},{name:"海兴县",code:"130924"},{name:"盐山县",code:"130925"},{name:"肃宁县",code:"130926"},{name:"南皮县",code:"130927"},{name:"吴桥县",code:"130928"},{name:"献县",code:"130929"},{name:"孟村回族自治县",code:"130930"},{name:"泊头市",code:"130981"},{name:"任丘市",code:"130982"},{name:"黄骅市",code:"130983"},{name:"河间市",code:"130984"}],[{name:"安次区",code:"131002"},{name:"广阳区",code:"131003"},{name:"固安县",code:"131022"},{name:"永清县",code:"131023"},{name:"香河县",code:"131024"},{name:"大城县",code:"131025"},{name:"文安县",code:"131026"},{name:"大厂回族自治县",code:"131028"},{name:"霸州市",code:"131081"},{name:"三河市",code:"131082"}],[{name:"桃城区",code:"131102"},{name:"枣强县",code:"131121"},{name:"武邑县",code:"131122"},{name:"武强县",code:"131123"},{name:"饶阳县",code:"131124"},{name:"安平县",code:"131125"},{name:"故城县",code:"131126"},{name:"景县",code:"131127"},{name:"阜城县",code:"131128"},{name:"冀州市",code:"131181"},{name:"深州市",code:"131182"}]],[[{name:"小店区",code:"140105"},{name:"迎泽区",code:"140106"},{name:"杏花岭区",code:"140107"},{name:"尖草坪区",code:"140108"},{name:"万柏林区",code:"140109"},{name:"晋源区",code:"140110"},{name:"清徐县",code:"140121"},{name:"阳曲县",code:"140122"},{name:"娄烦县",code:"140123"},{name:"古交市",code:"140181"}],[{name:"城区",code:"140202"},{name:"矿区",code:"140203"},{name:"南郊区",code:"140211"},{name:"新荣区",code:"140212"},{name:"阳高县",code:"140221"},{name:"天镇县",code:"140222"},{name:"广灵县",code:"140223"},{name:"灵丘县",code:"140224"},{name:"浑源县",code:"140225"},{name:"左云县",code:"140226"},{name:"大同县",code:"140227"}],[{name:"城区",code:"140302"},{name:"矿区",code:"140303"},{name:"郊区",code:"140311"},{name:"平定县",code:"140321"},{name:"盂县",code:"140322"}],[{name:"长治县",code:"140421"},{name:"襄垣县",code:"140423"},{name:"屯留县",code:"140424"},{name:"平顺县",code:"140425"},{name:"黎城县",code:"140426"},{name:"壶关县",code:"140427"},{name:"长子县",code:"140428"},{name:"武乡县",code:"140429"},{name:"沁县",code:"140430"},{name:"沁源县",code:"140431"},{name:"潞城市",code:"140481"},{name:"城区",code:"140482"},{name:"郊区",code:"140483"}],[{name:"城区",code:"140502"},{name:"沁水县",code:"140521"},{name:"阳城县",code:"140522"},{name:"陵川县",code:"140524"},{name:"泽州县",code:"140525"},{name:"高平市",code:"140581"}],[{name:"朔城区",code:"140602"},{name:"平鲁区",code:"140603"},{name:"山阴县",code:"140621"},{name:"应县",code:"140622"},{name:"右玉县",code:"140623"},{name:"怀仁县",code:"140624"}],[{name:"榆次区",code:"140702"},{name:"榆社县",code:"140721"},{name:"左权县",code:"140722"},{name:"和顺县",code:"140723"},{name:"昔阳县",code:"140724"},{name:"寿阳县",code:"140725"},{name:"太谷县",code:"140726"},{name:"祁县",code:"140727"},{name:"平遥县",code:"140728"},{name:"灵石县",code:"140729"},{name:"介休市",code:"140781"}],[{name:"盐湖区",code:"140802"},{name:"临猗县",code:"140821"},{name:"万荣县",code:"140822"},{name:"闻喜县",code:"140823"},{name:"稷山县",code:"140824"},{name:"新绛县",code:"140825"},{name:"绛县",code:"140826"},{name:"垣曲县",code:"140827"},{name:"夏县",code:"140828"},{name:"平陆县",code:"140829"},{name:"芮城县",code:"140830"},{name:"永济市",code:"140881"},{name:"河津市",code:"140882"}],[{name:"忻府区",code:"140902"},{name:"定襄县",code:"140921"},{name:"五台县",code:"140922"},{name:"代县",code:"140923"},{name:"繁峙县",code:"140924"},{name:"宁武县",code:"140925"},{name:"静乐县",code:"140926"},{name:"神池县",code:"140927"},{name:"五寨县",code:"140928"},{name:"岢岚县",code:"140929"},{name:"河曲县",code:"140930"},{name:"保德县",code:"140931"},{name:"偏关县",code:"140932"},{name:"原平市",code:"140981"}],[{name:"尧都区",code:"141002"},{name:"曲沃县",code:"141021"},{name:"翼城县",code:"141022"},{name:"襄汾县",code:"141023"},{name:"洪洞县",code:"141024"},{name:"古县",code:"141025"},{name:"安泽县",code:"141026"},{name:"浮山县",code:"141027"},{name:"吉县",code:"141028"},{name:"乡宁县",code:"141029"},{name:"大宁县",code:"141030"},{name:"隰县",code:"141031"},{name:"永和县",code:"141032"},{name:"蒲县",code:"141033"},{name:"汾西县",code:"141034"},{name:"侯马市",code:"141081"},{name:"霍州市",code:"141082"}],[{name:"离石区",code:"141102"},{name:"文水县",code:"141121"},{name:"交城县",code:"141122"},{name:"兴县",code:"141123"},{name:"临县",code:"141124"},{name:"柳林县",code:"141125"},{name:"石楼县",code:"141126"},{name:"岚县",code:"141127"},{name:"方山县",code:"141128"},{name:"中阳县",code:"141129"},{name:"交口县",code:"141130"},{name:"孝义市",code:"141181"},{name:"汾阳市",code:"141182"}]],[[{name:"新城区",code:"150102"},{name:"回民区",code:"150103"},{name:"玉泉区",code:"150104"},{name:"赛罕区",code:"150105"},{name:"土默特左旗",code:"150121"},{name:"托克托县",code:"150122"},{name:"和林格尔县",code:"150123"},{name:"清水河县",code:"150124"},{name:"武川县",code:"150125"}],[{name:"东河区",code:"150202"},{name:"昆都仑区",code:"150203"},{name:"青山区",code:"150204"},{name:"石拐区",code:"150205"},{name:"白云鄂博矿区",code:"150206"},{name:"九原区",code:"150207"},{name:"土默特右旗",code:"150221"},{name:"固阳县",code:"150222"},{name:"达尔罕茂明安联合旗",code:"150223"}],[{name:"海勃湾区",code:"150302"},{name:"海南区",code:"150303"},{name:"乌达区",code:"150304"}],[{name:"红山区",code:"150402"},{name:"元宝山区",code:"150403"},{name:"松山区",code:"150404"},{name:"阿鲁科尔沁旗",code:"150421"},{name:"巴林左旗",code:"150422"},{name:"巴林右旗",code:"150423"},{name:"林西县",code:"150424"},{name:"克什克腾旗",code:"150425"},{name:"翁牛特旗",code:"150426"},{name:"喀喇沁旗",code:"150428"},{name:"宁城县",code:"150429"},{name:"敖汉旗",code:"150430"}],[{name:"科尔沁区",code:"150502"},{name:"科尔沁左翼中旗",code:"150521"},{name:"科尔沁左翼后旗",code:"150522"},{name:"开鲁县",code:"150523"},{name:"库伦旗",code:"150524"},{name:"奈曼旗",code:"150525"},{name:"扎鲁特旗",code:"150526"},{name:"霍林郭勒市",code:"150581"}],[{name:"东胜区",code:"150602"},{name:"达拉特旗",code:"150621"},{name:"准格尔旗",code:"150622"},{name:"鄂托克前旗",code:"150623"},{name:"鄂托克旗",code:"150624"},{name:"杭锦旗",code:"150625"},{name:"乌审旗",code:"150626"},{name:"伊金霍洛旗",code:"150627"}],[{name:"海拉尔区",code:"150702"},{name:"扎赉诺尔区",code:"150703"},{name:"阿荣旗",code:"150721"},{name:"莫力达瓦达斡尔族自治旗",code:"150722"},{name:"鄂伦春自治旗",code:"150723"},{name:"鄂温克族自治旗",code:"150724"},{name:"陈巴尔虎旗",code:"150725"},{name:"新巴尔虎左旗",code:"150726"},{name:"新巴尔虎右旗",code:"150727"},{name:"满洲里市",code:"150781"},{name:"牙克石市",code:"150782"},{name:"扎兰屯市",code:"150783"},{name:"额尔古纳市",code:"150784"},{name:"根河市",code:"150785"}],[{name:"临河区",code:"150802"},{name:"五原县",code:"150821"},{name:"磴口县",code:"150822"},{name:"乌拉特前旗",code:"150823"},{name:"乌拉特中旗",code:"150824"},{name:"乌拉特后旗",code:"150825"},{name:"杭锦后旗",code:"150826"}],[{name:"集宁区",code:"150902"},{name:"卓资县",code:"150921"},{name:"化德县",code:"150922"},{name:"商都县",code:"150923"},{name:"兴和县",code:"150924"},{name:"凉城县",code:"150925"},{name:"察哈尔右翼前旗",code:"150926"},{name:"察哈尔右翼中旗",code:"150927"},{name:"察哈尔右翼后旗",code:"150928"},{name:"四子王旗",code:"150929"},{name:"丰镇市",code:"150981"}],[{name:"乌兰浩特市",code:"152201"},{name:"阿尔山市",code:"152202"},{name:"科尔沁右翼前旗",code:"152221"},{name:"科尔沁右翼中旗",code:"152222"},{name:"扎赉特旗",code:"152223"},{name:"突泉县",code:"152224"}],[{name:"二连浩特市",code:"152501"},{name:"锡林浩特市",code:"152502"},{name:"阿巴嘎旗",code:"152522"},{name:"苏尼特左旗",code:"152523"},{name:"苏尼特右旗",code:"152524"},{name:"东乌珠穆沁旗",code:"152525"},{name:"西乌珠穆沁旗",code:"152526"},{name:"太仆寺旗",code:"152527"},{name:"镶黄旗",code:"152528"},{name:"正镶白旗",code:"152529"},{name:"正蓝旗",code:"152530"},{name:"多伦县",code:"152531"}],[{name:"阿拉善左旗",code:"152921"},{name:"阿拉善右旗",code:"152922"},{name:"额济纳旗",code:"152923"}]],[[{name:"和平区",code:"210102"},{name:"沈河区",code:"210103"},{name:"大东区",code:"210104"},{name:"皇姑区",code:"210105"},{name:"铁西区",code:"210106"},{name:"苏家屯区",code:"210111"},{name:"浑南区",code:"210112"},{name:"新城子区",code:"210113"},{name:"于洪区",code:"210114"},{name:"辽中县",code:"210122"},{name:"康平县",code:"210123"},{name:"法库县",code:"210124"},{name:"新民市",code:"210181"},{name:"沈北新区",code:"210184"}],[{name:"中山区",code:"210202"},{name:"西岗区",code:"210203"},{name:"沙河口区",code:"210204"},{name:"甘井子区",code:"210211"},{name:"旅顺口区",code:"210212"},{name:"金州区",code:"210213"},{name:"长海县",code:"210224"},{name:"瓦房店市",code:"210281"},{name:"普兰店市",code:"210282"},{name:"庄河市",code:"210283"}],[{name:"铁东区",code:"210302"},{name:"铁西区",code:"210303"},{name:"立山区",code:"210304"},{name:"千山区",code:"210311"},{name:"台安县",code:"210321"},{name:"岫岩满族自治县",code:"210323"},{name:"海城市",code:"210381"}],[{name:"新抚区",code:"210402"},{name:"东洲区",code:"210403"},{name:"望花区",code:"210404"},{name:"顺城区",code:"210411"},{name:"抚顺县",code:"210421"},{name:"新宾满族自治县",code:"210422"},{name:"清原满族自治县",code:"210423"}],[{name:"平山区",code:"210502"},{name:"溪湖区",code:"210503"},{name:"明山区",code:"210504"},{name:"南芬区",code:"210505"},{name:"本溪满族自治县",code:"210521"},{name:"桓仁满族自治县",code:"210522"}],[{name:"元宝区",code:"210602"},{name:"振兴区",code:"210603"},{name:"振安区",code:"210604"},{name:"宽甸满族自治县",code:"210624"},{name:"东港市",code:"210681"},{name:"凤城市",code:"210682"}],[{name:"古塔区",code:"210702"},{name:"凌河区",code:"210703"},{name:"太和区",code:"210711"},{name:"黑山县",code:"210726"},{name:"义县",code:"210727"},{name:"凌海市",code:"210781"},{name:"北镇市",code:"210782"}],[{name:"站前区",code:"210802"},{name:"西市区",code:"210803"},{name:"鲅鱼圈区",code:"210804"},{name:"老边区",code:"210811"},{name:"盖州市",code:"210881"},{name:"大石桥市",code:"210882"}],[{name:"海州区",code:"210902"},{name:"新邱区",code:"210903"},{name:"太平区",code:"210904"},{name:"清河门区",code:"210905"},{name:"细河区",code:"210911"},{name:"阜新蒙古族自治县",code:"210921"},{name:"彰武县",code:"210922"}],[{name:"白塔区",code:"211002"},{name:"文圣区",code:"211003"},{name:"宏伟区",code:"211004"},{name:"弓长岭区",code:"211005"},{name:"太子河区",code:"211011"},{name:"辽阳县",code:"211021"},{name:"灯塔市",code:"211081"}],[{name:"双台子区",code:"211102"},{name:"兴隆台区",code:"211103"},{name:"大洼县",code:"211121"},{name:"盘山县",code:"211122"}],[{name:"银州区",code:"211202"},{name:"清河区",code:"211204"},{name:"铁岭县",code:"211221"},{name:"西丰县",code:"211223"},{name:"昌图县",code:"211224"},{name:"调兵山市",code:"211281"},{name:"开原市",code:"211282"}],[{name:"双塔区",code:"211302"},{name:"龙城区",code:"211303"},{name:"朝阳县",code:"211321"},{name:"建平县",code:"211322"},{name:"喀喇沁左翼蒙古族自治县",code:"211324"},{name:"北票市",code:"211381"},{name:"凌源市",code:"211382"}],[{name:"连山区",code:"211402"},{name:"龙港区",code:"211403"},{name:"南票区",code:"211404"},{name:"绥中县",code:"211421"},{name:"建昌县",code:"211422"},{name:"兴城市",code:"211481"}]],[[{name:"南关区",code:"220102"},{name:"宽城区",code:"220103"},{name:"朝阳区",code:"220104"},{name:"二道区",code:"220105"},{name:"绿园区",code:"220106"},{name:"双阳区",code:"220112"},{name:"农安县",code:"220122"},{name:"九台区",code:"220181"},{name:"榆树市",code:"220182"},{name:"德惠市",code:"220183"}],[{name:"昌邑区",code:"220202"},{name:"龙潭区",code:"220203"},{name:"船营区",code:"220204"},{name:"丰满区",code:"220211"},{name:"永吉县",code:"220221"},{name:"蛟河市",code:"220281"},{name:"桦甸市",code:"220282"},{name:"舒兰市",code:"220283"},{name:"磐石市",code:"220284"}],[{name:"铁西区",code:"220302"},{name:"铁东区",code:"220303"},{name:"梨树县",code:"220322"},{name:"伊通满族自治县",code:"220323"},{name:"公主岭市",code:"220381"},{name:"双辽市",code:"220382"}],[{name:"龙山区",code:"220402"},{name:"西安区",code:"220403"},{name:"东丰县",code:"220421"},{name:"东辽县",code:"220422"}],[{name:"东昌区",code:"220502"},{name:"二道江区",code:"220503"},{name:"通化县",code:"220521"},{name:"辉南县",code:"220523"},{name:"柳河县",code:"220524"},{name:"梅河口市",code:"220581"},{name:"集安市",code:"220582"}],[{name:"浑江区",code:"220602"},{name:"抚松县",code:"220621"},{name:"靖宇县",code:"220622"},{name:"长白朝鲜族自治县",code:"220623"},{name:"江源区",code:"220625"},{name:"临江市",code:"220681"}],[{name:"宁江区",code:"220702"},{name:"前郭尔罗斯蒙古族自治县",code:"220721"},{name:"长岭县",code:"220722"},{name:"乾安县",code:"220723"},{name:"扶余市",code:"220724"}],[{name:"洮北区",code:"220802"},{name:"镇赉县",code:"220821"},{name:"通榆县",code:"220822"},{name:"洮南市",code:"220881"},{name:"大安市",code:"220882"}],[{name:"延吉市",code:"222401"},{name:"图们市",code:"222402"},{name:"敦化市",code:"222403"},{name:"珲春市",code:"222404"},{name:"龙井市",code:"222405"},{name:"和龙市",code:"222406"},{name:"汪清县",code:"222424"},{name:"安图县",code:"222426"}]],[[{name:"道里区",code:"230102"},{name:"南岗区",code:"230103"},{name:"道外区",code:"230104"},{name:"香坊区",code:"230106"},{name:"平房区",code:"230108"},{name:"松北区",code:"230109"},{name:"呼兰区",code:"230111"},{name:"依兰县",code:"230123"},{name:"方正县",code:"230124"},{name:"宾县",code:"230125"},{name:"巴彦县",code:"230126"},{name:"木兰县",code:"230127"},{name:"通河县",code:"230128"},{name:"延寿县",code:"230129"},{name:"阿城区",code:"230181"},{name:"双城区",code:"230182"},{name:"尚志市",code:"230183"},{name:"五常市",code:"230184"}],[{name:"龙沙区",code:"230202"},{name:"建华区",code:"230203"},{name:"铁锋区",code:"230204"},{name:"昂昂溪区",code:"230205"},{name:"富拉尔基区",code:"230206"},{name:"碾子山区",code:"230207"},{name:"梅里斯达斡尔族区",code:"230208"},{name:"龙江县",code:"230221"},{name:"依安县",code:"230223"},{name:"泰来县",code:"230224"},{name:"甘南县",code:"230225"},{name:"富裕县",code:"230227"},{name:"克山县",code:"230229"},{name:"克东县",code:"230230"},{name:"拜泉县",code:"230231"},{name:"讷河市",code:"230281"}],[{name:"鸡冠区",code:"230302"},{name:"恒山区",code:"230303"},{name:"滴道区",code:"230304"},{name:"梨树区",code:"230305"},{name:"城子河区",code:"230306"},{name:"麻山区",code:"230307"},{name:"鸡东县",code:"230321"},{name:"虎林市",code:"230381"},{name:"密山市",code:"230382"}],[{name:"向阳区",code:"230402"},{name:"工农区",code:"230403"},{name:"南山区",code:"230404"},{name:"兴安区",code:"230405"},{name:"东山区",code:"230406"},{name:"兴山区",code:"230407"},{name:"萝北县",code:"230421"},{name:"绥滨县",code:"230422"}],[{name:"尖山区",code:"230502"},{name:"岭东区",code:"230503"},{name:"四方台区",code:"230505"},{name:"宝山区",code:"230506"},{name:"集贤县",code:"230521"},{name:"友谊县",code:"230522"},{name:"宝清县",code:"230523"},{name:"饶河县",code:"230524"}],[{name:"萨尔图区",code:"230602"},{name:"龙凤区",code:"230603"},{name:"让胡路区",code:"230604"},{name:"红岗区",code:"230605"},{name:"大同区",code:"230606"},{name:"肇州县",code:"230621"},{name:"肇源县",code:"230622"},{name:"林甸县",code:"230623"},{name:"杜尔伯特蒙古族自治县",code:"230624"}],[{name:"伊春区",code:"230702"},{name:"南岔区",code:"230703"},{name:"友好区",code:"230704"},{name:"西林区",code:"230705"},{name:"翠峦区",code:"230706"},{name:"新青区",code:"230707"},{name:"美溪区",code:"230708"},{name:"金山屯区",code:"230709"},{name:"五营区",code:"230710"},{name:"乌马河区",code:"230711"},{name:"汤旺河区",code:"230712"},{name:"带岭区",code:"230713"},{name:"乌伊岭区",code:"230714"},{name:"红星区",code:"230715"},{name:"上甘岭区",code:"230716"},{name:"嘉荫县",code:"230722"},{name:"铁力市",code:"230781"}],[{name:"向阳区",code:"230803"},{name:"前进区",code:"230804"},{name:"东风区",code:"230805"},{name:"郊区",code:"230811"},{name:"桦南县",code:"230822"},{name:"桦川县",code:"230826"},{name:"汤原县",code:"230828"},{name:"抚远县",code:"230833"},{name:"同江市",code:"230881"},{name:"富锦市",code:"230882"}],[{name:"新兴区",code:"230902"},{name:"桃山区",code:"230903"},{name:"茄子河区",code:"230904"},{name:"勃利县",code:"230921"}],[{name:"东安区",code:"231002"},{name:"阳明区",code:"231003"},{name:"爱民区",code:"231004"},{name:"西安区",code:"231005"},{name:"东宁县",code:"231024"},{name:"林口县",code:"231025"},{name:"绥芬河市",code:"231081"},{name:"海林市",code:"231083"},{name:"宁安市",code:"231084"},{name:"穆棱市",code:"231085"}],[{name:"爱辉区",code:"231102"},{name:"嫩江县",code:"231121"},{name:"逊克县",code:"231123"},{name:"孙吴县",code:"231124"},{name:"北安市",code:"231181"},{name:"五大连池市",code:"231182"}],[{name:"北林区",code:"231202"},{name:"望奎县",code:"231221"},{name:"兰西县",code:"231222"},{name:"青冈县",code:"231223"},{name:"庆安县",code:"231224"},{name:"明水县",code:"231225"},{name:"绥棱县",code:"231226"},{name:"安达市",code:"231281"},{name:"肇东市",code:"231282"},{name:"海伦市",code:"231283"}],[{name:"松岭区",code:"232702"},{name:"新林区",code:"232703"},{name:"呼中区",code:"232704"},{name:"呼玛县",code:"232721"},{name:"塔河县",code:"232722"},{name:"漠河县",code:"232723"},{name:"加格达奇区",code:"232724"}]],[[{name:"黄浦区",code:"310101"},{name:"徐汇区",code:"310104"},{name:"长宁区",code:"310105"},{name:"静安区",code:"310106"},{name:"普陀区",code:"310107"},{name:"闸北区",code:"310108"},{name:"虹口区",code:"310109"},{name:"杨浦区",code:"310110"},{name:"闵行区",code:"310112"},{name:"宝山区",code:"310113"},{name:"嘉定区",code:"310114"},{name:"浦东新区",code:"310115"},{name:"金山区",code:"310116"},{name:"松江区",code:"310117"},{name:"青浦区",code:"310118"},{name:"奉贤区",code:"310120"},{name:"崇明县",code:"310230"}]],[[{name:"玄武区",code:"320102"},{name:"秦淮区",code:"320104"},{name:"建邺区",code:"320105"},{name:"鼓楼区",code:"320106"},{name:"浦口区",code:"320111"},{name:"栖霞区",code:"320113"},{name:"雨花台区",code:"320114"},{name:"江宁区",code:"320115"},{name:"六合区",code:"320116"},{name:"溧水区",code:"320124"},{name:"高淳区",code:"320125"}],[{name:"崇安区",code:"320202"},{name:"南长区",code:"320203"},{name:"北塘区",code:"320204"},{name:"锡山区",code:"320205"},{name:"惠山区",code:"320206"},{name:"滨湖区",code:"320211"},{name:"宜兴市",code:"320282"},{name:"江阴市",code:"320281"}],[{name:"鼓楼区",code:"320302"},{name:"云龙区",code:"320303"},{name:"贾汪区",code:"320305"},{name:"泉山区",code:"320311"},{name:"丰县",code:"320321"},{name:"沛县",code:"320322"},{name:"铜山区",code:"320323"},{name:"睢宁县",code:"320324"},{name:"新沂市",code:"320381"},{name:"邳州市",code:"320382"}],[{name:"天宁区",code:"320402"},{name:"钟楼区",code:"320404"},{name:"戚墅堰区",code:"320405"},{name:"新北区",code:"320411"},{name:"武进区",code:"320412"},{name:"溧阳市",code:"320481"},{name:"金坛市",code:"320482"}],[{name:"虎丘区",code:"320505"},{name:"吴中区",code:"320506"},{name:"相城区",code:"320507"},{name:"姑苏区",code:"320508"},{name:"常熟市",code:"320581"},{name:"张家港市",code:"320582"},{name:"昆山市",code:"320583"},{name:"吴江区",code:"320584"},{name:"太仓市",code:"320585"}],[{name:"崇川区",code:"320602"},{name:"港闸区",code:"320611"},{name:"通州区",code:"320612"},{name:"海安县",code:"320621"},{name:"如东县",code:"320623"},{name:"启东市",code:"320681"},{name:"如皋市",code:"320682"},{name:"海门市",code:"320684"}],[{name:"连云区",code:"320703"},{name:"新浦区",code:"320705"},{name:"海州区",code:"320706"},{name:"赣榆区",code:"320721"},{name:"东海县",code:"320722"},{name:"灌云县",code:"320723"},{name:"灌南县",code:"320724"}],[{name:"清河区",code:"320802"},{name:"淮安区",code:"320803"},{name:"淮阴区",code:"320804"},{name:"清浦区",code:"320811"},{name:"涟水县",code:"320826"},{name:"洪泽县",code:"320829"},{name:"盱眙县",code:"320830"},{name:"金湖县",code:"320831"}],[{name:"亭湖区",code:"320902"},{name:"盐都区",code:"320903"},{name:"响水县",code:"320921"},{name:"滨海县",code:"320922"},{name:"阜宁县",code:"320923"},{name:"射阳县",code:"320924"},{name:"建湖县",code:"320925"},{name:"东台市",code:"320981"},{name:"大丰市",code:"320982"}],[{name:"广陵区",code:"321002"},{name:"邗江区",code:"321003"},{name:"宝应县",code:"321023"},{name:"仪征市",code:"321081"},{name:"高邮市",code:"321084"},{name:"江都区",code:"321088"}],[{name:"京口区",code:"321102"},{name:"润州区",code:"321111"},{name:"丹徒区",code:"321112"},{name:"丹阳市",code:"321181"},{name:"扬中市",code:"321182"},{name:"句容市",code:"321183"}],[{name:"海陵区",code:"321202"},{name:"高港区",code:"321203"},{name:"兴化市",code:"321281"},{name:"靖江市",code:"321282"},{name:"泰兴市",code:"321283"},{name:"姜堰区",code:"321284"}],[{name:"宿城区",code:"321302"},{name:"宿豫区",code:"321311"},{name:"沭阳县",code:"321322"},{name:"泗阳县",code:"321323"},{name:"泗洪县",code:"321324"}],[]],[[{name:"上城区",code:"330102"},{name:"下城区",code:"330103"},{name:"江干区",code:"330104"},{name:"拱墅区",code:"330105"},{name:"西湖区",code:"330106"},{name:"滨江区",code:"330108"},{name:"萧山区",code:"330109"},{name:"余杭区",code:"330110"},{name:"桐庐县",code:"330122"},{name:"淳安县",code:"330127"},{name:"建德市",code:"330182"},{name:"富阳区",code:"330183"},{name:"临安市",code:"330185"}],[{name:"海曙区",code:"330203"},{name:"江东区",code:"330204"},{name:"江北区",code:"330205"},{name:"北仑区",code:"330206"},{name:"镇海区",code:"330211"},{name:"鄞州区",code:"330212"},{name:"象山县",code:"330225"},{name:"宁海县",code:"330226"},{name:"余姚市",code:"330281"},{name:"慈溪市",code:"330282"},{name:"奉化市",code:"330283"}],[{name:"鹿城区",code:"330302"},{name:"龙湾区",code:"330303"},{name:"瓯海区",code:"330304"},{name:"洞头县",code:"330322"},{name:"永嘉县",code:"330324"},{name:"平阳县",code:"330326"},{name:"苍南县",code:"330327"},{name:"文成县",code:"330328"},{name:"泰顺县",code:"330329"},{name:"瑞安市",code:"330381"},{name:"乐清市",code:"330382"}],[{name:"南湖区",code:"330402"},{name:"秀洲区",code:"330411"},{name:"嘉善县",code:"330421"},{name:"海盐县",code:"330424"},{name:"海宁市",code:"330481"},{name:"平湖市",code:"330482"},{name:"桐乡市",code:"330483"}],[{name:"吴兴区",code:"330502"},{name:"南浔区",code:"330503"},{name:"德清县",code:"330521"},{name:"长兴县",code:"330522"},{name:"安吉县",code:"330523"}],[{name:"越城区",code:"330602"},{name:"柯桥区",code:"330621"},{name:"新昌县",code:"330624"},{name:"诸暨市",code:"330681"},{name:"上虞区",code:"330682"},{name:"嵊州市",code:"330683"}],[{name:"婺城区",code:"330702"},{name:"金东区",code:"330703"},{name:"武义县",code:"330723"},{name:"浦江县",code:"330726"},{name:"磐安县",code:"330727"},{name:"兰溪市",code:"330781"},{name:"义乌市",code:"330782"},{name:"东阳市",code:"330783"},{name:"永康市",code:"330784"}],[{name:"柯城区",code:"330802"},{name:"衢江区",code:"330803"},{name:"常山县",code:"330822"},{name:"开化县",code:"330824"},{name:"龙游县",code:"330825"},{name:"江山市",code:"330881"}],[{name:"定海区",code:"330902"},{name:"普陀区",code:"330903"},{name:"岱山县",code:"330921"},{name:"嵊泗县",code:"330922"}],[{name:"椒江区",code:"331002"},{name:"黄岩区",code:"331003"},{name:"路桥区",code:"331004"},{name:"玉环县",code:"331021"},{name:"三门县",code:"331022"},{name:"天台县",code:"331023"},{name:"仙居县",code:"331024"},{name:"温岭市",code:"331081"},{name:"临海市",code:"331082"}],[{name:"莲都区",code:"331102"},{name:"青田县",code:"331121"},{name:"缙云县",code:"331122"},{name:"遂昌县",code:"331123"},{name:"松阳县",code:"331124"},{name:"云和县",code:"331125"},{name:"庆元县",code:"331126"},{name:"景宁畲族自治县",code:"331127"},{name:"龙泉市",code:"331181"}]],[[{name:"瑶海区",code:"340102"},{name:"庐阳区",code:"340103"},{name:"蜀山区",code:"340104"},{name:"包河区",code:"340111"},{name:"长丰县",code:"340121"},{name:"肥东县",code:"340122"},{name:"肥西县",code:"340123"},{name:"庐江县",code:"341421"},{name:"巢湖市",code:"341400"}],[{name:"镜湖区",code:"340202"},{name:"弋江区",code:"340203"},{name:"鸠江区",code:"340207"},{name:"三山区",code:"340208"},{name:"芜湖县",code:"340221"},{name:"繁昌县",code:"340222"},{name:"南陵县",code:"340223"},{name:"无为县",code:"341422"}],[{name:"龙子湖区",code:"340302"},{name:"蚌山区",code:"340303"},{name:"禹会区",code:"340304"},{name:"淮上区",code:"340311"},{name:"怀远县",code:"340321"},{name:"五河县",code:"340322"},{name:"固镇县",code:"340323"}],[{name:"大通区",code:"340402"},{name:"田家庵区",code:"340403"},{name:"谢家集区",code:"340404"},{name:"八公山区",code:"340405"},{name:"潘集区",code:"340406"},{name:"凤台县",code:"340421"}],[{name:"花山区",code:"340503"},{name:"雨山区",code:"340504"},{name:"博望区",code:"340506"},{name:"当涂县",code:"340521"},{name:"含山县",code:"341423"},{name:"和县",code:"341424"}],[{name:"杜集区",code:"340602"},{name:"相山区",code:"340603"},{name:"烈山区",code:"340604"},{name:"濉溪县",code:"340621"}],[{name:"铜官山区",code:"340702"},{name:"狮子山区",code:"340703"},{name:"郊区",code:"340711"},{name:"铜陵县",code:"340721"}],[{name:"迎江区",code:"340802"},{name:"大观区",code:"340803"},{name:"宜秀区",code:"340811"},{name:"怀宁县",code:"340822"},{name:"枞阳县",code:"340823"},{name:"潜山县",code:"340824"},{name:"太湖县",code:"340825"},{name:"宿松县",code:"340826"},{name:"望江县",code:"340827"},{name:"岳西县",code:"340828"},{name:"桐城市",code:"340881"}],[{name:"屯溪区",code:"341002"},{name:"黄山区",code:"341003"},{name:"徽州区",code:"341004"},{name:"歙县",code:"341021"},{name:"休宁县",code:"341022"},{name:"黟县",code:"341023"},{name:"祁门县",code:"341024"}],[{name:"琅琊区",code:"341102"},{name:"南谯区",code:"341103"},{name:"来安县",code:"341122"},{name:"全椒县",code:"341124"},{name:"定远县",code:"341125"},{name:"凤阳县",code:"341126"},{name:"天长市",code:"341181"},{name:"明光市",code:"341182"}],[{name:"颍州区",code:"341202"},{name:"颍东区",code:"341203"},{name:"颍泉区",code:"341204"},{name:"临泉县",code:"341221"},{name:"太和县",code:"341222"},{name:"阜南县",code:"341225"},{name:"颍上县",code:"341226"},{name:"界首市",code:"341282"}],[{name:"埇桥区",code:"341302"},{name:"砀山县",code:"341321"},{name:"萧县",code:"341322"},{name:"灵璧县",code:"341323"},{name:"泗县",code:"341324"}],[{name:"金安区",code:"341502"},{name:"裕安区",code:"341503"},{name:"寿县",code:"341521"},{name:"霍邱县",code:"341522"},{name:"舒城县",code:"341523"},{name:"金寨县",code:"341524"},{name:"霍山县",code:"341525"}],[{name:"谯城区",code:"341602"},{name:"涡阳县",code:"341621"},{name:"蒙城县",code:"341622"},{name:"利辛县",code:"341623"}],[{name:"贵池区",code:"341702"},{name:"东至县",code:"341721"},{name:"石台县",code:"341722"},{name:"青阳县",code:"341723"}],[{name:"宣州区",code:"341802"},{name:"郎溪县",code:"341821"},{name:"广德县",code:"341822"},{name:"泾县",code:"341823"},{name:"绩溪县",code:"341824"},{name:"旌德县",code:"341825"},{name:"宁国市",code:"341881"}]],[[{name:"鼓楼区",code:"350102"},{name:"台江区",code:"350103"},{name:"仓山区",code:"350104"},{name:"马尾区",code:"350105"},{name:"晋安区",code:"350111"},{name:"闽侯县",code:"350121"},{name:"连江县",code:"350122"},{name:"罗源县",code:"350123"},{name:"闽清县",code:"350124"},{name:"永泰县",code:"350125"},{name:"平潭县",code:"350128"},{name:"福清市",code:"350181"},{name:"长乐市",code:"350182"}],[{name:"思明区",code:"350203"},{name:"海沧区",code:"350205"},{name:"湖里区",code:"350206"},{name:"集美区",code:"350211"},{name:"同安区",code:"350212"},{name:"翔安区",code:"350213"}],[{name:"城厢区",code:"350302"},{name:"涵江区",code:"350303"},{name:"荔城区",code:"350304"},{name:"秀屿区",code:"350305"},{name:"仙游县",code:"350322"}],[{name:"梅列区",code:"350402"},{name:"三元区",code:"350403"},{name:"明溪县",code:"350421"},{name:"清流县",code:"350423"},{name:"宁化县",code:"350424"},{name:"大田县",code:"350425"},{name:"尤溪县",code:"350426"},{name:"沙县",code:"350427"},{name:"将乐县",code:"350428"},{name:"泰宁县",code:"350429"},{name:"建宁县",code:"350430"},{name:"永安市",code:"350481"}],[{name:"鲤城区",code:"350502"},{name:"丰泽区",code:"350503"},{name:"洛江区",code:"350504"},{name:"泉港区",code:"350505"},{name:"惠安县",code:"350521"},{name:"安溪县",code:"350524"},{name:"永春县",code:"350525"},{name:"德化县",code:"350526"},{name:"金门县",code:"350527"},{name:"石狮市",code:"350581"},{name:"晋江市",code:"350582"},{name:"南安市",code:"350583"}],[{name:"芗城区",code:"350602"},{name:"龙文区",code:"350603"},{name:"云霄县",code:"350622"},{name:"漳浦县",code:"350623"},{name:"诏安县",code:"350624"},{name:"长泰县",code:"350625"},{name:"东山县",code:"350626"},{name:"南靖县",code:"350627"},{name:"平和县",code:"350628"},{name:"华安县",code:"350629"},{name:"龙海市",code:"350681"}],[{name:"延平区",code:"350702"},{name:"顺昌县",code:"350721"},{name:"浦城县",code:"350722"},{name:"光泽县",code:"350723"},{name:"松溪县",code:"350724"},{name:"政和县",code:"350725"},{name:"邵武市",code:"350781"},{name:"武夷山市",code:"350782"},{name:"建瓯市",code:"350783"},{name:"建阳区",code:"350784"}],[{name:"新罗区",code:"350802"},{name:"长汀县",code:"350821"},{name:"永定区",code:"350822"},{name:"上杭县",code:"350823"},{name:"武平县",code:"350824"},{name:"连城县",code:"350825"},{name:"漳平市",code:"350881"}],[{name:"蕉城区",code:"350902"},{name:"霞浦县",code:"350921"},{name:"古田县",code:"350922"},{name:"屏南县",code:"350923"},{name:"寿宁县",code:"350924"},{name:"周宁县",code:"350925"},{name:"柘荣县",code:"350926"},{name:"福安市",code:"350981"},{name:"福鼎市",code:"350982"}]],[[{name:"东湖区",code:"360102"},{name:"西湖区",code:"360103"},{name:"青云谱区",code:"360104"},{name:"湾里区",code:"360105"},{name:"青山湖区",code:"360111"},{name:"南昌县",code:"360121"},{name:"新建县",code:"360122"},{name:"安义县",code:"360123"},{name:"进贤县",code:"360124"}],[{name:"昌江区",code:"360202"},{name:"珠山区",code:"360203"},{name:"浮梁县",code:"360222"},{name:"乐平市",code:"360281"}],[{name:"安源区",code:"360302"},{name:"湘东区",code:"360313"},{name:"莲花县",code:"360321"},{name:"上栗县",code:"360322"},{name:"芦溪县",code:"360323"}],[{name:"庐山区",code:"360402"},{name:"浔阳区",code:"360403"},{name:"九江县",code:"360421"},{name:"武宁县",code:"360423"},{name:"修水县",code:"360424"},{name:"永修县",code:"360425"},{name:"德安县",code:"360426"},{name:"星子县",code:"360427"},{name:"都昌县",code:"360428"},{name:"湖口县",code:"360429"},{name:"彭泽县",code:"360430"},{name:"瑞昌市",code:"360481"},{name:"共青城市",code:"360483"}],[{name:"渝水区",code:"360502"},{name:"分宜县",code:"360521"}],[{name:"月湖区",code:"360602"},{name:"余江县",code:"360622"},{name:"贵溪市",code:"360681"}],[{name:"章贡区",code:"360702"},{name:"赣县",code:"360721"},{name:"信丰县",code:"360722"},{name:"大余县",code:"360723"},{name:"上犹县",code:"360724"},{name:"崇义县",code:"360725"},{name:"安远县",code:"360726"},{name:"龙南县",code:"360727"},{name:"定南县",code:"360728"},{name:"全南县",code:"360729"},{name:"宁都县",code:"360730"},{name:"于都县",code:"360731"},{name:"兴国县",code:"360732"},{name:"会昌县",code:"360733"},{name:"寻乌县",code:"360734"},{name:"石城县",code:"360735"},{name:"瑞金市",code:"360781"},{name:"南康区",code:"360782"}],[{name:"吉州区",code:"360802"},{name:"青原区",code:"360803"},{name:"吉安县",code:"360821"},{name:"吉水县",code:"360822"},{name:"峡江县",code:"360823"},{name:"新干县",code:"360824"},{name:"永丰县",code:"360825"},{name:"泰和县",code:"360826"},{name:"遂川县",code:"360827"},{name:"万安县",code:"360828"},{name:"安福县",code:"360829"},{name:"永新县",code:"360830"},{name:"井冈山市",code:"360881"}],[{name:"袁州区",code:"360902"},{name:"奉新县",code:"360921"},{name:"万载县",code:"360922"},{name:"上高县",code:"360923"},{name:"宜丰县",code:"360924"},{name:"靖安县",code:"360925"},{name:"铜鼓县",code:"360926"},{name:"丰城市",code:"360981"},{name:"樟树市",code:"360982"},{name:"高安市",code:"360983"}],[{name:"临川区",code:"361002"},{name:"南城县",code:"361021"},{name:"黎川县",code:"361022"},{name:"南丰县",code:"361023"},{name:"崇仁县",code:"361024"},{name:"乐安县",code:"361025"},{name:"宜黄县",code:"361026"},{name:"金溪县",code:"361027"},{name:"资溪县",code:"361028"},{name:"东乡县",code:"361029"},{name:"广昌县",code:"361030"}],[{name:"信州区",code:"361102"},{name:"上饶县",code:"361121"},{name:"广丰县",code:"361122"},{name:"玉山县",code:"361123"},{name:"铅山县",code:"361124"},{name:"横峰县",code:"361125"},{name:"弋阳县",code:"361126"},{name:"余干县",code:"361127"},{name:"鄱阳县",code:"361128"},{name:"万年县",code:"361129"},{name:"婺源县",code:"361130"},{name:"德兴市",code:"361181"}]],[[{name:"历下区",code:"370102"},{name:"市中区",code:"370103"},{name:"槐荫区",code:"370104"},{name:"天桥区",code:"370105"},{name:"历城区",code:"370112"},{name:"长清区",code:"370113"},{name:"平阴县",code:"370124"},{name:"济阳县",code:"370125"},{name:"商河县",code:"370126"},{name:"章丘市",code:"370181"}],[{name:"市南区",code:"370202"},{name:"市北区",code:"370203"},{name:"黄岛区",code:"370211"},{name:"崂山区",code:"370212"},{name:"李沧区",code:"370213"},{name:"城阳区",code:"370214"},{name:"胶州市",code:"370281"},{name:"即墨市",code:"370282"},{name:"平度市",code:"370283"},{name:"莱西市",code:"370285"}],[{name:"淄川区",code:"370302"},{name:"张店区",code:"370303"},{name:"博山区",code:"370304"},{name:"临淄区",code:"370305"},{name:"周村区",code:"370306"},{name:"桓台县",code:"370321"},{name:"高青县",code:"370322"},{name:"沂源县",code:"370323"}],[{name:"市中区",code:"370402"},{name:"薛城区",code:"370403"},{name:"峄城区",code:"370404"},{name:"台儿庄区",code:"370405"},{name:"山亭区",code:"370406"},{name:"滕州市",code:"370481"}],[{name:"东营区",code:"370502"},{name:"河口区",code:"370503"},{name:"垦利县",code:"370521"},{name:"利津县",code:"370522"},{name:"广饶县",code:"370523"}],[{name:"芝罘区",code:"370602"},{name:"福山区",code:"370611"},{name:"牟平区",code:"370612"},{name:"莱山区",code:"370613"},{name:"长岛县",code:"370634"},{name:"龙口市",code:"370681"},{name:"莱阳市",code:"370682"},{name:"莱州市",code:"370683"},{name:"蓬莱市",code:"370684"},{name:"招远市",code:"370685"},{name:"栖霞市",code:"370686"},{name:"海阳市",code:"370687"}],[{name:"潍城区",code:"370702"},{name:"寒亭区",code:"370703"},{name:"坊子区",code:"370704"},{name:"奎文区",code:"370705"},{name:"临朐县",code:"370724"},{name:"昌乐县",code:"370725"},{name:"青州市",code:"370781"},{name:"诸城市",code:"370782"},{name:"寿光市",code:"370783"},{name:"安丘市",code:"370784"},{name:"高密市",code:"370785"},{name:"昌邑市",code:"370786"}],[{name:"市中区",code:"370802"},{name:"任城区",code:"370811"},{name:"微山县",code:"370826"},{name:"鱼台县",code:"370827"},{name:"金乡县",code:"370828"},{name:"嘉祥县",code:"370829"},{name:"汶上县",code:"370830"},{name:"泗水县",code:"370831"},{name:"梁山县",code:"370832"},{name:"曲阜市",code:"370881"},{name:"兖州区",code:"370882"},{name:"邹城市",code:"370883"}],[{name:"泰山区",code:"370902"},{name:"岱岳区",code:"370903"},{name:"宁阳县",code:"370921"},{name:"东平县",code:"370923"},{name:"新泰市",code:"370982"},{name:"肥城市",code:"370983"}],[{name:"环翠区",code:"371002"},{name:"文登区",code:"371081"},{name:"荣成市",code:"371082"},{name:"乳山市",code:"371083"}],[{name:"东港区",code:"371102"},{name:"岚山区",code:"371103"},{name:"五莲县",code:"371121"},{name:"莒县",code:"371122"}],[{name:"莱城区",code:"371202"},{name:"钢城区",code:"371203"}],[{name:"兰山区",code:"371302"},{name:"罗庄区",code:"371311"},{name:"河东区",code:"371312"},{name:"沂南县",code:"371321"},{name:"郯城县",code:"371322"},{name:"沂水县",code:"371323"},{name:"兰陵县",code:"371324"},{name:"费县",code:"371325"},{name:"平邑县",code:"371326"},{name:"莒南县",code:"371327"},{name:"蒙阴县",code:"371328"},{name:"临沭县",code:"371329"}],[{name:"德城区",code:"371402"},{name:"陵城区",code:"371421"},{name:"宁津县",code:"371422"},{name:"庆云县",code:"371423"},{name:"临邑县",code:"371424"},{name:"齐河县",code:"371425"},{name:"平原县",code:"371426"},{name:"夏津县",code:"371427"},{name:"武城县",code:"371428"},{name:"乐陵市",code:"371481"},{name:"禹城市",code:"371482"}],[{name:"东昌府区",code:"371502"},{name:"阳谷县",code:"371521"},{name:"莘县",code:"371522"},{name:"茌平县",code:"371523"},{name:"东阿县",code:"371524"},{name:"冠县",code:"371525"},{name:"高唐县",code:"371526"},{name:"临清市",code:"371581"}],[{name:"滨城区",code:"371602"},{name:"惠民县",code:"371621"},{name:"阳信县",code:"371622"},{name:"无棣县",code:"371623"},{name:"沾化区",code:"371624"},{name:"博兴县",code:"371625"},{name:"邹平县",code:"371626"}],[{name:"牡丹区",code:"371702"},{name:"曹县",code:"371721"},{name:"单县",code:"371722"},{name:"成武县",code:"371723"},{name:"巨野县",code:"371724"},{name:"郓城县",code:"371725"},{name:"鄄城县",code:"371726"},{name:"定陶县",code:"371727"},{name:"东明县",code:"371728"}]],[[{name:"中原区",code:"410102"},{name:"二七区",code:"410103"},{name:"管城回族区",code:"410104"},{name:"金水区",code:"410105"},{name:"上街区",code:"410106"},{name:"惠济区",code:"410108"},{name:"中牟县",code:"410122"},{name:"巩义市",code:"410181"},{name:"荥阳市",code:"410182"},{name:"新密市",code:"410183"},{name:"新郑市",code:"410184"},{name:"登封市",code:"410185"}],[{name:"龙亭区",code:"410202"},{name:"顺河回族区",code:"410203"},{name:"鼓楼区",code:"410204"},{name:"禹王台区",code:"410205"},{name:"金明区",code:"410211"},{name:"杞县",code:"410221"},{name:"通许县",code:"410222"},{name:"尉氏县",code:"410223"},{name:"祥符区",code:"410224"},{name:"兰考县",code:"410225"}],[{name:"老城区",code:"410302"},{name:"西工区",code:"410303"},{name:"瀍河回族区",code:"410304"},{name:"涧西区",code:"410305"},{name:"吉利区",code:"410306"},{name:"洛龙区",code:"410307"},{name:"孟津县",code:"410322"},{name:"新安县",code:"410323"},{name:"栾川县",code:"410324"},{name:"嵩县",code:"410325"},{name:"汝阳县",code:"410326"},{name:"宜阳县",code:"410327"},{name:"洛宁县",code:"410328"},{name:"伊川县",code:"410329"},{name:"偃师市",code:"410381"}],[{name:"新华区",code:"410402"},{name:"卫东区",code:"410403"},{name:"石龙区",code:"410404"},{name:"湛河区",code:"410411"},{name:"宝丰县",code:"410421"},{name:"叶县",code:"410422"},{name:"鲁山县",code:"410423"},{name:"郏县",code:"410425"},{name:"舞钢市",code:"410481"},{name:"汝州市",code:"410482"}],[{name:"文峰区",code:"410502"},{name:"北关区",code:"410503"},{name:"殷都区",code:"410505"},{name:"龙安区",code:"410506"},{name:"安阳县",code:"410522"},{name:"汤阴县",code:"410523"},{name:"滑县",code:"410526"},{name:"内黄县",code:"410527"},{name:"林州市",code:"410581"}],[{name:"鹤山区",code:"410602"},{name:"山城区",code:"410603"},{name:"淇滨区",code:"410611"},{name:"浚县",code:"410621"},{name:"淇县",code:"410622"}],[{name:"红旗区",code:"410702"},{name:"卫滨区",code:"410703"},{name:"凤泉区",code:"410704"},{name:"牧野区",code:"410711"},{name:"新乡县",code:"410721"},{name:"获嘉县",code:"410724"},{name:"原阳县",code:"410725"},{name:"延津县",code:"410726"},{name:"封丘县",code:"410727"},{name:"长垣县",code:"410728"},{name:"卫辉市",code:"410781"},{name:"辉县市",code:"410782"}],[{name:"解放区",code:"410802"},{name:"中站区",code:"410803"},{name:"马村区",code:"410804"},{name:"山阳区",code:"410811"},{name:"修武县",code:"410821"},{name:"博爱县",code:"410822"},{name:"武陟县",code:"410823"},{name:"温县",code:"410825"},{name:"沁阳市",code:"410882"},{name:"孟州市",code:"410883"}],[{name:"济源市",code:"410885"}],[{name:"华龙区",code:"410902"},{name:"清丰县",code:"410922"},{name:"南乐县",code:"410923"},{name:"范县",code:"410926"},{name:"台前县",code:"410927"},{name:"濮阳县",code:"410928"}],[{name:"魏都区",code:"411002"},{name:"许昌县",code:"411023"},{name:"鄢陵县",code:"411024"},{name:"襄城县",code:"411025"},{name:"禹州市",code:"411081"},{name:"长葛市",code:"411082"}],[{name:"源汇区",code:"411102"},{name:"郾城区",code:"411103"},{name:"召陵区",code:"411104"},{name:"舞阳县",code:"411121"},{name:"临颍县",code:"411122"}],[{name:"湖滨区",code:"411202"},{name:"渑池县",code:"411221"},{name:"陕县",code:"411222"},{name:"卢氏县",code:"411224"},{name:"义马市",code:"411281"},{name:"灵宝市",code:"411282"}],[{name:"宛城区",code:"411302"},{name:"卧龙区",code:"411303"},{name:"南召县",code:"411321"},{name:"方城县",code:"411322"},{name:"西峡县",code:"411323"},{name:"镇平县",code:"411324"},{name:"内乡县",code:"411325"},{name:"淅川县",code:"411326"},{name:"社旗县",code:"411327"},{name:"唐河县",code:"411328"},{name:"新野县",code:"411329"},{name:"桐柏县",code:"411330"},{name:"邓州市",code:"411381"}],[{name:"梁园区",code:"411402"},{name:"睢阳区",code:"411403"},{name:"民权县",code:"411421"},{name:"睢县",code:"411422"},{name:"宁陵县",code:"411423"},{name:"柘城县",code:"411424"},{name:"虞城县",code:"411425"},{name:"夏邑县",code:"411426"},{name:"永城市",code:"411481"}],[{name:"浉河区",code:"411502"},{name:"平桥区",code:"411503"},{name:"罗山县",code:"411521"},{name:"光山县",code:"411522"},{name:"新县",code:"411523"},{name:"商城县",code:"411524"},{name:"固始县",code:"411525"},{name:"潢川县",code:"411526"},{name:"淮滨县",code:"411527"},{name:"息县",code:"411528"}],[{name:"川汇区",code:"411602"},{name:"扶沟县",code:"411621"},{name:"西华县",code:"411622"},{name:"商水县",code:"411623"},{name:"沈丘县",code:"411624"},{name:"郸城县",code:"411625"},{name:"淮阳县",code:"411626"},{name:"太康县",code:"411627"},{name:"鹿邑县",code:"411628"},{name:"项城市",code:"411681"}],[{name:"驿城区",code:"411702"},{name:"西平县",code:"411721"},{name:"上蔡县",code:"411722"},{name:"平舆县",code:"411723"},{name:"正阳县",code:"411724"},{name:"确山县",code:"411725"},{name:"泌阳县",code:"411726"},{name:"汝南县",code:"411727"},{name:"遂平县",code:"411728"},{name:"新蔡县",code:"411729"}]],[[{name:"江岸区",code:"420102"},{name:"江汉区",code:"420103"},{name:"硚口区",code:"420104"},{name:"汉阳区",code:"420105"},{name:"武昌区",code:"420106"},{name:"青山区",code:"420107"},{name:"洪山区",code:"420111"},{name:"东西湖区",code:"420112"},{name:"汉南区",code:"420113"},{name:"蔡甸区",code:"420114"},{name:"江夏区",code:"420115"},{name:"黄陂区",code:"420116"},{name:"新洲区",code:"420117"}],[{name:"黄石港区",code:"420202"},{name:"西塞山区",code:"420203"},{name:"下陆区",code:"420204"},{name:"铁山区",code:"420205"},{name:"阳新县",code:"420222"},{name:"大冶市",code:"420281"}],[{name:"茅箭区",code:"420302"},{name:"张湾区",code:"420303"},{name:"郧阳区",code:"420321"},{name:"郧西县",code:"420322"},{name:"竹山县",code:"420323"},{name:"竹溪县",code:"420324"},{name:"房县",code:"420325"},{name:"丹江口市",code:"420381"}],[{name:"西陵区",code:"420502"},{name:"伍家岗区",code:"420503"},{name:"点军区",code:"420504"},{name:"猇亭区",code:"420505"},{name:"夷陵区",code:"420506"},{name:"远安县",code:"420525"},{name:"兴山县",code:"420526"},{name:"秭归县",code:"420527"},{name:"长阳土家族自治县",code:"420528"},{name:"五峰土家族自治县",code:"420529"},{name:"宜都市",code:"420581"},{name:"当阳市",code:"420582"},{name:"枝江市",code:"420583"}],[{name:"襄城区",code:"420602"},{name:"樊城区",code:"420606"},{name:"襄州区",code:"420607"},{name:"南漳县",code:"420624"},{name:"谷城县",code:"420625"},{name:"保康县",code:"420626"},{name:"老河口市",code:"420682"},{name:"枣阳市",code:"420683"},{name:"宜城市",code:"420684"}],[{name:"梁子湖区",code:"420702"},{name:"华容区",code:"420703"},{name:"鄂城区",code:"420704"}],[{name:"东宝区",code:"420802"},{name:"掇刀区",code:"420804"},{name:"京山县",code:"420821"},{name:"沙洋县",code:"420822"},{name:"钟祥市",code:"420881"}],[{name:"孝南区",code:"420902"},{name:"孝昌县",code:"420921"},{name:"大悟县",code:"420922"},{name:"云梦县",code:"420923"},{name:"应城市",code:"420981"},{name:"安陆市",code:"420982"},{name:"汉川市",code:"420984"}],[{name:"沙市区",code:"421002"},{name:"荆州区",code:"421003"},{name:"公安县",code:"421022"},{name:"监利县",code:"421023"},{name:"江陵县",code:"421024"},{name:"石首市",code:"421081"},{name:"洪湖市",code:"421083"},{name:"松滋市",code:"421087"}],[{name:"黄州区",code:"421102"},{name:"团风县",code:"421121"},{name:"红安县",code:"421122"},{name:"罗田县",code:"421123"},{name:"英山县",code:"421124"},{name:"浠水县",code:"421125"},{name:"蕲春县",code:"421126"},{name:"黄梅县",code:"421127"},{name:"麻城市",code:"421181"},{name:"武穴市",code:"421182"}],[{name:"咸安区",code:"421202"},{name:"嘉鱼县",code:"421221"},{name:"通城县",code:"421222"},{name:"崇阳县",code:"421223"},{name:"通山县",code:"421224"},{name:"赤壁市",code:"421281"}],[{name:"曾都区",code:"421302"},{name:"广水市",code:"421381"},{name:"随县",code:"421321"}],[{name:"恩施市",code:"422801"},{name:"利川市",code:"422802"},{name:"建始县",code:"422822"},{name:"巴东县",code:"422823"},{name:"宣恩县",code:"422825"},{name:"咸丰县",code:"422826"},{name:"来凤县",code:"422827"},{name:"鹤峰县",code:"422828"}],[{name:"仙桃市",code:"429007"}],[{name:"潜江市",code:"429008"}],[{name:"天门市",code:"429009"}],[{name:"神农架林区",code:"429022"}]],[[{name:"芙蓉区",code:"430102"},{name:"天心区",code:"430103"},{name:"岳麓区",code:"430104"},{name:"开福区",code:"430105"},{name:"雨花区",code:"430111"},{name:"长沙县",code:"430121"},{name:"望城区",code:"430122"},{name:"宁乡县",code:"430124"},{name:"浏阳市",code:"430181"}],[{name:"荷塘区",code:"430202"},{name:"芦淞区",code:"430203"},{name:"石峰区",code:"430204"},{name:"天元区",code:"430211"},{name:"株洲县",code:"430221"},{name:"攸县",code:"430223"},{name:"茶陵县",code:"430224"},{name:"炎陵县",code:"430225"},{name:"醴陵市",code:"430281"}],[{name:"雨湖区",code:"430302"},{name:"岳塘区",code:"430304"},{name:"湘潭县",code:"430321"},{name:"湘乡市",code:"430381"},{name:"韶山市",code:"430382"}],[{name:"珠晖区",code:"430405"},{name:"雁峰区",code:"430406"},{name:"石鼓区",code:"430407"},{name:"蒸湘区",code:"430408"},{name:"南岳区",code:"430412"},{name:"衡阳县",code:"430421"},{name:"衡南县",code:"430422"},{name:"衡山县",code:"430423"},{name:"衡东县",code:"430424"},{name:"祁东县",code:"430426"},{name:"耒阳市",code:"430481"},{name:"常宁市",code:"430482"}],[{name:"双清区",code:"430502"},{name:"大祥区",code:"430503"},{name:"北塔区",code:"430511"},{name:"邵东县",code:"430521"},{name:"新邵县",code:"430522"},{name:"邵阳县",code:"430523"},{name:"隆回县",code:"430524"},{name:"洞口县",code:"430525"},{name:"绥宁县",code:"430527"},{name:"新宁县",code:"430528"},{name:"城步苗族自治县",code:"430529"},{name:"武冈市",code:"430581"}],[{name:"岳阳楼区",code:"430602"},{name:"云溪区",code:"430603"},{name:"君山区",code:"430611"},{name:"岳阳县",code:"430621"},{name:"华容县",code:"430623"},{name:"湘阴县",code:"430624"},{name:"平江县",code:"430626"},{name:"汨罗市",code:"430681"},{name:"临湘市",code:"430682"}],[{name:"武陵区",code:"430702"},{name:"鼎城区",code:"430703"},{name:"安乡县",code:"430721"},{name:"汉寿县",code:"430722"},{name:"澧县",code:"430723"},{name:"临澧县",code:"430724"},{name:"桃源县",code:"430725"},{name:"石门县",code:"430726"},{name:"津市市",code:"430781"}],[{name:"永定区",code:"430802"},{name:"武陵源区",code:"430811"},{name:"慈利县",code:"430821"},{name:"桑植县",code:"430822"}],[{name:"资阳区",code:"430902"},{name:"赫山区",code:"430903"},{name:"南县",code:"430921"},{name:"桃江县",code:"430922"},{name:"安化县",code:"430923"},{name:"沅江市",code:"430981"}],[{name:"北湖区",code:"431002"},{name:"苏仙区",code:"431003"},{name:"桂阳县",code:"431021"},{name:"宜章县",code:"431022"},{name:"永兴县",code:"431023"},{name:"嘉禾县",code:"431024"},{name:"临武县",code:"431025"},{name:"汝城县",code:"431026"},{name:"桂东县",code:"431027"},{name:"安仁县",code:"431028"},{name:"资兴市",code:"431081"}],[{name:"零陵区",code:"431102"},{name:"冷水滩区",code:"431103"},{name:"祁阳县",code:"431121"},{name:"东安县",code:"431122"},{name:"双牌县",code:"431123"},{name:"道县",code:"431124"},{name:"江永县",code:"431125"},{name:"宁远县",code:"431126"},{name:"蓝山县",code:"431127"},{name:"新田县",code:"431128"},{name:"江华瑶族自治县",code:"431129"}],[{name:"鹤城区",code:"431202"},{name:"中方县",code:"431221"},{name:"沅陵县",code:"431222"},{name:"辰溪县",code:"431223"},{name:"溆浦县",code:"431224"},{name:"会同县",code:"431225"},{name:"麻阳苗族自治县",code:"431226"},{name:"新晃侗族自治县",code:"431227"},{name:"芷江侗族自治县",code:"431228"},{name:"靖州苗族侗族自治县",code:"431229"},{name:"通道侗族自治县",code:"431230"},{name:"洪江市",code:"431281"}],[{name:"娄星区",code:"431302"},{name:"双峰县",code:"431321"},{name:"新化县",code:"431322"},{name:"冷水江市",code:"431381"},{name:"涟源市",code:"431382"}],[{name:"吉首市",code:"433101"},{name:"泸溪县",code:"433122"},{name:"凤凰县",code:"433123"},{name:"花垣县",code:"433124"},{name:"保靖县",code:"433125"},{name:"古丈县",code:"433126"},{name:"永顺县",code:"433127"},{name:"龙山县",code:"433130"}]],[[{name:"荔湾区",code:"440103"},{name:"越秀区",code:"440104"},{name:"海珠区",code:"440105"},{name:"天河区",code:"440106"},{name:"白云区",code:"440111"},{name:"黄埔区",code:"440112"},{name:"番禺区",code:"440113"},{name:"花都区",code:"440114"},{name:"南沙区",code:"440115"},{name:"萝岗区",code:"440116"},{name:"增城区",code:"440183"},{name:"从化区",code:"440184"}],[{name:"武江区",code:"440203"},{name:"浈江区",code:"440204"},{name:"曲江区",code:"440205"},{name:"始兴县",code:"440222"},{name:"仁化县",code:"440224"},{name:"翁源县",code:"440229"},{name:"乳源瑶族自治县",code:"440232"},{name:"新丰县",code:"440233"},{name:"乐昌市",code:"440281"},{name:"南雄市",code:"440282"}],[{name:"罗湖区",code:"440303"},{name:"福田区",code:"440304"},{name:"南山区",code:"440305"},{name:"宝安区",code:"440306"},{name:"龙岗区",code:"440307"},{name:"盐田区",code:"440308"}],[{name:"香洲区",code:"440402"},{name:"斗门区",code:"440403"},{name:"金湾区",code:"440404"}],[{name:"龙湖区",code:"440507"},{name:"金平区",code:"440511"},{name:"濠江区",code:"440512"},{name:"潮阳区",code:"440513"},{name:"潮南区",code:"440514"},{name:"澄海区",code:"440515"},{name:"南澳县",code:"440523"}],[{name:"禅城区",code:"440604"},{name:"南海区",code:"440605"},{name:"顺德区",code:"440606"},{name:"三水区",code:"440607"},{name:"高明区",code:"440608"}],[{name:"蓬江区",code:"440703"},{name:"江海区",code:"440704"},{name:"新会区",code:"440705"},{name:"台山市",code:"440781"},{name:"开平市",code:"440783"},{name:"鹤山市",code:"440784"},{name:"恩平市",code:"440785"}],[{name:"赤坎区",code:"440802"},{name:"霞山区",code:"440803"},{name:"坡头区",code:"440804"},{name:"麻章区",code:"440811"},{name:"遂溪县",code:"440823"},{name:"徐闻县",code:"440825"},{name:"廉江市",code:"440881"},{name:"雷州市",code:"440882"},{name:"吴川市",code:"440883"}],[{name:"茂南区",code:"440902"},{name:"电白区",code:"440903"},{name:"电白县",code:"440923"},{name:"高州市",code:"440981"},{name:"化州市",code:"440982"},{name:"信宜市",code:"440983"}],[{name:"端州区",code:"441202"},{name:"鼎湖区",code:"441203"},{name:"广宁县",code:"441223"},{name:"怀集县",code:"441224"},{name:"封开县",code:"441225"},{name:"德庆县",code:"441226"},{name:"高要市",code:"441283"},{name:"四会市",code:"441284"}],[{name:"惠城区",code:"441302"},{name:"惠阳区",code:"441303"},{name:"博罗县",code:"441322"},{name:"惠东县",code:"441323"},{name:"龙门县",code:"441324"}],[{name:"梅江区",code:"441402"},{name:"梅县区",code:"441421"},{name:"大埔县",code:"441422"},{name:"丰顺县",code:"441423"},{name:"五华县",code:"441424"},{name:"平远县",code:"441426"},{name:"蕉岭县",code:"441427"},{name:"兴宁市",code:"441481"}],[{name:"城区",code:"441502"},{name:"海丰县",code:"441521"},{name:"陆河县",code:"441523"},{name:"陆丰市",code:"441581"}],[{name:"源城区",code:"441602"},{name:"紫金县",code:"441621"},{name:"龙川县",code:"441622"},{name:"连平县",code:"441623"},{name:"和平县",code:"441624"},{name:"东源县",code:"441625"}],[{name:"江城区",code:"441702"},{name:"阳西县",code:"441721"},{name:"阳东区",code:"441723"},{name:"阳春市",code:"441781"}],[{name:"清城区",code:"441802"},{name:"佛冈县",code:"441821"},{name:"阳山县",code:"441823"},{name:"连山壮族瑶族自治县",code:"441825"},{name:"连南瑶族自治县",code:"441826"},{name:"清新区",code:"441827"},{name:"英德市",code:"441881"},{name:"连州市",code:"441882"}],[{name:"东莞市",code:"441901"}],[{name:"中山市",code:"442001"}],[{name:"湘桥区",code:"445102"},{name:"潮安区",code:"445121"},{name:"饶平县",code:"445122"}],[{name:"榕城区",code:"445202"},{name:"揭东区",code:"445221"},{name:"揭西县",code:"445222"},{name:"惠来县",code:"445224"},{name:"普宁市",code:"445281"}],[{name:"云城区",code:"445302"},{name:"新兴县",code:"445321"},{name:"郁南县",code:"445322"},{name:"云安区",code:"445323"},{name:"罗定市",code:"445381"}]],[[{name:"兴宁区",code:"450102"},{name:"青秀区",code:"450103"},{name:"江南区",code:"450105"},{name:"西乡塘区",code:"450107"},{name:"良庆区",code:"450108"},{name:"邕宁区",code:"450109"},{name:"武鸣县",code:"450122"},{name:"隆安县",code:"450123"},{name:"马山县",code:"450124"},{name:"上林县",code:"450125"},{name:"宾阳县",code:"450126"},{name:"横县",code:"450127"}],[{name:"城中区",code:"450202"},{name:"鱼峰区",code:"450203"},{name:"柳南区",code:"450204"},{name:"柳北区",code:"450205"},{name:"柳江县",code:"450221"},{name:"柳城县",code:"450222"},{name:"鹿寨县",code:"450223"},{name:"融安县",code:"450224"},{name:"融水苗族自治县",code:"450225"},{name:"三江侗族自治县",code:"450226"}],[{name:"秀峰区",code:"450302"},{name:"叠彩区",code:"450303"},{name:"象山区",code:"450304"},{name:"七星区",code:"450305"},{name:"雁山区",code:"450311"},{name:"阳朔县",code:"450321"},{name:"临桂区",code:"450322"},{name:"灵川县",code:"450323"},{name:"全州县",code:"450324"},{name:"兴安县",code:"450325"},{name:"永福县",code:"450326"},{name:"灌阳县",code:"450327"},{name:"龙胜各族自治县",code:"450328"},{name:"资源县",code:"450329"},{name:"平乐县",code:"450330"},{name:"荔浦县",code:"450331"},{name:"恭城瑶族自治县",code:"450332"}],[{name:"万秀区",code:"450403"},{name:"长洲区",code:"450405"},{name:"龙圩区",code:"450406"},{name:"苍梧县",code:"450421"},{name:"藤县",code:"450422"},{name:"蒙山县",code:"450423"},{name:"岑溪市",code:"450481"}],[{name:"海城区",code:"450502"},{name:"银海区",code:"450503"},{name:"铁山港区",code:"450512"},{name:"合浦县",code:"450521"}],[{name:"港口区",code:"450602"},{name:"防城区",code:"450603"},{name:"上思县",code:"450621"},{name:"东兴市",code:"450681"}],[{name:"钦南区",code:"450702"},{name:"钦北区",code:"450703"},{name:"灵山县",code:"450721"},{name:"浦北县",code:"450722"}],[{name:"港北区",code:"450802"},{name:"港南区",code:"450803"},{name:"覃塘区",code:"450804"},{name:"平南县",code:"450821"},{name:"桂平市",code:"450881"}],[{name:"玉州区",code:"450902"},{name:"福绵区",code:"450903"},{name:"容县",code:"450921"},{name:"陆川县",code:"450922"},{name:"博白县",code:"450923"},{name:"兴业县",code:"450924"},{name:"北流市",code:"450981"}],[{name:"右江区",code:"451002"},{name:"田阳县",code:"451021"},{name:"田东县",code:"451022"},{name:"平果县",code:"451023"},{name:"德保县",code:"451024"},{name:"靖西县",code:"451025"},{name:"那坡县",code:"451026"},{name:"凌云县",code:"451027"},{name:"乐业县",code:"451028"},{name:"田林县",code:"451029"},{name:"西林县",code:"451030"},{name:"隆林各族自治县",code:"451031"}],[{name:"八步区",code:"451102"},{name:"昭平县",code:"451121"},{name:"钟山县",code:"451122"},{name:"富川瑶族自治县",code:"451123"}],[{name:"金城江区",code:"451202"},{name:"南丹县",code:"451221"},{name:"天峨县",code:"451222"},{name:"凤山县",code:"451223"},{name:"东兰县",code:"451224"},{name:"罗城仫佬族自治县",code:"451225"},{name:"环江毛南族自治县",code:"451226"},{name:"巴马瑶族自治县",code:"451227"},{name:"都安瑶族自治县",code:"451228"},{name:"大化瑶族自治县",code:"451229"},{name:"宜州市",code:"451281"}],[{name:"兴宾区",code:"451302"},{name:"忻城县",code:"451321"},{name:"象州县",code:"451322"},{name:"武宣县",code:"451323"},{name:"金秀瑶族自治县",code:"451324"},{name:"合山市",code:"451381"}],[{name:"江州区",code:"451402"},{name:"扶绥县",code:"451421"},{name:"宁明县",code:"451422"},{name:"龙州县",code:"451423"},{name:"大新县",code:"451424"},{name:"天等县",code:"451425"},{name:"凭祥市",code:"451481"}]],[[{name:"秀英区",code:"460105"},{name:"龙华区",code:"460106"},{name:"琼山区",code:"460107"},{name:"美兰区",code:"460108"}],[{name:"海棠区",code:"460202"},{name:"吉阳区",code:"460203"},{name:"天涯区",code:"460204"},{name:"崖州区",code:"460205"}],[{name:"西沙群岛",code:"460321"},{name:"南沙群岛",code:"460322"},{name:"中沙群岛的岛礁及其海域",code:"460323"}],[{name:"五指山市",code:"469011"}],[{name:"琼海市",code:"469012"}],[{name:"儋州市",code:"469013"}],[{name:"文昌市",code:"469015"}],[{name:"万宁市",code:"469016"}],[{name:"东方市",code:"469017"}],[{name:"定安县",code:"469021"}],[{name:"屯昌县",code:"469022"}],[{name:"澄迈县",code:"469023"}],[{name:"临高县",code:"469024"}],[{name:"白沙黎族自治县",code:"469040"}],[{name:"昌江黎族自治县",code:"469041"}],[{name:"乐东黎族自治县",code:"469043"}],[{name:"陵水黎族自治县",code:"469044"}],[{name:"保亭黎族苗族自治县",code:"469045"}],[{name:"琼中黎族苗族自治县",code:"469046"}]],[[{name:"万州区",code:"500101"},{name:"涪陵区",code:"500102"},{name:"渝中区",code:"500103"},{name:"大渡口区",code:"500104"},{name:"江北区",code:"500105"},{name:"沙坪坝区",code:"500106"},{name:"九龙坡区",code:"500107"},{name:"南岸区",code:"500108"},{name:"北碚区",code:"500109"},{name:"万盛区",code:"500110"},{name:"双桥区",code:"500111"},{name:"渝北区",code:"500112"},{name:"巴南区",code:"500113"},{name:"黔江区",code:"500114"},{name:"长寿区",code:"500115"},{name:"綦江区",code:"500222"},{name:"潼南县",code:"500223"},{name:"铜梁区",code:"500224"},{name:"大足区",code:"500225"},{name:"荣昌县",code:"500226"},{name:"璧山区",code:"500227"},{name:"梁平县",code:"500228"},{name:"城口县",code:"500229"},{name:"丰都县",code:"500230"},{name:"垫江县",code:"500231"},{name:"武隆县",code:"500232"},{name:"忠县",code:"500233"},{name:"开县",code:"500234"},{name:"云阳县",code:"500235"},{name:"奉节县",code:"500236"},{name:"巫山县",code:"500237"},{name:"巫溪县",code:"500238"},{name:"石柱土家族自治县",code:"500240"},{name:"秀山土家族苗族自治县",code:"500241"},{name:"酉阳土家族苗族自治县",code:"500242"},{name:"彭水苗族土家族自治县",code:"500243"},{name:"江津区",code:"500381"},{name:"合川区",code:"500382"},{name:"永川区",code:"500383"},{name:"南川区",code:"500384"}]],[[{name:"锦江区",code:"510104"},{name:"青羊区",code:"510105"},{name:"金牛区",code:"510106"},{name:"武侯区",code:"510107"},{name:"成华区",code:"510108"},{name:"龙泉驿区",code:"510112"},{name:"青白江区",code:"510113"},{name:"新都区",code:"510114"},{name:"温江区",code:"510115"},{name:"金堂县",code:"510121"},{name:"双流县",code:"510122"},{name:"郫县",code:"510124"},{name:"大邑县",code:"510129"},{name:"蒲江县",code:"510131"},{name:"新津县",code:"510132"},{name:"都江堰市",code:"510181"},{name:"彭州市",code:"510182"},{name:"邛崃市",code:"510183"},{name:"崇州市",code:"510184"}],[{name:"自流井区",code:"510302"},{name:"贡井区",code:"510303"},{name:"大安区",code:"510304"},{name:"沿滩区",code:"510311"},{name:"荣县",code:"510321"},{name:"富顺县",code:"510322"}],[{name:"东区",code:"510402"},{name:"西区",code:"510403"},{name:"仁和区",code:"510411"},{name:"米易县",code:"510421"},{name:"盐边县",code:"510422"}],[{name:"江阳区",code:"510502"},{name:"纳溪区",code:"510503"},{name:"龙马潭区",code:"510504"},{name:"泸县",code:"510521"},{name:"合江县",code:"510522"},{name:"叙永县",code:"510524"},{name:"古蔺县",code:"510525"}],[{name:"旌阳区",code:"510603"},{name:"中江县",code:"510623"},{name:"罗江县",code:"510626"},{name:"广汉市",code:"510681"},{name:"什邡市",code:"510682"},{name:"绵竹市",code:"510683"}],[{name:"涪城区",code:"510703"},{name:"游仙区",code:"510704"},{name:"三台县",code:"510722"},{name:"盐亭县",code:"510723"},{name:"安县",code:"510724"},{name:"梓潼县",code:"510725"},{name:"北川羌族自治县",code:"510726"},{name:"平武县",code:"510727"},{name:"江油市",code:"510781"}],[{name:"利州区",code:"510802"},{name:"昭化区",code:"510811"},{name:"朝天区",code:"510812"},{name:"旺苍县",code:"510821"},{name:"青川县",code:"510822"},{name:"剑阁县",code:"510823"},{name:"苍溪县",code:"510824"}],[{name:"船山区",code:"510903"},{name:"安居区",code:"510904"},{name:"蓬溪县",code:"510921"},{name:"射洪县",code:"510922"},{name:"大英县",code:"510923"}],[{name:"市中区",code:"511002"},{name:"东兴区",code:"511011"},{name:"威远县",code:"511024"},{name:"资中县",code:"511025"},{name:"隆昌县",code:"511028"}],[{name:"市中区",code:"511102"},{name:"沙湾区",code:"511111"},{name:"五通桥区",code:"511112"},{name:"金口河区",code:"511113"},{name:"犍为县",code:"511123"},{name:"井研县",code:"511124"},{name:"夹江县",code:"511126"},{name:"沐川县",code:"511129"},{name:"峨边彝族自治县",code:"511132"},{name:"马边彝族自治县",code:"511133"},{name:"峨眉山市",code:"511181"}],[{name:"顺庆区",code:"511302"},{name:"高坪区",code:"511303"},{name:"嘉陵区",code:"511304"},{name:"南部县",code:"511321"},{name:"营山县",code:"511322"},{name:"蓬安县",code:"511323"},{name:"仪陇县",code:"511324"},{name:"西充县",code:"511325"},{name:"阆中市",code:"511381"}],[{name:"东坡区",code:"511402"},{name:"仁寿县",code:"511421"},{name:"彭山区",code:"511422"},{name:"洪雅县",code:"511423"},{name:"丹棱县",code:"511424"},{name:"青神县",code:"511425"}],[{name:"翠屏区",code:"511502"},{name:"宜宾县",code:"511521"},{name:"南溪区",code:"511522"},{name:"江安县",code:"511523"},{name:"长宁县",code:"511524"},{name:"高县",code:"511525"},{name:"珙县",code:"511526"},{name:"筠连县",code:"511527"},{name:"兴文县",code:"511528"},{name:"屏山县",code:"511529"}],[{name:"广安区",code:"511602"},{name:"前锋区",code:"511603"},{name:"岳池县",code:"511621"},{name:"武胜县",code:"511622"},{name:"邻水县",code:"511623"},{name:"华蓥市",code:"511681"}],[{name:"通川区",code:"511702"},{name:"达川区",code:"511721"},{name:"宣汉县",code:"511722"},{name:"开江县",code:"511723"},{name:"大竹县",code:"511724"},{name:"渠县",code:"511725"},{name:"万源市",code:"511781"}],[{name:"雨城区",code:"511802"},{name:"名山区",code:"511821"},{name:"荥经县",code:"511822"},{name:"汉源县",code:"511823"},{name:"石棉县",code:"511824"},{name:"天全县",code:"511825"},{name:"芦山县",code:"511826"},{name:"宝兴县",code:"511827"}],[{name:"巴州区",code:"511902"},{name:"恩阳区",code:"511903"},{name:"通江县",code:"511921"},{name:"南江县",code:"511922"},{name:"平昌县",code:"511923"}],[{name:"雁江区",code:"512002"},{name:"安岳县",code:"512021"},{name:"乐至县",code:"512022"},{name:"简阳市",code:"512081"}],[{name:"汶川县",code:"513221"},{name:"理县",code:"513222"},{name:"茂县",code:"513223"},{name:"松潘县",code:"513224"},{name:"九寨沟县",code:"513225"},{name:"金川县",code:"513226"},{name:"小金县",code:"513227"},{name:"黑水县",code:"513228"},{name:"马尔康县",code:"513229"},{name:"壤塘县",code:"513230"},{name:"阿坝县",code:"513231"},{name:"若尔盖县",code:"513232"},{name:"红原县",code:"513233"}],[{name:"康定县",code:"513321"},{name:"泸定县",code:"513322"},{name:"丹巴县",code:"513323"},{name:"九龙县",code:"513324"},{name:"雅江县",code:"513325"},{name:"道孚县",code:"513326"},{name:"炉霍县",code:"513327"},{name:"甘孜县",code:"513328"},{name:"新龙县",code:"513329"},{name:"德格县",code:"513330"},{name:"白玉县",code:"513331"},{name:"石渠县",code:"513332"},{name:"色达县",code:"513333"},{name:"理塘县",code:"513334"},{name:"巴塘县",code:"513335"},{name:"乡城县",code:"513336"},{name:"稻城县",code:"513337"},{name:"得荣县",code:"513338"}],[{name:"西昌市",code:"513401"},{name:"木里藏族自治县",code:"513422"},{name:"盐源县",code:"513423"},{name:"德昌县",code:"513424"},{name:"会理县",code:"513425"},{name:"会东县",code:"513426"},{name:"宁南县",code:"513427"},{name:"普格县",code:"513428"},{name:"布拖县",code:"513429"},{name:"金阳县",code:"513430"},{name:"昭觉县",code:"513431"},{name:"喜德县",code:"513432"},{name:"冕宁县",code:"513433"},{name:"越西县",code:"513434"},{name:"甘洛县",code:"513435"},{name:"美姑县",code:"513436"},{name:"雷波县",code:"513437"}]],[[{name:"南明区",code:"520102"},{name:"云岩区",code:"520103"},{name:"花溪区",code:"520111"},{name:"乌当区",code:"520112"},{name:"白云区",code:"520113"},{name:"开阳县",code:"520121"},{name:"息烽县",code:"520122"},{name:"修文县",code:"520123"},{name:"观山湖区",code:"520151"},{name:"清镇市",code:"520181"}],[{name:"钟山区",code:"520201"},{name:"六枝特区",code:"520203"},{name:"水城县",code:"520221"},{name:"盘县",code:"520222"}],[{name:"红花岗区",code:"520302"},{name:"汇川区",code:"520303"},{name:"遵义县",code:"520321"},{name:"桐梓县",code:"520322"},{name:"绥阳县",code:"520323"},{name:"正安县",code:"520324"},{name:"道真仡佬族苗族自治县",code:"520325"},{name:"务川仡佬族苗族自治县",code:"520326"},{name:"凤冈县",code:"520327"},{name:"湄潭县",code:"520328"},{name:"余庆县",code:"520329"},{name:"习水县",code:"520330"},{name:"赤水市",code:"520381"},{name:"仁怀市",code:"520382"}],[{name:"西秀区",code:"520402"},{name:"平坝区",code:"520421"},{name:"普定县",code:"520422"},{name:"镇宁布依族苗族自治县",code:"520423"},{name:"关岭布依族苗族自治县",code:"520424"},{name:"紫云苗族布依族自治县",code:"520425"}],[{name:"碧江区",code:"522201"},{name:"江口县",code:"522222"},{name:"玉屏侗族自治县",code:"522223"},{name:"石阡县",code:"522224"},{name:"思南县",code:"522225"},{name:"印江土家族苗族自治县",code:"522226"},{name:"德江县",code:"522227"},{name:"沿河土家族自治县",code:"522228"},{name:"松桃苗族自治县",code:"522229"},{name:"万山区",code:"522230"}],[{name:"兴义市",code:"522301"},{name:"兴仁县",code:"522322"},{name:"普安县",code:"522323"},{name:"晴隆县",code:"522324"},{name:"贞丰县",code:"522325"},{name:"望谟县",code:"522326"},{name:"册亨县",code:"522327"},{name:"安龙县",code:"522328"}],[{name:"七星关区",code:"522401"},{name:"大方县",code:"522422"},{name:"黔西县",code:"522423"},{name:"金沙县",code:"522424"},{name:"织金县",code:"522425"},{name:"纳雍县",code:"522426"},{name:"威宁彝族回族苗族自治县",code:"522427"},{name:"赫章县",code:"522428"}],[{name:"凯里市",code:"522601"},{name:"黄平县",code:"522622"},{name:"施秉县",code:"522623"},{name:"三穗县",code:"522624"},{name:"镇远县",code:"522625"},{name:"岑巩县",code:"522626"},{name:"天柱县",code:"522627"},{name:"锦屏县",code:"522628"},{name:"剑河县",code:"522629"},{name:"台江县",code:"522630"},{name:"黎平县",code:"522631"},{name:"榕江县",code:"522632"},{name:"从江县",code:"522633"},{name:"雷山县",code:"522634"},{name:"麻江县",code:"522635"},{name:"丹寨县",code:"522636"}],[{name:"都匀市",code:"522701"},{name:"福泉市",code:"522702"},{name:"荔波县",code:"522722"},{name:"贵定县",code:"522723"},{name:"瓮安县",code:"522725"},{name:"独山县",code:"522726"},{name:"平塘县",code:"522727"},{name:"罗甸县",code:"522728"},{name:"长顺县",code:"522729"},{name:"龙里县",code:"522730"},{name:"惠水县",code:"522731"},{name:"三都水族自治县",code:"522732"}]],[[{name:"五华区",code:"530102"},{name:"盘龙区",code:"530103"},{name:"官渡区",code:"530111"},{name:"西山区",code:"530112"},{name:"东川区",code:"530113"},{name:"呈贡区",code:"530121"},{name:"晋宁县",code:"530122"},{name:"富民县",code:"530124"},{name:"宜良县",code:"530125"},{name:"石林彝族自治县",code:"530126"},{name:"嵩明县",code:"530127"},{name:"禄劝彝族苗族自治县",code:"530128"},{name:"寻甸回族彝族自治县",code:"530129"},{name:"安宁市",code:"530181"}],[{name:"麒麟区",code:"530302"},{name:"马龙县",code:"530321"},{name:"陆良县",code:"530322"},{name:"师宗县",code:"530323"},{name:"罗平县",code:"530324"},{name:"富源县",code:"530325"},{name:"会泽县",code:"530326"},{name:"沾益县",code:"530328"},{name:"宣威市",code:"530381"}],[{name:"红塔区",code:"530402"},{name:"江川县",code:"530421"},{name:"澄江县",code:"530422"},{name:"通海县",code:"530423"},{name:"华宁县",code:"530424"},{name:"易门县",code:"530425"},{name:"峨山彝族自治县",code:"530426"},{name:"新平彝族傣族自治县",code:"530427"},{name:"元江哈尼族彝族傣族自治县",code:"530428"}],[{name:"隆阳区",code:"530502"},{name:"施甸县",code:"530521"},{name:"腾冲县",code:"530522"},{name:"龙陵县",code:"530523"},{name:"昌宁县",code:"530524"}],[{name:"昭阳区",code:"530602"},{name:"鲁甸县",code:"530621"},{name:"巧家县",code:"530622"},{name:"盐津县",code:"530623"},{name:"大关县",code:"530624"},{name:"永善县",code:"530625"},{name:"绥江县",code:"530626"},{name:"镇雄县",code:"530627"},{name:"彝良县",code:"530628"},{name:"威信县",code:"530629"},{name:"水富县",code:"530630"}],[{name:"古城区",code:"530702"},{name:"玉龙纳西族自治县",code:"530721"},{name:"永胜县",code:"530722"},{name:"华坪县",code:"530723"},{name:"宁蒗彝族自治县",code:"530724"}],[{name:"思茅区",code:"530802"},{name:"宁洱哈尼族彝族自治县",code:"530821"},{name:"墨江哈尼族自治县",code:"530822"},{name:"景东彝族自治县",code:"530823"},{name:"景谷傣族彝族自治县",code:"530824"},{name:"镇沅彝族哈尼族拉祜族自治县",code:"530825"},{name:"江城哈尼族彝族自治县",code:"530826"},{name:"孟连傣族拉祜族佤族自治县",code:"530827"},{name:"澜沧拉祜族自治县",code:"530828"},{name:"西盟佤族自治县",code:"530829"}],[{name:"临翔区",code:"530902"},{name:"凤庆县",code:"530921"},{name:"云县",code:"530922"},{name:"永德县",code:"530923"},{name:"镇康县",code:"530924"},{name:"双江拉祜族佤族布朗族傣族自治县",code:"530925"},{name:"耿马傣族佤族自治县",code:"530926"},{name:"沧源佤族自治县",code:"530927"}],[{name:"楚雄市",code:"532301"},{name:"双柏县",code:"532322"},{name:"牟定县",code:"532323"},{name:"南华县",code:"532324"},{name:"姚安县",code:"532325"},{name:"大姚县",code:"532326"},{name:"永仁县",code:"532327"},{name:"元谋县",code:"532328"},{name:"武定县",code:"532329"},{name:"禄丰县",code:"532331"}],[{name:"个旧市",code:"532501"},{name:"开远市",code:"532502"},{name:"蒙自市",code:"532522"},{name:"屏边苗族自治县",code:"532523"},{name:"建水县",code:"532524"},{name:"石屏县",code:"532525"},{name:"弥勒市",code:"532526"},{name:"泸西县",code:"532527"},{name:"元阳县",code:"532528"},{name:"红河县",code:"532529"},{name:"金平苗族瑶族傣族自治县",code:"532530"},{name:"绿春县",code:"532531"},{name:"河口瑶族自治县",code:"532532"}],[{name:"文山市",code:"532621"},{name:"砚山县",code:"532622"},{name:"西畴县",code:"532623"},{name:"麻栗坡县",code:"532624"},{name:"马关县",code:"532625"},{name:"丘北县",code:"532626"},{name:"广南县",code:"532627"},{name:"富宁县",code:"532628"}],[{name:"景洪市",code:"532801"},{name:"勐海县",code:"532822"},{name:"勐腊县",code:"532823"}],[{name:"大理市",code:"532901"},{name:"漾濞彝族自治县",code:"532922"},{name:"祥云县",code:"532923"},{name:"宾川县",code:"532924"},{name:"弥渡县",code:"532925"},{name:"南涧彝族自治县",code:"532926"},{name:"巍山彝族回族自治县",code:"532927"},{name:"永平县",code:"532928"},{name:"云龙县",code:"532929"},{name:"洱源县",code:"532930"},{name:"剑川县",code:"532931"},{name:"鹤庆县",code:"532932"}],[{name:"瑞丽市",code:"533102"},{name:"芒市",code:"533103"},{name:"梁河县",code:"533122"},{name:"盈江县",code:"533123"},{name:"陇川县",code:"533124"}],[{name:"泸水县",code:"533321"},{name:"福贡县",code:"533323"},{name:"贡山独龙族怒族自治县",code:"533324"},{name:"兰坪白族普米族自治县",code:"533325"}],[{name:"香格里拉市",code:"533421"},{name:"德钦县",code:"533422"},{name:"维西傈僳族自治县",code:"533423"}]],[[{name:"城关区",code:"540102"},{name:"林周县",code:"540121"},{name:"当雄县",code:"540122"},{name:"尼木县",code:"540123"},{name:"曲水县",code:"540124"},{name:"堆龙德庆县",code:"540125"},{name:"达孜县",code:"540126"},{name:"墨竹工卡县",code:"540127"}],[{name:"卡若区",code:"542121"},{name:"江达县",code:"542122"},{name:"贡觉县",code:"542123"},{name:"类乌齐县",code:"542124"},{name:"丁青县",code:"542125"},{name:"察雅县",code:"542126"},{name:"八宿县",code:"542127"},{name:"左贡县",code:"542128"},{name:"芒康县",code:"542129"},{name:"洛隆县",code:"542132"},{name:"边坝县",code:"542133"}],[{name:"乃东县",code:"542221"},{name:"扎囊县",code:"542222"},{name:"贡嘎县",code:"542223"},{name:"桑日县",code:"542224"},{name:"琼结县",code:"542225"},{name:"曲松县",code:"542226"},{name:"措美县",code:"542227"},{name:"洛扎县",code:"542228"},{name:"加查县",code:"542229"},{name:"隆子县",code:"542231"},{name:"错那县",code:"542232"},{name:"浪卡子县",code:"542233"}],[{name:"桑珠孜区",code:"542301"},{name:"南木林县",code:"542322"},{name:"江孜县",code:"542323"},{name:"定日县",code:"542324"},{name:"萨迦县",code:"542325"},{name:"拉孜县",code:"542326"},{name:"昂仁县",code:"542327"},{name:"谢通门县",code:"542328"},{name:"白朗县",code:"542329"},{name:"仁布县",code:"542330"},{name:"康马县",code:"542331"},{name:"定结县",code:"542332"},{name:"仲巴县",code:"542333"},{name:"亚东县",code:"542334"},{name:"吉隆县",code:"542335"},{name:"聂拉木县",code:"542336"},{name:"萨嘎县",code:"542337"},{name:"岗巴县",code:"542338"}],[{name:"那曲县",code:"542421"},{name:"嘉黎县",code:"542422"},{name:"比如县",code:"542423"},{name:"聂荣县",code:"542424"},{name:"安多县",code:"542425"},{name:"申扎县",code:"542426"},{name:"索县",code:"542427"},{name:"班戈县",code:"542428"},{name:"巴青县",code:"542429"},{name:"尼玛县",code:"542430"},{name:"双湖县",code:"542432"}],[{name:"普兰县",code:"542521"},{name:"札达县",code:"542522"},{name:"噶尔县",code:"542523"},{name:"日土县",code:"542524"},{name:"革吉县",code:"542525"},{name:"改则县",code:"542526"},{name:"措勤县",code:"542527"}],[{name:"林芝县",code:"542621"},{name:"工布江达县",code:"542622"},{name:"米林县",code:"542623"},{name:"墨脱县",code:"542624"},{name:"波密县",code:"542625"},{name:"察隅县",code:"542626"},{name:"朗县",code:"542627"}]],[[{name:"新城区",code:"610102"},{name:"碑林区",code:"610103"},{name:"莲湖区",code:"610104"},{name:"灞桥区",code:"610111"},{name:"未央区",code:"610112"},{name:"雁塔区",code:"610113"},{name:"阎良区",code:"610114"},{name:"临潼区",code:"610115"},{name:"长安区",code:"610116"},{name:"蓝田县",code:"610122"},{name:"周至县",code:"610124"},{name:"户县",code:"610125"},{name:"高陵区",code:"610126"}],[{name:"王益区",code:"610202"},{name:"印台区",code:"610203"},{name:"耀州区",code:"610204"},{name:"宜君县",code:"610222"}],[{name:"渭滨区",code:"610302"},{name:"金台区",code:"610303"},{name:"陈仓区",code:"610304"},{name:"凤翔县",code:"610322"},{name:"岐山县",code:"610323"},{name:"扶风县",code:"610324"},{name:"眉县",code:"610326"},{name:"陇县",code:"610327"},{name:"千阳县",code:"610328"},{name:"麟游县",code:"610329"},{name:"凤县",code:"610330"},{name:"太白县",code:"610331"}],[{name:"秦都区",code:"610402"},{name:"杨陵区",code:"610403"},{name:"渭城区",code:"610404"},{name:"三原县",code:"610422"},{name:"泾阳县",code:"610423"},{name:"乾县",code:"610424"},{name:"礼泉县",code:"610425"},{name:"永寿县",code:"610426"},{name:"彬县",code:"610427"},{name:"长武县",code:"610428"},{name:"旬邑县",code:"610429"},{name:"淳化县",code:"610430"},{name:"武功县",code:"610431"},{name:"兴平市",code:"610481"}],[{name:"临渭区",code:"610502"},{name:"华县",code:"610521"},{name:"潼关县",code:"610522"},{name:"大荔县",code:"610523"},{name:"合阳县",code:"610524"},{name:"澄城县",code:"610525"},{name:"蒲城县",code:"610526"},{name:"白水县",code:"610527"},{name:"富平县",code:"610528"},{name:"韩城市",code:"610581"},{name:"华阴市",code:"610582"}],[{name:"宝塔区",code:"610602"},{name:"延长县",code:"610621"},{name:"延川县",code:"610622"},{name:"子长县",code:"610623"},{name:"安塞县",code:"610624"},{name:"志丹县",code:"610625"},{name:"吴起县",code:"610626"},{name:"甘泉县",code:"610627"},{name:"富县",code:"610628"},{name:"洛川县",code:"610629"},{name:"宜川县",code:"610630"},{name:"黄龙县",code:"610631"},{name:"黄陵县",code:"610632"}],[{name:"汉台区",code:"610702"},{name:"南郑县",code:"610721"},{name:"城固县",code:"610722"},{name:"洋县",code:"610723"},{name:"西乡县",code:"610724"},{name:"勉县",code:"610725"},{name:"宁强县",code:"610726"},{name:"略阳县",code:"610727"},{name:"镇巴县",code:"610728"},{name:"留坝县",code:"610729"},{name:"佛坪县",code:"610730"}],[{name:"榆阳区",code:"610802"},{name:"神木县",code:"610821"},{name:"府谷县",code:"610822"},{name:"横山县",code:"610823"},{name:"靖边县",code:"610824"},{name:"定边县",code:"610825"},{name:"绥德县",code:"610826"},{name:"米脂县",code:"610827"},{name:"佳县",code:"610828"},{name:"吴堡县",code:"610829"},{name:"清涧县",code:"610830"},{name:"子洲县",code:"610831"}],[{name:"汉滨区",code:"610902"},{name:"汉阴县",code:"610921"},{name:"石泉县",code:"610922"},{name:"宁陕县",code:"610923"},{name:"紫阳县",code:"610924"},{name:"岚皋县",code:"610925"},{name:"平利县",code:"610926"},{name:"镇坪县",code:"610927"},{name:"旬阳县",code:"610928"},{name:"白河县",code:"610929"}],[{name:"商州区",code:"611002"},{name:"洛南县",code:"611021"},{name:"丹凤县",code:"611022"},{name:"商南县",code:"611023"},{name:"山阳县",code:"611024"},{name:"镇安县",code:"611025"},{name:"柞水县",code:"611026"}]],[[{name:"城关区",code:"620102"},{name:"七里河区",code:"620103"},{name:"西固区",code:"620104"},{name:"安宁区",code:"620105"},{name:"红古区",code:"620111"},{name:"永登县",code:"620121"},{name:"皋兰县",code:"620122"},{name:"榆中县",code:"620123"}],[{name:"嘉峪关市",code:"620201"}],[{name:"金川区",code:"620302"},{name:"永昌县",code:"620321"}],[{name:"白银区",code:"620402"},{name:"平川区",code:"620403"},{name:"靖远县",code:"620421"},{name:"会宁县",code:"620422"},{name:"景泰县",code:"620423"}],[{name:"秦州区",code:"620502"},{name:"麦积区",code:"620503"},{name:"清水县",code:"620521"},{name:"秦安县",code:"620522"},{name:"甘谷县",code:"620523"},{name:"武山县",code:"620524"},{name:"张家川回族自治县",code:"620525"}],[{name:"凉州区",code:"620602"},{name:"民勤县",code:"620621"},{name:"古浪县",code:"620622"},{name:"天祝藏族自治县",code:"620623"}],[{name:"甘州区",code:"620702"},{name:"肃南裕固族自治县",code:"620721"},{name:"民乐县",code:"620722"},{name:"临泽县",code:"620723"},{name:"高台县",code:"620724"},{name:"山丹县",code:"620725"}],[{name:"崆峒区",code:"620802"},{name:"泾川县",code:"620821"},{name:"灵台县",code:"620822"},{name:"崇信县",code:"620823"},{name:"华亭县",code:"620824"},{name:"庄浪县",code:"620825"},{name:"静宁县",code:"620826"}],[{name:"肃州区",code:"620902"},{name:"金塔县",code:"620921"},{name:"瓜州县",code:"620922"},{name:"肃北蒙古族自治县",code:"620923"},{name:"阿克塞哈萨克族自治县",code:"620924"},{name:"玉门市",code:"620981"},{name:"敦煌市",code:"620982"}],[{name:"西峰区",code:"621002"},{name:"庆城县",code:"621021"},{name:"环县",code:"621022"},{name:"华池县",code:"621023"},{name:"合水县",code:"621024"},{name:"正宁县",code:"621025"},{name:"宁县",code:"621026"},{name:"镇原县",code:"621027"}],[{name:"安定区",code:"621102"},{name:"通渭县",code:"621121"},{name:"陇西县",code:"621122"},{name:"渭源县",code:"621123"},{name:"临洮县",code:"621124"},{name:"漳县",code:"621125"},{name:"岷县",code:"621126"}],[{name:"武都区",code:"621202"},{name:"成县",code:"621221"},{name:"文县",code:"621222"},{name:"宕昌县",code:"621223"},{name:"康县",code:"621224"},{name:"西和县",code:"621225"},{name:"礼县",code:"621226"},{name:"徽县",code:"621227"},{name:"两当县",code:"621228"}],[{name:"临夏市",code:"622901"},{name:"临夏县",code:"622921"},{name:"康乐县",code:"622922"},{name:"永靖县",code:"622923"},{name:"广河县",code:"622924"},{name:"和政县",code:"622925"},{name:"东乡族自治县",code:"622926"},{name:"积石山保安族东乡族撒拉族自治县",code:"622927"}],[{name:"合作市",code:"623001"},{name:"临潭县",code:"623021"},{name:"卓尼县",code:"623022"},{name:"舟曲县",code:"623023"},{name:"迭部县",code:"623024"},{name:"玛曲县",code:"623025"},{name:"碌曲县",code:"623026"},{name:"夏河县",code:"623027"}]],[[{name:"城东区",code:"630102"},{name:"城中区",code:"630103"},{name:"城西区",code:"630104"},{name:"城北区",code:"630105"},{name:"大通回族土族自治县",code:"630121"},{name:"湟中县",code:"630122"},{name:"湟源县",code:"630123"}],[{name:"平安县",code:"632121"},{name:"民和回族土族自治县",code:"632122"},{name:"乐都区",code:"632123"},{name:"互助土族自治县",code:"632126"},{name:"化隆回族自治县",code:"632127"},{name:"循化撒拉族自治县",code:"632128"}],[{name:"门源回族自治县",code:"632221"},{name:"祁连县",code:"632222"},{name:"海晏县",code:"632223"},{name:"刚察县",code:"632224"}],[{name:"同仁县",code:"632321"},{name:"尖扎县",code:"632322"},{name:"泽库县",code:"632323"},{name:"河南蒙古族自治县",code:"632324"}],[{name:"共和县",code:"632521"},{name:"同德县",code:"632522"},{name:"贵德县",code:"632523"},{name:"兴海县",code:"632524"},{name:"贵南县",code:"632525"}],[{name:"玛沁县",code:"632621"},{name:"班玛县",code:"632622"},{name:"甘德县",code:"632623"},{name:"达日县",code:"632624"},{name:"久治县",code:"632625"},{name:"玛多县",code:"632626"}],[{name:"玉树市",code:"632721"},{name:"杂多县",code:"632722"},{name:"称多县",code:"632723"},{name:"治多县",code:"632724"},{name:"囊谦县",code:"632725"},{name:"曲麻莱县",code:"632726"}],[{name:"格尔木市",code:"632801"},{name:"德令哈市",code:"632802"},{name:"乌兰县",code:"632821"},{name:"都兰县",code:"632822"},{name:"天峻县",code:"632823"}]],[[{name:"兴庆区",code:"640104"},{name:"西夏区",code:"640105"},{name:"金凤区",code:"640106"},{name:"永宁县",code:"640121"},{name:"贺兰县",code:"640122"},{name:"灵武市",code:"640181"}],[{name:"大武口区",code:"640202"},{name:"惠农区",code:"640205"},{name:"平罗县",code:"640221"}],[{name:"利通区",code:"640302"},{name:"盐池县",code:"640323"},{name:"同心县",code:"640324"},{name:"青铜峡市",code:"640381"},{name:"红寺堡区",code:"640303"}],[{name:"原州区",code:"640402"},{name:"西吉县",code:"640422"},{name:"隆德县",code:"640423"},{name:"泾源县",code:"640424"},{name:"彭阳县",code:"640425"}],[{name:"沙坡头区",code:"640502"},{name:"中宁县",code:"640521"},{name:"海原县",code:"640522"}]],[[{name:"天山区",code:"650102"},{name:"沙依巴克区",code:"650103"},{name:"新市区",code:"650104"},{name:"水磨沟区",code:"650105"},{name:"头屯河区",code:"650106"},{name:"达坂城区",code:"650107"},{name:"乌鲁木齐县",code:"650121"},{name:"米东区",code:"650109"}],[{name:"独山子区",code:"650202"},{name:"克拉玛依区",code:"650203"},{name:"白碱滩区",code:"650204"},{name:"乌尔禾区",code:"650205"}],[{name:"吐鲁番市",code:"652101"},{name:"鄯善县",code:"652122"},{name:"托克逊县",code:"652123"}],[{name:"哈密市",code:"652201"},{name:"巴里坤哈萨克自治县",code:"652222"},{name:"伊吾县",code:"652223"}],[{name:"昌吉市",code:"652301"},{name:"阜康市",code:"652302"},{name:"呼图壁县",code:"652323"},{name:"玛纳斯县",code:"652324"},{name:"奇台县",code:"652325"},{name:"吉木萨尔县",code:"652327"},{name:"木垒哈萨克自治县",code:"652328"}],[{name:"博乐市",code:"652701"},{name:"阿拉山口市",code:"652702"},{name:"精河县",code:"652722"},{name:"温泉县",code:"652723"}],[{name:"库尔勒市",code:"652801"},{name:"轮台县",code:"652822"},{name:"尉犁县",code:"652823"},{name:"若羌县",code:"652824"},{name:"且末县",code:"652825"},{name:"焉耆回族自治县",code:"652826"},{name:"和静县",code:"652827"},{name:"和硕县",code:"652828"},{name:"博湖县",code:"652829"}],[{name:"阿克苏市",code:"652901"},{name:"温宿县",code:"652922"},{name:"库车县",code:"652923"},{name:"沙雅县",code:"652924"},{name:"新和县",code:"652925"},{name:"拜城县",code:"652926"},{name:"乌什县",code:"652927"},{name:"阿瓦提县",code:"652928"},{name:"柯坪县",code:"652929"}],[{name:"阿图什市",code:"653001"},{name:"阿克陶县",code:"653022"},{name:"阿合奇县",code:"653023"},{name:"乌恰县",code:"653024"}],[{name:"喀什市",code:"653101"},{name:"疏附县",code:"653121"},{name:"疏勒县",code:"653122"},{name:"英吉沙县",code:"653123"},{name:"泽普县",code:"653124"},{name:"莎车县",code:"653125"},{name:"叶城县",code:"653126"},{name:"麦盖提县",code:"653127"},{name:"岳普湖县",code:"653128"},{name:"伽师县",code:"653129"},{name:"巴楚县",code:"653130"},{name:"塔什库尔干塔吉克自治县",code:"653131"}],[{name:"和田市",code:"653201"},{name:"和田县",code:"653221"},{name:"墨玉县",code:"653222"},{name:"皮山县",code:"653223"},{name:"洛浦县",code:"653224"},{name:"策勒县",code:"653225"},{name:"于田县",code:"653226"},{name:"民丰县",code:"653227"}],[{name:"伊宁市",code:"654002"},{name:"奎屯市",code:"654003"},{name:"伊宁县",code:"654021"},{name:"察布查尔锡伯自治县",code:"654022"},{name:"霍城县",code:"654023"},{name:"巩留县",code:"654024"},{name:"新源县",code:"654025"},{name:"昭苏县",code:"654026"},{name:"特克斯县",code:"654027"},{name:"尼勒克县",code:"654028"}],[{name:"塔城市",code:"654201"},{name:"乌苏市",code:"654202"},{name:"额敏县",code:"654221"},{name:"沙湾县",code:"654223"},{name:"托里县",code:"654224"},{name:"裕民县",code:"654225"},{name:"和布克赛尔蒙古自治县",code:"654226"}],[{name:"阿勒泰市",code:"654301"},{name:"布尔津县",code:"654321"},{name:"富蕴县",code:"654322"},{name:"福海县",code:"654323"},{name:"哈巴河县",code:"654324"},{name:"青河县",code:"654325"},{name:"吉木乃县",code:"654326"}],[{name:"石河子市",code:"659005"}],[{name:"阿拉尔市",code:"659006"}],[{name:"图木舒克市",code:"659007"}],[{name:"五家渠市",code:"659008"}]],[[{name:"中正区",code:"710101"},{name:"大同区",code:"710102"},{name:"中山区",code:"710103"},{name:"松山区",code:"710104"},{name:"大安区",code:"710105"},{name:"万华区",code:"710106"},{name:"信义区",code:"710107"},{name:"士林区",code:"710108"},{name:"北投区",code:"710109"},{name:"内湖区",code:"710110"},{name:"南港区",code:"710111"},{name:"文山区",code:"710112"}],[{name:"新兴区",code:"710201"},{name:"前金区",code:"710202"},{name:"盐埕区",code:"710204"},{name:"鼓山区",code:"710205"},{name:"旗津区",code:"710206"},{name:"前镇区",code:"710207"},{name:"三民区",code:"710208"},{name:"左营区",code:"710209"},{name:"楠梓区",code:"710210"},{name:"小港区",code:"710211"},{name:"苓雅区",code:"710241"},{name:"仁武区",code:"710242"},{name:"大社区",code:"710243"},{name:"冈山区",code:"710244"},{name:"路竹区",code:"710245"},{name:"阿莲区",code:"710246"},{name:"田寮区",code:"710247"},{name:"燕巢区",code:"710248"},{name:"桥头区",code:"710249"},{name:"梓官区",code:"710250"},{name:"弥陀区",code:"710251"},{name:"永安区",code:"710252"},{name:"湖内区",code:"710253"},{name:"凤山区",code:"710254"},{name:"大寮区",code:"710255"},{name:"林园区",code:"710256"},{name:"鸟松区",code:"710257"},{name:"大树区",code:"710258"},{name:"旗山区",code:"710259"},{name:"美浓区",code:"710260"},{name:"六龟区",code:"710261"},{name:"内门区",code:"710262"},{name:"杉林区",code:"710263"},{name:"甲仙区",code:"710264"},{name:"桃源区",code:"710265"},{name:"那玛夏区",code:"710266"},{name:"茂林区",code:"710267"},{name:"茄萣区",code:"710268"}],[{name:"中西区",code:"710301"},{name:"东区",code:"710302"},{name:"南区",code:"710303"},{name:"北区",code:"710304"},{name:"安平区",code:"710305"},{name:"安南区",code:"710306"},{name:"永康区",code:"710339"},{name:"归仁区",code:"710340"},{name:"新化区",code:"710341"},{name:"左镇区",code:"710342"},{name:"玉井区",code:"710343"},{name:"楠西区",code:"710344"},{name:"南化区",code:"710345"},{name:"仁德区",code:"710346"},{name:"关庙区",code:"710347"},{name:"龙崎区",code:"710348"},{name:"官田区",code:"710349"},{name:"麻豆区",code:"710350"},{name:"佳里区",code:"710351"},{name:"西港区",code:"710352"},{name:"七股区",code:"710353"},{name:"将军区",code:"710354"},{name:"学甲区",code:"710355"},{name:"北门区",code:"710356"},{name:"新营区",code:"710357"},{name:"后壁区",code:"710358"},{name:"白河区",code:"710359"},{name:"东山区",code:"710360"},{name:"六甲区",code:"710361"},{name:"下营区",code:"710362"},{name:"柳营区",code:"710363"},{name:"盐水区",code:"710364"},{name:"善化区",code:"710365"},{name:"大内区",code:"710366"},{name:"山上区",code:"710367"},{name:"新市区",code:"710368"},{name:"安定区",code:"710369"}],[{name:"中区",code:"710401"},{name:"东区",code:"710402"},{name:"南区",code:"710403"},{name:"西区",code:"710404"},{name:"北区",code:"710405"},{name:"北屯区",code:"710406"},{name:"西屯区",code:"710407"},{name:"南屯区",code:"710408"},{name:"太平区",code:"710431"},{name:"大里区",code:"710432"},{name:"雾峰区",code:"710433"},{name:"乌日区",code:"710434"},{name:"丰原区",code:"710435"},{name:"后里区",code:"710436"},{name:"石冈区",code:"710437"},{name:"东势区",code:"710438"},{name:"和平区",code:"710439"},{name:"新社区",code:"710440"},{name:"潭子区",code:"710441"},{name:"大雅区",code:"710442"},{name:"神冈区",code:"710443"},{name:"大肚区",code:"710444"},{name:"沙鹿区",code:"710445"},{name:"龙井区",code:"710446"},{name:"梧栖区",code:"710447"},{name:"清水区",code:"710448"},{name:"大甲区",code:"710449"},{name:"外埔区",code:"710450"},{name:"大安区",code:"710451"}],[{name:"金沙镇",code:"710507"},{name:"金湖镇",code:"710508"},{name:"金宁乡",code:"710509"},{name:"金城镇",code:"710510"},{name:"烈屿乡",code:"710511"},{name:"乌坵乡",code:"710512"}],[{name:"南投市",code:"710614"},{name:"中寮乡",code:"710615"},{name:"草屯镇",code:"710616"},{name:"国姓乡",code:"710617"},{name:"埔里镇",code:"710618"},{name:"仁爱乡",code:"710619"},{name:"名间乡",code:"710620"},{name:"集集镇",code:"710621"},{name:"水里乡",code:"710622"},{name:"鱼池乡",code:"710623"},{name:"信义乡",code:"710624"},{name:"竹山镇",code:"710625"},{name:"鹿谷乡",code:"710626"}],[{name:"仁爱区",code:"710701"},{name:"信义区",code:"710702"},{name:"中正区",code:"710703"},{name:"中山区",code:"710704"},{name:"安乐区",code:"710705"},{name:"暖暖区",code:"710706"},{name:"七堵区",code:"710707"}],[{name:"东区",code:"710801"},{name:"北区",code:"710802"},{name:"香山区",code:"710803"}],[{name:"东区",code:"710901"},{name:"西区",code:"710902"}],[{name:"万里区",code:"711130"},{name:"金山区",code:"711131"},{name:"板桥区",code:"711132"},{name:"汐止区",code:"711133"},{name:"深坑区",code:"711134"},{name:"石碇区",code:"711135"},{name:"瑞芳区",code:"711136"},{name:"平溪区",code:"711137"},{name:"双溪区",code:"711138"},{name:"贡寮区",code:"711139"},{name:"新店区",code:"711140"},{name:"坪林区",code:"711141"},{name:"乌来区",code:"711142"},{name:"永和区",code:"711143"},{name:"中和区",code:"711144"},{name:"土城区",code:"711145"},{name:"三峡区",code:"711146"},{name:"树林区",code:"711147"},{name:"莺歌区",code:"711148"},{name:"三重区",code:"711149"},{name:"新庄区",code:"711150"},{name:"泰山区",code:"711151"},{name:"林口区",code:"711152"},{name:"芦洲区",code:"711153"},{name:"五股区",code:"711154"},{name:"八里区",code:"711155"},{name:"淡水区",code:"711156"},{name:"三芝区",code:"711157"},{name:"石门区",code:"711158"}],[{name:"宜兰市",code:"711214"},{name:"头城镇",code:"711215"},{name:"礁溪乡",code:"711216"},{name:"壮围乡",code:"711217"},{name:"员山乡",code:"711218"},{name:"罗东镇",code:"711219"},{name:"三星乡",code:"711220"},{name:"大同乡",code:"711221"},{name:"五结乡",code:"711222"},{name:"冬山乡",code:"711223"},{name:"苏澳镇",code:"711224"},{name:"南澳乡",code:"711225"},{name:"钓鱼台",code:"711226"}],[{name:"竹北市",code:"711314"},{name:"湖口乡",code:"711315"},{name:"新丰乡",code:"711316"},{name:"新埔镇",code:"711317"},{name:"关西镇",code:"711318"},{name:"芎林乡",code:"711319"},{name:"宝山乡",code:"711320"},{name:"竹东镇",code:"711321"},{name:"五峰乡",code:"711322"},{name:"横山乡",code:"711323"},{name:"尖石乡",code:"711324"},{name:"北埔乡",code:"711325"},{name:"峨眉乡",code:"711326"}],[{name:"中坜市",code:"711414"},{name:"平镇市",code:"711415"},{name:"龙潭乡",code:"711416"},{name:"杨梅市",code:"711417"},{name:"新屋乡",code:"711418"},{name:"观音乡",code:"711419"},{name:"桃园市",code:"711420"},{name:"龟山乡",code:"711421"},{name:"八德市",code:"711422"},{name:"大溪镇",code:"711423"},{name:"复兴乡",code:"711424"},{name:"大园乡",code:"711425"},{name:"芦竹乡",code:"711426"}],[{name:"竹南镇",code:"711519"},{name:"头份镇",code:"711520"},{name:"三湾乡",code:"711521"},{name:"南庄乡",code:"711522"},{name:"狮潭乡",code:"711523"},{name:"后龙镇",code:"711524"},{name:"通霄镇",code:"711525"},{name:"苑里镇",code:"711526"},{name:"苗栗市",code:"711527"},{name:"造桥乡",code:"711528"},{name:"头屋乡",code:"711529"},{name:"公馆乡",code:"711530"},{name:"大湖乡",code:"711531"},{name:"泰安乡",code:"711532"},{name:"铜锣乡",code:"711533"},{name:"三义乡",code:"711534"},{name:"西湖乡",code:"711535"},{name:"卓兰镇",code:"711536"}],[{name:"彰化市",code:"711727"},{name:"芬园乡",code:"711728"},{name:"花坛乡",code:"711729"},{name:"秀水乡",code:"711730"},{name:"鹿港镇",code:"711731"},{name:"福兴乡",code:"711732"},{name:"线西乡",code:"711733"},{name:"和美镇",code:"711734"},{name:"伸港乡",code:"711735"},{name:"员林镇",code:"711736"},{name:"社头乡",code:"711737"},{name:"永靖乡",code:"711738"},{name:"埔心乡",code:"711739"},{name:"溪湖镇",code:"711740"},{name:"大村乡",code:"711741"},{name:"埔盐乡",code:"711742"},{name:"田中镇",code:"711743"},{name:"北斗镇",code:"711744"},{name:"田尾乡",code:"711745"},{name:"埤头乡",code:"711746"},{name:"溪州乡",code:"711747"},{name:"竹塘乡",code:"711748"},{name:"二林镇",code:"711749"},{name:"大城乡",code:"711750"},{name:"芳苑乡",code:"711751"},{name:"二水乡",code:"711752"}],[{name:"番路乡",code:"711919"},{name:"梅山乡",code:"711920"},{name:"竹崎乡",code:"711921"},{name:"阿里山乡",code:"711922"},{name:"中埔乡",code:"711923"},{name:"大埔乡",code:"711924"},{name:"水上乡",code:"711925"},{name:"鹿草乡",code:"711926"},{name:"太保市",code:"711927"},{name:"朴子市",code:"711928"},{name:"东石乡",code:"711929"},{name:"六脚乡",code:"711930"},{name:"新港乡",code:"711931"},{name:"民雄乡",code:"711932"},{name:"大林镇",code:"711933"},{name:"溪口乡",code:"711934"},{name:"义竹乡",code:"711935"},{name:"布袋镇",code:"711936"}],[{name:"斗南镇",code:"712121"},{name:"大埤乡",code:"712122"},{name:"虎尾镇",code:"712123"},{name:"土库镇",code:"712124"},{name:"褒忠乡",code:"712125"},{name:"东势乡",code:"712126"},{name:"台西乡",code:"712127"},{name:"仑背乡",code:"712128"},{name:"麦寮乡",code:"712129"},{name:"斗六市",code:"712130"},{name:"林内乡",code:"712131"},{name:"古坑乡",code:"712132"},{name:"莿桐乡",code:"712133"},{name:"西螺镇",code:"712134"},{name:"二仑乡",code:"712135"},{name:"北港镇",code:"712136"},{name:"水林乡",code:"712137"},{name:"口湖乡",code:"712138"},{name:"四湖乡",code:"712139"},{name:"元长乡",code:"712140"}],[{name:"屏东市",code:"712434"},{name:"三地门乡",code:"712435"},{name:"雾台乡",code:"712436"},{name:"玛家乡",code:"712437"},{name:"九如乡",code:"712438"},{name:"里港乡",code:"712439"},{name:"高树乡",code:"712440"},{name:"盐埔乡",code:"712441"},{name:"长治乡",code:"712442"},{name:"麟洛乡",code:"712443"},{name:"竹田乡",code:"712444"},{name:"内埔乡",code:"712445"},{name:"万丹乡",code:"712446"},{name:"潮州镇",code:"712447"},{name:"泰武乡",code:"712448"},{name:"来义乡",code:"712449"},{name:"万峦乡",code:"712450"},{name:"崁顶乡",code:"712451"},{name:"新埤乡",code:"712452"},{name:"南州乡",code:"712453"},{name:"林边乡",code:"712454"},{name:"东港镇",code:"712455"},{name:"琉球乡",code:"712456"},{name:"佳冬乡",code:"712457"},{name:"新园乡",code:"712458"},{name:"枋寮乡",code:"712459"},{name:"枋山乡",code:"712460"},{name:"春日乡",code:"712461"},{name:"狮子乡",code:"712462"},{name:"车城乡",code:"712463"},{name:"牡丹乡",code:"712464"},{name:"恒春镇",code:"712465"},{name:"满州乡",code:"712466"}],[{name:"台东市",code:"712517"},{name:"绿岛乡",code:"712518"},{name:"兰屿乡",code:"712519"},{name:"延平乡",code:"712520"},{name:"卑南乡",code:"712521"},{name:"鹿野乡",code:"712522"},{name:"关山镇",code:"712523"},{name:"海端乡",code:"712524"},{name:"池上乡",code:"712525"},{name:"东河乡",code:"712526"},{name:"成功镇",code:"712527"},{name:"长滨乡",code:"712528"},{name:"金峰乡",code:"712529"},{name:"大武乡",code:"712530"},{name:"达仁乡",code:"712531"},{name:"太麻里乡",code:"712532"}],[{name:"花莲市",code:"712615"},{name:"新城乡",code:"712616"},{name:"太鲁阁",code:"712617"},{name:"秀林乡",code:"712618"},{name:"吉安乡",code:"712619"},{name:"寿丰乡",code:"712620"},{name:"凤林镇",code:"712621"},{name:"光复乡",code:"712622"},{name:"丰滨乡",code:"712623"},{name:"瑞穗乡",code:"712624"},{name:"万荣乡",code:"712625"},{name:"玉里镇",code:"712626"},{name:"卓溪乡",code:"712627"},{name:"富里乡",code:"712628"}],[{name:"马公市",code:"712707"},{name:"西屿乡",code:"712708"},{name:"望安乡",code:"712709"},{name:"七美乡",code:"712710"},{name:"白沙乡",code:"712711"},{name:"湖西乡",code:"712712"}],[{name:"南竿乡",code:"712805"},{name:"北竿乡",code:"712806"},{name:"莒光乡",code:"712807"},{name:"东引乡",code:"712808"}]],[[{name:"中西区",code:"810101"},{name:"湾仔",code:"810102"},{name:"东区",code:"810103"},{name:"南区",code:"810104"}],[{name:"九龙城区",code:"810201"},{name:"油尖旺区",code:"810202"},{name:"深水埗区",code:"810203"},{name:"黄大仙区",code:"810204"},{name:"观塘区",code:"810205"}],[{name:"北区",code:"810301"},{name:"大埔区",code:"810302"},{name:"沙田区",code:"810303"},{name:"西贡区",code:"810304"},{name:"元朗区",code:"810305"},{name:"屯门区",code:"810306"},{name:"荃湾区",code:"810307"},{name:"葵青区",code:"810308"},{name:"离岛区",code:"810309"}]],[[{name:"澳门半岛",code:"820101"}],[{name:"离岛",code:"820201"}]],[[{name:"海外",code:"990101"}]]]];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map