interface options<P extends object> {
    httpStatus: number;
    code: string;
    errorMessage?: string;
    payload: P;
}
declare class HTTPError<P extends object> extends Error {
    httpStatus: number;
    code: string;
    payload: P;
    constructor({ code, errorMessage, httpStatus, payload }: options<P>);
}
export default HTTPError;
