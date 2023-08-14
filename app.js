// Creates empty library array.
let myLibrary = [];

// Creates book constructor to be able to add new books into array.
function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

const body = document.querySelector("body");
const newBookBtn = document.querySelector("#new-book-button");
const bookInputDetails = document.querySelector("#book-details");
const about = document.querySelector("#about");
const submitBookBtn = document.querySelector("#submit-book-button");
const cancelBookSumit = document.querySelector("#cancel-submit-book");
const noBooksMessage = document.querySelector("#no-book-message");
const libraryContainer = document.querySelector("#library-container");

function showLibrary (newBook) {
  // Clears library div in order to prevent duplication.
  libraryContainer.innerHTML = "";
  // Loops through myLibrary array to display each book.
  for (i = 0; i < myLibrary.length; i++) {
    // Creates book element and sub-elements to display.
    let book = document.createElement("div");
    book.classList.add("book");
    book.style.display = "flex";

    // Set data atrribute for book as bookId (the array's index).
    book.setAttribute("data-book-id", i);

    // Creates elements inside book container to separate the buttons from the book info.
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    bookInfo.style.display = "flex";
    book.appendChild(bookInfo);
    let bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    bookButtons.style.display = "flex";
    book.appendChild(bookButtons);

    // Adds content from library index (object) into book element.
    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.innerHTML = "'" + myLibrary[i].title + "'";
    bookInfo.appendChild(bookTitle);
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.innerHTML = myLibrary[i].author;
    bookInfo.appendChild(bookAuthor);
    const bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookPages.innerHTML = myLibrary[i].pages + " pages";
    bookInfo.appendChild(bookPages);
    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "remove-book-button");
    removeButton.textContent = "REMOVE";
    bookButtons.appendChild(removeButton);

    // USE CODE DIRECTLY BELOW FOR ADDING READ BUTTON INTO BOOK ELEMENT.
    // const bookReadStatus = document.createElement("div");
    // bookReadStatus.innerHTML = newBook.readStatus;
    // bookInfo.appendChild(bookReadStatus);
    
    // Add button to remove book element from index.
    removeButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary () {
      myLibrary.splice(book.dataset.bookId, 1);
      libraryContainer.removeChild(book);
      showLibrary();
    }

    libraryContainer.appendChild(book);
  }
}

// Clicking NEW BOOK button will load form to enter book details.
newBookBtn.addEventListener("click", showBookDetails);

function showBookDetails () {
  bookInputDetails.style.display = "flex";
  about.style.display = "none";
}

// Calls function to add book to library once SUBMIT button is pressed.
submitBookBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary () {
  noBooksMessage.style.display = "none";

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#page-count").value;
  const readStatus = document.querySelector("#read-status").checked;

  // Uses Book constructor to create object properties from form input.
  let newBook = new Book(title, author, pages, readStatus);

  // Adds book object into library array.
  myLibrary.push(newBook);

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#page-count").value = "";
  document.querySelector("#read-status").checked = false;

  // Removes book form and returns about section once SUBMIT button is clicked.
  bookInputDetails.style.display = "none";
  about.style.display = "flex";

  showLibrary(newBook);
}

// If clicked, cancels book form input, and removes form from screen.
cancelBookSumit.addEventListener("click", hideBookDetails);

function hideBookDetails () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#page-count").value = "";
  document.querySelector("#read-status").checked = false;
  bookInputDetails.style.display = "none";
  about.style.display = "flex";
}