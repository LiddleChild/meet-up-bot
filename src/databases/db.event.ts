import { HydratedDocument, MongooseError, Types } from "mongoose";
import { EventModel, IEvent } from "../models/model.event";

export const createEvent = async (
  name: string,
  author: string
): Promise<Types.ObjectId> => {
  const event: HydratedDocument<IEvent> = new EventModel({
    author: author,
    name: name,
  });

  await event.save();

  return event._id;
};

export const getEventByEventId = async (eventId: string): Promise<IEvent> => {
  let data: IEvent;

  try {
    data = await EventModel.findById(eventId);
  } catch (err) {
    console.error(err);
  }

  return data;
};
