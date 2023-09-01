import mongoose, { Document, Schema } from "mongoose";
import { IMessage } from "./projects.interface";

const messageSchema: Schema = new Schema<IMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
