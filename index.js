const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookiePareser = require('cookie-parser');

const {User} = require('./model/user')

mongoose.connect('mongodb+srv://sabbir:janina@cluster0.6movt.mongodb.net/test?retryWrites=true&w=majority', 
 { useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log('DB connected successfully')).catch((err) => console.error(err));



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodeyParser.json());
app.user(cookiePareser());

app.get('/api/users/register', (req, res) => {
    return res.status(200)
})

app.listen(5000);