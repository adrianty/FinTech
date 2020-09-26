const express = require("express");

// import connection from mysql.js
const connection = require("./mysql");

// define router object
router = express.Router();

// definer get user by id API
router.get("/users/id", (request, response) => {
  connection.query(
    `select * from users where ic_number = '${request.body.id}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Some error occurred");
      } else {
        response.send(result);
      }
    }
  );
});

module.exports = router;

/*
// define the first get API
router.get("/users", (request, response) => {
    connection.query("select * from users", (error, result) => {
        if (error) {
            console.log(error);
            response.send("Some error occurred");
          } else {
            response.send(result);
          }
        });
      });

// define POST API to insert data into user table
router.post("/users", (request, response) => {
  connection.query(
    `insert into users (ic_number, name, password, mail, mobile, gender, age) 
    values ('${request.body.id}','${request.body.name}','${request.body.password}','${request.body.mail}','${request.body.mobile}', '${request.body.gender}', ${request.body.age})`,
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
module.exports = router;*/

