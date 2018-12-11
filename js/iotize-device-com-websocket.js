(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("rxjs/operators"), require("IoTizeDeviceClient.Protocol.Api"), require("IoTizeDeviceClient.Protocol.Impl"), require("IoTizeDeviceClient.Core"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "rxjs/operators", , , ], factory);
	else if(typeof exports === 'object')
		exports["IoTizeDeviceComWebsocket"] = factory(require("rxjs"), require("rxjs/operators"), require("IoTizeDeviceClient.Protocol.Api"), require("IoTizeDeviceClient.Protocol.Impl"), require("IoTizeDeviceClient.Core"));
	else
		root["IoTizeDeviceComWebsocket"] = factory(root["rxjs"], root["rxjs"]["operators"], root["IoTizeDeviceClient"]["Protocol"]["Api"], root["IoTizeDeviceClient"]["Protocol"]["Impl"], root["IoTizeDeviceClient"]["Core"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));


/***/ }),
/* 1 */
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
var rxjs_1 = __webpack_require__(2);
var operators_1 = __webpack_require__(3);
var api_1 = __webpack_require__(4);
var queue_com_protocol_1 = __webpack_require__(5);
var format_helper_1 = __webpack_require__(6);
var util_1 = __webpack_require__(7);
var WebSocketProtocol = /** @class */ (function (_super) {
    __extends(WebSocketProtocol, _super);
    // protected callbacks: any[];
    function WebSocketProtocol(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        return _this;
    }
    WebSocketProtocol.prototype._connect = function (options) {
        var _this = this;
        console.log(WebSocketProtocol.TAG, "Connecting to " + this.params.url + "...");
        this._receiveStream = new rxjs_1.Subject();
        var connectionPromise = new Promise(function (resolve, reject) {
            _this.ws = new WebSocket(_this.params.url);
            _this.ws.onclose = function () {
                console.log("Websocket has been closed. Disconnecting");
                if (_this.isConnected()) {
                    _this._checkReadyState();
                }
            };
            _this.ws.onopen = function (event) {
                console.log(WebSocketProtocol.TAG, "Websocket is now open !");
                resolve(event);
            };
            _this.ws.onmessage = function (event) {
                try {
                    console.log("Message received from " + event.origin + "  " + event.data + " (type=" + typeof event.data + ")");
                    var data = event.data;
                    if (!(data instanceof Uint8Array)) {
                        if (typeof data === "string") {
                            data = new Uint8Array(format_helper_1.FormatHelper.toByteBuffer(data));
                            _this.notifyNewMessage(data);
                        }
                        else if (data instanceof Blob) {
                            console.log("Blob data need to be converted...");
                            util_1.Util.blobToUint8Array(data)
                                .then(function (result) {
                                _this.notifyNewMessage(result);
                            })
                                .catch(function (error) {
                                _this.notifyNewError(error);
                            });
                            return;
                        }
                        else {
                            var error = new Error("onmessage Received invalid data type: " + typeof data);
                            _this.notifyNewError(error);
                        }
                    }
                    else {
                        _this.notifyNewMessage(data);
                    }
                }
                catch (error) {
                    console.error("Unexpected error occured in onmessage", error);
                    _this.notifyNewError(error);
                }
            };
            _this.ws.onerror = function (error) {
                console.log("Error received: " + error.type, error);
                // TODO do we need to close socket ? 
                // TODO throw a proper error ? 
                reject(error);
            };
        });
        return rxjs_1.of(connectionPromise);
    };
    WebSocketProtocol.prototype._disconnect = function (options) {
        if (this.ws) {
            this.ws.close();
        }
        return rxjs_1.of(true);
    };
    WebSocketProtocol.prototype.write = function (data) {
        try {
            console.log("write " + format_helper_1.FormatHelper.toHexString(data));
            this._checkReadyState();
            this.ws.send(data);
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    WebSocketProtocol.prototype.read = function () {
        try {
            this._checkReadyState();
            return this.readOneValue();
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    WebSocketProtocol.prototype.readOneValue = function () {
        var _this = this;
        console.log("WebSocketProtocol", "readOneValue", "INIT");
        return new Promise(function (resolve, reject) {
            _this._receiveStream.pipe(operators_1.first())
                .subscribe({
                next: function (data) {
                    console.log("WebSocketProtocol", "readOneValue", "RESOLVING...", format_helper_1.FormatHelper.toHexString(data));
                    resolve(data);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    WebSocketProtocol.prototype.notifyNewMessage = function (message) {
        console.log("notifyNewMessage() " + format_helper_1.FormatHelper.toHexString(message));
        this._receiveStream.next(message);
    };
    WebSocketProtocol.prototype.notifyNewError = function (error) {
        this._receiveStream.error(error);
    };
    WebSocketProtocol.prototype.receiveStream = function () {
        return this._receiveStream;
    };
    WebSocketProtocol.prototype._checkReadyState = function () {
        if (!this.ws) {
            this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
            return false;
        }
        switch (this.ws.readyState) {
            case this.ws.OPEN:
                return true;
            case this.ws.CLOSED:
                this.setConnectionState(api_1.ConnectionState.DISCONNECTED);
                return false;
            case this.ws.CLOSING:
                this.setConnectionState(api_1.ConnectionState.DISCONNECTING);
                return false;
            case this.ws.CONNECTING:
                this.setConnectionState(api_1.ConnectionState.CONNECTING);
                return false;
            default:
                return false;
        }
    };
    WebSocketProtocol.TAG = "WebSocketProtocol";
    return WebSocketProtocol;
}(queue_com_protocol_1.QueueComProtocol));
exports.WebSocketProtocol = WebSocketProtocol;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.blobToUint8Array = function (blob) {
        var fileReader = new FileReader();
        return new Promise(function (resolve, reject) {
            fileReader.onloadend = function (ev) {
                if (!ev.target) {
                    reject(new Error("Null target"));
                    return;
                }
                console.log("Convertion result type " + typeof fileReader.result + " ", ev);
                var result = ev.target.result;
                resolve(new Uint8Array(result));
            };
            fileReader.onerror = reject;
            fileReader.readAsArrayBuffer(blob);
        });
    };
    return Util;
}());
exports.Util = Util;


/***/ })
/******/ ]);
});
//# sourceMappingURL=iotize-device-com-websocket.js.map