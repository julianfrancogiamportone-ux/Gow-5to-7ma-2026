
const API_NARUTO = 'http://localhost:8080/api/characters'; 
 
const fighter1Select = document.getElementById('fighter1'); 
const fighter2Select = document.getElementById('fighter2'); 
const fighter1Image = document.getElementById('fighter1Image'); 
const fighter2Image = document.getElementById('fighter2Image'); 
const fightButton = document.getElementById('fightButton'); 
const resultDiv = document.getElementById('result'); 
 
let ninjas = []; 
 
async function fetchData() {     
    try { 
        const responseNaruto = await fetch(API_NARUTO); 
        ninjas = await responseNaruto.json(); 
 
    } catch (error) { 
        console.error('Error al cargar los personajes:', error); 
    } 
    loadFighters(); 
} 
 
function loadFighters() { 
    [ ...ninjas].forEach(fighter => { 
        const option1 = document.createElement('option'); 
        option1.value = JSON.stringify(fighter); 
        option1.text = `${fighter.nombre} (${fighter.Armaspeleador[0].nombre || fighter.Ataquespeleador[0].nombre})`; 
        fighter1Select.appendChild(option1); 
 
        const option2 = document.createElement('option'); 
        option2.value = JSON.stringify(fighter); 
        option2.text = `${fighter.nombre} (${fighter.Ataquespeleador[0].nombre || fighter.Armaspeleador[0].nombre})`; 
        fighter2Select.appendChild(option2); 


    }); 
    
} 
 
// Actualizar la imagen al seleccionar un personaje 
fighter1Select.addEventListener('change', () => { 
    const selected = JSON.parse(fighter1Select.value); 
    fighter1Image.src = selected.UrlImagen ; 
}); 
 
fighter2Select.addEventListener('change', () => { 
    const selected = JSON.parse(fighter2Select.value); 
    fighter2Image.src = selected.UrlImagen ; 
}); 
 
fightButton.addEventListener('click', () => { 
    const fighter1 = JSON.parse(fighter1Select.value); 
    const fighter2 = JSON.parse(fighter2Select.value); 
 
    if (!fighter1 || !fighter2) { 
        alert('Seleccioná ambos luchadores.'); 
        return; 
    } 
 
    // Simular "nivelDePoder" 
    const power1 = fighter1.Energia || (Math.floor(Math.random() * 1000) + 500); 
    const power2 = fighter2.Energia || (Math.floor(Math.random() * 1000) + 500); 
 
    let winner; 
    if (power1 > power2) { 
        winner = fighter1.nombre; 
    } else if (power2 > power1) { 
        winner = fighter2.nombre; 
    } else { 
        winner = "¡Empate!"; 
    } 
 
    resultDiv.textContent = `
🏆
 El ganador es: ${winner}! 
�
�
`; 
    resultDiv.classList.remove('hidden'); 
}); 
 
fetchData();