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
exports.handler = void 0;
const Invitations_route_1 = __importDefault(require("./Invitations.route"));
const LoginRoutes_route_1 = __importDefault(require("./LoginRoutes.route"));
const NotesRoutes_route_1 = __importDefault(require("./NotesRoutes.route"));
const Notifications_route_1 = __importDefault(require("./Notifications.route"));
const PatientRoutes_route_1 = __importDefault(require("./PatientRoutes.route"));
const Reminders_route_1 = __importDefault(require("./Reminders.route"));
const Supervisor_route_1 = __importDefault(require("./Supervisor.route"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const handler = ({ req: { params, body, query, headers }, res, next, fn }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fn({ params, body, query, headers });
        res.status(200).json({
            message: data.message,
            data: data.response,
            status: 'Success'
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.handler = handler;
router.use('/notifications', Notifications_route_1.default);
router.use('/login', LoginRoutes_route_1.default);
router.use('/supervisor', Supervisor_route_1.default);
router.use('/notes', NotesRoutes_route_1.default);
router.use('/reminders', Reminders_route_1.default);
router.use('/patients', PatientRoutes_route_1.default);
router.use('/invitations', Invitations_route_1.default);
exports.default = router;
