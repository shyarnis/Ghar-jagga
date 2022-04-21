require('dotenv').config()
const express = require("express")
const app = express()

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

app.listen(PORT, () => {
	console.log(`Server is started at http://${HOSTNAME}:${PORT}`)
})