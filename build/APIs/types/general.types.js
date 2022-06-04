"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = exports.NotFoundError = exports.AccessDeniedError = exports.UnprocessableError = exports.BadRequestError = void 0;
;
;
class BadRequestError extends Error {
    constructor(message) {
        super();
        this.name = 'Bad Request';
        this.statusCode = 400;
        this.message = message;
    }
}
exports.BadRequestError = BadRequestError;
;
class UnprocessableError extends Error {
    constructor(message) {
        super();
        this.name = 'Unprocessable Entity';
        this.statusCode = 422;
        this.message = message;
    }
}
exports.UnprocessableError = UnprocessableError;
;
class AccessDeniedError extends Error {
    constructor(message) {
        super();
        this.name = 'Access Denied';
        this.statusCode = 403;
        this.message = message;
    }
}
exports.AccessDeniedError = AccessDeniedError;
class NotFoundError extends Error {
    constructor(message) {
        super();
        this.name = 'Not Found';
        this.statusCode = 404;
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
;
class DatabaseError extends Error {
    constructor(message) {
        super();
        this.name = 'Not Acceptable';
        this.statusCode = 406;
        this.message = message;
    }
}
exports.DatabaseError = DatabaseError;
;
