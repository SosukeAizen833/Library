
let books = new Map();
const body = document.body
const content  = document.querySelector('.content')
class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status; //status is boolean//link to dom
        
        this.getTitle = () => {
            return this.title;
        };
        this.getAuthor = () => {
            return this.author;
        };
        this.getStatus = () => {
            return this.status;
        };
    }
}
function createCard(bookid,book){
    const card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('book-card')
    content.appendChild(card)
    const card_body = document.createElement('div')
    card_body.classList.add('card-body')
    
    card.appendChild(card_body)
    const name_div = document.createElement('div')
    name_div.classList.add('card-title')
    name_div.classList.add('mt-1')
    name_div.style.cssText ="font-weight: bold; font-family: monospace; font-size: 24px; text-align: center;"
    card_body.appendChild(name_div)
    const name = book.getTitle()
    name_div.textContent = name
    const author_div = document.createElement('div')
    author_div.classList.add('card-subtitle')
    author_div.classList.add('mt-4')
    author_div.style.cssText = "font-size: 20px; margin-bottom: 30px; text-align: center"

    author_div.textContent = book.getAuthor()
    card_body.appendChild(author_div)
    const status = document.createElement('div')
    status.classList.add('card-subtitle')
    status.classList.add('text-muted')
    
    card_body.appendChild(status)
    const bttn = document.createElement('button')
    bttn.classList.add('btn')
    bttn.classList.add('btn-info')
    card_body.appendChild(bttn)
    bttn.style.cssText = "display:block;width:100%"
    bttn.classList.add('mb-2')
    if(book.getStatus()){
        bttn.textContent = "Read"
    }else{
        bttn.textContent = "Not read"
    }
    card.dataset.book_index = bookid;
    const remove_bttn = document.createElement('button')
    remove_bttn.classList.add('btn')
    remove_bttn.classList.add('btn-danger')
    remove_bttn.classList.add('mt-2')

    card_body.appendChild(remove_bttn)
    remove_bttn.textContent = "DELETE"
    remove_bttn.style.cssText = "width:100%"
    remove_bttn.addEventListener('click',()=>{
        books.delete(bookid)
        card.remove();
        console.log(books)
    })
}


const save_btn = document.querySelector('#save')
save_btn.addEventListener('click',()=>{
    let title = document.getElementById('book_name').value
    let author = document.getElementById('author_name').value
    
    let status = document.getElementById('status').checked
    const book = new Book(title,author,status)
    let book_id = Math.floor(Math.random()*10000)
    books.set(book_id,book)
    createCard(book_id,book)
    console.log(books)
})

