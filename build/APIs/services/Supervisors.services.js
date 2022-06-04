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
exports.filterSupervisorsByName = exports.getSupervisorById = exports.getAllSupervisors = exports.updateSupervisor = exports.deleteSupervisor = exports.createSupervisor = void 0;
const SupervisorModel = __importStar(require("../models/Supervisor.model"));
const general_types_1 = require("../types/general.types");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createSupervisor = (supervisorData) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPass = yield bcrypt_1.default.hash(supervisorData.password, 10);
    const response = SupervisorModel.createSupervisior(Object.assign(Object.assign({}, supervisorData), { password: hashedPass }));
    return response;
});
exports.createSupervisor = createSupervisor;
const deleteSupervisor = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield SupervisorModel.deleteSupervisior(supervisorId);
    if (!supervisor) {
        throw new general_types_1.UnprocessableError('Supervisor not found');
    }
    return supervisor;
});
exports.deleteSupervisor = deleteSupervisor;
const updateSupervisor = (id, newData) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield SupervisorModel.updateSupervisior(id, newData);
    if (!supervisor) {
        throw new general_types_1.UnprocessableError('Supervisor not found');
    }
    return supervisor;
});
exports.updateSupervisor = updateSupervisor;
const getAllSupervisors = () => __awaiter(void 0, void 0, void 0, function* () {
    const supervisors = yield SupervisorModel.getAllSupervisors();
    return supervisors;
});
exports.getAllSupervisors = getAllSupervisors;
const getSupervisorById = (supervisorId) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield SupervisorModel.getSupervisorById(supervisorId);
    if (!supervisor) {
        throw new general_types_1.UnprocessableError('Supervisor not found');
    }
    return supervisor;
});
exports.getSupervisorById = getSupervisorById;
const filterSupervisorsByName = (name) => __awaiter(void 0, void 0, void 0, function* () { return SupervisorModel.filterSupervisorsByName(name); });
exports.filterSupervisorsByName = filterSupervisorsByName;
