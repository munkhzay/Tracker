const { request, response } = require("express");
const { sql } = require("../../database");

exports.getRecord = async (request, response) => {
  const { user_id } = request.body;
  try {
    const getRecord = await sql`SELECT * FROM Records
WHERE userid=${user_id}`;
    response.status(200).json({ message: "true", data: getRecord });
  } catch (error) {
    response.status(400).json(error);
  }
};
