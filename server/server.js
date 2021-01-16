const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// const authRoutes = require("./routes/auth");
// const favouritesRoute = require('./routes/favourites');

require("dotenv").config();

/* TODO: 
  1. Setup Mongo Atlas - DONE
  2. Setup new connection - DONE
  3. User Model - DONE
  4. User Schema - DONE
  5. Auth routes - login & register
*/

// Setup Express
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to Mongoose
const uri = process.env.mongoURI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// App Routes
app.use(morgan("dev")); // logging framework

app.get("/", (req, res) => {
  res.send("Hi");
});

// app.use("/api/auth", authRoute);
// app.use('/api/favouritesRoute', favouritesRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
