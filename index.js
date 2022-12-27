import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// app initialise
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// handle errors in api routes and middlewares
app.use((err, req, res, next) => {
  const errorstatus = err.status || 500;
  const errormessage = err.message || "Something went wrong in the server";
  return res.status(errorstatus).json({
    success: false,
    status: errorstatus,
    message: errormessage,
    stack: err.stack,
  });
});

app.get("/test", function (req, res) {
  res.send("Congratulations, you have completed the task !");
});

// connect the server
app.listen(5000, () => {
  console.log("connected to server...");
});
