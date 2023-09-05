import express from "express";
import { PassModel } from "../models/PassModel.js";



const router = express.Router();

router.post('/passes', async (req, res) => {
    try {

      const { Opponent, guest, type, quantity, price } = req.body;
  

      const newPass = new PassModel({ Opponent, guest, type, quantity, price });

      await newPass.save();
  
      res.json({message: "Pass Posted!"});// Return the saved Pass as JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  router.get('/', async (req, res) => {
    try {
        const passes = await PassModel.find({});
        res.send(passes);
    } catch (error) {
        res.status(500).send(error);
    }
});

export { router as passRouter };


