async function loadContacts() {
    const res = await fetch("contacts");
    const contacts = await res.json();

    const list = document.getElementById("contacts");
    list.innerHTML = "";

    contacts.forEach(c => {
        const li = document.createElement("li");

        li.innerHTML = `
        ${c.nom} - ${c.email} - ${c.telephone}
        <button onclick="deleteContact(${c.id})">Supprimer</button>
        `;

        list.appendChild(li);
    });
}

async function addContact() {

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    await fetch("contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Date.now(),
            nom,
            email,
            telephone
        })
    });

    loadContacts();
}

async function deleteContact(id) {

    await fetch(`contacts/${id}`, {
        method: "DELETE"
    });

    loadContacts();
}

loadContacts();