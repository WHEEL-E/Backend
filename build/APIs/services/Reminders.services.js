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
exports.updateReminder = exports.deleteReminder = exports.createReminder = exports.getReminder = exports.getAllRemindersBySupervisorId = exports.getAllRemindersByPatientId = void 0;
const RemindersModel = __importStar(require("../models/Reminder.model"));
const general_types_1 = require("../types/general.types");
const getAllRemindersByPatientId = (userId) => {
    const reminders = RemindersModel.getAllRemindersByPatientId(userId);
    if (!reminders) {
        throw new general_types_1.UnprocessableError('Could not fetch reminders using patientId');
    }
    return reminders;
};
exports.getAllRemindersByPatientId = getAllRemindersByPatientId;
const getAllRemindersBySupervisorId = (userId) => {
    const reminders = RemindersModel.getAllRemindersBySupervisorId(userId);
    if (!reminders) {
        throw new general_types_1.UnprocessableError('Could not fetch reminders using supervisorId');
    }
    return reminders;
};
exports.getAllRemindersBySupervisorId = getAllRemindersBySupervisorId;
const getReminder = (reminderId) => {
    const reminder = RemindersModel.getReminder(reminderId);
    if (!reminder) {
        throw new general_types_1.UnprocessableError('Could not fetch reminder');
    }
    return reminder;
};
exports.getReminder = getReminder;
const createReminder = (createReminderInput) => RemindersModel.createReminder(createReminderInput);
exports.createReminder = createReminder;
const deleteReminder = (reminderId) => {
    const reminder = RemindersModel.deleteReminder(reminderId);
    if (!reminder) {
        throw new general_types_1.UnprocessableError('Could not delete reminder');
    }
    return reminder;
};
exports.deleteReminder = deleteReminder;
const updateReminder = (reminderUpdateInput) => {
    const reminder = RemindersModel.updateReminder(reminderUpdateInput);
    if (!reminder) {
        throw new general_types_1.UnprocessableError('Could not update reminder');
    }
    return reminder;
};
exports.updateReminder = updateReminder;
