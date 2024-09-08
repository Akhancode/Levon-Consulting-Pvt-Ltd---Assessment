const CustomError = require("../utils/customError");
const utilsSqlDB = require("../utils/sqlQueries");
const { getMyCostingbyUserFunction } = require("../utils/mongoHelper");
const { ACTIVE, INACTIVE, DAYS, HOURS } = require("../utils/constants");
const {
  filterCostingInRangeOfDates,
  checkValidityByDates,
} = require("../utils/helperFunction");

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
