document.getElementById("convertForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("convert", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("result").innerText = "Résultat : " + data.result;
});