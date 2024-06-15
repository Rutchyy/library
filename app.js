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
    for(let i in myLibrary) {
        let newBook = document.createElement("div")
        let removeBook = document.createElement("button")
        let read = document.createElement("button")
        let title = document.createElement("p")
        removeBook.classList = "remove-book"
        read.classList = "read-book"
        removeBook.textContent = "Remove Book"
        read.textContent = "Read Book"

        title.textContent = ("Title: " + myLibrary[i].title + '\r\n' + "Author: " + myLibrary[i].author + '\r\n' + "Pages: " + myLibrary[i].pages + '\r\n' + "Read Book: " + myLibrary[i].read)
        newBook.appendChild(title)
        newBook.appendChild(removeBook)
        newBook.appendChild(read)
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

// If the new book form is submitted, this function will create it and add it to the DOM
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
    if(clickArea.classList.contains("remove-book")) {
        for(let item in myLibrary) {
            if(myLibrary[item].title == clickArea.parentNode.id) {
                delete myLibrary[item]
                break
            }
        }
    
        displayBooks()
    } else if(clickArea.classList.contains("read-book")) {
        for(let item in myLibrary) {
            console.log(myLibrary[item].title)
            console.log(clickArea.parentNode.id)
            if(myLibrary[item].title == clickArea.parentNode.id) {
                switch(myLibrary[item].read) {
                    case true:
                        myLibrary[item].read = false
                        break
                    case false:
                        myLibrary[item].read = true
                }
            }
        }

        displayBooks()
    }
})