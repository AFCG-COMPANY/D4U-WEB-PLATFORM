const
    express = require('express')
    exphbs  = require('express-handlebars')

const
    app = express()

const
    port = process.env.PORT || 8080

const
    indexRouter = require('./controllers/index')
    usersRouter = require('./controllers/user')
    apiRouter = require('./controllers/api')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use('/', indexRouter)
app.use('/profile', usersRouter)
app.use('/api', apiRouter)


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
