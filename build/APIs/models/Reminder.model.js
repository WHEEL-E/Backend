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
exports.updateReminder = exports.deleteReminder = exports.createReminder = exports.getReminder = exports.getAllRemindersBySupervisorId = exports.getAllRemindersByPatientId = void 0;
const Reminder_schema_1 = __importDefault(require("../schema/Reminder.schema"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 *
 * @param userId Id of the reminders owner
 * @returns array of stored reminders
 */
const getAllRemindersByPatientId = (patientId) => __awaiter(void 0, void 0, void 0, function* () {
    const reminders = yield Reminder_schema_1.default.find({ patient_id: patientId });
    return reminders;
});
exports.getAllRemindersByPatientId = getAllRemindersByPatientId;
/**
 *
 * @param userId Id of the reminders owner
 * @returns array of stored reminders
 */
const getAllRemindersBySupervisorId = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () {
    const reminders = yield Reminder_schema_1.default.find({ supervisor_id: supervisorId });
    return reminders;
});
exports.getAllRemindersBySupervisorId = getAllRemindersBySupervisorId;
/**
 *
 * @param userId Id of the reminder to be retrieved
 * @returns The stored reminder
 */
const getReminder = (reminderId) => __awaiter(void 0, void 0, void 0, function* () {
    const reminder = yield Reminder_schema_1.default.findOne({ _id: reminderId });
    return reminder;
});
exports.getReminder = getReminder;
/**
 *
 * @param reminderInput create a new remineder input
 * @returns id of the newly created reminder
 */
const createReminder = (reminderInput) => __awaiter(void 0, void 0, void 0, function* () {
    const reminder = yield Reminder_schema_1.default.create({
        patient_id: new mongoose_1.default.Types.ObjectId(reminderInput.patient_Id),
        supervisor_id: new mongoose_1.default.Types.ObjectId(reminderInput.supervisor_id),
        due_date: new Date(reminderInput.due_date),
        title: reminderInput.title,
        description: reminderInput.description
    });
    return reminder;
});
exports.createReminder = createReminder;
/**
 *
 * @param reimnderInput Id of the reminder to be deleted
 * @returns the deleted reminder
 */
const deleteReminder = (reminderId) => __awaiter(void 0, void 0, void 0, function* () {
    const reminder = yield Reminder_schema_1.default.findByIdAndRemove(reminderId);
    return reminder;
});
exports.deleteReminder = deleteReminder;
/**
 *
 * @param reminderUpdateInput Id and updated data
 * @returns the updated reminder
 */
const updateReminder = (reminderUpdateInput) => __awaiter(void 0, void 0, void 0, function* () {
    const { reminder_id, title, description } = reminderUpdateInput;
    const reminder = yield Reminder_schema_1.default.findOneAndUpdate({ _id: reminder_id }, { title: title, description: description }, { new: true });
    return reminder;
});
exports.updateReminder = updateReminder;
