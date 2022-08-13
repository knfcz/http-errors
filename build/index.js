function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "AccessForbiddenError", () => $fa540270389ef4cf$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ExpiredTokenError", () => $5ed83b36a1da0fb7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "HTTPError", () => $3912b321c5d515ee$export$2e2bcd8739ae039);
$parcel$export(module.exports, "InvalidParametersError", () => $18574826b1b9f2cd$export$2e2bcd8739ae039);
$parcel$export(module.exports, "MissingResourceError", () => $e3a89eb9defbe31f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ResourceConflictError", () => $a8c089703a2796ce$export$2e2bcd8739ae039);
$parcel$export(module.exports, "withErrorHandling", () => $31e9e5a250557cd8$export$2e2bcd8739ae039);
class $3912b321c5d515ee$var$HTTPError extends Error {
    constructor({ code: code , errorMessage: errorMessage , httpStatus: httpStatus , payload: payload  }){
        super(errorMessage);
        this.code = code;
        this.httpStatus = httpStatus;
        this.payload = payload || {};
    }
}
var $3912b321c5d515ee$export$2e2bcd8739ae039 = $3912b321c5d515ee$var$HTTPError;


class $fa540270389ef4cf$var$AccessForbiddenError extends (0, $3912b321c5d515ee$export$2e2bcd8739ae039) {
    constructor(payload){
        super({
            code: "accessForbidden",
            httpStatus: 403,
            payload: payload
        });
    }
}
var $fa540270389ef4cf$export$2e2bcd8739ae039 = $fa540270389ef4cf$var$AccessForbiddenError;



class $5ed83b36a1da0fb7$var$ExpiredTokenError extends (0, $3912b321c5d515ee$export$2e2bcd8739ae039) {
    constructor(payload){
        super({
            code: "expiredToken",
            httpStatus: 403,
            payload: payload
        });
    }
}
var $5ed83b36a1da0fb7$export$2e2bcd8739ae039 = $5ed83b36a1da0fb7$var$ExpiredTokenError;




class $18574826b1b9f2cd$var$InvalidParametersError extends (0, $3912b321c5d515ee$export$2e2bcd8739ae039) {
    constructor(payload){
        super({
            code: "invalidParameters",
            httpStatus: 400,
            payload: payload
        });
    }
}
var $18574826b1b9f2cd$export$2e2bcd8739ae039 = $18574826b1b9f2cd$var$InvalidParametersError;



class $e3a89eb9defbe31f$var$MissingResourceError extends (0, $3912b321c5d515ee$export$2e2bcd8739ae039) {
    constructor(payload){
        super({
            code: "missingResource",
            httpStatus: 404,
            payload: payload
        });
    }
}
var $e3a89eb9defbe31f$export$2e2bcd8739ae039 = $e3a89eb9defbe31f$var$MissingResourceError;



class $a8c089703a2796ce$var$ResourceConflictError extends (0, $3912b321c5d515ee$export$2e2bcd8739ae039) {
    constructor(payload){
        super({
            code: "resourceConflict",
            httpStatus: 409,
            payload: payload
        });
    }
}
var $a8c089703a2796ce$export$2e2bcd8739ae039 = $a8c089703a2796ce$var$ResourceConflictError;



const $31e9e5a250557cd8$var$withErrorHandling = (options)=>(error, req, res, next)=>{
        let errorCode = "serverError";
        let httpStatus = 500;
        let payload = {};
        if (options.logError) console.log("Caught error: ", error);
        if (error instanceof (0, $3912b321c5d515ee$export$2e2bcd8739ae039)) {
            httpStatus = error.httpStatus;
            errorCode = error.code;
            payload = error.payload;
        }
        res.status(httpStatus).json({
            errorCode: errorCode,
            payload: payload
        });
    };
var $31e9e5a250557cd8$export$2e2bcd8739ae039 = $31e9e5a250557cd8$var$withErrorHandling;




//# sourceMappingURL=index.js.map
