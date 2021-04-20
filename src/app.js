const express = require("express");
const cors = require("cors");
require("./db/db-connection");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
