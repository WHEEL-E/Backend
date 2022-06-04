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
exports.linkSupervisor = exports.updatePatient = exports.deletePatient = exports.createPatient = exports.getPatientByEmail = exports.getPatient = exports.getAllPatients = exports.getAllPatientsBySupervisorId = void 0;
const Patient_schema_1 = __importDefault(require("../schema/Patient.schema"));
const mongoose_1 = __importDefault(require("mongoose"));
// will leave it's implementation until we agree upon a certain method
/**
 *
 * @param supervisorId
 * @returns all patients data associated with a certain supervisor
 */
const getAllPatientsBySupervisorId = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllPatientsBySupervisorId = getAllPatientsBySupervisorId;
/**
 *
 * @param
 * @returns all patients data
 */
const getAllPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    const patients = Patient_schema_1.default.find();
    return patients;
});
exports.getAllPatients = getAllPatients;
/**
 *
 * @param patientId
 * @returns patient data
 */
const getPatient = (patientId) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = Patient_schema_1.default.findById(patientId);
    return patient;
});
exports.getPatient = getPatient;
/**
 *
 * @param email of the patient
 * @returns patient data
 */
const getPatientByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield Patient_schema_1.default.findOne({ email: email });
    return patient;
});
exports.getPatientByEmail = getPatientByEmail;
/**
 *
 * @param patientInput create new patient data
 * @returns id of the newly created patient
 */
const createPatient = (patientInput) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Patient_schema_1.default.create({
        name: patientInput.patient_name,
        email: patientInput.email,
        // will add hashing in auth PRs
        password: patientInput.password,
        phone: patientInput.phone,
        emergency_number: patientInput.emergency_number,
        address: patientInput.address,
        gender: patientInput.gender,
        weight: patientInput.weight,
        height: patientInput.height,
        dob: patientInput.dob,
        smoking: patientInput.smoking
    });
    return response;
});
exports.createPatient = createPatient;
/**
 *
 * @param patientId
 * @returns the deleted patient record
 */
const deletePatient = (patientId) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield Patient_schema_1.default.findOneAndDelete({ _id: patientId });
    return patient;
});
exports.deletePatient = deletePatient;
/**
 *
 * @param patientId
 * @returns the updated patient record
 */
const updatePatient = (patientId, updatePatientInput) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = Patient_schema_1.default.findByIdAndUpdate(patientId, updatePatientInput);
    return patient;
});
exports.updatePatient = updatePatient;
const linkSupervisor = (supervisorID, patientID) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield Patient_schema_1.default.findById(new mongoose_1.default.Types.ObjectId(patientID));
    if (patient === null || patient === void 0 ? void 0 : patient.supervisors) {
        patient.supervisors.push(supervisorID);
        const res = yield patient.save();
        return res;
    }
    else {
        return 'Patient not found';
    }
});
exports.linkSupervisor = linkSupervisor;
