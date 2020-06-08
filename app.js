const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const path = require('path')

//routes
const viewRoute = require('./routes/viewsRoutes')

//create express app
const app = express();
app.set('view engine', 'pug');
//called views
app.set('views', path.join(__dirname, 'views'))

//all the static assets are being served from public
app.use(express.static(path.join(__dirname,'public')));

//middlewares
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//defining the post middlewear
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const _path = require('path')
global.mainRoot = _path.resolve(__dirname);


app.use('/mainpage', viewRoute)

module.exports = app;