async function loadBooks() {

    const res = await fetch("/books")
    const books = await res.json()

    const list = document.getElementById("books")
    list.innerHTML = ""

    books.forEach(book => {

        const li = document.createElement("li")

        li.innerHTML =
            book.titre + " - " +
            book.auteur + " (" +
            book.statut + ") " +

            `<button onclick="toggle(${book.id}, '${book.statut}')">
            changer statut
            </button>`

        list.appendChild(li)

    })
}


async function addBook() {

    const titre = document.getElementById("titre").value
    const auteur = document.getElementById("auteur").value

    await fetch("/books", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({titre, auteur})
    })

    loadBooks()
}


async function toggle(id, statut) {

    const newStatus =
        statut === "disponible" ? "emprunté" : "disponible"

    await fetch(`/books/${id}?statut=${newStatus}`, {
        method: "PUT"
    })

    loadBooks()
}


loadBooks()