const { request, response } = require("express");
const { sql } = require("../../database");

exports.createUser = async (request, response) => {
  const { email, username, userpassword, avatar_img } = request.body;
  console.log(request.body);
  try {
    const data=
    await sql` INSERT INTO Users ( email, username, userpassword, avatar_img)
  VALUES (${email}, ${username}, ${userpassword}, ${avatar_img})
  RETURNING *
  `;
    response.status(201).json(data);
  } catch (error) {
    console.log(error);
    response.status(400).json(error);
  }
};
