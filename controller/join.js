const { request, response } = require("express");
const { sql, pool } = require("../database");

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
// exports.incomeAndExpence = async (request, response) => {
//   const { id } = request.params;
//   try {
//     const sum = await sql` SELECT SUM(amount)
//   FROM records
//   WHERE userid = ${id};`;
//     response.status(200).json(sum);
//   } catch (error) {
//     response.status(400).json(error);
//   }
// };
