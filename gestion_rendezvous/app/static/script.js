async function loadRdv() {

    const response = await fetch('rdv')
    const data = await response.json()

    const list = document.getElementById("rdvList")
    list.innerHTML = ""

    data.forEach(rdv => {

        const li = document.createElement("li")

        li.innerHTML =
            rdv.date + " " + rdv.heure + " - " + rdv.description +
            ` <button onclick="deleteRdv(${rdv.id})">Supprimer</button>`

        list.appendChild(li)

    })

}

async function addRdv() {

    const date = document.getElementById("date").value
    const heure = document.getElementById("heure").value
    const description = document.getElementById("description").value

    await fetch("rdv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date,
            heure,
            description
        })
    })

    loadRdv()

}

async function deleteRdv(id) {

    await fetch(`rdv/${id}`, {
        method: "DELETE"
    })

    loadRdv()

}

loadRdv()