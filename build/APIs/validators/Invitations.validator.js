"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateData = exports.validateID = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validateID = [
    (0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }
];
exports.validateCreateData = [
    (0, express_validator_1.body)('from_id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'Patient' is required"),
    (0, express_validator_1.body)('to_id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'Supervisor' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }
];
