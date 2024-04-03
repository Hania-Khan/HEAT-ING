// routes/userApplication.js
import express from "express";
import { UserApplication } from "../models/UserApplication.js";

const router = express.Router();

router.post("/apply", async (req, res) => {
  console.log("Received form data:", req.body);

  const {
    region,
    receivesBenefits,
    benefitsReceived,
    servicesRequired,
    homeStatus,
    propertyType,
    wallMaterial,
    heatingType,
    heatingSystemAge,
    houseAndStreet,
    postcode,
    name,
    dob,
    phone,
    email,
  } = req.body;

  try {
    const application = new UserApplication({
      region,
      receivesBenefits,
      benefitsReceived,
      servicesRequired,
      homeStatus,
      propertyType,
      wallMaterial,
      heatingType,
      heatingSystemAge,
      houseAndStreet,
      postcode,
      name,
      dob,
      phone,
      email,
    });
    await application.save();
    res.status(201).send({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(400).send({ error: "Failed to submit application." });
  }
});

export default router;
