import { Request, Response } from "express";
import * as db from "../databases/db.event";
import { IEvent } from "../models/model.event";

export const getEvent = async (req: Request, res: Response) => {
  const eventId = req.params["eventId"];

  let data: IEvent = await db.getEventByEventId(eventId);
  const date = new Date(data.toJSON()["expiredAt"]);

  if (!!data && new Date() < date) {
    res.send(data.toJSON()).status(200);
  } else {
    res
      .send({ message: `Event ID: ${eventId} not found or expired!` })
      .status(404);
  }
};
