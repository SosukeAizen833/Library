const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Book = require('./../models/book')

mongoose.connect('mongodb+srv://Aizen833:ScarTissue1999@hogyoku.kmr9q.mongodb.net/myLibrary?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully connected Atlas Remote Cluster")
}).catch(err =>{
    console.log("Error connecting to Atlas Remote Cluster")
})

router.get('/',  async (req, res) =>{
   const books = await Book.find()
   res.render('layouts/index',{books: books})
})

router.post('/',async (req,res)=>{
    console.log(req.body)
    let book = new Book(
        {
            name: req.body.book_name,
            author: req.body.author_name,
            status: req.body.status == "on" ? true : false
        }
    )
    
    try{
        await book.save()
    }catch(err){
        console.log(err)
    }
    let books = await Book.find()
    res.render('layouts/index',{ books: books })
})

router.delete('/:id', async (req, res)=>{
    await Book.findByIdAndDelete(req.params.id)
    let books = await Book.find();
    res.render('layouts/index',{ books: books})
})

module.exports = router;