const dotenv=require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});
const app = require('./app');

const db_address = 'mongodb://localhost:27017/my_local_db'
mongoose.connect(db_address, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con =>{
    console.log(con.connections);
    console.log("Connected to db");
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('Now listening on port', port)
})