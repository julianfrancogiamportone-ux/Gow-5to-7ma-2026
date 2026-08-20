const API_URL = 'http://localhost:8080/api/characters'; 

const fighter1Select = document.getElementById('fighter1'); 
const fighter2Select = document.getElementById('fighter2'); 
const fightButton = document.getElementById('fightButton'); 
const resultDiv = document.getElementById('result'); 
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const restartButton = document.getElementById('restartButton');

let peleadores = []; 

async function fetchData() {     
    try { 
        const response = await fetch(API_URL); 
        peleadores = await response.json(); 
        loadFighters(); 
    } catch (error) { 
        console.error('Error al cargar los personajes:', error); 
    } 
} 

function loadFighters() { 
    fighter1Select.innerHTML = '<option value="">-- SELECCIONAR --</option>';
    fighter2Select.innerHTML = '<option value="">-- SELECCIONAR --</option>';

    peleadores.forEach((fighter, index) => { 
        const option1 = document.createElement('option'); 
        option1.value = index; 
        option1.textContent = fighter.nombre; 
        fighter1Select.appendChild(option1); 

        const option2 = document.createElement('option'); 
        option2.value = index; 
        option2.textContent = fighter.nombre; 
        fighter2Select.appendChild(option2); 
    }); 
} 

fighter1Select.addEventListener('change', (e) => { 
    const peleador = peleadores[e.target.value]; 
    if (peleador) actualizarInterfaz(1, peleador); 
}); 

fighter2Select.addEventListener('change', (e) => { 
    const peleador = peleadores[e.target.value]; 
    if (peleador) actualizarInterfaz(2, peleador); 
}); 

function actualizarInterfaz(num, p) { 
    document.getElementById(`fighter${num}Name`).textContent = p.nombre || '-'; 

    const imgElement = document.getElementById(`fighter${num}Image`);
    const rutaImagen = p.UrlImagen || p.urlImagen;

    imgElement.src = rutaImagen ? rutaImagen : '/imagenes/kratos.jpg';
    imgElement.onerror = function() { this.src = '/imagenes/kratos.jpg'; };

    // Lectura priorizando PuntosVida, Energia y DefensaBase en mayúsculas
    const vida = p.PuntosVida ?? p.puntosVida ?? 0;
    const energia = p.Energia ?? p.energia ?? 0;
    const defensa = p.DefensaBase ?? p.defensaBase ?? 0;

    document.getElementById(`fighter${num}Health`).textContent = vida; 
    document.getElementById(`fighter${num}Energy`).textContent = energia; 
    document.getElementById(`fighter${num}Defense`).textContent = defensa; 

    const armas = p.Armaspeleador || p.armaspeleador;
    const ataques = p.Ataquespeleador || p.ataquespeleador;

    const arma = (armas && armas.length > 0) ? armas[0].nombre : 'Sin Arma'; 
    const ataque = (ataques && ataques.length > 0) ? ataques[0].nombre : 'Ataque Básico'; 

    document.getElementById(`fighter${num}Weapon`).textContent = arma; 
    document.getElementById(`fighter${num}Attack`).textContent = ataque; 

    document.getElementById(`fighter${num}HealthBar`).style.width = `${Math.min((vida / 2000) * 100, 100)}%`; 
    document.getElementById(`fighter${num}EnergyBar`).style.width = `${Math.min((energia / 1000) * 100, 100)}%`; 
    document.getElementById(`fighter${num}DefenseBar`).style.width = `${Math.min(defensa, 100)}%`; 
} 

fightButton.addEventListener('click', () => { 
    const f1 = peleadores[fighter1Select.value]; 
    const f2 = peleadores[fighter2Select.value]; 

    if (!f1 || !f2) { 
        alert('¡Seleccioná ambos luchadores!'); 
        return; 
    } 

    const p1Vida = f1.PuntosVida ?? f1.puntosVida ?? 0;
    const p1Energia = f1.Energia ?? f1.energia ?? 0;
    const p1Defensa = f1.DefensaBase ?? f1.defensaBase ?? 0;

    const p2Vida = f2.PuntosVida ?? f2.puntosVida ?? 0;
    const p2Energia = f2.Energia ?? f2.energia ?? 0;
    const p2Defensa = f2.DefensaBase ?? f2.defensaBase ?? 0;

    const power1 = p1Vida + p1Energia + p1Defensa; 
    const power2 = p2Vida + p2Energia + p2Defensa; 

    resultDiv.classList.remove('hidden'); 

    if (power1 > power2) { 
        resultTitle.textContent = `🏆 ¡${f1.nombre} ES EL GANADOR! 🏆`; 
        resultText.textContent = `Poder total: ${power1} pts vs ${power2} pts.`; 
    } else if (power2 > power1) { 
        resultTitle.textContent = `🏆 ¡${f2.nombre} ES EL GANADOR! 🏆`; 
        resultText.textContent = `Poder total: ${power2} pts vs ${power1} pts.`; 
    } else { 
        resultTitle.textContent = '⚔️ ¡EMPATE! ⚔️'; 
        resultText.textContent = 'Ambos guerreros poseen la misma fuerza.'; 
    } 
}); 

if (restartButton) { 
    restartButton.addEventListener('click', () => { 
        resultDiv.classList.add('hidden'); 
    }); 
} 

fetchData();