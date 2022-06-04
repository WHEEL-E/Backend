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
exports.login = void 0;
const PatientModel = __importStar(require("../models/Patient.model"));
const SupervisorModel = __importStar(require("../models/Supervisor.model"));
const jwt = __importStar(require("jsonwebtoken"));
const User_types_1 = require("../types/User.types");
const general_types_1 = require("../types/general.types");
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    let user;
    switch (role) {
        case User_types_1.USER_ROLES.PATIENT:
            user = yield PatientModel.getPatientByEmail(email);
            break;
        case User_types_1.USER_ROLES.SUPERVISOR:
            user = yield SupervisorModel.getSupervisorByEmail(email);
            break;
        default:
            break;
    }
    if (!user) {
        throw new general_types_1.UnprocessableError('Email not found in the database, can not login.');
    }
    const validPass = bcrypt_1.default.compare(user.password, password);
    if (!validPass) {
        throw new general_types_1.UnprocessableError('Password is invalid');
    }
    const token = generateToken(user._id, email, password);
    return {
        userId: user._id,
        userName: user.name,
        token: token
    };
});
exports.login = login;
const generateToken = (id, email, password) => {
    // TODO: move my_secret to environment variable
    return jwt.sign({ data: { id: id, user_email: email, pass: password } }, 'My_SECRET');
};
