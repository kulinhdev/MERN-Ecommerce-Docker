const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
	.connect("mongodb://localhost:27017/products", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Define routes
app.use("/api", productRoutes);

// The API endpoint
app.get("/api/hello", (req, res) => {
	res.send({ express: "Hello From Express" });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
	// res.sendFile(path.join(__dirname+'/client/build/index.html'));
	res.send({ code: 404, error: "Request Not Found!" });
});

const port = process.env.BACKEND_PORT || 5000;
app.listen(port);

console.log(`App is listening on port http://localhost:${port}`);
