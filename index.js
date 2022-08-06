const express = require("express");
const { translate } = require('bing-translate-api');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/translate", (req, res)=>{
    const text = req.query.text;
    const to = req.query.to || "auto";
    console.log(to);

    translate(text, "auto-detect", to, true).then(response => {
        res.json(response);
    }).catch(err => {
        console.error(err);
    });
});

app.listen(3001, ()=>{
    console.log("Listening...");
});