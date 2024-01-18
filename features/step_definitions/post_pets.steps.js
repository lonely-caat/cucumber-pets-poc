const { Given, When, Then } = require('@cucumber/cucumber');
const { makePostRequest } = require('../../utils/pet_requests');
const { newPetPayload } = require('../../data/pet_payload');
let expect, response;
const assert = require('assert').strict;

Given('I make a POST request to {string}', async function (url) {
    // This step is more of a setup; the actual POST request is made in the "When" step.
});

When('I send the pet data', async function () {
    response = await makePostRequest('https://petstore.swagger.io/v2/pet', newPetPayload);
});

Then('the response should be 200', function () {
    assert.equal(response.status, 200);
});

