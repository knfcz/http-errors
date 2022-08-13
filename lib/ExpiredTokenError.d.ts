import HTTPError from './HTTPError';
declare class ExpiredTokenError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default ExpiredTokenError;
