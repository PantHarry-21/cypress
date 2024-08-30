import { faker } from '@faker-js/faker';

const generateRandomUser = () => {
    // const randomUser = {
    // Generate random data using Faker.js
    fullName = faker.person.fullName(), // Generates a full name
    firstName = faker.person.firstName(),
    lastName = faker.person.lastName(),
    randomEmail = faker.internet.email(), // Generates an email address
    phoneNumber = faker.phone.number(),
    dateOfBirth = faker.date.birthdate(),
    street = faker.location.street(), // Generates an address
    state = faker.location.state(),
    city = faker.location.city(),
    zipCode = faker.location.zipCode()
}
module.exports = {
    generateRandomUser
}