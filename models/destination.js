import mongoose, { Schema } from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
  },
  {
    timestamps: true,
  }
);

const Destinations =
  mongoose.models.Destinations ||
  mongoose.model("Destinations", destinationSchema);
export default Destinations;
