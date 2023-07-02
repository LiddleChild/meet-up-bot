import { HydratedDocument, Types } from "mongoose";
import { EventModel, IEvent } from "../models/model.event";

export const createEvent = async (
  name: string,
  author: string
): Promise<Types.ObjectId> => {
  const event: HydratedDocument<IEvent> = new EventModel({
    author: author,
    name: name,
    expiredAt: new Date(new Date().getTime() + 1000 * 60 * 15), // 15 minutes
  });

  await event.save();

  return event._id;
};

export const getEventByEventId = async (eventId: string): Promise<IEvent> => {
  let data: IEvent;

  try {
    data = await EventModel.findById(eventId);
  } catch (err) {
    throw err;
  }

  return data;
};

export const setEventDateById = async (
  eventId: string,
  startsAt: Date,
  endsAt: Date
) => {
  await EventModel.findByIdAndUpdate(eventId, { startsAt, endsAt });
};
