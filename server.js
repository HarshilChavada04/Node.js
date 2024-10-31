const express = require("express");
// const friend = require("./controller/friends.controller");
const friendsRouter = require("./routes/friendsRoutes.routes");
const cors = require("cors");
const app = express();

//middlewares
app.use((req, res, next) => {
  let start = Date.now();
  next();
  let delta = Date.now() - start;
  console.log(`${req.url} ${req.method} - time taken: ${delta} ms`);
});
app.use(cors());
app.use(express.json());
app.use("/friends", friendsRouter);

app.listen(3000);
