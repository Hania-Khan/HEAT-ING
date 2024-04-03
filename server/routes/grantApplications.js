import express from 'express';
import { GrantApplication } from '../models/GrantApplication.js';

const router = express.Router();

router.post('/apply-for-funding', async (req, res) => {
  try {
    const grantApplication = new GrantApplication(req.body);
    await grantApplication.save();
    res.status(201).send({ message: "Grant application submitted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
