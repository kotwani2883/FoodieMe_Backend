const express = require('express');

const app = express();
const DB = require('./database/connectDB');

app.use(express.json({ extended: false }));
DB();

app.get("/", (req, res) => {
    res.send("Hello from root api end point!!");
})

app.listen(5000, () => {
    console.log("Server is up and Running")
})
