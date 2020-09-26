const express = require("express");

// import connection from mysql.js
const connection = require("./mysql");

// define router object
router = express.Router();

// define PUT API to update data into transactions table
router.put("/transactions", (request, response) => {
    connection.query(
      `update transactions set amount = ${request.body.amount} where transaction_number = ${request.body.transaction_no}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("Some error occurred");
        } else {
          response.send("Updated Successfully");
        }
      }
    );
  });

  module.exports = router;