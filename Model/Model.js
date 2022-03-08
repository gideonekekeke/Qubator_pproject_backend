const mongoose = require("mongoose");

//creating the structure or schema of my database
const mySchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		image: {
			type: String,
			required: true,
		},

		category: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("imagegrid", mySchema);
