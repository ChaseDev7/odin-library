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
const container = document.querySelector("#container")
const bookContainer = document.createElement("div");
const libraryBtn = document.querySelector("#library-button");
const addBookBtn = document.querySelector("#add-book-button");
const aboutBtn = document.querySelector("#about-button");
const library = document.querySelector("#library");
const addBookContainer = document.querySelector("#add-book-container");
const about = document.querySelector("#about");
const submitBookBtn = document.querySelector("#submit-book-button");
const cancelBookSumit = document.querySelector("#cancel-submit-book");
const titleInput = document.querySelector("title");
const authorInput = document.querySelector("author");
const pageCountInput = document.querySelector("page-count");

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

libraryBtn.addEventListener("click", showLibraryContainer);

function showLibraryContainer () {
  library.style.display = "flex";
  addBookContainer.style.display = "none";
  about.style.display = "none";
}

addBookBtn.addEventListener("click", showBookDetails);

function showBookDetails () {
  library.style.display = "none";
  addBookContainer.style.display = "flex";
  about.style.display = "none";
}

cancelBookSumit.addEventListener("click", hideBookDetails);

function hideBookDetails () {
  addBookContainer.style.display = "none";
  library.style.display = "flex";
  titleInput.value = "";
  authorInput.value = "";
  pageCountInput.value = "";
}

aboutBtn.addEventListener("click", showAboutContainer);

function showAboutContainer () {
  library.style.display = "none";
  addBookContainer.style.display = "none";
  about.style.display = "flex";
}