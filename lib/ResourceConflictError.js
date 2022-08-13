"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPError_1 = require("./HTTPError");
class ResourceConflictError extends HTTPError_1.default {
    constructor(payload) {
        super({
            code: 'resourceConflict',
            httpStatus: 409,
            payload,
        });
    }
}
exports.default = ResourceConflictError;
