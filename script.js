var bookShelf = document.querySelector('.group__books__row')
var books = [
    {
        title: " My Conversations with Chimpanzees",
        author: " Roger Fouts",
        image: "./img/book1.jpg"
    },
    {
        title: "Dance with Dragons",
        author: " George R.R. Martin",
        image: "./img/book2.jpg"
    }, {
        title: "Harry Potter and the Goblet of Fire",
        author: " J.K. Rowling Doe",
        image: "./img/book3.jpg"
    }, {
        title: "City of Girls",
        author: "Elizabeth Gilbert",
        image: "./img/book4.jpg"
    },
     {
        title: " My Conversations with Chimpanzees",
        author: " Roger Fouts",
        image: "./img/book1.jpg"
    },
    {
        title: "Dance with Dragons",
        author: " George R.R. Martin",
        image: "./img/book2.jpg"
    }, {
        title: "Harry Potter and the Goblet of Fire",
        author: " J.K. Rowling Doe",
        image: "./img/book3.jpg"
    }, {
        title: "City of Girls",
        author: "Elizabeth Gilbert",
        image: "./img/book4.jpg"
    },
     {
        title: " My Conversations with Chimpanzees",
        author: " Roger Fouts",
        image: "./img/book1.jpg"
    },
    {
        title: "Dance with Dragons",
        author: " George R.R. Martin",
        image: "./img/book2.jpg"
    }, {
        title: "Harry Potter and the Goblet of Fire",
        author: " J.K. Rowling Doe",
        image: "./img/book3.jpg"
    }, {
        title: "City of Girls",
        author: "Elizabeth Gilbert",
        image: "./img/book4.jpg"
    },
]
//print all books
for(var i=0; i < books.length; i++) {
    const book = document.createElement("div");
    book.classList.add('book')

    var title = document.createElement('h3')
    var author = document.createElement('h4')
    var image = document.createElement('img')

    title.textContent = books[i].title
    author.textContent = books[i].author
    image.src = books[i].image

    book.appendChild(image)
    book.appendChild(title)
    book.appendChild(author)
    bookShelf.appendChild(book)
}
//open modale when client want to add new book 
document.querySelector(".addBook").addEventListener("click",function(){
    document.querySelector(".modale").style.display = "flex";
});
// close Modal x
document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".modale").style.display = "none";
});
document.querySelector(".add").addEventListener("click",handleSave);
var newBook = {
    title: "",
    author: "",
    image: ""
}
function handleSave(){
    // add new book and push it for  array 
    // 1- first step fetch all data from form 
    document.querySelector(".modale").style.display = "none";
    const titleValue = document.querySelector("#title").value;
    document.querySelector("#title").value="";
    const autherValue = document.querySelector("#auther").value;
    document.querySelector("#auther").value="";
    const image = document.querySelector("#image").value;
    document.querySelector("#image").value="";
            // add to new object
            newBook.title=titleValue;
            newBook.author= autherValue;
            newBook.image=image;
            books.push(newBook);
            addnewBook(books.length-1);
}

function addnewBook (index){
    // add to array and object 
    const book = document.createElement("div");
    book.classList.add('book')

    var title = document.createElement('h3')
    var author = document.createElement('h4')
    var image = document.createElement('img')

    title.textContent = books[i].title
    author.textContent = books[i].author
    image.src = books[i].image

    book.appendChild(image)
    book.appendChild(title)
    book.appendChild(author)
    bookShelf.appendChild(book)
    }

