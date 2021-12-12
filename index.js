const express = require('express');
const app = express();
const mongoose = require('mongoose');
const libraryRouter = require('./routes/library')
var path = require('path')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) =>{
    console.log(req.url)
    next();
})

app.get('/', (req,res)=>{
    res.send("Hello There")
})
app.use('/library', libraryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})