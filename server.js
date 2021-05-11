const express = require("express");
const compression = require("compression");
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 9000;
const app = express();

app.use(compression);

app.use(express.static(`${__dirname}/dist`));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

app.listen(process.env.PORT || 9000, () => {
    process.stdout.write(`Listening on port ${port}`);
});
