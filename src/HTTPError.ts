interface options<P extends object> {
    httpStatus: number;
    code: string;
    errorMessage?: string;
    payload: P;
}

class HTTPError<P extends object> extends Error {
    public httpStatus: number;
    public code: string;
    public payload: P;

    constructor({ code, errorMessage, httpStatus, payload }: options<P>) {
        super(errorMessage);

        this.code = code;
        this.httpStatus = httpStatus;
        this.payload = payload || {};
    }
}

export default HTTPError;
