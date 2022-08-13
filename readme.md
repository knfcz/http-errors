# http-errors

This is a pretty basic library to help you handle errors in your express APIs

[Installation](#installation)
[Setting up the middleware](#setting-up-the-middleware)
[Using HTTP Errors](#using-http-errors)
-   [Available errors](#available-errors)
-   [Passing additionnal data](#passing-additionnal-data)
    [Creating your own HTTP errors](#creating-your-own-http-errors)


## Installation

> npm install @knfcz/http-errors

or

> yarn add @knfcz/http-errors

## Setting up the middleware

Use the included middleware **as the last middleware** in your express API

```js
// server.js
const { withErrorHandling } = require('@knfcz/http-errors');

// Your middlewares here...
app.use(cors());
app.use(router);

// ...and the error handling mw here
app.use(
    withErrorHandling({
        logError: true,
    }),
);
```

## Using HTTP Errors

Once the middleware is set up, you can throw some HTTP errors, their code and HTTP status will be used to respond to the
client

#### Available errors

| Name                    | Code               | HTTP Status | Description                               |
| ----------------------- | ------------------ | ----------- | ----------------------------------------- |
| AccessForbiddenError    | accessForbidden    | 403         | Client don't have access to this resource |
| ExpiredTokenError       | expiredToken       | 403         | Client authentication token expired       |
| InvalidCredentialsError | invalidCredentials | 400         | Client login failed                       |
| InvalidParametersError  | invalidParameters  | 400         | Invalid body/params/headers               |
| ResourceConflictError   | resourceConflict   | 409         | Cannot create or update a resource        |

Example:

```js
// http/controllers/article.js
const { MissingResourceError } = require('@knfcz/http-errors');

const getArticle = async (req, res, next) => {
    const id = req.params.id;

    try {
        const article = await Article.find(id);

        res.json({ data: article });
    } catch (error) {
        next(new MissingResourceError());
    }
};
```

This will generate a json response with a 404 status and this body:

```json
{
    "errorCode": "missingResource",
    "payload": {}
}
```

**Note: if you use express v5+ and your handler returns a promise, you can actually throw the error instead of calling _
next_**

#### Passing additionnal data

If you want to pass some additionnal data to the client, you can pass an object to the error constructor

```js
throw new MissingResourceError({
    id: 6,
    resource: 'article',
});
```

Will give the following body

```json
{
    "errorCode": "missingResource",
    "payload": {
        "id": 6,
        "resource": "article"
    }
}
```

## Creating your own HTTP errors

You can extends the base class to create your own HTTP errors:

```js
// http/errors/FuckYouError.js
const { HTTPError } = require('@knfcz/http-errors');

class FuckYouError extends HTTPError {
    constructor(payload = {}) {
        super({
            code: 'fuckYou',
            httpStatus: 500,
        });
    }
}

module.exports = FuckYouError;
```
