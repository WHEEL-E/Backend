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
exports.rejectInvitation = exports.acceptInvitation = exports.getInvitations = exports.getInvitation = exports.deleteInvitation = exports.UpdateInvitationService = exports.resendInvitationService = exports.sendInvitationService = void 0;
const InvitationModels = __importStar(require("../models/Invitations.model"));
const Invitation_types_1 = require("../types/Invitation.types");
const User_types_1 = require("../types/User.types");
const general_types_1 = require("../types/general.types");
const Supervisor_model_1 = require("../models/Supervisor.model");
const Patient_model_1 = require("../models/Patient.model");
const sendInvitationService = (invitation) => __awaiter(void 0, void 0, void 0, function* () {
    const response = InvitationModels.createInvitation(invitation);
    //   TODO: Send invitation Notification to supervisor
    return response;
});
exports.sendInvitationService = sendInvitationService;
const resendInvitationService = (inivitationID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = InvitationModels.updateInvitation(inivitationID, Invitation_types_1.InvitationStatus.PENDING);
    //   TODO: Send Reinvitation Notification to supervisor
    return response;
});
exports.resendInvitationService = resendInvitationService;
const UpdateInvitationService = (inivitationID, newState) => __awaiter(void 0, void 0, void 0, function* () { return InvitationModels.updateInvitation(inivitationID, newState); });
exports.UpdateInvitationService = UpdateInvitationService;
const deleteInvitation = (id) => __awaiter(void 0, void 0, void 0, function* () { return InvitationModels.deleteInvitation(id); });
exports.deleteInvitation = deleteInvitation;
const getInvitation = (id) => __awaiter(void 0, void 0, void 0, function* () { return InvitationModels.getInvitation(id); });
exports.getInvitation = getInvitation;
const getInvitations = (userID, userType) => __awaiter(void 0, void 0, void 0, function* () {
    switch (userType) {
        case User_types_1.USER_ROLES.PATIENT:
            return yield InvitationModels.getPatientInvitations(userID);
        case User_types_1.USER_ROLES.SUPERVISOR:
            return yield InvitationModels.getSupervisorInvitations(userID);
        default:
            throw new general_types_1.UnprocessableError("User type doesn't exist");
    }
});
exports.getInvitations = getInvitations;
const acceptInvitation = (inivitationID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationModels.updateInvitation(inivitationID, Invitation_types_1.InvitationStatus.ACCEPTED);
    const invitation = yield InvitationModels.getInvitation(inivitationID);
    if (!invitation) {
        throw new general_types_1.UnprocessableError('Invitation not found');
    }
    yield (0, Supervisor_model_1.linkPatient)(invitation.to_id, invitation.from_id);
    yield (0, Patient_model_1.linkSupervisor)(invitation.to_id, invitation.from_id);
    // TODO: Send accepting notification to patient
    return response;
});
exports.acceptInvitation = acceptInvitation;
const rejectInvitation = (inivitationID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield InvitationModels.updateInvitation(inivitationID, Invitation_types_1.InvitationStatus.REJECTED);
    // TODO: Send rejection notification to patient
    return response;
});
exports.rejectInvitation = rejectInvitation;
