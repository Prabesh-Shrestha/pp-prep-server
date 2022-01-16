import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const basePP = "pps/";
const __dirname = path.resolve();
const getfiles = (dir) => {
	var val = [];
	const files = fs.readdirSync(dir);
	for (const file of files) {
		val.push(file);
	}
	return val;
};

app.get("/api/working", (req, res) => {
	res.send("working ssurrrrr");
});

// /api?adress=alsdkfjslkdjf
app.get("/api", (req, res) => {
	const files = getfiles(path.join(basePP, req.query.address));
	res.json(files);
});

app.get("/file/", (req, res) => {
	const file = path.join(basePP, req.query.address);
	res.sendFile(file, { root: __dirname });
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
