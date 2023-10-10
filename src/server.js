// ./src/index.js
// importing the dependencies
const express = require('express');


const app = express();
// middlewares
const middleware = require('./middlewares/middleware');
const middleware_swagger = require('./middlewares/middleware_swagger');
app.use(middleware);
app.use(middleware_swagger);

// routes
const users = require("./routes/users");

// port
const port = 3000 ;


app.use("/users", users);

const db = require("./models/index.js");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

var server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
