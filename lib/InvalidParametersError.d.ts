import HTTPError from './HTTPError';
declare class InvalidParametersError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default InvalidParametersError;
