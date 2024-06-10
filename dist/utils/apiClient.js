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
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = __importDefault(require("./env"));
class ApiClient {
    constructor() {
        this._clientV2 = axios_1.default.create({
            baseURL: env_1.default.BASE_URL,
            headers: {
                'Authorization': `Bearer ${env_1.default.ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
        });
    }
    createUser(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._clientV2.post('/users', createUserDto);
            return response.data;
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._clientV2.get(`/users/${userId}`);
            return response.data;
        });
    }
    updateUser(userId, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._clientV2.put(`/users/${userId}`, updateUserDto);
            return response.data;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._clientV2.delete(`/users/${userId}`);
            return response.data;
        });
    }
}
exports.ApiClient = ApiClient;
