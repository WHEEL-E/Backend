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
exports.linkPatient = exports.filterSupervisorsByName = exports.getSupervisorByEmail = exports.getSupervisorById = exports.getAllSupervisors = exports.deleteSupervisior = exports.updateSupervisior = exports.createSupervisior = void 0;
const Supervisior_schema_1 = __importDefault(require("../schema/Supervisior.schema"));
const mongoose_1 = __importDefault(require("mongoose"));
const createSupervisior = (supervisorDate) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Supervisior_schema_1.default.create(supervisorDate);
    return response;
});
exports.createSupervisior = createSupervisior;
const updateSupervisior = (id, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const newSupervisior = yield Supervisior_schema_1.default.findByIdAndUpdate(id, { $set: newData }, { new: true });
    return newSupervisior;
});
exports.updateSupervisior = updateSupervisior;
const deleteSupervisior = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Supervisior_schema_1.default.findByIdAndDelete(supervisorId);
    return response;
});
exports.deleteSupervisior = deleteSupervisior;
const getAllSupervisors = () => __awaiter(void 0, void 0, void 0, function* () {
    const supervisors = yield Supervisior_schema_1.default.find();
    return supervisors;
});
exports.getAllSupervisors = getAllSupervisors;
const getSupervisorById = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield Supervisior_schema_1.default.findById(supervisorId);
    return supervisor;
});
exports.getSupervisorById = getSupervisorById;
const getSupervisorByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield Supervisior_schema_1.default.findOne({ email: email });
    return supervisor;
});
exports.getSupervisorByEmail = getSupervisorByEmail;
const filterSupervisorsByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisors = yield Supervisior_schema_1.default.find({
        name: { $regex: name, $options: 'i' }
    });
    return supervisors;
});
exports.filterSupervisorsByName = filterSupervisorsByName;
const linkPatient = (supervisorID, patientID) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield Supervisior_schema_1.default.findById(new mongoose_1.default.Types.ObjectId(supervisorID));
    supervisor.associated_patients.push(patientID);
    const res = yield supervisor.save();
    return res;
});
exports.linkPatient = linkPatient;
