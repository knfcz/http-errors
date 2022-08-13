"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
const withErrorHandling = (options) => (error, req, res, next) => {
    let errorCode = 'serverError';
    let httpStatus = 500;
    let payload = {};
    if (options.logError) {
        console.log('Caught error: ', error);
    }
    if (error instanceof HTTPError_1.default) {
        httpStatus = error.httpStatus;
        errorCode = error.code;
        payload = error.payload;
    }
    res.status(httpStatus).json({
        errorCode,
        payload,
    });
};
exports.default = withErrorHandling;
