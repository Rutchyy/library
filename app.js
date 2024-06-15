const myLibrary = []
const container = document.querySelector(".container")
const btn = document.querySelector(".add-book")
const newForm = document.querySelector("#new-book-form")
const submit = document.querySelector("#create-book")

console.log(newForm)

// Constructs book objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (this.title + " by " + this.author + ", " + this.pages + ", ") + (this.read == true ? "read book" : "not read yet")
    }
}

// Manually added books, just for testing
theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
harryPotter = new Book("Harry Potter 1", "J.K. Rowling", 223, true)

// Appends those to library
myLibrary.push(theHobbit)
myLibrary.push(harryPotter)

function displayBooks() {
    // Removes all DOM elements of the container
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    // Appends all items of the library
    for(let i = 0; i < myLibrary.length; i++) {
        let newBook = document.createElement("div")
        newBook.textContent = myLibrary[i].title
        container.appendChild(newBook)
    }
}

displayBooks()

btn.addEventListener("click", () => {
    // Adds form for new library element
    console.log("You sure clicked me!")
    newForm.removeAttribute("style", "display: hidden;")
    newForm.setAttribute("style", "display: grid;")
})

const book = submit.addEventListener("click", (event) => {
    event.preventDefault();
    let name = newForm.firstChild.firstChild // How do I navigate to the title input?
    console.log(name)
})