import HTTPError from './HTTPError';

class AccessForbiddenError<P extends object> extends HTTPError<P> {
    constructor(payload?: P) {
        super({
            code: 'accessForbidden',
            httpStatus: 403,
            payload: payload || ({} as P),
        });
    }
}

export default AccessForbiddenError;
