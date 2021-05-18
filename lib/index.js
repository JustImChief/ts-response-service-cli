"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseServiceError = void 0;
var ts_http_statuses_1 = require("ts-http-statuses");
var ResponseServiceError_1 = require("./ResponseServiceError");
Object.defineProperty(exports, "ResponseServiceError", { enumerable: true, get: function () { return ResponseServiceError_1.default; } });
var ResponseService = /** @class */ (function () {
    function ResponseService() {
    }
    ResponseService.prototype.doFailureAction = function (error) {
        return Promise.reject(error);
    };
    ;
    ResponseService.prototype.doSuccessAction = function (response) {
        return response.data || {};
    };
    ;
    ResponseService.prototype.processResponse = function (promise) {
        return promise
            .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            throw ResponseServiceError_1.default;
        })
            .catch(function (error) {
            var _a;
            if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                return {
                    errorType: 'error',
                    message: ts_http_statuses_1.default(error.response.status),
                };
            }
            return error;
        });
    };
    ;
    return ResponseService;
}());
exports.default = ResponseService;
//# sourceMappingURL=index.js.map