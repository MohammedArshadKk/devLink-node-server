const express = require("express");
require('dotenv').config();
const connectDb = require("./config/database.js")
const User = require("./models/user.js")

const app = express();
app.use(express.json());

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;


app.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const user = new User(body)
        await user.save();
        res.status(200).json({ message: "user saved" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
})

connectDb(dbUrl).then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log("server connected successfully, port is", port);
    })
}).catch((err) => {
    console.log("database connection failure error is: ", err);

});

