require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use( require('./routes/usuario') );


// mongoose.connect('mongodb://localhost:27017/cafe', (err,res) => {
//     if(err) throw err;
//     console.log('BASE DE DATOS ONLINE');
// });

mongoose.connect(process.env.URLDB, 
                            { useNewUrlParser: true,useUnifiedTopology: true }
                            ,(err, res) => {
    if(err) throw err;
    console.log('BASE DE DATOS ONLINE');

});
mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});