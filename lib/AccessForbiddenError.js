"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class AccessForbiddenError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'accessForbidden',
            httpStatus: 403,
            payload,
        });
    }
}
exports.default = AccessForbiddenError;
