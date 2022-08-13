"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class MissingResourceError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'missingResource',
            httpStatus: 404,
            payload,
        });
    }
}
exports.default = MissingResourceError;
