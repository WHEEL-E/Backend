"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNoteId = exports.validateNoteUpdate = exports.validateNoteDeletion = exports.validateNoteCreation = void 0;
const express_validator_1 = require("express-validator");
const GeneralValidationFunction_1 = __importDefault(require("../utilities/GeneralValidationFunction"));
exports.validateNoteCreation = [(0, express_validator_1.body)('user_id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'user_id' is required"),
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
exports.validateNoteDeletion = [(0, express_validator_1.body)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'user_id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
exports.validateNoteUpdate = [(0, express_validator_1.body)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'note_id' is required"),
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
exports.validateNoteId = [(0, express_validator_1.param)('id')
        .isString()
        .exists()
        .withMessage("Insuffecient parameters. 'id' is required"),
    (req, res, next) => {
        (0, GeneralValidationFunction_1.default)(req, res, next);
    }];
