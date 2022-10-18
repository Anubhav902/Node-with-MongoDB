// importing express module
const express = require("express")

// initializing express app
const app = express()

app.listen(3000, () => {console.log("server running on port 3000")} )

app.use("/", (req, res) => {res.send("welcome to node application, Blue Yonder")})

