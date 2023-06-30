import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World");
});

export default app;
