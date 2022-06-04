"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const general_types_1 = require("../types/general.types");
const express_validator_1 = require("express-validator");
const validateResults = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const message = errors
            .array()
            .map((single) => `${single.msg} :'${single.param}'`)
            .join(',');
        const error = new general_types_1.BadRequestError(message);
        throw error;
    }
    next();
};
exports.default = validateResults;
