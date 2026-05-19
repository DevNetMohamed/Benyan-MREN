import dotenv from "dotenv";
import express from "express";
dotenv.config({ path: "./config/config.env" });
import { bootstrap } from "./utils/initiateApp.js";
const app = express();
const port = process.env.PORT;

bootstrap(app, express);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
