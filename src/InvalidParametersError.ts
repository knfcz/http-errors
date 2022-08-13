import HTTPError from './HTTPError';

class InvalidParametersError<P extends object> extends HTTPError<P> {
    constructor(payload?: P) {
        super({
            code: 'invalidParameters',
            httpStatus: 400,
            payload: payload || ({} as P),
        });
    }
}

export default InvalidParametersError;
