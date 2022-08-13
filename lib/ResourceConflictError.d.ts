import HTTPError from './HTTPError';
declare class ResourceConflictError<P extends object> extends HTTPError<P> {
    constructor(payload: P);
}
export default ResourceConflictError;
