(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-gridstack"] = factory(require("react"), require("react-dom"));
	else
		root["react-gridstack"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_154__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridStackItem = exports.GridStack = undefined;

	var _gridStack = __webpack_require__(47);

	var _gridStack2 = _interopRequireDefault(_gridStack);

	var _gridStackItem = __webpack_require__(46);

	var _gridStackItem2 = _interopRequireDefault(_gridStackItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.GridStack = _gridStack2.default;
	exports.GridStackItem = _gridStackItem2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(32);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(74),
	    getValue = __webpack_require__(98);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    getRawTag = __webpack_require__(95),
	    objectToString = __webpack_require__(123);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(109),
	    listCacheDelete = __webpack_require__(110),
	    listCacheGet = __webpack_require__(111),
	    listCacheHas = __webpack_require__(112),
	    listCacheSet = __webpack_require__(113);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(37);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(106);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(21);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(39),
	    isLength = __webpack_require__(19);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(2);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(114),
	    mapCacheDelete = __webpack_require__(115),
	    mapCacheGet = __webpack_require__(116),
	    mapCacheHas = __webpack_require__(117),
	    mapCacheSet = __webpack_require__(118);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(21);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(70),
	    isObjectLike = __webpack_require__(4);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObjectLike = __webpack_require__(4);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(59),
	    baseKeys = __webpack_require__(77),
	    isArrayLike = __webpack_require__(12);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(14),
	    setCacheAdd = __webpack_require__(126),
	    setCacheHas = __webpack_require__(127);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(7),
	    stackClear = __webpack_require__(131),
	    stackDelete = __webpack_require__(132),
	    stackGet = __webpack_require__(133),
	    stackHas = __webpack_require__(134),
	    stackSet = __webpack_require__(135);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(30),
	    toKey = __webpack_require__(11);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(71),
	    isObjectLike = __webpack_require__(4);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isKey = __webpack_require__(16),
	    stringToPath = __webpack_require__(137),
	    toString = __webpack_require__(149);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(23),
	    arraySome = __webpack_require__(60),
	    cacheHas = __webpack_require__(29);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
	    stubFalse = __webpack_require__(148);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObject = __webpack_require__(20);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(75),
	    baseUnary = __webpack_require__(28),
	    nodeUtil = __webpack_require__(122);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var ReactIs = __webpack_require__(43);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(152)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-is.production.min.js');
	} else {
	  module.exports = __webpack_require__(153);
	}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(41);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridStackItem = function (_React$Component) {
	  _inherits(GridStackItem, _React$Component);

	  function GridStackItem(props) {
	    _classCallCheck(this, GridStackItem);

	    return _possibleConstructorReturn(this, (GridStackItem.__proto__ || Object.getPrototypeOf(GridStackItem)).call(this, props));
	  }

	  _createClass(GridStackItem, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return GridStackItem;
	}(_react2.default.Component);

	exports.default = GridStackItem;


	GridStackItem.propTypes = {
	  autoPosition: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  height: _propTypes2.default.number,
	  id: _propTypes2.default.string.isRequired,
	  maxHeight: _propTypes2.default.number,
	  maxWidth: _propTypes2.default.number,
	  minHeight: _propTypes2.default.number,
	  minWidth: _propTypes2.default.number,
	  onShouldUpdate: _propTypes2.default.func,
	  width: _propTypes2.default.number,
	  x: _propTypes2.default.number,
	  y: _propTypes2.default.number
	};

	GridStackItem.defaultProps = {
	  onShouldUpdate: function onShouldUpdate() {
	    return false;
	  }
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(154);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(41);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	__webpack_require__(48);

	var _differenceWith = __webpack_require__(139);

	var _differenceWith2 = _interopRequireDefault(_differenceWith);

	var _map = __webpack_require__(144);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GridStack = function (_React$Component) {
	  _inherits(GridStack, _React$Component);

	  function GridStack(props) {
	    _classCallCheck(this, GridStack);

	    return _possibleConstructorReturn(this, (GridStack.__proto__ || Object.getPrototypeOf(GridStack)).call(this, props));
	  }

	  _createClass(GridStack, [{
	    key: 'clear',
	    value: function clear() {
	      this.gridstack.removeAll();
	    }
	  }, {
	    key: 'onAdded',
	    value: function onAdded(e, items) {
	      if (this.props.onAdded) {
	        this.props.onAdded(e, items);
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e, items) {
	      if (this.props.onChange) {
	        this.props.onChange(e, items);
	      }
	    }
	  }, {
	    key: 'onDisable',
	    value: function onDisable(e) {
	      if (this.props.onDisable) {
	        this.props.onDisable(e);
	      }
	    }
	  }, {
	    key: 'onDragStart',
	    value: function onDragStart(e, ui) {
	      if (this.props.onDragStart) {
	        this.props.onDragStart(e, ui);
	      }
	    }
	  }, {
	    key: 'onDragStop',
	    value: function onDragStop(e, ui) {
	      if (this.props.onDragStop) {
	        this.props.onDragStop(e, ui);
	      }
	    }
	  }, {
	    key: 'onEnable',
	    value: function onEnable(e) {
	      if (this.props.onEnable) {
	        this.props.onEnable(e);
	      }
	    }
	  }, {
	    key: 'onRemoved',
	    value: function onRemoved(e, items) {
	      if (this.props.onRemoved) {
	        this.props.onRemoved(e, items);
	      }
	    }
	  }, {
	    key: 'onResizeStart',
	    value: function onResizeStart(e, ui) {
	      if (this.props.onResizeStart) {
	        this.props.onResizeStart(e, ui);
	      }
	    }
	  }, {
	    key: 'onResizeStop',
	    value: function onResizeStop(e, ui) {
	      if (this.props.onResizeStop) {
	        this.props.onResizeStop(e, ui);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var options = {
	        acceptWidgets: this.props.acceptWidgets,
	        alwaysShowResizeHandle: this.props.alwaysShowResizeHandle,
	        animate: this.props.animate,
	        auto: this.props.auto,
	        cellHeight: this.props.cellHeight,
	        disableDrag: this.props.disableDrag,
	        disableResize: this.props.disableResize,
	        draggable: this.props.draggable,
	        float: this.props.float,
	        handle: this.props.handle,
	        handleClass: this.props.handleClass,
	        height: this.props.height,
	        itemClass: this.props.itemClass,
	        minWidth: this.props.minWidth,
	        placeholderClass: this.props.placeholderClass,
	        placeholderText: this.props.placeholderText,
	        removable: this.props.removable,
	        removeTimeout: this.props.removeTimeout,
	        resizable: this.props.resizable,
	        rtl: this.props.rtl,
	        staticGrid: this.props.staticGrid,
	        verticalMargin: this.props.verticalMargin,
	        width: this.props.width
	      };

	      this.gridstack = GridStack.init(options);
	      this.gridstack.on('resizestop', this.onResizeStop.bind(this));
	      this.gridstack.on('resizestart', this.onResizeStart.bind(this));
	      this.gridstack.on('removed', this.onRemoved.bind(this));
	      this.gridstack.on('dragstop', this.onDragStop.bind(this));
	      this.gridstack.on('dragstart', this.onDragStart.bind(this));
	      this.gridstack.on('disable', this.onDisable.bind(this));
	      this.gridstack.on('enable', this.onEnable.bind(this));
	      this.gridstack.on('change', this.onChange.bind(this));
	      this.gridstack.on('added', this.onAdded.bind(this));

	      this.props.children.forEach(function (child) {
	        _this2.gridstack.addWidget('<div class="grid-stack-item"><div id="' + child.props.id + '" class="grid-stack-item-content"></div></div>', _extends({}, child.props));
	        _reactDom2.default.render(child, document.getElementById(child.props.id));
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.gridstack.off('resizestop', this.onResizeStop.bind(this));
	      this.gridstack.off('resizestart', this.onResizeStart.bind(this));
	      this.gridstack.off('removed', this.onRemoved.bind(this));
	      this.gridstack.off('dragstop', this.onDragStop.bind(this));
	      this.gridstack.off('dragstart', this.onDragStart.bind(this));
	      this.gridstack.off('disable', this.onDisable.bind(this));
	      this.gridstack.off('enable', this.onEnable.bind(this));
	      this.gridstack.off('change', this.onChange.bind(this));
	      this.gridstack.off('added', this.onAdded.bind(this));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // If the list of widgets in props in empty, then simply clear the grid
	      if (this.props.children.length === 0) {
	        this.clear();
	        return;
	      }

	      var gridstack = this.gridstack;

	      // Find any widgets we need to remove
	      var toRemove = (0, _differenceWith2.default)(prevProps.children, this.props.children, function (a, b) {
	        return a.props.id === b.props.id;
	      });

	      // Find new widgets or those we need to re-render
	      var uniques = this.props.children.filter(function (newChild) {
	        for (var index in prevProps.children) {
	          var oldChild = prevProps.children[index];

	          if (oldChild.props.id === newChild.props.id && !newChild.props.onShouldUpdate(oldChild, newChild)) {
	            return false;
	          }
	        }
	        return true;
	      });

	      // Remove widgets that user said to remove
	      toRemove.forEach(function (child) {
	        var el = document.getElementById(child.props.id);
	        if (el !== null) {
	          _reactDom2.default.unmountComponentAtNode(el);
	          gridstack.removeWidget(el.parentElement);
	        }
	      });

	      // Add new widgets or re-render any widgets that changed
	      uniques.forEach(function (child) {
	        var el = document.getElementById(child.props.id);
	        if (el !== null) {
	          _reactDom2.default.unmountComponentAtNode(el);
	        } else {
	          gridstack.addWidget('<div class="grid-stack-item"><div id="' + child.props.id + '" class="grid-stack-item-content"></div></div>', _extends({}, child.props));
	        }
	        _reactDom2.default.render(child, document.getElementById(child.props.id));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { ref: 'gridstack', className: 'grid-stack' });
	    }
	  }, {
	    key: 'layout',
	    get: function get() {
	      var layout = document.querySelectorAll('.grid-stack .grid-stack-item:visible').map(function (el) {
	        var node = el.dataset;
	        return {
	          id: node.id,
	          maxHeight: node.maxHeight,
	          maxWidth: node.maxWidth,
	          minHeight: node.minHeight,
	          minWidth: node.minWidth,
	          height: node.height,
	          width: node.width,
	          x: node.x,
	          y: node.y
	        };
	      });
	      return layout;
	    }
	  }]);

	  return GridStack;
	}(_react2.default.Component);

	exports.default = GridStack;


	GridStack.propTypes = {
	  acceptWidgets: _propTypes2.default.bool,
	  alwaysShowResizeHandle: _propTypes2.default.bool,
	  animate: _propTypes2.default.bool,
	  auto: _propTypes2.default.bool,
	  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	  children: _propTypes2.default.node,
	  disableDrag: _propTypes2.default.bool,
	  disableResize: _propTypes2.default.bool,
	  draggable: _propTypes2.default.object,
	  float: _propTypes2.default.bool,
	  handle: _propTypes2.default.string,
	  handleClass: _propTypes2.default.string,
	  height: _propTypes2.default.number,
	  itemClass: _propTypes2.default.string,
	  minWidth: _propTypes2.default.number,
	  onAdded: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onDisable: _propTypes2.default.func,
	  onDragStart: _propTypes2.default.func,
	  onDragStop: _propTypes2.default.func,
	  onEnable: _propTypes2.default.func,
	  onRemoved: _propTypes2.default.func,
	  onResizeStart: _propTypes2.default.func,
	  onResizeStop: _propTypes2.default.func,
	  placeholderClass: _propTypes2.default.string,
	  placeholderText: _propTypes2.default.string,
	  removable: _propTypes2.default.bool,
	  removeTimeout: _propTypes2.default.number,
	  resizable: _propTypes2.default.bool,
	  rtl: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	  staticGrid: _propTypes2.default.bool,
	  verticalMargin: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	  width: _propTypes2.default.number
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/**
	 * gridstack.js 1.1.1
	 * https://gridstackjs.com/
	 * (c) 2014-2020 Alain Dumesny, Dylan Weiss, Pavel Reznikov
	 * gridstack.js may be freely distributed under the MIT license.
	 * @preserve
	*/
	(function(factory) {
	  /* [alain] we compile jquery with our code, so no need to 'load' externally
	  if (typeof define === 'function' && define.amd) {
	    define(['jquery', 'exports'], factory);
	  } else if (typeof exports !== 'undefined') {
	    var jQueryModule;

	    try { jQueryModule = require('jquery'); } catch (e) {}

	    factory(jQueryModule || window.jQuery, exports);
	  } else */{
	    factory(window.jQuery, window);
	  }
	})(function($, scope) {

	  // checks for obsolete method names
	  var obsolete = function(f, oldName, newName, rev) {
	    var wrapper = function() {
	      console.warn('gridstack.js: Function `' + oldName + '` is deprecated in ' + rev + ' and has been replaced ' +
	      'with `' + newName + '`. It will be **completely** removed in v1.0');
	      return f.apply(this, arguments);
	    };
	    wrapper.prototype = f.prototype;

	    return wrapper;
	  };

	  // checks for obsolete grid options (can be used for any fields, but msg is about options)
	  var obsoleteOpts = function(opts, oldName, newName, rev) {
	    if (opts[oldName] !== undefined) {
	      opts[newName] = opts[oldName];
	      console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + ' and has been replaced with `' +
	        newName + '`. It will be **completely** removed in v1.0');
	    }
	  };

	  // checks for obsolete grid options which are gone
	  var obsoleteOptsDel = function(opts, oldName, rev, info) {
	    if (opts[oldName] !== undefined) {
	      console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + info);
	    }
	  };

	  // checks for obsolete Jquery element attributes
	  var obsoleteAttr = function(el, oldName, newName, rev) {
	    var oldAttr = el.attr(oldName);
	    if (oldAttr !== undefined) {
	      el.attr(newName, oldAttr);
	      console.warn('gridstack.js: attribute `' + oldName + '`=' + oldAttr + ' is deprecated on this object in ' + rev + ' and has been replaced with `' +
	        newName + '`. It will be **completely** removed in v1.0');
	    }
	  };

	  var Utils = {

	    isIntercepted: function(a, b) {
	      return !(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);
	    },

	    sort: function(nodes, dir, column) {
	      if (!column) {
	        var widths = nodes.map(function(node) { return node.x + node.width; });
	        column = Math.max.apply(Math, widths);
	      }

	      if (dir === -1)
	        return Utils.sortBy(nodes, function(n) { return -(n.x + n.y * column); });
	      else
	        return Utils.sortBy(nodes, function(n) { return (n.x + n.y * column); });
	    },

	    createStylesheet: function(id, parent) {
	      var style = document.createElement('style');
	      style.setAttribute('type', 'text/css');
	      style.setAttribute('data-gs-style-id', id);
	      if (style.styleSheet) {
	        style.styleSheet.cssText = '';
	      } else {
	        style.appendChild(document.createTextNode(''));
	      }
	      if (!parent) { parent = document.getElementsByTagName('head')[0]; } // default to head
	      parent.insertBefore(style, parent.firstChild);
	      return style.sheet;
	    },

	    removeStylesheet: function(id) {
	      $('STYLE[data-gs-style-id=' + id + ']').remove();
	    },

	    insertCSSRule: function(sheet, selector, rules, index) {
	      if (typeof sheet.insertRule === 'function') {
	        sheet.insertRule(selector + '{' + rules + '}', index);
	      } else if (typeof sheet.addRule === 'function') {
	        sheet.addRule(selector, rules, index);
	      }
	    },

	    toBool: function(v) {
	      if (typeof v === 'boolean') {
	        return v;
	      }
	      if (typeof v === 'string') {
	        v = v.toLowerCase();
	        return !(v === '' || v === 'no' || v === 'false' || v === '0');
	      }
	      return Boolean(v);
	    },

	    _collisionNodeCheck: function(n) {
	      return n !== this.node && Utils.isIntercepted(n, this.nn);
	    },

	    _didCollide: function(bn) {
	      return Utils.isIntercepted({x: this.n.x, y: this.newY, width: this.n.width, height: this.n.height}, bn);
	    },

	    _isAddNodeIntercepted: function(n) {
	      return Utils.isIntercepted({x: this.x, y: this.y, width: this.node.width, height: this.node.height}, n);
	    },

	    parseHeight: function(val) {
	      var height = val;
	      var heightUnit = 'px';
	      if (height && typeof height === 'string') {
	        var match = height.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%)?$/);
	        if (!match) {
	          throw new Error('Invalid height');
	        }
	        heightUnit = match[2] || 'px';
	        height = parseFloat(match[1]);
	      }
	      return {height: height, unit: heightUnit};
	    },

	    without:  function(array, item) {
	      var index = array.indexOf(item);

	      if (index !== -1) {
	        array = array.slice(0);
	        array.splice(index, 1);
	      }

	      return array;
	    },

	    sortBy: function(array, getter) {
	      return array.slice(0).sort(function(left, right) {
	        var valueLeft = getter(left);
	        var valueRight = getter(right);

	        if (valueRight === valueLeft) {
	          return 0;
	        }

	        return valueLeft > valueRight ? 1 : -1;
	      });
	    },

	    defaults: function(target) {
	      var sources = Array.prototype.slice.call(arguments, 1);

	      sources.forEach(function(source) {
	        for (var prop in source) {
	          if (source.hasOwnProperty(prop) && (!target.hasOwnProperty(prop) || target[prop] === undefined)) {
	            target[prop] = source[prop];
	          }
	        }
	      });

	      return target;
	    },

	    clone: function(target) {
	      return $.extend({}, target);
	    },

	    throttle: function(callback, delay) {
	      var isWaiting = false;

	      return function() {
	        if (!isWaiting) {
	          callback.apply(this, arguments);
	          isWaiting = true;
	          setTimeout(function() { isWaiting = false; }, delay);
	        }
	      };
	    },

	    removePositioningStyles: function(el) {
	      var style = el[0].style;
	      if (style.position) {
	        style.removeProperty('position');
	      }
	      if (style.left) {
	        style.removeProperty('left');
	      }
	      if (style.top) {
	        style.removeProperty('top');
	      }
	      if (style.width) {
	        style.removeProperty('width');
	      }
	      if (style.height) {
	        style.removeProperty('height');
	      }
	    },
	    getScrollParent: function(el) {
	      var returnEl;
	      if (el === null) {
	        returnEl = null;
	      } else if (el.scrollHeight > el.clientHeight) {
	        returnEl = el;
	      } else {
	        returnEl = Utils.getScrollParent(el.parentNode);
	      }
	      return returnEl;
	    },
	    updateScrollPosition: function(el, ui, distance) {
	      // is widget in view?
	      var rect = el.getBoundingClientRect();
	      var innerHeightOrClientHeight = (window.innerHeight || document.documentElement.clientHeight);
	      if (rect.top < 0 ||
	        rect.bottom > innerHeightOrClientHeight
	      ) {
	        // set scrollTop of first parent that scrolls
	        // if parent is larger than el, set as low as possible
	        // to get entire widget on screen
	        var offsetDiffDown = rect.bottom - innerHeightOrClientHeight;
	        var offsetDiffUp = rect.top;
	        var scrollEl = Utils.getScrollParent(el);
	        if (scrollEl !== null) {
	          var prevScroll = scrollEl.scrollTop;
	          if (rect.top < 0 && distance < 0) {
	            // moving up
	            if (el.offsetHeight > innerHeightOrClientHeight) {
	              scrollEl.scrollTop += distance;
	            } else {
	              scrollEl.scrollTop += Math.abs(offsetDiffUp) > Math.abs(distance) ? distance : offsetDiffUp;
	            }
	          } else if (distance > 0) {
	            // moving down
	            if (el.offsetHeight > innerHeightOrClientHeight) {
	              scrollEl.scrollTop += distance;
	            } else {
	              scrollEl.scrollTop += offsetDiffDown > distance ? distance : offsetDiffDown;
	            }
	          }
	          // move widget y by amount scrolled
	          ui.position.top += scrollEl.scrollTop - prevScroll;
	        }
	      }
	    }
	  };

	  /**
	  * @class GridStackDragDropPlugin
	  * Base class for drag'n'drop plugin.
	  */
	  function GridStackDragDropPlugin(grid) {
	    this.grid = grid;
	  }

	  GridStackDragDropPlugin.registeredPlugins = [];

	  GridStackDragDropPlugin.registerPlugin = function(pluginClass) {
	    GridStackDragDropPlugin.registeredPlugins.push(pluginClass);
	  };

	  GridStackDragDropPlugin.prototype.resizable = function(el, opts) {
	    return this;
	  };

	  GridStackDragDropPlugin.prototype.draggable = function(el, opts) {
	    return this;
	  };

	  GridStackDragDropPlugin.prototype.droppable = function(el, opts) {
	    return this;
	  };

	  GridStackDragDropPlugin.prototype.isDroppable = function(el) {
	    return false;
	  };

	  GridStackDragDropPlugin.prototype.on = function(el, eventName, callback) {
	    return this;
	  };


	  var idSeq = 0;

	  var GridStackEngine = function(column, onchange, float, maxRow, items) {
	    this.column = column || 12;
	    this.float = float || false;
	    this.maxRow = maxRow || 0;

	    this.nodes = items || [];
	    this.onchange = onchange || function() {};

	    this._addedNodes = [];
	    this._removedNodes = [];
	    this._batchMode = false;
	  };

	  GridStackEngine.prototype.batchUpdate = function() {
	    if (this._batchMode) return;
	    this._batchMode = true;
	    this._prevFloat = this.float;
	    this.float = true; // let things go anywhere for now... commit() will restore and possibly reposition
	  };

	  GridStackEngine.prototype.commit = function() {
	    if (!this._batchMode) return;
	    this._batchMode = false;
	    this.float = this._prevFloat;
	    delete this._prevFloat;
	    this._packNodes();
	    this._notify();
	  };

	  // For Meteor support: https://github.com/gridstack/gridstack.js/pull/272
	  GridStackEngine.prototype.getNodeDataByDOMEl = function(el) {
	    return this.nodes.find(function(node) { return el === node.el });
	  };

	  GridStackEngine.prototype._fixCollisions = function(node) {
	    var self = this;
	    this._sortNodes(-1);

	    var nn = node;
	    var hasLocked = Boolean(this.nodes.find(function(n) { return n.locked; }));
	    if (!this.float && !hasLocked) {
	      nn = {x: 0, y: node.y, width: this.column, height: node.height};
	    }
	    while (true) {
	      var collisionNode = this.nodes.find(Utils._collisionNodeCheck, {node: node, nn: nn});
	      if (!collisionNode) { return; }
	      var moved;
	      if (collisionNode.locked) {
	        // if colliding with a locked item, move ourself instead
	        moved = this.moveNode(node, node.x, collisionNode.y + collisionNode.height,
	          node.width, node.height, true);
	      } else {
	        moved = this.moveNode(collisionNode, collisionNode.x, node.y + node.height,
	          collisionNode.width, collisionNode.height, true);
	      }
	      if (!moved) { return; } // break inf loop if we couldn't move after all (ex: maxRow, fixed)
	    }
	  };

	  GridStackEngine.prototype.isAreaEmpty = function(x, y, width, height) {
	    var nn = {x: x || 0, y: y || 0, width: width || 1, height: height || 1};
	    var collisionNode = this.nodes.find(function(n) {
	      return Utils.isIntercepted(n, nn);
	    });
	    return !collisionNode;
	  };

	  GridStackEngine.prototype._sortNodes = function(dir) {
	    this.nodes = Utils.sort(this.nodes, dir, this.column);
	  };

	  GridStackEngine.prototype._packNodes = function() {
	    this._sortNodes();

	    if (this.float) {
	      this.nodes.forEach(function(n, i) {
	        if (n._updating || n._packY === undefined || n.y === n._packY) {
	          return;
	        }

	        var newY = n.y;
	        while (newY >= n._packY) {
	          var collisionNode = this.nodes
	            .slice(0, i)
	            .find(Utils._didCollide, {n: n, newY: newY});

	          if (!collisionNode) {
	            n._dirty = true;
	            n.y = newY;
	          }
	          --newY;
	        }
	      }, this);
	    } else {
	      this.nodes.forEach(function(n, i) {
	        if (n.locked) { return; }
	        while (n.y > 0) {
	          var newY = n.y - 1;
	          var canBeMoved = i === 0;

	          if (i > 0) {
	            var collisionNode = this.nodes
	              .slice(0, i)
	              .find(Utils._didCollide, {n: n, newY: newY});
	            canBeMoved = collisionNode === undefined;
	          }

	          if (!canBeMoved) { break; }
	          // Note: must be dirty (from last position) for GridStack::OnChange CB to update positions
	          // and move items back. The user 'change' CB should detect changes from the original
	          // starting position instead.
	          n._dirty = (n.y !== newY);
	          n.y = newY;
	        }
	      }, this);
	    }
	  };

	  GridStackEngine.prototype._prepareNode = function(node, resizing) {
	    node = node || {};
	    // if we're missing position, have the grid position us automatically (before we set them to 0,0)
	    if (node.x === undefined || node.y === undefined || node.x === null || node.y === null) {
	      node.autoPosition = true;
	    }

	    // assign defaults for missing required fields
	    var defaults = {width: 1, height: 1, x: 0, y: 0};
	    node = Utils.defaults(node, defaults);

	    // convert any strings over
	    node.x = parseInt(node.x);
	    node.y = parseInt(node.y);
	    node.width = parseInt(node.width);
	    node.height = parseInt(node.height);
	    node.autoPosition = node.autoPosition || false;
	    node.noResize = node.noResize || false;
	    node.noMove = node.noMove || false;

	    // check for NaN (in case messed up strings were passed. can't do parseInt() || defaults.x above as 0 is valid #)
	    if (Number.isNaN(node.x))      { node.x = defaults.x; node.autoPosition = true; }
	    if (Number.isNaN(node.y))      { node.y = defaults.y; node.autoPosition = true; }
	    if (Number.isNaN(node.width))  { node.width = defaults.width; }
	    if (Number.isNaN(node.height)) { node.height = defaults.height; }

	    if (node.maxWidth !== undefined) { node.width = Math.min(node.width, node.maxWidth); }
	    if (node.maxHeight !== undefined) { node.height = Math.min(node.height, node.maxHeight); }
	    if (node.minWidth !== undefined) { node.width = Math.max(node.width, node.minWidth); }
	    if (node.minHeight !== undefined) { node.height = Math.max(node.height, node.minHeight); }

	    if (node.width > this.column) {
	      node.width = this.column;
	    } else if (node.width < 1) {
	      node.width = 1;
	    }
	    if (this.maxRow && node.height > this.maxRow) {
	      node.height = this.maxRow;
	    } else if (node.height < 1) {
	      node.height = 1;
	    }

	    if (node.x < 0) {
	      node.x = 0;
	    }
	    if (node.y < 0) {
	      node.y = 0;
	    }

	    if (node.x + node.width > this.column) {
	      if (resizing) {
	        node.width = this.column - node.x;
	      } else {
	        node.x = this.column - node.width;
	      }
	    }
	    if (this.maxRow && node.y + node.height > this.maxRow) {
	      if (resizing) {
	        node.height = this.maxRow - node.y;
	      } else {
	        node.y = this.maxRow - node.height;
	      }
	    }

	    return node;
	  };

	  GridStackEngine.prototype._notify = function() {
	    if (this._batchMode) { return; }
	    var args = Array.prototype.slice.call(arguments, 0);
	    args[0] = (args[0] === undefined ? [] : (Array.isArray(args[0]) ? args[0] : [args[0]]) );
	    args[1] = (args[1] === undefined ? true : args[1]);
	    var dirtyNodes = args[0].concat(this.getDirtyNodes());
	    this.onchange(dirtyNodes, args[1]);
	  };

	  GridStackEngine.prototype.cleanNodes = function() {
	    if (this._batchMode) { return; }
	    this.nodes.forEach(function(n) { delete n._dirty; });
	  };

	  GridStackEngine.prototype.getDirtyNodes = function(verify) {
	    // compare original X,Y,W,H (or entire node?) instead as _dirty can be a temporary state
	    if (verify) {
	      var dirtNodes = [];
	      this.nodes.forEach(function (n) {
	        if (n._dirty) {
	          if (n.y === n._origY && n.x === n._origX && n.width === n._origW && n.height === n._origH) {
	            delete n._dirty;
	          } else {
	            dirtNodes.push(n);
	          }
	        }
	      });
	      return dirtNodes;
	    }

	    return this.nodes.filter(function(n) { return n._dirty; });
	  };

	  GridStackEngine.prototype.addNode = function(node, triggerAddEvent) {
	    node = this._prepareNode(node);

	    node._id = node._id || ++idSeq;

	    if (node.autoPosition) {
	      this._sortNodes();

	      for (var i = 0;; ++i) {
	        var x = i % this.column;
	        var y = Math.floor(i / this.column);
	        if (x + node.width > this.column) {
	          continue;
	        }
	        if (!this.nodes.find(Utils._isAddNodeIntercepted, {x: x, y: y, node: node})) {
	          node.x = x;
	          node.y = y;
	          delete node.autoPosition; // found our slot
	          break;
	        }
	      }
	    }

	    this.nodes.push(node);
	    if (triggerAddEvent) {
	      this._addedNodes.push(node);
	    }

	    this._fixCollisions(node);
	    this._packNodes();
	    this._notify();
	    return node;
	  };

	  GridStackEngine.prototype.removeNode = function(node, detachNode) {
	    detachNode = (detachNode === undefined ? true : detachNode);
	    this._removedNodes.push(node);
	    node._id = null; // hint that node is being removed
	    this.nodes = Utils.without(this.nodes, node);
	    this._packNodes();
	    this._notify(node, detachNode);
	  };

	  GridStackEngine.prototype.removeAll = function(detachNode) {
	    delete this._layouts;
	    if (this.nodes.length === 0) { return; }
	    detachNode = (detachNode === undefined ? true : detachNode);
	    this.nodes.forEach(function(n) { n._id = null; }); // hint that node is being removed
	    this._removedNodes = this.nodes;
	    this.nodes = [];
	    this._notify(this._removedNodes, detachNode);
	  };

	  GridStackEngine.prototype.canMoveNode = function(node, x, y, width, height) {
	    if (!this.isNodeChangedPosition(node, x, y, width, height)) {
	      return false;
	    }
	    var hasLocked = Boolean(this.nodes.find(function(n) { return n.locked; }));

	    if (!this.maxRow && !hasLocked) {
	      return true;
	    }

	    var clonedNode;
	    var clone = new GridStackEngine(
	      this.column,
	      null,
	      this.float,
	      0,
	      this.nodes.map(function(n) {
	        if (n === node) {
	          clonedNode = $.extend({}, n);
	          return clonedNode;
	        }
	        return $.extend({}, n);
	      }));

	    if (!clonedNode) {  return true;}

	    clone.moveNode(clonedNode, x, y, width, height);

	    var res = true;

	    if (hasLocked) {
	      res &= !Boolean(clone.nodes.find(function(n) {
	        return n !== clonedNode && Boolean(n.locked) && Boolean(n._dirty);
	      }));
	    }
	    if (this.maxRow) {
	      res &= clone.getRow() <= this.maxRow;
	    }

	    return res;
	  };

	  GridStackEngine.prototype.canBePlacedWithRespectToHeight = function(node) {
	    if (!this.maxRow) {
	      return true;
	    }

	    var clone = new GridStackEngine(
	      this.column,
	      null,
	      this.float,
	      0,
	      this.nodes.map(function(n) { return $.extend({}, n); }));
	    clone.addNode(node);
	    return clone.getRow() <= this.maxRow;
	  };

	  GridStackEngine.prototype.isNodeChangedPosition = function(node, x, y, width, height) {
	    if (typeof x !== 'number') { x = node.x; }
	    if (typeof y !== 'number') { y = node.y; }
	    if (typeof width !== 'number') { width = node.width; }
	    if (typeof height !== 'number') { height = node.height; }

	    if (node.maxWidth !== undefined) { width = Math.min(width, node.maxWidth); }
	    if (node.maxHeight !== undefined) { height = Math.min(height, node.maxHeight); }
	    if (node.minWidth !== undefined) { width = Math.max(width, node.minWidth); }
	    if (node.minHeight !== undefined) { height = Math.max(height, node.minHeight); }

	    if (node.x === x && node.y === y && node.width === width && node.height === height) {
	      return false;
	    }
	    return true;
	  };

	  GridStackEngine.prototype.moveNode = function(node, x, y, width, height, noPack) {
	    if (node.locked) { return null; }
	    if (typeof x !== 'number') { x = node.x; }
	    if (typeof y !== 'number') { y = node.y; }
	    if (typeof width !== 'number') { width = node.width; }
	    if (typeof height !== 'number') { height = node.height; }

	    // constrain the passed in values and check if we're still changing our node
	    var resizing = (node.width !== width || node.height !== height);
	    var nn = { x: x, y: y, width: width, height: height,
	      maxWidth: node.maxWidth, maxHeight: node.maxHeight, minWidth: node.minWidth, minHeight: node.minHeight};
	    nn = this._prepareNode(nn, resizing);
	    if (node.x === nn.x && node.y === nn.y && node.width === nn.width && node.height === nn.height) {
	      return null;
	    }

	    node._dirty = true;

	    node.x = node.lastTriedX = nn.x;
	    node.y = node.lastTriedY = nn.y;
	    node.width = node.lastTriedWidth = nn.width;
	    node.height = node.lastTriedHeight = nn.height;

	    this._fixCollisions(node);
	    if (!noPack) {
	      this._packNodes();
	      this._notify();
	    }
	    return node;
	  };

	  GridStackEngine.prototype.getRow = function() {
	    return this.nodes.reduce(function(memo, n) { return Math.max(memo, n.y + n.height); }, 0);
	  };

	  GridStackEngine.prototype.beginUpdate = function(node) {
	    if (node._updating) return;
	    node._updating = true;
	    this.nodes.forEach(function(n) { n._packY = n.y; });
	  };

	  GridStackEngine.prototype.endUpdate = function() {
	    var n = this.nodes.find(function(n) { return n._updating; });
	    if (n) {
	      n._updating = false;
	      this.nodes.forEach(function(n) { delete n._packY; });
	    }
	  };

	  /**
	   * Construct a grid item from the given element and options
	   * @param {GridStackElement} el
	   * @param {GridstackOptions} opts
	   */
	  var GridStack = function(el, opts) {
	    var self = this;
	    var oneColumnMode, _prevColumn, isAutoCellHeight;

	    opts = opts || {};

	    this.$el = $(el); // TODO: legacy code
	    this.el = this.$el.get(0); // exposed HTML element to the user

	    obsoleteOpts(opts, 'width', 'column', 'v0.5.3');
	    obsoleteOpts(opts, 'height', 'maxRow', 'v0.5.3');
	    obsoleteOptsDel(opts, 'oneColumnModeClass', 'v0.6.3', '. Use class `.grid-stack-1` instead');

	    // container attributes
	    obsoleteAttr(this.$el, 'data-gs-width', 'data-gs-column', 'v0.5.3');
	    obsoleteAttr(this.$el, 'data-gs-height', 'data-gs-max-row', 'v0.5.3');
	    obsoleteAttr(this.$el, 'data-gs-current-height', 'data-gs-current-row', 'v1.0.0');

	    opts.itemClass = opts.itemClass || 'grid-stack-item';
	    var isNested = this.$el.closest('.' + opts.itemClass).length > 0;

	    // if row property exists, replace minRow and maxRow instead
	    if (opts.row) {
	      opts.minRow = opts.maxRow = opts.row;
	      delete opts.row;
	    }
	    var rowAttr = parseInt(this.$el.attr('data-gs-row'));

	    // elements attributes override any passed options (like CSS style) - merge the two together
	    this.opts = Utils.defaults(opts, {
	      column: parseInt(this.$el.attr('data-gs-column')) || 12,
	      minRow: rowAttr ? rowAttr : parseInt(this.$el.attr('data-gs-min-row')) || 0,
	      maxRow: rowAttr ? rowAttr : parseInt(this.$el.attr('data-gs-max-row')) || 0,
	      itemClass: 'grid-stack-item',
	      placeholderClass: 'grid-stack-placeholder',
	      placeholderText: '',
	      handle: '.grid-stack-item-content',
	      handleClass: null,
	      cellHeight: 60,
	      verticalMargin: 20,
	      auto: true,
	      minWidth: 768,
	      float: false,
	      staticGrid: false,
	      _class: 'grid-stack-instance-' + (Math.random() * 10000).toFixed(0),
	      animate: Boolean(this.$el.attr('data-gs-animate')) || false,
	      alwaysShowResizeHandle: opts.alwaysShowResizeHandle || false,
	      resizable: Utils.defaults(opts.resizable || {}, {
	        autoHide: !(opts.alwaysShowResizeHandle || false),
	        handles: 'se'
	      }),
	      draggable: Utils.defaults(opts.draggable || {}, {
	        handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) ||
	          '.grid-stack-item-content',
	        scroll: false,
	        appendTo: 'body'
	      }),
	      disableDrag: opts.disableDrag || false,
	      disableResize: opts.disableResize || false,
	      rtl: 'auto',
	      removable: false,
	      removableOptions: Utils.defaults(opts.removableOptions || {}, {
	        accept: '.' + opts.itemClass
	      }),
	      removeTimeout: 2000,
	      verticalMarginUnit: 'px',
	      cellHeightUnit: 'px',
	      disableOneColumnMode: opts.disableOneColumnMode || false,
	      oneColumnModeDomSort: opts.oneColumnModeDomSort,
	      ddPlugin: null
	    });

	    if (this.opts.ddPlugin === false) {
	      this.opts.ddPlugin = GridStackDragDropPlugin;
	    } else if (this.opts.ddPlugin === null) {
	      this.opts.ddPlugin = GridStackDragDropPlugin.registeredPlugins[0] || GridStackDragDropPlugin;
	    }

	    this.dd = new this.opts.ddPlugin(this);

	    if (this.opts.rtl === 'auto') {
	      this.opts.rtl = this.$el.css('direction') === 'rtl';
	    }

	    if (this.opts.rtl) {
	      this.$el.addClass('grid-stack-rtl');
	    }

	    this.opts.isNested = isNested;

	    isAutoCellHeight = (this.opts.cellHeight === 'auto');
	    if (isAutoCellHeight) {
	      // make the cell square initially
	      self.cellHeight(self.cellWidth(), true);
	    } else {
	      this.cellHeight(this.opts.cellHeight, true);
	    }
	    this.verticalMargin(this.opts.verticalMargin, true);

	    this.$el.addClass(this.opts._class);

	    this._setStaticClass();

	    if (isNested) {
	      this.$el.addClass('grid-stack-nested');
	    }

	    this._initStyles();

	    this.engine = new GridStackEngine(this.opts.column, function(nodes, detachNode) {
	      detachNode = (detachNode === undefined ? true : detachNode);
	      var maxHeight = 0;
	      this.nodes.forEach(function(n) {
	        maxHeight = Math.max(maxHeight, n.y + n.height);
	      });
	      nodes.forEach(function(n) {
	        if (detachNode && n._id === null) {
	          if (n.el) {
	            $(n.el).remove();
	          }
	        } else {
	          $(n.el)
	            .attr('data-gs-x', n.x)
	            .attr('data-gs-y', n.y)
	            .attr('data-gs-width', n.width)
	            .attr('data-gs-height', n.height);
	        }
	      });
	      self._updateStyles(maxHeight + 10);
	    }, this.opts.float, this.opts.maxRow);

	    if (this.opts.auto) {
	      var elements = [];
	      var _this = this;
	      this.$el.children('.' + this.opts.itemClass + ':not(.' + this.opts.placeholderClass + ')')
	        .each(function(index, el) {
	          el = $(el);
	          var x = parseInt(el.attr('data-gs-x'));
	          var y = parseInt(el.attr('data-gs-y'));
	          elements.push({
	            el: el.get(0),
	            // if x,y are missing (autoPosition) add them to end of list - but keep their respective DOM order
	            i: (Number.isNaN(x) ? 1000 : x) + (Number.isNaN(y) ? 1000 : y) * _this.opts.column
	          });
	        });
	      Utils.sortBy(elements, function(x) { return x.i; }).forEach(function(item) {
	        this._prepareElement(item.el);
	      }, this);
	    }
	    this.engine._saveInitial(); // initial start of items

	    this.setAnimation(this.opts.animate);

	    this.placeholder = $(
	      '<div class="' + this.opts.placeholderClass + ' ' + this.opts.itemClass + '">' +
	      '<div class="placeholder-content">' + this.opts.placeholderText + '</div></div>').hide();

	    this._updateContainerHeight();

	    this._updateHeightsOnResize = Utils.throttle(function() {
	      self.cellHeight(self.cellWidth(), false);
	    }, 100);

	    /**
	     * called when we are being resized - check if the one Column Mode needs to be turned on/off
	     * and remember the prev columns we used.
	     */
	    this.onResizeHandler = function() {
	      if (isAutoCellHeight) {
	        self._updateHeightsOnResize();
	      }

	      if (self.opts.staticGrid) { return; }

	      if (!self.opts.disableOneColumnMode && (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= self.opts.minWidth) {
	        if (self.oneColumnMode) {  return; }
	        self.oneColumnMode = true;
	        self.column(1);
	      } else {
	        if (!self.oneColumnMode) { return; }
	        self.oneColumnMode = false;
	        self.column(self._prevColumn);
	      }
	    };

	    $(window).resize(this.onResizeHandler);
	    this.onResizeHandler();

	    if (!self.opts.staticGrid && typeof self.opts.removable === 'string') {
	      var trashZone = $(self.opts.removable);
	      if (!this.dd.isDroppable(trashZone)) {
	        this.dd.droppable(trashZone, self.opts.removableOptions);
	      }
	      this.dd
	        .on(trashZone, 'dropover', function(event, ui) {
	          var el = $(ui.draggable);
	          var node = el.data('_gridstack_node');
	          if (!node || node._grid !== self) {
	            return;
	          }
	          el.data('inTrashZone', true);
	          self._setupRemovingTimeout(el);
	        })
	        .on(trashZone, 'dropout', function(event, ui) {
	          var el = $(ui.draggable);
	          var node = el.data('_gridstack_node');
	          if (!node || node._grid !== self) {
	            return;
	          }
	          el.data('inTrashZone', false);
	          self._clearRemovingTimeout(el);
	        });
	    }

	    if (!self.opts.staticGrid && self.opts.acceptWidgets) {
	      var draggingElement = null;

	      var onDrag = function(event, ui) {
	        var el = draggingElement;
	        var node = el.data('_gridstack_node');
	        var pos = self.getCellFromPixel({left: event.pageX, top: event.pageY}, true);
	        var x = Math.max(0, pos.x);
	        var y = Math.max(0, pos.y);
	        if (!node._added) {
	          node._added = true;

	          node.el = el.get(0);
	          node.autoPosition = true;
	          node.x = x;
	          node.y = y;
	          self.engine.cleanNodes();
	          self.engine.beginUpdate(node);
	          self.engine.addNode(node);

	          self.$el.append(self.placeholder);
	          self.placeholder
	            .attr('data-gs-x', node.x)
	            .attr('data-gs-y', node.y)
	            .attr('data-gs-width', node.width)
	            .attr('data-gs-height', node.height)
	            .show();
	          node.el = self.placeholder.get(0);
	          node._beforeDragX = node.x;
	          node._beforeDragY = node.y;

	          self._updateContainerHeight();
	        }
	        if (!self.engine.canMoveNode(node, x, y)) {
	          return;
	        }
	        self.engine.moveNode(node, x, y);
	        self._updateContainerHeight();
	      };

	      this.dd
	        .droppable(self.$el, {
	          accept: function(el) {
	            el = $(el);
	            var node = el.data('_gridstack_node');
	            if (node && node._grid === self) {
	              return false;
	            }
	            return el.is(self.opts.acceptWidgets === true ? '.grid-stack-item' : self.opts.acceptWidgets);
	          }
	        })
	        .on(self.$el, 'dropover', function(event, ui) {
	          var el = $(ui.draggable);
	          var width, height;

	          // see if we already have a node with widget/height and check for attributes
	          var origNode = el.data('_gridstack_node');
	          if (!origNode || !origNode.width || !origNode.height) {
	            var w = parseInt(el.attr('data-gs-width'));
	            if (w > 0) { origNode = origNode || {}; origNode.width = w; }
	            var h = parseInt(el.attr('data-gs-height'));
	            if (h > 0) { origNode = origNode || {}; origNode.height = h; }
	          }

	          // if not calculate the grid size based on element outer size
	          // height: Each row is cellHeight + verticalMargin, until last one which has no margin below
	          var cellWidth = self.cellWidth();
	          var cellHeight = self.cellHeight();
	          var verticalMargin = self.opts.verticalMargin;
	          width = origNode && origNode.width ? origNode.width : Math.ceil(el.outerWidth() / cellWidth);
	          height = origNode && origNode.height ? origNode.height : Math.round((el.outerHeight() + verticalMargin) / (cellHeight + verticalMargin));

	          draggingElement = el;

	          var node = self.engine._prepareNode({width: width, height: height, _added: false, _temporary: true});
	          node.isOutOfGrid = true;
	          el.data('_gridstack_node', node);
	          el.data('_gridstack_node_orig', origNode);

	          el.on('drag', onDrag);
	          return false; // prevent parent from receiving msg (which may be grid as well)
	        })
	        .on(self.$el, 'dropout', function(event, ui) {
	          // jquery-ui bug. Must verify widget is being dropped out
	          // check node variable that gets set when widget is out of grid
	          var el = $(ui.draggable);
	          if (!el.data('_gridstack_node')) {
	            return;
	          }
	          var node = el.data('_gridstack_node');
	          if (!node.isOutOfGrid) {
	            return;
	          }
	          el.unbind('drag', onDrag);
	          node.el = null;
	          self.engine.removeNode(node);
	          self.placeholder.detach();
	          self._updateContainerHeight();
	          el.data('_gridstack_node', el.data('_gridstack_node_orig'));
	          return false; // prevent parent from receiving msg (which may be grid as well)
	        })
	        .on(self.$el, 'drop', function(event, ui) {
	          self.placeholder.detach();

	          var node = $(ui.draggable).data('_gridstack_node');
	          node.isOutOfGrid = false;
	          node._grid = self;
	          var el = $(ui.draggable).clone(false);
	          el.data('_gridstack_node', node);
	          var originalNode = $(ui.draggable).data('_gridstack_node_orig');
	          if (originalNode !== undefined && originalNode._grid !== undefined) {
	            originalNode._grid._triggerRemoveEvent();
	          }
	          $(ui.helper).remove();
	          node.el = el.get(0);
	          self.placeholder.hide();
	          Utils.removePositioningStyles(el);
	          el.find('div.ui-resizable-handle').remove();

	          el
	            .attr('data-gs-x', node.x)
	            .attr('data-gs-y', node.y)
	            .attr('data-gs-width', node.width)
	            .attr('data-gs-height', node.height)
	            .addClass(self.opts.itemClass)
	            .enableSelection()
	            .removeData('draggable')
	            .removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled')
	            .unbind('drag', onDrag);
	          self.$el.append(el);
	          self._prepareElementsByNode(el, node);
	          self._updateContainerHeight();
	          self.engine._addedNodes.push(node);
	          self._triggerAddEvent();
	          self._triggerChangeEvent();

	          self.engine.endUpdate();
	          $(ui.draggable).unbind('drag', onDrag);
	          $(ui.draggable).removeData('_gridstack_node');
	          $(ui.draggable).removeData('_gridstack_node_orig');
	          self.$el.trigger('dropped', [originalNode, node]);
	          return false; // prevent parent from receiving msg (which may be grid as well)
	        });
	    }
	  };

	  GridStack.prototype._triggerChangeEvent = function(/*forceTrigger*/) {
	    if (this.engine._batchMode) { return; }
	    var elements = this.engine.getDirtyNodes(true); // verify they really changed
	    if (elements && elements.length) {
	      this.engine._layoutsNodesChange(elements);
	      this._triggerEvent('change', elements);
	    }
	    this.engine._saveInitial(); // we called, now reset initial values & dirty flags
	  };

	  GridStack.prototype._triggerAddEvent = function() {
	    if (this.engine._batchMode) { return; }
	    if (this.engine._addedNodes && this.engine._addedNodes.length > 0) {
	      this.engine._layoutsNodesChange(this.engine._addedNodes);
	      // prevent added nodes from also triggering 'change' event (which is called next)
	      this.engine._addedNodes.forEach(function (n) { delete n._dirty; });
	      this._triggerEvent('added', this.engine._addedNodes);
	      this.engine._addedNodes = [];
	    }
	  };

	  GridStack.prototype._triggerRemoveEvent = function() {
	    if (this.engine._batchMode) { return; }
	    if (this.engine._removedNodes && this.engine._removedNodes.length > 0) {
	      this._triggerEvent('removed', this.engine._removedNodes);
	      this.engine._removedNodes = [];
	    }
	  };

	  GridStack.prototype._triggerEvent = function(name, data) {
	    var event = new CustomEvent(name, {detail: data});
	    this.el.dispatchEvent(event);
	  };

	  GridStack.prototype._initStyles = function() {
	    if (this._stylesId) {
	      Utils.removeStylesheet(this._stylesId);
	    }
	    this._stylesId = 'gridstack-style-' + (Math.random() * 100000).toFixed();
	    // insert style to parent (instead of 'head') to support WebComponent
	    this._styles = Utils.createStylesheet(this._stylesId, this.el.parentNode);
	    if (this._styles !== null) {
	      this._styles._max = 0;
	    }
	  };

	  GridStack.prototype._updateStyles = function(maxHeight) {
	    if (this._styles === null || this._styles === undefined) {
	      return;
	    }

	    var prefix = '.' + this.opts._class + ' .' + this.opts.itemClass;
	    var self = this;
	    var getHeight;

	    if (maxHeight === undefined) {
	      maxHeight = this._styles._max;
	    }

	    this._initStyles();
	    this._updateContainerHeight();
	    if (!this.opts.cellHeight) { // The rest will be handled by CSS
	      return ;
	    }
	    if (this._styles._max !== 0 && maxHeight <= this._styles._max) { // Keep this._styles._max increasing
	      return ;
	    }

	    if (!this.opts.verticalMargin || this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
	      getHeight = function(nbRows, nbMargins) {
	        return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
	          self.opts.cellHeightUnit;
	      };
	    } else {
	      getHeight = function(nbRows, nbMargins) {
	        if (!nbRows || !nbMargins) {
	          return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
	            self.opts.cellHeightUnit;
	        }
	        return 'calc(' + ((self.opts.cellHeight * nbRows) + self.opts.cellHeightUnit) + ' + ' +
	          ((self.opts.verticalMargin * nbMargins) + self.opts.verticalMarginUnit) + ')';
	      };
	    }

	    if (this._styles._max === 0) {
	      Utils.insertCSSRule(this._styles, prefix, 'min-height: ' + getHeight(1, 0) + ';', 0);
	    }

	    if (maxHeight > this._styles._max) {
	      for (var i = this._styles._max; i < maxHeight; ++i) {
	        Utils.insertCSSRule(this._styles,
	          prefix + '[data-gs-height="' + (i + 1) + '"]',
	          'height: ' + getHeight(i + 1, i) + ';',
	          i
	        );
	        Utils.insertCSSRule(this._styles,
	          prefix + '[data-gs-min-height="' + (i + 1) + '"]',
	          'min-height: ' + getHeight(i + 1, i) + ';',
	          i
	        );
	        Utils.insertCSSRule(this._styles,
	          prefix + '[data-gs-max-height="' + (i + 1) + '"]',
	          'max-height: ' + getHeight(i + 1, i) + ';',
	          i
	        );
	        Utils.insertCSSRule(this._styles,
	          prefix + '[data-gs-y="' + i + '"]',
	          'top: ' + getHeight(i, i) + ';',
	          i
	        );
	      }
	      this._styles._max = maxHeight;
	    }
	  };

	  GridStack.prototype._updateContainerHeight = function() {
	    if (this.engine._batchMode) { return; }
	    var row = this.engine.getRow();
	    if (row < this.opts.minRow) {
	      row = this.opts.minRow;
	    }
	    // check for css min height. Each row is cellHeight + verticalMargin, until last one which has no margin below
	    var cssMinHeight = parseInt(this.$el.css('min-height'));
	    if (cssMinHeight > 0) {
	      var verticalMargin = this.opts.verticalMargin;
	      var minRow =  Math.round((cssMinHeight + verticalMargin) / (this.cellHeight() + verticalMargin));
	      if (row < minRow) {
	        row = minRow;
	      }
	    }
	    this.$el.attr('data-gs-current-row', row);
	    if (!this.opts.cellHeight) {
	      return ;
	    }
	    if (!this.opts.verticalMargin) {
	      this.$el.css('height', (row * (this.opts.cellHeight)) + this.opts.cellHeightUnit);
	    } else if (this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
	      this.$el.css('height', (row * (this.opts.cellHeight + this.opts.verticalMargin) -
	        this.opts.verticalMargin) + this.opts.cellHeightUnit);
	    } else {
	      this.$el.css('height', 'calc(' + ((row * (this.opts.cellHeight)) + this.opts.cellHeightUnit) +
	        ' + ' + ((row * (this.opts.verticalMargin - 1)) + this.opts.verticalMarginUnit) + ')');
	    }
	  };

	  GridStack.prototype._setupRemovingTimeout = function(el) {
	    var self = this;
	    var node = $(el).data('_gridstack_node');

	    if (node._removeTimeout || !self.opts.removable) {
	      return;
	    }
	    node._removeTimeout = setTimeout(function() {
	      el.addClass('grid-stack-item-removing');
	      node._isAboutToRemove = true;
	    }, self.opts.removeTimeout);
	  };

	  GridStack.prototype._clearRemovingTimeout = function(el) {
	    var node = $(el).data('_gridstack_node');

	    if (!node._removeTimeout) {
	      return;
	    }
	    clearTimeout(node._removeTimeout);
	    node._removeTimeout = null;
	    el.removeClass('grid-stack-item-removing');
	    node._isAboutToRemove = false;
	  };

	  GridStack.prototype._prepareElementsByNode = function(el, node) {
	    var self = this;

	    var cellWidth;
	    var cellFullHeight; // internal cellHeight + v-margin

	    var dragOrResize = function(event, ui) {
	      var x = Math.round(ui.position.left / cellWidth);
	      var y = Math.floor((ui.position.top + cellFullHeight / 2) / cellFullHeight);
	      var width;
	      var height;

	      if (event.type === 'drag') {
	        var distance = ui.position.top - node._prevYPix;
	        node._prevYPix = ui.position.top;
	        Utils.updateScrollPosition(el[0], ui, distance);
	        if (el.data('inTrashZone') || x < 0 || x >= self.engine.column || y < 0 ||
	          (!self.engine.float && y > self.engine.getRow())) {
	          if (!node._temporaryRemoved) {
	            if (self.opts.removable === true) {
	              self._setupRemovingTimeout(el);
	            }

	            x = node._beforeDragX;
	            y = node._beforeDragY;

	            self.placeholder.detach();
	            self.placeholder.hide();
	            self.engine.removeNode(node);
	            self._updateContainerHeight();

	            node._temporaryRemoved = true;
	          } else {
	            return;
	          }
	        } else {
	          self._clearRemovingTimeout(el);

	          if (node._temporaryRemoved) {
	            self.engine.addNode(node);
	            self.placeholder
	              .attr('data-gs-x', x)
	              .attr('data-gs-y', y)
	              .attr('data-gs-width', width)
	              .attr('data-gs-height', height)
	              .show();
	            self.$el.append(self.placeholder);
	            node.el = self.placeholder.get(0);
	            node._temporaryRemoved = false;
	          }
	        }
	      } else if (event.type === 'resize')  {
	        if (x < 0) return;
	        width = Math.round(ui.size.width / cellWidth);
	        height = Math.round((ui.size.height + self.verticalMargin()) / cellFullHeight);
	      }
	      // width and height are undefined if not resizing
	      var lastTriedWidth = width !== undefined ? width : node.lastTriedWidth;
	      var lastTriedHeight = height !== undefined ? height : node.lastTriedHeight;
	      if (!self.engine.canMoveNode(node, x, y, width, height) ||
	        (node.lastTriedX === x && node.lastTriedY === y &&
	        node.lastTriedWidth === lastTriedWidth && node.lastTriedHeight === lastTriedHeight)) {
	        return;
	      }
	      node.lastTriedX = x;
	      node.lastTriedY = y;
	      node.lastTriedWidth = width;
	      node.lastTriedHeight = height;
	      self.engine.moveNode(node, x, y, width, height);
	      self._updateContainerHeight();

	      if (event.type === 'resize')  {
	        $(event.target).trigger('gsresize', node);
	      }
	    };

	    var onStartMoving = function(event, ui) {
	      self.$el.append(self.placeholder);
	      var o = $(this);
	      self.engine.cleanNodes();
	      self.engine.beginUpdate(node);
	      cellWidth = self.cellWidth();
	      var strictCellHeight = self.cellHeight(); // heigh without v-margin
	      // compute height with v-margin (Note: we add 1 margin as last row is missing it)
	      cellFullHeight = (self.$el.height() + self.verticalMargin()) / parseInt(self.$el.attr('data-gs-current-row'));
	      self.placeholder
	        .attr('data-gs-x', o.attr('data-gs-x'))
	        .attr('data-gs-y', o.attr('data-gs-y'))
	        .attr('data-gs-width', o.attr('data-gs-width'))
	        .attr('data-gs-height', o.attr('data-gs-height'))
	        .show();
	      node.el = self.placeholder.get(0);
	      node._beforeDragX = node.x;
	      node._beforeDragY = node.y;
	      node._prevYPix = ui.position.top;
	      var minHeight = (node.minHeight || 1);
	      var verticalMargin = self.opts.verticalMargin;

	      // mineHeight - Each row is cellHeight + verticalMargin, until last one which has no margin below
	      self.dd.resizable(el, 'option', 'minWidth', cellWidth * (node.minWidth || 1));
	      self.dd.resizable(el, 'option', 'minHeight', (strictCellHeight * minHeight) + (minHeight - 1) * verticalMargin);

	      if (event.type === 'resizestart') {
	        o.find('.grid-stack-item').trigger('resizestart');
	      }
	    };

	    var onEndMoving = function(event, ui) {
	      var o = $(this);
	      if (!o.data('_gridstack_node')) {
	        return;
	      }

	      // var forceNotify = false; what is the point of calling 'change' event with no data, when the 'removed' event is already called ?
	      self.placeholder.detach();
	      node.el = o.get(0);
	      self.placeholder.hide();

	      if (node._isAboutToRemove) {
	        // forceNotify = true;
	        var gridToNotify = el.data('_gridstack_node')._grid;
	        gridToNotify._triggerRemoveEvent();
	        el.removeData('_gridstack_node');
	        el.remove();
	      } else {
	        self._clearRemovingTimeout(el);
	        if (!node._temporaryRemoved) {
	          Utils.removePositioningStyles(o);
	          o
	            .attr('data-gs-x', node.x)
	            .attr('data-gs-y', node.y)
	            .attr('data-gs-width', node.width)
	            .attr('data-gs-height', node.height);
	        } else {
	          Utils.removePositioningStyles(o);
	          o
	            .attr('data-gs-x', node._beforeDragX)
	            .attr('data-gs-y', node._beforeDragY)
	            .attr('data-gs-width', node.width)
	            .attr('data-gs-height', node.height);
	          node.x = node._beforeDragX;
	          node.y = node._beforeDragY;
	          node._temporaryRemoved = false;
	          self.engine.addNode(node);
	        }
	      }
	      self._updateContainerHeight();
	      self._triggerChangeEvent(/*forceNotify*/);

	      self.engine.endUpdate();

	      var nestedGrids = o.find('.grid-stack');
	      if (nestedGrids.length && event.type === 'resizestop') {
	        nestedGrids.each(function(index, el) {
	          el.gridstack.onResizeHandler();
	        });
	        o.find('.grid-stack-item').trigger('resizestop');
	        o.find('.grid-stack-item').trigger('gsresizestop');
	      }
	      if (event.type === 'resizestop') {
	        self.$el.trigger('gsresizestop', o);
	      }
	    };

	    this.dd
	      .draggable(el, {
	        start: onStartMoving,
	        stop: onEndMoving,
	        drag: dragOrResize
	      })
	      .resizable(el, {
	        start: onStartMoving,
	        stop: onEndMoving,
	        resize: dragOrResize
	      });

	    if (node.noMove || this.opts.disableDrag || this.opts.staticGrid) {
	      this.dd.draggable(el, 'disable');
	    }

	    if (node.noResize || this.opts.disableResize || this.opts.staticGrid) {
	      this.dd.resizable(el, 'disable');
	    }

	    this._writeAttr(el, node);
	  };

	  GridStack.prototype._prepareElement = function(el, triggerAddEvent) {
	    triggerAddEvent = triggerAddEvent !== undefined ? triggerAddEvent : false;
	    var self = this;
	    el = $(el);

	    el.addClass(this.opts.itemClass);
	    var node = this._readAttr(el, {el: el.get(0), _grid: self});
	    node = self.engine.addNode(node, triggerAddEvent);
	    el.data('_gridstack_node', node);

	    this._prepareElementsByNode(el, node);
	  };

	  /** call to write any default attributes back to element */
	  GridStack.prototype._writeAttr = function(el, node) {
	    el = $(el);
	    node = node || {};
	    // Note: passing null removes the attr in jquery
	    if (node.x !== undefined) { el.attr('data-gs-x', node.x); }
	    if (node.y !== undefined) { el.attr('data-gs-y', node.y); }
	    if (node.width !== undefined) { el.attr('data-gs-width', node.width); }
	    if (node.height !== undefined) { el.attr('data-gs-height', node.height); }
	    if (node.autoPosition !== undefined) { el.attr('data-gs-auto-position', node.autoPosition ? true : null); }
	    if (node.minWidth !== undefined) { el.attr('data-gs-min-width', node.minWidth); }
	    if (node.maxWidth !== undefined) { el.attr('data-gs-max-width', node.maxWidth); }
	    if (node.minHeight !== undefined) { el.attr('data-gs-min-height', node.minHeight); }
	    if (node.maxHeight !== undefined) { el.attr('data-gs-max-height', node.maxHeight); }
	    if (node.noResize !== undefined) { el.attr('data-gs-no-resize', node.noResize ? true : null); }
	    if (node.noMove !== undefined) { el.attr('data-gs-no-move', node.noMove ? true : null); }
	    if (node.locked !== undefined) { el.attr('data-gs-locked', node.locked ? true : null); }
	    if (node.resizeHandles !== undefined) { el.attr('data-gs-resize-handles', node.resizeHandles); }
	    if (node.id !== undefined) { el.attr('data-gs-id', node.id); }
	  };

	  /** call to write any default attributes back to element */
	  GridStack.prototype._readAttr = function(el, node) {
	    el = $(el);
	    node = node || {};
	    node.x = el.attr('data-gs-x');
	    node.y = el.attr('data-gs-y');
	    node.width = el.attr('data-gs-width');
	    node.height = el.attr('data-gs-height');
	    node.autoPosition = Utils.toBool(el.attr('data-gs-auto-position'));
	    node.maxWidth = el.attr('data-gs-max-width');
	    node.minWidth = el.attr('data-gs-min-width');
	    node.maxHeight = el.attr('data-gs-max-height');
	    node.minHeight = el.attr('data-gs-min-height');
	    node.noResize = Utils.toBool(el.attr('data-gs-no-resize'));
	    node.noMove = Utils.toBool(el.attr('data-gs-no-move'));
	    node.locked = Utils.toBool(el.attr('data-gs-locked'));
	    node.resizeHandles = el.attr('data-gs-resize-handles');
	    node.id = el.attr('data-gs-id');
	    return node;
	  };

	  GridStack.prototype.setAnimation = function(enable) {
	    if (enable) {
	      this.$el.addClass('grid-stack-animate');
	    } else {
	      this.$el.removeClass('grid-stack-animate');
	    }
	  };

	  GridStack.prototype.addWidget = function(el, opt, y, width, height, autoPosition, minWidth, maxWidth, minHeight, maxHeight, id) {

	    // new way of calling with an object - make sure all items have been properly initialized
	    if (opt === undefined || typeof opt === 'object') {
	      // Tempting to initialize the passed in opt with default and valid values, but this break knockout demos
	      // as the actual value are filled in when _prepareElement() calls el.attr('data-gs-xyz) before adding the node.
	      // opt = this.engine._prepareNode(opt);
	    } else {
	      // old legacy way of calling with items spelled out - call us back with single object instead (so we can properly initialized values)
	      return this.addWidget(el, {x: opt, y: y, width: width, height: height, autoPosition: autoPosition,
	        minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight, id: id});
	    }

	    el = $(el);
	    if (opt) { // see knockout above
	      this.engine._prepareNode(opt);
	    }
	    this._writeAttr(el, opt);
	    this.$el.append(el);
	    return this.makeWidget(el);
	  };

	  GridStack.prototype.makeWidget = function(el) {
	    el = $(el);
	    this._prepareElement(el, true);
	    this._updateContainerHeight();
	    this._triggerAddEvent();
	    this._triggerChangeEvent(true); // trigger any other changes

	    return el.get(0);
	  };

	  GridStack.prototype.willItFit = function(x, y, width, height, autoPosition) {
	    var node = {x: x, y: y, width: width, height: height, autoPosition: autoPosition};
	    return this.engine.canBePlacedWithRespectToHeight(node);
	  };

	  GridStack.prototype.removeWidget = function(el, detachNode) {
	    el = $(el);
	    var node = el.data('_gridstack_node');
	    // For Meteor support: https://github.com/gridstack/gridstack.js/pull/272
	    if (!node) {
	      node = this.engine.getNodeDataByDOMEl(el.get(0));
	    }
	    // remove our DOM data (circular link) and drag&drop permanently
	    el.removeData('_gridstack_node');
	    this.dd.draggable(el, 'destroy').resizable(el, 'destroy');

	    this.engine.removeNode(node, detachNode);
	    this._triggerRemoveEvent();
	    this._triggerChangeEvent(true); // trigger any other changes
	  };

	  GridStack.prototype.removeAll = function(detachNode) {
	    // always remove our DOM data (circular link) before list gets emptied and drag&drop permanently
	    this.engine.nodes.forEach(function(node) {
	      var el = $(node.el);
	      el.removeData('_gridstack_node');
	      this.dd.draggable(el, 'destroy').resizable(el, 'destroy');
	    }, this);

	    this.engine.removeAll(detachNode);
	    this._triggerRemoveEvent();
	  };

	  GridStack.prototype.destroy = function(detachGrid) {
	    $(window).off('resize', this.onResizeHandler);
	    if (detachGrid === false) {
	      this.removeAll(false);
	      this.$el.removeClass(this.opts._class);
	      delete this.$el.get(0).gridstack;
	    } else {
	      this.$el.remove();
	    }
	    Utils.removeStylesheet(this._stylesId);
	    if (this.engine) {
	      this.engine = null;
	    }
	  };

	  GridStack.prototype.resizable = function(el, val) {
	    var self = this;
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      node.noResize = !(val || false);
	      if (node.noResize) {
	        self.dd.resizable(el, 'disable');
	      } else {
	        self.dd.resizable(el, 'enable');
	      }
	    });
	    return this;
	  };

	  GridStack.prototype.movable = function(el, val) {
	    var self = this;
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      node.noMove = !(val || false);
	      if (node.noMove) {
	        self.dd.draggable(el, 'disable');
	        el.removeClass('ui-draggable-handle');
	      } else {
	        self.dd.draggable(el, 'enable');
	        el.addClass('ui-draggable-handle');
	      }
	    });
	    return this;
	  };

	  GridStack.prototype.enableMove = function(doEnable, includeNewWidgets) {
	    this.movable(this.$el.children('.' + this.opts.itemClass), doEnable);
	    if (includeNewWidgets) {
	      this.opts.disableDrag = !doEnable;
	    }
	  };

	  GridStack.prototype.enableResize = function(doEnable, includeNewWidgets) {
	    this.resizable(this.$el.children('.' + this.opts.itemClass), doEnable);
	    if (includeNewWidgets) {
	      this.opts.disableResize = !doEnable;
	    }
	  };

	  GridStack.prototype.disable = function() {
	    this.movable(this.$el.children('.' + this.opts.itemClass), false);
	    this.resizable(this.$el.children('.' + this.opts.itemClass), false);
	    this.$el.trigger('disable');
	  };

	  GridStack.prototype.enable = function() {
	    this.movable(this.$el.children('.' + this.opts.itemClass), true);
	    this.resizable(this.$el.children('.' + this.opts.itemClass), true);
	    this.$el.trigger('enable');
	  };

	  GridStack.prototype.locked = function(el, val) {
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      node.locked = (val || false);
	      el.attr('data-gs-locked', node.locked ? 'yes' : null);
	    });
	    return this;
	  };

	  GridStack.prototype.maxHeight = function(el, val) {
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      if (!isNaN(val)) {
	        node.maxHeight = (val || false);
	        el.attr('data-gs-max-height', val);
	      }
	    });
	    return this;
	  };

	  GridStack.prototype.minHeight = function(el, val) {
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      if (!isNaN(val)) {
	        node.minHeight = (val || false);
	        el.attr('data-gs-min-height', val);
	      }
	    });
	    return this;
	  };

	  GridStack.prototype.maxWidth = function(el, val) {
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      if (!isNaN(val)) {
	        node.maxWidth = (val || false);
	        el.attr('data-gs-max-width', val);
	      }
	    });
	    return this;
	  };

	  GridStack.prototype.minWidth = function(el, val) {
	    el = $(el);
	    el.each(function(index, el) {
	      el = $(el);
	      var node = el.data('_gridstack_node');
	      if (!node) { return; }
	      if (!isNaN(val)) {
	        node.minWidth = (val || false);
	        el.attr('data-gs-min-width', val);
	      }
	    });
	    return this;
	  };

	  GridStack.prototype._updateElement = function(el, callback) {
	    el = $(el).first();
	    var node = el.data('_gridstack_node');
	    if (!node) { return; }
	    var self = this;

	    self.engine.cleanNodes();
	    self.engine.beginUpdate(node);

	    callback.call(this, el, node);

	    self._updateContainerHeight();
	    self._triggerChangeEvent();

	    self.engine.endUpdate();
	  };

	  GridStack.prototype.resize = function(el, width, height) {
	    this._updateElement(el, function(el, node) {
	      width = (width !== null && width !== undefined) ? width : node.width;
	      height = (height !== null && height !== undefined) ? height : node.height;

	      this.engine.moveNode(node, node.x, node.y, width, height);
	    });
	  };

	  GridStack.prototype.move = function(el, x, y) {
	    this._updateElement(el, function(el, node) {
	      x = (x !== null && x !== undefined) ? x : node.x;
	      y = (y !== null && y !== undefined) ? y : node.y;

	      this.engine.moveNode(node, x, y, node.width, node.height);
	    });
	  };

	  GridStack.prototype.update = function(el, x, y, width, height) {
	    this._updateElement(el, function(el, node) {
	      x = (x !== null && x !== undefined) ? x : node.x;
	      y = (y !== null && y !== undefined) ? y : node.y;
	      width = (width !== null && width !== undefined) ? width : node.width;
	      height = (height !== null && height !== undefined) ? height : node.height;

	      this.engine.moveNode(node, x, y, width, height);
	    });
	  };

	  /**
	   * relayout grid items to reclaim any empty space
	   */
	  GridStack.prototype.compact = function() {
	    if (this.engine.nodes.length === 0) { return; }
	    this.batchUpdate();
	    this.engine._sortNodes();
	    var nodes = this.engine.nodes;
	    this.engine.nodes = []; // pretend we have no nodes to conflict layout to start with...
	    nodes.forEach(function(node) {
	      if (!node.noMove && !node.locked) {
	        node.autoPosition = true;
	      }
	      this.engine.addNode(node, false); // 'false' for add event trigger
	      node._dirty = true; // force attr update
	    }, this);
	    this.commit();
	  };

	  GridStack.prototype.verticalMargin = function(val, noUpdate) {
	    if (val === undefined) {
	      return this.opts.verticalMargin;
	    }

	    var heightData = Utils.parseHeight(val);

	    if (this.opts.verticalMarginUnit === heightData.unit && this.opts.maxRow === heightData.height) {
	      return ;
	    }
	    this.opts.verticalMarginUnit = heightData.unit;
	    this.opts.verticalMargin = heightData.height;

	    if (!noUpdate) {
	      this._updateStyles();
	    }
	  };

	  /** set/get the current cell height value */
	  GridStack.prototype.cellHeight = function(val, noUpdate) {
	    // getter - returns the opts stored height else compute it...
	    if (val === undefined) {
	      if (this.opts.cellHeight && this.opts.cellHeight !== 'auto') {
	        return this.opts.cellHeight;
	      }
	      // compute the height taking margin into account (each row has margin other than last one)
	      var o = this.$el.children('.' + this.opts.itemClass).first();
	      var height = o.attr('data-gs-height');
	      var verticalMargin = this.opts.verticalMargin;
	      return Math.round((o.outerHeight() - (height - 1) * verticalMargin) / height);
	    }

	    // setter - updates the cellHeight value if they changed
	    var heightData = Utils.parseHeight(val);
	    if (this.opts.cellHeightUnit === heightData.unit && this.opts.cellHeight === heightData.height) {
	      return ;
	    }
	    this.opts.cellHeightUnit = heightData.unit;
	    this.opts.cellHeight = heightData.height;

	    if (!noUpdate) {
	      this._updateStyles();
	    }
	  };

	  GridStack.prototype.cellWidth = function() {
	    // TODO: take margin into account ($horizontal_padding in .scss) to make cellHeight='auto' square ? (see 810-many-columns.html)
	    return Math.round(this.$el.outerWidth() / this.opts.column);
	  };

	  GridStack.prototype.getCellFromPixel = function(position, useOffset) {
	    var containerPos = (useOffset !== undefined && useOffset) ?
	      this.$el.offset() : this.$el.position();
	    var relativeLeft = position.left - containerPos.left;
	    var relativeTop = position.top - containerPos.top;

	    var columnWidth = Math.floor(this.$el.width() / this.opts.column);
	    var rowHeight = Math.floor(this.$el.height() / parseInt(this.$el.attr('data-gs-current-row')));

	    return {x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight)};
	  };

	  GridStack.prototype.batchUpdate = function() {
	    this.engine.batchUpdate();
	  };

	  GridStack.prototype.commit = function() {
	    this.engine.commit();
	    this._triggerRemoveEvent();
	    this._triggerAddEvent();
	    this._triggerChangeEvent();
	  };

	  GridStack.prototype.isAreaEmpty = function(x, y, width, height) {
	    return this.engine.isAreaEmpty(x, y, width, height);
	  };

	  GridStack.prototype.setStatic = function(staticValue) {
	    this.opts.staticGrid = (staticValue === true);
	    this.enableMove(!staticValue);
	    this.enableResize(!staticValue);
	    this._setStaticClass();
	  };

	  GridStack.prototype._setStaticClass = function() {
	    var staticClassName = 'grid-stack-static';

	    if (this.opts.staticGrid === true) {
	      this.$el.addClass(staticClassName);
	    } else {
	      this.$el.removeClass(staticClassName);
	    }
	  };

	  /** called whenever a node is added or moved - updates the cached layouts */
	  GridStackEngine.prototype._layoutsNodesChange = function(nodes) {
	    if (!this._layouts || this._ignoreLayoutsNodeChange) return;
	    // remove smaller layouts - we will re-generate those on the fly... larger ones need to update
	    this._layouts.forEach(function(layout, column) {
	      if (!layout || column === this.column) return;
	      if (column < this.column) {
	        this._layouts[column] = undefined;
	      }
	      else {
	        // we save the original x,y,w (h isn't cached) to see what actually changed to propagate better.
	        // Note: we don't need to check against out of bound scaling/moving as that will be done when using those cache values.
	        nodes.forEach(function(node) {
	          var n = layout.find(function(l) { return l._id === node._id });
	          if (!n) return; // no cache for new nodes. Will use those values.
	          var ratio = column / this.column;
	          // Y changed, push down same amount
	          // TODO: detect doing item 'swaps' will help instead of move (especially in 1 column mode)
	          if (node.y !== node._origY) {
	            n.y += (node.y - node._origY);
	          }
	          // X changed, scale from new position
	          if (node.x !== node._origX) {
	            n.x = Math.round(node.x * ratio);
	          }
	          // width changed, scale from new width
	          if (node.width !== node._origW) {
	            n.width = Math.round(node.width * ratio);
	          }
	          // ...height always carries over from cache
	        }, this);
	      }
	    }, this);
	  }

	  /**
	   * Called to scale the widget width & position up/down based on the column change.
	   * Note we store previous layouts (especially original ones) to make it possible to go
	   * from say 12 -> 1 -> 12 and get back to where we were.
	   *
	   * oldColumn: previous number of columns
	   * column:    new column number
	   * nodes?:    different sorted list (ex: DOM order) instead of current list
	   */
	  GridStackEngine.prototype._updateNodeWidths = function(oldColumn, column, nodes) {
	    if (!this.nodes.length || oldColumn === column) { return; }

	    // cache the current layout in case they want to go back (like 12 -> 1 -> 12) as it requires original data
	    var copy = [this.nodes.length];
	    this.nodes.forEach(function(n, i) {copy[i] = {x: n.x, y: n.y, width: n.width, _id: n._id}}); // only thing we change is x,y,w and id to find it back
	    this._layouts = this._layouts || []; // use array to find larger quick
	    this._layouts[oldColumn] = copy;

	    // if we're going to 1 column and using DOM order rather than default sorting, then generate that layout
	    if (column === 1 && nodes && nodes.length) {
	      var top = 0;
	      nodes.forEach(function(n) {
	        n.x = 0;
	        n.width = 1;
	        n.y = Math.max(n.y, top);
	        top = n.y + n.height;
	      });
	    } else {
	      nodes = Utils.sort(this.nodes, -1, oldColumn); // current column reverse sorting so we can insert last to front (limit collision)
	    }

	    // see if we have cached previous layout.
	    var cacheNodes = this._layouts[column] || [];
	    // if not AND we are going up in size start with the largest layout as down-scaling is more accurate
	    var lastIndex = this._layouts.length - 1;
	    if (cacheNodes.length === 0 && column > oldColumn && column < lastIndex) {
	      cacheNodes = this._layouts[lastIndex] || [];
	      if (cacheNodes.length) {
	        // pretend we came from that larger column by assigning those values as starting point
	        oldColumn = lastIndex;
	        cacheNodes.forEach(function(cacheNode) {
	          var j = nodes.findIndex(function(n) {return n && n._id === cacheNode._id});
	          if (j !== -1) {
	            // still current, use cache info positions
	            nodes[j].x = cacheNode.x;
	            nodes[j].y = cacheNode.y;
	            nodes[j].width = cacheNode.width;
	          }
	        });
	        cacheNodes = []; // we still don't have new column cached data... will generate from larger one.
	      }
	    }

	    // if we found cache re-use those nodes that are still current
	    var newNodes = [];
	    cacheNodes.forEach(function(cacheNode) {
	      var j = nodes.findIndex(function(n) {return n && n._id === cacheNode._id});
	      if (j !== -1) {
	        // still current, use cache info positions
	        nodes[j].x = cacheNode.x;
	        nodes[j].y = cacheNode.y;
	        nodes[j].width = cacheNode.width;
	        newNodes.push(nodes[j]);
	        nodes[j] = null; // erase it so we know what's left
	      }
	    });
	    // ...and add any extra non-cached ones
	    var ratio = column / oldColumn;
	    nodes.forEach(function(node) {
	      if (!node) return;
	      node.x = (column === 1 ? 0 : Math.round(node.x * ratio));
	      node.width = ((column === 1 || oldColumn === 1) ? 1 : (Math.round(node.width * ratio) || 1));
	      newNodes.push(node);
	    });

	    // finally relayout them in reverse order (to get correct placement)
	    newNodes = Utils.sort(newNodes, -1, column);
	    this._ignoreLayoutsNodeChange = true;
	    this.batchUpdate();
	    this.nodes = []; // pretend we have no nodes to start with (we use same structures) to simplify layout
	    newNodes.forEach(function(node) {
	      this.addNode(node, false); // 'false' for add event trigger
	      node._dirty = true; // force attr update
	    }, this);
	    this.commit();
	    delete this._ignoreLayoutsNodeChange;
	  }

	  /** called to save initial position/size */
	  GridStackEngine.prototype._saveInitial = function() {
	    this.nodes.forEach(function(n) {
	      n._origX = n.x;
	      n._origY = n.y;
	      n._origW = n.width;
	      n._origH = n.height;
	      delete n._dirty;
	    });
	  }

	  /**
	   * set/get number of columns in the grid. Will attempt to update existing widgets
	   * to conform to new number of columns. Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11],
	   * else you will need to generate correct CSS (see https://github.com/gridstack/gridstack.js#change-grid-columns)
	   * @param column - Integer > 0 (default 12).
	   * @param doNotPropagate if true existing widgets will not be updated (optional)
	   */
	  GridStack.prototype.column = function(column, doNotPropagate) {
	    // getter - returns the opts stored mode
	    if (column === undefined) {
	      return this.opts.column;
	    }
	    // setter
	    if (this.opts.column === column) { return; }
	    var oldColumn = this.opts.column;

	    // if we go into 1 column mode (which happens if we're sized less than minWidth unless disableOneColumnMode is on)
	    // then remember the original columns so we can restore.
	    if (column === 1) {
	      this._prevColumn = oldColumn;
	    } else {
	      delete this._prevColumn;
	    }

	    this.$el.removeClass('grid-stack-' + oldColumn);
	    this.$el.addClass('grid-stack-' + column);
	    this.opts.column = this.engine.column = column;

	    if (doNotPropagate === true) { return; }

	    // update the items now - see if the dom order nodes should be passed instead (else default to current list)
	    var domNodes;
	    if (this.opts.oneColumnModeDomSort && column === 1) {
	      domNodes = [];
	      this.$el.children('.' + this.opts.itemClass).each(function(index, el) {
	        var node = $(el).data('_gridstack_node');
	        if (node) { domNodes.push(node); }
	      });
	      if (!domNodes.length) { domNodes = undefined; }
	    }
	    this.engine._updateNodeWidths(oldColumn, column, domNodes);

	    // and trigger our event last...
	    this.engine._ignoreLayoutsNodeChange = true;
	    this._triggerChangeEvent();
	    delete this.engine._ignoreLayoutsNodeChange;
	  };

	  GridStack.prototype.float = function(val) {
	    // getter - returns the opts stored mode
	    if (val === undefined) {
	      return this.opts.float || false;
	    }
	    // setter - updates the mode and relayout if gravity is back on
	    if (this.opts.float === val) { return; }
	    this.opts.float = this.engine.float = val || false;
	    if (!val) {
	      this.engine._packNodes();
	      this.engine._notify();
	      this._triggerChangeEvent();
	    }
	  };

	  GridStack.prototype.getRow = function() {
	    return this.engine.getRow();
	  }

	  /** Event handler that extracts our CustomEvent data out automatically for receiving custom
	   * notifications (see doc for supported events)
	   */
	  GridStack.prototype.on = function(eventName, callback) {
	    // check for array of names being passed instead
	    if (eventName.indexOf(' ') !== -1) {
	      var names = eventName.split(' ');
	      names.forEach(function(name) { this.on(name, callback) }, this);
	      return;
	    }

	    if (eventName === 'change' || eventName === 'added' || eventName === 'removed') {
	      // native CustomEvent handlers - cash the generic handlers so we can remove
	      this._gsEventHandler = this._gsEventHandler || {};
	      this._gsEventHandler[eventName] = function(event) { callback(event, event.detail) };
	      this.el.addEventListener(eventName, this._gsEventHandler[eventName]);
	    } else {
	      // still JQuery events
	      this.$el.on(eventName, callback);
	    }
	  }

	  /** unsubscribe from the 'on' event */
	  GridStack.prototype.off = function(eventName) {
	    // check for array of names being passed instead
	    if (eventName.indexOf(' ') !== -1) {
	      var names = eventName.split(' ');
	      names.forEach(function(name) { this.off(name, callback) }, this);
	      return;
	    }

	    if (eventName === 'change' || eventName === 'added' || eventName === 'removed') {
	      // remove native CustomEvent handlers
	      if (this._gsEventHandler && this._gsEventHandler[eventName]) {
	        this.el.removeEventListener(eventName, this._gsEventHandler[eventName]);
	        delete this._gsEventHandler[eventName];
	      }
	    } else {
	      // still JQuery events
	      this.$el.off(eventName);
	    }
	  }

	  // legacy method renames
	  GridStack.prototype.setGridWidth = obsolete(GridStack.prototype.column, 'setGridWidth', 'column', 'v0.5.3');
	  GridStack.prototype.setColumn = obsolete(GridStack.prototype.column, 'setColumn', 'column', 'v0.6.4');
	  GridStackEngine.prototype.getGridHeight = obsolete(GridStackEngine.prototype.getRow, 'getGridHeight', 'getRow', 'v1.0.0');

	  scope.GridStack = GridStack;
	  scope.GridStack.Utils = Utils;
	  scope.GridStack.Engine = GridStackEngine;
	  scope.GridStack.DragDropPlugin = GridStackDragDropPlugin;

	  /**
	   * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
	   * simply return the existing instance (ignore any passed options).
	   */
	  GridStack.init = function(opts, elOrString) {
	    if (!elOrString) { elOrString = '.grid-stack' }
	    var el = $(elOrString).get(0);
	    if (!el) return;
	    if (!el.gridstack) {
	      el.gridstack = new GridStack(el, opts);
	    }
	    return el.gridstack
	  };

	  /**
	   * Will initialize a list of elements (given a selector) and return an array of grids.
	   */
	  GridStack.initAll = function(opts, selector) {
	    if (!selector) { selector = '.grid-stack' }
	    var grids = [];
	    $(selector).each(function(index, el) {
	      if (!el.gridstack) {
	        el.gridstack = new GridStack(el, Utils.clone(opts));
	      }
	      grids.push(el.gridstack);
	    });
	    return grids;
	  };

	  return scope.GridStack;
	});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(2);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(100),
	    hashDelete = __webpack_require__(101),
	    hashGet = __webpack_require__(102),
	    hashHas = __webpack_require__(103),
	    hashSet = __webpack_require__(104);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(2);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(2);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(2);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(69);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(85),
	    isArguments = __webpack_require__(18),
	    isArray = __webpack_require__(1),
	    isBuffer = __webpack_require__(38),
	    isIndex = __webpack_require__(33),
	    isTypedArray = __webpack_require__(40);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(23),
	    arrayIncludes = __webpack_require__(57),
	    arrayIncludesWith = __webpack_require__(58),
	    arrayMap = __webpack_require__(15),
	    baseUnary = __webpack_require__(28),
	    cacheHas = __webpack_require__(29);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(66),
	    createBaseEach = __webpack_require__(88);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(25),
	    isFlattenable = __webpack_require__(105);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(89);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(65),
	    keys = __webpack_require__(22);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(25),
	    isArray = __webpack_require__(1);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(63),
	    baseIsNaN = __webpack_require__(73),
	    strictIndexOf = __webpack_require__(136);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isObjectLike = __webpack_require__(4);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(24),
	    equalArrays = __webpack_require__(31),
	    equalByTag = __webpack_require__(91),
	    equalObjects = __webpack_require__(92),
	    getTag = __webpack_require__(97),
	    isArray = __webpack_require__(1),
	    isBuffer = __webpack_require__(38),
	    isTypedArray = __webpack_require__(40);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(24),
	    baseIsEqual = __webpack_require__(27);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(39),
	    isMasked = __webpack_require__(107),
	    isObject = __webpack_require__(20),
	    toSource = __webpack_require__(36);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(6),
	    isLength = __webpack_require__(19),
	    isObjectLike = __webpack_require__(4);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(79),
	    baseMatchesProperty = __webpack_require__(80),
	    identity = __webpack_require__(17),
	    isArray = __webpack_require__(1),
	    property = __webpack_require__(146);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(108),
	    nativeKeys = __webpack_require__(121);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(62),
	    isArrayLike = __webpack_require__(12);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(72),
	    getMatchData = __webpack_require__(94),
	    matchesStrictComparable = __webpack_require__(35);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(27),
	    get = __webpack_require__(140),
	    hasIn = __webpack_require__(141),
	    isKey = __webpack_require__(16),
	    isStrictComparable = __webpack_require__(34),
	    matchesStrictComparable = __webpack_require__(35),
	    toKey = __webpack_require__(11);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(26);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(17),
	    overRest = __webpack_require__(125),
	    setToString = __webpack_require__(129);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(138),
	    defineProperty = __webpack_require__(90),
	    identity = __webpack_require__(17);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    arrayMap = __webpack_require__(15),
	    isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(21);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(12);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    Uint8Array = __webpack_require__(53),
	    eq = __webpack_require__(37),
	    equalArrays = __webpack_require__(31),
	    mapToArray = __webpack_require__(119),
	    setToArray = __webpack_require__(128);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(93);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(67),
	    getSymbols = __webpack_require__(96),
	    keys = __webpack_require__(22);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(34),
	    keys = __webpack_require__(22);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(56),
	    stubArray = __webpack_require__(147);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(49),
	    Map = __webpack_require__(13),
	    Promise = __webpack_require__(51),
	    Set = __webpack_require__(52),
	    WeakMap = __webpack_require__(54),
	    baseGetTag = __webpack_require__(6),
	    toSource = __webpack_require__(36);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(30),
	    isArguments = __webpack_require__(18),
	    isArray = __webpack_require__(1),
	    isIndex = __webpack_require__(33),
	    isLength = __webpack_require__(19),
	    toKey = __webpack_require__(11);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    isArguments = __webpack_require__(18),
	    isArray = __webpack_require__(1);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(87);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(50),
	    ListCache = __webpack_require__(7),
	    Map = __webpack_require__(13);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(145);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(124);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(32);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(55);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(84),
	    shortOut = __webpack_require__(130);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(7);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(7),
	    Map = __webpack_require__(13),
	    MapCache = __webpack_require__(14);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(120);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(61),
	    baseFlatten = __webpack_require__(64),
	    baseRest = __webpack_require__(83),
	    isArrayLikeObject = __webpack_require__(142),
	    last = __webpack_require__(143);

	/**
	 * This method is like `_.difference` except that it accepts `comparator`
	 * which is invoked to compare elements of `array` to `values`. The order and
	 * references of result values are determined by the first array. The comparator
	 * is invoked with two arguments: (arrVal, othVal).
	 *
	 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	 *
	 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	 * // => [{ 'x': 2, 'y': 1 }]
	 */
	var differenceWith = baseRest(function(array, values) {
	  var comparator = last(values);
	  if (isArrayLikeObject(comparator)) {
	    comparator = undefined;
	  }
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
	    : [];
	});

	module.exports = differenceWith;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(26);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(68),
	    hasPath = __webpack_require__(99);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(12),
	    isObjectLike = __webpack_require__(4);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(15),
	    baseIteratee = __webpack_require__(76),
	    baseMap = __webpack_require__(78),
	    isArray = __webpack_require__(1);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(14);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(81),
	    basePropertyDeep = __webpack_require__(82),
	    isKey = __webpack_require__(16),
	    toKey = __webpack_require__(11);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(86);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(42);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (true) {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(43);
	var assign = __webpack_require__(150);

	var ReactPropTypesSecret = __webpack_require__(42);
	var checkPropTypes = __webpack_require__(151);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (true) {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}


/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_154__;

/***/ })
/******/ ])
});
;