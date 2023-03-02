"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createAddressValidations = {
    body: joi_1.default.object().keys({
        street: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
        numbreStreet: joi_1.default.number().required(),
        stateProvince: joi_1.default.any()
    }),
};
exports.default = { createAddressValidations };
//# sourceMappingURL=createAddress.validations.js.map