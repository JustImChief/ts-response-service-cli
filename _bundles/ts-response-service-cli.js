var TSResponseServiceCli;(()=>{"use strict";var e={208:(e,E,t)=>{t.r(E),t.d(E,{CodeStatuses:()=>T,Phrases:()=>o,StatusCodes:()=>r,default:()=>O});const T={100:"CONTINUE",101:"SWITCHING_PROTOCOL",102:"PROCESSING",103:"EARLY_HINTS",200:"OK",201:"CREATED",202:"ACCEPTED",203:"NON_AUTHORITATIVE_INFORMATION",204:"NO_CONTENT",205:"RESET_CONTENT",206:"PARTIAL_CONTENT",207:"MULTI_STATUS",208:"ALREADY_REPORTED",226:"IM_USED",300:"MULTIPLE_CHOICE",301:"MOVED_PERMANENTLY",302:"FOUND",303:"SEE_OTHER",304:"NOT_MODIFIED",305:"USE_PROXY",306:"UNUSED",307:"TEMPORARY_REDIRECT",308:"PERMANENT_REDIRECT",400:"BAD_REQUEST",401:"UNAUTHORIZED",402:"PAYMENT_REQUIRED",403:"FORBIDDEN",404:"NOT_FOUND",405:"METHOD_NOT_ALLOWED",406:"NOT_ACCEPTABLE",407:"PROXY_AUTHENTICATION_REQUIRED",408:"REQUEST_TIMEOUT",409:"CONFLICT",410:"GONE",411:"LENGTH_REQUIRED",412:"PRECONDITION_FAILED",413:"PAYLOAD_TOO_LARGE",414:"URI_TOO_LONG",415:"UNSUPPORTED_MEDIA_TYPE",416:"RANGE_NOT_SATISFIABLE",417:"EXPECTATION_FAILED",418:"IM_A_TEAPOT",421:"MISDIRECTED_REQUEST",422:"UNPROCESSABLE_ENTITY",423:"LOCKED",424:"FAILED_DEPENDENCY",425:"TOO_EARLY",426:"UPGRADE_REQUIRED",428:"PRECONDITION_REQUIRED",429:"TOO_MANY_REQUESTS",431:"REQUEST_HEADER_FIELDS_TOO_LARGE",451:"UNAVAILABLE_FOR_LEGAL_REASONS",500:"INTERNAL_SERVER_ERROR",502:"BAD_GATEWAY",503:"SERVICE_UNAVAILABLE",504:"GATEWAY_TIMEOUT",505:"HTTP_VERSION_NOT_SUPPORTED",506:"VARIANT_ALSO_NEGOTIATES",507:"INSUFFICIENT_STORAGE",508:"LOOP_DETECTED",510:"NOT_EXTENDED",511:"NETWORK_AUTHENTICATION_REQUIRED"},o={100:"Continue",101:"Switching Protocol",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"unused",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"},r={CONTINUE:100,SWITCHING_PROTOCOL:101,PROCESSING:102,EARLY_HINTS:103,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICE:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,UNUSED:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,LOCKED:423,FAILED_DEPENDENCY:424,TOO_EARLY:425,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511},O=function(e){if(T.hasOwnProperty(e.toString()))return o[e];if(r.hasOwnProperty(e))return o[r[e]];throw new Error("Status code does not exist: "+e)}},102:function(e,E){var t,T=this&&this.__extends||(t=function(e,E){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,E){e.__proto__=E}||function(e,E){for(var t in E)Object.prototype.hasOwnProperty.call(E,t)&&(e[t]=E[t])})(e,E)},function(e,E){if("function"!=typeof E&&null!==E)throw new TypeError("Class extends value "+String(E)+" is not a constructor or null");function T(){this.constructor=e}t(e,E),e.prototype=null===E?Object.create(E):(T.prototype=E.prototype,new T)});Object.defineProperty(E,"__esModule",{value:!0});var o=function(e){function E(){var E=null!==e&&e.apply(this,arguments)||this;return E.name="ResponseServiceError",E}return T(E,e),E}(Error);E.default=o}},E={};function t(T){var o=E[T];if(void 0!==o)return o.exports;var r=E[T]={exports:{}};return e[T].call(r.exports,r,r.exports,t),r.exports}t.d=(e,E)=>{for(var T in E)t.o(E,T)&&!t.o(e,T)&&Object.defineProperty(e,T,{enumerable:!0,get:E[T]})},t.o=(e,E)=>Object.prototype.hasOwnProperty.call(e,E),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var T={};(()=>{var e=T;Object.defineProperty(e,"__esModule",{value:!0}),e.ResponseServiceError=void 0;var E=t(208),o=t(102);Object.defineProperty(e,"ResponseServiceError",{enumerable:!0,get:function(){return o.default}});var r=function(){function e(){}return e.prototype.doFailureAction=function(e){return Promise.reject(e)},e.prototype.doSuccessAction=function(e){return e.data||{}},e.prototype.processResponse=function(e){return e.then((function(e){if(e.status>=200&&e.status<300)return e;throw o.default})).catch((function(e){var t;return(null===(t=null==e?void 0:e.response)||void 0===t?void 0:t.status)?{errorType:"error",message:E.default(e.response.status)}:e}))},e}();e.default=r})(),TSResponseServiceCli=T})();
//# sourceMappingURL=ts-response-service-cli.js.map