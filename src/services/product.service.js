const { DatabaseError } = require("../utils/errors/error");

exports.getProducts = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new DatabaseError("Error fetching products.");
  }
};

