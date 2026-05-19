import * as Routes from "../routes/index.routes.js";
import { connectionDB } from "../Database/ConnectionDB.js";


export const bootstrap = (app, express) => {
  app.use(express.json());
  connectionDB();


  // Simple Logger
  if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
      console.log(`${req.method} ${req.originalUrl}`);
      next();
    });
  }
};
