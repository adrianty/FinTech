const express = require("express");

// import connection from mysql.js
const connection = require("./mysql");

// define router object
router = express.Router();

// define DELETE API to delete data from secured_messages table
router.delete("/secured_messages/msg_no", (request, response) => {
    connection.query(
      `delete from secured_messages where message_number = ${request.body.msg_no}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("Some error occurred");
        } else {
          response.send("Deleted Successfully");
        }
      }
    );
  });

  module.exports = router;