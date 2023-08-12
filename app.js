let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  // Fix the function, check Odin site for details.
  this.info = function () {
    return title + author + pages + readStatus;
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

function showLibrary () {
  for (i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.classList.add("book");
    book.style.display = "flex";
    book.textContent = myLibrary[i].info;
    library.appendChild(book);
  }
}

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

submitBookBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary () {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#page-count").value;
  const readStatus = document.querySelector("#read-status").checked;

  let newBook = new Book(title, author, pages, readStatus);

  const bookTitle = document.createElement("div");
  bookTitle.setAttribute("id", "book-title");
  bookTitle.innerHTML = "'" + newBook.title + "'";
  const bookAuthor = document.createElement("div");
  bookAuthor.innerHTML = newBook.author;
  const bookPages = document.createElement("div");
  bookPages.innerHTML = newBook.pages;
  const bookReadStatus = document.createElement("div");
  bookReadStatus.innerHTML = newBook.readStatus;

  myLibrary.push(newBook);

  library.style.display = "flex";
  addBookContainer.style.display = "none";

  showLibrary();
}

cancelBookSumit.addEventListener("click", hideBookDetails);

function hideBookDetails () {
  addBookContainer.style.display = "none";
  library.style.display = "flex";
}

aboutBtn.addEventListener("click", showAboutContainer);

function showAboutContainer () {
  library.style.display = "none";
  addBookContainer.style.display = "none";
  about.style.display = "flex";
}