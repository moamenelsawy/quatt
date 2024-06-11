import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/apiClient';
import { CreateUserDto, createActiveUser } from '../data/createUserDto';
import { faker } from '@faker-js/faker';

test.describe('User CRUD operations', () => {
    let apiClient: ApiClient;
    let userId: number;

    test.beforeAll(() => {
        apiClient = new ApiClient();
    });

    test('Create a new user', async () => {
        const userData = createActiveUser();
        const newUser = await apiClient.createUser(userData);
        userId = newUser.id;

        expect(newUser.name).toBe(userData.name);
        expect(newUser.email).toBe(userData.email);
        expect(newUser.gender).toBe(userData.gender);
        expect(newUser.status).toBe(userData.status);
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
            message: 'Request failed with status code 404',
            status: 404
        });
    });
});
