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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.deleteNote = exports.createNote = exports.getNote = exports.getAllNotes = void 0;
const NotesServices = __importStar(require("../services/Notes.services"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAllNotes = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = new mongoose_1.default.Types.ObjectId(params.userID);
    const response = yield NotesServices.getAllNotes(userId);
    return {
        response: response,
        message: 'Notes retrieved successfully'
    };
});
exports.getAllNotes = getAllNotes;
const getNote = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield NotesServices.getNote(noteId);
    return {
        response: response,
        message: 'Note retrieved successfully'
    };
});
exports.getNote = getNote;
const createNote = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield NotesServices.createNote(body);
    return {
        response: response,
        message: 'Note created successfully'
    };
});
exports.createNote = createNote;
const deleteNote = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield NotesServices.deleteNote(noteId);
    return {
        response: response,
        message: 'Note deleted successfully'
    };
});
exports.deleteNote = deleteNote;
const updateNote = ({ body, params }) => __awaiter(void 0, void 0, void 0, function* () {
    const updateNoteInput = {
        noteId: new mongoose_1.default.Types.ObjectId(params.id),
        title: body.title,
        description: body.description
    };
    const response = yield NotesServices.updateNote(updateNoteInput);
    return {
        response: response,
        message: 'Note updated successfully'
    };
});
exports.updateNote = updateNote;
