import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { connect } from "mongoose";
dotenv.config();
const PORT = process.env.PORT || 3000;

const server = express(); //constant to create a server

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res, next) => {
  console.log("hello afadfsdf");
  res.json({ message: "welcome bahaa " });
});

server.use("/user", userRouter);

connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
  server.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
});
