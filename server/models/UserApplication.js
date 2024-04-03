// models/UserApplication.js

const mongoose = require("mongoose");

const userApplicationSchema = new mongoose.Schema({
  region: { type: String, required: true },
  receivesBenefits: { type: Boolean, required: true },
  benefitsReceived: [{ type: String }],
  servicesRequired: [{ type: String }],
  homeStatus: { type: String, required: true },
  propertyType: { type: String, required: true },
  wallMaterial: { type: String, required: true },
  heatingType: { type: String, required: true },
  heatingSystemAge: { type: String, required: true },
  houseAndStreet: { type: String, required: true },
  postcode: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

mongoose.model("UserApplication", userApplicationSchema);
