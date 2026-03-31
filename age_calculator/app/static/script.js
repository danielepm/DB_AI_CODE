document.getElementById("ageForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value;

    const formData = new FormData();
    formData.append("birthdate", birthdate);

    const response = await fetch("/calculate", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    document.getElementById("result").innerText =
        "Votre âge est : " + data.age + " ans";
});