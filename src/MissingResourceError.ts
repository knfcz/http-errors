import HTTPError from './HTTPError';

class MissingResourceError<P extends object> extends HTTPError<P> {
    constructor(payload: P) {
        super({
            code: 'missingResource',
            httpStatus: 404,
            payload,
        });
    }
}

export default MissingResourceError;
