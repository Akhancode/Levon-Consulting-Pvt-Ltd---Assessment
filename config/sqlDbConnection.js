const env = process.env;

var mysql = require("mysql2/promise");
const CustomError = require("../src/utils/customError");

var mysql_db;

const sqlConfig = {
  host: env.SQL_HOST,
  port: env.SQL_PORT,
  user: env.SQL_USER,
  password: env.SQL_PASSWORD,
  database: env.SQL_DATABASE,
};

const pool = mysql.createPool(sqlConfig);

module.exports = { pool };
