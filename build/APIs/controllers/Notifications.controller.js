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
Object.defineProperty(exports, "__esModule", { value: true });
exports.editNotification = exports.getUserNotifications = exports.delteNotification = exports.createNotification = void 0;
const NotificationServices = __importStar(require("../services/Notifications.services"));
const createNotification = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield NotificationServices.createNotification(body);
    return {
        response: response,
        message: 'Notification has been created successfully'
    };
});
exports.createNotification = createNotification;
const delteNotification = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield NotificationServices.deleteNotification(params.id);
    return {
        response: response,
        message: 'Notification has been deleted successfully'
    };
});
exports.delteNotification = delteNotification;
const getUserNotifications = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield NotificationServices.getUserNotifications(params.id);
    return {
        response: response,
        message: 'Notifications have been fetched successfully'
    };
});
exports.getUserNotifications = getUserNotifications;
const editNotification = ({ body, params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield NotificationServices.editNotification(params.id, body);
    return {
        response: response,
        message: 'Notification has been edited successfully'
    };
});
exports.editNotification = editNotification;
