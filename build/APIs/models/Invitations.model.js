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
exports.getSupervisorInvitations = exports.getPatientInvitations = exports.deleteInvitation = exports.updateInvitation = exports.createInvitation = exports.getInvitation = void 0;
const Invitation_schems_1 = __importDefault(require("../schema/Invitation.schems"));
const mongoose_1 = __importDefault(require("mongoose"));
const getInvitation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Invitation_schems_1.default.findById(new mongoose_1.default.Types.ObjectId(id));
});
exports.getInvitation = getInvitation;
const createInvitation = (invitationInput) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Invitation_schems_1.default.create(invitationInput);
    return response;
});
exports.createInvitation = createInvitation;
const updateInvitation = (invitationID, newState) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedInvitation = yield Invitation_schems_1.default.updateOne({ _id: new mongoose_1.default.Types.ObjectId(invitationID) }, {
        status: newState
    }, { new: true });
    return updatedInvitation;
});
exports.updateInvitation = updateInvitation;
const deleteInvitation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const invitation = yield Invitation_schems_1.default.findByIdAndDelete(new mongoose_1.default.Types.ObjectId(id));
    return invitation;
});
exports.deleteInvitation = deleteInvitation;
const getPatientInvitations = (patientID) => __awaiter(void 0, void 0, void 0, function* () {
    const invitations = yield Invitation_schems_1.default.find({
        from_id: new mongoose_1.default.Types.ObjectId(patientID)
    });
    return invitations;
});
exports.getPatientInvitations = getPatientInvitations;
const getSupervisorInvitations = (supervisorID) => __awaiter(void 0, void 0, void 0, function* () {
    const invitations = yield Invitation_schems_1.default.find({
        from_id: new mongoose_1.default.Types.ObjectId(supervisorID)
    });
    return invitations;
});
exports.getSupervisorInvitations = getSupervisorInvitations;
