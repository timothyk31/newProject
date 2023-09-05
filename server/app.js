import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/UserRouter.js";
import { passRouter } from "./routes/PassRouter.js";
 
dotenv.config();

//create the express server
const app = express();

//make the data sent into json format
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)
app.use("/pass", passRouter)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.toString() });
});


export default app