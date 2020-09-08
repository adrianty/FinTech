const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());

app.get("/cubic/", (request, response) => {
    x = request.body.number;
    cubic = x * x * x;
    response.send(String(cubic));
});

app.post("/save/", (request, response) => {
  console.log("Data received: ");
  console.log(request.body.id);
  console.log(request.body.name);
  console.log(request.body.email);

  response.send("OK");

});

app.listen(3000);