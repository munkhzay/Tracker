const { request, response } = require("express");
const { sql } = require("../../database");

exports.createRecord = async (request, response) => {
  const { userid, recordname, amount, description, categoryid, transaction } =
    request.body;
  try {
    const createRecord =
      await sql`INSERT INTO Records (userid, recordname, amount, description, categoryid , transaction)
VALUES (${userid}, ${recordname}, ${amount}, ${description}, ${categoryid}, ${transaction})`;
    response.status(200).json({ data: createRecord });
  } catch (error) {
    response.status(200).json(error);
  }
};
