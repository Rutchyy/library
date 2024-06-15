const myLibrary = []
const container = document.querySelector(".container")
const btn = document.querySelector(".add-book")
const newForm = document.querySelector("#new-book-form")
const submit = document.querySelector("#create-book")

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
    for(let i = 0; i <= myLibrary.length; i++) {
        let newBook = document.createElement("div")
        let removeBook = document.createElement("button")
        removeBook.classList = "remove-book"
        removeBook.textContent = "Remove Book"
        let title = document.createElement("p")
        
        console.log("My Library: " + myLibrary)
        console.log("Index: " + myLibrary[i])
        console.log("And the other: " + myLibrary[i].title)

        title.textContent = (myLibrary[i].title)
        newBook.appendChild(title)
        newBook.appendChild(removeBook)
        newBook.id = myLibrary[i].title
        container.appendChild(newBook)
    }
}

displayBooks()

const removeBtns = document.querySelector("button.remove-book")

btn.addEventListener("click", () => {
    // Adds form for new library element
    newForm.removeAttribute("style", "display: hidden;")
    newForm.setAttribute("style", "display: grid;")
})

submit.addEventListener("click", (event) => {
    event.preventDefault()
    let addBook = []
    document.querySelectorAll('#new-book-form input').forEach(item => {
        addBook.push(item.value)
    })

    let added = new Book(addBook[0], addBook[1], Number(addBook[2]), false)
    myLibrary.push(added)
    displayBooks()
    newForm.removeAttribute("style", "display: grid;")
    newForm.setAttribute("style", "display: hidden;")
})

container.addEventListener("click", (event) => {
    let clickArea = event.target
    for(let item in myLibrary) {
        if(myLibrary[item].title == clickArea.parentNode.id) {
            delete myLibrary[item]
            console.log(myLibrary)
            break
        }
    }

    displayBooks()
})