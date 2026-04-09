// Fonction pour mettre à jour l'affichage visuel
function updateUI(state) {
    // On éteint toutes les lumières en retirant les classes de couleur
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => {
        light.classList.remove('RED', 'YELLOW', 'GREEN');
    });

    // On allume la lumière correspondante (ID en minuscule)
    const activeLight = document.getElementById(state.toLowerCase());
    if (activeLight) {
        activeLight.classList.add(state);
    }
}

// Fonction pour appeler l'API de transition
async function changeLight() {
    try {
        const response = await fetch('next', { method: 'POST' });
        if (!response.ok) throw new Error('Erreur réseau');
        
        const data = await response.json();
        updateUI(data.new_state);
    } catch (error) {
        console.error("Erreur lors du changement d'état:", error);
    }
}

// Optionnel : Récupérer l'état actuel au chargement de la page
window.onload = async () => {
    const response = await fetch('status');
    const data = await response.json();
    updateUI(data.current);
};