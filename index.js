const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`🚀 API ready at http://localhost:${port}`))

module.exports = app
