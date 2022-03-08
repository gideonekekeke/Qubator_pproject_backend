const express = require("express");
const { uploadProduct, ViewProduct, SearchProducts } = require("./Contoller");

// using multer to be able to use file or allowing your system to accept files
const multer = require("multer");
const router = express.Router();

// creating the function to store our files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},
});

const upload = multer({ storage: storage }).single("image");
// creating the route for the upload method
router.post("/products/create", upload, uploadProduct);

// creating the route for getting all products
router.get("/products", ViewProduct);

// creating the route for getting all products
router.get("/products/search", SearchProducts);

module.exports = router;
