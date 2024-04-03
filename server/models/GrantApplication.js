import mongoose from "mongoose";

const grantApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  energySaving: { type: String, required: true },
  propertyOwnership: { type: String, required: true },
  propertyType: { type: String, required: true },
  fundingOrQuote: { type: String, required: true },
  additionalInfo: { type: String },
  benefits: { type: String, required: true }
});

export const GrantApplication = mongoose.model("GrantApplication", grantApplicationSchema);
