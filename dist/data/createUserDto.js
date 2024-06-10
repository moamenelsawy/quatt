"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActiveUser = void 0;
const faker_1 = require("@faker-js/faker");
const createActiveUser = () => {
    const gender = faker_1.faker.person.sexType();
    const name = faker_1.faker.person.firstName(gender);
    const email = faker_1.faker.internet.email({ firstName: name, provider: "quatt.com" }).toLowerCase();
    return {
        name: name,
        email: email,
        gender: gender,
        status: "active",
    };
};
exports.createActiveUser = createActiveUser;
