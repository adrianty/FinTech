const express = require("express");
const bodyParser = require("body-parser");

// import router from users.js
const usersRouter = require("./users");
// import router from accounts.js
const accountsRouter = require("./accounts");
// import router from transactions.js
const transactionsRouter = require("./transactions");
// import router from secured_messages.js
const messagesRouter = require("./secured_messages");

app = express();

app.use(bodyParser.json());

app.use("/", usersRouter);
app.use("/", accountsRouter);
app.use("/", transactionsRouter);
app.use("/", messagesRouter);

app.listen(3000);