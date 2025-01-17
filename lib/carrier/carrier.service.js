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
const response_util_1 = __importDefault(require("../util/response.util"));
class CarrierService {
    constructor(client) {
        this.client = client;
    }
    getCarriers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get("carriers");
                return response.data;
            }
            catch (e) {
                (0, response_util_1.default)(e);
            }
        });
    }
    addCarrier(carrierRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!carrierRequest)
                throw new Error("carrier info is null");
            try {
                const response = yield this.client.post("carriers", carrierRequest);
                return response.data;
            }
            catch (e) {
                (0, response_util_1.default)(e);
            }
        });
    }
    deleteCarrier(carrierId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!carrierId)
                throw new Error("carrier id is null");
            try {
                yield this.client.delete(`carriers/${carrierId}`);
                return "OK";
            }
            catch (e) {
                (0, response_util_1.default)(e);
            }
        });
    }
}
exports.default = CarrierService;
