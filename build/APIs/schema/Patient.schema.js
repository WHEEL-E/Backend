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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Patient ID is generated dynamically by the db
const PatientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 250,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 10,
        maxlength: 250,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 250,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 25,
        required: true
    },
    emergency_number: {
        type: Number,
        minlength: 10,
        maxlength: 25,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    weight: { type: Number },
    height: { type: Number },
    // instead of age attribute
    dob: { type: Date, required: true },
    smoking: {
        type: Boolean
    },
    chair_serial_id: {
        type: String
    },
    supervisors: {
        type: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Supervisor', default: [] }],
        default: []
    }
    // profile_picture: {},
    // medical_history: {}
});
const Patient = (0, mongoose_1.model)('Patient', PatientSchema);
exports.default = Patient;
