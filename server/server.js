const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT || 3001
const buildPath = path.join(__dirname, '../', 'build')
app.use(express.static(buildPath))
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})
app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})