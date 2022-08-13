import express, { Router, RouterOptions } from "express";
import { UserController } from "../../controllers/user/user-controller";

class UserRoutes {
  route: Router = Router();

  constructor() {
    console.log("Runnin...");
    this.route.get("/getdata", UserController.getCurrentUser);
  }

  get userRoute() {
    return this.route;
  }
}

export const userRoute = new UserRoutes().userRoute;
