const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const Product = mongoose.model("Product", productSchema);

// Add the 'id' field as a Number type with auto-incrementing
productSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = Product;
