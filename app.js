const
    express = require('express')
    exphbs  = require('express-handlebars')
    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')
const
    app = express()


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(cookieParser())
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

const
    port = process.env.PORT || 8080

const
    indexRouter = require('./controllers/index')
    aboutRouter = require('./controllers/about')
    usersRouter = require('./controllers/user')
    apiRouter = require('./controllers/api')


app.use('/', indexRouter)
app.use('/', aboutRouter)
app.use('/', usersRouter)
app.use('/api', apiRouter)


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
