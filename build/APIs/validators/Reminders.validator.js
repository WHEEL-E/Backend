"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSupervisorId = exports.validatePatientId = exports.validateReminderId = exports.validateReminderUpdate = exports.validateReminderDeletion = exports.validateReminderCreation = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validateReminderCreation = [(0, express_validator_1.body)('patient_id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'patient_id' is required"),
    (0, express_validator_1.body)('supervisor_id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'supervisor_id' is required"),
    (0, express_validator_1.body)('title')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'title' is required"),
    (0, express_validator_1.body)('description')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'description' is required"),
    (0, express_validator_1.body)('due_date')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'due_date' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validateReminderDeletion = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validateReminderUpdate = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (0, express_validator_1.body)('title')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'title' is required"),
    (0, express_validator_1.body)('description')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. Invalid 'description' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validateReminderId = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
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
