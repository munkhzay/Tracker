const { request, response } = require("express");
const { sql } = require("../../database");

exports.createRecord = async (request, response) => {
  const { user_id, recordname, amount, description, category_id } =
    request.body;
  try {
    const createRecord =
      await sql`INSERT INTO Records (userid, recordname, amount, description, categoryid )
VALUES (${user_id}, ${recordname}, ${amount}, ${description}, ${category_id})`;
    response.status(200).json({ data: createRecord });
  } catch (error) {
    response.status(200).json(error);
  }
};
