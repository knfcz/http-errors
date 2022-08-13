"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class InvalidCredentialsError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'invalidCredentials',
            httpStatus: 400,
            payload,
        });
    }
}
exports.default = InvalidCredentialsError;
