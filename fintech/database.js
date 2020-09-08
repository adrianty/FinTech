const mysql = require("mysql");

let properties = {
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "nusmoney"
};

connection = mysql.createConnection(properties);
connection.connect((success) => {
    console.log("Sucessfully connected to MySQL");
});

let age = 99;
let ic = "1234-5678";

//CRUD - Read
connection.query(`select * from users where age = ${age}`, (error, results) => {
    if (error){
        console.log("Error occurred:");
        console.log(error);
    }else
    console.log(results);
});

//CRUD - Create
connection.query(`insert into users (ic_number, name, password, mail, mobile, gender, age) values ('1234-5678','tester','test','test@gmail.com',12345678,'M',${age})`, (error, results) => {
    if (error){
        console.log("Error occurred:");
        console.log(error);
    }else
    console.log(results);
});

//CRUD - Update
connection.query(`update users set name = 'tester1', password='test1' where ic_number = '${ic}'`, (error, results) => {
    if (error){
        console.log("Error occurred:");
        console.log(error);
    }else
    console.log(results);
});

//CRUD - Delete
connection.query(`delete from users where ic_number = '${ic}'`, (error, results) => {
    if (error){
        console.log("Error occurred:");
        console.log(error);
    }else
    console.log(results);
});    