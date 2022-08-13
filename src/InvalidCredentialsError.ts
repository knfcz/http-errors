import HTTPError from './HTTPError';

class InvalidCredentialsError<P extends object> extends HTTPError<P> {
    constructor(payload: P) {
        super({
            code: 'invalidCredentials',
            httpStatus: 400,
            payload,
        });
    }
}

export default InvalidCredentialsError;
