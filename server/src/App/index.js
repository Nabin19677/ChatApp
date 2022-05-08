import express from "express";
import config from "./config.js";
import Router from "./router.js";

const app = express();
config(app);
app.use(Router);

export default app;
