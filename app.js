const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

let parameters = {
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "nusmoney"
};

connection = mysql.createConnection(parameters);
connection.connect((success) => {
    console.log("MySQL connected!");
});

app = express();

app.use(bodyParser.json());

app.get("/users/", (request, response) => {
    connection.query("select * from users", (error, results) => {
        if (error){
            console.log("Error occurred:");
            console.log(error);
        }else
        response.send(results);
    });
});

app.get("/users/id", (request, response) => {
    connection.query(`select * from users where ic_number = '${request.body.id}'`, (error, results) => {
        if (error){
            console.log("Error occurred:");
            console.log(error);
        }else
        response.send(results);
    });
});

app.listen(3000);