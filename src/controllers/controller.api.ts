import { Request, Response } from "express";
import * as db from "../databases/db.event";

export const getEvent = async (req: Request, res: Response) => {
  const eventId = req.params["eventId"];

  let data = await db.getEventByEventId(eventId);

  if (!!data) {
    res.send(data.toJSON()).status(200);
  } else {
    res.send({ message: `Event ID: ${eventId} not found!` }).status(404);
  }
};
