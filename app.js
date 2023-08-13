let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

const theShining = new Book("The Shining", "Stephen King", "447", "not read yet");
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "310", "read");
const theGodfather = new Book("The Godfather", "Mario Puzo", "496", "not read yet");

const body = document.querySelector("body");
const newBookBtn = document.querySelector("#new-book-button");
const bookInputDetails = document.querySelector("#book-details");
const about = document.querySelector("#about");
const submitBookBtn = document.querySelector("#submit-book-button");
const cancelBookSumit = document.querySelector("#cancel-submit-book");
const noBooksMessage = document.querySelector("#no-book-message");
const libraryContainer = document.querySelector("#library-container");

function showLibrary (newBook) {
  libraryContainer.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.classList.add("book");
    book.style.display = "flex";

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    //  Fix code. Need to add data attribute for each book element.
    bookTitle.innerHTML = "'" + myLibrary[i.title] + "'";
    book.appendChild(bookTitle);
    const bookAuthor = document.createElement("div");
    bookAuthor.innerHTML = newBook.author;
    book.appendChild(bookAuthor);
    const bookPages = document.createElement("div");
    bookPages.innerHTML = newBook.pages;
    book.appendChild(bookPages);
    const bookReadStatus = document.createElement("div");
    bookReadStatus.innerHTML = newBook.readStatus;
    book.appendChild(bookReadStatus);

    libraryContainer.appendChild(book);
  }
}

newBookBtn.addEventListener("click", showBookDetails);

function showBookDetails () {
  bookInputDetails.style.display = "flex";
  about.style.display = "none";
}

submitBookBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary () {
  noBooksMessage.style.display = "none";

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#page-count").value;
  const readStatus = document.querySelector("#read-status").checked;

  let newBook = new Book(title, author, pages, readStatus);

  myLibrary.push(newBook);

  bookInputDetails.style.display = "none";
  about.style.display = "flex";

  showLibrary(newBook);
}

cancelBookSumit.addEventListener("click", hideBookDetails);

function hideBookDetails () {
  bookInputDetails.style.display = "none";
  about.style.display = "flex";
}