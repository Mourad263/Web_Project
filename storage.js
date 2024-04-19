function Book(ID, Name, author, Category, Description) {
    this.ID = ID;
    this.Name = Name;
    this.author = author;
    this.Category = Category;
    this.Description = Description;
}
var library = [];
function addBook() {
    var ID = document.getElementById("id").value;
    var Name = document.getElementById("bname").value;
    var author = document.getElementById("ba").value;
    var Category = document.getElementById("category").value;
    var Description = document.getElementById("des").value;
    var book = new Book(ID, Name, author, Category, Description);
    library.push(book);
    displayBooks();
}
function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    if (!books) {
        books = library;
    }
    for (var i = 0; i < books.length; i++) {
        var tr = document.createElement("tr");
        var tdID = document.createElement("td");
        tdID.innerText = books[i].ID;
        var tdName = document.createElement("td");
        tdName.innerText = books[i].Name;
        var tdAuthor = document.createElement("td");
        tdAuthor.innerText = books[i].author;
        var tdCategory = document.createElement("td");
        tdCategory.innerText = books[i].Category;
        var tdDescription = document.createElement("td");
        tdDescription.innerText = books[i].Description;
        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDescription);
        bookList.appendChild(tr);
    }
}