import express, { Request, Response } from "express";
import config from "./config";
import router from "./routes";
import connect from "./utils/connect";

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(config);
  console.log(`App is listening at http://localhost:${config.PORT}`);
  connect();
});
