"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const addressSchema = new mongoose_1.default.Schema({
    addressId: {
        type: String,
        index: true,
        require: true,
    },
    street: String,
    numbreStreet: Number,
    country: String,
    stateProvince: {
        name: String,
        postalCode: String,
    }
});
const Address = mongoose_1.default.model('address', addressSchema);
exports.default = Address;
//# sourceMappingURL=address.model.js.map