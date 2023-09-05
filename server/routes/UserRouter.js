import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from "../models/UserModel.js"
import { registrationSchema, loginSchema } from "../validation.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    // validate user data
    const { error } = registrationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const {username, password} = req.body
    const user = await UserModel.findOne({username}); //check if the user in db

    if (user) {
        return res.status(400).json({message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({username,password: hashedPassword});
    await newUser.save();

    res.json({message: "User Registered"});
});

router.post("/login", async(req, res) => {
    // validate user data
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const {username, password} = req.body
    const user = await UserModel.findOne({username});

    if(!user) {
        return res.status(400).json({message: "User does not exist"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid credentials"})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    res.json({token, userID: user._id})
})

router.get("/getUserByID/:userId", async (req, res) => {
        const _id = req.params.userId;
        try {
          // Search for the user by userId
          const user = await UserModel.findOne({ _id });
      
          if (!user) {
            return res.status(404).json({ message: 'User not found'});
          }
      
          // Return the username
          res.json({ username: user.username });
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });


export {router as userRouter};
