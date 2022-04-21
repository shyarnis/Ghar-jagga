require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => { console.log("Connected to the Database")})

app.listen(PORT, () => {
	console.log(`Server is started at http://${HOSTNAME}:${PORT}`)
})