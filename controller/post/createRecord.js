const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.createRecord = async (request, response) => {
  const { userid, recordname, amount, description, categoryid, transaction } =
    request.body;
  try {
    const createRecord =
      await sql`INSERT INTO records (userid, recordname, amount, description, categoryid , transaction)
VALUES (${userid}, ${recordname}, ${amount}, ${description}, ${categoryid}, ${transaction})
RETURNING *`;
    response.status(200).json(createRecord);
  } catch (error) {
    response.status(400).json(error);
  }
};
