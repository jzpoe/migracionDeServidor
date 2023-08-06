const router = require('./list-view-router')
const router2= require('./list-edit-router')

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());



app.use('/', router);
app.use('/', router2)


app.listen(port, ()=>{
    console.log(`listening on port ${port} `)
});