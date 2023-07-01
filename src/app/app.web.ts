import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import * as apiController from "../controllers/controller.api";

const app = express();

app.get("/event/:eventId", apiController.getEvent);

export default app;
