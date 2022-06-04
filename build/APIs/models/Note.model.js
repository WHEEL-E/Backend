"use strict";
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
const Note_schema_1 = __importDefault(require("../schema/Note.schema"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 *
 * @param userId Id of the notes owner
 * @returns array of stored notes
 */
const getAllNotes = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield Note_schema_1.default.find({ user_id: userId });
    return notes;
});
exports.getAllNotes = getAllNotes;
/**
 *
 * @param userId Id of the note to be retrieved
 * @returns The stored note
 */
const getNote = (noteId) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield Note_schema_1.default.findOne({ _id: noteId });
    return note;
});
exports.getNote = getNote;
/**
 *
 * @param noteInput create new note iput
 * @returns id of the newly created input
 */
const createNote = (noteInput) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Note_schema_1.default.create({
        user_id: new mongoose_1.default.Types.ObjectId(noteInput.userId),
        title: noteInput.title,
        description: noteInput.description
    });
    return response;
});
exports.createNote = createNote;
/**
 *
 * @param noteInput Id of the note to be deleted
 * @returns the deleted note
 */
const deleteNote = (noteId) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield Note_schema_1.default.findByIdAndRemove(noteId);
    return note;
});
exports.deleteNote = deleteNote;
/**
 *
 * @param noteUpdateInput Id and updated data
 * @returns the updated note
 */
const updateNote = (noteIUpdateInput) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId, title, description } = noteIUpdateInput;
    const note = yield Note_schema_1.default.findOneAndUpdate({ _id: noteId }, { title: title, description: description }, { new: true });
    return note;
});
exports.updateNote = updateNote;
