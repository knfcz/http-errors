import HTTPError from './HTTPError';

class ResourceConflictError<P extends object> extends HTTPError<P> {
    constructor(payload: P) {
        super({
            code: 'resourceConflict',
            httpStatus: 409,
            payload,
        });
    }
}

export default ResourceConflictError;
