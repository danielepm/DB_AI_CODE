async function generate() {

    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const digits = document.getElementById("digits").checked;

    const response = await fetch("generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            length: parseInt(length),
            uppercase: uppercase,
            digits: digits
        })
    });

    const data = await response.json();

    document.getElementById("result").innerText = data.password;
}