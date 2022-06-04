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
exports.updatePatient = exports.deletePatient = exports.createPatient = exports.getPatient = exports.getAllPatients = exports.getAllPatientsBySupervisorId = void 0;
const PatientsServices = __importStar(require("../services/Patient.services"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAllPatientsBySupervisorId = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisorId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield PatientsServices.getAllPatientsBySupervisorId(supervisorId);
    return {
        response: response,
        message: 'Patients retrieved successfully'
    };
});
exports.getAllPatientsBySupervisorId = getAllPatientsBySupervisorId;
const getAllPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield PatientsServices.getAllPatients();
    return {
        response: response,
        message: 'Patients retrieved successfully'
    };
});
exports.getAllPatients = getAllPatients;
const getPatient = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const patientId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield PatientsServices.getPatient(patientId);
    return {
        response: response,
        message: 'Patient retrieved successfully'
    };
});
exports.getPatient = getPatient;
const createPatient = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield PatientsServices.createPatient(body);
    return {
        response: response,
        message: 'Patient created successfully'
    };
});
exports.createPatient = createPatient;
const deletePatient = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const patientId = new mongoose_1.default.Types.ObjectId(params.id);
    const response = yield PatientsServices.deletePatient(patientId);
    return {
        response: response,
        message: 'Patient deleted successfully'
    };
});
exports.deletePatient = deletePatient;
const updatePatient = ({ body, params }) => __awaiter(void 0, void 0, void 0, function* () {
    const patientId = new mongoose_1.default.Types.ObjectId(params.id);
    const updatePatientInput = {
        patient_name: body.patient_name,
        email: body.email,
        address: body.address,
        dob: body.dob,
        emergency_number: body.emergency_number,
        gender: body.gender,
        height: body.height,
        password: body.password,
        phone: body.phone,
        smoking: body.smoking,
        weight: body.weight
    };
    const response = yield PatientsServices.updatePatient(patientId, updatePatientInput);
    return {
        response: response,
        message: 'Patient updated successfully'
    };
});
exports.updatePatient = updatePatient;
