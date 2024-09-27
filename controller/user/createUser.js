const { request, response } = require("express");
const { sql } = require("../../database");

exports.createUser = async (request, response) => {
  const { email, username, userpassword, avatar_img } = request.body;
  console.log(request.body);
  try {
    await sql` INSERT INTO Users ( email, username, userpassword, avatar_img)
  VALUES (${email}, ${username}, ${userpassword}, ${avatar_img}
  )`;
    response.status(201).json("true");
  } catch (error) {
    console.log(error);
    response.status(400).json(error);
  }
};
