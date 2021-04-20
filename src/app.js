const express = require("express");
const cors = require("cors");
require("./db/db-connection");
const errorHandler = require("./middleware/errorHandler");
const servicerRouter = require("./routers/servicer");
const offerRouter = require("./routers/offer");
const notFoundRouter = require("./routers/404");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(servicerRouter);
app.use(offerRouter);
app.use(notFoundRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
