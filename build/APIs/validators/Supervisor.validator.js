"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSupervisorID = exports.validateSupervisorUpdate = exports.validateSupervisorCreation = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validateSupervisorCreation = [
    (0, express_validator_1.body)('name')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'name' is required"),
    (0, express_validator_1.body)('email')
        .isString()
        .isEmail()
        .withMessage("Insuffecient parameters. 'email' is Invalid")
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'mail' is required"),
    (0, express_validator_1.body)('password')
        .isString()
        .isLength({ min: 8 })
        .withMessage('Insuffecient parameters. Password must be at least 8 characters long')
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'password' is required"),
    (0, express_validator_1.body)('phone')
        .isNumeric()
        .isMobilePhone('any')
        .withMessage("Insuffecient parameters. 'phone' is Invalid")
        .exists()
        .withMessage("Insuffecient parameters. 'phone' is required"),
    (0, express_validator_1.body)('gender')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'gender' is required"),
    // Temp check till implement file upload
    (0, express_validator_1.body)('profile_picture')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'phone' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }
];
exports.validateSupervisorUpdate = [
    (0, express_validator_1.body)('name')
        .isString()
        .optional({ checkFalsy: true })
        .withMessage("Insuffecient parameters. 'name' is required"),
    (0, express_validator_1.body)('email')
        .isString()
        .isEmail()
        .withMessage("Insuffecient parameters. 'email' is Invalid")
        .optional()
        .withMessage("Insuffecient parameters. Invalid 'mail' is required"),
    (0, express_validator_1.body)('password')
        .isString()
        .isLength({ min: 8 })
        .withMessage('Insuffecient parameters. Password must be at least 8 characters long')
        .optional()
        .withMessage("Insuffecient parameters. Invalid 'password' is required"),
    (0, express_validator_1.body)('phone')
        .isNumeric()
        .isMobilePhone('any')
        .withMessage("Insuffecient parameters. 'phone' is Invalid")
        .optional()
        .withMessage("Insuffecient parameters. 'phone' is required"),
    (0, express_validator_1.body)('gender')
        .isString()
        .optional()
        .withMessage("Insuffecient parameters. 'gender' is required"),
    // Temp check till implement file upload
    (0, express_validator_1.body)('profile_picture')
        .isString()
        .optional()
        .withMessage("Insuffecient parameters. 'phone' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }
];
exports.validateSupervisorID = [
    (0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }
];
