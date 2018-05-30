const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const port = process.env.PORT || 8080;


app.get('/', (req, res) => res.render('home'))


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
