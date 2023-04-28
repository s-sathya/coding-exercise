import http, { Server } from "http";
import express, { Application } from "express";
import { dataResolver } from "../resolvers/data-resolver";

const homePath = '/';

export class ExpressApp {
  public app: Application;

  constructor() {
    this.app = express();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    })
    this.app.get(
      homePath,
      dataResolver
    )
  }

  public createServer(): { httpServer: Server } {
    const httpServer = http.createServer(this.app);
    return {
      httpServer,
    };
  }
}
