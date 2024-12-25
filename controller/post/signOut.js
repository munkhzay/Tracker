const { request, response } = require("express");
const { sql, pool } = require("../../database");

exports.signOut = async (req, res) => {
  try {
    const data = await sql`SELECT userid
       FROM users`;
    res.status(200).json(data);
  } catch (error) {
    resizeBy.status(400).json(error);
  }
};
