
let books = new Array();
const body = document.body
const content  = document.querySelector('.content')
function book(title,author,status){
    this.title = title      
    this.author = author
    this.status = status  //status is boolean//link to dom

    this.getTitle = ()=>{
        return this.title
    }
    this.getAuthor = ()=>{
        return this.author
    }
    this.getStatus= ()=>{
        return this.read
    }
}
function createCard(book){
    const card = document.createElement('div')
    card.classList.add('card')
    content.appendChild(card)
    card.style.width = "300px"
    const card_body = document.createElement('div')
    card_body.classList.add('card-body')
    card.appendChild(card_body)
    const name_div = document.createElement('div')
    name_div.classList.add('card-title')
    card_body.appendChild(name_div)
    const name = book.getTitle()
    name_div.textContent = name
    const author_div = document.createElement('div')
    author_div.classList.add('card-title')
    author_div.textContent = book.getAuthor()
    card_body.appendChild(author_div)
    const status = document.createElement('div')
    status.classList.add('card-title')
    card_body.appendChild(status)
    if(book.getStatus()){
        status.innerHTML = "Read"
    }else{
        status.innerHTML = "Not read"
    }
}

function addBook(title,author,status){
    let b = new book(title,author,status)
    books.push(b)
    createCard(b)
}

const ad_btn = document.querySelector('#add')

