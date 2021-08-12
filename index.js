const express = require('express');

const app = express();
const cors=require("cors");
const DB = require('./database/connectDB');
const pinRoute=require("./Routes/pins");
const userRoute=require("./Routes/users")

app.use(express.json({ extended: false }));
DB();
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello from root api end point!!!");
})


app.use("/api/pins/",pinRoute);
app.use("/api/users/",userRoute);


app.listen(process.env.PORT||5000, () => {
    console.log("Server is up and Running")
})
