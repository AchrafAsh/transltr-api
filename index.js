const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/db')

require('dotenv').config()

// test connection with DB
db.authenticate()
    .then(() => {
        console.log('DB connected')
    })
    .catch((error) => console.log('error while connecting to DB', error))

const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/translation', require('./routes/translation'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`🚀 API ready at http://localhost:${port}`))

module.exports = app
