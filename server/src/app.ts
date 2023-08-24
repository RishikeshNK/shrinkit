import express from "express";
import cors from "cors";
import config from "./config";
import router from "./routes";
import connect from "./utils/connect";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: config.CORS_ORIGIN,
  })
);

app.use(router);

app.listen(config.PORT, () => {
  console.log(`App is listening at http://localhost:${config.PORT}`);
  connect();
});
