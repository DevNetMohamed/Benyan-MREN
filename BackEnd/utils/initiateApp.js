import * as Routes from "../routes/index.routes.js";
import { connectionDB } from "../Database/ConnectionDB.js";
import morgan from "morgan";
import * as routes from "../routes/index.routes.js";
export const bootstrap = (app, express) => {
  app.use(express.json());
  connectionDB();

  app.use("/api/auth", routes.AuthRouter);

  
  // Simple Logger
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
