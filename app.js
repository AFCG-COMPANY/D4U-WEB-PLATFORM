const
    express = require('express')
    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')
const
    app = express()

app.use(cookieParser())
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const
    port = process.env.PORT || 8080

const
    apiRouter = require('./controllers/api')


app.use('/api', apiRouter)


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
