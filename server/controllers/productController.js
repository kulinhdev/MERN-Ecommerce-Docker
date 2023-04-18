const Product = require("../models/Product");

async function getAllProducts(req, res) {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getProductById(req, res) {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function createProduct(req, res) {
	try {
		const product = new Product(req.body);
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function updateProduct(req, res) {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function deleteProduct(req, res) {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}
		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
