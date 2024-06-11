import axios, { AxiosInstance } from 'axios';
import ENV from '../utils/env';
import { CreateUserDto } from '../data/createUserDto';

export class ApiClient {
  private _clientV2: AxiosInstance;

  constructor() {
    this._clientV2 = axios.create({
      baseURL: ENV.BASE_URL,
      headers: {
        'Authorization': `Bearer ${ENV.ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const response = await this._clientV2.post('/users', createUserDto);
    return response.data;
  }

  async getUser(userId: number) {
    const response = await this._clientV2.get(`/users/${userId}`);
    return response.data;
  }

  async updateUser(userId: number, updateUserDto: Partial<CreateUserDto>) {
    const response = await this._clientV2.put(`/users/${userId}`, updateUserDto);
    return response.data;
  }

  async deleteUser(userId: number) {
    const response = await this._clientV2.delete(`/users/${userId}`);
    return response.data;
  }
}
