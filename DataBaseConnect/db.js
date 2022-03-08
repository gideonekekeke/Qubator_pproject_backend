const mongoose = require("mongoose");

mongoose
	.connect(process.env.DBURL)
	.then(() => {
		console.log("database connected successfully..");
	})
	.catch(() => {
		console.log("an error occured while connecting");
	});
