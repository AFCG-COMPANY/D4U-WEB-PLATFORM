
const express = require('express')
const app = express()

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
