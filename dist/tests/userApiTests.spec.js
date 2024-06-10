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
const test_1 = require("@playwright/test");
const apiClient_1 = require("../utils/apiClient");
const createUserDto_1 = require("../data/createUserDto");
test_1.test.describe('User CRUD operations', () => {
    let apiClient;
    let userId;
    test_1.test.beforeAll(() => {
        apiClient = new apiClient_1.ApiClient();
    });
    (0, test_1.test)('Create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = (0, createUserDto_1.createActiveUser)();
        const user = yield apiClient.createUser(userData);
        userId = user.id;
        console.log(`User Name: ${user.name}`);
        console.log(`User Email: ${user.email}`);
        console.log(`User Gender: ${user.gender}`);
        console.log(`User Status: ${user.status}`);
        (0, test_1.expect)(user.name).toBe(userData.name);
        (0, test_1.expect)(user.email).toBe(userData.email);
    }));
    (0, test_1.test)('Read user details', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield apiClient.getUser(userId);
        (0, test_1.expect)(user.id).toBe(userId);
    }));
    (0, test_1.test)('Update user details', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedData = { name: 'John Updated Doe' };
        const user = yield apiClient.updateUser(userId, updatedData);
        (0, test_1.expect)(user.name).toBe(updatedData.name);
    }));
    (0, test_1.test)('Delete the user', () => __awaiter(void 0, void 0, void 0, function* () {
        yield apiClient.deleteUser(userId);
        const response = yield apiClient.getUser(userId);
        (0, test_1.expect)(response).toBeNull();
    }));
});
// 
