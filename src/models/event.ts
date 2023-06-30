import mongoose, { Date, Document, Schema, SchemaTypes } from "mongoose";

export interface IEvent extends Document {
  name: string;
  startsAt: Date;
  endsAt: Date;
}

const eventSchema: Schema = new Schema<IEvent>({
  name: { type: SchemaTypes.String, required: true },
  startsAt: { type: SchemaTypes.Date, required: true },
  endsAt: { type: SchemaTypes.Date, required: true },
});

export const Event = mongoose.model<IEvent>("event", eventSchema);
