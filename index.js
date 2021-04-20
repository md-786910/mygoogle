// here apply for fetching data from my google account here

// here we suding express as backend node js

const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'static')))

const fs = require('fs')
let index = fs.readFileSync("./static/index.html");

app.get('/', (req, res) => {
    res.send(`${index}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})