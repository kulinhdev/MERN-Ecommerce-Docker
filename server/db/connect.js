// Import required libraries
const mongoose = require("mongoose");

// Define connection string
const MONGO_URI = "mongodb://db:27017/mern-ecommerce-docker";

// Connect to MongoDB
// Define function to connect to MongoDB
async function connectToDatabase() {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("Success connected to MongoDB ..!");
		return mongoose.connection;
	} catch (error) {
		console.error("Error connecting to MongoDB: ", error);
	}
}

module.exports = connectToDatabase;
