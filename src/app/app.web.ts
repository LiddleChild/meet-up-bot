import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import * as apiController from "../controllers/controller.api";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/event/:eventId", apiController.getEvent);
app.post("/event/:eventId", apiController.setEventDate);

export default app;
