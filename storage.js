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

function displayBooks(books = library) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = books.map(book => `
        <tr>
            <td>${book.ID}</td>
            <td>${book.Name}</td>
            <td>${book.author}</td>
            <td>${book.Category}</td>
            <td>${book.Description}</td>
            <td>${book.isAvailable ? "Yes" : "No"}</td>
        </tr>
    `).join("");
}




