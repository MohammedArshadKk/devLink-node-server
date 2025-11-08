const express = require("express");

const app = express();
const port = 3007

app.use("/web", (req, res) => {
    res.send("this is the web api")
})

app.use("/app", (req, res) => {
    res.send("this is app api ")
})

app.listen(port, () => {
    console.log("server connected successfully, port is", port);
})