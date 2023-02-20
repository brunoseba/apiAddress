"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    address: {
        street: String,
        numberStreet: Number,
    },
    country: {
        name: String,
    },
    stateProvince: {
        name: String,
        postalCode: String,
    }
});
exports.default = (0, mongoose_1.model)('Address', addressSchema);
//# sourceMappingURL=address.js.map