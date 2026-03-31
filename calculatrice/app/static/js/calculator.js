async function calculate(operation) {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    if (a === "" || b === "") {
        alert("Veuillez entrer deux nombres");
        return;
    }

    const response = await fetch(
        `/api/calculate?a=${a}&b=${b}&operation=${operation}`
    );

    const data = await response.json();

    if (response.ok) {
        document.getElementById("result").innerText =
            "Résultat : " + data.result;
    } else {
        alert(data.detail);
    }
}