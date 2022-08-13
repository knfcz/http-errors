import HTTPError from './HTTPError';

class ExpiredTokenError<P extends object> extends HTTPError<P> {
    constructor(payload?: P) {
        super({
            code: 'expiredToken',
            httpStatus: 403,
            payload: payload || ({} as P),
        });
    }
}

export default ExpiredTokenError;
