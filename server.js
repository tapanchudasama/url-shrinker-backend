const express = require("express");
const mongoose = require("mongoose");
const ShortURLs = require("./models/shortURLs");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const app = express();
require("dotenv/config");
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	function(err, db) {
		if (err) {
			console.log("NOT CONNECTED", err);
		} else {
			console.log("CONNECTED to", process.env.DB_CONNECTION);
		}
	}
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/api", (req, res) => {
	ShortURLs.find(function(err,urls){
		if(err){
			console.log(err);
		}
		else{
			res.json(urls);
		}
	});
	// res.render("index", { shortURLs: shortURLs });
});

app.post("/api/shortURLs", function(req, res) {
	ShortURLs.create({ full: req.body.fullURL })
		.then(() => console.log("Short URL created!"))
		.catch(err => console.log(err));
	res.redirect("/");
});


app.get("/api/:shortUrl", async (req, res) => {
	const shortUrl = await ShortURLs.findOne({ short: req.params.shortUrl });
	if (shortUrl == null) return res.sendStatus(404);
	shortUrl.clicks++;
	shortUrl.save();
	res.redirect(shortUrl.full);
});
app.listen(process.env.PORT || 5000);
