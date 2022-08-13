import HTTPError from './HTTPError';
declare class MissingResourceError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default MissingResourceError;
