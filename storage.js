class Book {
    constructor(ID, Name, author, Category, Description) {
        this.ID = ID;
        this.Name = Name;
        this.author = author;
        this.Category = Category;
        this.Description = Description;
    }
}

const library = [];

function addBook() {
    var ID = document.getElementById("id").value;
    var Name = document.getElementById("bname").value;
    var author = document.getElementById("ba").value;
    var Category = document.getElementById("category").value;
    var Description = document.getElementById("des").value;
    var isAvailable = document.getElementById("available").checked;
    var book = new Book(ID, Name, author, Category, Description);
    book.isAvailable = isAvailable;
    library.push(book);
    displayBooks();

    if (isAvailable) {
        let availableBooks = JSON.parse(localStorage.getItem('availableBooks')) || [];
        availableBooks.push(book);
        localStorage.setItem('availableBooks', JSON.stringify(availableBooks));
    }
}

function editBook(bookId) {
    const book = library.find(book => book.ID === bookId);
    if (!book) {
        console.log('Book not found.');
        return;
    }

    const newName = prompt('Enter new name:', book.Name);
    const newAuthor = prompt('Enter new author:', book.author);
    const newCategory = prompt('Enter new category:', book.Category);
    const newDescription = prompt('Enter new description:', book.Description);
    const isAvailable = confirm('Is the book available?');

    if (newName !== null && newAuthor !== null && newCategory !== null && newDescription !== null) {
        book.Name = newName;
        book.author = newAuthor;
        book.Category = newCategory;
        book.Description = newDescription;
        book.isAvailable = isAvailable;

        displayBooks();
    }
}

function deleteBook(bookId) {
    const index = library.findIndex(book => book.ID === bookId);
    if (index !== -1) {
        library.splice(index, 1);
        displayBooks();
    } else {
        console.log('Book not found.');
    }
}

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = library.map(book => `
        <tr>
            <td>${book.ID}</td>
            <td>${book.Name}</td>
            <td>${book.author}</td>
            <td>${book.Category}</td>
            <td>${book.Description}</td>
            <td>${book.isAvailable ? "Yes" : "No"}</td>
            <td><button onclick="editBook('${book.ID}')">Edit</button></td>
            <td><button onclick="deleteBook('${book.ID}')">Delete</button></td>
        </tr>
    `).join("");
}




