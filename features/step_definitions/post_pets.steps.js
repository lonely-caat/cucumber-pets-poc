const { Given, When, Then } = require('@cucumber/cucumber');
const { makePostRequest } = require('../../utils/pet_requests');
const {
  newPetPayload,
  nonUniqueIDPetPayload,
  specialNamePetPayload,
  missingFieldsPetPayload,
  nonUniqueNamePetPayload,
} = require('../../data/pet_payload');
const assert = require('assert').strict;
require('dotenv').config();

const PETSTORE_URL = process.env.PETSTORE_URL;
let response, currentPayload;

Given('I make a POST request with a new pet object', async function () {
  currentPayload = newPetPayload; // Default payload for a new pet
  response = await makePostRequest(PETSTORE_URL, currentPayload);
});

Given(
  'I make a POST request with a pet object with a non-unique ID',
  async function () {
    currentPayload = nonUniqueIDPetPayload;
    response = await makePostRequest(PETSTORE_URL, currentPayload);
  }
);

Given(
  'I make a POST request with a pet object with special characters in the name',
  async function () {
    currentPayload = specialNamePetPayload;
    response = await makePostRequest(PETSTORE_URL, currentPayload);
  }
);

Given(
  'I make a POST request with a pet object with missing required fields',
  async function () {
    currentPayload = missingFieldsPetPayload;
    response = await makePostRequest(PETSTORE_URL, currentPayload);
  }
);

Given(
  'I make a POST request with a pet object with a non-unique name',
  async function () {
    currentPayload = nonUniqueNamePetPayload;
    response = await makePostRequest(PETSTORE_URL, currentPayload);
  }
);

When('I send the pet data', async function () {
  // This step is now just a placeholder as the POST request is made in the Given step
});

Then('the response should be {int}', function (statusCode) {
  assert.equal(response.status, statusCode);
});
