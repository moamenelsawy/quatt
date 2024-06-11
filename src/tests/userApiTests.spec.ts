import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/apiClient';
import { CreateUserDto, createActiveUser } from '../data/createUserDto';
import { UserDto } from '../data/userDto';
import ENV from '../utils/env';

test.describe.serial('User CRUD operations', () => {
    let apiClient: ApiClient;
    let userId: number;
    let initialUserData: CreateUserDto;
    let newUser: UserDto;

    test.beforeAll(async () => {
        apiClient = new ApiClient();
        initialUserData = createActiveUser();
        newUser = await apiClient.createUser(initialUserData);
        userId = newUser.id;
    });
    test('Verify new user creation', async () => {
        expect(newUser.name).toBe(initialUserData.name);
        expect(newUser.email).toBe(initialUserData.email);
        expect(newUser.gender).toBe(initialUserData.gender);
        expect(newUser.status).toBe(initialUserData.status);
    });

    test('Read user details', async () => {
        const user = await apiClient.getUser(userId);

        expect(user.id).toBe(userId);
    });

    test('Update user details', async () => {
        const newUserData = createActiveUser();
        const user = await apiClient.updateUser(userId, newUserData);

        expect(user.id).toBe(userId);
        expect(user.name).toBe(newUserData.name);
        expect(user.email).toBe(newUserData.email);
        expect(user.gender).toBe(newUserData.gender);
        expect(user.status).toBe(newUserData.status);
    });
    test('Deactivate a user', async () => {
        const updatedData = { status: 'inactive' };
        const user = await apiClient.updateUser(userId, updatedData);

        expect(user.id).toBe(userId);
        expect(user.status).toBe(updatedData.status);
    });

    test('Delete the user', async () => {
        await apiClient.deleteUser(userId);

        await expect(apiClient.getUser(userId)).rejects.toThrowError({
            message: ENV.DELETION_ERROR_TXT,
            status: ENV.DELETION_ERROR_CODE
        });
    });
});
