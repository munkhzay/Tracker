const { request, response } = require("express");
const { sql } = require("../../database");

exports.deleteRecord = (request, response) => {
 try{ awaitsql`DELETE FROM Records
WHERE userid=2`;
response.status(200).json({success:"true"})} 
};
