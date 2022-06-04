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
exports.deleteNotification = exports.editNotification = exports.getAllNotificationsByUserID = exports.createNotification = void 0;
const Notifications_schema_1 = __importDefault(require("../schema/Notifications.schema"));
const mongoose_1 = __importDefault(require("mongoose"));
const createNotification = (notificationObject) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Notifications_schema_1.default.create(notificationObject);
    return response;
});
exports.createNotification = createNotification;
const getAllNotificationsByUserID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const notifications = Notifications_schema_1.default.find({
        user_id: new mongoose_1.default.Types.ObjectId(id)
    });
    return notifications;
});
exports.getAllNotificationsByUserID = getAllNotificationsByUserID;
const editNotification = (notificationID, newNotificationObject) => __awaiter(void 0, void 0, void 0, function* () {
    const newNotitication = yield Notifications_schema_1.default.findByIdAndUpdate(new mongoose_1.default.Types.ObjectId(notificationID), {
        $set: newNotificationObject
    }, { new: true });
    return newNotitication;
});
exports.editNotification = editNotification;
const deleteNotification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const notification = yield Notifications_schema_1.default.findByIdAndDelete(new mongoose_1.default.Types.ObjectId(id));
    return notification;
});
exports.deleteNotification = deleteNotification;
