import express, { Router } from "express";
import { Routes } from "./routes";

import morgan from "morgan";

class App {
  app: any;
  routes: Routes = new Routes();
  // static {
  //   console.log("Static method");
  // }
  constructor() {
    this.app = express();
    this.appConfig();
    this.routes.initializeRoutes(this.app);
  }

  get expressApp() {
    return this.app;
  }

  private appConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  //   set apper(s:string){ // to show example of private constructor
  //     new App(s)
  //   }
}

export const app = new App().expressApp;
