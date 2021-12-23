const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Book = require('./../models/book')

mongoose.connect('mongodb+srv://Aizen833:ScarTissue1999@hogyoku.kmr9q.mongodb.net/myLibrary?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>{
    console.log("Successfully connected Atlas Remote Cluster")
}).catch(err =>{
    console.error(err)
})

router.get('/',  async (req, res) =>{
   const books = await Book.find()
   res.render('layouts/index',{books: books})
})

router.put('/edit/:id',async (req, res) =>{
    try{
        let upBook = await Book.findOneAndUpdate({_id:req.params.id},{
            name: req.body.book_name,
            author: req.body.author_name,
            status: req.body.status === "on" ? true : false
        },{new: true})
        console.log(upBook)
        res.redirect('/')
    }catch(err){
        console.error(err)

    }
})
router.get('/edit/:id' ,async (req, res)=>{
    const book = await Book.findById(req.params.id)
    console.log(book)
    res.render('layouts/edit',{book: book})
})
router.get('/json',async (req, res) =>{
    let books = await Book.find();
    res.json(books);
})
router.post('/',async (req,res)=>{
    console.log(req.body.book_name)
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
    res.redirect('/')
})

router.delete('/:id', async (req, res)=>{
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router;