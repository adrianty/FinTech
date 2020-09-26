const express = require("express");

// import connection from mysql.js
const connection = require("./mysql");

// define router object
router = express.Router();

// define POST API to insert data into accounts table
router.post("/accounts", (request, response) => {
    connection.query(
      `insert into accounts (account_number, ic_number, type, balance, max_limit, date_created) 
      values (${request.body.account_no},'${request.body.id}','${request.body.type}',${request.body.balance},${request.body.max_limit},'${request.body.date_created}')`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("Some error occurred");
        } else {
          response.send("Saved Successfully");
        }
      }
    );
  });

  module.exports = router;