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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.deleteNote = exports.createNote = exports.getNote = exports.getAllNotes = void 0;
const NotesModel = __importStar(require("../models/Note.model"));
const general_types_1 = require("../types/general.types");
const getAllNotes = (userId) => {
    const notes = NotesModel.getAllNotes(userId);
    if (!notes) {
        throw new general_types_1.UnprocessableError('Could not fetch notes ');
    }
    return notes;
};
exports.getAllNotes = getAllNotes;
const getNote = (noteId) => {
    const note = NotesModel.getNote(noteId);
    if (!note) {
        throw new general_types_1.UnprocessableError('Could not fetch note');
    }
    return note;
};
exports.getNote = getNote;
const createNote = (createNoteInput) => NotesModel.createNote(createNoteInput);
exports.createNote = createNote;
const deleteNote = (noteId) => {
    const note = NotesModel.deleteNote(noteId);
    if (!note) {
        throw new general_types_1.UnprocessableError('Could not delete note');
    }
    return note;
};
exports.deleteNote = deleteNote;
const updateNote = (noteUpdateInput) => {
    const note = NotesModel.updateNote(noteUpdateInput);
    if (!note) {
        throw new general_types_1.UnprocessableError('could not update note');
    }
    return note;
};
exports.updateNote = updateNote;
