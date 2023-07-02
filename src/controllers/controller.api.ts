import { Request, Response } from "express";
import * as db from "../databases/db.event";
import { IEvent } from "../models/model.event";

export const getEvent = async (req: Request, res: Response) => {
  const eventId = req.params["eventId"];

  let data: IEvent = await db.getEventByEventId(eventId);

  if (!data) {
    res.status(404).send({ message: `Event ID: ${eventId} not found` });
    return;
  }

  const date = new Date(data.toJSON()["expiredAt"]);
  if (new Date() >= date) {
    res.status(404).send({ message: `Event ID: ${eventId} expired` });
    return;
  }

  res.status(200).send(data.toJSON());
};
