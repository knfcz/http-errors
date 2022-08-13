"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPError extends Error {
    constructor({ code, errorMessage, httpStatus, payload }) {
        super(errorMessage);
        this.code = code;
        this.httpStatus = httpStatus;
        this.payload = payload || {};
    }
}
exports.default = HTTPError;
