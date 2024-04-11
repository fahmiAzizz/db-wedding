const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())


const wishRouter = require('./routes/wish.router')


app.use("/api/v1/wish", wishRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})