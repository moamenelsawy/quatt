import { faker } from "@faker-js/faker";

export interface CreateUserDto {
    name: string;
    gender: string;
    email: string;
    status: string;
  }
  export const createActiveUser = (): CreateUserDto => {

    const gender = faker.person.sexType();
    const name = faker.person.firstName(gender);
    const email = faker.internet.email({ firstName: name, provider: "quatt.com" }).toLowerCase();
  
    return {
      name : name,
      email: email,
      gender: gender,
      status: "active",
    };
  };