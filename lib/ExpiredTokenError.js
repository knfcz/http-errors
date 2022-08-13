"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class ExpiredTokenError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'expiredToken',
            httpStatus: 403,
            payload,
        });
    }
}
exports.default = ExpiredTokenError;
