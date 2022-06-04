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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvitationController = __importStar(require("../controllers/Invitations.controller"));
const express_1 = __importDefault(require("express"));
const Invitations_validator_1 = require("../validators/Invitations.validator");
const _1 = require(".");
const router = express_1.default.Router();
router.post('/', Invitations_validator_1.validateCreateData, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.sendInvitation });
});
router.get('/invitation/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.getInvitation });
});
router.get('/userInvitations/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.getUserInvitations });
});
router.put('/resned/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.resendInvitation });
});
router.put('/accept/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.acceptInvitation });
});
router.put('/reject/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.rejectInvitation });
});
router.delete('/:id', Invitations_validator_1.validateID, (req, res, next) => {
    (0, _1.handler)({ req, res, next, fn: InvitationController.deleteInvitation });
});
exports.default = router;
