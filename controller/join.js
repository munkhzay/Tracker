const { request, response } = require("express");
const { sql } = require("../database");

exports.join = async (request, response) => {
  const { description, amount, category_image } = request.body;
  try {
    const join =
      await sql`SELECT records.description, records.amount, category.category_image, users.username
  FROM records
  INNER JOIN category ON records.categoryid=category.categoryid
  INNER JOIN users ON records.userid=users.userid`;
    response.status(200).json({ data: join });
  } catch (error) {
    response.status(400).json(error);
  }
};
// ${amount}${category_image}
// ${description}
