import { HydratedDocument, Types } from "mongoose";
import { EventModel, IEvent } from "../models/model.event";

export const createEvent = async (name: string): Promise<Types.ObjectId> => {
  const event: HydratedDocument<IEvent> = new EventModel({
    name: name,
  });

  await event.save();

  return event._id;
};
