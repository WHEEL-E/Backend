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
exports.updatePatient = exports.deletePatient = exports.createPatient = exports.getPatient = exports.getAllPatientsBySupervisorId = exports.getAllPatients = void 0;
const PatientModel = __importStar(require("../models/Patient.model"));
const general_types_1 = require("../types/general.types");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAllPatients = () => {
    const patients = PatientModel.getAllPatients();
    if (!patients) {
        throw new general_types_1.UnprocessableError('Could not fetch patients ');
    }
    return patients;
};
exports.getAllPatients = getAllPatients;
const getAllPatientsBySupervisorId = (userId) => {
    const patients = PatientModel.getAllPatientsBySupervisorId(userId);
    if (!patients) {
        throw new general_types_1.UnprocessableError('Could not fetch associated patients ');
    }
    return patients;
};
exports.getAllPatientsBySupervisorId = getAllPatientsBySupervisorId;
const getPatient = (patientId) => {
    const patient = PatientModel.getPatient(patientId);
    if (!patient) {
        throw new general_types_1.UnprocessableError('Could not fetch patient');
    }
    return patient;
};
exports.getPatient = getPatient;
const createPatient = (createPatientInput) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPass = yield bcrypt_1.default.hash(createPatientInput.password, 10);
    const response = yield PatientModel.createPatient(Object.assign(Object.assign({}, createPatientInput), { password: hashedPass }));
    return response;
});
exports.createPatient = createPatient;
const deletePatient = (patientId) => {
    const patient = PatientModel.deletePatient(patientId);
    if (!patient) {
        throw new general_types_1.UnprocessableError('Could not delete patient');
    }
    return patient;
};
exports.deletePatient = deletePatient;
const updatePatient = (patientId, patientUpdateInput) => {
    const patient = PatientModel.updatePatient(patientId, patientUpdateInput);
    if (!patient) {
        throw new general_types_1.UnprocessableError('could not update patient');
    }
    return patient;
};
exports.updatePatient = updatePatient;
