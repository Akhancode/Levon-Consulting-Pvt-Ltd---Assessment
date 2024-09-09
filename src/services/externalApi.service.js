const axios = require("axios");
async function fetchDataFromAPI(endpoint) {
  try {
    const { data } = await axios.get(endpoint);
    return data;
  } catch (error) {
    throw new Error("Error fetching data from external API");
  }
}

module.exports = {
  fetchDataFromAPI,
};
