"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHanlder = void 0;
const FormatTime_1 = __importDefault(require("../utilities/FormatTime"));
const errorHanlder = (err, req, res, next) => {
    const errorNum = err.statusCode ? err.statusCode : 500;
    if (errorNum === 500) {
        console.error(`[ERROR: ${(0, FormatTime_1.default)()}]`, err);
    }
    res.status(errorNum).json({
        status: 'error',
        message: errorNum === 500 ? 'Internal Server Error' : err
    });
};
exports.errorHanlder = errorHanlder;
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        status: 'error',
        message: 'Path Not found'
    });
};
exports.notFoundHandler = notFoundHandler;
