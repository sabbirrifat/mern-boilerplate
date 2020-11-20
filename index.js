const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sabbir:janina@cluster0.6movt.mongodb.net/test?retryWrites=true&w=majority', 
 { useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log('DB connected successfully')).catch((err) => console.error(err));



app.get('/', (req, res) => {
    res.send('hello Mara vhai')
})

app.listen(5000);