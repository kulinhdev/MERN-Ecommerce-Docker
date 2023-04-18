const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const connectToDatabase = require("./db/connect");
require("dotenv").config();

const app = express();

// Connect to database
connectToDatabase();

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.use("/api", productRoutes);

// The API endpoint
app.get("/", (req, res) => {
	res.send({ message: "Hello From Express" });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
	// res.sendFile(path.join(__dirname+'/client/build/index.html'));
	res.send({ code: 404, error: "Request Not Found!" });
});

const port = process.env.PORT || 5005;
app.listen(port);

console.log(`App is listening on port: http://localhost:${port}`);
