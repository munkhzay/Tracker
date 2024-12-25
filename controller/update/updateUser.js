const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.updateUser = async (request, response) => {
  const { email, username, userpassword } = request.body;
  try {
    const putSignUp = await pool` UPDATE users
SET email=${email}, username=${username}, userpassword=${userpassword}
WHERE userid=${id}; `;
    response.status(200).json(putSignUp);
  } catch (error) {
    response.status(400).json(error);
  }
};
