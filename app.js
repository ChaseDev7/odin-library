let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + " by " + author +  ", " + pages + " pages, " + read;
  }
}

const theShining = new Book("The Shining", "Stephen King", "447", "not read yet");
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "310", "read");
const theGodfather = new Book("The Godfather", "Mario Puzo", "496", "not read yet");

const body = document.querySelector("body");
const bookContainer = document.createElement("div");
const bookList = document.querySelector("#book-list");

function addBookToLibrary () {
  myLibrary.push(theShining);
  myLibrary.push(theHobbit);
  myLibrary.push(theGodfather);
}

function showLibrary () {
  addBookToLibrary();
  for (i = 0; i < myLibrary.length; i++) {
    const bookElement = document.createElement("div");
    bookElement.textContent = myLibrary[i].info();
    body.appendChild(bookElement);

  }
}
// showLibrary();

const addBookBtn = document.querySelector("#add-book-button");
const bookDetails = document.querySelector("#book-details");

addBookBtn.addEventListener("click", showBookDetails);

function showBookDetails () {
  bookDetails.style.display = "flex";
}