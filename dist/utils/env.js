"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ENV {
}
ENV.BASE_URL = process.env.BASE_URL || 'https://gorest.co.in/public/v2';
ENV.ACCESS_TOKEN = process.env.ACCESS_TOKEN || '04e98398ad623f7e9d4fc5cb87a36051e5d5d73179f26404e70586c1f3687deb';
exports.default = ENV;
