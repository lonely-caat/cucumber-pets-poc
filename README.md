# Jest & Cucumber API Testing Project

This project demonstrates how to set up and use Jest and Cucumber for API testing. It includes a testing suite for the Petstore API, showcasing various scenarios such as adding pets with unique constraints and validating the API responses.

## Libraries used in this project


- **Cucumber**: A Behavior-Driven Development (BDD) framework that allows writing specifications in a human-readable format. This approach bridges the gap between business stakeholders and developers by providing clear, understandable documentation of functionality. Cucumber was chosen over traditional testing frameworks because it emphasizes behavior and user experiences, making it ideal for integration and end-to-end testing.
- **Jest**: A powerful and flexible assertion library used for writing test cases in JavaScript. Jest is known for its simplicity, fast execution, and snapshot testing features. It was preferred over other libraries due to its easy setup, great community support, and extensive matchers that make writing various types of tests more straightforward.
- **Axios**: One of the most popular request libraries
- **Prettier**: One of if not the most popular formatter/linter
- **dotenv**: a great way to handle multiple envs at the same time

## Setup

1. Clone the repository
2. create a `.env` file in the root directory and add the following variables:
```
BASE_URL=https://petstore.swagger.io/v2
```
3. Run `npm install` to install the dependencies
4. Run `npm test` to run the tests (note that tests are expected to fail due to the issues with the endpoint)

## Issues with the endpoint

1. empty body is allowed:
```
   curl -X 'POST' \
   'https://petstore.swagger.io/v2/pet' \
   -H 'accept: application/json' \
   -H 'Content-Type: application/json' \
   -d '{}'
```
2. Duplicate name/id is allowed
run x2 with identical name/id
```
   
   curl -X 'POST' \
   'https://petstore.swagger.io/v2/pet' \
   -H 'accept: application/json' \
   -H 'Content-Type: application/json' \
   -d '{
   "id": 0,
   "category": {
   "id": 0,
   "name": "string"
   },
   "name": "cat",
   "photoUrls": [
   "string"
   ],
   "tags": [
   {
   "id": 0,
   "name": "string"
   }
   ],
   "status": "available"
   }'
```
3. Endpoint misses valid response body, valid response codes, in conclusion it is way too early to go to prod with it :D
