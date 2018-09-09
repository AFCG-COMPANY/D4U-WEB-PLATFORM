const
    express = require('express')
    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')
const
    app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const
    port = process.env.PORT || 8080

const
    apiRouter = require('./controllers/api')


app.use('/api', apiRouter)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
