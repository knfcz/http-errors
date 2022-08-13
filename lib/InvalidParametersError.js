"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class InvalidParametersError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'invalidParameters',
            httpStatus: 400,
            payload,
        });
    }
}
exports.default = InvalidParametersError;
