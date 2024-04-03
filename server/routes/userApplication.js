// routes/userApplication.js

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UserApplication = mongoose.model('UserApplication');

router.post('/apply', async (req, res) => {
  const {
    region, receivesBenefits, benefitsReceived, servicesRequired, homeStatus, propertyType,
    wallMaterial, heatingType, heatingSystemAge, houseAndStreet, postcode, name, dob, phone, email
  } = req.body;

  try {
    const application = new UserApplication({
      region, receivesBenefits, benefitsReceived, servicesRequired, homeStatus, propertyType,
      wallMaterial, heatingType, heatingSystemAge, houseAndStreet, postcode, name, dob, phone, email
    });
    await application.save();
    res.status(201).send({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
