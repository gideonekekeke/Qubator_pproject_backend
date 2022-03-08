const data = require("../Model/Model");

// using cloudinary to store files on cloud
const cloudinary = require("cloudinary").v2;

// creating the cloudinary config file so as access my clodinary api.
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

// creating the upload method of differnt products
const uploadProduct = async (req, res) => {
	try {
		const { title, category } = req.body;
		const Images = await cloudinary.uploader.upload(req.file.path);
		const createProduct = await data.create({
			title,
			image: Images.secure_url,
			category,
		});
		res.status(201).json({ message: "successful", data: createProduct });
	} catch (err) {
		res
			.status(404)
			.json({ message: "Cannot upload product , an error occured" });
	}
};

// getting all the products from the database

const ViewProduct = async (req, res) => {
	try {
		const getProducts = await data.find();

		res.status(201).json({ message: "successful", data: getProducts });
	} catch (err) {
		res
			.status(404)
			.json({ message: "Cannot get all product , an error occured" });
	}
};

// writing the function that helps to search for products or items by category or by name
const SearchProducts = async (req, res) => {
	try {
		const searchword = req.query.search
			? {
					$or: [
						{ title: { $regex: req.query.search, $options: "i" } },
						{ category: { $regex: req.query.search, $options: "i" } },
					],
			  }
			: {};

		const finding = await data.find(searchword);

		res.status(200).json(finding);
	} catch (err) {
		res
			.status(404)
			.json({ message: "Cannot serch for product , an error occured" });
	}
};

module.exports = {
	uploadProduct,
	ViewProduct,
	SearchProducts,
};
