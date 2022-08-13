import HTTPError from './HTTPError';
declare class InvalidCredentialsError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default InvalidCredentialsError;
