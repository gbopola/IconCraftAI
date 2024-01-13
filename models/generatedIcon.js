import mongoose, { Schema, models } from "mongoose";

const generatedIconSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    prompt: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    model: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GeneratedIcon =
  models.GeneratedIcon || mongoose.model("GeneratedIcon", generatedIconSchema);
export default GeneratedIcon;
