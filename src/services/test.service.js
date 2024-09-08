const CustomError = require("../utils/customError");

async function test(req, res) {
  try {
    res.json("test");
  } catch (error) {
    throw new CustomError(error, error.code || 500);
  }
}

module.exports = {
  test,
};
