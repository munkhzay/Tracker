const { request, response } = require("express");
const { sql, pool } = require("../../database/index");

exports.apiSingIn = async (request, response) => {
  const { email, userpassword } = request.body;
  console.log(request.body);

  try {
    const users = await sql`SELECT * FROM  users
              WHERE email=${email} and userpassword=${userpassword}`;
    response.status(200).json(users);
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
