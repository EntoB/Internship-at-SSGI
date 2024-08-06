const express = require("express");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const dotenv = require("dotenv").config();

const cors = require("cors");


// const userRoutes = require("")

const port = process.env.PORT;
// const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(express.json({ limit: "30mb", extended: true }));

app.use("/api/users/", userRoute);
app.use("/api/task/", taskRoute)

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
}); 