(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("IoTizeDeviceClient.Protocol.Api"), require("rxjs"), require("IoTizeDeviceClient.Core"), require("IoTizeDeviceClient.Device"));
	else if(typeof define === 'function' && define.amd)
		define([, "rxjs", , ], factory);
	else if(typeof exports === 'object')
		exports["IoTizeDeviceComWebview"] = factory(require("IoTizeDeviceClient.Protocol.Api"), require("rxjs"), require("IoTizeDeviceClient.Core"), require("IoTizeDeviceClient.Device"));
	else
		root["IoTizeDeviceComWebview"] = factory(root["IoTizeDeviceClient"]["Protocol"]["Api"], root["rxjs"], root["IoTizeDeviceClient"]["Core"], root["IoTizeDeviceClient"]["Device"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(2);
var rxjs_1 = __webpack_require__(3);
var core_1 = __webpack_require__(4);
var WebViewComProtocol = /** @class */ (function () {
    function WebViewComProtocol() {
    }
    WebViewComProtocol.prototype.connect = function (options) {
        if (this.getConnectionState() === api_1.ConnectionState.CONNECTED) {
            return rxjs_1.of(null);
        }
        return this._toObservableResult(WebViewDeviceComAdapter.connect());
    };
    WebViewComProtocol.prototype.disconnect = function (options) {
        if (this.getConnectionState() === api_1.ConnectionState.DISCONNECTED) {
            return rxjs_1.of(null);
        }
        return this._toObservableResult(WebViewDeviceComAdapter.disconnect());
    };
    WebViewComProtocol.prototype.send = function (data, options) {
        var result = WebViewDeviceComAdapter.send(core_1.FormatHelper.toHexString(data));
        return this
            ._toObservableResult(result);
    };
    WebViewComProtocol.prototype.write = function (data) {
        throw new Error("Method not implemented.");
    };
    WebViewComProtocol.prototype.read = function () {
        throw new Error("Method not implemented.");
    };
    WebViewComProtocol.prototype.getConnectionState = function () {
        var connectionStateString = this._jsonStringToResult(WebViewDeviceComAdapter.getConnectionState());
        return api_1.ConnectionState[connectionStateString];
    };
    WebViewComProtocol.prototype.isConnected = function () {
        return this._jsonStringToResult(WebViewDeviceComAdapter.isConnected());
    };
    WebViewComProtocol.prototype.receiveStream = function () {
        throw new Error("Method not implemented.");
    };
    WebViewComProtocol.prototype.onConnectionStateChange = function () {
        if (!this._connectionStateChange) {
            this._connectionStateChange = new rxjs_1.Subject();
        }
        return this._connectionStateChange;
    };
    WebViewComProtocol.prototype._jsonStringToResult = function (result) {
        var object = JSON.parse(result);
        switch (object.type) {
            case "error":
                throw new Error(object.payload.message); // TODO
            case "json":
                return object.payload;
            default:
            case "bytes":
                return (core_1.FormatHelper.hexStringToBuffer(object.payload));
        }
    };
    WebViewComProtocol.prototype._toObservableResult = function (result) {
        try {
            var object = this._jsonStringToResult(result);
            return rxjs_1.of(object);
        }
        catch (err) {
            return rxjs_1.throwError(err);
        }
    };
    return WebViewComProtocol;
}());
exports.WebViewComProtocol = WebViewComProtocol;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(5));


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var device_1 = __webpack_require__(6);
var web_view_com_protocol_1 = __webpack_require__(0);
/**
 * Return true if code is executed inside an IoTize Webview
 */
function isIoTizeWebView() {
    return typeof WebViewDeviceComAdapter !== "undefined";
}
exports.isIoTizeWebView = isIoTizeWebView;
function getInjectedIoTizeDevice() {
    if (!isIoTizeWebView()) {
        throw new Error("Not running inside a webview");
    }
    var device = device_1.IoTizeDevice.create();
    device.connect(new web_view_com_protocol_1.WebViewComProtocol());
    return device;
}
exports.getInjectedIoTizeDevice = getInjectedIoTizeDevice;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=iotize-device-com-webview.js.map