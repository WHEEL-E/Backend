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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthorization = void 0;
const general_types_1 = require("../types/general.types");
const validateRules = (roles, userRole) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Promise.all(roles.map((role) => {
        if (role === userRole) {
            return true;
        }
        return false;
    }));
    return results.includes(true);
});
const userAuthorization = (requiredRules) => {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { currentUser } = res.locals;
            const response = yield validateRules(requiredRules, currentUser.role);
            if (!response) {
                const response = new general_types_1.AccessDeniedError("You don't have the required permissions for this operation");
                res.status(403).send(response);
            }
            return next();
        });
    };
};
exports.userAuthorization = userAuthorization;
