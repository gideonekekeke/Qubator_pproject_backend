const express = require("express");
const port = process.env.PORT || 8900;

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to my Api");
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
