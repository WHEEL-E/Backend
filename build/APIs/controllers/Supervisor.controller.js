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
exports.filterSupervisorsByName = exports.getSupervisorById = exports.getAllSupervisors = exports.updateSupervisor = exports.deleteSupervisor = exports.supervisiorSignUp = void 0;
const SupervisorServices = __importStar(require("../services/Supervisors.services"));
const supervisiorSignUp = ({ body }) => __awaiter(void 0, void 0, void 0, function* () {
    const supervisor = yield SupervisorServices.createSupervisor(body);
    return {
        response: supervisor,
        message: 'Successfully Registered'
    };
});
exports.supervisiorSignUp = supervisiorSignUp;
const deleteSupervisor = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield SupervisorServices.deleteSupervisor(params.id);
    return {
        response,
        message: 'Supervisor Successfully Deleted'
    };
});
exports.deleteSupervisor = deleteSupervisor;
const updateSupervisor = ({ params, body }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield SupervisorServices.updateSupervisor(params.id, body);
    return {
        response,
        message: 'Supervisor Successfully Updated'
    };
});
exports.updateSupervisor = updateSupervisor;
const getAllSupervisors = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield SupervisorServices.getAllSupervisors();
    return {
        response,
        message: 'All Supervisors have been Successfully Fetched'
    };
});
exports.getAllSupervisors = getAllSupervisors;
const getSupervisorById = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield SupervisorServices.getSupervisorById(params.id);
    return {
        response,
        message: "Supervisor's data Successfully Fetched"
    };
});
exports.getSupervisorById = getSupervisorById;
const filterSupervisorsByName = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    const name = query.name;
    const response = yield SupervisorServices.filterSupervisorsByName(name);
    return {
        response,
        message: "Supervisors's data Successfully Fetched"
    };
});
exports.filterSupervisorsByName = filterSupervisorsByName;
