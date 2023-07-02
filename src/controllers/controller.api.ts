import * as dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import * as db from "../databases/db.event";
import { IEvent } from "../models/model.event";

export const getEvent = async (req: Request, res: Response) => {
  const eventId = req.params["eventId"];

  let data: IEvent;

  try {
    data = await db.getEventByEventId(eventId);
  } catch (err) {
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

export const setEventDate = async (req: Request, res: Response) => {
  const body = req.body;
  if (!body.startsAt || !body.endsAt) {
    res
      .status(400)
      .send({ message: "body needs both 'startsAt' and 'endsAt' field" });
    return;
  }

  const eventId = req.params["eventId"];
  try {
    db.setEventDateById(eventId, body.startsAt, body.endsAt);
    res.redirect(`http://${process.env.FRONTEND_ADDRESS}/${eventId}`);
  } catch (err) {
    res.status(404).send({ message: `Event ID: ${eventId} not found` });
  }
};
