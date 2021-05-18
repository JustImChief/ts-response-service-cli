import getReasonMessage from 'ts-http-statuses';
import { default as ResponseServiceError } from './ResponseServiceError';
var ResponseService = /** @class */ (function () {
    function ResponseService() {
    }
    ResponseService.prototype.doFailureAction = function (error) {
        return error;
    };
    ;
    ResponseService.prototype.doSuccessAction = function (response) {
        return (response === null || response === void 0 ? void 0 : response.data) || {};
    };
    ;
    ResponseService.prototype.processResponse = function (promise) {
        return promise
            .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            throw ResponseServiceError;
        })
            .catch(function (error) {
            var _a;
            if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                return {
                    errorType: 'error',
                    message: getReasonMessage(error.response.status),
                };
            }
            return error;
        });
    };
    ;
    return ResponseService;
}());
export default ResponseService;
export { ResponseServiceError };
//# sourceMappingURL=index.js.map