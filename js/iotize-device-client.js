(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("rxjs/operators"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "rxjs/operators"], factory);
	else if(typeof exports === 'object')
		exports["IoTizeDeviceClient"] = factory(require("rxjs"), require("rxjs/operators"));
	else
		root["IoTizeDeviceClient"] = factory(root["rxjs"], root["rxjs"]["operators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__22__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));
__export(__webpack_require__(28));
__export(__webpack_require__(8));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Converter = __webpack_require__(8);
exports.Converter = Converter;
var format_helper_1 = __webpack_require__(7);
exports.FormatHelper = format_helper_1.FormatHelper;
__export(__webpack_require__(28));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APDU = __webpack_require__(91);
exports.APDU = APDU;
var format_1 = __webpack_require__(15);
exports.FormatHelper = format_1.FormatHelper;
var Crypto = __webpack_require__(96);
exports.Crypto = Crypto;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(10));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var number_decoder_1 = __webpack_require__(9);
var format_helper_1 = __webpack_require__(7);
var ByteBuffer = /** @class */ (function () {
    function ByteBuffer(data) {
        this._lsb = false;
        this._offset = 0;
        this._data = data;
    }
    Object.defineProperty(ByteBuffer.prototype, "lsb", {
        get: function () {
            return this._lsb;
        },
        set: function (isLsb) {
            this._lsb = isLsb;
        },
        enumerable: true,
        configurable: true
    });
    ByteBuffer.merge = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var totalSize = args.reduce(function (previouseValue, currentValue) { return previouseValue + currentValue.length; }, 0);
        var buffer = ByteBuffer.create(totalSize);
        args.forEach(function (value) {
            buffer.add(value);
        });
        return buffer;
    };
    ByteBuffer.from = function (value) {
        return new ByteBuffer(value);
    };
    ByteBuffer.prototype.readNumber = function (sizeOf, signed, lsb) {
        if (sizeOf === void 0) { sizeOf = 4; }
        if (signed === void 0) { signed = true; }
        if (lsb === void 0) { lsb = undefined; }
        var data = this._data.slice(this._offset, this._offset + sizeOf);
        lsb = lsb === undefined ? this._lsb : lsb;
        if (this._data.byteLength < this._offset + sizeOf) {
            throw new Error("Buffer overflow at index " + (this._offset + sizeOf) + ". Max is " + data.byteLength);
        }
        console.log("Read data " + this._offset + " to " + (this._offset + sizeOf) + " <=> " + Buffer.from(data).toString("hex"));
        var number = number_decoder_1.NumberConverter.fromBytes(data, sizeOf, signed, lsb);
        this._offset += sizeOf;
        return number;
    };
    ByteBuffer.prototype.get_number = function (length) {
        return this.readNumber(length);
    };
    ByteBuffer.prototype.get_string = function (length) {
        return format_helper_1.FormatHelper.toAsciiString(this.readArray(length));
    };
    ByteBuffer.prototype.get_bytes = function (length) {
        return this.readArray(length);
    };
    ByteBuffer.prototype.put_bytes = function (data, length) {
        this.add(data, length);
        return this;
    };
    ByteBuffer.prototype.readUnsignedNumber = function (sizeOf, lsb) {
        if (sizeOf === void 0) { sizeOf = 4; }
        return this.readNumber(sizeOf, false, lsb);
    };
    /**
     *
     * @param length
     */
    ByteBuffer.prototype.readArray = function (length) {
        if (!length) {
            length = this._data.length - this._offset;
        }
        console.log('readArray', length, 'index', this._offset);
        if (length == 0) {
            return new Uint8Array(0);
        }
        var value = this._data.subarray(this._offset, this._offset + length);
        this._offset += length;
        return value;
    };
    Object.defineProperty(ByteBuffer.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    ByteBuffer.prototype.put_boolean = function (value, mask) {
        console.log('put_boolean', value, mask, this._data[this._offset]);
        if (value) {
            this._data[this._offset] |= mask;
        }
        else {
            this._data[this._offset] &= ~mask;
        }
        return this;
    };
    ByteBuffer.prototype.put_string = function (value, length) {
        var data = format_helper_1.FormatHelper.toByteBuffer(value);
        this.add(data, length);
        return this;
    };
    /**
     * Build data from 0 to offset
     */
    ByteBuffer.prototype.build = function () {
        return this._data.slice(0, this._offset);
    };
    ByteBuffer.prototype.forward = function (size) {
        this._offset += size;
        return this;
    };
    ByteBuffer.prototype.add = function (data, length) {
        if (length) {
            data = data.slice(0, length);
        }
        else {
            length = data ? data.length : 0;
        }
        if (length == 0)
            return this;
        this._data.set(data, this._offset);
        this._offset += length;
        return this;
    };
    ByteBuffer.prototype.put_number = function (value, sizeOf) {
        return this.addNumber(value, sizeOf);
    };
    ByteBuffer.prototype.addNumber = function (value, sizeOf, lsb) {
        if (sizeOf === void 0) { sizeOf = 4; }
        if (lsb === void 0) { lsb = false; }
        lsb = lsb === undefined ? this._lsb : lsb;
        var data = number_decoder_1.NumberConverter.toOpaqueMsb(value, sizeOf * 8);
        if (lsb) {
            data = data.reverse();
        }
        this.add(data);
        return this;
    };
    ByteBuffer.create = function (size) {
        return new ByteBuffer(new Uint8Array(size));
    };
    Object.defineProperty(ByteBuffer.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (offset) {
            this._offset = offset;
        },
        enumerable: true,
        configurable: true
    });
    return ByteBuffer;
}());
exports.ByteBuffer = ByteBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __webpack_require__(26);
exports.Command = request_1.Command;
var impl_1 = __webpack_require__(23);
exports.PathParameter = impl_1.PathParameter;
var abstract_service_1 = __webpack_require__(64);
exports.AbstractService = abstract_service_1.AbstractService;
var single_packet_1 = __webpack_require__(49);
exports.SinglePacket = single_packet_1.SinglePacket;
var api_config_1 = __webpack_require__(65);
exports.ApiConfig = api_config_1.ApiConfig;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormatHelper = /** @class */ (function () {
    function FormatHelper() {
    }
    /**
     * Convert a string to byte buffer
     * @param str
     */
    FormatHelper.toByteBuffer = function (str) {
        var bufView = new Uint8Array(str.length);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return bufView;
    };
    FormatHelper.toHexString = function (buffer) {
        var result = Array.prototype.map.call(buffer, function (x) { return ('00' + x.toString(16)).slice(-2); }).join('');
        return result.toUpperCase();
    };
    FormatHelper.toBinaryString = function (buffer) {
        var result = Array.prototype.map.call(buffer, function (x) {
            var res = "";
            for (var i = 7; i >= 0; i--) {
                res += ((0x1 << i) & x) > 0 ? "1" : "0";
            }
            return res;
        }).join('');
        return result;
    };
    FormatHelper.hexStringToBuffer = function (hexString) {
        var bytes = new Uint8Array(Math.ceil(hexString.length / 2));
        for (var i = 0; i < bytes.length; i++)
            bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
        return bytes;
    };
    FormatHelper.toAsciiString = function (data) {
        var str = String.fromCharCode.apply(null, data);
        return str;
    };
    FormatHelper.toUnsignedInt = function (data, sizeOf, lsb) {
        if (sizeOf === void 0) { sizeOf = 4; }
        if (lsb === void 0) { lsb = true; }
        var ret = 0;
        if (lsb) {
            data = data.reverse();
        }
        for (var i = 0; i < data.length && i < sizeOf; i++) {
            ret = (ret << 8) + (data[i] & 0xFF);
        }
        return ret;
    };
    return FormatHelper;
}());
exports.FormatHelper = FormatHelper;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(57));
__export(__webpack_require__(9));
__export(__webpack_require__(136));
__export(__webpack_require__(137));
__export(__webpack_require__(58));
__export(__webpack_require__(138));
__export(__webpack_require__(139));
__export(__webpack_require__(140));
__export(__webpack_require__(141));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberConverter = /** @class */ (function () {
    function NumberConverter(options) {
        this.options = options;
    }
    NumberConverter.uint8Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: false,
            sizeOf: 8,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.uint32Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: false,
            sizeOf: 32,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.int32Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: true,
            sizeOf: 32,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.int16Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: true,
            sizeOf: 16,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.int8Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: true,
            sizeOf: 8,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.uint16Instance = function (lsb) {
        if (lsb === void 0) { lsb = false; }
        return new NumberConverter({
            signed: false,
            sizeOf: 16,
            leastSignificantBitFirst: lsb
        });
    };
    NumberConverter.prototype.decode = function (body) {
        if ((body.length * 8) < this.options.sizeOf) {
            throw new Error("Expected number of " + this.options.sizeOf + " bits but found only " + body.length * 8 + " bits of data");
        }
        return NumberConverter.fromBytes(body, this.options.sizeOf / 8, this.options.signed, this.options.leastSignificantBitFirst);
    };
    NumberConverter.prototype.encode = function (value) {
        var result = new Uint8Array(this.options.sizeOf >> 3);
        for (var i = 0; i < result.length; i++) {
            var decalage = ((result.length - i - 1) * 8);
            result[i] = (value >> decalage) & 0xFF;
        }
        if (this.options.leastSignificantBitFirst) {
            result.reverse();
        }
        return result;
    };
    NumberConverter.toOpaqueMsb = function (input, sizeOf) {
        if (sizeOf == 8) {
            return new Uint8Array([input & 0xFF]);
        }
        else if (sizeOf == 16) {
            return new Uint8Array([
                (input >> 7) & 0xFF,
                input & 0xFF
            ]);
        }
        else if (sizeOf == 32) {
            return new Uint8Array([
                (input >> 24) & 0xFF,
                (input >> 16) & 0xFF,
                (input >> 8) & 0xFF,
                input & 0xFF
            ]);
        }
        else {
            throw new Error("Invalid size " + sizeOf + ". Must be 8, 16 or 32");
        }
    };
    NumberConverter.fromOpaqueMsb = function (data, sizeOf) {
        if (!sizeOf) {
            sizeOf = data.length * 8;
        }
        if (sizeOf == 8) {
            return data[0] & 0xFF;
        }
        if (sizeOf == 16) {
            return (data[1] & 0xFF) + ((data[0] & 0xFF) << 8);
        }
        if (sizeOf == 32) {
            return (data[3] & 0xFF) +
                ((data[2] & 0xFF) << 8) +
                ((data[1] & 0xFF) << 16) +
                ((data[0] & 0xFF) << 24);
        }
        throw new Error("Invalid size " + sizeOf + ". Must be 8, 16 or 32");
    };
    NumberConverter.fromBytes = function (data, size, signed, lsb) {
        if (lsb) {
            data = data.reverse();
        }
        var result = 0;
        var last = 0;
        var decalage;
        for (var i = 0; i < size; i++) {
            decalage = ((size - i - 1) * 8);
            // console.log("Decalage: " + decalage + " on " + data[i]);
            result += ((data[i] & 0xFF) << decalage) >>> 0;
            if (last > result && !signed) {
                throw new Error("Overflow. Last value: " + last + " but new is " + result);
            }
            last = result;
        }
        if (signed && (data[0] & 0x80) == 0x80) {
            result = -(Math.pow(2, (8 * size)) - result);
        }
        return result;
    };
    return NumberConverter;
}());
exports.NumberConverter = NumberConverter;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(20), __webpack_require__(21));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(131)
var ieee754 = __webpack_require__(132)
var isArray = __webpack_require__(133)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(130)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(17), __webpack_require__(97), __webpack_require__(98), __webpack_require__(11), __webpack_require__(12), __webpack_require__(20), __webpack_require__(40), __webpack_require__(99), __webpack_require__(41), __webpack_require__(100), __webpack_require__(101), __webpack_require__(102), __webpack_require__(21), __webpack_require__(103), __webpack_require__(10), __webpack_require__(4), __webpack_require__(104), __webpack_require__(105), __webpack_require__(106), __webpack_require__(107), __webpack_require__(108), __webpack_require__(109), __webpack_require__(110), __webpack_require__(111), __webpack_require__(112), __webpack_require__(113), __webpack_require__(114), __webpack_require__(115), __webpack_require__(116), __webpack_require__(117), __webpack_require__(118), __webpack_require__(119));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lwm2m_error_1 = __webpack_require__(128);
var result_code_translation_1 = __webpack_require__(46);
var ResponseError = /** @class */ (function (_super) {
    __extends(ResponseError, _super);
    function ResponseError(response) {
        var _this = _super.call(this, ResponseError.createErrorMessage(response)) || this;
        _this.response = response;
        return _this;
    }
    ResponseError.createErrorMessage = function (response) {
        var codeRet = response.codeRet();
        var errorExplained = (codeRet in result_code_translation_1.ResultCodeTranslation ? result_code_translation_1.ResultCodeTranslation[codeRet] : "an unknown error");
        return "Device responded with " + errorExplained + " (code=0x" + codeRet.toString(16) + ")";
    };
    return ResponseError;
}(lwm2m_error_1.LWM2MError));
exports.ResponseError = ResponseError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(86));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(126));
__export(__webpack_require__(26));
__export(__webpack_require__(55));
__export(__webpack_require__(135));
__export(__webpack_require__(56));
__export(__webpack_require__(145));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Header = /** @class */ (function () {
    function Header(objectId, objectInstance, resourceId, resourceInstance) {
        if (objectId === void 0) { objectId = 0xFFFF; }
        if (objectInstance === void 0) { objectInstance = 0xFFFF; }
        if (resourceId === void 0) { resourceId = 0xFFFF; }
        if (resourceInstance === void 0) { resourceInstance = undefined; }
        this.objectId = objectId;
        this.objectInstance = objectInstance;
        this.resourceId = resourceId;
        this.resourceInstance = resourceInstance;
    }
    Header.prototype.getObjectId = function () {
        return this.objectId;
    };
    Header.prototype.getObjectInstance = function () {
        return this.objectInstance;
    };
    Header.prototype.getResourceId = function () {
        return this.resourceId;
    };
    Header.prototype.getResourceInstance = function () {
        return this.resourceInstance;
    };
    Header.prototype.getPath = function () {
        return "/" + this.objectId + "/" + (this.objectInstance == 0xFFFF ? '' : this.objectInstance) + "/" + this.resourceId + (this.resourceInstance ? '/' + this.resourceInstance : '');
    };
    Header.prototype.toString = function () {
        return "Header{" +
            "objectId=" + this.objectId +
            ", objectInstance=" + this.objectInstance +
            ", resourceId=" + this.resourceId +
            '}';
    };
    Header.fromBytes = function (bytes) {
        var header = new Header();
        if (bytes.length != 6 && bytes.length != 8) {
            throw new Error("Invalid header size: " + bytes.length);
        }
        header.objectId = ((bytes[0] << 8) & 0xFFFF) + (bytes[1] & 0xFF);
        header.objectInstance = ((bytes[2] << 8) & 0xFFFF) + (bytes[3] & 0xFF);
        header.resourceId = ((bytes[4] << 8) & 0xFFFF) + (bytes[5] & 0xFF);
        header.objectId &= 0xFFFF;
        header.objectInstance &= 0xFFFF;
        header.resourceId &= 0xFFFF;
        if (bytes.length == 8) {
            header.resourceInstance = ((bytes[6] << 8) & 0xFFFF) + (bytes[7] & 0xFF);
            header.resourceInstance &= 0xFFFF;
        }
        return header;
    };
    Header.fromString = function (command) {
        if (command == null || command.length == 0) {
            throw new Error("Invalid command: null");
        }
        command = command.trim();
        var result = command.match(Header.PATH_EXPRESSION);
        if (!result || result.length === 0) {
            throw new Error("Invalid header \"" + command + "\". Format is invalid");
        }
        // console.log('=====>', result);
        var header = new Header(parseInt(result[1]), result[2] ? parseInt(result[2]) : 0xFFFF, parseInt(result[3]), result[4] ? parseInt(result[4]) : undefined);
        return header;
    };
    Header.PATH_EXPRESSION = /^\/?([0-9]+)\/([0-9]+)?\/([0-9]+)\/?([0-9]+)?$/;
    return Header;
}());
exports.Header = Header;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var request_1 = __webpack_require__(26);
var header_1 = __webpack_require__(24);
var IotizeLWM2MCommandConverter = /** @class */ (function () {
    function IotizeLWM2MCommandConverter() {
    }
    IotizeLWM2MCommandConverter.instance = function () {
        return new IotizeLWM2MCommandConverter();
    };
    IotizeLWM2MCommandConverter.prototype.decode = function (frame) {
        console.log("LWM2MCommandConverter decode " + core_1.FormatHelper.toHexString(frame));
        var cmd = frame[0];
        var headerBytes = frame.subarray(IotizeLWM2MCommandConverter.CMD_TYPE_LENGTH, IotizeLWM2MCommandConverter.IOTIZE_TRAME_HEADER_LENGTH);
        // console.log(`Header bytes: ${headerBytes}`);
        var path = header_1.Header.fromBytes(headerBytes).getPath();
        var body = frame.subarray(IotizeLWM2MCommandConverter.IOTIZE_TRAME_HEADER_LENGTH);
        return request_1.Command.create(cmd, path, body);
    };
    IotizeLWM2MCommandConverter.prototype.encode = function (command) {
        console.log("LWM2MCommandConverter encode " + command);
        var header = command.getHeader();
        var method = command.getMethod();
        // set the header
        var lg = 0;
        var lgDataIn = 0;
        var data = command.getData();
        if (data != null) {
            if (data.length >= IotizeLWM2MCommandConverter.IOTIZE_TRAME_MAX_SIZE) {
                throw new Error("Request max size"); // TODO
            }
            lgDataIn = data.length;
        }
        var dataTx = new Uint8Array(IotizeLWM2MCommandConverter.IOTIZE_TRAME_HEADER_LENGTH + lgDataIn + (header.resourceInstance ? 2 : 0));
        dataTx[lg++] = method;
        dataTx[lg++] = (header.objectId / 256);
        dataTx[lg++] = (header.objectId % 256);
        dataTx[lg++] = (header.objectInstance / 256);
        dataTx[lg++] = (header.objectInstance % 256);
        dataTx[lg++] = (header.resourceId / 256);
        dataTx[lg++] = (header.resourceId % 256);
        if (header.resourceInstance) {
            dataTx[lg++] = (header.resourceInstance / 256);
            dataTx[lg++] = (header.resourceInstance % 256);
        }
        if (data != null) {
            for (var i = 0; i < lgDataIn; i++, lg++) {
                dataTx[lg] = data[i];
            }
        }
        return dataTx;
    };
    IotizeLWM2MCommandConverter.CMD_TYPE_LENGTH = 1;
    IotizeLWM2MCommandConverter.IOTIZE_TRAME_HEADER_LENGTH = 7;
    IotizeLWM2MCommandConverter.IOTIZE_TRAME_MAX_SIZE = 256 - 6; // Lc = u8 legnth - 5 header bytes  - 1 byte "Le"
    return IotizeLWM2MCommandConverter;
}());
exports.IotizeLWM2MCommandConverter = IotizeLWM2MCommandConverter;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(52));
__export(__webpack_require__(24));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(6);
var SecureElementService = /** @class */ (function (_super) {
    __extends(SecureElementService, _super);
    function SecureElementService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
     *
     */
    SecureElementService.prototype.getConfigure = function () {
        return this._call({
            path: "/1024//70",
            methodType: "get"
        });
    };
    /**
     *
     */
    SecureElementService.prototype.putConfigure = function (conf) {
        return this._call({
            path: "/1024//70",
            methodType: "put",
            body: conf
        });
    };
    /**
     *
     */
    SecureElementService.prototype.getCom = function (data) {
        return this._call({
            path: "/1024//71",
            methodType: "get",
            body: data
        });
    };
    return SecureElementService;
}(import_adapter_1.AbstractService));
exports.SecureElementService = SecureElementService;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(163));
__export(__webpack_require__(165));
__export(__webpack_require__(166));
__export(__webpack_require__(167));
__export(__webpack_require__(168));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(19);
var rxjs_1 = __webpack_require__(14);
var AbstractComProtocol = /** @class */ (function () {
    function AbstractComProtocol() {
        this.connectionState = api_1.ConnectionState.DISCONNECTED;
        this._options = {
            connect: {
                timeout: 1000
            },
            disconnect: {
                timeout: 1000
            },
            send: {
                timeout: 500
            }
        };
    }
    Object.defineProperty(AbstractComProtocol.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComProtocol.prototype.getConnectionState = function () {
        return this.connectionState;
    };
    AbstractComProtocol.prototype.isConnected = function () {
        return this.connectionState == api_1.ConnectionState.CONNECTED;
    };
    AbstractComProtocol.prototype.setConnectionState = function (connectionState) {
        console.log('setConnectionState', connectionState, 'Old: ', this.connectionState);
        var event = {
            newState: connectionState,
            oldState: this.connectionState
        };
        this.connectionState = connectionState;
        if (this._connectionStateChange) {
            this._connectionStateChange.next(event);
        }
        return this;
    };
    /**
     * Must be implemented in childs
     */
    AbstractComProtocol.prototype.receiveStream = function () {
        throw new Error("Method not implemented.");
    };
    AbstractComProtocol.prototype.onConnectionStateChange = function () {
        if (!this._connectionStateChange) {
            this._connectionStateChange = new rxjs_1.Subject();
        }
        return this._connectionStateChange;
    };
    return AbstractComProtocol;
}());
exports.AbstractComProtocol = AbstractComProtocol;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BleConfig = {
    maxPacketLengthWithoutOffset: 19,
    services: {
        upgrade: {
            service: "9e5d1e47-5c13-43a0-8635-82ad38a1386f",
            charac: "347f7608-2e2d-47eb-913b-75d4edc4de3b"
        },
        lwm2m: {
            // // SPP over BLE Service UUID (128-bit)            
            service: "6c7b16c2-2a5b-8c9f-cf42-d31425470e7b",
            charac: "cc5c5491-b3be-9287-cb42-f7a6a29a50d5"
        },
        standardClientConfig: {
            service: "00002902-0000-1000-8000-00805f9b34fb"
        }
    }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checksum_1 = __webpack_require__(32);
/**
 * Created by IoTize on 19/04/2018.
 * <p>
 * Glue packet chunk to build the original ble packet
 * @param {number} bufferLength
 * @class
 */
var BLEPacketBuilder = /** @class */ (function () {
    function BLEPacketBuilder(bufferLength) {
        this.bufferOffset = 0;
        this.dataLength = 0;
        this.data = new Uint8Array(bufferLength);
        this.reset();
    }
    /**
     * Append new chunk of data into the builder
     * @param {Array} dataChunk the data chunk. The first byte must be the position offset of this chunk in the buffer (in bytes)
     */
    BLEPacketBuilder.prototype.append = function (dataChunk) {
        this.bufferOffset = (dataChunk[0] & 0xFF) - 1;
        if ((this.bufferOffset + dataChunk.length) >= this.data.length) {
            console.error("BLEPacketBuilder:append() buffer size exceeded");
            throw new Error("Buffer size exceeded");
        }
        for (var i = 1; i < dataChunk.length; i++) {
            this.data[this.bufferOffset + i] = dataChunk[i];
        }
        ;
        this.dataLength += dataChunk.length - 1;
    };
    BLEPacketBuilder.prototype.reset = function () {
        this.dataLength = 0;
        this.bufferOffset = 0;
    };
    BLEPacketBuilder.prototype.hasAllChunks = function () {
        return this.bufferOffset === -1;
    };
    BLEPacketBuilder.prototype.isChecksumValid = function () {
        var computedChecksum = this.getComputedChecksum();
        var expectedChecksum = this.getExpectedChecksum();
        return expectedChecksum === computedChecksum;
    };
    BLEPacketBuilder.prototype.assertValidChecksum = function () {
        if (!this.isChecksumValid()) {
            throw new Error("Invalid checksum. Found " + this.getComputedChecksum() + " but expected " + this.getExpectedChecksum());
        }
    };
    BLEPacketBuilder.prototype.getComputedChecksum = function () {
        return checksum_1.Checksum.compute(this.data.subarray(0, this.dataLength - 1)) & 0xFF;
    };
    BLEPacketBuilder.prototype.getExpectedChecksum = function () {
        return this.data[this.dataLength - 1];
    };
    /**
     * @return {Array} the result data without the checksum
     */
    BLEPacketBuilder.prototype.getData = function () {
        return this.data.slice(0, this.dataLength - 1);
        // let result: number[] = (s => { let a = []; while (s-- > 0) a.push(0); return a; })(this.dataLength - 1);
        // /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if (srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++]; } else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; } })(this.data, 0, result, 0, result.length);
        // return result;
    };
    /**
     * @return {Array} the buffer (with the checksum)
     */
    BLEPacketBuilder.prototype.getBuffer = function () {
        return this.data;
    };
    return BLEPacketBuilder;
}());
exports.BLEPacketBuilder = BLEPacketBuilder;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Checksum = /** @class */ (function () {
    function Checksum() {
    }
    Checksum.compute = function (data) {
        var computedChecksum = 0;
        ;
        for (var i = 0; i < data.length; i++) {
            computedChecksum = (computedChecksum + data[i]);
        }
        return computedChecksum;
    };
    return Checksum;
}());
exports.Checksum = Checksum;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_detection_1 = __webpack_require__(90);
/**
 * Created by IoTize on 19/04/2018.
 *
 * Split data into chunks with a size of maxPacketSize + 1
 * @param {Array} data
 * @param {number} maxPacketSize
 * @class
 */
var BLEPacketSplitter = /** @class */ (function () {
    /**
     *
     * @param data
     * @param maxPacketSize
     */
    function BLEPacketSplitter(data, maxPacketSize) {
        this.lastPacketSize = 0;
        this.maxPacketSize = 0;
        this.currentPacketIndex = 0;
        if (maxPacketSize < 1) {
            console.error("BLEPacketBuilder:append() Packet size must be greater than 0");
            throw new Error("Packet size must be greater than 0");
        }
        this.data = data;
        this.maxPacketSize = maxPacketSize;
        this.currentPacketIndex = this.getTotalNumberOfPacket() - 1;
        this.lastPacketSize = this.getLastPacketSize();
    }
    /**
     * Create a BLEPacketSplitter instance from data and add the checksum at the end
     * @param {Array} data body data
     * @param {number} maxPacketSize packet size
     * @return {BLEPacketSplitter} the new instance
     */
    BLEPacketSplitter.wrapWithChecksum = function (data, maxPacketSize) {
        var checkSum = BLEPacketSplitter.computeChecksum(data);
        var wrappedData = new Uint8Array(data.length + 1);
        wrappedData.set(data);
        wrappedData.set([checkSum & 0xFF], data.length);
        return new BLEPacketSplitter(wrappedData, maxPacketSize);
    };
    BLEPacketSplitter.prototype.getTotalNumberOfPacket = function () {
        return ((this.data.length / this.maxPacketSize | 0)) + (this.data.length % this.maxPacketSize === 0 ? 0 : 1);
    };
    BLEPacketSplitter.prototype.getLastPacketSize = function () {
        var result = this.data.length % this.maxPacketSize;
        if (result === 0) {
            result = this.maxPacketSize;
        }
        return result;
    };
    BLEPacketSplitter.prototype.getPackets = function () {
        var packets = [];
        while (this.hasNextPacket()) {
            packets.push(this.getNextPacket());
        }
        return packets;
    };
    BLEPacketSplitter.prototype.getNextPacket = function () {
        // console.log("BLEPacketSplitter:getNextPacket()");
        var packetSize;
        var offset;
        if (this.currentPacketIndex > 0) {
            offset = this.lastPacketSize + ((this.currentPacketIndex - 1) * this.maxPacketSize);
            packetSize = this.maxPacketSize;
        }
        else {
            offset = 0;
            packetSize = this.lastPacketSize;
        }
        var packet = new Uint8Array(packetSize + 1);
        packet[0] = (offset | 0);
        for (var i = 0; i < packetSize; i++) {
            packet[i + 1] = this.data[offset + i];
        }
        ;
        this.currentPacketIndex--;
        console.log("BLEPacketSplitter:getNextPacket() current index is now " + this.currentPacketIndex);
        return packet;
    };
    BLEPacketSplitter.prototype.hasNextPacket = function () {
        // console.log("BLEPacketSplitter:hasNextPacket()");
        return this.currentPacketIndex >= 0;
    };
    BLEPacketSplitter.computeChecksum = function (data) {
        return error_detection_1.Checksum.compute(data) & 0xFF;
    };
    BLEPacketSplitter.prototype.getTotalSize = function () {
        return this.data.length;
    };
    BLEPacketSplitter.prototype.getCurrentPacketNumber = function () {
        return this.getTotalNumberOfPacket() - this.currentPacketIndex;
    };
    BLEPacketSplitter.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return BLEPacketSplitter;
}());
exports.BLEPacketSplitter = BLEPacketSplitter;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_decoder_1 = __webpack_require__(9);
// import { crc32 } from "crc";
var CRC = /** @class */ (function () {
    function CRC() {
    }
    // public static default(data: Uint8Array){
    //     return crc32(data.buffer);
    // }
    CRC.fromBytes = function (data, polynomial) {
        if ((data.length % CRC.MODULO) != 0) {
            throw new Error("Input size must be a multiple of 4. Length is " + data.length + " % " + CRC.MODULO + " = " + (data.length % CRC.MODULO));
        }
        var uint32Data = new Uint32Array(data.length / 4);
        for (var offset = 0; offset < uint32Data.byteLength; offset++) {
            uint32Data[offset] = number_decoder_1.NumberConverter.fromOpaqueMsb(data.slice((offset * 4), (offset + 1) * 4), 32);
        }
        // console.log(uint32Data);
        return CRC.fromWord(uint32Data, polynomial);
    };
    //crc 32 calculation by word.
    CRC.fromWord = function (buffer, polynomial) {
        polynomial |= this.DEFAULT_POLYNOMIAL;
        //don't follow null pointers
        if (!buffer) {
            throw new Error("Buffer is null");
        }
        //don't accept buffers larger than 16MB
        if (buffer.byteLength > 16 * 1024 * 1024) {
            throw new Error("Buffers larger than 16MB");
        }
        var i;
        var myword;
        var crc;
        var length = buffer.length;
        // let remain: number = length/4;
        // const number * buf = ((const number *)(buffer));
        //don't accept length not multiple of 4
        // if ( length % 4 ){
        //     throw new Error("Not module 4");
        // }
        i = 0;
        crc = 0xFFFFFFFF;
        for (i = 0; i < length; i++) {
            myword = buffer[i]; // Get next word.
            crc = CRC._crc32(crc, myword, polynomial);
        }
        return crc;
    };
    CRC._crc32 = function (Crc, Data, polynomial) {
        Crc = Crc ^ Data;
        for (var i = 0; i < 32; i++) {
            if (Crc & 0x80000000) {
                Crc = ((Crc << 1) ^ polynomial) >>> 0; // Polynomial
                //Crc = (Crc << 1) ^ 0x04C11DB7; // Polynomial used in STM32
            }
            else {
                Crc = (Crc << 1) >>> 0;
            }
        }
        return (Crc);
    };
    CRC.DEFAULT_POLYNOMIAL = 0x4C11DB7;
    CRC.MODULO = 4;
    return CRC;
}());
exports.CRC = CRC;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidAPDUError = /** @class */ (function (_super) {
    __extends(InvalidAPDUError, _super);
    function InvalidAPDUError(message, apdu) {
        var _this = _super.call(this, message) || this;
        _this.apdu = apdu;
        return _this;
    }
    return InvalidAPDUError;
}(Error));
exports.InvalidAPDUError = InvalidAPDUError;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by IoTize on 09/03/
 *
 * Model representing an application protocol data unit
 */
var APDUCommand = /** @class */ (function () {
    function APDUCommand() {
        /**
         * Instruction class - indicates the type of command, e.g. interindustry or proprietary
         */
        this.CLA = 0;
        /**
         * Instruction code - indicates the specific command, e.g. "write data"
         */
        this.instructionCode = 0;
        /**
         * Instruction parameters for the command, e.g. offset into file at which to write the data
         */
        this.instructionParameter = Uint8Array.from([0, 0]);
        /**
         * Encodes the number (Nc) of bytes of command data to follow
         * 0 bytes denotes Nc=0
         * 1 byte with a value from 1 to 255 denotes Nc with the same value
         * 3 bytes, the first of which must be 0, denotes Nc in the range 1 to 65 535 (all three bytes may not be zero)
         */
        this.expectedResponseSize = new Uint8Array(0);
        /**
         * Nc bytes of data
         */
        this.data = new Uint8Array(0);
        /**
         * Encodes the maximum number (Ne) of response bytes expected
         * 0 bytes denotes Ne=0
         * 1 byte in the range 1 to 255 denotes that value of Ne, or 0 denotes Ne=256
         * 2 bytes (if extended Lc was present in the command) in the range 1 to 65 535 denotes Ne of that value, or two zero bytes denotes 65 536
         * 3 bytes (if Lc was not present in the command), the first of which must be 0, denote Ne in the same way as two-byte Le
         */
        this.sizeOfCommandInBytes = new Uint8Array(0);
    }
    APDUCommand.prototype.setCLA = function (CLA) {
        this.CLA = CLA;
        return this;
    };
    APDUCommand.prototype.setInstructionCode = function (instructionCode) {
        this.instructionCode = instructionCode;
        return this;
    };
    // public setInstructionParameter(data: number[]): this {
    //     this.instructionParameter = Uint8Array.from(data);
    //     return this;
    // }
    APDUCommand.prototype.setInstructionParameter = function (p1, p2) {
        this.instructionParameter = Uint8Array.from([p1, p2]);
        return this;
    };
    /**
     * Encodes the maximum number (Ne) of response bytes expected
     * - 0 bytes denotes Ne=0
     * - 1 byte in the range 1 to 255 denotes that value of Ne, or 0 denotes Ne=256
     * - 2 bytes (if extended Lc was present in the command) in the range 1 to 65 535 denotes Ne of that value, or two zero bytes denotes 65 536
     * - 3 bytes (if Lc was not present in the command), the first of which must be 0, denote Ne in the same way as two-byte Le
     *
     * @param expectedResponseSize
     * @return
     */
    APDUCommand.prototype.setExpectedResponseSize = function (expectedResponseSize) {
        if (expectedResponseSize <= 0) {
            this.expectedResponseSize = Uint8Array.from([]);
        }
        else if (expectedResponseSize >= 1 && expectedResponseSize < 255) {
            this.expectedResponseSize = Uint8Array.from([expectedResponseSize]);
        }
        else if (expectedResponseSize == 256) {
            this.expectedResponseSize = Uint8Array.from([0]);
        }
        else {
            throw new Error("Not implemented yet");
        }
        return this;
    };
    // public setExpectedResponseSize(expectedResponseSize: number[]) {
    //     if (expectedResponseSize.length > 3) {
    //         throw new Error("Invalid expected byte size");
    //     }
    //     this.expectedResponseSize = expectedResponseSize;
    //     return this;
    // }
    APDUCommand.prototype.setData = function (data) {
        this.data = data;
        var nbBytes = data != null ? data.length : 0;
        this.setSizeOfCommandInBytes(nbBytes);
        return this;
    };
    // public setSizeOfCommandInBytes(sizeOfCommandInBytes: number[]) {
    //     this.sizeOfCommandInBytes = sizeOfCommandInBytes;
    //     return this;
    // }
    /**
     * Encodes the number (Nc) of bytes of command data to follow
     * 0 bytes denotes Nc=0
     * 1 byte with a value from 1 to 255 denotes Nc with the same value
     * 3 bytes, the first of which must be 0, denotes Nc in the range 1 to 65 535 (all three bytes may not be zero)
     *
     * @param nbBytes
     */
    APDUCommand.prototype.setSizeOfCommandInBytes = function (nbBytes) {
        if (nbBytes == 0) {
            this.sizeOfCommandInBytes = new Uint8Array(0);
        }
        else if (nbBytes >= 1 && nbBytes <= 255) {
            this.sizeOfCommandInBytes = Uint8Array.from([nbBytes & 0xFF]);
        }
        else {
            var byteTwo = (nbBytes & 0xFF00 >> 8);
            var byteOne = (nbBytes & 0xFF);
            this.sizeOfCommandInBytes = Uint8Array.from([0, byteOne, byteTwo]);
        }
    };
    APDUCommand.prototype.getCLA = function () {
        return this.CLA;
    };
    APDUCommand.prototype.getInstructionCode = function () {
        return this.instructionCode;
    };
    APDUCommand.prototype.getParameters = function () {
        return this.instructionParameter;
    };
    APDUCommand.prototype.getSizeOfCommandInBytes = function () {
        return this.sizeOfCommandInBytes;
    };
    APDUCommand.prototype.getData = function () {
        return this.data;
    };
    APDUCommand.prototype.getExpectedResponseSize = function () {
        return this.expectedResponseSize;
    };
    APDUCommand.prototype.hasExpectedResponseSize = function () {
        return this.expectedResponseSize != null && this.expectedResponseSize.length > 0;
    };
    APDUCommand.CLA_LENGTH = 1;
    APDUCommand.INS_LENGTH = 1;
    APDUCommand.P1P2_LENGTH = 2;
    return APDUCommand;
}());
exports.APDUCommand = APDUCommand;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(38));
__export(__webpack_require__(95));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var format_helper_1 = __webpack_require__(7);
/**
 *
 * <p>
 * Model representing a response application protocol data unit (response APDU)
 */
var APDUResponse = /** @class */ (function () {
    function APDUResponse() {
        this.data = new Uint8Array(0);
        this.status = Uint8Array.from([0, 0]);
    }
    APDUResponse.prototype.getData = function () {
        return this.data;
    };
    APDUResponse.prototype.getStatus = function () {
        return this.status;
    };
    APDUResponse.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    APDUResponse.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    APDUResponse.prototype.statusEquals = function (status) {
        return status.length === 2 && this.status.length === 2 && status[0] == this.status[0] && status[1] == this.status[1];
    };
    APDUResponse.prototype.toString = function () {
        return "APDUResponse[data=" + format_helper_1.FormatHelper.toHexString(this.data) + "; status=" + format_helper_1.FormatHelper.toHexString(this.status) + "]";
    };
    return APDUResponse;
}());
exports.APDUResponse = APDUResponse;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __webpack_require__(16);
var ShaHasher = /** @class */ (function () {
    function ShaHasher(options) {
        this._options = options;
    }
    ShaHasher.prototype.hash = function (input) {
        return ShaHasher.hash(this._options.type, input, this._options.salt, this._options.iterations, this._options.keySize);
    };
    /**
     * Return the hash as a hexadecimal string
     * @param hashType
     * @param input
     * @param salt
     * @param iterations
     * @param keySize
     */
    ShaHasher.hash = function (hashType, input, salt, iterations, keySize) {
        var hasher = undefined;
        switch (hashType) {
            case 'sha1':
                hasher = crypto_js_1.algo.SHA1;
                break;
            case 'sha256':
                hasher = crypto_js_1.algo.SHA256;
                break;
            default:
                throw new Error("Not implemented hasher: " + hashType);
        }
        var key = crypto_js_1.PBKDF2(input, salt, {
            iterations: iterations,
            keySize: keySize / 8,
            hasher: hasher
        });
        // console.log(`KEY IS ${key} | ${key.toString(enc.Hex)} | ${key.toString(enc.Base64)}`);
        var result = key.toString(crypto_js_1.enc.Hex);
        // console.log(`KEY LENGTH ${result.length}/${keySize}`);
        return result;
    };
    return ShaHasher;
}());
exports.ShaHasher = ShaHasher;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(17));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __webpack_require__(16);
var core_1 = __webpack_require__(3);
var AesEcb128Converter = /** @class */ (function () {
    // _cipher?: Cipher;
    // _decipher?: Decipher;
    function AesEcb128Converter(options) {
        if (options) {
            this.setOptions(options);
        }
    }
    AesEcb128Converter.prototype.setOptions = function (value) {
        // console.log(`Setting options: `, value);
        this._options = value;
        // this._cipher = createCipheriv(AesEcb128Converter.ALGO, Buffer.from(this._options.key.buffer), this._options.iv);
        // this._decipher = createDecipheriv(AesEcb128Converter.ALGO, Buffer.from(this._options.key.buffer), this._options.iv);
        // this._decipher.setAutoPadding(false); // Mandatory apparently otherwise result is null...
    };
    Object.defineProperty(AesEcb128Converter.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    AesEcb128Converter.prototype.encode = function (data) {
        if (!this._options) {
            throw new Error("AES options has not been set yet");
        }
        var input = crypto_js_1.enc.Hex.parse(core_1.FormatHelper.toHexString(data));
        var key = crypto_js_1.enc.Hex.parse(this.options.key);
        var iv = crypto_js_1.enc.Hex.parse(this.options.iv);
        var encrypted = crypto_js_1.AES.encrypt(input, key, {
            iv: iv,
            mode: crypto_js_1.mode.CBC,
            padding: crypto_js_1.pad.NoPadding
        });
        var encryptedHexString = crypto_js_1.enc.Hex.stringify(encrypted.ciphertext);
        // console.log(`${encryptedHexString} (length=${encryptedHexString.length}. sizeof=${encryptedHexString.length/2} bytes)`);
        return core_1.FormatHelper.hexStringToBuffer(encryptedHexString);
    };
    AesEcb128Converter.prototype.decode = function (data) {
        if (!this._options) {
            throw new Error("AES options has not been set yet");
        }
        var input = crypto_js_1.enc.Hex.parse(core_1.FormatHelper.toHexString(data));
        // console.log(`INPUT ${input} (length=${input.length})`);
        var key = crypto_js_1.enc.Hex.parse(this.options.key);
        var iv = crypto_js_1.enc.Hex.parse(this.options.iv);
        var decrypted = crypto_js_1.AES.decrypt({
            ciphertext: input,
            salt: "",
            iv: iv,
        }, key, {
            iv: iv,
            mode: crypto_js_1.mode.CBC,
            padding: crypto_js_1.pad.NoPadding
        });
        var hexString = decrypted.toString(crypto_js_1.enc.Hex);
        // console.log(`OUTPUT ${hexString} (length=${hexString.length}. sizeof=${hexString.length/2} bytes)`);
        return core_1.FormatHelper.hexStringToBuffer(decrypted.toString(crypto_js_1.enc.Hex));
    };
    return AesEcb128Converter;
}());
exports.AesEcb128Converter = AesEcb128Converter;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(19);
var rxjs_1 = __webpack_require__(14);
var abstract_com_protocol_1 = __webpack_require__(29);
var job_queue_1 = __webpack_require__(120);
// import { _throw } from "rxjs/observable/throw";
var observable_helper_1 = __webpack_require__(122);
var format_helper_1 = __webpack_require__(7);
// import "rxjs/observable/throw";
/**
 *
 */
var QueueComProtocol = /** @class */ (function (_super) {
    __extends(QueueComProtocol, _super);
    function QueueComProtocol() {
        var _this = _super.call(this) || this;
        _this._queue = new job_queue_1.JobQueue();
        return _this;
    }
    QueueComProtocol.prototype._send = function (data, options) {
        var _this = this;
        console.log('QueueComProtocol', '_send()', '-------------------------');
        if (!this.isConnected()) {
            return rxjs_1.from(Promise.reject(new Error("Device is not connected")));
        }
        return rxjs_1.from(this
            .write(data)
            .then(function () {
            return _this.read();
        }));
    };
    /**
     *
     * @param data
     * @param options
     */
    QueueComProtocol.prototype.send = function (data, options) {
        var _this = this;
        console.log("QueueComProtocol", "::send() ENQUEUE request " + format_helper_1.FormatHelper.toHexString(data) + ". Queue position: " + this._queue.size);
        if (true) {
            data = data.slice(0);
        }
        var observable = this._enqueue(function () {
            console.log("QueueComProtocol", "::send() EXECUTE request " + format_helper_1.FormatHelper.toHexString(data) + " ");
            return observable_helper_1.ObservableHelper.timeout(_this._send(data, options), options ? options.timeout : _this._options.send.timeout);
        });
        return observable;
    };
    QueueComProtocol.prototype._enqueue = function (startJob) {
        return this._queue.add(startJob);
    };
    /**
     * Connect with timeout
     *
     * If connect has already been called or is in progress / no further action
     *
     * @param options
     */
    QueueComProtocol.prototype.connect = function (options) {
        var _this = this;
        if (this.connectionState === api_1.ConnectionState.CONNECTED) {
            console.warn("QueueComProtocol is already connected");
            return rxjs_1.of(null);
        }
        if (this.connectionState == api_1.ConnectionState.CONNECTING) {
            return this._connect$;
        }
        this._connect$ = observable_helper_1.ObservableHelper.timeout(this._connect(options), options ? options.timeout : this._options.connect.timeout);
        this.setConnectionState(api_1.ConnectionState.CONNECTING);
        this._connectionSubscription = this._connect$.subscribe(function () {
            _this.setConnectionState(api_1.ConnectionState.CONNECTED);
        }, function (error) {
            _this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
        });
        return this._connect$;
    };
    QueueComProtocol.prototype.disconnect = function (options) {
        var _this = this;
        if (this.connectionState === api_1.ConnectionState.DISCONNECTED) {
            return rxjs_1.of(null);
        }
        if (this.connectionState == api_1.ConnectionState.DISCONNECTING) {
            return this._disconnect$;
        }
        this._connect$ = null;
        this._disconnect$ = observable_helper_1.ObservableHelper.timeout(this._disconnect(options), options ? options.timeout : this._options.disconnect.timeout);
        this.setConnectionState(api_1.ConnectionState.DISCONNECTING);
        this._disconnect$.subscribe(function () {
            _this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
        }, function (error) {
            _this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
        });
        return this._disconnect$;
    };
    return QueueComProtocol;
}(abstract_com_protocol_1.AbstractComProtocol));
exports.QueueComProtocol = QueueComProtocol;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Api = __webpack_require__(123);
exports.Api = Api;
var Impl = __webpack_require__(23);
exports.Impl = Impl;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResultCode = /** @class */ (function () {
    function ResultCode() {
    }
    /**
     * NO_ERROR
     * Hex: 0. Decimal: 0
     */
    ResultCode.IOTIZE_200_NO_ERROR = 0x0;
    /**
     * PENDING
     * Hex: 1. Decimal: 1
     */
    ResultCode.IOTIZE_PENDING = 0x1;
    /**
     * CREATED
     * Hex: 41. Decimal: 65
     */
    ResultCode.IOTIZE_201_CREATED = 0x41;
    /**
     * DELETED
     * Hex: 42. Decimal: 66
     */
    ResultCode.IOTIZE_202_DELETED = 0x42;
    /**
     * CHANGED
     * Hex: 44. Decimal: 68
     */
    ResultCode.IOTIZE_204_CHANGED = 0x44;
    /**
     * CONTENT
     * Hex: 45. Decimal: 69
     */
    ResultCode.IOTIZE_205_CONTENT = 0x45;
    /**
     * BUSY
     * Hex: 46. Decimal: 70
     */
    ResultCode.IOTIZE_206_BUSY = 0x46;
    /**
     * BAD_REQUEST
     * Hex: 80. Decimal: 128
     */
    ResultCode.IOTIZE_400_BAD_REQUEST = 0x80;
    /**
     *
     * Hex: 81. Decimal: 129
     */
    ResultCode.IOTIZE_401_UNAUTHORIZED = 0x81;
    /**
     *
     * Hex: 84. Decimal: 132
     */
    ResultCode.IOTIZE_404_NOT_FOUND = 0x84;
    /**
     *
     * Hex: 85. Decimal: 133
     */
    ResultCode.IOTIZE_405_METHOD_NOT_ALLOWED = 0x85;
    /**
     *
     * Hex: 86. Decimal: 134
     */
    ResultCode.IOTIZE_406_NOT_ACCEPTABLE = 0x86;
    /**
     *
     * Hex: a0. Decimal: 160
     */
    ResultCode.IOTIZE_500_INTERNAL_SERVER_ERROR = 0xa0;
    /**
     * This resource has not been implemented yet
     * Hex: a1. Decimal: 161
     */
    ResultCode.IOTIZE_501_NOT_IMPLEMENTED = 0xa1;
    /**
     *
     * Hex: a3. Decimal: 163
     */
    ResultCode.IOTIZE_503_SERVICE_UNAVAILABLE = 0xa3;
    /**
     *
     * Hex: a4. Decimal: 164
     */
    ResultCode.IOTIZE_504_NVM_ERROR = 0xa4;
    /**
     *
     * Hex: a5. Decimal: 165
     */
    ResultCode.IOTIZE_505_UNABLE_TO_CONNECT_TO_TARGET = 0xa5;
    /**
     *
     * Hex: a6. Decimal: 166
     */
    ResultCode.IOTIZE_506_TARGET_POWER_FAILURE = 0xa6;
    /**
     *
     * Hex: a7. Decimal: 167
     */
    ResultCode.IOTIZE_507_NVM_FUL = 0xa7;
    /**
     *
     * Hex: b0. Decimal: 176
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_ERROR = 0xb0;
    /**
     *
     * Hex: b1. Decimal: 177
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_BUSY = 0xb1;
    /**
     *
     * Hex: b2. Decimal: 178
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_REAL = 0xb2;
    /**
     *
     * Hex: b3. Decimal: 179
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_WRONG_PARAM = 0xb3;
    /**
     *
     * Hex: b4. Decimal: 180
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_FORBIDDEN = 0xb4;
    /**
     *
     * Hex: b5. Decimal: 181
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_DATA = 0xb5;
    /**
     *
     * Hex: b6. Decimal: 182
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_COM = 0xb6;
    /**
     *
     * Hex: b7. Decimal: 183
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_LOST_COM = 0xb7;
    /**
     *
     * Hex: b8. Decimal: 184
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_PARAM = 0xb8;
    /**
     *
     * Hex: b9. Decimal: 185
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_INT = 0xb9;
    /**
     *
     * Hex: ba. Decimal: 186
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_ABORT = 0xba;
    /**
     *
     * Hex: bb. Decimal: 187
     */
    ResultCode.IOTIZE_TARGET_PROTOCOL_NOT_IMPLEMENTED = 0xbb;
    return ResultCode;
}());
exports.ResultCode = ResultCode;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultCodeTranslation = {
    0: "No error",
    1: "PENDING",
    65: "CREATED",
    66: "DELETED",
    68: "CHANGED",
    69: "CONTENT",
    70: "BUSY",
    128: "Bad request. Meaning device cannot understand your request.",
    129: "UNAUTHORIZED",
    132: "NOT_FOUND",
    133: "METHOD_NOT_ALLOWED",
    134: "NOT_ACCEPTABLE",
    160: "INTERNAL_SERVER_ERROR",
    161: "This resource has not been implemented yet",
    163: "SERVICE_UNAVAILABLE",
    164: "NVM_ERROR",
    165: "UNABLE_TO_CONNECT_TO_TARGET",
    166: "TARGET_POWER_FAILURE",
    167: "NVM_FUL",
    176: "TARGET_PROTOCOL_ERROR",
    177: "TARGET_PROTOCOL_BUSY",
    178: "TARGET_PROTOCOL_REAL",
    179: "TARGET_PROTOCOL_WRONG_PARAM",
    180: "TARGET_PROTOCOL_FORBIDDEN",
    181: "TARGET_PROTOCOL_DATA",
    182: "TARGET_PROTOCOL_COM",
    183: "TARGET_PROTOCOL_LOST_COM",
    184: "TARGET_PROTOCOL_PARAM",
    185: "TARGET_PROTOCOL_INT",
    186: "TARGET_PROTOCOL_ABORT",
    187: "TARGET_PROTOCOL_NOT_IMPLEMENTED"
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(48));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MethodType;
(function (MethodType) {
    MethodType[MethodType["GET"] = 1] = "GET";
    MethodType[MethodType["POST"] = 2] = "POST";
    MethodType[MethodType["PUT"] = 3] = "PUT";
    MethodType[MethodType["DELETE"] = 4] = "DELETE";
})(MethodType = exports.MethodType || (exports.MethodType = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(50));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SinglePacket;
(function (SinglePacket) {
    SinglePacket.PACKET_HEADER_SIZE = 22 + 4;
    var Type;
    (function (Type) {
        Type[Type["ACKNOWLEDGE"] = 1] = "ACKNOWLEDGE";
        Type[Type["CIPHERED"] = 2] = "CIPHERED";
    })(Type = SinglePacket.Type || (SinglePacket.Type = {}));
    var ErrorCode;
    (function (ErrorCode) {
        ErrorCode[ErrorCode["PACKET_TOO_SMALL"] = 1] = "PACKET_TOO_SMALL";
    })(ErrorCode = SinglePacket.ErrorCode || (SinglePacket.ErrorCode = {}));
    var PacketTooSmallError = /** @class */ (function (_super) {
        __extends(PacketTooSmallError, _super);
        function PacketTooSmallError(buffer, singlePacket) {
            var _this = _super.call(this, "SinglePacket is too small. Size must be at least " + (SinglePacket.PACKET_HEADER_SIZE + (singlePacket.DataSize ? singlePacket.DataSize : 0)) + " but current length is " + buffer.length) || this;
            _this.code = ErrorCode.PACKET_TOO_SMALL;
            return _this;
        }
        return PacketTooSmallError;
    }(Error));
    SinglePacket.PacketTooSmallError = PacketTooSmallError;
})(SinglePacket = exports.SinglePacket || (exports.SinglePacket = {}));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var result_code_1 = __webpack_require__(45);
var core_1 = __webpack_require__(3);
var response_error_1 = __webpack_require__(18);
var Response = /** @class */ (function () {
    function Response(data) {
        this.data = data;
        this._body = undefined;
    }
    Response.SUCCESS = function (data) {
        return Response.create(result_code_1.ResultCode.IOTIZE_200_NO_ERROR, data);
    };
    Response.ERROR = function (errorCode) {
        errorCode = errorCode || result_code_1.ResultCode.IOTIZE_400_BAD_REQUEST;
        return Response.create(errorCode);
    };
    Response.create = function (codeRet, data) {
        if (data && data.length > 0) {
            // console.log("DATA => ", data);
            // console.log(" LENGTH => ", data.length, " = > ", data.byteLength);
            var frame = new Uint8Array(1 + data.length);
            // console.log(" Tram => ", trame.length);
            frame[0] = codeRet;
            frame.set(data, 1);
            var response = new Response(frame);
            return response;
        }
        else {
            return new Response(Uint8Array.from([codeRet]));
        }
    };
    Response.prototype.body = function (decoder) {
        if (!this.isSuccess()) {
            throw new response_error_1.ResponseError(this);
        }
        if (decoder) {
            return decoder.decode(this.rawBody());
        }
        else if (!this._body) {
            console.log("NO BODY DEFINED. Decoder: ", this.decoder);
            if (this.decoder) {
                // console.log("Decoding response with ", this.decoder);
                this._body = this.decoder.decode(this.rawBody());
            }
            else {
                this._body = this.rawBody();
            }
        }
        return this._body;
    };
    Response.prototype.rawBody = function () {
        if (this.data != null && this.data.length > 1) {
            return this.data.slice(1);
        }
        else {
            return null;
        }
    };
    Response.prototype.setBodyDecoder = function (decoder) {
        // console.log(`SET DECODER`, decoder);
        this.decoder = decoder;
        return this;
    };
    Response.prototype.hasBody = function () {
        return this.rawBody() != null;
    };
    Response.prototype.codeRet = function () {
        return this.data[0];
    };
    Response.prototype.toString = function () {
        return "ResponseMessage[codeRet=\"" + this.codeRet() + "\";data=\"" + (this.hasBody() ? core_1.FormatHelper.toHexString(this.rawBody()) : "NO DATA") + "\";decoder=" + (this.decoder ? this.decoder.constructor.name : "NONE") + "]";
    };
    Response.prototype.toBytes = function () {
        return this.data;
    };
    Response.prototype.setBody = function (body) {
        this._body = body;
    };
    Response.prototype.isSuccess = function () {
        return (this.codeRet() & 0x80) == 0;
    };
    Response.prototype.isSuccessful = function () {
        return (this.codeRet() & 0x80) == 0;
    };
    return Response;
}());
exports.Response = Response;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var method_type_1 = __webpack_require__(48);
var header_1 = __webpack_require__(24);
var core_1 = __webpack_require__(3);
var Command = /** @class */ (function () {
    function Command(method, Cmd, data) {
        // if (Cmd != null) {
        //     // Check if getVar/setVar with only variable index
        //     if (Cmd.indexOf('/') == -1) {
        //         if (method == MethodType.GET)
        //             Cmd = Header.ID_OBJ_VAR + Cmd + Header.ID_VAR_VALUE_READ;
        //         else
        //             Cmd = Header.ID_OBJ_VAR + Cmd + Header.ID_VAR_VALUE_WRITE;
        //     }
        // }
        this.method = method;
        this.commandUrl = Cmd;
        this.data = data || new Uint8Array(0);
    }
    Command.prototype.getCommandUrl = function () {
        return this.commandUrl;
    };
    Command.prototype.setCommandUrl = function (commandUrl) {
        this.commandUrl = commandUrl;
        return this;
    };
    Command.prototype.getHeader = function () {
        return header_1.Header.fromString(this.commandUrl);
    };
    Command.prototype.setHeader = function (id) {
        this.commandUrl = id;
    };
    Command.prototype.setMethod = function (type) {
        this.method = type;
    };
    Command.prototype.getMethod = function () {
        return this.method;
    };
    Command.prototype.getData = function () {
        return this.data ? this.data : new Uint8Array(0);
    };
    Command.prototype.setData = function (data) {
        this.data = data;
    };
    Command.prototype.hasData = function () {
        return this.data != null && this.data.length > 0;
    };
    Command.prototype.toString = function () {
        return this.method.toString() + " " + this.commandUrl + " " + (this.data ? core_1.FormatHelper.toHexString(this.data) : "");
    };
    Command.GET = function (header, data) {
        var requestMessage = new Command(method_type_1.MethodType.GET, header, data);
        return requestMessage;
    };
    Command.PUT = function (header, body) {
        var requestMessage = new Command(method_type_1.MethodType.PUT, header, body);
        return requestMessage;
    };
    Command.POST = function (header, body) {
        var requestMessage = new Command(method_type_1.MethodType.POST, header, body);
        return requestMessage;
    };
    Command.create = function (from, header, data) {
        return new Command(from, header, data);
    };
    Command.TAG = "CommandMessage";
    return Command;
}());
exports.Command = Command;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var request_1 = __webpack_require__(47);
var lwm2m_command_converter_1 = __webpack_require__(25);
var format_helper_1 = __webpack_require__(7);
var DefaultCommandEncoder = /** @class */ (function () {
    function DefaultCommandEncoder() {
        this.apduCommandConverter = new core_1.APDU.Command.APDUCommandConverter();
        this.iotizeCommandConverter = new lwm2m_command_converter_1.IotizeLWM2MCommandConverter();
    }
    DefaultCommandEncoder.instance = function () {
        return new DefaultCommandEncoder();
    };
    DefaultCommandEncoder.prototype.encode = function (request) {
        var iotizeTram = this.encodeAsIoTizeTrame(request);
        return this.encodeAsAPDU(request, iotizeTram);
    };
    DefaultCommandEncoder.prototype.encodeAsAPDU = function (request, iotizeFrame) {
        var command = new core_1.APDU.Command.APDUCommand();
        command.setCLA(DefaultCommandEncoder.IOTIZE_CLA);
        switch (request.getMethod()) {
            case request_1.MethodType.GET:
                command.setInstructionCode(DefaultCommandEncoder.IOTIZE_INSTRUCTION_CODE_GET);
                break;
            case request_1.MethodType.POST:
            case request_1.MethodType.PUT:
            default:
                command.setInstructionCode(DefaultCommandEncoder.IOTIZE_INSTRUCTION_CODE_PUT);
        }
        command.setData(iotizeFrame);
        var apduResponse = this.apduCommandConverter.encode(command);
        console.log("DefaultCommandEncoder", "Encoding request " + request + " -> " + format_helper_1.FormatHelper.toHexString(apduResponse));
        return apduResponse;
    };
    DefaultCommandEncoder.prototype.encodeAsIoTizeTrame = function (command) {
        return this.iotizeCommandConverter.encode(command); // TODO fix
        // var header = command.getHeader();
        // var IdObj = header.getObjectId();
        // var IdInstObj = header.getObjectInstance();
        // var IdRes = header.getResourceId();
        // var method = command.getMethod();
        // // set the header
        // var lg = 0;
        // var lgDataIn = 0;
        // var data = command.getData();
        // if (data != null) {
        //     if (data.length >= DefaultCommandEncoder.IOTIZE_TRAME_MAX_SIZE) {
        //         throw new Error("Request max size"); // TODO
        //     }
        //     lgDataIn = data.length;
        // }
        // var dataTx = new Uint8Array(7 + lgDataIn);
        // dataTx[lg++] = method;
        // dataTx[lg++] = (IdObj / 256);
        // dataTx[lg++] = (IdObj % 256);
        // dataTx[lg++] = (IdInstObj / 256);
        // dataTx[lg++] = (IdInstObj % 256);
        // dataTx[lg++] = (IdRes / 256);
        // dataTx[lg++] = (IdRes % 256);
        // if (data != null) {
        //     for (var i = 0; i < lgDataIn; i++ , lg++) {
        //         dataTx[lg] = data[i];
        //     }
        // }
        // return dataTx;
    };
    // TODO max size is different according to the protocol
    // @see documentation
    DefaultCommandEncoder.IOTIZE_TRAME_MAX_SIZE = 256 - 6; // Lc = u8 legnth - 5 header bytes  - 1 byte "Le"
    DefaultCommandEncoder.TAG = "DefaultCommandEncoder";
    DefaultCommandEncoder.IOTIZE_CLA = 0xA2;
    DefaultCommandEncoder.IOTIZE_INSTRUCTION_CODE_GET = 0xCA;
    DefaultCommandEncoder.IOTIZE_INSTRUCTION_CODE_PUT = 0xDA;
    return DefaultCommandEncoder;
}());
exports.DefaultCommandEncoder = DefaultCommandEncoder;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = __webpack_require__(55);
var core_1 = __webpack_require__(3);
/**
 * Created by Stephane on 02/02/2018.
 */
var DefaultResponseDecoder = /** @class */ (function () {
    function DefaultResponseDecoder() {
        this.apduDecoder = new core_1.APDU.Response.APDUResponseConverter();
    }
    DefaultResponseDecoder.prototype.decode = function (data) {
        var apduResponse = this.apduDecoder.decode(data);
        //        Log.d(TAG, "APDU status: " + Helper.ByteArrayToHexString(apduStatus));
        //        Log.d(TAG, "Expected: " + Helper.ByteArrayToHexString(APDUStatusCode.SUCCESSFUL));
        if (apduResponse.statusEquals(core_1.APDU.APDUStatusCode.SUCCESSFUL)) {
            var payload = apduResponse.getData();
            var response = new response_1.Response(payload);
            return response;
        }
        else {
            // console.log("APDU SUCCESS CODE = " + FormatHelper.toHexString(APDU.APDUStatusCode.SUCCESSFUL));
            throw new Error("Invalid apdu error code: " + core_1.FormatHelper.toHexString(apduResponse.getStatus()) + ". (full =" + core_1.FormatHelper.toHexString(data) + ")");
        }
    };
    return DefaultResponseDecoder;
}());
exports.DefaultResponseDecoder = DefaultResponseDecoder;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(51));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(54));
__export(__webpack_require__(142));
__export(__webpack_require__(143));
__export(__webpack_require__(53));
__export(__webpack_require__(60));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var multiple_mask_decoder_1 = __webpack_require__(58);
var number_decoder_1 = __webpack_require__(9);
/**
 * TODO improv it . We don't know the size of input buffer...
 */
var UniqMaskConverter = /** @class */ (function () {
    // protected _reverseMapping: { [key: number]: OutputType };
    function UniqMaskConverter(mapping) {
        this._mapping = mapping;
    }
    UniqMaskConverter.prototype.decode = function (body) {
        return UniqMaskConverter.decodeOne(body, this._mapping);
    };
    UniqMaskConverter.prototype.encode = function (value) {
        return UniqMaskConverter.encodeOneAsBuffer(value, this._mapping);
    };
    UniqMaskConverter.decodeOneExact = function (data, mapping) {
        if (typeof data !== "number") {
            data = number_decoder_1.NumberConverter.fromOpaqueMsb(data);
        }
        for (var key in mapping) {
            var mask = parseInt(key);
            if (data == mask) {
                return mapping[mask];
            }
        }
        throw new Error("Cannot decode " + (typeof data === "number" ? 'number ' + data : '0x' + core_1.FormatHelper.toHexString(data)) + ". Available keys are " + Object.keys(mapping));
    };
    UniqMaskConverter.decodeOne = function (data, mapping) {
        // console.log('decodeOne', data);
        var results = multiple_mask_decoder_1.MultipleMaskConverter.decodeAll(data, mapping);
        if (results.length == 0) {
            throw new Error("Cannot decode value " + (typeof data === "number" ? data : '0x' + core_1.FormatHelper.toHexString(data)) + ". Available keys are " + Object.keys(mapping));
        }
        else if (results.length > 1) {
            console.warn("Multiple result for data : ", results, data, mapping);
        }
        return results[0];
    };
    UniqMaskConverter.encodeOneAsNumber = function (data, mapping) {
        var swappedMap = UniqMaskConverter.swapKeyValue(mapping);
        var dataAsString = data.toString();
        if (!(dataAsString in swappedMap)) {
            throw new Error("Key " + dataAsString + " does not exist in mapping. Available keys are " + Object.keys(swappedMap));
        }
        return parseInt(swappedMap[dataAsString]);
    };
    UniqMaskConverter.encodeOneAsBuffer = function (data, mapping) {
        var result = new Uint8Array(1); // TODO change according to conf
        var encodedValue = UniqMaskConverter.encodeOneAsNumber(data, mapping);
        result[0] = encodedValue & 0xFF;
        // console.log('encodeOneAsBuffer', data, ' => ', result);
        return result;
    };
    UniqMaskConverter.swapKeyValue = function (input) {
        var ret = {};
        for (var key in input) {
            ret[input[key]] = key;
        }
        return ret;
    };
    return UniqMaskConverter;
}());
exports.UniqMaskConverter = UniqMaskConverter;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(59);
var number_decoder_1 = __webpack_require__(9);
var MultipleMaskConverter = /** @class */ (function () {
    // protected static _instance: UniqMaskDecoder;
    function MultipleMaskConverter(mapping) {
        this._mapping = mapping;
        // this._mapping[0x00] = (null as any as OutputType);
        // this._mapping[0x01] = (null as any as OutputType);
    }
    MultipleMaskConverter.prototype.decode = function (body) {
        return MultipleMaskConverter.decodeAll(body, this._mapping);
    };
    /**
     * TODO check that not use more than the first 7 bits
     * @param types
     */
    MultipleMaskConverter.prototype.encode = function (types) {
        return MultipleMaskConverter.encodeAll(types, this._mapping);
    };
    MultipleMaskConverter.encodeAll = function (values, mapping) {
        var _reverseMapping = helper_1.Helper.swapMap(mapping);
        var result = 0x0;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var type = values_1[_i];
            if (type in _reverseMapping) {
                var mask = parseInt(_reverseMapping[type]);
                result = result | mask;
            }
        }
        return Uint8Array.from([result & 0xFF]);
    };
    MultipleMaskConverter.decodeAll = function (value, mapping) {
        var results = [];
        // console.log(`MultipleMaskDecodder::decodeAll`, value, mapping);
        if (typeof value !== "number") {
            value = number_decoder_1.NumberConverter.fromOpaqueMsb(value, Math.min(value.length * 8, 32));
        }
        for (var key in mapping) {
            var mask = parseInt(key);
            if (mask == 0 && value == 0) {
                results.push(mapping[mask]);
            }
            else if ((mask & value) != 0) {
                results.push(mapping[mask]);
            }
        }
        return results;
    };
    return MultipleMaskConverter;
}());
exports.MultipleMaskConverter = MultipleMaskConverter;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.swapMap = function (val) {
        var ret = {};
        for (var key in val) {
            ret[val[key]] = key;
        }
        return ret;
    };
    return Helper;
}());
exports.Helper = Helper;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var tlv_1 = __webpack_require__(144);
var TLVConverter = /** @class */ (function () {
    function TLVConverter() {
        this.serializer = new tlv_1.TLV.Serializer();
        this.parser = new tlv_1.TLV.Parser();
    }
    TLVConverter.prototype.encode = function (data) {
        return this.serializer.serialize(data); // TODO 
    };
    TLVConverter.prototype.decode = function (data) {
        var tlvTree = this.parser.parse(Buffer.from(data)); // TODO 
        return tlvTree;
    };
    return TLVConverter;
}());
exports.TLVConverter = TLVConverter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var DefaultVariableMonitor = /** @class */ (function () {
    function DefaultVariableMonitor(updater) {
        this._options = {};
        this._updater = updater;
    }
    DefaultVariableMonitor.prototype.start = function (options) {
        var _this = this;
        if (this._interval) {
            console.warn("Variable monitor is already started");
            return this;
        }
        var period = options ? options.period || DefaultVariableMonitor.DEFAULT_PERIOD : DefaultVariableMonitor.DEFAULT_PERIOD;
        this._interval = rxjs_1.interval(period);
        if (!this._values) {
            this._values = new rxjs_1.Subject();
        }
        this._intervalSubscription = this._interval
            .subscribe(function (x) {
            _this.fetchNewValue(x);
        });
        this._emit('START');
        return this;
    };
    DefaultVariableMonitor.prototype.isStarted = function () {
        return !!this._intervalSubscription;
    };
    DefaultVariableMonitor.prototype.pause = function () {
        if (!this._intervalSubscription) {
            return this;
        }
        this._intervalSubscription.unsubscribe();
        this._interval = undefined;
        this._emit('PAUSE');
        return this;
    };
    DefaultVariableMonitor.prototype.stop = function () {
        this.pause();
        this._emit('STOP');
        if (this._values) {
            this._values.complete();
            this._values = undefined;
        }
        if (this._events) {
            this._events.complete();
            this._events = undefined;
        }
        this._previousValue = undefined;
        return this;
    };
    DefaultVariableMonitor.prototype.values = function () {
        if (!this._values) {
            this._values = new rxjs_1.Subject();
        }
        return this._values;
    };
    DefaultVariableMonitor.prototype.events = function () {
        if (!this._events) {
            this._events = new rxjs_1.Subject();
        }
        return this._events;
    };
    DefaultVariableMonitor.prototype.notifyNewValue = function (data) {
        if (!this.isStarted()) {
            return;
        }
        if (this._options.forceChange || this.valueHasChanged(data)) {
            this._previousValue = data;
            this._values.next(data);
            this._events.next({
                type: 'READ_SUCCESS',
                payload: data
            });
        }
    };
    DefaultVariableMonitor.prototype.fetchNewValue = function (count) {
        var _this = this;
        console.log('DefaultVariableMonitor', 'fetchNewValue', "Count=" + count); //. Updated fct=${this._updater.update}`)
        var promise = this
            ._updater.update(count);
        return promise
            .then(function (newValue) {
            _this.notifyNewValue(newValue);
        })
            .catch(function (error) {
            _this.notifyValueError(error);
        });
    };
    DefaultVariableMonitor.prototype.notifyValueError = function (error) {
        console.log("DefaultVariableMonitor", 'notifyValueError', error);
        if (!this.isStarted()) {
            return;
        }
        //this._values!.error(error);
        this._events.next({
            type: 'READ_ERROR',
            payload: error
        });
    };
    DefaultVariableMonitor.prototype.valueHasChanged = function (newValue) {
        console.log("DefaultVariableMonitor", 'valueHasChanged', newValue, this._previousValue);
        return this._previousValue === undefined || this._previousValue != newValue;
    };
    DefaultVariableMonitor.prototype._emit = function (type) {
        if (!this._events) {
            this._events = new rxjs_1.Subject();
        }
        this._events.next({
            type: type,
            payload: undefined
        });
    };
    DefaultVariableMonitor.DEFAULT_PERIOD = 300;
    return DefaultVariableMonitor;
}());
exports.DefaultVariableMonitor = DefaultVariableMonitor;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sha_hasher_1 = __webpack_require__(39);
var crypto_js_1 = __webpack_require__(16);
var byte_buffer_1 = __webpack_require__(5);
var format_1 = __webpack_require__(15);
var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    CryptoHelper.sanitizeInput = function (input) {
        if (input instanceof Uint8Array) {
            return CryptoHelper.byteArrayToWordArray(input);
        }
        else {
            return input;
        }
    };
    CryptoHelper.byteArrayToWordArray = function (ba) {
        var wa = [], i;
        for (i = 0; i < ba.length; i++) {
            wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
        }
        var result = crypto_js_1.lib.WordArray.create(wa);
        result.sigBytes = ba.length;
        return result;
    };
    CryptoHelper.getAlgoImpl = function (type) {
        switch (type) {
            case 'sha1':
                return crypto_js_1.algo.SHA1;
            case 'sha256':
                return crypto_js_1.algo.SHA256;
            default:
                throw new Error('Unknown algo type: ' + type);
        }
    };
    CryptoHelper.wordToByteArray = function (word, length) {
        var ba = [], i, xFF = 0xFF;
        if (length > 0)
            ba.push(word >>> 24);
        if (length > 1)
            ba.push((word >>> 16) & xFF);
        if (length > 2)
            ba.push((word >>> 8) & xFF);
        if (length > 3)
            ba.push(word & xFF);
        return Uint8Array.from(ba);
    };
    CryptoHelper.libWordArrayToByteArray = function (libWordArray, length) {
        if (!length) {
            length = libWordArray.sigBytes;
        }
        var wordArray = libWordArray.words;
        var result = [], bytes, i = 0;
        while (length > 0) {
            bytes = CryptoHelper.wordToByteArray(wordArray[i], Math.min(4, length));
            length -= bytes.length;
            result.push(bytes);
            i++;
        }
        return byte_buffer_1.ByteBuffer.merge.apply(byte_buffer_1.ByteBuffer, result).data;
    };
    CryptoHelper.wordArrayToByteArray = function (input) {
        return format_1.FormatHelper.hexStringToBuffer(input.toString(crypto_js_1.enc.Hex));
    };
    CryptoHelper.ALGO_TYPE = 'sha1';
    CryptoHelper.ITERATION_NUMBER = 4096;
    CryptoHelper.KEY_SIZE = 128;
    CryptoHelper.DEFAULT_SALT = 'n0 salt in 1oTi2e'; // TODO read from iotize ...
    CryptoHelper.passwordHasher = new sha_hasher_1.ShaHasher({
        type: CryptoHelper.ALGO_TYPE,
        iterations: CryptoHelper.ITERATION_NUMBER,
        salt: CryptoHelper.DEFAULT_SALT,
        keySize: CryptoHelper.KEY_SIZE
    });
    return CryptoHelper;
}());
exports.CryptoHelper = CryptoHelper;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var DeviceService = /** @class */ (function (_super) {
    __extends(DeviceService, _super);
    function DeviceService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Factory reset
    *
    * LWM2M path: /3//5
    *
    * @return void api call
    */
    DeviceService.prototype.factoryReset = function () {
        return this._call({
            path: "/device/factory-reset",
            methodType: "post"
        });
    };
    /**
    * Get available power sources
    *
    * LWM2M path: /3//6
    *
    * @return AvailablePowerSource api call
    */
    DeviceService.prototype.getAvailablePowerSource = function () {
        return this._call({
            path: "/device/available-power-source",
            methodType: "get"
        });
    };
    /**
    * Get device current time
    *
    * LWM2M path: /3//13
    *
    * @return string api call
    */
    DeviceService.prototype.getCurrentTime = function () {
        return this._call({
            path: "/device/current-time",
            methodType: "get"
        });
    };
    /**
    * Get device firmware version
    *
    * LWM2M path: /3//3
    *
    * @return string api call
    */
    DeviceService.prototype.getFirmwareVersion = function () {
        return this._call({
            path: "/device/firmware-version",
            methodType: "get"
        });
    };
    /**
    * Get device last error code
    *
    * LWM2M path: /3//11
    *
    * @return number api call
    */
    DeviceService.prototype.getLastErrorCode = function () {
        return this._call({
            path: "/device/last-error-code",
            methodType: "get"
        });
    };
    /**
    * Get manufacturer name
    *
    * LWM2M path: /3//0
    *
    * @return string api call
    */
    DeviceService.prototype.getManufacturer = function () {
        return this._call({
            path: "/device/manufacturer",
            methodType: "get"
        });
    };
    /**
    * Get device memory free
    * In bytes
    * LWM2M path: /3//10
    *
    * @return number api call
    */
    DeviceService.prototype.getMemoryFree = function () {
        return this._call({
            path: "/device/memory-free",
            methodType: "get"
        });
    };
    /**
    * Get device model name
    *
    * LWM2M path: /3//1
    *
    * @return string api call
    */
    DeviceService.prototype.getModelName = function () {
        return this._call({
            path: "/device/model-name",
            methodType: "get"
        });
    };
    /**
    * Get power source voltage
    *
    * LWM2M path: /3//7
    *
    * @return number api call
    */
    DeviceService.prototype.getPowerSourceVoltage = function () {
        return this._call({
            path: "/device/power-source-voltage",
            methodType: "get"
        });
    };
    /**
    * Get public password
    * Password pour l&#39;enregistrement. Egalement valeur par défaut des password Cloud et MQTTRelay
    * LWM2M path: /3//17
    *
    * @return string api call
    */
    DeviceService.prototype.getPublicPassword = function () {
        return this._call({
            path: "/device/public-password",
            methodType: "get"
        });
    };
    /**
    * Get device serial number
    *
    * LWM2M path: /3//2
    *
    * @return string api call
    */
    DeviceService.prototype.getSerialNumber = function () {
        return this._call({
            path: "/device/serial-number",
            methodType: "get"
        });
    };
    /**
    * ???
    *
    * LWM2M path: /3//11
    *
    * @return void api call
    */
    DeviceService.prototype.postLastErrorCode = function () {
        return this._call({
            path: "/device/last-error-code",
            methodType: "post"
        });
    };
    /**
    * Set device current time
    *
    * LWM2M path: /3//13
    *
    * @return void api call
    */
    DeviceService.prototype.putCurrentTime = function () {
        return this._call({
            path: "/device/current-time",
            methodType: "put"
        });
    };
    /**
    * Reboot device
    *
    * LWM2M path: /3//4
    *
    * @return void api call
    */
    DeviceService.prototype.reboot = function () {
        return this._call({
            path: "/device/reboot",
            methodType: "post"
        });
    };
    /**
    * Reset device last error code
    *
    * LWM2M path: /3//12
    *
    * @return void api call
    */
    DeviceService.prototype.resetLastErrorCode = function () {
        return this._call({
            path: "/device/reset-last-error-code",
            methodType: "post"
        });
    };
    return DeviceService;
}(import_adapter_1.AbstractService));
exports.DeviceService = DeviceService;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(6);
var operators_1 = __webpack_require__(22);
var AbstractService = /** @class */ (function () {
    function AbstractService(client, apiConfig) {
        this.client = client;
        this.config = apiConfig;
    }
    AbstractService.prototype._call = function (options) {
        var observable = this._callObservable(options).pipe(operators_1.first());
        // observable
        //     .subscribe((val) => {
        //         console.log('=> ', val);
        //     });
        return observable.toPromise();
    };
    AbstractService.prototype._callObservable = function (options) {
        var args = this._convertToCommandArgs(options);
        var response$ = this.client.command(args[0], args[1]);
        return response$;
    };
    AbstractService.prototype._convertToCommandArgs = function (options) {
        return AbstractService.callToCommandArgs(options, this.config);
    };
    AbstractService.callToCommandArgs = function (options, config) {
        var path = options.path;
        // First we check if there is an alias 
        var lwm2mPath = config ? config.resolvePath(path) : options.path;
        console.log("AbstractService call: path " + options.path + " resolved to lwm2m path " + lwm2mPath + " (config ? " + (config ? 'YES' : 'NO') + ")");
        var pathConfig = config ? config.getRoute(options.methodType, path) : undefined;
        if (typeof options.bodyEncoder === "string") {
            if (!config) {
                throw new Error("Api config should be path when using a reference to a body encoder");
            }
            options.bodyEncoder = config.getBodyConverter(options.bodyEncoder);
        }
        if (pathConfig && pathConfig.bodyEncoder) {
            options.bodyEncoder = config.getBodyConverter(pathConfig.bodyEncoder);
        }
        var responseConverter = undefined;
        if (pathConfig) {
            responseConverter = config.getBodyConverter(pathConfig.returnTypeConverter);
        }
        var lwm2mPathFilled = import_adapter_1.PathParameter.fillAllParams(lwm2mPath, options.pathParameters || {});
        var encodedPayload = AbstractService.encodeBody(options);
        console.log('encoded payload => ', encodedPayload);
        var mtdTypeString = options.methodType.toUpperCase();
        var command = import_adapter_1.Command[mtdTypeString](lwm2mPathFilled, encodedPayload);
        console.log("SERVICE", "_call", JSON.stringify(options) + " | PATH: " + lwm2mPathFilled + " | COMMAND: " + command + " | RESPONSE CONVERTER: " + (responseConverter ? responseConverter.constructor.name : 'NONE') + " | BODY CONVERTER: " + (options.bodyEncoder ? options.bodyEncoder.constructor.name : 'NONE'));
        return [command, responseConverter];
    };
    /**
     * Encode body accoding to options and configuration
     */
    AbstractService.encodeBody = function (options) {
        if (typeof options.body == "undefined") {
            return undefined;
        }
        if (options.body instanceof Uint8Array) {
            return options.body;
        }
        var encoder = options.bodyEncoder;
        if (!encoder) {
            throw new Error("No valid converter for body type \"" + (options && options.body && options.body.constructor && options.body.constructor.name ? options.body.constructor.name : typeof options.body) + "\" (path " + options.path + ")");
        }
        if (typeof encoder === 'function') {
            return encoder(options.body);
        }
        else {
            return encoder.encode(options.body);
        }
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiConfig = /** @class */ (function () {
    function ApiConfig(routes, converters, aliases) {
        if (converters === void 0) { converters = {}; }
        if (aliases === void 0) { aliases = {}; }
        this.routes = routes;
        this.converters = converters;
        this.aliases = aliases;
    }
    ;
    ApiConfig.prototype.getRoute = function (methodStr, path) {
        path = this.resolvePath("" + path);
        var routePath = methodStr.toLowerCase() + " " + path;
        return (routePath in this.routes) ? this.routes[routePath] : undefined;
    };
    ApiConfig.prototype.addRoute = function (methodStr, lwm2mPath, route) {
        var aliases = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            aliases[_i - 3] = arguments[_i];
        }
        this.routes[methodStr + " " + lwm2mPath] = route;
        for (var _a = 0, aliases_1 = aliases; _a < aliases_1.length; _a++) {
            var alias = aliases_1[_a];
            this.aliases[alias] = lwm2mPath;
        }
        return this;
    };
    ApiConfig.prototype.getBodyConverter = function (id) {
        return this.converters[id];
    };
    ApiConfig.prototype.resolvePath = function (path) {
        path = (path in this.aliases) ? this.aliases[path] : path;
        // console.log('FILL PARAMS, ', pathParameters, path);
        return path;
    };
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var AclService = /** @class */ (function (_super) {
    __extends(AclService, _super);
    function AclService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get ACL object instance id
    *
    * LWM2M path: /2/{objectId}/1
    *
    * @param objectId input
    * @return number api call
    */
    AclService.prototype.getInstanceId = function (objectId) {
        return this._call({
            path: "/acl/{objectId}/instance-id",
            methodType: "get",
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    /**
    * Get ACL list
    * Ressource contenant les droits d&#39;un groupe sur cet objet : * ressource instance ID &#x3D; Short Server ID du groupe
    * LWM2M path: /2/{objectId}/2
    *
    * @param objectId input
    * @return ListAclEntry api call
    */
    AclService.prototype.getList = function (objectId) {
        return this._call({
            path: "/acl/{objectId}/list",
            methodType: "get",
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    /**
    * Get acl object id
    *
    * LWM2M path: /2/{objectId}/0
    *
    * @param objectId input
    * @return number api call
    */
    AclService.prototype.getObjectId = function (objectId) {
        return this._call({
            path: "/acl/{objectId}/object-id",
            methodType: "get",
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    /**
    * Get ACL group owner id
    *
    * LWM2M path: /2/{objectId}/3
    *
    * @param objectId input
    * @return number api call
    */
    AclService.prototype.getOwner = function (objectId) {
        return this._call({
            path: "/acl/{objectId}/owner",
            methodType: "get",
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    /**
    * Write ACL
    *
    * LWM2M path: /2/{objectId}/2
    *
    * @param objectId input
    * @return void api call
    */
    AclService.prototype.putList = function (objectId) {
        return this._call({
            path: "/acl/{objectId}/list",
            methodType: "put",
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    /**
    * Set access control owner group
    *
    * LWM2M path: /2/{objectId}/3
    * Body converter id: "integer_uint32"
    * @param objectId input
    * @param ownerId input
    * @return void api call
    */
    AclService.prototype.putOwner = function (objectId, ownerId) {
        return this._call({
            path: "/acl/{objectId}/owner",
            methodType: "put",
            body: ownerId,
            pathParameters: {
                "objectId": objectId,
            }
        });
    };
    return AclService;
}(import_adapter_1.AbstractService));
exports.AclService = AclService;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(6);
var DatalogService = /** @class */ (function (_super) {
    __extends(DatalogService, _super);
    function DatalogService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
     *
     */
    DatalogService.prototype.getMaxPacketCount = function () {
        return this._call({
            path: "/1024//23",
            methodType: "get"
        });
    };
    /**
     * Start data log packet acquisition
     */
    DatalogService.prototype.run = function () {
        return this._call({
            path: "/1031//0",
            methodType: "post"
        });
    };
    /**
     * Stop data log packet acquisition
     */
    DatalogService.prototype.stop = function () {
        return this._call({
            path: "/1031//1",
            methodType: "post"
        });
    };
    /**
     *
     */
    DatalogService.prototype.getOptions = function () {
        return this._call({
            path: "/1031//2",
            methodType: "get"
        });
    };
    /**
     *
     */
    DatalogService.prototype.putOptions = function (value) {
        return this._call({
            path: "/1031//2",
            methodType: "put",
            body: value
        });
    };
    /**
     * Hash du password DataLoggin. Utilisé (combiné à d'autres choses) pour crypter le paquet avant de le stocker dans l'OutBox.
     */
    DatalogService.prototype.putCryptoKey = function (value) {
        return this._call({
            path: "/1031//3",
            methodType: "put",
            body: value
        });
    };
    /**
     * Reinitialisation : efface tous les paquets de la mémoire de l'IoTize. Seulement en état Stop ? Stop implicite avant le flush ? Run implicite après le flush ?
     */
    DatalogService.prototype.flush = function () {
        return this._call({
            path: "/1031//4",
            methodType: "post"
        });
    };
    /**
     * Get the number of data log packet available
     */
    DatalogService.prototype.getNumberOfPackets = function () {
        return this._call({
            path: "/1031//10",
            methodType: "get"
        });
    };
    /**
     * Dequeue one packet in the FIFO list (Firt In First Out) of datalog packets
     */
    DatalogService.prototype.dequeueOnePacket = function () {
        return this._call({
            path: "/1031//11",
            methodType: "get"
        });
    };
    return DatalogService;
}(import_adapter_1.AbstractService));
exports.DatalogService = DatalogService;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var ScramService = /** @class */ (function (_super) {
    __extends(ScramService, _super);
    function ScramService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get scram hash it
    * Scram conf iteration counter (i) to be read by client before starting scram login process
    * LWM2M path: /1024//42
    *
    * @return void api call
    */
    ScramService.prototype.getScramHashIt = function () {
        return this._call({
            path: "/interface/scram/hash-it",
            methodType: "get"
        });
    };
    /**
    * Get scram user iteration
    * SCRAM Hash Iteration: Nombre d&#39;itérations utilisé en SCRAM pour le dernier hashage. Nombre &gt;1000, généré aléatoirement à l&#39;écriture de la conf dans l&#39;IoTize.
    * LWM2M path: /1025/{groupId}/7
    *
    * @param groupId input
    * @return number api call
    */
    ScramService.prototype.getScramUserIteration = function (groupId) {
        return this._call({
            path: "/group/{groupId}/scram-user-iteration",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Get scram user salt
    * User-specific salt utilisé (avec le User Name) pour saller les hashs du password StoredKey et ServerKey. Ecrit par Exec/SetPWD
    * LWM2M path: /1025/{groupId}/16
    *
    * @param groupId input
    * @return number api call
    */
    ScramService.prototype.getScramUserSalt = function (groupId) {
        return this._call({
            path: "/group/{groupId}/scram-user-salt",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Start scram communication
    * Demande d&#39;une clé aléatoire et initiation d&#39;une session CCOM cryptée utilisant ce RNG comme clé de cryptage. Accessible uniquement en NFC.
    * LWM2M path: /1024//47
    *
    * @return Uint8Array api call
    */
    ScramService.prototype.initialize = function () {
        return this._call({
            path: "/interface/scram/initialize",
            methodType: "get"
        });
    };
    /**
    * First command to initiate scram login, for client to send login and nonce to IoTize, and IoTize to return user salt, user iteration counter (j) and combined nonce
    * First command to initiate scram login, for client to send login and nonce to IoTize, and IoTize to return user salt, user iteration counter (j) and combined nonce
    * LWM2M path: /1024//40
    * Body converter id: "ScramLoginParams"
    * @param params input
    * @return ScramLoginResponseBody api call
    */
    ScramService.prototype.login = function (params) {
        return this._call({
            path: "/interface/scram/login",
            methodType: "get",
            body: params,
            pathParameters: {}
        });
    };
    /**
    * Scram login proof
    * Second command to finalize scram login, for client to send ClientProof and combined nonce
    * LWM2M path: /1024//41
    * Body converter id: "Bytes"
    * @param params input
    * @return Uint8Array api call
    */
    ScramService.prototype.loginProof = function (params) {
        return this._call({
            path: "/interface/scram/login-proof",
            methodType: "get",
            body: params,
            pathParameters: {}
        });
    };
    /**
    * Write scram user iteration
    *
    * LWM2M path: /1025/{groupId}/7
    * Body converter id: "integer_uint32"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    ScramService.prototype.putScramUserIteration = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/scram-user-iteration",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write scram user salt
    *
    * LWM2M path: /1025/{groupId}/16
    * Body converter id: "integer_uint32"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    ScramService.prototype.putScramUserSalt = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/scram-user-salt",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Communication channel
    * Crypted communication ressource, for sending/receiving commands/responses after the SCRAM or CCOM session is established.
    * LWM2M path: /1024//48
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    ScramService.prototype.send = function (data) {
        return this._call({
            path: "/interface/scram/com-send-receive",
            methodType: "get",
            body: data,
            pathParameters: {}
        });
    };
    return ScramService;
}(import_adapter_1.AbstractService));
exports.ScramService = ScramService;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var VariableService = /** @class */ (function (_super) {
    __extends(VariableService, _super);
    function VariableService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get variable address
    *
    * LWM2M path: /1029/{variableId}/0
    *
    * @param variableId input
    * @return number api call
    */
    VariableService.prototype.getAddress = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/address",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get variable bundle id
    * ID du bundle qui contient la variable
    * LWM2M path: /1029/{variableId}/6
    *
    * @param variableId input
    * @return number api call
    */
    VariableService.prototype.getBundleId = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/bundle/id",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get variable bundle values
    *
    * LWM2M path: /1029/{variableId}/7
    *
    * @param variableId input
    * @return number api call
    */
    VariableService.prototype.getBundleValues = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/bundle/values",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get access rights for the variable
    * Get access rights for the variable (read and write)
    * LWM2M path: /1029/{variableId}/3
    *
    * @param variableId input
    * @return ReadWriteRights api call
    */
    VariableService.prototype.getCurrentAccess = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/current-access",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get data format for variable
    *
    * LWM2M path: /1029/{variableId}/1
    *
    * @param variableId input
    * @return number api call
    */
    VariableService.prototype.getFormat = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/format",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get variable array size
    * Get the number of element of the variable
    * LWM2M path: /1029/{variableId}/2
    *
    * @param variableId input
    * @return number api call
    */
    VariableService.prototype.getNumberOfElements = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/number-of-elements",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Get variable value
    * Value of array of values. The size depends of variable format
    * LWM2M path: /1029/{variableId}/4
    *
    * @param variableId input
    * @return Uint8Array api call
    */
    VariableService.prototype.getValue = function (variableId) {
        return this._call({
            path: "/variable/{variableId}/value",
            methodType: "get",
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Write variable address
    *
    * LWM2M path: /1029/{variableId}/0
    * Body converter id: "integer_uint32"
    * @param variableId input
    * @param address input
    * @return void api call
    */
    VariableService.prototype.putAddress = function (variableId, address) {
        return this._call({
            path: "/variable/{variableId}/address",
            methodType: "put",
            body: address,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Write variable bundle id
    *
    * LWM2M path: /1029/{variableId}/6
    * Body converter id: "integer_uint32"
    * @param variableId input
    * @param value input
    * @return void api call
    */
    VariableService.prototype.putBundleId = function (variableId, value) {
        return this._call({
            path: "/variable/{variableId}/bundle/id",
            methodType: "put",
            body: value,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Set data format of the variable
    *
    * LWM2M path: /1029/{variableId}/1
    * Body converter id: "integer_uint8"
    * @param variableId input
    * @param value input
    * @return void api call
    */
    VariableService.prototype.putFormat = function (variableId, value) {
        return this._call({
            path: "/variable/{variableId}/format",
            methodType: "put",
            body: value,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Write variable array size
    * Set the number of element of the variable
    * LWM2M path: /1029/{variableId}/2
    * Body converter id: "integer_uint8"
    * @param variableId input
    * @param value input
    * @return void api call
    */
    VariableService.prototype.putNumberOfElements = function (variableId, value) {
        return this._call({
            path: "/variable/{variableId}/number-of-elements",
            methodType: "put",
            body: value,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Set variable value
    *
    * LWM2M path: /1029/{variableId}/4
    * Body converter id: "Bytes"
    * @param variableId input
    * @param value input
    * @return void api call
    */
    VariableService.prototype.putValue = function (variableId, value) {
        return this._call({
            path: "/variable/{variableId}/value",
            methodType: "put",
            body: value,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    /**
    * Set variable value
    * Difference with put ?
    * LWM2M path: /1029/{variableId}/5
    * Body converter id: "Bytes"
    * @param variableId input
    * @param value input
    * @return void api call
    */
    VariableService.prototype.setValue = function (variableId, value) {
        return this._call({
            path: "/variable/{variableId}/set-value",
            methodType: "post",
            body: value,
            pathParameters: {
                "variableId": variableId,
            }
        });
    };
    return VariableService;
}(import_adapter_1.AbstractService));
exports.VariableService = VariableService;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var TargetService = /** @class */ (function (_super) {
    __extends(TargetService, _super);
    function TargetService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Clear communication stats
    *
    * LWM2M path: /1027//11
    *
    * @return void api call
    */
    TargetService.prototype.clearComStats = function () {
        return this._call({
            path: "/target/com-stats",
            methodType: "post"
        });
    };
    /**
    * Connect to target
    *
    * LWM2M path: /1027//3
    *
    * @return void api call
    */
    TargetService.prototype.connect = function () {
        return this._call({
            path: "/target/connect",
            methodType: "post"
        });
    };
    /**
    * Disconnect from target
    *
    * LWM2M path: /1027//4
    *
    * @return void api call
    */
    TargetService.prototype.disconnect = function () {
        return this._call({
            path: "/target/disconnect",
            methodType: "post"
        });
    };
    /**
    * Get communication stats
    * Get Nb of failed communications and number of successful communications with Target
    * LWM2M path: /1027//11
    *
    * @return TargetComStats api call
    */
    TargetService.prototype.getComStats = function () {
        return this._call({
            path: "/target/com-stats",
            methodType: "get"
        });
    };
    /**
    * Get core type
    *
    * LWM2M path: /1027//2
    *
    * @return TargetCoreType api call
    */
    TargetService.prototype.getCoreType = function () {
        return this._call({
            path: "/target/core-type",
            methodType: "get"
        });
    };
    /**
    * Debug access
    * Access registres de contrôle (SWD&#x3D;&gt;APDP) de la cible.  Accès conditionné par les ACLs du Bundle Debug (-2)
    * LWM2M path: /1027//31
    *
    * @return void api call
    */
    TargetService.prototype.getDebugAccess = function () {
        return this._call({
            path: "/target/debug-access",
            methodType: "get"
        });
    };
    /**
    * Get firmware version
    *
    * LWM2M path: /1027//6
    *
    * @return string api call
    */
    TargetService.prototype.getFirmwareVersion = function () {
        return this._call({
            path: "/target/firmware-version",
            methodType: "get"
        });
    };
    /**
    * Get max voltage
    *
    * LWM2M path: /1027//9
    *
    * @return number api call
    */
    TargetService.prototype.getMaxVoltage = function () {
        return this._call({
            path: "/target/max-voltage",
            methodType: "get"
        });
    };
    /**
    * Get min voltage
    *
    * LWM2M path: /1027//8
    *
    * @return number api call
    */
    TargetService.prototype.getMinVoltage = function () {
        return this._call({
            path: "/target/min-voltage",
            methodType: "get"
        });
    };
    /**
    * Get current sub protocol
    *
    * LWM2M path: /1027//40
    *
    * @return Uint8Array api call
    */
    TargetService.prototype.getModbusSubProtocol = function () {
        return this._call({
            path: "/target/modbus/sub-protocol",
            methodType: "get"
        });
    };
    /**
    * Get page size
    * Alignement page (TAR)
    * LWM2M path: /1027//10
    *
    * @return number api call
    */
    TargetService.prototype.getPageSize = function () {
        return this._call({
            path: "/target/page-size",
            methodType: "get"
        });
    };
    /**
    * Get target protocol
    *
    * LWM2M path: /1027//1
    *
    * @return TargetProtocol api call
    */
    TargetService.prototype.getProtocol = function () {
        return this._call({
            path: "/target/protocol",
            methodType: "get"
        });
    };
    /**
    * List available target protocols
    *
    * LWM2M path: /1027//20
    *
    * @return ListTargetProtocol api call
    */
    TargetService.prototype.getProtocolList = function () {
        return this._call({
            path: "/target/protocol/list",
            methodType: "get"
        });
    };
    /**
    * Register access
    * Access registres (Cortex&#x3D;&gt;R0...R15) de la cible.  Accès conditionné par les ACLs du Bundle Debug (-2)
    * LWM2M path: /1027//32
    *
    * @return void api call
    */
    TargetService.prototype.getRegAccess = function () {
        return this._call({
            path: "/target/reg-access",
            methodType: "get"
        });
    };
    /**
    * Données de config du protocole (baudrate MODBus, chainage JTAG, etc.) Taille variable, fixée au premier write après le reset factory.
    *
    * LWM2M path: /1027//21
    *
    * @return UartSettings api call
    */
    TargetService.prototype.getUARTSettings = function () {
        return this._call({
            path: "/target/uart/settings",
            methodType: "get"
        });
    };
    /**
    * Get vcc
    * Lit la valeur de la tension de la cible
    * LWM2M path: /1027//7
    *
    * @return number api call
    */
    TargetService.prototype.getVcc = function () {
        return this._call({
            path: "/target/vcc",
            methodType: "get"
        });
    };
    /**
    * Generic modbus read
    *
    * LWM2M path: /1027//38
    * Body converter id: "MemoryInfo"
    * @param data input
    * @return Uint8Array api call
    */
    TargetService.prototype.modbusRead = function (data) {
        return this._call({
            path: "/target/modbus/read",
            methodType: "get",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Generic modbus write
    *
    * LWM2M path: /1027//37
    * Body converter id: "MemoryWriteInfo"
    * @param data input
    * @return void api call
    */
    TargetService.prototype.modbusWrite = function (data) {
        return this._call({
            path: "/target/modbus/write",
            methodType: "get",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Perform actions to ADP target.
    *
    * LWM2M path: /1027//39
    * Body converter id: "Bytes"
    * @param data input
    * @return void api call
    */
    TargetService.prototype.postAdpAction = function (data) {
        return this._call({
            path: "/target/adp/action",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * ???
    *
    * LWM2M path: /1027//31
    *
    * @return void api call
    */
    TargetService.prototype.postDebugAccess = function () {
        return this._call({
            path: "/target/debug-access",
            methodType: "post"
        });
    };
    /**
    * Set current sub protocol
    *
    * LWM2M path: /1027//40
    * Body converter id: "Bytes"
    * @param data input
    * @return void api call
    */
    TargetService.prototype.postModbusSubProtocol = function (data) {
        return this._call({
            path: "/target/modbus/sub-protocol",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * ???
    *
    * LWM2M path: /1027//32
    *
    * @return void api call
    */
    TargetService.prototype.postRegAccess = function () {
        return this._call({
            path: "/target/reg-access",
            methodType: "post"
        });
    };
    /**
    * Reset target
    * Reset de la cible (RST&#x3D;0) et maintient en Reset. Le relachement se fait par Reset (plus haut). Accès conditionné par les ACLs du Bundle réservé Debug (-2) si il existe, sinon Admin seulement
    * LWM2M path: /1027//30
    *
    * @return void api call
    */
    TargetService.prototype.postResetKeep = function () {
        return this._call({
            path: "/target/reset-keep",
            methodType: "post"
        });
    };
    /**
    * Write core type
    *
    * LWM2M path: /1027//2
    * Body converter id: "TargetCoreType"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.putCoreType = function (value) {
        return this._call({
            path: "/target/core-type",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write firmware version
    *
    * LWM2M path: /1027//6
    * Body converter id: "integer_uint32"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.putFirmwareVersion = function (value) {
        return this._call({
            path: "/target/firmware-version",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write max voltage value
    *
    * LWM2M path: /1027//9
    * Body converter id: "integer_uint16"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.putMaxVoltage = function (value) {
        return this._call({
            path: "/target/max-voltage",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write min voltage value
    *
    * LWM2M path: /1027//8
    * Body converter id: "integer_uint16"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.putMinVoltage = function (value) {
        return this._call({
            path: "/target/min-voltage",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write page size
    *
    * LWM2M path: /1027//10
    * Body converter id: "integer_uint32"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.putPageSize = function (value) {
        return this._call({
            path: "/target/page-size",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write target protocol
    *
    * LWM2M path: /1027//1
    * Body converter id: "TargetProtocol"
    * @param targetProtocol input
    * @return void api call
    */
    TargetService.prototype.putProtocol = function (targetProtocol) {
        return this._call({
            path: "/target/protocol",
            methodType: "put",
            body: targetProtocol,
            pathParameters: {}
        });
    };
    /**
    * Read data transparent mode
    * Lecture de données de la target en mode transparent ou semi-transparent   si il y en a, sans attente.
    * LWM2M path: /1027//35
    *
    * @return Uint8Array api call
    */
    TargetService.prototype.read = function () {
        return this._call({
            path: "/target/transparent/read",
            methodType: "get"
        });
    };
    /**
    * Read memory on target
    *
    * LWM2M path: /1030//13
    * Body converter id: "MemoryInfo"
    * @param value input
    * @return Uint8Array api call
    */
    TargetService.prototype.readAddress = function (value) {
        return this._call({
            path: "/target/memaccess",
            methodType: "get",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Read data transparent mode with limit
    * Lecture de données de la target en mode transparent ou semi-transparent   si il y en a, sans attente.
    * LWM2M path: /1027//35
    * Body converter id: "integer_uint32"
    * @param nbBytes input
    * @return Uint8Array api call
    */
    TargetService.prototype.readBytes = function (nbBytes) {
        return this._call({
            path: "/target/transparent/read-bytes",
            methodType: "get",
            body: nbBytes,
            pathParameters: {}
        });
    };
    /**
    * Reset target
    * Reset de la cible. (Reset &#x3D;0, wait, Reset &#x3D; 1) utilisé pour relacher le reset après utilisation de ResetKeep.  Accès conditionné par les ACLs du Bundle Debug (-2)
    * LWM2M path: /1027//5
    *
    * @return void api call
    */
    TargetService.prototype.reset = function () {
        return this._call({
            path: "/target/reset",
            methodType: "post"
        });
    };
    /**
    * Transparent send
    * Send data to the target application
    * LWM2M path: /1027//34
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    TargetService.prototype.send = function (data) {
        return this._call({
            path: "/target/transparent/send",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Transparent send and receive
    * Send data to the target application and expect response length
    * LWM2M path: /1027//34
    * Body converter id: "integer_uint16"
    * @param responseLength input
    * @return Uint8Array api call
    */
    TargetService.prototype.sendReceive = function (responseLength) {
        return this._call({
            path: "/target/transparent/send-receive",
            methodType: "get",
            body: responseLength,
            pathParameters: {}
        });
    };
    /**
    * Temporary update configuration
    * Execute permet de changer la valeur (mais pas la taille) courante de manière temporaire. Elle sera réinitialisée au reset d&#39;après la valeur configurée.
    * LWM2M path: /1027//21
    * Body converter id: "UartSettings"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.setUARTSettings = function (value) {
        return this._call({
            path: "/target/uart/settings",
            methodType: "post",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Write into memory on target
    *
    * LWM2M path: /1030//13
    * Body converter id: "MemoryWriteInfo"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.writeAddress = function (value) {
        return this._call({
            path: "/target/memaccess",
            methodType: "post",
            body: value,
            pathParameters: {}
        });
    };
    /**
    * Update configuration
    * Put permet de changer la valeur (mais pas la taille) courante de manière permanente
    * LWM2M path: /1027//21
    * Body converter id: "UartSettings"
    * @param value input
    * @return void api call
    */
    TargetService.prototype.writeUARTSettings = function (value) {
        return this._call({
            path: "/target/uart/settings",
            methodType: "put",
            body: value,
            pathParameters: {}
        });
    };
    return TargetService;
}(import_adapter_1.AbstractService));
exports.TargetService = TargetService;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var InterfaceService = /** @class */ (function (_super) {
    __extends(InterfaceService, _super);
    function InterfaceService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get application name
    *
    * LWM2M path: /1024//9
    *
    * @return string api call
    */
    InterfaceService.prototype.getAppName = function () {
        return this._call({
            path: "/interface/app-name",
            methodType: "get"
        });
    };
    /**
    * Get app path
    * Application Android à lancer ou page HTML à afficher quand l&#39;IoTize est détecté par le téléphone
    * LWM2M path: /1024//11
    *
    * @return string api call
    */
    InterfaceService.prototype.getAppPath = function () {
        return this._call({
            path: "/interface/app-path",
            methodType: "get"
        });
    };
    /**
    * Get authorized host protocols
    *
    * LWM2M path: /1024//17
    *
    * @return ListHostProtocol api call
    */
    InterfaceService.prototype.getAuthorizedHostProtocol = function () {
        return this._call({
            path: "/interface/authorized-host-protocol",
            methodType: "get"
        });
    };
    /**
    * Get available host protocols
    *
    * LWM2M path: /1024//21
    *
    * @return ListHostProtocol api call
    */
    InterfaceService.prototype.getAvailableHostProtocols = function () {
        return this._call({
            path: "/interface/available-host-protocols",
            methodType: "get"
        });
    };
    /**
    * Get ble address
    *
    * LWM2M path: /1024//22
    *
    * @return string api call
    */
    InterfaceService.prototype.getBleAddress = function () {
        return this._call({
            path: "/interface/ble/address",
            methodType: "get"
        });
    };
    /**
    * Get cloud client id
    *
    * LWM2M path: /3//2
    *
    * @return string api call
    */
    InterfaceService.prototype.getCloudClientId = function () {
        return this._call({
            path: "/interface/cloud/client-id",
            methodType: "get"
        });
    };
    /**
    * Get cloud connection mode
    *
    * LWM2M path: /1024//26
    *
    * @return CloudConnectionMode api call
    */
    InterfaceService.prototype.getCloudConnectionMode = function () {
        return this._call({
            path: "/interface/cloud/connection-mode",
            methodType: "get"
        });
    };
    /**
    * Get cloud gateway url
    * Adresse serveur Web du broker MQTT servant au Cloud. Pour envoyer le datalog par exemple. (Mais PAS pour le Relay MQTT)
    * LWM2M path: /1024//12
    *
    * @return string api call
    */
    InterfaceService.prototype.getCloudGatewayUrl = function () {
        return this._call({
            path: "/interface/cloud-gateway-url",
            methodType: "get"
        });
    };
    /**
    * Get cloud login id
    *
    * LWM2M path: /3//2
    *
    * @return string api call
    */
    InterfaceService.prototype.getCloudLogin = function () {
        return this._call({
            path: "/interface/cloud/login",
            methodType: "get"
        });
    };
    /**
    * Get cloud mqtt period
    * Minimum period between 2 Mqtt smartphone sendings in ms : 0 &#x3D; no
    * LWM2M path: /1024//33
    *
    * @return number api call
    */
    InterfaceService.prototype.getCloudMqttPeriod = function () {
        return this._call({
            path: "/interface/cloud/mqtt-period",
            methodType: "get"
        });
    };
    /**
    * Get cloud password
    *
    * LWM2M path: /1024//29
    *
    * @return string api call
    */
    InterfaceService.prototype.getCloudPassword = function () {
        return this._call({
            path: "/interface/cloud/password",
            methodType: "get"
        });
    };
    /**
    * Get the cloud service name
    *
    * LWM2M path: /1024//61
    *
    * @return string api call
    */
    InterfaceService.prototype.getCloudServiceName = function () {
        return this._call({
            path: "/interface/cloud/service-name",
            methodType: "get"
        });
    };
    /**
    * Crypted communication channel
    *
    * LWM2M path: /1024//71
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    InterfaceService.prototype.getCom = function (data) {
        return this._call({
            path: "/secure-element/com",
            methodType: "get",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Get config format firmware version
    * Version du Firmware qui a écrit la conf. (écrit automatiquement lors de la conf par le Firmware, pas depuis le fichier de conf)
    * LWM2M path: /1024//18
    *
    * @return string api call
    */
    InterfaceService.prototype.getConfigFormatFirmwareVersion = function () {
        return this._call({
            path: "/interface/config-format-firmware-version",
            methodType: "get"
        });
    };
    /**
    * Get config format version
    *
    * LWM2M path: /1024//8
    *
    * @return string api call
    */
    InterfaceService.prototype.getConfigFormatVersion = function () {
        return this._call({
            path: "/interface/config-format-version",
            methodType: "get"
        });
    };
    /**
    * Get config version
    *
    * LWM2M path: /1024//10
    *
    * @return string api call
    */
    InterfaceService.prototype.getConfigVersion = function () {
        return this._call({
            path: "/interface/config-version",
            methodType: "get"
        });
    };
    /**
    * Get configuration of Secure Element
    *
    * LWM2M path: /1024//70
    *
    * @return Uint8Array api call
    */
    InterfaceService.prototype.getConfigure = function () {
        return this._call({
            path: "/secure-element/configure",
            methodType: "get"
        });
    };
    /**
    * Get current group id
    *
    * LWM2M path: /1024//7
    *
    * @return number api call
    */
    InterfaceService.prototype.getCurrentGroupId = function () {
        return this._call({
            path: "/interface/current-group-id",
            methodType: "get"
        });
    };
    /**
    * Get current host protocol
    *
    * LWM2M path: /1024//3
    *
    * @return HostProtocol api call
    */
    InterfaceService.prototype.getCurrentHostProtocol = function () {
        return this._call({
            path: "/interface/current-host-protocol",
            methodType: "get"
        });
    };
    /**
    * Get current profile id
    *
    * LWM2M path: /1024//2
    *
    * @return number api call
    */
    InterfaceService.prototype.getCurrentProfileId = function () {
        return this._call({
            path: "/interface/current-profile/id",
            methodType: "get"
        });
    };
    /**
    * Get functions
    * Get functions
    * LWM2M path: /1024//20
    *
    * @return AvailableFunction api call
    */
    InterfaceService.prototype.getFunctions = function () {
        return this._call({
            path: "/interface/functions",
            methodType: "get"
        });
    };
    /**
    * Get host inactivity period
    * Host inactivity period before switch to standby mode or shutdown depending on optimisation level (res /1024//14)
    * LWM2M path: /1024//34
    *
    * @return number api call
    */
    InterfaceService.prototype.getHostInactivityPeriod = function () {
        return this._call({
            path: "/interface/host-inactivity-period",
            methodType: "get"
        });
    };
    /**
    * Get lock infos
    *
    * LWM2M path: /1024//6
    *
    * @return InterfaceLock api call
    */
    InterfaceService.prototype.getLock = function () {
        return this._call({
            path: "/interface/lock",
            methodType: "get"
        });
    };
    /**
    * Get mqtt relay client id
    *
    * LWM2M path: /3//2
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayClientId = function () {
        return this._call({
            path: "/interface/mqtt/relay/client-id",
            methodType: "get"
        });
    };
    /**
    * Get mqtt relay login
    *
    * LWM2M path: /3//2
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayLogin = function () {
        return this._call({
            path: "/interface/mqtt/relay/login",
            methodType: "get"
        });
    };
    /**
    * Get the mqtt net key for the server
    *
    * LWM2M path: /1024//55
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayNetKey = function () {
        return this._call({
            path: "/interface/mqtt/relay/net-key",
            methodType: "get"
        });
    };
    /**
    * Get the mqtt relay password
    * Mot de passe connexion au broker
    * LWM2M path: /1024//54
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayPassword = function () {
        return this._call({
            path: "/interface/mqtt/relay/password",
            methodType: "get"
        });
    };
    /**
    * Get port of the mqtt broker
    *
    * LWM2M path: /1024//51
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayPort = function () {
        return this._call({
            path: "/interface/mqtt/relay/port",
            methodType: "get"
        });
    };
    /**
    * Get mqtt relay url
    *
    * LWM2M path: /1024//50
    *
    * @return string api call
    */
    InterfaceService.prototype.getMqttRelayUrl = function () {
        return this._call({
            path: "/interface/mqtt/relay/url",
            methodType: "get"
        });
    };
    /**
    * Get iotize gateway ip on the network
    * Adresse IP : ex 192.168.1.1. Seulement pour les IoTize Wifi. (vraiment ?)
    * LWM2M path: /1024//31
    *
    * @return string api call
    */
    InterfaceService.prototype.getNetworkGatewayIp = function () {
        return this._call({
            path: "/interface/network/gateway-ip",
            methodType: "get"
        });
    };
    /**
    * Get IoTize device ip on the network
    * Adresse statique IP : ex 192.168.1.10. DHCP si adresse &#x3D; 0.0.0.0. Seulement pour les IoTize Wifi.
    * LWM2M path: /1024//30
    *
    * @return string api call
    */
    InterfaceService.prototype.getNetworkInfraIp = function () {
        return this._call({
            path: "/interface/network/infra-ip",
            methodType: "get"
        });
    };
    /**
    * Get infrastructure ip mask
    * Mask IP : ex 255.255.255.0. Seulement pour les IoTize Wifi.
    * LWM2M path: /1024//32
    *
    * @return string api call
    */
    InterfaceService.prototype.getNetworkInfraIpMask = function () {
        return this._call({
            path: "/interface/network/infra-ip-mask",
            methodType: "get"
        });
    };
    /**
    * Get network mode
    *
    * LWM2M path: /1024//15
    *
    * @return NetworkMode api call
    */
    InterfaceService.prototype.getNetworkMode = function () {
        return this._call({
            path: "/interface/network-mode",
            methodType: "get"
        });
    };
    /**
    * Check if nfc paring is mandatory
    *
    * LWM2M path: /1024//13
    *
    * @return NfcPairingMode api call
    */
    InterfaceService.prototype.getNfcPairingMode = function () {
        return this._call({
            path: "/interface/nfc/pairing-mode",
            methodType: "get"
        });
    };
    /**
    * Get power optimization level
    *
    * LWM2M path: /1024//14
    *
    * @return LowPowerOptimisationLevel api call
    */
    InterfaceService.prototype.getPowerOptimisationLevel = function () {
        return this._call({
            path: "/interface/power-optimisation-level",
            methodType: "get"
        });
    };
    /**
    * Get the public password ?
    * Password utilisé pour l&#39;enregistrement. Également défaut du MQTT Relay PWD
    * LWM2M path: /1024//60
    *
    * @return string api call
    */
    InterfaceService.prototype.getPublicPassword = function () {
        return this._call({
            path: "/interface/public-password",
            methodType: "get"
        });
    };
    /**
    * Generate a random number
    *
    * LWM2M path: /1024//49
    *
    * @return Uint8Array api call
    */
    InterfaceService.prototype.getRand = function () {
        return this._call({
            path: "/interface/rand",
            methodType: "get"
        });
    };
    /**
    * Get network key
    * Clé WAP / WEP pour connection réseau infrastructure &amp; P2P
    * LWM2M path: /1024//16
    *
    * @return string api call
    */
    InterfaceService.prototype.getWepKey = function () {
        return this._call({
            path: "/interface/wep-key",
            methodType: "get"
        });
    };
    /**
    * Get wifi hostname
    * Hostname par exemple, à lire par NFC pour connection socket à un IoTize Wifi en mode infrastructure avec DHCP
    * LWM2M path: /1024//35
    *
    * @return string api call
    */
    InterfaceService.prototype.getWifiHostname = function () {
        return this._call({
            path: "/interface/wifi/hostname",
            methodType: "get"
        });
    };
    /**
    * Get wifi ssid
    * May be null if not connected to any network
    * LWM2M path: /1024//25
    *
    * @return string api call
    */
    InterfaceService.prototype.getWifiSSID = function () {
        return this._call({
            path: "/interface/wifi/ssid",
            methodType: "get"
        });
    };
    /**
    * Keep alive.
    * Call this method to ensure communication resources are maintain.
    * LWM2M path: /1024//4
    *
    * @return number api call
    */
    InterfaceService.prototype.keepAlive = function () {
        return this._call({
            path: "/interface/keep-alive",
            methodType: "get"
        });
    };
    /**
    * Login
    * User login with username and password
    * LWM2M path: /1024//0
    * Body converter id: "LoginCredential"
    * @param credential input
    * @return void api call
    */
    InterfaceService.prototype.login = function (credential) {
        return this._call({
            path: "/interface/login",
            methodType: "post",
            body: credential,
            pathParameters: {}
        });
    };
    /**
    * Logout
    *
    * LWM2M path: /1024//1
    *
    * @return void api call
    */
    InterfaceService.prototype.logout = function () {
        return this._call({
            path: "/interface/logout",
            methodType: "post"
        });
    };
    /**
    * Execute multiple commands sent in one frame, and return all answers in one
    *
    * LWM2M path: /1024//89
    * Body converter id: "MultiCommands"
    * @param data input
    * @return MultiResponses api call
    */
    InterfaceService.prototype.multiCommands = function (data) {
        return this._call({
            path: "/interface/multi-commands",
            methodType: "get",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Admnistration login
    * Log in as an administrator thanks to the UID
    * LWM2M path: /1024//5
    * Body converter id: "Bytes"
    * @param uid input
    * @return void api call
    */
    InterfaceService.prototype.postLoginUid = function (uid) {
        return this._call({
            path: "/interface/login-uid",
            methodType: "post",
            body: uid,
            pathParameters: {}
        });
    };
    /**
    * Set application name
    *
    * LWM2M path: /1024//9
    * Body converter id: "string"
    * @param appName input
    * @return void api call
    */
    InterfaceService.prototype.putAppName = function (appName) {
        return this._call({
            path: "/interface/app-name",
            methodType: "put",
            body: appName,
            pathParameters: {}
        });
    };
    /**
    * Set app path
    *
    * LWM2M path: /1024//11
    * Body converter id: "string"
    * @param version input
    * @return void api call
    */
    InterfaceService.prototype.putAppPath = function (version) {
        return this._call({
            path: "/interface/app-path",
            methodType: "put",
            body: version,
            pathParameters: {}
        });
    };
    /**
    * Write authorized host protocols
    *
    * LWM2M path: /1024//17
    * Body converter id: "ListHostProtocol"
    * @param mode input
    * @return void api call
    */
    InterfaceService.prototype.putAuthorizedHostProtocol = function (mode) {
        return this._call({
            path: "/interface/authorized-host-protocol",
            methodType: "put",
            body: mode,
            pathParameters: {}
        });
    };
    /**
    * Write cloud connection mode
    *
    * LWM2M path: /1024//26
    * Body converter id: "CloudConnectionMode"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putCloudConnectionMode = function (key) {
        return this._call({
            path: "/interface/cloud/connection-mode",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write cloud gateway url
    *
    * LWM2M path: /1024//12
    * Body converter id: "string"
    * @param version input
    * @return void api call
    */
    InterfaceService.prototype.putCloudGatewayUrl = function (version) {
        return this._call({
            path: "/interface/cloud-gateway-url",
            methodType: "put",
            body: version,
            pathParameters: {}
        });
    };
    /**
    * Write cloud mqtt period
    *
    * LWM2M path: /1024//33
    * Body converter id: "integer_uint32"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putCloudMqttPeriod = function (key) {
        return this._call({
            path: "/interface/cloud/mqtt-period",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write cloud password
    *
    * LWM2M path: /1024//29
    * Body converter id: "string"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putCloudPassword = function (key) {
        return this._call({
            path: "/interface/cloud/password",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write cloud service name
    *
    * LWM2M path: /1024//61
    * Body converter id: "string"
    * @param name input
    * @return void api call
    */
    InterfaceService.prototype.putCloudServiceName = function (name) {
        return this._call({
            path: "/interface/cloud/service-name",
            methodType: "put",
            body: name,
            pathParameters: {}
        });
    };
    /**
    * Set config format version
    *
    * LWM2M path: /1024//8
    * Body converter id: "integer_uint32"
    * @param configFormat input
    * @return void api call
    */
    InterfaceService.prototype.putConfigFormatVersion = function (configFormat) {
        return this._call({
            path: "/interface/config-format-version",
            methodType: "put",
            body: configFormat,
            pathParameters: {}
        });
    };
    /**
    * Set config version
    *
    * LWM2M path: /1024//10
    * Body converter id: "integer_uint32"
    * @param version input
    * @return void api call
    */
    InterfaceService.prototype.putConfigVersion = function (version) {
        return this._call({
            path: "/interface/config-version",
            methodType: "put",
            body: version,
            pathParameters: {}
        });
    };
    /**
    * Write secure element configuration
    *
    * LWM2M path: /1024//70
    * Body converter id: "Bytes"
    * @param conf input
    * @return void api call
    */
    InterfaceService.prototype.putConfigure = function (conf) {
        return this._call({
            path: "/secure-element/configure",
            methodType: "put",
            body: conf,
            pathParameters: {}
        });
    };
    /**
    * Write current host protocol
    *
    * LWM2M path: /1024//3
    * Body converter id: "HostProtocol"
    * @param hostProtocol input
    * @return void api call
    */
    InterfaceService.prototype.putCurrentHostProtocol = function (hostProtocol) {
        return this._call({
            path: "/interface/current-host-protocol",
            methodType: "put",
            body: hostProtocol,
            pathParameters: {}
        });
    };
    /**
    * Write host inactivity period
    *
    * LWM2M path: /1024//34
    * Body converter id: "integer_uint16"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putHostInactivityPeriod = function (key) {
        return this._call({
            path: "/interface/host-inactivity-period",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Set lock infos
    *
    * LWM2M path: /1024//6
    * Body converter id: "InterfaceLock"
    * @param infos input
    * @return void api call
    */
    InterfaceService.prototype.putLock = function (infos) {
        return this._call({
            path: "/interface/lock",
            methodType: "put",
            body: infos,
            pathParameters: {}
        });
    };
    /**
    * Write mqtt net key
    *
    * LWM2M path: /1024//55
    * Body converter id: "string"
    * @param netkey input
    * @return void api call
    */
    InterfaceService.prototype.putMqttRelayNetKey = function (netkey) {
        return this._call({
            path: "/interface/mqtt/relay/net-key",
            methodType: "put",
            body: netkey,
            pathParameters: {}
        });
    };
    /**
    * Write mqtt relay password
    *
    * LWM2M path: /1024//54
    * Body converter id: "string"
    * @param url input
    * @return void api call
    */
    InterfaceService.prototype.putMqttRelayPassword = function (url) {
        return this._call({
            path: "/interface/mqtt/relay/password",
            methodType: "put",
            body: url,
            pathParameters: {}
        });
    };
    /**
    * Write service name of the mqtt broker
    *
    * LWM2M path: /1024//51
    * Body converter id: "string"
    * @param url input
    * @return void api call
    */
    InterfaceService.prototype.putMqttRelayPort = function (url) {
        return this._call({
            path: "/interface/mqtt/relay/port",
            methodType: "put",
            body: url,
            pathParameters: {}
        });
    };
    /**
    * Write mqtt relay url
    *
    * LWM2M path: /1024//50
    * Body converter id: "string"
    * @param url input
    * @return void api call
    */
    InterfaceService.prototype.putMqttRelayUrl = function (url) {
        return this._call({
            path: "/interface/mqtt/relay/url",
            methodType: "put",
            body: url,
            pathParameters: {}
        });
    };
    /**
    * Write iotize gateway ip
    *
    * LWM2M path: /1024//31
    * Body converter id: "string_ipv4"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putNetworkGatewayIp = function (key) {
        return this._call({
            path: "/interface/network/gateway-ip",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write infrastructure ip
    *
    * LWM2M path: /1024//30
    * Body converter id: "string_ipv4"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putNetworkInfraIp = function (key) {
        return this._call({
            path: "/interface/network/infra-ip",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write infrastructure ip mask
    *
    * LWM2M path: /1024//32
    * Body converter id: "string_ipv4mask"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putNetworkInfraIpMask = function (key) {
        return this._call({
            path: "/interface/network/infra-ip-mask",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write network mode
    *
    * LWM2M path: /1024//15
    * Body converter id: "NetworkMode"
    * @param mode input
    * @return void api call
    */
    InterfaceService.prototype.putNetworkMode = function (mode) {
        return this._call({
            path: "/interface/network-mode",
            methodType: "put",
            body: mode,
            pathParameters: {}
        });
    };
    /**
    * Change wether if nfc pairing is mandatory
    *
    * LWM2M path: /1024//13
    * Body converter id: "NfcPairingMode"
    * @param mode input
    * @return void api call
    */
    InterfaceService.prototype.putNfcPairingMode = function (mode) {
        return this._call({
            path: "/interface/nfc/pairing-mode",
            methodType: "put",
            body: mode,
            pathParameters: {}
        });
    };
    /**
    * Write power optimization level
    *
    * LWM2M path: /1024//14
    * Body converter id: "LowPowerOptimisationLevel"
    * @param mode input
    * @return void api call
    */
    InterfaceService.prototype.putPowerOptimisationLevel = function (mode) {
        return this._call({
            path: "/interface/power-optimisation-level",
            methodType: "put",
            body: mode,
            pathParameters: {}
        });
    };
    /**
    * Write network key
    *
    * LWM2M path: /1024//16
    * Body converter id: "string"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putWepKey = function (key) {
        return this._call({
            path: "/interface/wep-key",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Write wifi ssid
    *
    * LWM2M path: /1024//25
    * Body converter id: "string"
    * @param key input
    * @return void api call
    */
    InterfaceService.prototype.putWifiSsid = function (key) {
        return this._call({
            path: "/interface/wifi/ssid",
            methodType: "put",
            body: key,
            pathParameters: {}
        });
    };
    /**
    * Apply the new configuration on the device
    *
    * LWM2M path: /1024//10
    *
    * @return void api call
    */
    InterfaceService.prototype.reloadConfig = function () {
        return this._call({
            path: "/interface/config-version",
            methodType: "post"
        });
    };
    return InterfaceService;
}(import_adapter_1.AbstractService));
exports.InterfaceService = InterfaceService;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var GroupService = /** @class */ (function (_super) {
    __extends(GroupService, _super);
    function GroupService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get group alias
    * ID du groupe dont ce groupe hérite les droits. Si l&#39;Alias correspond à l&#39;ID du groupe, alors c&#39;est un Profile, sinon c&#39;est un User.
    * LWM2M path: /1025/{groupId}/5
    *
    * @param groupId input
    * @return number api call
    */
    GroupService.prototype.getAlias = function (groupId) {
        return this._call({
            path: "/group/{groupId}/alias",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Get the name of the group
    *
    * LWM2M path: /1025/{groupId}/0
    *
    * @param groupId input
    * @return string api call
    */
    GroupService.prototype.getName = function (groupId) {
        return this._call({
            path: "/group/{groupId}/name",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Get scram user iteration
    * SCRAM Hash Iteration: Nombre d&#39;itérations utilisé en SCRAM pour le dernier hashage. Nombre &gt;1000, généré aléatoirement à l&#39;écriture de la conf dans l&#39;IoTize.
    * LWM2M path: /1025/{groupId}/7
    *
    * @param groupId input
    * @return number api call
    */
    GroupService.prototype.getScramUserIteration = function (groupId) {
        return this._call({
            path: "/group/{groupId}/scram-user-iteration",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Get scram user salt
    * User-specific salt utilisé (avec le User Name) pour saller les hashs du password StoredKey et ServerKey. Ecrit par Exec/SetPWD
    * LWM2M path: /1025/{groupId}/16
    *
    * @param groupId input
    * @return number api call
    */
    GroupService.prototype.getScramUserSalt = function (groupId) {
        return this._call({
            path: "/group/{groupId}/scram-user-salt",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Get the maximum session lifetime
    *
    * LWM2M path: /1025/{groupId}/4
    *
    * @param groupId input
    * @return number api call
    */
    GroupService.prototype.getSessionLifetime = function (groupId) {
        return this._call({
            path: "/group/{groupId}/session-lifetime",
            methodType: "get",
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Update password
    * Demande de modification du Pwd, arguments :* pwd (16 chars) in no security or 1-hash modes.* StoredKey+ServerKey+UserSalt+UserIt (40 uchar) in SCRAM multi-hash mode
    * LWM2M path: /1025/{groupId}/2
    * Body converter id: "string"
    * @param groupId input
    * @param password input
    * @return void api call
    */
    GroupService.prototype.postPassword = function (groupId, password) {
        return this._call({
            path: "/group/{groupId}/password",
            methodType: "post",
            body: password,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write group alias
    *
    * LWM2M path: /1025/{groupId}/5
    * Body converter id: "integer_uint16"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    GroupService.prototype.putAlias = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/alias",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write group name
    *
    * LWM2M path: /1025/{groupId}/0
    * Body converter id: "string"
    * @param groupId input
    * @param name input
    * @return void api call
    */
    GroupService.prototype.putName = function (groupId, name) {
        return this._call({
            path: "/group/{groupId}/name",
            methodType: "put",
            body: name,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write scram user iteration
    *
    * LWM2M path: /1025/{groupId}/7
    * Body converter id: "integer_uint32"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    GroupService.prototype.putScramUserIteration = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/scram-user-iteration",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write scram user salt
    *
    * LWM2M path: /1025/{groupId}/16
    * Body converter id: "integer_uint32"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    GroupService.prototype.putScramUserSalt = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/scram-user-salt",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    /**
    * Write session lifetime
    *
    * LWM2M path: /1025/{groupId}/4
    * Body converter id: "integer_uint16"
    * @param groupId input
    * @param value input
    * @return void api call
    */
    GroupService.prototype.putSessionLifetime = function (groupId, value) {
        return this._call({
            path: "/group/{groupId}/session-lifetime",
            methodType: "put",
            body: value,
            pathParameters: {
                "groupId": groupId,
            }
        });
    };
    return GroupService;
}(import_adapter_1.AbstractService));
exports.GroupService = GroupService;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var FirmwareService = /** @class */ (function (_super) {
    __extends(FirmwareService, _super);
    function FirmwareService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get state
    *
    * LWM2M path: /5//3
    * @deprecated
    * @return FirmwareState api call
    */
    FirmwareService.prototype.getState = function () {
        return this._call({
            path: "/firmware/state",
            methodType: "get"
        });
    };
    /**
    * Get firmware update result
    *
    * LWM2M path: /5//5
    * @deprecated
    * @return FirmwareUpdateResult api call
    */
    FirmwareService.prototype.getUpdateResult = function () {
        return this._call({
            path: "/firmware/update-result",
            methodType: "get"
        });
    };
    /**
    * Check CRC
    * Compare le CRC attendu au CRC de la zone référencée. Modifie le Update Result (resource /5//5) à 1 si OK ou 5 si NG.
    * LWM2M path: /5//6
    * Body converter id: "CrcCheckBody"
    * @deprecated

    * @param data input
    * @return Uint8Array api call
    */
    FirmwareService.prototype.postCrcCheck = function (data) {
        return this._call({
            path: "/firmware/crc-check",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Firmware package
    * Firmware package : actif uniquement en mode update. Permet de transférer les données à programmer en flash pour l&#39;update firmware.
    * LWM2M path: /5//0
    * @deprecated
    * @return void api call
    */
    FirmwareService.prototype.postPackage = function () {
        return this._call({
            path: "/firmware/package",
            methodType: "post"
        });
    };
    /**
    * Update
    * Contrôle de l&#39;update: passage en mode update/updater/normal. Param: état futur souhaité. Actif uniquement si loggé en admin. (plus autres contraintes à définir: CRC check fait, etc.) Peut nécessiter un Reset du module
    * LWM2M path: /5//2
    * @deprecated
    * @return void api call
    */
    FirmwareService.prototype.postUpdate = function () {
        return this._call({
            path: "/firmware/update",
            methodType: "post"
        });
    };
    return FirmwareService;
}(import_adapter_1.AbstractService));
exports.FirmwareService = FirmwareService;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var BundleService = /** @class */ (function (_super) {
    __extends(BundleService, _super);
    function BundleService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Get acls
    *
    * LWM2M path: /1028/{tupId}
    *
    * @param bundleId input
    * @param groupId input
    * @return void api call
    */
    BundleService.prototype.getAclgroupId = function (bundleId, groupId) {
        return this._call({
            path: "/bundle/{bundleId}/acl/{groupId}",
            methodType: "get",
            pathParameters: {
                "bundleId": bundleId, "groupId": groupId,
            }
        });
    };
    /**
    * Get datalog period
    *
    * LWM2M path: /1028/{bundleId}/2
    *
    * @param bundleId input
    * @return number api call
    */
    BundleService.prototype.getDatalogPeriod = function (bundleId) {
        return this._call({
            path: "/bundle/{bundleId}/datalog-period",
            methodType: "get",
            pathParameters: {
                "bundleId": bundleId,
            }
        });
    };
    /**
    * Get bundle values
    *
    * LWM2M path: /1028/{bundleId}/1
    *
    * @param bundleId input
    * @return Uint8Array api call
    */
    BundleService.prototype.getValues = function (bundleId) {
        return this._call({
            path: "/bundle/{bundleId}/values",
            methodType: "get",
            pathParameters: {
                "bundleId": bundleId,
            }
        });
    };
    /**
    * Write acls
    *
    * LWM2M path: /1028/{bundleId}/0/{groupId}
    *
    * @param bundleId input
    * @param groupId input
    * @return void api call
    */
    BundleService.prototype.putAclgroupId = function (bundleId, groupId, body) {
        return this._call({
            path: "/bundle/{bundleId}/acl/{groupId}",
            methodType: "put",
            body: body,
            pathParameters: {
                "bundleId": bundleId, "groupId": groupId,
            }
        });
    };
    /**
    * Write datalog period
    *
    * LWM2M path: /1028/{bundleId}/2
    * Body converter id: "integer_uint32"
    * @param bundleId input
    * @param value input
    * @return void api call
    */
    BundleService.prototype.putDatalogPeriod = function (bundleId, value) {
        return this._call({
            path: "/bundle/{bundleId}/datalog-period",
            methodType: "put",
            body: value,
            pathParameters: {
                "bundleId": bundleId,
            }
        });
    };
    return BundleService;
}(import_adapter_1.AbstractService));
exports.BundleService = BundleService;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import { Observable } from "rxjs";
var import_adapter_1 = __webpack_require__(6);
var SinglePacketService = /** @class */ (function (_super) {
    __extends(SinglePacketService, _super);
    function SinglePacketService(client, apiConfig) {
        return _super.call(this, client, apiConfig) || this;
    }
    /**
    * Execute (after validation) a big Single Packet previously sent to the TAP using BSPP.
    * Execute (after validation) a big Single Packet previously sent to the TAP using BSPP.  Stored packet is erased after packet is executed. (even if failed to execute) This command contains some control information (size, hash, CRC, salt, etc.) TBD
    * LWM2M path: /1024//83
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    SinglePacketService.prototype.bspe = function (data) {
        return this._call({
            path: "/single-packet/bspe",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Get information concerning Single Packet Store Status
    * Get information concerning Single Packet Store Status : Does this TAP provide the Single Packet Store ? (SPS) Is the store empty, full or halfway ? Details about the the execution of the last executes SP ?
    * LWM2M path: /1024//80
    *
    * @return Uint8Array api call
    */
    SinglePacketService.prototype.getInfo = function () {
        return this._call({
            path: "/single-packet-store/info",
            methodType: "get"
        });
    };
    /**
    * Send a partial Single Packet to the TAP.
    * Size of the packet &#x3D; 130 bytes : 2 bytes offset, 128 bytes packet part. Stored packet is erased when packet part 0 is received.
    * LWM2M path: /1024//82
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    SinglePacketService.prototype.writePartialSinglePacket = function (data) {
        return this._call({
            path: "/single-packet/part",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    /**
    * Send a complete Small Single Packet to the TAP. Size of the packet &lt; 120 bytes
    *
    * LWM2M path: /1024//81
    * Body converter id: "Bytes"
    * @param data input
    * @return Uint8Array api call
    */
    SinglePacketService.prototype.writeSmallSinglePacket = function (data) {
        return this._call({
            path: "/single-packet/write",
            methodType: "post",
            body: data,
            pathParameters: {}
        });
    };
    return SinglePacketService;
}(import_adapter_1.AbstractService));
exports.SinglePacketService = SinglePacketService;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(160));
__export(__webpack_require__(161));
__export(__webpack_require__(162));
__export(__webpack_require__(169));
__export(__webpack_require__(170));
__export(__webpack_require__(171));
__export(__webpack_require__(172));
__export(__webpack_require__(173));
__export(__webpack_require__(174));
__export(__webpack_require__(175));
__export(__webpack_require__(176));
__export(__webpack_require__(177));
__export(__webpack_require__(178));
__export(__webpack_require__(179));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(180));
__export(__webpack_require__(181));
__export(__webpack_require__(182));
__export(__webpack_require__(183));
__export(__webpack_require__(184));
__export(__webpack_require__(185));
__export(__webpack_require__(186));
__export(__webpack_require__(187));
__export(__webpack_require__(77));
__export(__webpack_require__(78));
__export(__webpack_require__(79));
__export(__webpack_require__(81));
__export(__webpack_require__(80));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var UartSettingsBitParityConverter = /** @class */ (function () {
    function UartSettingsBitParityConverter() {
    }
    UartSettingsBitParityConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, UartSettingsBitParityConverter.mapping);
    };
    UartSettingsBitParityConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, UartSettingsBitParityConverter.mapping);
    };
    UartSettingsBitParityConverter.instance = function () {
        if (!UartSettingsBitParityConverter._instance) {
            UartSettingsBitParityConverter._instance = new UartSettingsBitParityConverter();
        }
        return UartSettingsBitParityConverter._instance;
    };
    UartSettingsBitParityConverter.mapping = {
        0: "NONE",
        1: "ODD",
        2: "EVEN"
    };
    return UartSettingsBitParityConverter;
}());
exports.UartSettingsBitParityConverter = UartSettingsBitParityConverter;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var UartSettingsHandshakeConverter = /** @class */ (function () {
    function UartSettingsHandshakeConverter() {
    }
    UartSettingsHandshakeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, UartSettingsHandshakeConverter.mapping);
    };
    UartSettingsHandshakeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, UartSettingsHandshakeConverter.mapping);
    };
    UartSettingsHandshakeConverter.instance = function () {
        if (!UartSettingsHandshakeConverter._instance) {
            UartSettingsHandshakeConverter._instance = new UartSettingsHandshakeConverter();
        }
        return UartSettingsHandshakeConverter._instance;
    };
    UartSettingsHandshakeConverter.mapping = {
        0: "NONE",
        1: "CTS",
        2: "RTS",
        3: "RTS_CTS",
        4: "DTR_DSR",
        8: "XON_XOFF"
    };
    return UartSettingsHandshakeConverter;
}());
exports.UartSettingsHandshakeConverter = UartSettingsHandshakeConverter;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var UartSettingsHandshakeDelimiterConverter = /** @class */ (function () {
    function UartSettingsHandshakeDelimiterConverter() {
    }
    UartSettingsHandshakeDelimiterConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, UartSettingsHandshakeDelimiterConverter.mapping);
    };
    UartSettingsHandshakeDelimiterConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, UartSettingsHandshakeDelimiterConverter.mapping);
    };
    UartSettingsHandshakeDelimiterConverter.instance = function () {
        if (!UartSettingsHandshakeDelimiterConverter._instance) {
            UartSettingsHandshakeDelimiterConverter._instance = new UartSettingsHandshakeDelimiterConverter();
        }
        return UartSettingsHandshakeDelimiterConverter._instance;
    };
    UartSettingsHandshakeDelimiterConverter.mapping = {
        0: "NONE",
        1: "CR",
        2: "LF",
        3: "CR_LF"
    };
    return UartSettingsHandshakeDelimiterConverter;
}());
exports.UartSettingsHandshakeDelimiterConverter = UartSettingsHandshakeDelimiterConverter;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var UartSettingsStopBitConverter = /** @class */ (function () {
    function UartSettingsStopBitConverter() {
    }
    UartSettingsStopBitConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, UartSettingsStopBitConverter.mapping);
    };
    UartSettingsStopBitConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, UartSettingsStopBitConverter.mapping);
    };
    UartSettingsStopBitConverter.instance = function () {
        if (!UartSettingsStopBitConverter._instance) {
            UartSettingsStopBitConverter._instance = new UartSettingsStopBitConverter();
        }
        return UartSettingsStopBitConverter._instance;
    };
    UartSettingsStopBitConverter.mapping = {
        0: "ONE",
        1: "ONE_AND_HALF",
        2: "TWO"
    };
    return UartSettingsStopBitConverter;
}());
exports.UartSettingsStopBitConverter = UartSettingsStopBitConverter;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var UartSettingsPhysicalPortConverter = /** @class */ (function () {
    function UartSettingsPhysicalPortConverter() {
    }
    UartSettingsPhysicalPortConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, UartSettingsPhysicalPortConverter.mapping);
    };
    UartSettingsPhysicalPortConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, UartSettingsPhysicalPortConverter.mapping);
    };
    UartSettingsPhysicalPortConverter.instance = function () {
        if (!UartSettingsPhysicalPortConverter._instance) {
            UartSettingsPhysicalPortConverter._instance = new UartSettingsPhysicalPortConverter();
        }
        return UartSettingsPhysicalPortConverter._instance;
    };
    UartSettingsPhysicalPortConverter.mapping = {
        0: "NONE",
        1: "RS232",
        2: "RS485",
        3: "USB",
        4: "UART",
        5: "CAN"
    };
    return UartSettingsPhysicalPortConverter;
}());
exports.UartSettingsPhysicalPortConverter = UartSettingsPhysicalPortConverter;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
/**
*
*/
var MemoryInfoConverter = /** @class */ (function () {
    function MemoryInfoConverter() {
    }
    MemoryInfoConverter.prototype.MemoryInfoConverter = function () {
    };
    /**
    *
    */
    MemoryInfoConverter.prototype.encode = function (model) {
        var size = 0;
        size += 4;
        size += 4;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        buffer.put_number(model.address, 4);
        buffer.put_number(model.quantity, 4);
        buffer.put_number(model.functionCode, 1);
        return buffer.data;
    };
    /**
     *
     */
    MemoryInfoConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        model.address = buffer.get_number(4);
        model.quantity = buffer.get_number(4);
        model.functionCode = buffer.get_number(1);
        return model;
    };
    MemoryInfoConverter.instance = function () {
        if (MemoryInfoConverter._instance == null) {
            MemoryInfoConverter._instance = new MemoryInfoConverter();
        }
        return MemoryInfoConverter._instance;
    };
    return MemoryInfoConverter;
}());
exports.MemoryInfoConverter = MemoryInfoConverter;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
/**
*
*/
var MemoryWriteInfoConverter = /** @class */ (function () {
    function MemoryWriteInfoConverter() {
    }
    MemoryWriteInfoConverter.prototype.MemoryWriteInfoConverter = function () {
    };
    /**
    *
    */
    MemoryWriteInfoConverter.prototype.encode = function (model) {
        var size = 0;
        size += 4;
        size += 4;
        size += 1;
        size += model.value != null ? model.value.length : 0;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        buffer.put_number(model.address, 4);
        buffer.put_number(model.length, 4);
        buffer.put_number(model.itemSize, 1);
        buffer.put_bytes(model.value);
        return buffer.data;
    };
    /**
     *
     */
    MemoryWriteInfoConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        model.address = buffer.get_number(4);
        model.length = buffer.get_number(4);
        model.itemSize = buffer.get_number(1);
        model.value = buffer.get_bytes();
        return model;
    };
    MemoryWriteInfoConverter.instance = function () {
        if (MemoryWriteInfoConverter._instance == null) {
            MemoryWriteInfoConverter._instance = new MemoryWriteInfoConverter();
        }
        return MemoryWriteInfoConverter._instance;
    };
    return MemoryWriteInfoConverter;
}());
exports.MemoryWriteInfoConverter = MemoryWriteInfoConverter;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Protocol = __webpack_require__(85);
exports.Protocol = Protocol;
var Client = __webpack_require__(44);
exports.Client = Client;
var Core = __webpack_require__(3);
exports.Core = Core;
var Device = __webpack_require__(147);
exports.Device = Device;
var Converter = __webpack_require__(1);
exports.Converter = Converter;
var Relay = __webpack_require__(188);
exports.Relay = Relay;
__export(__webpack_require__(59));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Api = __webpack_require__(19);
exports.Api = Api;
var Impl = __webpack_require__(87);
exports.Impl = Impl;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
    ConnectionState[ConnectionState["DISCONNECTING"] = 3] = "DISCONNECTING";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(29));
__export(__webpack_require__(88));
__export(__webpack_require__(43));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));
__export(__webpack_require__(89));
__export(__webpack_require__(31));
__export(__webpack_require__(33));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ble_packet_builder_1 = __webpack_require__(31);
var ble_packet_splitter_1 = __webpack_require__(33);
var ble_config_1 = __webpack_require__(30);
var core_1 = __webpack_require__(3);
var queue_com_protocol_1 = __webpack_require__(43);
/**
 * Abstract class for BLE communication
 *
 * With ble communication, data is split into sub packets.
 * This class handles creation of packet chunks.
 *
 * - You must only implement the function to send one packet chunk writeLwm2mPacketChunk()
 * -
 */
var AbstractBleProtocol = /** @class */ (function (_super) {
    __extends(AbstractBleProtocol, _super);
    function AbstractBleProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractBleProtocol.prototype.onNewLwm2mMessage = function (data) {
        if (this._readResolve) {
            console.log("onNewLwm2mMessage()", core_1.FormatHelper.toHexString(data));
            this._readResolve(data);
        }
        else {
            console.warn("No listener for new message...");
        }
    };
    AbstractBleProtocol.prototype.onLwm2mDataChunkError = function (error) {
        if (this._readReject) {
            this._readReject(error);
        }
        else {
            console.warn("No listener for read message error...");
        }
    };
    AbstractBleProtocol.prototype.waitForLwm2mResponse = function () {
        var _this = this;
        console.log("AbstractBleProtocol:read()");
        return new Promise(function (resolve, reject) {
            _this._readResolve = resolve;
            _this._readReject = reject;
        });
    };
    // send(data: Uint8Array): Observable<Uint8Array> {
    //     console.info("BLEProtocol:send() " + FormatHelper.toHexString(data));
    //     return from(
    //         this
    //             .write(data)
    //             .then(() => this.waitForLwm2mResponse())
    //             .catch((err) => {
    //                 console.error("ERROR SEND " + err);
    //                 throw err;
    //             })
    //     );
    // }
    AbstractBleProtocol.prototype.read = function () {
        var _this = this;
        if (this.packetBuilder) {
            // throw new Error(`Multiple write detected.`);
            console.warn("AbstractBleProtocol::read() There is already a read operation in progress but a new call to ::read has been made.");
        }
        this.packetBuilder = null;
        return this
            .waitForLwm2mResponse()
            .then(function (response) {
            _this.packetBuilder = null;
            return response;
        });
    };
    AbstractBleProtocol.prototype.write = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var packets, promise, i;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("BLEProtocol", "write", core_1.FormatHelper.toHexString(data));
                if (this.packetSplitter != null) {
                    // TODO maybe we need to add a stack ?
                    // throw new Error("There are already data being sent");
                    console.warn("BLEProtocol", "write", "There are already data being sent but a new call to ::write has been made");
                }
                this.packetSplitter = ble_packet_splitter_1.BLEPacketSplitter.wrapWithChecksum(data, ble_config_1.BleConfig.maxPacketLengthWithoutOffset);
                packets = this.packetSplitter.getPackets();
                if (packets.length > 0) {
                    i = 0;
                    packets.forEach(function (value, index) {
                        if (!promise) {
                            promise = _this.writeLwm2mPacketChunk(packets[index]);
                        }
                        else {
                            promise = promise.then(function () { return _this.writeLwm2mPacketChunk(packets[index]); });
                        }
                        promise.then(function () {
                            console.log("BLEProtocol", "write", "Done sending packet " + (index + 1) + "/" + packets.length);
                        });
                    });
                }
                else {
                    console.warn("BLEProtocol", "write", "Nothing to write...");
                    promise = Promise.resolve();
                }
                return [2 /*return*/, promise.then(function () {
                        _this.packetSplitter = null;
                        console.log("BLEProtocol", "write", "DONE sending packet " + packets.length + " packet(s)");
                    })];
            });
        });
    };
    AbstractBleProtocol.prototype.onNewLwm2mPacket = function (data) {
        if (this.packetBuilder == null) {
            this.packetBuilder = new ble_packet_builder_1.BLEPacketBuilder(AbstractBleProtocol.RECEIVED_BUFFER_LENGTH);
        }
        this.packetBuilder.append(data);
        if (this.packetBuilder.hasAllChunks()) {
            this.packetBuilder.assertValidChecksum();
            this.onNewLwm2mMessage(this.packetBuilder.getData());
        }
    };
    AbstractBleProtocol.RECEIVED_BUFFER_LENGTH = 255;
    return AbstractBleProtocol;
}(queue_com_protocol_1.QueueComProtocol));
exports.AbstractBleProtocol = AbstractBleProtocol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(34));
__export(__webpack_require__(32));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(35));
__export(__webpack_require__(92));
var Command = __webpack_require__(93);
exports.Command = Command;
var Response = __webpack_require__(37);
exports.Response = Response;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var APDUStatusCode = /** @class */ (function () {
    function APDUStatusCode() {
    }
    // "OK" status word sent in response to command (0x9000)
    APDUStatusCode.SUCCESSFUL = Uint8Array.from([0x90, 0x00]);
    return APDUStatusCode;
}());
exports.APDUStatusCode = APDUStatusCode;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(94));
__export(__webpack_require__(36));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invalid_adpu_error_1 = __webpack_require__(35);
var apdu_command_1 = __webpack_require__(36);
/**
 * Created by IoTize on 09/03/
 *
 * Model representing an application protocol data unit
 */
var APDUCommandConverter = /** @class */ (function () {
    function APDUCommandConverter() {
        this.buffer = new Uint8Array(APDUCommandConverter.APDU_BUFFER_SIZE);
    }
    /**
     * [(4) 0:3 HEADER][(1) 4:4 LENGTH][5:n PAYLOAD][ (4) STATUS CODE]
     *
     * @return
     * @throws Exception
     */
    APDUCommandConverter.prototype.encode = function (command) {
        var offset = 0;
        this.buffer[offset++] = command.getCLA();
        this.buffer[offset++] = command.getInstructionCode();
        this.buffer.set(command.getParameters(), offset);
        offset += apdu_command_1.APDUCommand.P1P2_LENGTH;
        this.buffer.set(command.getSizeOfCommandInBytes(), offset);
        offset += command.getSizeOfCommandInBytes().length;
        this.buffer.set(command.getData(), offset);
        offset += command.getData().length;
        if (command.hasExpectedResponseSize()) {
            this.buffer.set(command.getExpectedResponseSize(), offset);
            offset += command.getExpectedResponseSize().length;
        }
        return this.buffer.subarray(0, offset);
    };
    /**
     * [(4) 0:3 HEADER][(1) 4:4 LENGTH][5: PAYLOAD][ (4) STATUS CODE]
     *
     * @param buffer the input encoded data
     * @return the APDUCommand model
     * @throws InvalidAPDUException if it's not a valid APDU encoded data
     */
    APDUCommandConverter.prototype.decode = function (buffer) {
        var command = new apdu_command_1.APDUCommand();
        if (buffer == null || buffer.length < APDUCommandConverter.MIN_APDU_SIZE) {
            throw new invalid_adpu_error_1.InvalidAPDUError("Apdu is smaller than the minimum apdu size");
        }
        command.setCLA(buffer[0])
            .setInstructionCode(buffer[1])
            .setInstructionParameter(buffer[2], buffer[3]);
        // TODO here we suppose that Le = 1 byte. It's not always true
        var lenData = ((buffer[4] & 0xFF));
        command.setSizeOfCommandInBytes(lenData);
        var apduHeaderSize = 5; // TODO constant
        if (buffer.length < lenData + apduHeaderSize) {
            throw new invalid_adpu_error_1.InvalidAPDUError("Expected " + lenData + " bytes of data but found " + (buffer.length - apduHeaderSize) + " bytes in trame");
        }
        command.setData(buffer.subarray(apduHeaderSize, apduHeaderSize + lenData));
        // TODO no response size
        //        command.setExpectedResponseSize(ByteArrayHelper.subarray(buffer, -1));
        return command;
    };
    APDUCommandConverter.HEADER_LENGTH = 4;
    APDUCommandConverter.MIN_APDU_SIZE = 5;
    APDUCommandConverter.APDU_BUFFER_SIZE = 255;
    return APDUCommandConverter;
}());
exports.APDUCommandConverter = APDUCommandConverter;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var apdu_response_1 = __webpack_require__(38);
var format_helper_1 = __webpack_require__(7);
/**
 *
 *
 * Encoder/Decoder for an APDUResponse.
 *
 * Encode to bytes and decode from bytes
 */
var APDUResponseConverter = /** @class */ (function () {
    function APDUResponseConverter() {
    }
    APDUResponseConverter.prototype.encode = function (apduResponse) {
        console.log(APDUResponseConverter.TAG, "encode() ", apduResponse.toString());
        var dataLength = apduResponse.getData().length;
        var buffer = new Uint8Array(dataLength + apduResponse.getStatus().length);
        var offset = 0;
        buffer.set(apduResponse.getData(), offset);
        offset += dataLength;
        buffer.set(apduResponse.getStatus(), offset);
        return buffer;
    };
    APDUResponseConverter.prototype.decode = function (buffer) {
        console.log(APDUResponseConverter.TAG, "decode() ", format_helper_1.FormatHelper.toHexString(buffer));
        var response = new apdu_response_1.APDUResponse();
        response
            .setStatus(buffer.subarray(-APDUResponseConverter.STATUS_WORD_LENGTH))
            .setData(buffer.subarray(0, -APDUResponseConverter.STATUS_WORD_LENGTH));
        return response;
    };
    APDUResponseConverter.TAG = "APDUResponseConverter";
    APDUResponseConverter.STATUS_WORD_LENGTH = 2;
    return APDUResponseConverter;
}());
exports.APDUResponseConverter = APDUResponseConverter;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(39));
__export(__webpack_require__(42));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(40));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(17), __webpack_require__(41));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(17));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(20), __webpack_require__(21));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(11), __webpack_require__(12), __webpack_require__(10), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(11), __webpack_require__(12), __webpack_require__(10), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(11), __webpack_require__(12), __webpack_require__(10), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(11), __webpack_require__(12), __webpack_require__(10), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(0), __webpack_require__(11), __webpack_require__(12), __webpack_require__(10), __webpack_require__(4));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var PQueue = __webpack_require__(121);
var JobQueue = /** @class */ (function () {
    function JobQueue() {
        this.queue = new PQueue({ concurrency: 1 });
    }
    JobQueue.prototype.add = function (item) {
        var observable = new rxjs_1.Subject();
        this.queue.add(function () {
            var obs = item();
            obs.subscribe(observable);
            return obs.toPromise();
        });
        return observable;
    };
    JobQueue.prototype.onEmpty = function () {
        return this.queue.onEmpty();
    };
    Object.defineProperty(JobQueue.prototype, "size", {
        get: function () {
            return this.queue.size;
        },
        enumerable: true,
        configurable: true
    });
    return JobQueue;
}());
exports.JobQueue = JobQueue;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comp) {
	let first = 0;
	let count = array.length;

	while (count > 0) {
		const step = (count / 2) | 0;
		let it = first + step;

		if (comp(array[it], value) <= 0) {
			first = ++it;
			count -= step + 1;
		} else {
			count = step;
		}
	}

	return first;
}

class PriorityQueue {
	constructor() {
		this._queue = [];
	}

	enqueue(run, opts) {
		opts = Object.assign({
			priority: 0
		}, opts);

		const element = {priority: opts.priority, run};

		if (this.size && this._queue[this.size - 1].priority >= opts.priority) {
			this._queue.push(element);
			return;
		}

		const index = lowerBound(this._queue, element, (a, b) => b.priority - a.priority);
		this._queue.splice(index, 0, element);
	}

	dequeue() {
		return this._queue.shift().run;
	}

	get size() {
		return this._queue.length;
	}
}

class PQueue {
	constructor(opts) {
		opts = Object.assign({
			concurrency: Infinity,
			autoStart: true,
			queueClass: PriorityQueue
		}, opts);

		if (!(typeof opts.concurrency === 'number' && opts.concurrency >= 1)) {
			throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${opts.concurrency}\` (${typeof opts.concurrency})`);
		}

		this.queue = new opts.queueClass(); // eslint-disable-line new-cap
		this._queueClass = opts.queueClass;
		this._pendingCount = 0;
		this._concurrency = opts.concurrency;
		this._isPaused = opts.autoStart === false;
		this._resolveEmpty = () => {};
		this._resolveIdle = () => {};
	}

	_next() {
		this._pendingCount--;

		if (this.queue.size > 0) {
			if (!this._isPaused) {
				this.queue.dequeue()();
			}
		} else {
			this._resolveEmpty();
			this._resolveEmpty = () => {};

			if (this._pendingCount === 0) {
				this._resolveIdle();
				this._resolveIdle = () => {};
			}
		}
	}

	add(fn, opts) {
		return new Promise((resolve, reject) => {
			const run = () => {
				this._pendingCount++;

				try {
					Promise.resolve(fn()).then(
						val => {
							resolve(val);
							this._next();
						},
						err => {
							reject(err);
							this._next();
						}
					);
				} catch (err) {
					reject(err);
					this._next();
				}
			};

			if (!this._isPaused && this._pendingCount < this._concurrency) {
				run();
			} else {
				this.queue.enqueue(run, opts);
			}
		});
	}

	addAll(fns, opts) {
		return Promise.all(fns.map(fn => this.add(fn, opts)));
	}

	start() {
		if (!this._isPaused) {
			return;
		}

		this._isPaused = false;
		while (this.queue.size > 0 && this._pendingCount < this._concurrency) {
			this.queue.dequeue()();
		}
	}

	pause() {
		this._isPaused = true;
	}

	clear() {
		this.queue = new this._queueClass(); // eslint-disable-line new-cap
	}

	onEmpty() {
		// Instantly resolve if the queue is empty
		if (this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveEmpty;
			this._resolveEmpty = () => {
				existingResolve();
				resolve();
			};
		});
	}

	onIdle() {
		// Instantly resolve if none pending
		if (this._pendingCount === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveIdle;
			this._resolveIdle = () => {
				existingResolve();
				resolve();
			};
		});
	}

	get size() {
		return this.queue.size;
	}

	get pending() {
		return this._pendingCount;
	}

	get isPaused() {
		return this._isPaused;
	}
}

module.exports = PQueue;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(22);
var ObservableHelper = /** @class */ (function () {
    function ObservableHelper() {
    }
    ObservableHelper.timeout = function (obs, timeout) {
        if (timeout) {
            obs = obs.pipe(operators_1.timeout(timeout));
        }
        return obs;
    };
    return ObservableHelper;
}());
exports.ObservableHelper = ObservableHelper;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Converter = __webpack_require__(124);
exports.Converter = Converter;
var Response = __webpack_require__(125);
exports.Response = Response;
var Request = __webpack_require__(47);
exports.Request = Request;
__export(__webpack_require__(49));


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(45));
__export(__webpack_require__(46));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lwm2m_response_converter_1 = __webpack_require__(127);
var crypted_frame_converter_1 = __webpack_require__(129);
var core_1 = __webpack_require__(3);
var command_1 = __webpack_require__(52);
var operators_1 = __webpack_require__(22);
var default_command_encoder_1 = __webpack_require__(53);
var response_decoder_1 = __webpack_require__(54);
var response_1 = __webpack_require__(37);
var lwm2m_command_converter_1 = __webpack_require__(25);
var DefaultIoTizeClient = /** @class */ (function () {
    function DefaultIoTizeClient(requestEncoder, responseDecoder) {
        var _this = this;
        this.lwm2mResponseConverter = new lwm2m_response_converter_1.IotizeLWM2MResponseConverter();
        this._lwm2mCommandConverter = new lwm2m_command_converter_1.IotizeLWM2MCommandConverter();
        this._apduResponseConverter = new response_1.APDUResponseConverter();
        this._cryptedFrameConverter = new crypted_frame_converter_1.CryptedFrameConverter({
            next: function () {
                return _this.cmdCounter++;
            }
        });
        this.commandConverter = requestEncoder;
        this.responseDecoder = responseDecoder;
        this.protocols = {};
        this._options = {
            encryption: false
        };
        this.cmdCounter = 0;
        // this._encryptionAlgo = encryptionAlgo;
    }
    Object.defineProperty(DefaultIoTizeClient.prototype, "cryptedFrameConverter", {
        get: function () {
            return this._cryptedFrameConverter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enable/Disable encrytion when communicating with a device
     * @param value true if requests must be encrypted
     */
    DefaultIoTizeClient.prototype.enableEncryption = function (value, algo) {
        if (value) {
            if (!algo) {
                throw new Error('Illegal argument, algo must not be null');
            }
            return this._startEncryption(algo);
        }
        else {
            return this._stopEncryption();
        }
    };
    DefaultIoTizeClient.create = function (protocol) {
        var client = new DefaultIoTizeClient(new default_command_encoder_1.DefaultCommandEncoder(), new response_decoder_1.DefaultResponseDecoder());
        if (protocol) {
            client.addComProtocol(protocol);
        }
        return client;
    };
    DefaultIoTizeClient.prototype.getEncryptionAlgo = function () {
        return this._encryptionAlgo;
    };
    DefaultIoTizeClient.prototype.setEncryptionAlgo = function (algo) {
        this._encryptionAlgo = algo;
    };
    DefaultIoTizeClient.prototype.isConnected = function () {
        return this.hasProtocol(this.currentProtocolId) && this.getCurrentProtocol().isConnected();
    };
    DefaultIoTizeClient.prototype.getCurrentProtocol = function () {
        if (!this.currentProtocolId) {
            throw new Error("Not protocol");
        }
        if (!this.hasProtocol(this.currentProtocolId)) {
            throw new Error("Protocol " + this.currentProtocolId + " does not exist");
        }
        return this.protocols[this.currentProtocolId];
    };
    DefaultIoTizeClient.prototype.addComProtocol = function (newProtocol, id) {
        if (id === void 0) { id = 'default'; }
        if (!this.currentProtocolId) {
            this.currentProtocolId = id;
        }
        this.protocols[this.currentProtocolId] = newProtocol;
        return this;
    };
    DefaultIoTizeClient.prototype.switchProtocol = function (name) {
        if (!this.hasProtocol(name)) {
            throw new Error("Unkonwn protocol: " + name);
        }
        this.currentProtocolId = name;
        return this;
    };
    DefaultIoTizeClient.prototype.hasProtocol = function (id) {
        return id in this.protocols;
    };
    DefaultIoTizeClient.prototype.connect = function () {
        return this.getCurrentProtocol().connect();
    };
    DefaultIoTizeClient.prototype.disconnect = function () {
        return this.getCurrentProtocol().disconnect();
    };
    DefaultIoTizeClient.prototype._encryptedCommand = function (command, bodyDecoder) {
        var _this = this;
        if (!this._cryptedFrameConverter) {
            throw new Error("Crypted convert has not been specified yet");
        }
        if (!this._encryptionAlgo) {
            throw new Error("Cryto algo has not been specified yet");
        }
        var iotizeFrame = this._lwm2mCommandConverter.encode(command);
        var cryptedFrameWarpper = this._cryptedFrameConverter.encode(iotizeFrame);
        var cryptedFrame = this._encryptionAlgo.encode(cryptedFrameWarpper);
        return this
            ._command(command_1.Command.GET("/1024//48", cryptedFrame)) // TODO constants
            .pipe(operators_1.map(function (crypterWarpperResponse) {
            console.log("Iotize client crypted frame: " + crypterWarpperResponse);
            if (!crypterWarpperResponse.isSuccess()) {
                // TODO throw ? 
                return crypterWarpperResponse;
            }
            var cryptedFrameContent = _this._encryptionAlgo.decode(crypterWarpperResponse.rawBody());
            console.log("Decrypted frame value: " + core_1.FormatHelper.toHexString(cryptedFrameContent));
            var apduFrame = _this._cryptedFrameConverter.decode(cryptedFrameContent);
            var lwm2mResponseFrame = _this._apduResponseConverter.decode(apduFrame);
            // TODO do we need to check apdu status ? 
            var response = _this.lwm2mResponseConverter.decode(lwm2mResponseFrame.data);
            if (bodyDecoder) {
                response.setBodyDecoder(bodyDecoder);
            }
            console.log("Iotize client decoded response: " + response);
            return response;
        }));
    };
    DefaultIoTizeClient.prototype._startEncryption = function (encryptionAlog) {
        console.log("_startEncryption");
        this._options.encryption = true;
        this.cmdCounter = 0;
        this._encryptionAlgo = encryptionAlog;
        this._options.encryption = true;
        return Promise.resolve();
    };
    DefaultIoTizeClient.prototype._stopEncryption = function () {
        this._options.encryption = false;
        // throw new Error('Not implemented');
        return Promise.resolve();
    };
    DefaultIoTizeClient.prototype.command = function (command, bodyDecoder) {
        if (this._options.encryption) {
            return this._encryptedCommand(command, bodyDecoder);
        }
        else {
            return this._command(command, bodyDecoder);
        }
    };
    DefaultIoTizeClient.prototype._command = function (command, bodyDecoder) {
        var _this = this;
        if (!this.isConnected()) {
            // TODO return as observable error ? 
            throw new Error("Trying to execute commant but device is not connected");
        }
        var dataIn;
        var method = command.getMethod();
        try {
            console.log(DefaultIoTizeClient.TAG, "Executing request: " + command);
            dataIn = this.commandConverter.encode(command);
        }
        catch (e) {
            throw new Error("Cannot encode this request: " + command + ". Error: " + e);
        }
        console.log(DefaultIoTizeClient.TAG, 'Sending data: ', core_1.FormatHelper.toHexString(dataIn));
        var observable = this.getCurrentProtocol()
            .send(dataIn)
            .pipe(operators_1.map(function (result) {
            console.log(DefaultIoTizeClient.TAG, "Received result: ", core_1.FormatHelper.toHexString(result), "DECODER: ", bodyDecoder);
            var response = _this.responseDecoder.decode(result);
            if (bodyDecoder) {
                // console.log(`SETTING BODY DECODER: `, bodyDecoder);
                response.setBodyDecoder(bodyDecoder);
            }
            console.info(DefaultIoTizeClient.TAG, "Command \"" + command.toString() + "\" => Response: " + response.toString());
            return response;
        }));
        // observable.pipe(first()).subscribe((result: Uint8Array) => {
        //     let response: Response<any> = this.responseDecoder.decode(result);
        //     console.info(DefaultIoTizeClient.TAG, `CommandBIS "${command.toString()}" => Response: ${response.toString()}`);
        // });
        return observable;
    };
    DefaultIoTizeClient.prototype.onConnectionStateChange = function () {
        return this.getCurrentProtocol().onConnectionStateChange();
    };
    DefaultIoTizeClient.TAG = "DeviceClient";
    return DefaultIoTizeClient;
}());
exports.DefaultIoTizeClient = DefaultIoTizeClient;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = __webpack_require__(51);
var core_1 = __webpack_require__(3);
var IotizeLWM2MResponseConverter = /** @class */ (function () {
    function IotizeLWM2MResponseConverter() {
    }
    IotizeLWM2MResponseConverter.prototype.decode = function (frame) {
        console.log("IotizeLWM2MResponseConverter decode " + core_1.FormatHelper.toHexString(frame));
        var response = new response_1.Response(frame);
        return response;
    };
    IotizeLWM2MResponseConverter.prototype.encode = function (response) {
        return response.toBytes();
    };
    return IotizeLWM2MResponseConverter;
}());
exports.IotizeLWM2MResponseConverter = IotizeLWM2MResponseConverter;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LWM2MError = /** @class */ (function (_super) {
    __extends(LWM2MError, _super);
    function LWM2MError(message) {
        return _super.call(this, message) || this;
    }
    return LWM2MError;
}(Error));
exports.LWM2MError = LWM2MError;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crc_1 = __webpack_require__(34);
var byte_buffer_1 = __webpack_require__(5);
var number_decoder_1 = __webpack_require__(9);
var format_helper_1 = __webpack_require__(7);
var util_1 = __webpack_require__(134);
;
/**
 * TODO CRC algo must be check/Implemented
 */
var CryptedFrameConverter = /** @class */ (function () {
    function CryptedFrameConverter(frameIdGenerator) {
        this.options = {
            moduloPad: CryptedFrameConverter.DEFAULT_MODULO_PAD,
            skipCRCCheck: false
        };
        this.frameIdGenerator = frameIdGenerator;
    }
    CryptedFrameConverter.prototype.encode = function (data) {
        var sizesInfo = this._computeSizes(data.length);
        var byteBuffer = byte_buffer_1.ByteBuffer.create(sizesInfo.total);
        byteBuffer.addNumber(this.frameIdGenerator.next(), CryptedFrameConverter.ID_LENGTH);
        // TODO check if dataSize fi in FRAME_SIZE_LENGTH
        byteBuffer.addNumber(data.length, CryptedFrameConverter.FRAME_SIZE_LENGTH);
        byteBuffer.add(data);
        // TODO generate random padding
        this._addPadding(byteBuffer, sizesInfo.padding);
        console.log('CryptedFrameConverter', "::encode()", "size info padding: " + sizesInfo.padding);
        // let crcLength = data.length + sizesInfo.padding;/
        var crc = this._computeCRC(byteBuffer.data);
        byteBuffer.addNumber(crc, CryptedFrameConverter.CRC_LENGTH);
        console.log('CryptedFrameConverter', "::encode()", "Computed crc is: " + crc + " (0x" + crc.toString(16) + ")");
        return byteBuffer.data;
    };
    CryptedFrameConverter.prototype.decode = function (frame) {
        if (!frame) {
            throw new Error("Illegal data: frame is null");
        }
        console.log('CryptedFrameConverter', '::decode()', "" + format_helper_1.FormatHelper.toHexString(frame));
        var byteBuffer = new byte_buffer_1.ByteBuffer(frame);
        // Read ID
        var frameId = byteBuffer.readNumber(CryptedFrameConverter.ID_LENGTH);
        var frameSize = byteBuffer.readNumber(CryptedFrameConverter.FRAME_SIZE_LENGTH);
        console.log('CryptedFrameConverter', '::decode()', "Frame size = " + frameSize);
        var subData = byteBuffer.readArray(frameSize);
        var sizeInfos = this._computeSizes(subData.length);
        if (frame.length > sizeInfos.total) {
            throw new Error("Expecting frame size of " + sizeInfos.total + " but found " + frame.length);
        }
        console.log('CryptedFrameConverter', '::decode()', "decode size info padding: " + sizeInfos.padding);
        byteBuffer.forward(sizeInfos.padding);
        var crc = byteBuffer.readNumber(4) >>> 0;
        var computedCrc = this._computeCRC(byteBuffer.data);
        if (crc != computedCrc) {
            if (this.options.skipCRCCheck) {
                console.warn('Found invalid CRC but options "skipCRCCheck" has been set');
            }
            else {
                throw new Error("Invalid crc read " + crc + ". Should be " + computedCrc);
            }
        }
        return subData;
    };
    CryptedFrameConverter.prototype._addPadding = function (byteBuffer, size) {
        if (size >= this.options.moduloPad) {
            throw new Error("Internal error: padding size should not be >= " + this.options.moduloPad + " (found " + size + ")");
        }
        if (!this.paddingGenerator) {
            byteBuffer.forward(size);
        }
        else {
            var data = this.paddingGenerator(size);
            if (data.byteLength != size) {
                throw new Error("Invalid padding generator. Should return only " + size + " bytes");
            }
            byteBuffer.add(data);
        }
    };
    CryptedFrameConverter.prototype._computeSizes = function (dataSize) {
        var frameSizeWithoutPadding = CryptedFrameConverter.CRC_LENGTH
            + CryptedFrameConverter.ID_LENGTH
            + CryptedFrameConverter.FRAME_SIZE_LENGTH
            + dataSize;
        var paddingSize = util_1.Util.computePadding(frameSizeWithoutPadding, this.options.moduloPad);
        var totalSize = frameSizeWithoutPadding + paddingSize;
        if ((totalSize % this.options.moduloPad) !== 0) {
            throw new Error("Internal error: invalid computation of padding.");
        }
        return {
            padding: paddingSize,
            total: frameSizeWithoutPadding + paddingSize
        };
    };
    CryptedFrameConverter.prototype._addToBuffer = function (frame, value, offset, sizeOf) {
        frame.set(number_decoder_1.NumberConverter.toOpaqueMsb(value, sizeOf), offset);
        return offset + sizeOf;
    };
    CryptedFrameConverter.prototype._computeCRC = function (frame) {
        var crcSubFrame = frame.slice(0, frame.length - CryptedFrameConverter.CRC_LENGTH);
        console.log("CRC computed from sub frame 0x" + format_helper_1.FormatHelper.toHexString(crcSubFrame) + " (full frame = 0x" + format_helper_1.FormatHelper.toHexString(frame) + ")");
        return crc_1.CRC.fromBytes(crcSubFrame) >>> 0;
    };
    CryptedFrameConverter.CRC_LENGTH = 4;
    CryptedFrameConverter.ID_LENGTH = 2;
    CryptedFrameConverter.FRAME_SIZE_LENGTH = 2;
    CryptedFrameConverter.DEFAULT_MODULO_PAD = 16;
    return CryptedFrameConverter;
}());
exports.CryptedFrameConverter = CryptedFrameConverter;


/***/ }),
/* 130 */
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 132 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 133 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.computePadding = function (size, modulo) {
        return (modulo - (size % modulo)) % modulo;
    };
    return Util;
}());
exports.Util = Util;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathParameter = /** @class */ (function () {
    function PathParameter() {
    }
    PathParameter.fillParam = function (path, key, value) {
        var map = {};
        map[key] = value;
        return PathParameter.fillParams(path, map);
    };
    /**
     * Same as fillParams but will throw an error if some parameters has not been replaced
     */
    PathParameter.fillAllParams = function (path, pathParameters) {
        path = PathParameter.fillParams(path, pathParameters);
        var remainingArgs = PathParameter.extractParams(path);
        if (remainingArgs.length > 0) {
            // console.warn(`There are remaining args`, remainingArgs);
            throw new Error("Bad request. Some parameter have not been substitute: " + remainingArgs);
        }
        return path;
    };
    PathParameter.fillParams = function (path, mapping) {
        for (var key in mapping) {
            var match = '{' + key + '}';
            if (path.indexOf(match) >= 0) {
                path = path.replace(match, mapping[key].toString());
            }
            else {
                throw new Error("Parameter " + key + " does not exist in path: " + path);
            }
        }
        return path;
    };
    /**
     *
     * @param path
     * @returns names of path parameters
     */
    PathParameter.extractParams = function (path) {
        var found = [], rxp = PathParameter.PARAMETER_REGEX, curMatch;
        while (curMatch = rxp.exec(path)) {
            found.push(curMatch[1]);
        }
        return found;
    };
    PathParameter.hasParams = function (path) {
        return PathParameter.extractParams(path).length > 0;
    };
    PathParameter.PARAMETER_REGEX = /{([^}]+)}/g;
    return PathParameter;
}());
exports.PathParameter = PathParameter;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var StringConverter = /** @class */ (function () {
    function StringConverter() {
    }
    StringConverter.prototype.decode = function (body) {
        if (body != null) {
            return core_1.FormatHelper.toAsciiString(body);
        }
        else {
            return "";
        }
    };
    StringConverter.prototype.encode = function (value) {
        return core_1.FormatHelper.toByteBuffer(value);
    };
    StringConverter.instance = function () {
        if (!StringConverter._instance) {
            StringConverter._instance = new StringConverter();
        }
        return StringConverter._instance;
    };
    return StringConverter;
}());
exports.StringConverter = StringConverter;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var BooleanConverter = /** @class */ (function () {
    function BooleanConverter(trueValueMask) {
        this._mask = trueValueMask ? trueValueMask : 0x1;
    }
    BooleanConverter.prototype.decode = function (data) {
        var value = core_1.FormatHelper.toUnsignedInt(data, data.length, BooleanConverter.IS_LEAST_SIGNIFICANT_BIT_FIRST);
        return BooleanConverter.decodeFromNumber(this._mask, value);
    };
    BooleanConverter.prototype.encode = function (value) {
        return Uint8Array.from([value ? this._mask : ~this._mask]);
    };
    BooleanConverter.decodeFromNumber = function (mask, value) {
        return (mask == 0 && value == 0) || (value & mask) != 0;
    };
    BooleanConverter.instanceBit0 = function () {
        if (!BooleanConverter._instance) {
            BooleanConverter._instance = new BooleanConverter(1);
        }
        return BooleanConverter._instance;
    };
    BooleanConverter.IS_LEAST_SIGNIFICANT_BIT_FIRST = true;
    return BooleanConverter;
}());
exports.BooleanConverter = BooleanConverter;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Ipv4StringConverter = /** @class */ (function () {
    function Ipv4StringConverter() {
    }
    Ipv4StringConverter.prototype.decode = function (body) {
        if (body == null || body.length != 4) {
            throw new Error("Expected an array of 4 bytes representing an ip. Found: " + body);
        }
        var result = "";
        var values = Array.from(body);
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var part = values_1[_i];
            result += part.toString() + ".";
        }
        return result.substr(0, result.length - 1);
    };
    Ipv4StringConverter.prototype.encode = function (ip) {
        var parts = ip.split(".");
        if (parts.length != 4) {
            throw new Error("Invalid ip format. Should be x.x.x.x");
        }
        // FormatHelper.toByteBuffer
        var result = new Uint8Array(4);
        parts.map(function (value, index) {
            result[index] = parseInt(value) & 0xFF;
        });
        return result;
    };
    Ipv4StringConverter.instance = function () {
        if (!Ipv4StringConverter._instance) {
            Ipv4StringConverter._instance = new Ipv4StringConverter();
        }
        return Ipv4StringConverter._instance;
    };
    return Ipv4StringConverter;
}());
exports.Ipv4StringConverter = Ipv4StringConverter;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var MacAddressStringConverter = /** @class */ (function () {
    function MacAddressStringConverter() {
    }
    MacAddressStringConverter.prototype.decode = function (body) {
        if (body == null || body.length != MacAddressStringConverter.EXPECTED_ARRAY_LENGTH) {
            throw new Error("Expected an array of " + MacAddressStringConverter.EXPECTED_ARRAY_LENGTH + " bytes representing a MAC address. Found: " + body);
        }
        var result = "";
        for (var i = 0; i < body.length; i++) {
            var part = body.slice(i, i + 1);
            result += core_1.FormatHelper.toHexString(part).toUpperCase() + ":";
        }
        return result.substr(0, result.length - 1);
    };
    MacAddressStringConverter.prototype.encode = function (value) {
        var parts = value.split(":");
        if (parts.length != 6) {
            throw new Error("Invalid mac address format: " + value);
        }
        var result = new Uint8Array(parts.length);
        parts.map(function (value, index) {
            result[index] = parseInt(value) & 0xFF;
        });
        return result;
    };
    MacAddressStringConverter.instance = function () {
        if (!MacAddressStringConverter._instance) {
            MacAddressStringConverter._instance = new MacAddressStringConverter();
        }
        return MacAddressStringConverter._instance;
    };
    MacAddressStringConverter.EXPECTED_ARRAY_LENGTH = 6;
    return MacAddressStringConverter;
}());
exports.MacAddressStringConverter = MacAddressStringConverter;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var HexStringConverter = /** @class */ (function () {
    function HexStringConverter() {
    }
    HexStringConverter.prototype.decode = function (value) {
        return core_1.FormatHelper.toHexString(value);
    };
    HexStringConverter.prototype.encode = function (value) {
        if (!value || value.length == 0) {
            return new Uint8Array(0);
        }
        if (value.length % 2 > 0) {
            // Prefix with 0
            value = "0" + value;
        }
        var result = [];
        for (var i = 0, len = value.length; i < len; i += 2) {
            result.push(parseInt(value.substr(i, 2), 16));
        }
        return new Uint8Array(result);
    };
    HexStringConverter.instance = function () {
        if (!HexStringConverter._instance) {
            HexStringConverter._instance = new HexStringConverter();
        }
        return HexStringConverter._instance;
    };
    return HexStringConverter;
}());
exports.HexStringConverter = HexStringConverter;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_decoder_1 = __webpack_require__(9);
var FloatConverter = /** @class */ (function () {
    function FloatConverter(options) {
        this.options = options;
    }
    FloatConverter.prototype.encode = function (value) {
        return number_decoder_1.NumberConverter.toOpaqueMsb(FloatConverter.toArray(value), 32);
    };
    FloatConverter.prototype.decode = function (body) {
        return FloatConverter.toFloat(body);
    };
    /**
     *
     * @see https://stackoverflow.com/questions/3096646/how-to-convert-a-floating-point-number-to-its-binary-representation-ieee-754-i
     * @param number
     */
    FloatConverter.toArray = function (number) {
        var n = +number, status = (n !== n) || n == -Infinity || n == +Infinity ? n : 0, exp = 0, len = 281, // 2 * 127 + 1 + 23 + 3,
        bin = new Array(len), signal = (n = status !== 0 ? 0 : n) < 0, n = Math.abs(n), intPart = Math.floor(n), floatPart = n - intPart, i, lastBit, rounded, j, exponent;
        if (status !== 0) {
            if (n !== n) {
                return 0x7fc00000;
            }
            if (n === Infinity) {
                return 0x7f800000;
            }
            if (n === -Infinity) {
                return 0xff800000;
            }
        }
        i = len;
        while (i) {
            bin[--i] = 0;
        }
        i = 129;
        while (intPart && i) {
            bin[--i] = intPart % 2;
            intPart = Math.floor(intPart / 2);
        }
        i = 128;
        while (floatPart > 0 && i) {
            (bin[++i] = (floatPart *= 2) >= 1 ? 1 : 0) && --floatPart;
        }
        i = -1;
        while (++i < len && !bin[i])
            ;
        if (bin[(lastBit = 22 + (i = (exp = 128 - i) >= -126 && exp <= 127 ? i + 1 : 128 - (exp = -127))) + 1]) {
            if (!(rounded = bin[lastBit])) {
                j = lastBit + 2;
                while (!rounded && j < len) {
                    rounded = bin[j++];
                }
            }
            j = lastBit + 1;
            while (rounded && --j >= 0) {
                (bin[j] = !bin[j] - 0) && (rounded = 0);
            }
        }
        i = i - 2 < 0 ? -1 : i - 3;
        while (++i < len && !bin[i])
            ;
        (exp = 128 - i) >= -126 && exp <= 127 ? ++i : exp < -126 && (i = 255, exp = -127);
        (intPart || status !== 0) && (exp = 128, i = 129, status == -Infinity ? signal = true : (status !== status) && (bin[i] = 1));
        n = Math.abs(exp + 127);
        exponent = 0;
        j = 0;
        while (j < 8) {
            exponent += (n % 2) << j;
            n >>= 1;
            j++;
        }
        var mantissa = 0;
        n = i + 23;
        for (; i < n; i++) {
            mantissa = (mantissa << 1) + bin[i];
        }
        return ((signal ? 0x80000000 : 0) + (exponent << 23) + mantissa) | 0;
    };
    FloatConverter.toFloat = function (val) {
        return FloatConverter.numberToFloat(number_decoder_1.NumberConverter.fromOpaqueMsb(val, 32));
    };
    FloatConverter.numberToFloat = function (val) {
        var bits = 1 * val;
        var sign = ((bits & 0x80000000) == 0) ? 1 : -1;
        var exponent = ((bits & 0x7f800000) >> 23);
        var mantissa = (bits & 0x007fffff);
        mantissa |= 0x00800000;
        var f = 1.0 * (sign * mantissa * Math.pow(2, exponent - 150));
        return parseFloat(f.toFixed(5));
    };
    FloatConverter.instance32 = function () {
        if (!FloatConverter._instance32) {
            FloatConverter._instance32 = new FloatConverter();
        }
        return FloatConverter._instance32;
    };
    return FloatConverter;
}());
exports.FloatConverter = FloatConverter;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
/**
 * Created by Stephane on 02/02/2018.
 */
var DefaultResponseEncoder = /** @class */ (function () {
    function DefaultResponseEncoder() {
        this.encoder = new core_1.APDU.Response.APDUResponseConverter();
    }
    DefaultResponseEncoder.prototype.encode = function (response) {
        var apduResponse = new core_1.APDU.Response.APDUResponse();
        apduResponse.setData(response.toBytes());
        apduResponse.setStatus(core_1.APDU.APDUStatusCode.SUCCESSFUL);
        return this.encoder.encode(apduResponse);
    };
    return DefaultResponseEncoder;
}());
exports.DefaultResponseEncoder = DefaultResponseEncoder;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lwm2m_command_converter_1 = __webpack_require__(25);
var core_1 = __webpack_require__(3);
var DefaultCommandDecoder = /** @class */ (function () {
    function DefaultCommandDecoder() {
        this.iotizeFrameConverter = new lwm2m_command_converter_1.IotizeLWM2MCommandConverter();
        this.apduDecoder = new core_1.APDU.Command.APDUCommandConverter();
    }
    DefaultCommandDecoder.instance = function () {
        return new DefaultCommandDecoder();
    };
    DefaultCommandDecoder.prototype.decode = function (iotizeEncodedCommandWithAPDU) {
        console.log(DefaultCommandDecoder.TAG, "Decoding command (with APDU): ", core_1.FormatHelper.toHexString(iotizeEncodedCommandWithAPDU));
        var apduModel = this.apduDecoder.decode(iotizeEncodedCommandWithAPDU);
        //        byte cmd = apduModel.getInstructionCode();
        // Data
        //        var data;
        //        if (lenData > 0) {
        //            data = new byte[lenData];
        //            System.arraycopy(buffer, 12, data, 0, lenData);
        //        }
        //        else{
        //            data = null;
        //        }
        var frame = apduModel.getData();
        console.log(DefaultCommandDecoder.TAG, "Command apdu payload: ", core_1.FormatHelper.toHexString(frame));
        if (frame == null || frame.length == 0) {
            throw new Error("No data"); // TODO InvalidIoTizeTrame
        }
        else if (frame.length < DefaultCommandDecoder.IOTIZE_TRAME_HEADER_LENGTH) {
            throw new Error("Frame is smaller than the minimum iotize trame size");
        }
        return this.iotizeFrameConverter.decode(frame);
    };
    DefaultCommandDecoder.IOTIZE_TRAME_HEADER_LENGTH = 7;
    DefaultCommandDecoder.TAG = "DefaultCommandDecoder";
    return DefaultCommandDecoder;
}());
exports.DefaultCommandDecoder = DefaultCommandDecoder;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(15);
var TLV;
(function (TLV) {
    var decoders = {
        String: function (payload, offset, len) {
            return payload.toString('utf8', offset, offset + len);
        },
        Integer: function (payload, offset, len) {
            return payload.readIntBE(offset, len);
        },
        Float: function (payload, offset, len) {
            switch (len) {
                case 4:
                    return payload.readFloatBE(offset);
                case 8:
                    return payload.readDoubleBE(offset);
                default:
                    throw new Error("Invalid length for float: " + len);
            }
        },
        Boolean: function (payload, offset, len) {
            return payload.readUInt8(offset) ? true : false;
        },
        Opaque: function (payload, offset, len) {
            if (payload.length < offset + len) {
                throw new Error("Buffer too small. Expecting " + len + " bytes but only " + (payload.length - offset) + " avaiable(s). Offset of " + offset);
            }
            var buf = Buffer.alloc(len);
            payload.copy(buf, 0, offset, offset + len);
            return buf;
        },
        Time: function (payload, offset, len) {
            var timestamp = payload.readIntBE(offset, len);
            return new Date(timestamp * 1e3);
        },
    };
    var DataType;
    (function (DataType) {
        DataType["String"] = "String";
        DataType["Integer"] = "Integer";
        DataType["Float"] = "Float";
        DataType["Boolean"] = "Boolean";
        DataType["Opaque"] = "Opaque";
        DataType["Time"] = "Time";
        DataType["Array"] = "Array";
    })(DataType = TLV.DataType || (TLV.DataType = {}));
    var IdentifierType;
    (function (IdentifierType) {
        IdentifierType[IdentifierType["OBJECT_INSTANCE"] = 0] = "OBJECT_INSTANCE";
        IdentifierType[IdentifierType["RESOURCE_INSTANCE"] = 1] = "RESOURCE_INSTANCE";
        IdentifierType[IdentifierType["MULTIPLE_RESOURCE"] = 2] = "MULTIPLE_RESOURCE";
        IdentifierType[IdentifierType["RESOURCE_VALUE"] = 3] = "RESOURCE_VALUE";
    })(IdentifierType = TLV.IdentifierType || (TLV.IdentifierType = {}));
    var Parser = /** @class */ (function () {
        function Parser(schema, logger) {
            if (logger === void 0) { logger = console; }
            this.logger = logger;
            this.position = 0;
            this.schema = schema;
            if (this.schema) {
                throw new Error("Schema are not supported yet");
            }
        }
        /**
         *
         * @param buf
         * @param offset
         * @param tlv
         */
        Parser.prototype.readHeader = function () {
            var type, id, len;
            var header;
            header = this.buffer.readUInt8(this.position);
            this.position += 1;
            type = header >>> 6;
            if (header & 0x20) {
                id = this.buffer.readUInt16BE(this.position);
                this.position += 2;
            }
            else {
                id = this.buffer.readUInt8(this.position);
                this.position += 1;
            }
            len = header & 0x7;
            if (!len) {
                switch ((header & 0x18) >>> 3) {
                    case 1:
                        len = this.buffer.readUInt8(this.position);
                        this.position += 1;
                        break;
                    case 2:
                        len = this.buffer.readUInt16BE(this.position);
                        this.position += 2;
                        break;
                    case 3:
                        len = this.buffer.readUInt16BE(this.position);
                        len = this.buffer.readUInt8(this.position);
                        this.position += 3;
                        break;
                }
            }
            var result = {
                id: id,
                type: type,
                len: len
            };
            this.debug("\t-Found header: ", result);
            return result;
        };
        Parser.prototype.readNextRecord = function () {
            var header = this.readHeader();
            var key = header.id.toString();
            if (header.type == IdentifierType.RESOURCE_VALUE || header.type == IdentifierType.RESOURCE_INSTANCE) {
                this.debug("\t-Resource value readRecords with", header);
                var payload = Buffer.alloc(header.len);
                this.buffer.copy(payload, 0, this.position, this.position + header.len);
                this.position += header.len;
                return {
                    header: header,
                    payload: payload
                };
            }
            else {
                this.debug("\t-Multiple resources found! readRecords with key " + key);
                var children = this.readAllRecords(this.position + header.len);
                return {
                    header: header,
                    children: children
                };
            }
        };
        // readNextRecord() {
        //     this.debug(`Parsing record`);
        //     var key: string, type: DataType | Array<any>;
        //     let header = this.readHeader();
        //     key = this.schema.id[header.id];
        //     // skip resources not defined in schema.
        //     if (!key) {
        //         this.debug('\t-Resource not defined in schema: %s', key);
        //         this.position += header.len;
        //         return;
        //     }
        //     this.debug(`\t-Key=${key}`);
        //     type = this.schema.resources[key].type;
        //     if (Array.isArray(type)) {
        //         this.debug(`\t-Reading array`);
        //         var end = this.position + header.len;
        //         var itemHeader: Header = {} as any;
        //         let itemValue: any;
        //         result[key] = [];
        //         while (this.position < end) {
        //             itemHeader = this.readHeader();
        //             itemValue = this.append(itemHeader, type[0]);
        //             result[key].push(itemValue); // TODO
        //         }
        //     } else {
        //         result[key] = this.append(header, type);
        //     }
        //     console.log('Intermediate result: ', result);
        // }
        Parser.prototype.append = function (header, type) {
            this.debug("\t-Append " + type + " header=", header);
            if (!(type in decoders)) {
                throw new Error("Decoder type " + type + " not found");
            }
            var result = (decoders[type])(this.buffer, this.position, header.len);
            this.debug("\t-Appending value", result);
            this.position += header.len;
            return result;
        };
        Parser.prototype.readAllRecords = function (endPosition) {
            var result = [];
            this.debug("Parsing records until position " + endPosition);
            while (this.position < endPosition) {
                result.push(this.readNextRecord());
            }
            return result;
        };
        Parser.prototype.parse = function (buffer) {
            this.position = 0;
            this.buffer = buffer;
            return this.readNextRecord();
        };
        Parser.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            if (this.logger && this.logger.debug) {
                (_a = this.logger).debug.apply(_a, args.concat(["[pos=" + this.position + "/" + (this.buffer.length - 1) + ", remaining buffer=" + format_1.FormatHelper.toHexString(this.buffer.slice(this.position)) + "]"]));
            }
        };
        return Parser;
    }());
    TLV.Parser = Parser;
    var Serializer = /** @class */ (function () {
        function Serializer() {
        }
        Serializer.prototype.serialize = function (obj, schema) {
            var buf = Buffer.alloc(16 * 1024 /*1024*/);
            var keys = Object.keys(obj);
            if (schema) {
                schema.validate(obj);
            }
            function writeHeader(buf, offset, idType, id, len) {
                function tlvType(type, id, len) {
                    var byte = type << 6;
                    if (id > 0xff) {
                        byte |= 0x1 << 5;
                    }
                    if (len < 8) {
                        byte |= len;
                    }
                    else {
                        byte |= length(len) << 3;
                    }
                    return byte;
                }
                var type = tlvType(idType, id, len);
                /* type (8-bits masked field) */
                buf.writeUInt8(type, offset);
                offset += 1;
                /* identifier (8-bit or 16-bit UInt) */
                if (type & 0x20) {
                    buf.writeUInt16BE(id, offset);
                    offset += 2;
                }
                else {
                    buf.writeUInt8(id, offset);
                    offset += 1;
                }
                /* length (0-24-bit UInt) */
                if (type & 0x18) {
                    switch (length(len)) {
                        case 3:
                            buf.writeUInt8(len >>> 0x10 & 0xff, offset);
                            offset += 1;
                        /* falls through */
                        case 2:
                            buf.writeUInt8(len >>> 0x08 & 0xff, offset);
                            offset += 1;
                        /* falls through */
                        case 1:
                            buf.writeUInt8(len & 0xff, offset);
                            offset += 1;
                            break;
                        default:
                            throw new Error('Invalid resource `' + id + '`');
                    }
                }
                return offset;
            }
            function append(buf, offset, len, value, type) {
                var types = {
                    String: function () {
                        buf.write(value, offset, buf.length - offset, 'utf8');
                        return offset += len;
                    },
                    Integer: function () {
                        buf.writeIntBE(value, offset, len);
                        return offset += len;
                    },
                    Float: function () {
                        buf.writeDoubleBE(value, offset);
                        return offset += len;
                    },
                    Boolean: function () {
                        buf.writeInt8(value, offset);
                        return offset += len;
                    },
                    Opaque: function () {
                        value.copy(buf, offset);
                        return offset += len;
                    },
                    Time: function () {
                        // convert date to timestamp in seconds
                        var timestamp = value.getTime() / 1e3 >> 0;
                        buf.writeIntBE(timestamp, offset, len);
                        return offset += len;
                    },
                };
                function skip() {
                    //this.logger.debug('Skipping resource with invalid type %s', type);
                    return offset;
                }
                return (types[type] || skip)();
            }
            function writeRecord(buf, offset, key) {
                if (schema) {
                    var res = schema.resources[key];
                }
                var val = obj[key];
                var len;
                if (Array.isArray(res.type)) {
                    var tmp = Buffer.alloc(1024);
                    var arrLen = 0;
                    val.forEach(function (elem, i) {
                        len = length(elem);
                        arrLen = writeHeader(tmp, arrLen, 1, i, len);
                        arrLen = append(tmp, arrLen, len, elem, res.type[0]);
                    });
                    offset = writeHeader(buf, offset, 2, res.id, arrLen);
                    tmp.copy(buf, offset, 0, arrLen);
                    offset += arrLen;
                }
                else {
                    len = length(val);
                    offset = writeHeader(buf, offset, 3, res.id, len);
                    offset = append(buf, offset, len, val, res.type);
                }
                return offset;
            }
            var len = 0;
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // skip resources not defined in schema
                if (!schema.resources[key]) {
                    continue;
                }
                len = writeRecord(buf, len, key);
            }
            return buf.slice(0, len);
        };
        return Serializer;
    }());
    TLV.Serializer = Serializer;
    /*
     * length in bytes of a number
     */
    function byteLength(val) {
        if (val < 2) {
            return 1;
        }
        return Math.ceil(Math.log(val) * Math.LOG2E / 8); // TODO can be shorter
    }
    function length(val) {
        // integer size: 1, 2, 4 or 8 bytes.
        function size(val) {
            var v = byteLength(val);
            v--;
            v |= v >>> 1;
            v |= v >>> 2;
            v++;
            return v;
        }
        var type = Object.prototype.toString.call(val).slice(8, -1);
        switch (type) {
            case 'Number':
                return (val % 1 === 0 ? size(val) : 8);
            case 'String':
            case 'Uint8Array':
            case 'Buffer':
                return val.length;
            case 'Boolean':
                return 1;
            case 'Date':
                return size(val.getTime() / 1e3 >> 0);
            default:
                return 0;
        }
    }
})(TLV = exports.TLV || (exports.TLV = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(146));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var single_packet_1 = __webpack_require__(50);
var SinglePacketConverter = /** @class */ (function () {
    function SinglePacketConverter(dataConverter) {
        this.dataConverter = dataConverter;
    }
    SinglePacketConverter.instance = function () {
        if (!SinglePacketConverter._instance) {
            SinglePacketConverter._instance = new SinglePacketConverter();
        }
        return SinglePacketConverter._instance;
    };
    SinglePacketConverter.prototype.encode = function (type) {
        throw new Error("Method not implemented.");
    };
    SinglePacketConverter.prototype.decode = function (packet) {
        // console.log(`SinglePacketConverter`, packet);
        var spBuf = Buffer.from(packet);
        var singlePacket = {};
        if (spBuf.length <= single_packet_1.SinglePacket.PACKET_HEADER_SIZE) {
            throw new single_packet_1.SinglePacket.PacketTooSmallError(spBuf, singlePacket);
        }
        // 16 bytes.
        singlePacket.SendTime = spBuf.readUInt32BE(0);
        singlePacket.PacketLength = spBuf.readUInt16BE(4);
        singlePacket.PacketId = spBuf.readUInt16BE(6);
        singlePacket.ConfigVersion = spBuf.readUInt32BE(8);
        singlePacket.PacketType = spBuf.readUInt8(12);
        singlePacket.SenderId = spBuf.readUInt8(13);
        singlePacket.Salt = spBuf.readUInt16BE(14);
        if (singlePacket.PacketType & single_packet_1.SinglePacket.Type.CIPHERED) {
            // Encrypted packet.
            // To be specified.
            // singlePacket.state = this.PACKETERROR_ENCRYPTED;
            throw new Error("Not implemented yet packet type: " + singlePacket.PacketType);
        }
        else {
            // Clear packet.
            singlePacket.LogTime = spBuf.readUInt32BE(16);
            singlePacket.DataSize = spBuf.readUInt16BE(20);
            var expectedSize = (single_packet_1.SinglePacket.PACKET_HEADER_SIZE + singlePacket.DataSize);
            if (spBuf.length >= expectedSize) {
                singlePacket.Data = Uint8Array.from(spBuf.slice(22, 22 + singlePacket.DataSize));
                singlePacket.CRC = spBuf.readUInt32BE(22 + singlePacket.DataSize);
            }
            else {
                throw new single_packet_1.SinglePacket.PacketTooSmallError(spBuf, singlePacket);
            }
            if (this.dataConverter) {
                singlePacket.Data = this.dataConverter.decode(singlePacket.Data);
            }
        }
        return singlePacket;
    };
    return SinglePacketConverter;
}());
exports.SinglePacketConverter = SinglePacketConverter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(148));


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client = __webpack_require__(44);
var response_error_1 = __webpack_require__(18);
var target_variable_1 = __webpack_require__(149);
var aes_ecb_128_converter_1 = __webpack_require__(42);
var scram_1 = __webpack_require__(152);
var format_helper_1 = __webpack_require__(7);
var iotize_device_services_1 = __webpack_require__(154);
var bundle_manager_1 = __webpack_require__(155);
var service_1 = __webpack_require__(158);
var api_config_factory_1 = __webpack_require__(159);
var IoTizeDevice = /** @class */ (function () {
    function IoTizeDevice(client) {
        this._client = client;
        // TODO move from here
        this._options = {
            encryption: false
        };
        this._apiConfig = api_config_factory_1.ApiConfigFactory.getDefaultInstance();
        // this._converterProvider = new ConverterProvider(PathToTypeMap, DefaultConverterMap);
        this._services = iotize_device_services_1.IoTizeDeviceService.create(this._client, this._apiConfig);
        if (!this.client.getEncryptionAlgo()) {
            this.client.setEncryptionAlgo(new aes_ecb_128_converter_1.AesEcb128Converter());
        }
        this._lwm2m = new Lwm2mInterface(this.client, this._apiConfig);
    }
    Object.defineProperty(IoTizeDevice.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (client) {
            this._client = client;
            this._services.client = client;
        },
        enumerable: true,
        configurable: true
    });
    IoTizeDevice.create = function () {
        return new IoTizeDevice(Client.Impl.DefaultIoTizeClient.create());
    };
    IoTizeDevice.fromProtocol = function (protocol) {
        var client = Client.Impl.DefaultIoTizeClient.create();
        client.addComProtocol(protocol);
        return new IoTizeDevice(client);
    };
    /**
     * Enable/Disable encrytion when communicating with a device
     * @param value true if requests must be encrypted
     */
    IoTizeDevice.prototype.enableEncryption = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var response, options, algo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.sessionKey) return [3 /*break*/, 2];
                        console.warn('IoTizeDevice', "No session key defined. Using random com start");
                        return [4 /*yield*/, this.service.scram.initialize()];
                    case 1:
                        response = _a.sent();
                        if (!response.isSuccess()) {
                            throw new Error("Cannot start crypted session");
                        }
                        this.sessionKey = response.rawBody();
                        _a.label = 2;
                    case 2:
                        console.log('IoTizeDevice', "Session key will be " + format_helper_1.FormatHelper.toHexString(this.sessionKey) + " (length=" + this.sessionKey.length + ")");
                        options = {
                            key: format_helper_1.FormatHelper.toHexString(this.sessionKey),
                            iv: "00000000000000000000000000000000"
                        };
                        algo = new aes_ecb_128_converter_1.AesEcb128Converter(options);
                        return [2 /*return*/, this.client.enableEncryption(value, algo)];
                }
            });
        });
    };
    Object.defineProperty(IoTizeDevice.prototype, "protocol", {
        get: function () {
            return this.client.getCurrentProtocol();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect with the given communication protocol
     * TODO what if there is already a connected communication protocol
     * @param protocol
     */
    IoTizeDevice.prototype.connect = function (protocol) {
        if (protocol) {
            this.client.addComProtocol(protocol, "default");
        }
        return this._client.connect().toPromise();
    };
    IoTizeDevice.prototype.disconnect = function () {
        return this._client.disconnect().toPromise();
    };
    IoTizeDevice.prototype.isConnected = function () {
        if (!this._client) {
            return false;
        }
        return this._client.isConnected();
    };
    Object.defineProperty(IoTizeDevice.prototype, "variables", {
        get: function () {
            if (!this._variableManager) {
                this._variableManager = new target_variable_1.VariableManager(this);
            }
            return this._variableManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDevice.prototype, "bundles", {
        get: function () {
            if (!this._bundleManager) {
                this._bundleManager = new bundle_manager_1.BundleManager(this.service.bundle, this.variables);
            }
            return this._bundleManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDevice.prototype, "hashPassword", {
        get: function () {
            if (!this.interfaceLockOptions) {
                return false;
            }
            return this.interfaceLockOptions.hashPassword;
        },
        set: function (enabled) {
            if (!this.interfaceLockOptions) {
                this.interfaceLockOptions = {};
            }
            this.interfaceLockOptions.hashPassword = enabled;
        },
        enumerable: true,
        configurable: true
    });
    IoTizeDevice.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.interface.logout()];
                    case 1:
                        response = _a.sent();
                        this._assertResponseSuccess(response);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    IoTizeDevice.prototype.configure = function (configurator) {
        return configurator.configure(this).toPromise();
    };
    IoTizeDevice.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, auth, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.interfaceLockOptions) return [3 /*break*/, 2];
                        this._log("Reading interface lock options from device...");
                        return [4 /*yield*/, this.service.interface.getLock()];
                    case 1:
                        response = _a.sent();
                        if (!response.isSuccess()) {
                            throw new Error("Impossible to read login options.");
                        }
                        this.interfaceLockOptions = response.body();
                        _a.label = 2;
                    case 2:
                        if (!this.interfaceLockOptions.scramActivated) return [3 /*break*/, 5];
                        console.info('IoTizeDevice', "Using scram login");
                        auth = new scram_1.ScramAuth(this);
                        return [4 /*yield*/, auth.login({
                                username: username,
                                password: password
                            })];
                    case 3:
                        _a.sent();
                        console.info('IoTizeDevice', "Scram login successful!");
                        this.sessionKey = auth.getSessionKey();
                        return [4 /*yield*/, this.enableEncryption(true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 5:
                        console.info("Using default login");
                        return [4 /*yield*/, this.service.interface.login({
                                username: username,
                                password: password,
                                hashPassword: this.interfaceLockOptions.hashPassword
                            })];
                    case 6:
                        response = _a.sent();
                        this._assertResponseSuccess(response);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Object.defineProperty(IoTizeDevice.prototype, "rooter", {
        get: function () {
            return this._apiConfig.routes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDevice.prototype, "apiConfig", {
        get: function () {
            return this._apiConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDevice.prototype, "service", {
        get: function () {
            return this._services;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDevice.prototype, "lwm2m", {
        get: function () {
            return this._lwm2m;
        },
        enumerable: true,
        configurable: true
    });
    IoTizeDevice.prototype.lwm2mCall = function () {
        var calls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            calls[_i] = arguments[_i];
        }
        if (calls.length > 1) {
            throw new Error("Multiple calls are not implemented yet");
        }
        var args = service_1.AbstractService.callToCommandArgs(calls[0], this.apiConfig);
        var response = this.client.command(args[0], args[1]).toPromise();
        return response;
    };
    IoTizeDevice.prototype._assertResponseSuccess = function (response) {
        if (!response.isSuccess()) {
            throw new response_error_1.ResponseError(response);
        }
    };
    IoTizeDevice.prototype._log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, ['IoTizeDevice'].concat(args));
    };
    IoTizeDevice.TAG = "IoTizeDevice";
    return IoTizeDevice;
}());
exports.IoTizeDevice = IoTizeDevice;
var Lwm2mInterface = /** @class */ (function () {
    function Lwm2mInterface(client, apiConfig) {
        this.client = client;
        this.apiConfig = apiConfig;
    }
    Lwm2mInterface.prototype.get = function (path, body) {
        return this.call({
            path: path,
            methodType: 'get',
            body: body
        });
    };
    Lwm2mInterface.prototype.put = function (path, body) {
        return this.call({
            path: path,
            methodType: 'put',
            body: body
        });
    };
    Lwm2mInterface.prototype.post = function (path, body) {
        return this.call({
            path: path,
            methodType: 'post',
            body: body
        });
    };
    Lwm2mInterface.prototype.call = function () {
        var calls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            calls[_i] = arguments[_i];
        }
        var args = service_1.AbstractService.callToCommandArgs(calls[0], this.apiConfig);
        var response = this.client.command(args[0], args[1]).toPromise();
        return response;
    };
    return Lwm2mInterface;
}());
exports.Lwm2mInterface = Lwm2mInterface;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(150));


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var variable_1 = __webpack_require__(151);
var VariableManager = /** @class */ (function () {
    function VariableManager(device) {
        this.device = device;
        this._variables = {};
    }
    Object.defineProperty(VariableManager.prototype, "variables", {
        get: function () {
            return this._variables;
        },
        set: function (value) {
            this._variables = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get variable by name
     * If it does not exist, it will throw an error
     */
    VariableManager.prototype.get = function (identifier) {
        return this.variable(identifier);
    };
    /**
     * Get variable by name
     * If it does not exist, it will throw an error
     *
     * TODO remove as it's a duplicate of get()
     */
    VariableManager.prototype.variable = function (identifier) {
        // if (typeof identifier === "number"){
        //     return this.variableById(identifier as number);
        // }
        // else{
        return this.variableByName(identifier);
        // }
    };
    /**
     * Get variable by name
     * If it does not exist, it will throw an error
     */
    VariableManager.prototype.variableByName = function (identifier) {
        // let id = this.variableNameToId(name);
        if (!(identifier in this._variables)) {
            throw new Error("Variable \"" + identifier + "\" does not exist");
        }
        return this._variables[identifier];
    };
    /**
     * Get variable by id
     * If it does not exist, it will throw an error
     */
    VariableManager.prototype.getById = function (id) {
        for (var identifier in this._variables) {
            if (this._variables[identifier].variableId == id) {
                return this._variables[identifier];
            }
        }
        throw new Error("Variable with id \"" + id + "\" does not exist");
    };
    // public configureVariable(config: VariableConfig){
    //     this._variableConfigs[config.id] = config;
    //     return this;
    // }
    // public monitor(){
    //     // TODO
    // }
    VariableManager.prototype._createVariable = function (identifier, variableConfig) {
        console.log("VariableManager Creating variable " + identifier);
        var converter;
        if (typeof variableConfig.converter === "string") {
            converter = this.device.apiConfig.getBodyConverter(variableConfig.converter);
        }
        else {
            converter = variableConfig.converter;
        }
        return new variable_1.Variable(identifier, variableConfig.id, this.device.service.variable, converter);
    };
    VariableManager.prototype.add = function (identifier, configOrVariable) {
        if (configOrVariable instanceof variable_1.Variable) {
            this.variables[identifier] = configOrVariable;
        }
        else {
            this.variables[identifier] = this._createVariable(identifier, configOrVariable);
        }
        return this;
    };
    VariableManager.prototype.clear = function () {
        for (var id in this._variables) {
            this._variables[id].monitor().stop();
        }
        this._variables = {};
    };
    /**
     * TODO define constants
     */
    VariableManager.UnitSizeMap = {
        0: 1,
        1: 8,
        2: 16,
        3: 32
    };
    return VariableManager;
}());
exports.VariableManager = VariableManager;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var default_variable_monitor_1 = __webpack_require__(61);
var response_error_1 = __webpack_require__(18);
/**
 * TODO authorization
 */
var Variable = /** @class */ (function () {
    function Variable(identifier, variableId, variableService, converter) {
        this.identifier = identifier;
        this.variableId = variableId;
        this.variableService = variableService;
        this.converter = converter;
    }
    // get config(){
    //     return this._variableConfig;
    // }
    // public configure(config: VariableConfigPredefined): this {
    //     this._variableConfig = config;
    //     return this;
    // }
    Variable.prototype.write = function (value) {
        var _this = this;
        var data;
        if (this.converter) {
            data = this.converter.encode(value);
        }
        else if (value instanceof Uint8Array) {
            data = value;
        }
        else {
            return Promise.reject(new Error("Invalid argument type and no converter"));
        }
        return this.variableService
            .setValue(this.variableId, data)
            .then(function (response) {
            if (!response.isSuccess()) {
                throw new Error("Cannot write value for variable " + _this.identifier + ". Device responded with error code: " + response.codeRet());
            }
            return response.body();
        });
    };
    Variable.prototype.read = function () {
        var _this = this;
        return this
            .variableService
            .getValue(this.variableId)
            .then(function (response) {
            if (!response.isSuccess()) {
                throw new Error("Cannot read variable " + _this.identifier + " because of " + new response_error_1.ResponseError(response));
            }
            // return this._converter.decode(response as any); // TODO remove any
            var body = response.rawBody();
            return _this.converter ? _this.converter.decode(body) : body;
        });
    };
    Variable.prototype.monitor = function () {
        var _this = this;
        if (!this._monitor) {
            this._monitor = new default_variable_monitor_1.DefaultVariableMonitor({
                update: function (count) {
                    console.log("Request monitor update on " + _this.identifier);
                    return _this.read();
                }
            });
        }
        return this._monitor;
    };
    return Variable;
}());
exports.Variable = Variable;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(153));


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var impl_1 = __webpack_require__(23);
var crypto_js_1 = __webpack_require__(16);
var crypto_helper_1 = __webpack_require__(62);
var format_1 = __webpack_require__(15);
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError(code, message) {
        var _this = _super.call(this, message + (" (Error n\u00B0 " + code + ")")) || this;
        _this.code = code;
        return _this;
    }
    AuthError.Code = {
        INVALID_SERVER_PROOF: 1,
        SCRAM_DISABLED: 2
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;
var InvalidServerKey = /** @class */ (function (_super) {
    __extends(InvalidServerKey, _super);
    function InvalidServerKey(deviceServerProof, expectedServerProof) {
        var _this = _super.call(this, AuthError.Code.INVALID_SERVER_PROOF, "Login fail invalid server proof (" + format_1.FormatHelper.toHexString(deviceServerProof) + " != " + format_1.FormatHelper.toHexString(expectedServerProof) + ") ") || this;
        _this.deviceServerProof = deviceServerProof;
        _this.expectedServerProof = expectedServerProof;
        return _this;
    }
    return InvalidServerKey;
}(AuthError));
exports.InvalidServerKey = InvalidServerKey;
var ScramAuth = /** @class */ (function () {
    function ScramAuth(device) {
        this.device = device;
        this.nonceGenerator = function () {
            return Math.floor(Math.random() * 0xFFFFFFFF);
        };
        this.sessionData = {};
    }
    /**
     * Perform login
     *
     * @param params
     *
     * @throws Error if scram is not activated
     */
    ScramAuth.prototype.login = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var lockInfo, clientNonce, loginParams, loginBody, keys, serverNonce, deviceServerProof, expectedServerProof, sessionKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.device.service.interface.getLock()];
                    case 1:
                        lockInfo = (_a.sent()).body();
                        console.log('ScramAuth', 'lockInfo', lockInfo);
                        if (!lockInfo.scramActivated) {
                            throw new AuthError(AuthError.Code.SCRAM_DISABLED, 'Scram is not enabled on this device. Use another authentication method');
                        }
                        clientNonce = this.generateNonce();
                        console.debug('ScramAuth', 'clientNonce', clientNonce);
                        loginParams = {
                            username: params.username,
                            clientNonce: clientNonce
                        };
                        return [4 /*yield*/, this.device.service.scram.login(loginParams)];
                    case 2:
                        loginBody = (_a.sent()).body();
                        keys = ScramAuth.computeKeys(params, loginBody, clientNonce);
                        serverNonce = loginBody.serverNonce;
                        return [4 /*yield*/, this.device.service.scram.loginProof(keys.clientProof)];
                    case 3:
                        deviceServerProof = (_a.sent()).body();
                        expectedServerProof = keys.serverProof;
                        // TODO maybe we can find something better to test array equals ...
                        if (expectedServerProof.toString() != deviceServerProof.toString()) {
                            throw new InvalidServerKey(expectedServerProof, deviceServerProof);
                        }
                        sessionKey = ScramAuth.computeSessionKey(clientNonce, serverNonce, loginBody.salt, keys.serverKey, keys.storedKey);
                        this.sessionData.clientNonce = clientNonce;
                        this.sessionData.username = params.username;
                        this.sessionData.key = sessionKey;
                        return [2 /*return*/];
                }
            });
        });
    };
    ScramAuth.computeKeys = function (credentials, loginBody, clientNonce) {
        var hashedPassword = ScramAuth.hashPassword(credentials.password);
        // console.debug('ScramAuth', 'hashedPassword', FormatHelper.toHexString(hashedPassword));
        var saltedPassword = ScramAuth.saltedPassword(hashedPassword, loginBody.salt, loginBody.iterationNumber);
        // console.debug('ScramAuth', 'saltedPassword', FormatHelper.toHexString(saltedPassword));
        // let clientKey: Uint8Array = ScramAuth.clientKey(saltedPassword);
        // console.debug('ScramAuth', 'clientKey', FormatHelper.toHexString(clientKey));
        var storedKey = ScramAuth.storedKey(saltedPassword);
        // console.debug('ScramAuth', 'storeKey', FormatHelper.toHexString(storedKey));
        var serverKey = ScramAuth.serverKey(saltedPassword);
        // console.debug('ScramAuth', 'serverKey', FormatHelper.toHexString(serverKey));
        var clientProof = ScramAuth.clientProof(storedKey, clientNonce, loginBody.serverNonce);
        // console.debug('ScramAuth', 'clientProof', FormatHelper.toHexString(clientProof));
        var serverProof = ScramAuth.serverProof(serverKey, clientNonce, loginBody.serverNonce);
        // console.debug('ScramAuth', 'serverProof', FormatHelper.toHexString(serverProof));
        return {
            storedKey: storedKey,
            serverKey: serverKey,
            saltedPassword: saltedPassword,
            hashedPassword: hashedPassword,
            clientProof: clientProof,
            serverProof: serverProof
        };
    };
    ScramAuth.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = this.device.service.interface.logout();
                return [2 /*return*/, response];
            });
        });
    };
    ScramAuth.clientProof = function (storedKey, clientNonce, serverNonce) {
        return ScramAuth.computeProof(storedKey, clientNonce, serverNonce).subarray(0, ScramAuth.KEY_SIZE);
    };
    // computeClientProof(storedKey: Uint8Array, clientSignature: Uint8Array): Uint8Array {
    //     return ScramAuth.XOR(storedKey, clientSignature);
    // }
    ScramAuth.serverProof = function (serverKey, clientNonce, serverNonce) {
        return ScramAuth.computeProof(serverKey, serverNonce, clientNonce).subarray(0, ScramAuth.KEY_SIZE);
    };
    ScramAuth.prototype.getSessionKey = function () {
        if (!this.sessionData.key) {
            throw new Error("Session not started");
        }
        return this.sessionData.key;
    };
    ScramAuth.prototype.generateNonce = function () {
        return this.nonceGenerator();
    };
    /**
     *
     * @param input
     */
    ScramAuth.HASH = function (input, salt, iteration) {
        var wordInput = crypto_helper_1.CryptoHelper.sanitizeInput(input);
        salt = crypto_helper_1.CryptoHelper.sanitizeInput(salt);
        var hash = crypto_js_1.PBKDF2(wordInput, salt, {
            iterations: iteration,
            keySize: ScramAuth.KEY_SIZE / 4,
            hasher: crypto_js_1.algo.SHA256
        });
        return crypto_helper_1.CryptoHelper.wordArrayToByteArray(hash);
    };
    /**
     *
     * @param input
     */
    ScramAuth.HMAC = function (input, key) {
        var wordArray = crypto_helper_1.CryptoHelper.sanitizeInput(input);
        var keyArray = crypto_helper_1.CryptoHelper.sanitizeInput(key);
        var result = crypto_js_1.HmacSHA256(wordArray, keyArray);
        return crypto_helper_1.CryptoHelper.wordArrayToByteArray(result);
    };
    ScramAuth.hashPassword = function (password) {
        return format_1.FormatHelper.hexStringToBuffer(crypto_helper_1.CryptoHelper.passwordHasher.hash(password).substring(0, ScramAuth.KEY_SIZE * 2));
    };
    /**
     * SaltedPwd = PBKDF2 ( HashedPassword, UserSalt, ItCnt )
     * @param password
     * @param userSalt
     * @param iteration
     */
    ScramAuth.saltedPassword = function (hashedPassword, userSalt, iterations) {
        var hashedPasswordArray = crypto_helper_1.CryptoHelper.sanitizeInput(hashedPassword);
        // console.debug('ScramAuth', 'hashedPassword', hashedPassword.toString());
        var userSaltArray = crypto_helper_1.CryptoHelper.sanitizeInput(userSalt);
        var key = crypto_js_1.PBKDF2(hashedPasswordArray, userSaltArray, {
            iterations: iterations,
            // keySize: ScramAuth.KEY_SIZE / 4, 
            hasher: crypto_js_1.algo.SHA256
        });
        return format_1.FormatHelper.hexStringToBuffer(key.toString(crypto_js_1.enc.Hex));
    };
    /**
     * ClientKey = HMAC ( SaltedPwd | « ClientKey »)
     * @param saltedPassword
     */
    // public static clientKey(saltedPassword: InputDataType): Uint8Array{
    //     let encodedLabel = ScramAuth.encodeLabel(ScramAuth.CLIENT_KEY_LABEL);
    //     let encodedLabel2 : Uint8Array = ByteBuffer.merge(
    //         encodedLabel, 
    //         Uint8Array.from([0])
    //     ).data;
    //     // console.log('ScramAuth', 'clientKey()', 'data => ', FormatHelper.toHexString(data), 'len', data.length, `(${saltedPassword.length} + ${encodedLabel.length})`);
    //     return ScramAuth.HMAC(
    //         saltedPassword,
    //         // userSalt
    //         encodedLabel2
    //     ).subarray(0, ScramAuth.KEY_SIZE); 
    // }
    /**
     * StoredKey = H ( ClientKey )
     * @param saltedPassword
     */
    ScramAuth.storedKey = function (saltedPassword) {
        return ScramAuth.HASH(saltedPassword, ScramAuth.CLIENT_KEY_LABEL, ScramAuth.CLIENT_KEY_ITERATION_NUMBER);
    };
    ScramAuth.serverKey = function (saltedPassword) {
        return ScramAuth.HASH(saltedPassword, ScramAuth.SERVER_KEY_LABEL, ScramAuth.SERVER_KEY_ITERATION_NUMBER);
    };
    /**
     * ClientSignature = HMAC ( StoredKey | ClientNonce | ServerNonce )
     * @param key
     * @param nonce1
     * @param nonce2
     */
    ScramAuth.computeProof = function (key, nonce1, nonce2) {
        var buffer = byte_buffer_1.ByteBuffer.create(key.length + ScramAuth.CLIENT_NONCE_SIZE + ScramAuth.SERVER_NONCE_SIZE);
        buffer
            .addNumber(nonce1, ScramAuth.CLIENT_NONCE_SIZE)
            .add(key)
            .addNumber(nonce2, ScramAuth.SERVER_NONCE_SIZE);
        return ScramAuth.HMAC(buffer.data, key);
    };
    /**
     * Client proof must be 16 bytes
     * ClientProof = StoredKey ^ ClientSignature
     */
    // public static clientProof(storedKey: Uint8Array, clientSignature: Uint8Array): Uint8Array{
    //     return ScramAuth.XOR(storedKey, clientSignature);
    // }
    ScramAuth.XOR = function (value1, value2) {
        if (value1.length != value2.length) {
            throw new Error('Length does not match between the two array. Cannot compute XOR');
        }
        var result = new Uint8Array(value1.length);
        for (var i = 0; i < result.length; i++) {
            result[i] = value1[i] ^ value2[i];
        }
        return result;
    };
    /**
     * ClientProofCheck = StoredKey ^ ClientProof
     * @param storedKey
     * @param clientProof
     */
    ScramAuth.clientProofCheck = function (storedKey, clientProof) {
        return ScramAuth.XOR(storedKey, clientProof);
    };
    /**
     * CommunicationKey = H ( ClientNonce | ServerNonce | StoredKey | « CommunicationKey » )
     * @param clientNonce
     * @param serverNonce
     * @param storedKey
     */
    ScramAuth.computeSessionKey = function (clientNonce, serverNonce, userSalt, serverKey, storedKey) {
        var encodedLabel = ScramAuth.encodeLabel(ScramAuth.COMMUNICATION_KEY_LABEL);
        var buffer = byte_buffer_1.ByteBuffer.create(ScramAuth.CLIENT_NONCE_SIZE
            + ScramAuth.SERVER_NONCE_SIZE
            + userSalt.length
            + serverKey.length
            + storedKey.length
        // + encodedLabel.length
        );
        buffer
            .addNumber(clientNonce, ScramAuth.CLIENT_NONCE_SIZE)
            .add(serverKey)
            .add(userSalt)
            .add(storedKey)
            .addNumber(serverNonce, ScramAuth.SERVER_NONCE_SIZE);
        return ScramAuth.HMAC(buffer.data, serverKey).subarray(0, ScramAuth.KEY_SIZE);
    };
    /**
     *
     * @param input
     */
    ScramAuth.encodeLabel = function (input) {
        return impl_1.StringConverter.instance().encode(input);
    };
    ScramAuth.CRC_LENGTH = 4;
    ScramAuth.CLIENT_NONCE_SIZE = 4;
    ScramAuth.SERVER_NONCE_SIZE = 4;
    ScramAuth.PASSWORD_LENGTH = 16;
    ScramAuth.ITERATION_NUMBER_SIZE = 4;
    ScramAuth.COMMUNICATION_KEY_LABEL = "CommunicationKey";
    // static CLIENT_PROOF_LABEL: string = "ClientProof";
    ScramAuth.CLIENT_KEY_LABEL = "ClientKey";
    ScramAuth.SERVER_KEY_LABEL = "ServerKey";
    ScramAuth.KEY_SIZE = 16;
    ScramAuth.CLIENT_KEY_ITERATION_NUMBER = 2;
    ScramAuth.SERVER_KEY_ITERATION_NUMBER = 2;
    return ScramAuth;
}());
exports.ScramAuth = ScramAuth;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var device_service_1 = __webpack_require__(63);
var acl_service_1 = __webpack_require__(66);
var datalog_service_1 = __webpack_require__(67);
var scram_service_1 = __webpack_require__(68);
var variable_service_1 = __webpack_require__(69);
var target_service_1 = __webpack_require__(70);
var secure_element_service_1 = __webpack_require__(27);
var interface_service_1 = __webpack_require__(71);
var group_service_1 = __webpack_require__(72);
var firmware_service_1 = __webpack_require__(73);
var bundle_service_1 = __webpack_require__(74);
var single_packet_service_1 = __webpack_require__(75);
/**
 * TODO Generate this class
 */
var IoTizeDeviceService = /** @class */ (function () {
    function IoTizeDeviceService() {
    }
    IoTizeDeviceService.create = function (client, apiConfig) {
        var instance = new IoTizeDeviceService();
        instance._device = new device_service_1.DeviceService(client, apiConfig);
        instance._acl = new acl_service_1.AclService(client, apiConfig);
        instance._bundle = new bundle_service_1.BundleService(client, apiConfig);
        instance._datalog = new datalog_service_1.DatalogService(client, apiConfig);
        instance._firmware = new firmware_service_1.FirmwareService(client, apiConfig);
        instance._group = new group_service_1.GroupService(client, apiConfig);
        instance._interface = new interface_service_1.InterfaceService(client, apiConfig);
        instance._secureElement = new secure_element_service_1.SecureElementService(client, apiConfig);
        instance._target = new target_service_1.TargetService(client, apiConfig);
        instance._variable = new variable_service_1.VariableService(client, apiConfig);
        instance._scram = new scram_service_1.ScramService(client, apiConfig);
        instance._singlePacket = new single_packet_service_1.SinglePacketService(client, apiConfig);
        return instance;
    };
    Object.defineProperty(IoTizeDeviceService.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "acl", {
        get: function () {
            return this._acl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "bundle", {
        get: function () {
            return this._bundle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "datalog", {
        get: function () {
            return this._datalog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "firmware", {
        get: function () {
            return this._firmware;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "secureElement", {
        get: function () {
            return this._secureElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "variable", {
        get: function () {
            return this._variable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "scram", {
        get: function () {
            return this._scram;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "singlePacket", {
        get: function () {
            return this._singlePacket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoTizeDeviceService.prototype, "client", {
        set: function (client) {
            this._device.client = client;
            this._acl.client = client;
            this._bundle.client = client;
            this._datalog.client = client;
            this._firmware.client = client;
            this._group.client = client;
            this._interface.client = client;
            this._secureElement.client = client;
            this._target.client = client;
            this._variable.client = client;
            this._scram.client = client;
            this._singlePacket.client = client;
        },
        enumerable: true,
        configurable: true
    });
    return IoTizeDeviceService;
}());
exports.IoTizeDeviceService = IoTizeDeviceService;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bundle_1 = __webpack_require__(156);
var BundleManager = /** @class */ (function () {
    function BundleManager(service, variableManager) {
        this.service = service;
        this.variableManager = variableManager;
        this._bundles = {};
    }
    Object.defineProperty(BundleManager.prototype, "bundles", {
        get: function () {
            return this._bundles;
        },
        enumerable: true,
        configurable: true
    });
    BundleManager.prototype.get = function (identifier) {
        if (!(identifier in this._bundles)) {
            throw new Error("Bundle with id " + identifier + " does not exist");
        }
        return this._bundles[identifier];
    };
    BundleManager.prototype.add = function (identifier, configOrBundle) {
        if (configOrBundle instanceof bundle_1.Bundle) {
            this._bundles[identifier] = configOrBundle;
        }
        else {
            this._bundles[identifier] = this._createBundle(identifier, configOrBundle);
        }
        return this;
    };
    BundleManager.prototype.bundle = function (identifier) {
        if (!(identifier in this._bundles)) {
            throw new Error("Bundle \"" + identifier + "\" does not exist");
        }
        return this._bundles[identifier];
    };
    BundleManager.prototype._createBundle = function (identifier, config) {
        console.log("VariableManager Creating variable " + identifier);
        return new bundle_1.Bundle(identifier, config.id, this.service, this.variableManager);
    };
    BundleManager.prototype.clear = function () {
        for (var id in this._bundles) {
            this._bundles[id].monitor().stop();
        }
        this._bundles = {};
    };
    return BundleManager;
}());
exports.BundleManager = BundleManager;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var default_variable_monitor_1 = __webpack_require__(61);
var response_error_1 = __webpack_require__(18);
var TlvBundleConverter_1 = __webpack_require__(157);
// import { TLVConverter } from '../../client/impl/converter/tlv-converter';
var Bundle = /** @class */ (function () {
    function Bundle(identifier, bundleId, bundleService, variables) {
        this.identifier = identifier;
        this.bundleId = bundleId;
        this.bundleService = bundleService;
        this.variables = variables;
        this.converter = new TlvBundleConverter_1.TlvBundleConverter(variables);
    }
    Bundle.prototype.read = function () {
        var _this = this;
        return this
            .bundleService
            .getValues(this.bundleId)
            .then(function (response) {
            if (!response.isSuccess()) {
                throw new Error("Cannot read bundle " + _this.identifier + ". Cause: " + new response_error_1.ResponseError(response));
            }
            var rawBody = response.rawBody();
            return _this.converter.decode(rawBody);
        });
    };
    Bundle.prototype.monitor = function () {
        var _this = this;
        if (!this._monitor) {
            this._monitor = new default_variable_monitor_1.DefaultVariableMonitor({
                update: function (count) {
                    console.log("Request monitor update on " + _this.identifier);
                    return _this.read();
                }
            });
        }
        return this._monitor;
    };
    return Bundle;
}());
exports.Bundle = Bundle;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var tlv_converter_1 = __webpack_require__(60);
var TlvBundleConverter = /** @class */ (function () {
    function TlvBundleConverter(variableMapping, tlvConverter) {
        if (tlvConverter === void 0) { tlvConverter = new tlv_converter_1.TLVConverter(); }
        this.variableMapping = variableMapping;
        this.tlvConverter = tlvConverter;
    }
    TlvBundleConverter.prototype.decode = function (data, context) {
        var buffer = Buffer.from(data);
        // console.log("RAW BODY: ", buffer);
        var tlvTree = this.tlvConverter.decode(buffer);
        console.log('Bundle', 'Variable data: ', tlvTree);
        // Decode variables
        var result = this._converteTlvTree(tlvTree);
        return result;
    };
    /**
     * TODO
     */
    TlvBundleConverter.prototype.encode = function (data) {
        throw new Error("Not implemented yet");
    };
    /**
     * If converter tree is
     */
    TlvBundleConverter.prototype._converteTlvTree = function (tree, variableIdentifier) {
        var result = null;
        // Converter tlv tree to id => value 
        if (tree.children) {
            result = {};
            for (var _i = 0, _a = tree.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var key = void 0;
                if (this.variableMapping) {
                    key = this.variableMapping.getById(child.header.id).identifier;
                }
                else {
                    key = child.header.id.toString();
                }
                result[key] = this._converteTlvTree(child, key);
            }
        }
        else if (tree.payload) {
            if (this.variableMapping && variableIdentifier) {
                var variable = this.variableMapping.get(variableIdentifier);
                result = variable.converter.decode(tree.payload);
            }
            else {
                result = Uint8Array.from(tree.payload);
            }
        }
        return result;
    };
    return TlvBundleConverter;
}());
exports.TlvBundleConverter = TlvBundleConverter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(64));
__export(__webpack_require__(66));
__export(__webpack_require__(74));
__export(__webpack_require__(67));
__export(__webpack_require__(63));
__export(__webpack_require__(73));
__export(__webpack_require__(72));
__export(__webpack_require__(71));
__export(__webpack_require__(27));
__export(__webpack_require__(68));
__export(__webpack_require__(27));
__export(__webpack_require__(75));
__export(__webpack_require__(70));
__export(__webpack_require__(69));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_config_1 = __webpack_require__(65);
var all_converter_1 = __webpack_require__(1);
// import { MultiResponsesConverter } from '../../all-converter';
var all_converter_2 = __webpack_require__(1);
var all_converter_3 = __webpack_require__(1);
var all_converter_4 = __webpack_require__(1);
var all_converter_5 = __webpack_require__(1);
var all_converter_6 = __webpack_require__(1);
var MemoryWriteInfoConverter_1 = __webpack_require__(83);
var all_converter_7 = __webpack_require__(1);
var all_converter_8 = __webpack_require__(1);
var all_converter_9 = __webpack_require__(1);
var all_converter_10 = __webpack_require__(1);
var all_converter_11 = __webpack_require__(1);
var MemoryInfoConverter_1 = __webpack_require__(82);
var all_converter_12 = __webpack_require__(1);
var all_converter_13 = __webpack_require__(1);
var all_converter_14 = __webpack_require__(1);
var all_converter_15 = __webpack_require__(1);
var all_converter_16 = __webpack_require__(1);
var all_converter_17 = __webpack_require__(1);
var all_converter_18 = __webpack_require__(1);
var all_converter_19 = __webpack_require__(1);
var all_converter_20 = __webpack_require__(1);
var all_converter_21 = __webpack_require__(1);
var all_converter_22 = __webpack_require__(1);
var all_converter_23 = __webpack_require__(1);
// import { CrcCheckBodyConverter } from '../../all-converter';
// import { MultiCommandsConverter } from '../../all-converter';
var all_converter_24 = __webpack_require__(1);
var all_converter_25 = __webpack_require__(1);
var all_converter_26 = __webpack_require__(1);
var all_converter_27 = __webpack_require__(1);
var ApiConfigFactory = /** @class */ (function () {
    function ApiConfigFactory() {
    }
    ApiConfigFactory.getDefaultInstance = function () {
        if (!ApiConfigFactory._) {
            ApiConfigFactory._ = new api_config_1.ApiConfig(exports.defaultRoutes, exports.defaultConverters, exports.defaultAliases);
        }
        return ApiConfigFactory._;
    };
    return ApiConfigFactory;
}());
exports.ApiConfigFactory = ApiConfigFactory;
exports.defaultAliases = {
    "/device/current-time": "/3//13",
    "/interface/config-format-version": "/1024//8",
    "/target/transparent/send-receive": "/1027//34",
    "/interface/available-host-protocols": "/1024//21",
    "/target/com-stats": "/1027//11",
    "/group/{groupId}/scram-user-iteration": "/1025/{groupId}/7",
    "/interface/host-inactivity-period": "/1024//34",
    "/interface/cloud/connection-mode": "/1024//26",
    "/device/last-error-code": "/3//11",
    "/target/core-type": "/1027//2",
    "/device/power-source-voltage": "/3//7",
    "/interface/cloud/password": "/1024//29",
    "/acl/{objectId}/list": "/2/{objectId}/2",
    "/interface/scram/initialize": "/1024//47",
    "/target/firmware-version": "/1027//6",
    "/firmware/package": "/5//0",
    "/target/modbus/sub-protocol": "/1027//40",
    "/device/public-password": "/3//17",
    "/interface/power-optimisation-level": "/1024//14",
    "/interface/current-host-protocol": "/1024//3",
    "/target/transparent/send": "/1027//34",
    "/device/serial-number": "/3//2",
    "/single-packet/write": "/1024//81",
    "/interface/scram/hash-it": "/1024//42",
    "/datalog/options": "/1031//2",
    "/interface/app-path": "/1024//11",
    "/interface/functions": "/1024//20",
    "/variable/{variableId}/current-access": "/1029/{variableId}/3",
    "/interface/keep-alive": "/1024//4",
    "/bundle/{bundleId}/values": "/1028/{bundleId}/1",
    "/device/firmware-version": "/3//3",
    "/variable/{variableId}/bundle/id": "/1029/{variableId}/6",
    "/interface/network-mode": "/1024//15",
    "/target/reset": "/1027//5",
    "/target/reset-keep": "/1027//30",
    "/variable/{variableId}/address": "/1029/{variableId}/0",
    "/secure-element/com": "/1024//71",
    "/target/disconnect": "/1027//4",
    "/interface/config-format-firmware-version": "/1024//18",
    "/target/modbus/read": "/1027//38",
    "/variable/{variableId}/set-value": "/1029/{variableId}/5",
    "/target/modbus/write": "/1027//37",
    "/interface/network/infra-ip-mask": "/1024//32",
    "/interface/mqtt/relay/password": "/1024//54",
    "/interface/cloud-gateway-url": "/1024//12",
    "/interface/cloud/client-id": "/3//2",
    "/interface/login-uid": "/1024//5",
    "/single-packet/bspe": "/1024//83",
    "/target/protocol": "/1027//1",
    "/interface/mqtt/relay/client-id": "/3//2",
    "/target/adp/action": "/1027//39",
    "/interface/public-password": "/1024//60",
    "/acl/{objectId}/object-id": "/2/{objectId}/0",
    "/firmware/update": "/5//2",
    "/target/min-voltage": "/1027//8",
    "/single-packet/part": "/1024//82",
    "/interface/authorized-host-protocol": "/1024//17",
    "/datalog/crypto-key": "/1031//3",
    "/interface/wep-key": "/1024//16",
    "/bundle/{bundleId}/acl/{groupId}": "/1028/{bundleId}/0/{groupId}",
    "/secure-element/configure": "/1024//70",
    "/datalog/max-packet-count": "/1024//23",
    "/device/model-name": "/3//1",
    "/datalog/packet-count": "/1031//10",
    "/variable/{variableId}/value": "/1029/{variableId}/4",
    "/interface/wifi/hostname": "/1024//35",
    "/interface/lock": "/1024//6",
    "/device/memory-free": "/3//10",
    "/interface/mqtt/relay/url": "/1024//50",
    "/datalog/flush": "/1031//4",
    "/interface/rand": "/1024//49",
    "/interface/network/infra-ip": "/1024//30",
    "/interface/mqtt/relay/login": "/3//2",
    "/interface/ble/address": "/1024//22",
    "/interface/wifi/ssid": "/1024//25",
    "/group/{groupId}/session-lifetime": "/1025/{groupId}/4",
    "/bundle/{bundleId}/datalog-period": "/1028/{bundleId}/2",
    "/device/manufacturer": "/3//0",
    "/interface/current-group-id": "/1024//7",
    "/group/{groupId}/name": "/1025/{groupId}/0",
    "/interface/scram/login": "/1024//40",
    "/interface/scram/login-proof": "/1024//41",
    "/device/available-power-source": "/3//6",
    "/interface/cloud/service-name": "/1024//61",
    "/target/uart/settings": "/1027//21",
    "/variable/{variableId}/bundle/values": "/1029/{variableId}/7",
    "/target/vcc": "/1027//7",
    "/target/debug-access": "/1027//31",
    "/interface/config-version": "/1024//10",
    "/datalog/run": "/1031//0",
    "/group/{groupId}/password": "/1025/{groupId}/2",
    "/interface/scram/com-send-receive": "/1024//48",
    "/variable/{variableId}/number-of-elements": "/1029/{variableId}/2",
    "/single-packet-store/info": "/1024//80",
    "/interface/cloud/login": "/3//2",
    "/target/page-size": "/1027//10",
    "/firmware/update-result": "/5//5",
    "/interface/mqtt/relay/port": "/1024//51",
    "/interface/network/gateway-ip": "/1024//31",
    "/variable/{variableId}/format": "/1029/{variableId}/1",
    "/target/reg-access": "/1027//32",
    "/acl/{objectId}/owner": "/2/{objectId}/3",
    "/interface/multi-commands": "/1024//89",
    "/target/adp/status": "/1027//36",
    "/target/connect": "/1027//3",
    "/interface/login": "/1024//0",
    "/firmware/crc-check": "/5//6",
    "/acl/{objectId}/instance-id": "/2/{objectId}/1",
    "/interface/app-name": "/1024//9",
    "/datalog/dequeue-packet": "/1031//11",
    "/device/factory-reset": "/3//5",
    "/target/max-voltage": "/1027//9",
    "/interface/mqtt/relay/net-key": "/1024//55",
    "/target/protocol/list": "/1027//20",
    "/firmware/state": "/5//3",
    "/target/memaccess": "/1030//13",
    "/interface/nfc/pairing-mode": "/1024//13",
    "/interface/cloud/mqtt-period": "/1024//33",
    "/interface/current-profile/id": "/1024//2",
    "/device/reboot": "/3//4",
    "/device/reset-last-error-code": "/3//12",
    "/group/{groupId}/scram-user-salt": "/1025/{groupId}/16",
    "/datalog/stop": "/1031//1",
    "/interface/logout": "/1024//1",
    "/target/transparent/read-bytes": "/1027//35",
    "/group/{groupId}/alias": "/1025/{groupId}/5",
};
exports.defaultRoutes = {
    "put /1024//33": {
        "bodyEncoder": "integer_uint32",
    },
    "get /1027//31": {},
    "get /1027//37": {
        "bodyEncoder": "MemoryWriteInfo",
    },
    "put /1028/{bundleId}/0/{groupId}": {
        "bodyEncoder": "ReadWriteRights",
    },
    "post /1027//3": {},
    "get /3//2": {
        "returnTypeConverter": "string",
    },
    "get /1024//71": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "put /1024//25": {
        "bodyEncoder": "string",
    },
    "post /1027//21": {
        "bodyEncoder": "UartSettings",
    },
    "get /2/{objectId}/0": {
        "returnTypeConverter": "integer_uint16",
    },
    "put /2/{objectId}/2": {},
    "put /1024//16": {
        "bodyEncoder": "string",
    },
    "get /1024//30": {
        "returnTypeConverter": "string_ipv4",
    },
    "put /1024//14": {
        "bodyEncoder": "LowPowerOptimisationLevel",
    },
    "get /1027//20": {
        "returnTypeConverter": "ListTargetProtocol",
    },
    "get /3//7": {
        "returnTypeConverter": "integer_uint32",
    },
    "post /1031//4": {},
    "get /1024//29": {
        "returnTypeConverter": "string",
    },
    "post /3//12": {},
    "put /1029/{variableId}/0": {
        "bodyEncoder": "integer_uint32",
    },
    "get /1027//35": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "integer_uint32",
    },
    "put /1029/{variableId}/4": {
        "bodyEncoder": "Bytes",
    },
    "put /1024//12": {
        "bodyEncoder": "string",
    },
    "get /1024//35": {
        "returnTypeConverter": "string",
    },
    "get /1024//34": {
        "returnTypeConverter": "integer_uint16",
    },
    "post /1024//83": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "get /1024//15": {
        "returnTypeConverter": "NetworkMode",
    },
    "put /1024//55": {
        "bodyEncoder": "string",
    },
    "get /1024//60": {
        "returnTypeConverter": "string",
    },
    "get /2/{objectId}/3": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1025/{groupId}/5": {
        "returnTypeConverter": "integer_uint16",
    },
    "post /1027//32": {},
    "get /1024//80": {
        "returnTypeConverter": "Bytes",
    },
    "get /1027//6": {
        "returnTypeConverter": "string_version",
    },
    "put /1024//51": {
        "bodyEncoder": "string",
    },
    "post /1025/{groupId}/2": {
        "bodyEncoder": "string",
    },
    "put /1024//10": {
        "bodyEncoder": "integer_uint32",
    },
    "post /5//0": {},
    "get /1024//26": {
        "returnTypeConverter": "CloudConnectionMode",
    },
    "get /1027//8": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1028/{bundleId}/2": {
        "returnTypeConverter": "integer_uint32",
    },
    "get /3//0": {
        "returnTypeConverter": "string",
    },
    "get /3//6": {
        "returnTypeConverter": "AvailablePowerSource",
    },
    "get /1024//20": {
        "returnTypeConverter": "AvailableFunction",
    },
    "put /1029/{variableId}/6": {
        "bodyEncoder": "integer_uint32",
    },
    "put /1024//50": {
        "bodyEncoder": "string",
    },
    "get /1024//61": {
        "returnTypeConverter": "string",
    },
    "get /1029/{variableId}/2": {
        "returnTypeConverter": "integer_uint8",
    },
    "get /1024//4": {
        "returnTypeConverter": "integer_uint32",
    },
    "get /1027//38": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "MemoryInfo",
    },
    "put /1024//13": {
        "bodyEncoder": "NfcPairingMode",
    },
    "post /1024//82": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "put /1031//3": {
        "bodyEncoder": "Bytes",
    },
    "put /1024//11": {
        "bodyEncoder": "string",
    },
    "put /1027//2": {
        "bodyEncoder": "TargetCoreType",
    },
    "get /1024//8": {
        "returnTypeConverter": "string_version",
    },
    "put /1024//3": {
        "bodyEncoder": "HostProtocol",
    },
    "put /1025/{groupId}/16": {
        "bodyEncoder": "integer_uint32",
    },
    "put /1029/{variableId}/1": {
        "bodyEncoder": "integer_uint8",
    },
    "get /1024//54": {
        "returnTypeConverter": "string",
    },
    "put /1024//70": {
        "bodyEncoder": "Bytes",
    },
    "put /1027//21": {
        "bodyEncoder": "UartSettings",
    },
    "put /1025/{groupId}/4": {
        "bodyEncoder": "integer_uint16",
    },
    "post /1027//39": {
        "bodyEncoder": "Bytes",
    },
    "post /1031//1": {},
    "get /1024//23": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1027//9": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1029/{variableId}/4": {
        "returnTypeConverter": "Bytes",
    },
    "get /1024//41": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "get /1024//48": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "get /1024//89": {
        "returnTypeConverter": "MultiResponses",
        "bodyEncoder": "MultiCommands",
    },
    "get /1029/{variableId}/0": {
        "returnTypeConverter": "integer_uint32",
    },
    "post /1027//30": {},
    "get /1029/{variableId}/7": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1024//17": {
        "returnTypeConverter": "ListHostProtocol",
    },
    "get /1024//32": {
        "returnTypeConverter": "string_ipv4mask",
    },
    "post /1024//0": {
        "bodyEncoder": "LoginCredential",
    },
    "get /1024//10": {
        "returnTypeConverter": "string_version",
    },
    "get /1031//10": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1024//7": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /3//3": {
        "returnTypeConverter": "string",
    },
    "get /1025/{groupId}/0": {
        "returnTypeConverter": "string",
    },
    "post /1027//5": {},
    "get /1031//2": {
        "returnTypeConverter": "DataLogOption",
    },
    "put /1024//61": {
        "bodyEncoder": "string",
    },
    "put /1024//54": {
        "bodyEncoder": "string",
    },
    "get /1029/{variableId}/6": {
        "returnTypeConverter": "integer_uint16",
    },
    "post /3//5": {},
    "get /5//5": {
        "returnTypeConverter": "FirmwareUpdateResult",
    },
    "get /1031//11": {
        "returnTypeConverter": "SinglePacket",
    },
    "put /1024//26": {
        "bodyEncoder": "CloudConnectionMode",
    },
    "post /3//4": {},
    "put /1027//8": {
        "bodyEncoder": "integer_uint16",
    },
    "get /1024//31": {
        "returnTypeConverter": "string_ipv4",
    },
    "get /1024//42": {},
    "post /1024//10": {},
    "get /1024//21": {
        "returnTypeConverter": "ListHostProtocol",
    },
    "put /1029/{variableId}/2": {
        "bodyEncoder": "integer_uint8",
    },
    "get /1027//7": {
        "returnTypeConverter": "integer_uint16",
    },
    "post /1031//0": {},
    "put /1027//1": {
        "bodyEncoder": "TargetProtocol",
    },
    "get /1024//55": {
        "returnTypeConverter": "string",
    },
    "get /1029/{variableId}/1": {
        "returnTypeConverter": "integer_uint8",
    },
    "post /5//6": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "CrcCheckBody",
    },
    "get /1027//2": {
        "returnTypeConverter": "TargetCoreType",
    },
    "get /1027//21": {
        "returnTypeConverter": "UartSettings",
    },
    "put /1024//17": {
        "bodyEncoder": "ListHostProtocol",
    },
    "get /1024//13": {
        "returnTypeConverter": "NfcPairingMode",
    },
    "get /3//17": {
        "returnTypeConverter": "string",
    },
    "put /1024//9": {
        "bodyEncoder": "string",
    },
    "get /1029/{variableId}/3": {
        "returnTypeConverter": "ReadWriteRights",
    },
    "put /1028/{bundleId}/2": {
        "bodyEncoder": "integer_uint32",
    },
    "put /1027//10": {
        "bodyEncoder": "integer_uint32",
    },
    "put /1024//8": {
        "bodyEncoder": "integer_uint32",
    },
    "get /3//13": {
        "returnTypeConverter": "string",
    },
    "get /1024//11": {
        "returnTypeConverter": "string",
    },
    "get /1024//3": {
        "returnTypeConverter": "HostProtocol",
    },
    "get /1025/{groupId}/16": {
        "returnTypeConverter": "integer_uint32",
    },
    "put /1025/{groupId}/7": {
        "bodyEncoder": "integer_uint32",
    },
    "put /1024//6": {
        "bodyEncoder": "InterfaceLock",
    },
    "get /1024//70": {
        "returnTypeConverter": "Bytes",
    },
    "put /1025/{groupId}/0": {
        "bodyEncoder": "string",
    },
    "put /1031//2": {
        "bodyEncoder": "DataLogOption",
    },
    "get /1024//16": {
        "returnTypeConverter": "string",
    },
    "put /1024//30": {
        "bodyEncoder": "string_ipv4",
    },
    "post /1024//5": {
        "bodyEncoder": "Bytes",
    },
    "put /1027//9": {
        "bodyEncoder": "integer_uint16",
    },
    "post /1027//4": {},
    "get /1024//49": {
        "returnTypeConverter": "Bytes",
    },
    "post /1030//13": {
        "bodyEncoder": "MemoryWriteInfo",
    },
    "get /1024//25": {
        "returnTypeConverter": "string",
    },
    "post /1027//34": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "get /1024//33": {
        "returnTypeConverter": "integer_uint32",
    },
    "get /1024//40": {
        "returnTypeConverter": "ScramLoginResponseBody",
        "bodyEncoder": "ScramLoginParams",
    },
    "get /1028/{tupId}": {},
    "post /3//11": {},
    "get /1024//47": {
        "returnTypeConverter": "Bytes",
    },
    "get /1024//9": {
        "returnTypeConverter": "string",
    },
    "put /1024//31": {
        "bodyEncoder": "string_ipv4",
    },
    "get /3//11": {
        "returnTypeConverter": "integer_uint32",
    },
    "put /1024//29": {
        "bodyEncoder": "string",
    },
    "get /3//10": {
        "returnTypeConverter": "integer_uint32",
    },
    "put /1024//32": {
        "bodyEncoder": "string_ipv4mask",
    },
    "post /1029/{variableId}/5": {
        "bodyEncoder": "Bytes",
    },
    "get /2/{objectId}/2": {
        "returnTypeConverter": "ListAclEntry",
    },
    "post /1027//11": {},
    "post /1027//40": {
        "bodyEncoder": "Bytes",
    },
    "get /1024//6": {
        "returnTypeConverter": "InterfaceLock",
    },
    "get /1028/{bundleId}/1": {
        "returnTypeConverter": "Bytes",
    },
    "get /1027//1": {
        "returnTypeConverter": "TargetProtocol",
    },
    "get /1024//14": {
        "returnTypeConverter": "LowPowerOptimisationLevel",
    },
    "get /1024//18": {
        "returnTypeConverter": "string_version",
    },
    "get /1027//40": {
        "returnTypeConverter": "Bytes",
    },
    "get /1027//10": {
        "returnTypeConverter": "integer_uint32",
    },
    "post /1024//1": {},
    "get /1024//12": {
        "returnTypeConverter": "string",
    },
    "put /1024//15": {
        "bodyEncoder": "NetworkMode",
    },
    "get /1024//2": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /1025/{groupId}/4": {
        "returnTypeConverter": "integer_uint16",
    },
    "get /3//1": {
        "returnTypeConverter": "string",
    },
    "put /3//13": {},
    "get /1025/{groupId}/7": {
        "returnTypeConverter": "integer_uint32",
    },
    "post /1024//81": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "Bytes",
    },
    "post /5//2": {},
    "post /1027//31": {},
    "get /1030//13": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "MemoryInfo",
    },
    "get /1024//50": {
        "returnTypeConverter": "string",
    },
    "put /1025/{groupId}/5": {
        "bodyEncoder": "integer_uint16",
    },
    "put /2/{objectId}/3": {
        "bodyEncoder": "integer_uint32",
    },
    "get /1027//11": {
        "returnTypeConverter": "TargetComStats",
    },
    "get /1024//22": {
        "returnTypeConverter": "string_macaddress",
    },
    "get /1027//36": {
        "returnTypeConverter": "Bytes",
    },
    "get /5//3": {
        "returnTypeConverter": "FirmwareState",
    },
    "get /1024//51": {
        "returnTypeConverter": "string",
    },
    "get /1027//32": {},
    "put /1027//6": {
        "bodyEncoder": "integer_uint32",
    },
    "get /2/{objectId}/1": {
        "returnTypeConverter": "integer_uint16",
    },
    "put /1024//34": {
        "bodyEncoder": "integer_uint16",
    },
    "get /1027//34": {
        "returnTypeConverter": "Bytes",
        "bodyEncoder": "integer_uint16",
    },
};
exports.defaultConverters = {
    "integer_int8": all_converter_25.NumberConverter.int8Instance(),
    "string_ipv4mask": all_converter_6.Ipv4StringConverter.instance(),
    "integer_uint16": all_converter_25.NumberConverter.uint16Instance(),
    "TargetCoreType": all_converter_24.TargetCoreTypeConverter.instance(),
    "string": all_converter_18.StringConverter.instance(),
    "HostProtocol": all_converter_1.HostProtocolConverter.instance(),
    "TargetProtocol": all_converter_10.TargetProtocolConverter.instance(),
    "UartSettings": all_converter_13.UartSettingsConverter.instance(),
    "integer_uint8": all_converter_25.NumberConverter.uint8Instance(),
    "float": all_converter_27.FloatConverter.instance32(),
    "FirmwareUpdateResult": all_converter_16.FirmwareUpdateResultConverter.instance(),
    "NfcPairingMode": all_converter_9.NfcPairingModeConverter.instance(),
    "ScramLoginParams": all_converter_2.ScramLoginParamsConverter.instance(),
    "ReadWriteRights": all_converter_5.ReadWriteRightsConverter.instance(),
    // "CrcCheckBody": CrcCheckBodyConverter.instance(),
    // "MultiResponses": MultiResponsesConverter.instance(),
    // "MultiCommands": MultiCommandsConverter.instance(),
    "FirmwareState": all_converter_15.FirmwareStateConverter.instance(),
    "AvailablePowerSource": all_converter_3.AvailablePowerSourceConverter.instance(),
    "AvailableFunction": all_converter_17.AvailableFunctionConverter.instance(),
    "string_ipv4": all_converter_6.Ipv4StringConverter.instance(),
    "integer_int32": all_converter_25.NumberConverter.int32Instance(),
    "LowPowerOptimisationLevel": all_converter_19.LowPowerOptimisationLevelConverter.instance(),
    "string_macaddress": all_converter_23.MacAddressStringConverter.instance(),
    "NetworkMode": all_converter_7.NetworkModeConverter.instance(),
    "ListHostProtocol": all_converter_11.ListHostProtocolConverter.instance(),
    "ListAclEntry": all_converter_8.ListAclEntryConverter.instance(),
    "string_version": all_converter_18.StringConverter.instance(),
    "MemoryInfo": MemoryInfoConverter_1.MemoryInfoConverter.instance(),
    "MemoryWriteInfo": MemoryWriteInfoConverter_1.MemoryWriteInfoConverter.instance(),
    "CloudConnectionMode": all_converter_20.CloudConnectionModeConverter.instance(),
    "integer_uint32": all_converter_25.NumberConverter.uint32Instance(),
    "integer_int16": all_converter_25.NumberConverter.int16Instance(),
    "InterfaceLock": all_converter_4.InterfaceLockConverter.instance(),
    "DataLogOption": all_converter_14.DataLogOptionConverter.instance(),
    "ScramLoginResponseBody": all_converter_26.ScramLoginResponseBodyConverter.instance(),
    "LoginCredential": all_converter_22.LoginCredentialConverter.instance(),
    "ListTargetProtocol": all_converter_21.ListTargetProtocolConverter.instance(),
    "TargetComStats": all_converter_12.TargetComStatsConverter.instance(),
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var body_1 = __webpack_require__(8);
/**
*
*/
var AclEntryConverter = /** @class */ (function () {
    function AclEntryConverter() {
    }
    AclEntryConverter.prototype.AclEntryConverter = function () {
    };
    /**
    *
    */
    AclEntryConverter.prototype.encode = function (model) {
        var size = 0;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        byteOffset += 1;
        buffer.put_boolean(model.read, 1);
        buffer.put_boolean(model.write, 2);
        buffer.put_boolean(model.execute, 4);
        buffer.put_boolean(model.delete, 8);
        buffer.put_boolean(model.create, 16);
        return buffer.data;
    };
    /**
     *
     */
    AclEntryConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        numberValue = buffer.readNumber(1);
        model.read = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.write = body_1.BooleanConverter.decodeFromNumber(numberValue, 2);
        model.execute = body_1.BooleanConverter.decodeFromNumber(numberValue, 4);
        model.delete = body_1.BooleanConverter.decodeFromNumber(numberValue, 8);
        model.create = body_1.BooleanConverter.decodeFromNumber(numberValue, 16);
        return model;
    };
    AclEntryConverter.instance = function () {
        if (AclEntryConverter._instance == null) {
            AclEntryConverter._instance = new AclEntryConverter();
        }
        return AclEntryConverter._instance;
    };
    return AclEntryConverter;
}());
exports.AclEntryConverter = AclEntryConverter;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var body_1 = __webpack_require__(8);
/**
*
*/
var AvailableFunctionConverter = /** @class */ (function () {
    function AvailableFunctionConverter() {
    }
    AvailableFunctionConverter.prototype.AvailableFunctionConverter = function () {
    };
    /**
    *
    */
    AvailableFunctionConverter.prototype.encode = function (model) {
        var size = 0;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        byteOffset += 1;
        buffer.put_boolean(model.dataLog, 1);
        buffer.put_boolean(model.debug, 1);
        return buffer.data;
    };
    /**
     *
     */
    AvailableFunctionConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        numberValue = buffer.readNumber(1);
        model.dataLog = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.debug = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        return model;
    };
    AvailableFunctionConverter.instance = function () {
        if (AvailableFunctionConverter._instance == null) {
            AvailableFunctionConverter._instance = new AvailableFunctionConverter();
        }
        return AvailableFunctionConverter._instance;
    };
    return AvailableFunctionConverter;
}());
exports.AvailableFunctionConverter = AvailableFunctionConverter;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var AvailablePowerSourceConverter = /** @class */ (function () {
    function AvailablePowerSourceConverter() {
    }
    AvailablePowerSourceConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.MultipleMaskConverter.decodeAll(body, AvailablePowerSourceConverter.mapping);
    };
    AvailablePowerSourceConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.MultipleMaskConverter.encodeAll(input, AvailablePowerSourceConverter.mapping);
    };
    AvailablePowerSourceConverter.instance = function () {
        if (!AvailablePowerSourceConverter._instance) {
            AvailablePowerSourceConverter._instance = new AvailablePowerSourceConverter();
        }
        return AvailablePowerSourceConverter._instance;
    };
    AvailablePowerSourceConverter.mapping = {
        32: "AC_EXTERNAL_POWER",
        1: "DC_POWER",
        16: "S3P",
    };
    return AvailablePowerSourceConverter;
}());
exports.AvailablePowerSourceConverter = AvailablePowerSourceConverter;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UartSettingsBitParityConverter_1 = __webpack_require__(77);
var format_helper_1 = __webpack_require__(7);
var UartSettingsHandshakeConverter_1 = __webpack_require__(78);
var UartSettingsHandshakeDelimiterConverter_1 = __webpack_require__(79);
var UartSettingsStopBitConverter_1 = __webpack_require__(80);
var uniq_mask_decoder_1 = __webpack_require__(57);
var UartSettingsPhysicalPortConverter_1 = __webpack_require__(81);
var bit_buffer_1 = __webpack_require__(164);
var UartSettingsConverter = /** @class */ (function () {
    function UartSettingsConverter() {
    }
    UartSettingsConverter.instance = function () {
        if (!UartSettingsConverter._instance) {
            UartSettingsConverter._instance = new UartSettingsConverter();
        }
        return UartSettingsConverter._instance;
    };
    UartSettingsConverter.prototype.decode = function (data) {
        if (!data) {
            throw new Error("data should not be null");
        }
        if (data.length * 8 < UartSettingsConverter.TOTAL_SIZE_IN_BITS) {
            throw new Error("Invalid ctrl tram size: " + data.length + ". Expected: " + UartSettingsConverter.TOTAL_SIZE_IN_BITS);
        }
        var settings = {};
        data = data.slice(0, UartSettingsConverter.TOTAL_SIZE_IN_BITS / 8); // Only first bytes
        data = data.reverse(); // Change endianess
        console.log("Data to decode: " + format_helper_1.FormatHelper.toHexString(data));
        var context = { buffer: new bit_buffer_1.BitBuffer(data) };
        this.decodeCTR2(context, settings);
        this.decodeCTR1(context, settings);
        return settings;
    };
    UartSettingsConverter.prototype.encode = function (settings) {
        var buffer = bit_buffer_1.BitBuffer.create(UartSettingsConverter.TOTAL_SIZE_IN_BITS);
        var context = {
            buffer: buffer
        };
        this.encodeCTR2(context, settings);
        this.encodeCTR1(context, settings);
        return buffer.view().reverse();
    };
    UartSettingsConverter.prototype.decodeCTR1 = function (context, settings) {
        context.buffer.forward(UartSettingsConverter.RFU_CTR1_LENGTH);
        this._decodePhysicalPort(context, settings);
        this._decodeStopBit(context, settings);
        this._decodeParity(context, settings);
        this._decodeDataBitsLength(context, settings);
        this._decodeHandshake(context, settings);
        this._decodeTimeout(context, settings);
    };
    UartSettingsConverter.prototype.encodeCTR1 = function (context, settings) {
        console.log("encodeCTR1");
        context.buffer.forward(UartSettingsConverter.RFU_CTR1_LENGTH);
        this._encodePhysicalPort(context, settings);
        this._encodeStopBit(context, settings);
        this._encodeParity(context, settings);
        this._encodeDataBitsLength(context, settings);
        this._encodeHandshake(context, settings);
        this._encodeTimeout(context, settings);
    };
    UartSettingsConverter.prototype.encodeCTR2 = function (context, settings) {
        console.log("encodeCTR2 slv");
        context.buffer.setBits(settings.slv, UartSettingsConverter.SLV_LENGTH);
        console.log("encodeCTR2 rfu");
        context.buffer.forward(UartSettingsConverter.RFU_CTR2_LENGTH);
        console.log("encodeCTR2 ofs");
        context.buffer.setBits(settings.ofs, UartSettingsConverter.OFS_LENGTH);
        console.log("encodeCTR2 baudrate");
        context.buffer.setBits(settings.baudRate, UartSettingsConverter.BAUD_RATE_LENGTH);
    };
    UartSettingsConverter.prototype._getUnsignedInt = function (context, nbBits) {
        return context.buffer.getUintX(nbBits, false);
    };
    UartSettingsConverter.prototype._decodeTimeout = function (context, settings) {
        var timeout = this._getUnsignedInt(context, UartSettingsConverter.TIMEOUT_LENGTH);
        settings.timeout = timeout;
    };
    UartSettingsConverter.prototype._decodeHandshake = function (context, settings) {
        var handshakeDelimiter = this._getUnsignedInt(context, UartSettingsConverter.FLW_HANDSHAKE_DELIMITER_LENGTH);
        settings.handshakeDelimiter = uniq_mask_decoder_1.UniqMaskConverter.decodeOneExact(handshakeDelimiter, UartSettingsHandshakeDelimiterConverter_1.UartSettingsHandshakeDelimiterConverter.mapping);
        var handshake = this._getUnsignedInt(context, UartSettingsConverter.FLW_HANDSHAKE_VALUE_LENGTH);
        console.log("Decoding handshake from " + handshake);
        settings.handshake = uniq_mask_decoder_1.UniqMaskConverter.decodeOneExact(handshake, UartSettingsHandshakeConverter_1.UartSettingsHandshakeConverter.mapping);
    };
    UartSettingsConverter.prototype._decodeDataBitsLength = function (context, settings) {
        var intVal = this._getUnsignedInt(context, UartSettingsConverter.DATA_BITS_LENGTH_LENGTH);
        settings.dataBitsLength = 7 + intVal;
        console.log("Decoded dataBitsLength: " + settings.dataBitsLength + " (code=" + intVal + ")");
    };
    UartSettingsConverter.prototype._decodeParity = function (context, settings) {
        var intVal = this._getUnsignedInt(context, UartSettingsConverter.PARITY_LENGTH);
        settings.bitParity = uniq_mask_decoder_1.UniqMaskConverter.decodeOneExact(intVal, UartSettingsBitParityConverter_1.UartSettingsBitParityConverter.mapping);
        console.log("Decoded parity: " + settings.bitParity + " (code=" + intVal + ")");
    };
    UartSettingsConverter.prototype._decodeStopBit = function (context, settings) {
        var intVal = this._getUnsignedInt(context, UartSettingsConverter.STOP_BIT_LENGTH);
        settings.stopBit = uniq_mask_decoder_1.UniqMaskConverter.decodeOneExact(intVal, UartSettingsStopBitConverter_1.UartSettingsStopBitConverter.mapping);
        console.log("Decoded stopBit: " + settings.stopBit + " (code=" + intVal + ")");
    };
    UartSettingsConverter.prototype._decodePhysicalPort = function (context, settings) {
        var intVal = this._getUnsignedInt(context, UartSettingsConverter.PHYSICAL_PORT_LENGTH);
        settings.physicalPort = uniq_mask_decoder_1.UniqMaskConverter.decodeOneExact(intVal, UartSettingsPhysicalPortConverter_1.UartSettingsPhysicalPortConverter.mapping);
        console.log("Decoded physical port: " + settings.physicalPort + " (code=" + intVal + ")");
    };
    UartSettingsConverter.prototype.decodeCTR2 = function (context, settings) {
        var slv = this._getUnsignedInt(context, UartSettingsConverter.SLV_LENGTH);
        settings.slv = slv;
        console.log("Decoded slv: " + slv); // from ${FormatHelper.toHexString(context.buffer.fromOffsetLessNumber(UartSettingsConverter.SLV_LENGTH))}`);
        context.buffer.forward(UartSettingsConverter.RFU_CTR2_LENGTH);
        var ofs = this._getUnsignedInt(context, UartSettingsConverter.OFS_LENGTH);
        settings.ofs = ofs;
        console.log("Decoded ofs: " + ofs); // from ${FormatHelper.toHexString(context.buffer.fromOffsetLessNumber(UartSettingsConverter.OFS_LENGTH))}`);
        var baudRate = this._getUnsignedInt(context, UartSettingsConverter.BAUD_RATE_LENGTH);
        settings.baudRate = baudRate;
        console.log("Decoded baudRate: " + baudRate); // from ${FormatHelper.toHexString(context.buffer.fromOffsetLessNumber(UartSettingsConverter.BAUD_RATE_LENGTH))}`);
    };
    UartSettingsConverter.prototype._encodeHandshake = function (context, settings) {
        console.log("_encodeHandshake");
        var handshakeDelimiterEncoded = UartSettingsHandshakeDelimiterConverter_1.UartSettingsHandshakeDelimiterConverter.instance().encode(settings.handshakeDelimiter);
        context.buffer.append(handshakeDelimiterEncoded, UartSettingsConverter.FLW_HANDSHAKE_DELIMITER_LENGTH);
        var handshakeEncode = UartSettingsHandshakeConverter_1.UartSettingsHandshakeConverter.instance().encode(settings.handshake);
        context.buffer.append(handshakeEncode, UartSettingsConverter.FLW_HANDSHAKE_VALUE_LENGTH);
    };
    UartSettingsConverter.prototype._encodeDataBitsLength = function (context, settings) {
        console.log("_encodeDataBitsLength");
        if (settings.dataBitsLength < 7 || settings.dataBitsLength > 9) {
            throw new Error("Invalid size for data: " + settings.dataBitsLength);
        }
        context.buffer.setBits(settings.dataBitsLength - 7, UartSettingsConverter.DATA_BITS_LENGTH_LENGTH);
    };
    UartSettingsConverter.prototype._encodeParity = function (context, settings) {
        console.log("_encodeParity");
        var value = UartSettingsBitParityConverter_1.UartSettingsBitParityConverter.instance().encode(settings.bitParity);
        context.buffer.append(value, UartSettingsConverter.PARITY_LENGTH);
    };
    UartSettingsConverter.prototype._encodeStopBit = function (context, settings) {
        console.log("_encodeStopBit");
        var value = UartSettingsStopBitConverter_1.UartSettingsStopBitConverter.instance().encode(settings.stopBit);
        context.buffer.append(value, UartSettingsConverter.STOP_BIT_LENGTH);
    };
    UartSettingsConverter.prototype._encodePhysicalPort = function (context, settings) {
        console.log("_encodePhysicalPort");
        var value = UartSettingsPhysicalPortConverter_1.UartSettingsPhysicalPortConverter.instance().encode(settings.physicalPort);
        context.buffer.append(value, UartSettingsConverter.PHYSICAL_PORT_LENGTH);
    };
    UartSettingsConverter.prototype._encodeTimeout = function (context, settings) {
        console.log("_encodeTimeout " + settings.timeout);
        context.buffer.setBits(settings.timeout || 0, UartSettingsConverter.TIMEOUT_LENGTH);
    };
    UartSettingsConverter.RFU_CTR1_LENGTH = 4;
    UartSettingsConverter.PHYSICAL_PORT_LENGTH = 4;
    UartSettingsConverter.STOP_BIT_LENGTH = 2;
    UartSettingsConverter.PARITY_LENGTH = 4;
    UartSettingsConverter.DATA_BITS_LENGTH_LENGTH = 2;
    UartSettingsConverter.FLW_HANDSHAKE_VALUE_LENGTH = 4;
    UartSettingsConverter.FLW_HANDSHAKE_DELIMITER_LENGTH = 4;
    UartSettingsConverter.TIMEOUT_LENGTH = 8;
    UartSettingsConverter.SLV_LENGTH = 8;
    UartSettingsConverter.RFU_CTR2_LENGTH = 3;
    UartSettingsConverter.OFS_LENGTH = 1;
    UartSettingsConverter.BAUD_RATE_LENGTH = 20;
    UartSettingsConverter.TOTAL_SIZE_IN_BITS = UartSettingsConverter.RFU_CTR1_LENGTH
        + UartSettingsConverter.PHYSICAL_PORT_LENGTH
        + UartSettingsConverter.STOP_BIT_LENGTH
        + UartSettingsConverter.PARITY_LENGTH
        + UartSettingsConverter.DATA_BITS_LENGTH_LENGTH
        + UartSettingsConverter.FLW_HANDSHAKE_VALUE_LENGTH
        + UartSettingsConverter.FLW_HANDSHAKE_DELIMITER_LENGTH
        + UartSettingsConverter.TIMEOUT_LENGTH
        + UartSettingsConverter.SLV_LENGTH
        + UartSettingsConverter.RFU_CTR2_LENGTH
        + UartSettingsConverter.OFS_LENGTH
        + UartSettingsConverter.BAUD_RATE_LENGTH;
    return UartSettingsConverter;
}());
exports.UartSettingsConverter = UartSettingsConverter;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitBuffer = /** @class */ (function () {
    function BitBuffer(source, lastOffset) {
        this._leastSignificantBitFirst = false; // TODO USE
        // Used to massage fp values so we can operate on them
        // at the bit level.
        this._scratch = new DataView(new ArrayBuffer(8));
        this._view = source;
        this._offset = 0;
    }
    Object.defineProperty(BitBuffer.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    BitBuffer.minSizeToFitBits = function (nbBits) {
        return (nbBits / 8) + (nbBits % 8 > 0 ? 1 : 0);
    };
    BitBuffer.create = function (nbBits) {
        return new BitBuffer(new Uint8Array(BitBuffer.minSizeToFitBits(nbBits)));
    };
    BitBuffer.prototype.sizeInBits = function () {
        return this._view.byteLength * 8; // TODO not full size..
    };
    BitBuffer.prototype.view = function () {
        return this._view;
    };
    BitBuffer.prototype.seekTo = function (offset) {
        this._offset = offset;
        return this;
    };
    BitBuffer.prototype.forward = function (nbBits) {
        if (nbBits === void 0) { nbBits = 1; }
        this._offset += nbBits;
        console.log("forward() Forward to bit " + this._offset);
        return this;
    };
    BitBuffer.prototype._setBit = function (on) {
        // this._offset >> 3 will give the block
        // 
        var bitMask = 1 << (7 - (this._offset & 7));
        if (on) {
            this._view[this._offset >> 3] |= bitMask;
        }
        else {
            this._view[this._offset >> 3] &= ~(bitMask);
        }
        console.log("_setBit " + this._offset + " to " + on + " (block " + (this._offset >> 3) + "; mask=" + bitMask + ")");
        this._offset++;
    };
    BitBuffer.prototype.getUintX = function (nbBits, signed, offset) {
        if (signed === void 0) { signed = false; }
        console.log("getUintX");
        return this.getBits(nbBits, signed, offset);
    };
    BitBuffer.prototype.fromOffsetLessNumber = function (nbBits) {
        return this.getArrayBuffer(this._offset - nbBits, Math.ceil(nbBits / 8));
    };
    // public static getMask(offset: number, nbBits: number){
    //     var remaining = (offset+nbBits) & 0b111;
    //     var 
    // }
    BitBuffer.prototype.getBits = function (nbBits, signed, offset) {
        var callOffset = typeof offset === "undefined" ? this._offset : offset;
        var available = (this._view.length * 8 - callOffset);
        console.log("getBits " + callOffset + " to " + (callOffset + nbBits - 1) + " (available=" + available + "; signed=" + signed + ") " + (typeof offset === "undefined"));
        if (nbBits > available) {
            throw new Error('Cannot get ' + nbBits + ' bit(s) from offset ' + callOffset + ', ' + available + ' available');
        }
        var value = 0;
        for (var i = 0; i < nbBits; i += read) {
            var remaining = nbBits - i;
            var bitOffset = callOffset & 7;
            var currentByte = this._view[callOffset >> 3];
            // the max number of bits we can read from the current byte
            var read = Math.min(remaining, 8 - bitOffset);
            var mask = (0xFF >> bitOffset) & 0xFF;
            var stripRight = (8 - read - bitOffset);
            // create a mask with the correct bit width
            mask &= 0xFF << stripRight;
            // shift the bits we want to the start of the byte and mask of the rest
            var readBits = (currentByte & mask) >> stripRight;
            console.log("Mask will be " + mask + " (i=" + i + ";stripRight=" + stripRight + ";stripLeft=" + bitOffset + ";readBits=" + readBits + "; read=" + read + "; current byte index: " + (callOffset >> 3) + "; current byte value: " + currentByte + "; remaining=" + remaining + "; callOffset=" + callOffset + "/" + nbBits + ")");
            // if (this._leastSignificantBitFirst){
            //     value |= readBits << i;
            // }
            // else {
            //     value |= readBits << (nbBits - i - (8-bitOffset));
            // }
            value = (value << 8) | readBits;
            callOffset += read;
        }
        if (typeof offset === "undefined") {
            this.forward(nbBits);
        }
        if (signed) {
            // If we're not working with a full 32 bits, check the
            // imaginary MSB for this bit count and convert to a
            // valid 32-bit signed value if set.
            if (nbBits !== 32 && value & (1 << (nbBits - 1))) {
                value |= -1 ^ ((1 << nbBits) - 1);
            }
            return value;
        }
        console.log("getBits Value read: " + value + " on " + nbBits + " bits. offset is now " + this._offset);
        return value >>> 0;
    };
    BitBuffer.prototype.append = function (data, nbBits, fromLeftBits) {
        if (fromLeftBits === void 0) { fromLeftBits = false; }
        console.log("BitBuffer append " + data + " on " + nbBits + " bits");
        if (typeof nbBits === "undefined") {
            nbBits = data.byteLength * 8;
        }
        var length8 = (nbBits >> 3) + 1;
        var remaining = nbBits & 7;
        for (var i = 0; i < length8 - 1; i++) {
            this.setBits(data[i], 8);
        }
        this.setBits(data[length8 - 1] >> (fromLeftBits ? (8 - remaining) : 0), remaining);
    };
    /**
     * TODO
     * @param value
     * @param nbBits
     */
    BitBuffer.prototype.setBits = function (value, nbBits) {
        for (var i = nbBits - 1; i >= 0; i--) {
            this._setBit((value >> i) & 0x1 ? true : false);
        }
    };
    BitBuffer.prototype.getBoolean = function (offset) {
        return this.getBits(1, false, offset) !== 0;
    };
    BitBuffer.prototype.getInt8 = function (offset) {
        return this.getBits(8, true, offset);
    };
    BitBuffer.prototype.getUint8 = function (offset) {
        return this.getBits(8, false, offset);
    };
    BitBuffer.prototype.getInt16 = function (offset) {
        return this.getBits(16, true, offset);
    };
    BitBuffer.prototype.getUint16 = function (offset) {
        return this.getBits(16, false, offset);
    };
    BitBuffer.prototype.getInt32 = function (offset) {
        return this.getBits(32, true, offset);
    };
    BitBuffer.prototype.getUint32 = function (offset) {
        return this.getBits(32, false, offset) >>> 0;
    };
    BitBuffer.prototype.getFloat32 = function (offset) {
        this._scratch.setUint32(0, this.getUint32(offset));
        return this._scratch.getFloat32(0);
    };
    BitBuffer.prototype.getFloat64 = function (offset) {
        this._scratch.setUint32(0, this.getUint32(offset));
        // DataView offset is in bytes.
        this._scratch.setUint32(4, this.getUint32(offset + 32));
        return this._scratch.getFloat64(0);
    };
    BitBuffer.prototype.setBoolean = function (value) {
        this.setBits(value ? 1 : 0, 1);
    };
    // public setInt8  =
    BitBuffer.prototype.setUint8 = function (value) {
        this.setBits(value, 8);
    };
    // public setInt16  =
    BitBuffer.prototype.setUint16 = function (value) {
        this.setBits(value, 16);
    };
    // public setInt32  =
    BitBuffer.prototype.setUint32 = function (value) {
        this.setBits(value, 32);
    };
    BitBuffer.prototype.setFloat32 = function (value) {
        this._scratch.setFloat32(0, value);
        this.setBits(this._scratch.getUint32(0), 32);
    };
    BitBuffer.prototype.setFloat64 = function (value) {
        this._scratch.setFloat64(0, value);
        this.setBits(this._scratch.getUint32(0), 32);
        this.setBits(this._scratch.getUint32(4), 32);
    };
    BitBuffer.prototype.getArrayBuffer = function (offset, byteLength) {
        var buffer = new Uint8Array(byteLength);
        for (var i = 0; i < byteLength; i++) {
            buffer[i] = this.getUint8(offset + (i * 8));
        }
        return buffer;
    };
    return BitBuffer;
}());
exports.BitBuffer = BitBuffer;
/**********************************************************
 *
 * BitStream
 *
 * Small wrapper for a BitView to maintain your position,
 * as well as to handle reading / writing of string data
 * to the underlying buffer.
 *
 **********************************************************/
// var reader = function (name, size) {
//     return function () {
//         if (this._index + size > this._length) {
//             throw new Error('Trying to read past the end of the stream');
//         }
//         var val = this._view[name](this._index);
//         this._index += size;
//         return val;
//     }
// }
// var writer = function (name, size) {
//     return function (value) {
//         this._view[name](this._index, value);
//         this._index += size;
//     }
// }
// function readASCIIString(stream, bytes) {
//     return readString(stream, bytes, false);
// }
// function readUTF8String(stream, bytes) {
//     return readString(stream, bytes, true);
// }
// function readString(stream, bytes, utf8) {
//     if (bytes === 0) {
//         return '';
//     }
//     var i = 0;
//     var chars = [];
//     var append = true;
//     var fixedLength = !!bytes;
//     if (!bytes) {
//         bytes = Math.floor((stream._length - stream._index) / 8);
//     }
//     // Read while we still have space available, or until we've
//     // hit the fixed byte length passed in.
//     while (i < bytes) {
//         var c = stream.readUint8();
//         // Stop appending chars once we hit 0x00
//         if (c === 0x00) {
//             append = false;
//             // If we don't have a fixed length to read, break out now.
//             if (!fixedLength) {
//                 break;
//             }
//         }
//         if (append) {
//             chars.push(c);
//         }
//         i++;
//     }
//     var string = String.fromCharCode.apply(null, chars);
//     if (utf8) {
//         try {
//             return decodeURIComponent(escape(string)); // https://stackoverflow.com/a/17192845
//         } catch (e) {
//             return string;
//         }
//     } else {
//         return string;
//     }
// }
// function writeASCIIString(stream, string, bytes) {
//     var length = bytes || string.length + 1;  // + 1 for NULL
//     for (var i = 0; i < length; i++) {
//         stream.writeUint8(i < string.length ? string.charCodeAt(i) : 0x00);
//     }
// }
// function writeUTF8String(stream, string, bytes) {
//     var byteArray = stringToByteArray(string);
//     var length = bytes || byteArray.length + 1;  // + 1 for NULL
//     for (var i = 0; i < length; i++) {
//         stream.writeUint8(i < byteArray.length ? byteArray[i] : 0x00);
//     }
// }
// function stringToByteArray(str) { // https://gist.github.com/volodymyr-mykhailyk/2923227
//     var b = [], i, unicode;
//     for (i = 0; i < str.length; i++) {
//         unicode = str.charCodeAt(i);
//         // 0x00000000 - 0x0000007f -> 0xxxxxxx
//         if (unicode <= 0x7f) {
//             b.push(unicode);
//             // 0x00000080 - 0x000007ff -> 110xxxxx 10xxxxxx
//         } else if (unicode <= 0x7ff) {
//             b.push((unicode >> 6) | 0xc0);
//             b.push((unicode & 0x3F) | 0x80);
//             // 0x00000800 - 0x0000ffff -> 1110xxxx 10xxxxxx 10xxxxxx
//         } else if (unicode <= 0xffff) {
//             b.push((unicode >> 12) | 0xe0);
//             b.push(((unicode >> 6) & 0x3f) | 0x80);
//             b.push((unicode & 0x3f) | 0x80);
//             // 0x00010000 - 0x001fffff -> 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
//         } else {
//             b.push((unicode >> 18) | 0xf0);
//             b.push(((unicode >> 12) & 0x3f) | 0x80);
//             b.push(((unicode >> 6) & 0x3f) | 0x80);
//             b.push((unicode & 0x3f) | 0x80);
//         }
//     }
//     return b;
// }
// var BitStream = function (source, byteOffset, byteLength) {
//     var isBuffer = source instanceof ArrayBuffer ||
//         (typeof Buffer !== 'undefined' && source instanceof Buffer);
//     if (!(source instanceof BitView) && !isBuffer) {
//         throw new Error('Must specify a valid BitView, ArrayBuffer or Buffer');
//     }
//     if (isBuffer) {
//         this._view = new BitView(source, byteOffset, byteLength);
//     } else {
//         this._view = source;
//     }
//     this._index = 0;
//     this._startIndex = 0;
//     this._length = this._view.byteLength * 8;
// }
// Object.defineProperty(BitStream.prototype, 'index', {
//     get: function () { return this._index - this._startIndex; },
//     set: function (val) { this._index = val + this._startIndex; },
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(BitStream.prototype, 'length', {
//     get: function () { return this._length - this._startIndex; },
//     set: function (val) { this._length = val + this._startIndex; },
//     enumerable  : true,
//     configurable: true
// });
// Object.defineProperty(BitStream.prototype, 'bitsLeft', {
//     get: function () { return this._length - this._index; },
//     enumerable  : true,
//     configurable: true
// });
// Object.defineProperty(BitStream.prototype, 'byteIndex', {
//     // Ceil the returned value, over compensating for the amount of
//     // bits written to the stream.
//     get: function () { return Math.ceil(this._index / 8); },
//     set: function (val) { this._index = val * 8; },
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(BitStream.prototype, 'buffer', {
//     get: function () { return this._view.buffer; },
//     enumerable: true,
//     configurable: false
// });
// Object.defineProperty(BitStream.prototype, 'view', {
//     get: function () { return this._view; },
//     enumerable: true,
//     configurable: false
// });
// BitStream.prototype.readBits = function (bits, signed) {
//     var val = this._view.getBits(this._index, bits, signed);
//     this._index += bits;
//     return val;
// }
// BitStream.prototype.writeBits = function (value, bits) {
//     this._view.setBits(this._index, value, bits);
//     this._index += bits;
// }
// BitStream.prototype.readBoolean = reader('getBoolean', 1);
// BitStream.prototype.readInt8 = reader('getInt8', 8);
// BitStream.prototype.readUint8 = reader('getUint8', 8);
// BitStream.prototype.readInt16 = reader('getInt16', 16);
// BitStream.prototype.readUint16 = reader('getUint16', 16);
// BitStream.prototype.readInt32 = reader('getInt32', 32);
// BitStream.prototype.readUint32 = reader('getUint32', 32);
// BitStream.prototype.readFloat32 = reader('getFloat32', 32);
// BitStream.prototype.readFloat64 = reader('getFloat64', 64);
// BitStream.prototype.writeBoolean = writer('setBoolean', 1);
// BitStream.prototype.writeInt8 = writer('setInt8', 8);
// BitStream.prototype.writeUint8 = writer('setUint8', 8);
// BitStream.prototype.writeInt16 = writer('setInt16', 16);
// BitStream.prototype.writeUint16 = writer('setUint16', 16);
// BitStream.prototype.writeInt32 = writer('setInt32', 32);
// BitStream.prototype.writeUint32 = writer('setUint32', 32);
// BitStream.prototype.writeFloat32 = writer('setFloat32', 32);
// BitStream.prototype.writeFloat64 = writer('setFloat64', 64);
// BitStream.prototype.readASCIIString = function (bytes) {
//     return readASCIIString(this, bytes);
// }
// BitStream.prototype.readUTF8String = function (bytes) {
//     return readUTF8String(this, bytes);
// }
// BitStream.prototype.writeASCIIString = function (string, bytes) {
//     writeASCIIString(this, string, bytes);
// }
// BitStream.prototype.writeUTF8String = function (string, bytes) {
//     writeUTF8String(this, string, bytes);
// }
// BitStream.prototype.readBitStream = function(bitLength) {
//     var slice = new BitStream(this._view);
//     slice._startIndex = this._index;
//     slice._index = this._index;
//     slice.length = bitLength;
//     this._index += bitLength;
//     return slice;
// }
// BitStream.prototype.writeBitStream = function(stream, length) {
//     if (!length) {
//         length = stream.bitsLeft;
//     }
//     var bitsToWrite;
//     while (length > 0) {
//         bitsToWrite = Math.min(length, 32);
//         this.writeBits(stream.readBits(bitsToWrite), bitsToWrite);
//         length -= bitsToWrite;
//     }
// }
// BitStream.prototype.readArrayBuffer = function(byteLength) {
//     var buffer = this._view.getArrayBuffer(this._index, byteLength);
//     this._index += (byteLength * 8);
//     return buffer;
// }
// BitStream.prototype.writeArrayBuffer = function(buffer, byteLength) {
//     this.writeBitStream(new BitStream(buffer), byteLength * 8);
// }
// // AMD / RequireJS
// if (typeof define !== 'undefined' && define.amd) {
//     define(function () {
//         return {
//             BitView: BitView,
//             BitStream: BitStream
//         }
//     });
// }
// // Node.js
// else if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         BitView: BitView,
//         BitStream: BitStream
//     }
// }


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BytesConverter = /** @class */ (function () {
    function BytesConverter() {
    }
    BytesConverter.instance = function () {
        if (!BytesConverter._instance) {
            BytesConverter._instance = new BytesConverter();
        }
        return BytesConverter._instance;
    };
    BytesConverter.prototype.decode = function (body) {
        return body;
    };
    return BytesConverter;
}());
exports.BytesConverter = BytesConverter;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArrayConverter = /** @class */ (function () {
    function ArrayConverter(_itemConverter, options) {
        this._itemConverter = _itemConverter;
        this.options = options;
    }
    ArrayConverter.prototype.decode = function (bytes) {
        var items = [];
        var sizeOfItem = this.options.sizeOfItem;
        for (var offset = 0; offset < bytes.length; offset += sizeOfItem) {
            var slice = bytes.subarray(offset, offset + sizeOfItem);
            var item = this._itemConverter.decode(slice);
            // console.log(`Decode slide ${slice} (${typeof slice}) => ${item}`);
            items.push(item);
        }
        return items;
    };
    ArrayConverter.prototype.encode = function (items) {
        var result = new Uint8Array(this.options.sizeOfItem * items.length);
        var offset = 0;
        // console.log(`ENCODE ${items}`)
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var encodedItem = this._itemConverter.encode(item); // TODO
            if (encodedItem.length > this.options.sizeOfItem) {
                throw new Error("Encoded item size overflow: " + encodedItem.length + " (max is " + this.options.sizeOfItem + ")");
            }
            // console.log(`${item} => ${encodedItem} offset ${offset}`);
            result.set(encodedItem, offset);
            offset += this.options.sizeOfItem;
        }
        return result;
    };
    return ArrayConverter;
}());
exports.ArrayConverter = ArrayConverter;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var ModbusInfoConverter = /** @class */ (function () {
    function ModbusInfoConverter() {
    }
    ModbusInfoConverter.prototype.decode = function (input) {
        var buffer = byte_buffer_1.ByteBuffer.from(input);
        return {
            address: buffer.readNumber(4),
            sizeInBytes: buffer.readNumber(4),
            functionCode: buffer.readNumber(1)
        };
    };
    ModbusInfoConverter.prototype.encode = function (input) {
        var buffer = byte_buffer_1.ByteBuffer.create(9);
        buffer.addNumber(input.address, 4);
        buffer.addNumber(input.sizeInBytes, 4);
        buffer.addNumber(input.functionCode, 1);
        return buffer.build();
    };
    ModbusInfoConverter.instance = function () {
        if (!ModbusInfoConverter._instance) {
            ModbusInfoConverter._instance = new ModbusInfoConverter();
        }
        return ModbusInfoConverter._instance;
    };
    return ModbusInfoConverter;
}());
exports.ModbusInfoConverter = ModbusInfoConverter;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var converter_1 = __webpack_require__(56);
var import_adapter_1 = __webpack_require__(2);
var crypto_helper_1 = __webpack_require__(62);
var LoginCredentialConverter = /** @class */ (function () {
    function LoginCredentialConverter() {
        this._stringDecoder = converter_1.StringConverter.instance();
        // TODO set as global arguments
        this._passwordHasher = crypto_helper_1.CryptoHelper.passwordHasher;
    }
    LoginCredentialConverter.instance = function () {
        if (!LoginCredentialConverter._instance) {
            LoginCredentialConverter._instance = new LoginCredentialConverter();
        }
        return LoginCredentialConverter._instance;
    };
    Object.defineProperty(LoginCredentialConverter.prototype, "hasher", {
        get: function () {
            return this._passwordHasher;
        },
        enumerable: true,
        configurable: true
    });
    LoginCredentialConverter.prototype.encode = function (credential) {
        var Data = new Uint8Array(LoginCredentialConverter.USERNAME_LENGTH + LoginCredentialConverter.PASSWORD_LENGTH);
        var login = credential.username;
        var pwd = credential.password;
        console.log('CredentialConverter', "Hashing password: " + credential.hashPassword);
        var encodedPassword;
        if (credential.hashPassword) {
            // this._log(`INPUT PASSWORD: ${password}`);
            encodedPassword = import_adapter_1.FormatHelper.hexStringToBuffer(this._passwordHasher.hash(pwd)); //.toString('hex');
            // password = password.substr(0, CredentialConverter.PWD_LEN * 2); // Only 16 first bytes
            // this._log(`Password hash is ${password}`);
            // let hexPassword = FormatHelper.hexStringToBuffer(password);
            // password = FormatHelper.toAsciiString(hexPassword);
            // this._log(`Output password length is ${password.length}`)
            if (encodedPassword.length > LoginCredentialConverter.PASSWORD_LENGTH) {
                encodedPassword = encodedPassword.subarray(0, LoginCredentialConverter.PASSWORD_LENGTH);
            }
        }
        else {
            encodedPassword = converter_1.StringConverter.instance().encode(pwd);
        }
        // Get the login
        var encodedLogin = converter_1.StringConverter.instance().encode(login);
        if (encodedLogin.length > LoginCredentialConverter.USERNAME_LENGTH) {
            throw new Error("Username is too long. Max is " + LoginCredentialConverter.USERNAME_LENGTH + " characters but given " + encodedLogin.length);
        }
        Data.set(encodedLogin);
        if (encodedPassword.length > LoginCredentialConverter.PASSWORD_LENGTH) {
            throw new Error("Password is too long. Max is " + LoginCredentialConverter.PASSWORD_LENGTH + " characters but given " + encodedPassword.length);
        }
        Data.set(encodedPassword, LoginCredentialConverter.USERNAME_LENGTH);
        return Data;
    };
    LoginCredentialConverter.prototype.decode = function (body) {
        return {
            username: this._stringDecoder.decode(body.subarray(0, LoginCredentialConverter.USERNAME_LENGTH)),
            password: this._stringDecoder.decode(body.subarray(LoginCredentialConverter.USERNAME_LENGTH))
        };
    };
    LoginCredentialConverter.USERNAME_LENGTH = 16;
    LoginCredentialConverter.PASSWORD_LENGTH = 16;
    return LoginCredentialConverter;
}());
exports.LoginCredentialConverter = LoginCredentialConverter;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var CloudConnectionModeConverter = /** @class */ (function () {
    function CloudConnectionModeConverter() {
    }
    CloudConnectionModeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, CloudConnectionModeConverter.mapping);
    };
    CloudConnectionModeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, CloudConnectionModeConverter.mapping);
    };
    CloudConnectionModeConverter.instance = function () {
        if (!CloudConnectionModeConverter._instance) {
            CloudConnectionModeConverter._instance = new CloudConnectionModeConverter();
        }
        return CloudConnectionModeConverter._instance;
    };
    CloudConnectionModeConverter.mapping = {
        0x0: "GENERIC",
        0x1: "IBM_BLUEMIX",
        0x2: "MICROSOFT_AZURE",
        0x4: "AMAZON_AWS",
    };
    return CloudConnectionModeConverter;
}());
exports.CloudConnectionModeConverter = CloudConnectionModeConverter;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var CoreTypeConverter = /** @class */ (function () {
    function CoreTypeConverter() {
    }
    CoreTypeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, CoreTypeConverter.mapping);
    };
    CoreTypeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, CoreTypeConverter.mapping);
    };
    CoreTypeConverter.instance = function () {
        if (!CoreTypeConverter._instance) {
            CoreTypeConverter._instance = new CoreTypeConverter();
        }
        return CoreTypeConverter._instance;
    };
    CoreTypeConverter.mapping = {
        1: "M0_CORTEX",
        2: "M3_CORTEX",
    };
    return CoreTypeConverter;
}());
exports.CoreTypeConverter = CoreTypeConverter;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var body_1 = __webpack_require__(8);
/**
*
*/
var DataLogOptionConverter = /** @class */ (function () {
    function DataLogOptionConverter() {
    }
    DataLogOptionConverter.prototype.DataLogOptionConverter = function () {
    };
    /**
    *
    */
    DataLogOptionConverter.prototype.encode = function (model) {
        var size = 0;
        size += 1;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        buffer.put_boolean(model.qos, 1);
        buffer.put_boolean(model.security, 2);
        buffer.forward(1);
        buffer.put_boolean(model.autorun, 1);
        buffer.put_boolean(model.rollingMode, 2);
        buffer.put_boolean(model.logOnChange, 4);
        return buffer.data;
    };
    /**
     *
     */
    DataLogOptionConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        numberValue = buffer.readNumber(1);
        model.qos = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.security = body_1.BooleanConverter.decodeFromNumber(numberValue, 2);
        numberValue = buffer.readNumber(1);
        model.autorun = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.rollingMode = body_1.BooleanConverter.decodeFromNumber(numberValue, 2);
        model.logOnChange = body_1.BooleanConverter.decodeFromNumber(numberValue, 4);
        return model;
    };
    DataLogOptionConverter.instance = function () {
        if (DataLogOptionConverter._instance == null) {
            DataLogOptionConverter._instance = new DataLogOptionConverter();
        }
        return DataLogOptionConverter._instance;
    };
    return DataLogOptionConverter;
}());
exports.DataLogOptionConverter = DataLogOptionConverter;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var FirmwareStateConverter = /** @class */ (function () {
    function FirmwareStateConverter() {
    }
    FirmwareStateConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, FirmwareStateConverter.mapping);
    };
    FirmwareStateConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, FirmwareStateConverter.mapping);
    };
    FirmwareStateConverter.instance = function () {
        if (!FirmwareStateConverter._instance) {
            FirmwareStateConverter._instance = new FirmwareStateConverter();
        }
        return FirmwareStateConverter._instance;
    };
    FirmwareStateConverter.mapping = {
        1: "NORMAL",
        4: "UPDATED",
        2: "UPDATING",
    };
    return FirmwareStateConverter;
}());
exports.FirmwareStateConverter = FirmwareStateConverter;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var FirmwareUpdateResultConverter = /** @class */ (function () {
    function FirmwareUpdateResultConverter() {
    }
    FirmwareUpdateResultConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, FirmwareUpdateResultConverter.mapping);
    };
    FirmwareUpdateResultConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, FirmwareUpdateResultConverter.mapping);
    };
    FirmwareUpdateResultConverter.instance = function () {
        if (!FirmwareUpdateResultConverter._instance) {
            FirmwareUpdateResultConverter._instance = new FirmwareUpdateResultConverter();
        }
        return FirmwareUpdateResultConverter._instance;
    };
    FirmwareUpdateResultConverter.mapping = {
        32: "UNSUPPORTED_PACKAGE_TYPE",
        64: "INVALID_URI",
        0: "DEFAULT_VALUE",
        1: "UPDATE_SUCCESSFUL",
        4: "OUT_OF_MEMORY",
        8: "CONNECTION_LOST",
        2: "NOT_ENOUGH_MEMORY",
        16: "CRC_CHECK_FAILURE",
    };
    return FirmwareUpdateResultConverter;
}());
exports.FirmwareUpdateResultConverter = FirmwareUpdateResultConverter;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var HostProtocolConverter = /** @class */ (function () {
    function HostProtocolConverter() {
    }
    HostProtocolConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, HostProtocolConverter.mapping);
    };
    HostProtocolConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, HostProtocolConverter.mapping);
    };
    HostProtocolConverter.instance = function () {
        if (!HostProtocolConverter._instance) {
            HostProtocolConverter._instance = new HostProtocolConverter();
        }
        return HostProtocolConverter._instance;
    };
    HostProtocolConverter.mapping = {
        32: "WIFI",
        64: "BLE",
        1: "NFC",
        4: "GSM",
        8: "USB_RLINK",
        2: "BLUETOOTH",
        16: "USB_CMISIS_DAP",
    };
    return HostProtocolConverter;
}());
exports.HostProtocolConverter = HostProtocolConverter;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var body_1 = __webpack_require__(8);
/**
*
*/
var InterfaceLockConverter = /** @class */ (function () {
    function InterfaceLockConverter() {
    }
    InterfaceLockConverter.prototype.InterfaceLockConverter = function () {
    };
    /**
    *
    */
    InterfaceLockConverter.prototype.encode = function (model) {
        var size = 0;
        size += 1;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        buffer.forward(1);
        buffer.put_boolean(model.resourceFactory, 1);
        buffer.put_boolean(model.resourceLogUid, 2);
        buffer.put_boolean(model.factoryReset, 4);
        buffer.put_boolean(model.hashPassword, 8);
        buffer.put_boolean(model.scramActivated, 16);
        return buffer.data;
    };
    /**
     *
     */
    InterfaceLockConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        numberValue = buffer.readNumber(1);
        numberValue = buffer.readNumber(1);
        model.resourceFactory = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.resourceLogUid = body_1.BooleanConverter.decodeFromNumber(numberValue, 2);
        model.factoryReset = body_1.BooleanConverter.decodeFromNumber(numberValue, 4);
        model.hashPassword = body_1.BooleanConverter.decodeFromNumber(numberValue, 8);
        model.scramActivated = body_1.BooleanConverter.decodeFromNumber(numberValue, 16);
        return model;
    };
    InterfaceLockConverter.instance = function () {
        if (InterfaceLockConverter._instance == null) {
            InterfaceLockConverter._instance = new InterfaceLockConverter();
        }
        return InterfaceLockConverter._instance;
    };
    return InterfaceLockConverter;
}());
exports.InterfaceLockConverter = InterfaceLockConverter;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extra_converter_1 = __webpack_require__(28);
var converter_1 = __webpack_require__(76);
var ListAclEntryConverter = /** @class */ (function () {
    function ListAclEntryConverter() {
        this._arrayConverter = new extra_converter_1.ArrayConverter(converter_1.AclEntryConverter.instance(), { sizeOfItem: 1 });
    }
    ListAclEntryConverter.prototype.decode = function (body) {
        return this._arrayConverter.decode(body);
    };
    ListAclEntryConverter.prototype.encode = function (body) {
        return this._arrayConverter.encode(body);
    };
    ListAclEntryConverter.instance = function () {
        if (!ListAclEntryConverter._instance) {
            ListAclEntryConverter._instance = new ListAclEntryConverter();
        }
        return ListAclEntryConverter._instance;
    };
    return ListAclEntryConverter;
}());
exports.ListAclEntryConverter = ListAclEntryConverter;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var ListHostProtocolConverter = /** @class */ (function () {
    function ListHostProtocolConverter() {
    }
    ListHostProtocolConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.MultipleMaskConverter.decodeAll(body, ListHostProtocolConverter.mapping);
    };
    ListHostProtocolConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.MultipleMaskConverter.encodeAll(input, ListHostProtocolConverter.mapping);
    };
    ListHostProtocolConverter.instance = function () {
        if (!ListHostProtocolConverter._instance) {
            ListHostProtocolConverter._instance = new ListHostProtocolConverter();
        }
        return ListHostProtocolConverter._instance;
    };
    ListHostProtocolConverter.mapping = {
        32: "WIFI",
        64: "BLE",
        1: "NFC",
        4: "GSM",
        8: "USB_RLINK",
        2: "BLUETOOTH",
        16: "USB_CMISIS_DAP",
    };
    return ListHostProtocolConverter;
}());
exports.ListHostProtocolConverter = ListHostProtocolConverter;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var ListTargetProtocolConverter = /** @class */ (function () {
    function ListTargetProtocolConverter() {
    }
    ListTargetProtocolConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.MultipleMaskConverter.decodeAll(body, ListTargetProtocolConverter.mapping);
    };
    ListTargetProtocolConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.MultipleMaskConverter.encodeAll(input, ListTargetProtocolConverter.mapping);
    };
    ListTargetProtocolConverter.instance = function () {
        if (!ListTargetProtocolConverter._instance) {
            ListTargetProtocolConverter._instance = new ListTargetProtocolConverter();
        }
        return ListTargetProtocolConverter._instance;
    };
    ListTargetProtocolConverter.mapping = {
        32: "SERIAL_STANDARD",
        64: "SERIAL_STANDARD_SWD",
        1: "SWD",
        4: "JTAG",
        8: "MODBUS",
        128: "SERIAL_STANDARD_S3P",
        2: "S3P",
        16: "GPIO",
    };
    return ListTargetProtocolConverter;
}());
exports.ListTargetProtocolConverter = ListTargetProtocolConverter;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var LowPowerOptimisationLevelConverter = /** @class */ (function () {
    function LowPowerOptimisationLevelConverter() {
    }
    LowPowerOptimisationLevelConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, LowPowerOptimisationLevelConverter.mapping);
    };
    LowPowerOptimisationLevelConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, LowPowerOptimisationLevelConverter.mapping);
    };
    LowPowerOptimisationLevelConverter.instance = function () {
        if (!LowPowerOptimisationLevelConverter._instance) {
            LowPowerOptimisationLevelConverter._instance = new LowPowerOptimisationLevelConverter();
        }
        return LowPowerOptimisationLevelConverter._instance;
    };
    LowPowerOptimisationLevelConverter.mapping = {
        0x0: "NO",
        0x2: "STANDBY",
        0x3: "SHUTDOWN",
    };
    return LowPowerOptimisationLevelConverter;
}());
exports.LowPowerOptimisationLevelConverter = LowPowerOptimisationLevelConverter;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var NetworkModeConverter = /** @class */ (function () {
    function NetworkModeConverter() {
    }
    NetworkModeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, NetworkModeConverter.mapping);
    };
    NetworkModeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, NetworkModeConverter.mapping);
    };
    NetworkModeConverter.instance = function () {
        if (!NetworkModeConverter._instance) {
            NetworkModeConverter._instance = new NetworkModeConverter();
        }
        return NetworkModeConverter._instance;
    };
    NetworkModeConverter.mapping = {
        2: "INFRASTRUCTURE_CLOUD",
        0: "PEER_TO_PEER",
        1: "INFRASTRUCTURE_ONLY",
    };
    return NetworkModeConverter;
}());
exports.NetworkModeConverter = NetworkModeConverter;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var NfcPairingModeConverter = /** @class */ (function () {
    function NfcPairingModeConverter() {
    }
    NfcPairingModeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, NfcPairingModeConverter.mapping);
    };
    NfcPairingModeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, NfcPairingModeConverter.mapping);
    };
    NfcPairingModeConverter.instance = function () {
        if (!NfcPairingModeConverter._instance) {
            NfcPairingModeConverter._instance = new NfcPairingModeConverter();
        }
        return NfcPairingModeConverter._instance;
    };
    NfcPairingModeConverter.mapping = {
        0x0: "NO",
        0x1: "MANDATORY",
        0x2: "MANDATORY_FOR_LOGIN",
    };
    return NfcPairingModeConverter;
}());
exports.NfcPairingModeConverter = NfcPairingModeConverter;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
var body_1 = __webpack_require__(8);
/**
*
*/
var ReadWriteRightsConverter = /** @class */ (function () {
    function ReadWriteRightsConverter() {
    }
    ReadWriteRightsConverter.prototype.ReadWriteRightsConverter = function () {
    };
    /**
    *
    */
    ReadWriteRightsConverter.prototype.encode = function (model) {
        var size = 0;
        size += 1;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        byteOffset += 1;
        buffer.put_boolean(model.read, 1);
        buffer.put_boolean(model.write, 2);
        return buffer.data;
    };
    /**
     *
     */
    ReadWriteRightsConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        numberValue = buffer.readNumber(1);
        model.read = body_1.BooleanConverter.decodeFromNumber(numberValue, 1);
        model.write = body_1.BooleanConverter.decodeFromNumber(numberValue, 2);
        return model;
    };
    ReadWriteRightsConverter.instance = function () {
        if (ReadWriteRightsConverter._instance == null) {
            ReadWriteRightsConverter._instance = new ReadWriteRightsConverter();
        }
        return ReadWriteRightsConverter._instance;
    };
    return ReadWriteRightsConverter;
}());
exports.ReadWriteRightsConverter = ReadWriteRightsConverter;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
/**
*
*/
var ScramLoginParamsConverter = /** @class */ (function () {
    function ScramLoginParamsConverter() {
    }
    ScramLoginParamsConverter.prototype.ScramLoginParamsConverter = function () {
    };
    /**
    *
    */
    ScramLoginParamsConverter.prototype.encode = function (model) {
        var size = 0;
        size += 16;
        size += 4;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        buffer.put_string(model.username, 16);
        buffer.put_number(model.clientNonce, 4);
        console.log('encoded scram login: ', buffer);
        return buffer.data;
    };
    /**
     *
     */
    ScramLoginParamsConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        model.username = buffer.get_string(16);
        model.clientNonce = buffer.get_number(4);
        return model;
    };
    ScramLoginParamsConverter.instance = function () {
        if (ScramLoginParamsConverter._instance == null) {
            ScramLoginParamsConverter._instance = new ScramLoginParamsConverter();
        }
        return ScramLoginParamsConverter._instance;
    };
    return ScramLoginParamsConverter;
}());
exports.ScramLoginParamsConverter = ScramLoginParamsConverter;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
/**
*
*/
var ScramLoginResponseBodyConverter = /** @class */ (function () {
    function ScramLoginResponseBodyConverter() {
    }
    ScramLoginResponseBodyConverter.prototype.ScramLoginResponseBodyConverter = function () {
    };
    /**
    *
    */
    ScramLoginResponseBodyConverter.prototype.encode = function (model) {
        var size = 0;
        size += 4;
        size += 4;
        size += 4;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        buffer.put_number(model.serverNonce, 4);
        buffer.put_bytes(model.salt);
        buffer.put_number(model.iterationNumber, 4);
        return buffer.data;
    };
    /**
     *
     */
    ScramLoginResponseBodyConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        model.serverNonce = buffer.get_number(4);
        model.salt = buffer.get_bytes(4);
        model.iterationNumber = buffer.get_number(4);
        return model;
    };
    ScramLoginResponseBodyConverter.instance = function () {
        if (ScramLoginResponseBodyConverter._instance == null) {
            ScramLoginResponseBodyConverter._instance = new ScramLoginResponseBodyConverter();
        }
        return ScramLoginResponseBodyConverter._instance;
    };
    return ScramLoginResponseBodyConverter;
}());
exports.ScramLoginResponseBodyConverter = ScramLoginResponseBodyConverter;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var byte_buffer_1 = __webpack_require__(5);
/**
*
*/
var TargetComStatsConverter = /** @class */ (function () {
    function TargetComStatsConverter() {
    }
    TargetComStatsConverter.prototype.TargetComStatsConverter = function () {
    };
    /**
    *
    */
    TargetComStatsConverter.prototype.encode = function (model) {
        var size = 0;
        size += 4;
        size += 4;
        var buffer = byte_buffer_1.ByteBuffer.create(size);
        var byteOffset = -1;
        buffer.put_number(model.nbFailCom, 4);
        buffer.put_number(model.nbSuccessfulCom, 4);
        return buffer.data;
    };
    /**
     *
     */
    TargetComStatsConverter.prototype.decode = function (data) {
        var model = {};
        if (data == null || data.length == 0) {
            throw new Error("Invalid response length: " + data.length);
        }
        var buffer = byte_buffer_1.ByteBuffer.from(data);
        var numberValue;
        model.nbFailCom = buffer.get_number(4);
        model.nbSuccessfulCom = buffer.get_number(4);
        return model;
    };
    TargetComStatsConverter.instance = function () {
        if (TargetComStatsConverter._instance == null) {
            TargetComStatsConverter._instance = new TargetComStatsConverter();
        }
        return TargetComStatsConverter._instance;
    };
    return TargetComStatsConverter;
}());
exports.TargetComStatsConverter = TargetComStatsConverter;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var TargetCoreTypeConverter = /** @class */ (function () {
    function TargetCoreTypeConverter() {
    }
    TargetCoreTypeConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, TargetCoreTypeConverter.mapping);
    };
    TargetCoreTypeConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, TargetCoreTypeConverter.mapping);
    };
    TargetCoreTypeConverter.instance = function () {
        if (!TargetCoreTypeConverter._instance) {
            TargetCoreTypeConverter._instance = new TargetCoreTypeConverter();
        }
        return TargetCoreTypeConverter._instance;
    };
    TargetCoreTypeConverter.mapping = {
        0x0: "M0_CORTEX",
        0x1: "M1_CORTEX",
        0x2: "M2_CORTEX",
        0x3: "M3_CORTEX"
    };
    return TargetCoreTypeConverter;
}());
exports.TargetCoreTypeConverter = TargetCoreTypeConverter;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var import_adapter_1 = __webpack_require__(2);
var TargetProtocolConverter = /** @class */ (function () {
    function TargetProtocolConverter() {
    }
    TargetProtocolConverter.prototype.decode = function (body) {
        return import_adapter_1.Converter.UniqMaskConverter.decodeOneExact(body, TargetProtocolConverter.mapping);
    };
    TargetProtocolConverter.prototype.encode = function (input) {
        return import_adapter_1.Converter.UniqMaskConverter.encodeOneAsBuffer(input, TargetProtocolConverter.mapping);
    };
    TargetProtocolConverter.instance = function () {
        if (!TargetProtocolConverter._instance) {
            TargetProtocolConverter._instance = new TargetProtocolConverter();
        }
        return TargetProtocolConverter._instance;
    };
    TargetProtocolConverter.mapping = {
        0x0: "SWD",
        0x1: "S3P",
        0x2: "JTAG",
        0x3: "MODBUS",
        0x4: "GPIO",
        0x5: "SERIAL_STANDARD",
        0x6: "SERIAL_STANDARD_SWD",
        0x7: "SERIAL_STANDARD_S3P",
    };
    return TargetProtocolConverter;
}());
exports.TargetProtocolConverter = TargetProtocolConverter;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Api = __webpack_require__(189);
exports.Api = Api;
var Impl = __webpack_require__(190);
exports.Impl = Impl;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(191));
__export(__webpack_require__(192));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(14);
var core_1 = __webpack_require__(3);
var RelayServer = /** @class */ (function () {
    function RelayServer(_server, params) {
        this._server = _server;
        this._params = params || {
            port: 2000
        };
        this._clients = [];
    }
    Object.defineProperty(RelayServer.prototype, "server", {
        get: function () {
            return this._server;
        },
        enumerable: true,
        configurable: true
    });
    RelayServer.prototype.addClient = function (socket) {
        this._clients.push(socket);
        return this;
    };
    RelayServer.prototype.removeClient = function (client) {
        var index = this._clients.indexOf(client);
        if (index >= 0) {
            client.close();
            console.log("Removing client " + client.getClientName() + "...");
            delete this._clients[index];
        }
        return this;
    };
    RelayServer.prototype.start = function () {
        var _this = this;
        this._subscription = new rxjs_1.Subject();
        this._server
            .connections()
            .subscribe(function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var clientName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clientName = socket.getClientName();
                        console.info("[NEW_CLIENT] " + clientName);
                        return [4 /*yield*/, socket.ready()];
                    case 1:
                        _a.sent();
                        console.info("[NEW_CLIENT] " + clientName + " IS READY");
                        // Put this new client in the list
                        this.addClient(socket);
                        socket
                            .events()
                            .subscribe({
                            next: function (event) {
                                switch (event.type) {
                                    case 'data':
                                        var messageString = _this.messageToLog(event.payload);
                                        console.info("[MESSAGE] " + messageString + " from " + clientName);
                                        _this.broadcastMessage(event.payload, socket);
                                        break;
                                    case 'error':
                                        console.error("[ERROR] " + clientName + " ", event.payload);
                                        // Do we have to remove client every time ? 
                                        _this.removeClient(socket);
                                        break;
                                    case 'end':
                                        console.info("[CLIENTEND] " + clientName);
                                        _this.removeClient(socket);
                                        break;
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        return this._server.listen(this._params);
    };
    RelayServer.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._clients.forEach(function (client) {
                            client.close();
                        });
                        if (!this._server) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._server.stop()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this._subscription) {
                            this._subscription.complete();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RelayServer.prototype.broadcastMessage = function (message, sender) {
        var messageString = this.messageToLog(message);
        console.info("[BROADCAST] " + messageString + " from " + sender.getClientName());
        if (this._clients.length == 0) {
            console.warn("There is no client yet");
            return;
        }
        // Send a message to all clients
        this._clients.forEach(function (client) {
            // Don't want to send it to sender
            try {
                if (client === sender) {
                    console.log("\t- Skip sender " + client.getClientName());
                    return;
                }
                if (client.isWritable()) {
                    console.log("\t- Sent to " + client.getClientName());
                    client.write(message);
                }
                else {
                    console.warn("Client " + client.getClientName() + " is not writable. Cannot send to it");
                }
            }
            catch (err) {
                console.error("Cannot broadcast to " + client.getClientName(), err);
            }
        });
    };
    RelayServer.prototype.messageToLog = function (message) {
        if (typeof message === "string") {
            return "\"" + message + "\"";
        }
        else if (message instanceof Buffer) {
            return core_1.FormatHelper.toHexString(message);
        }
        else {
            return message;
        }
    };
    return RelayServer;
}());
exports.RelayServer = RelayServer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13).Buffer))

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComRelay = /** @class */ (function () {
    // private IRelayCallback mCallback;
    // public final RelayServiceInfoModel mRelayInfo;
    // private DefaultSocketServer mSocketServer;
    // private WebSocketServer mWebSocketServer;
    function ComRelay(sourceProtocol, targetProtocol) {
        this.logger = console;
        if (sourceProtocol) {
            this.setSourceProtocol(sourceProtocol);
        }
        if (targetProtocol) {
            this.setTargetProtocol(targetProtocol);
        }
    }
    ComRelay.prototype.setSourceProtocol = function (protocol) {
        if (this.mSourceProtocol) {
            this.removeSourceProtocol();
        }
        this.mSourceProtocol = protocol;
        return this;
    };
    ComRelay.prototype.removeSourceProtocol = function () {
        if (this._sourceProtocolSubscription) {
            this._sourceProtocolSubscription.unsubscribe();
            this._sourceProtocolSubscription = undefined;
        }
        this.mSourceProtocol = undefined;
        return this;
    };
    ComRelay.prototype.setTargetProtocol = function (protocol) {
        this.mTargetProtocol = protocol;
        return this;
    };
    ComRelay.prototype.start = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, promiseTimout(options ? options.timeout || -1 : -1, function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var ex_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 5, , 6]);
                                    if (!this.mSourceProtocol) {
                                        throw new Error("Missing source protocol");
                                    }
                                    if (!this.mTargetProtocol) {
                                        throw new Error("Missing target protocol");
                                    }
                                    if (!!this.mSourceProtocol.isConnected()) return [3 /*break*/, 2];
                                    this.logger.info("Connecting to source protocol...");
                                    return [4 /*yield*/, this.mSourceProtocol.connect().toPromise()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!!this.mTargetProtocol.isConnected()) return [3 /*break*/, 4];
                                    this.logger.info("Connecting to target protocol...");
                                    return [4 /*yield*/, this.mTargetProtocol.connect().toPromise()];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    this.logger.info("Source/Target are now connected. Listening to messages...");
                                    // We need to reconnect
                                    this.listenToDataStream();
                                    resolve();
                                    return [3 /*break*/, 6];
                                case 5:
                                    ex_1 = _a.sent();
                                    reject(ex_1);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ComRelay.prototype.stop = function () {
        if (this.mTargetProtocol && this.mTargetProtocol.isConnected()) {
            this.mSourceProtocol.disconnect();
        }
        if (this.mSourceProtocol && this.mSourceProtocol.isConnected()) {
            this.mSourceProtocol.disconnect();
        }
    };
    ComRelay.prototype.listenToDataStream = function () {
        var _this = this;
        // if (!this.mSourceProtocol!.isConnected()){
        //     await this.mSourceProtocol!.connect();
        // }
        return new Promise(function (resolve, reject) {
            _this._sourceProtocolSubscription = _this.mSourceProtocol // TODO remove
                .receiveStream()
                .subscribe({
                next: function (data) {
                    if (!data) {
                        _this.logger.error("Received null event...");
                        return;
                    }
                    if (!_this.mTargetProtocol) {
                        _this.logger.error("Target protocol is null. Cannot redirect message to it");
                        return;
                    }
                    try {
                        _this.mTargetProtocol
                            .send(data)
                            .toPromise()
                            .then(function (response) {
                            _this.mSourceProtocol.write(response); // TODO fix
                        })
                            .catch(function (err) {
                            _this.logger.error("Source cannot transfer data to target due to error: " + err, err);
                        });
                    }
                    catch (err) {
                        _this.logger.error("Source cannot transfer data to target due to error: " + err, err);
                    }
                },
                error: function (err) {
                    console.error("Error occured " + err);
                },
                complete: function () {
                    resolve();
                }
            });
        });
    };
    ComRelay.prototype.onStop = function () {
        // TODO cleanup
        return this;
    };
    ComRelay.TAG = "RelayEngine";
    return ComRelay;
}());
exports.ComRelay = ComRelay;
function promiseTimout(ms, callback) {
    return new Promise(function (resolve, reject) {
        console.log("promiseTimout start with " + ms + " milliseconds");
        // Set up the real work
        callback(resolve, reject);
        // Set up the timeout
        if (ms >= 0) {
            setTimeout(function () {
                // console.log(`promiseTimout TIMEOUT ERROR ${ms} milliseconds`);
                reject('Promise timed out after ' + ms + ' ms');
            }, ms);
        }
    });
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=iotize-device-client.js.map