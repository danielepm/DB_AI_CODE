async function addTask(){

    const input = document.getElementById("taskInput")
    const title = input.value

    if(title.trim() === ""){
        alert("Entre une tâche")
        return
    }

    await fetch("/add?title=" + encodeURIComponent(title), {
        method:"POST"
    })

    location.reload()
}

async function markDone(id){

    await fetch("/done/" + id, {
        method:"POST"
    })

    location.reload()
}

async function deleteTask(id){

    await fetch("/delete/" + id, {
        method:"DELETE"
    })

    location.reload()
}