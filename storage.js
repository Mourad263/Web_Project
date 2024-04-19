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
    const ID = document.getElementById("id").value;
    const Name = document.getElementById("bname").value;
    const author = document.getElementById("ba").value;
    const Category = document.getElementById("category").value;
    const Description = document.getElementById("des").value;
    const book = new Book(ID, Name, author, Category, Description);
    library.push(book);
    displayBooks();
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
        </tr>
    `).join("");
}
