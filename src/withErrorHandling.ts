import HTTPError from './HTTPError';

type ExpressResponse = {
    status: (code: number) => ExpressResponse;
    json: (payload: object) => void;
};

type options = {
    logError: boolean;
};

const withErrorHandling =
    (options: options) =>
    (error: Error, req: object, res: ExpressResponse, next: Function) => {
        let errorCode = 'serverError';
        let httpStatus = 500;
        let payload = {};

        if (options.logError) {
            console.log('Caught error: ', error);
        }

        if (error instanceof HTTPError) {
            httpStatus = error.httpStatus;
            errorCode = error.code;
            payload = error.payload;
        }

        res.status(httpStatus).json({
            errorCode,
            payload,
        });
    };

export default withErrorHandling;
