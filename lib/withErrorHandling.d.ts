declare type ExpressResponse = {
    status: (code: number) => ExpressResponse;
    json: (payload: object) => void;
};
declare type options = {
    logError: boolean;
};
declare const withErrorHandling: (options: options) => (error: Error, req: object, res: ExpressResponse, next: Function) => void;
export default withErrorHandling;
