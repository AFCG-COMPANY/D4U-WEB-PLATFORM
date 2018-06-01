const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const
    MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 8080


app.get('/', (req, res) => {
    MongoClient.connect('mongodb://fedor.a.hope:MGTA2019@ds016098.mlab.com:16098/d4u', function (err, db) {
        if (err) throw err;
        const dbo = db.db("d4u");
        const user_message = {message: '12'};
        dbo.collection('company').insertOne(user_message, function (err, res) {
            try {
                if (err) throw err;
                db.close();
            }
            catch (err) {
                throw err;
            }
        });
    });
    res.render('home')})


app.listen(port, () => console.log('Our app is running on http://localhost:' + port))
