const { request, response } = require("express");
const { sql } = require("../database");

exports.join = async (request, response) => {
  const { description, amount, category_image } = request.body;
  try {
    const join = await sql`SELECT *
                           FROM Category
                           INNER JOIN records ON records.categoryid=category.categoryid;`;
    response.status(200).json(join);
  } catch (error) {
    response.status(400).json(error);
  }
};
// ${amount}${category_image}
// ${description}
