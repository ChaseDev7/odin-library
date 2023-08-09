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


// const bookContainer = document.createElement("div");
// bookContainer.innerHTML = "Book: " + theShining.title + " - " + theShining.author;
// const body = document.querySelector("body");

// body.appendChild(bookContainer);

console.log(theShining.info());
console.log(theHobbit.info());
console.log(theGodfather.info());

console.log(Object.getPrototypeOf(theGodfather));