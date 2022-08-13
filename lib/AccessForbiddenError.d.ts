import HTTPError from './HTTPError';
declare class AccessForbiddenError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default AccessForbiddenError;
