import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import * as apiController from "../controllers/controller.api";

const app = express();

app.use(cors());
app.get("/event/:eventId", apiController.getEvent);

export default app;
