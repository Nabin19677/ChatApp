import morgan from "morgan";
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import models from "../Database/models.js";

const isDev = process.env.NODE_ENV.trim() === "development";
const isProd = process.env.NODE_ENV.trim() === "production";

export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }
  if (isDev) {
    app.use(morgan("dev"));
  }
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.set("port", process.env.PORT || 8000);
  //Registering All Mongoose Models for easy access
  app.use((req, res, next) => {
    req.models = models;
    next();
  });
};
