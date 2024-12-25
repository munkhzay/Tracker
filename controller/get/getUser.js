const { request } = require("express");
const { sql, pool } = require("../../database");
// import { sql } from "../../database/app";

exports.getUser = async (request, response) => {
  try {
    const getuser = await sql` CREATE TABLE Users (
                                 userid SERIAL PRIMARY KEY ,
                                 email VARCHAR(50) UNIQUE NOT NULL,
                                 username VARCHAR (50) NOT NULL,
                                 userpassword TEXT,
                                 avatar_img  TEXT,
                                 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                 updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP )`;
    response.status(200).json(getuser);
  } catch (error) {
    response.status(400).json(error);
  }
};
