"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSupervisorId = exports.validatePatientId = exports.validatePatientDeletion = exports.validatePatientCreation = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validatePatientCreation = [(0, express_validator_1.body)('patient_name')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'patient_name' is required"),
    (0, express_validator_1.body)('email')
        .isEmail()
        .exists()
        .withMessage("Insuffecient parameters. 'email' is required"),
    (0, express_validator_1.body)('password')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'password' is required"),
    (0, express_validator_1.body)('phone')
        .isNumeric()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'phone' is required"),
    (0, express_validator_1.body)('emergency_number')
        .isNumeric()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'emergency_number' is required"),
    (0, express_validator_1.body)('address')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'address' is required"),
    (0, express_validator_1.body)('gender')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'gender' is required"),
    (0, express_validator_1.body)('weight')
        .isNumeric()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'weight' is required"),
    (0, express_validator_1.body)('height')
        .isNumeric()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'height' is required"),
    (0, express_validator_1.body)('dob')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'dob' is required"),
    (0, express_validator_1.body)('smoking')
        .isBoolean()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'smoking' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validatePatientDeletion = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'user_id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validatePatientId = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validateSupervisorId = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
