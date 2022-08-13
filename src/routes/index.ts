import { Application, Request, Response, NextFunction } from "express";
import { userRoute } from "./user/user-routes";

export class Routes {
  public initializeRoutes(app: Application) {
    // Initialize user routes

    app.use("/user", userRoute);
  }
}
