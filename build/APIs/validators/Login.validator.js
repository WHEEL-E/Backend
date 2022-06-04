"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginInput = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validateLoginInput = [(0, express_validator_1.body)('email')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'email' is required"),
    (0, express_validator_1.body)('password')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'password' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
