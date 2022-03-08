require("dotenv").config();
// connecting database to our app
require("./DataBaseConnect/db");
const cors = require("cors");

const express = require("express");

const port = process.env.PORT || 8900;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
	res.send("Welcome to my Api");
});

// connecting all routes to my app
app.use("/api", require("./Controller/Route"));

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
