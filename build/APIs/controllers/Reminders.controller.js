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
exports.updateReminder = exports.deleteReminder = exports.createReminder = exports.getReminder = exports.getAllRemindersBySupervisorId = exports.getAllRemindersByPatientId = void 0;
const RemindersServices = __importStar(require("../services/Reminders.services"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAllRemindersByPatientId = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const patientId = new mongoose_1.default.Types.ObjectId(params.user_id);
    const response = yield RemindersServices.getAllRemindersByPatientId(patientId);
    return {
        response: response,
        message: 'Reminder retrieved successfully'
    };
});
exports.getAllRemindersByPatientId = getAllRemindersByPatientId;
const getAllRemindersBySupervisorId = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisorId = new mongoose_1.default.Types.ObjectId(params.user_id);
    const response = yield RemindersServices.getAllRemindersByPatientId(supervisorId);
    return {
        response: response,
        message: 'Reminder retrieved successfully'
    };
});
exports.getAllRemindersBySupervisorId = getAllRemindersBySupervisorId;
const getReminder = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const reminderId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield RemindersServices.getReminder(reminderId);
    return {
        response: response,
        message: 'Reminder retrieved successfully'
    };
});
exports.getReminder = getReminder;
const createReminder = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield RemindersServices.createReminder(body);
    return {
        response: response,
        message: 'Reminder created successfully'
    };
});
exports.createReminder = createReminder;
const deleteReminder = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const reminderId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield RemindersServices.deleteReminder(reminderId);
    return {
        response: response,
        message: 'Reminder deleted successfully'
    };
});
exports.deleteReminder = deleteReminder;
const updateReminder = ({ body, params }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatereminderInput = {
        reminder_id: new mongoose_1.default.Types.ObjectId(params.id),
        title: body.title,
        description: body.description
    };
    const response = yield RemindersServices.updateReminder(updatereminderInput);
    return {
        response: response,
        message: 'Reminder updated successfully'
    };
});
exports.updateReminder = updateReminder;
