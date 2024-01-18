const axios = require("axios");

async function makePostRequest(url, data) {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

module.exports = {
  makePostRequest,
};
