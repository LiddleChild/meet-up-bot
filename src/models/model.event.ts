import mongoose, { Date, Document, Schema, SchemaTypes } from "mongoose";

export interface IEvent extends Document {
  author: string;
  name: string;
  startsAt: Date;
  endsAt: Date;
}

const eventSchema: Schema = new Schema<IEvent>({
  author: { type: SchemaTypes.String, required: true },
  name: { type: SchemaTypes.String, required: true },
  startsAt: { type: SchemaTypes.Date },
  endsAt: { type: SchemaTypes.Date },
});

export const EventModel = mongoose.model<IEvent>(
  "event",
  eventSchema,
  "events"
);
