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
exports.deleteInvitation = exports.rejectInvitation = exports.acceptInvitation = exports.resendInvitation = exports.getUserInvitations = exports.getInvitation = exports.sendInvitation = void 0;
const InvitationServices = __importStar(require("../services/Invitations.services"));
const sendInvitation = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.sendInvitationService(body);
    return {
        response: response,
        message: 'Invitation sent successfully'
    };
});
exports.sendInvitation = sendInvitation;
const getInvitation = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.getInvitation(params.id);
    return {
        response: response,
        message: 'Invitation retrieved successfully'
    };
});
exports.getInvitation = getInvitation;
const getUserInvitations = ({ params, query }) => __awaiter(void 0, void 0, void 0, function* () {
    const userType = query.userType;
    const response = yield InvitationServices.getInvitations(params.id, userType);
    return {
        response: response,
        message: "User/'/s Invitations retrieved successfully"
    };
});
exports.getUserInvitations = getUserInvitations;
const resendInvitation = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.resendInvitationService(params.id);
    return {
        response: response,
        message: 'Invitation resent successfully'
    };
});
exports.resendInvitation = resendInvitation;
const acceptInvitation = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.acceptInvitation(params.id);
    return {
        response: response,
        message: 'Invitation accepted successfully'
    };
});
exports.acceptInvitation = acceptInvitation;
const rejectInvitation = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.rejectInvitation(params.id);
    return {
        response: response,
        message: 'Invitation rejected successfully'
    };
});
exports.rejectInvitation = rejectInvitation;
const deleteInvitation = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationServices.deleteInvitation(params.id);
    return {
        response: response,
        message: 'Invitation deleted successfully'
    };
});
exports.deleteInvitation = deleteInvitation;
