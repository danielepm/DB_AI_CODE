async function loadTickets() {
    const response = await fetch("tickets")
    const tickets = await response.json()

    const list = document.getElementById("tickets")
    list.innerHTML = ""

    tickets.forEach(t => {
        const li = document.createElement("li")
        li.innerHTML =
            t.title + " (" + t.status + ")" +
            (t.status === "open"
                ? `<button onclick="closeTicket(${t.id})">Fermer</button>`
                : "")
        list.appendChild(li)
    })
}

async function createTicket() {

    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    await fetch("tickets", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, description})
    })

    loadTickets()
}

async function closeTicket(id) {

    await fetch(`tickets/${id}/close`, {
        method: "PUT"
    })

    loadTickets()
}

loadTickets()