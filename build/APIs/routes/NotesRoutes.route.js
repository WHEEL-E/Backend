"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotesController = __importStar(require("../controllers/Notes.controller"));
const express_1 = __importDefault(require("express"));
const Notes_validator_1 = require("../validators/Notes.validator");
const _1 = require(".");
const router = express_1.default.Router();
// we can add a user_id validation here later
router.get('/user/:userID', (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: NotesController.getAllNotes });
});
router.get('/:id', Notes_validator_1.validateNoteId, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: NotesController.getNote });
});
router.post('/', Notes_validator_1.validateNoteCreation, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: NotesController.createNote });
});
router.delete('/:id', Notes_validator_1.validateNoteDeletion, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: NotesController.deleteNote });
});
router.put('/', Notes_validator_1.validateNoteUpdate, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: NotesController.updateNote });
});
exports.default = router;
