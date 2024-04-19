function validateForm() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("bname").value;
    if (id === "") {
        alert("Book id is required.");
        return false;
    }
    if (name === "") {
        alert("Book name is required.");
        return false;
    }
    return true;
}

