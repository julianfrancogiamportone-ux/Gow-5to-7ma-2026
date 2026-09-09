// URLs de las APIs en Java
const API_PELEADORES = '/api/characters';
const API_ARMAS = '/api/armas';

// Elementos del HTML (Jugador 1)
const fighter1Select = document.getElementById('fighter1');
const fighter1Image = document.getElementById('fighter1Image');
const fighter1Name = document.getElementById('fighter1Name');
const fighter1Health = document.getElementById('fighter1Health');
const fighter1HealthBar = document.getElementById('fighter1HealthBar');
const fighter1Energy = document.getElementById('fighter1Energy');
const fighter1EnergyBar = document.getElementById('fighter1EnergyBar');
const fighter1Defense = document.getElementById('fighter1Defense');
const fighter1DefenseBar = document.getElementById('fighter1DefenseBar');
const fighter1Weapon = document.getElementById('fighter1Weapon');
const fighter1Attack = document.getElementById('fighter1Attack');

// Elementos del HTML (Jugador 2)
const fighter2Select = document.getElementById('fighter2');
const fighter2Image = document.getElementById('fighter2Image');
const fighter2Name = document.getElementById('fighter2Name');
const fighter2Health = document.getElementById('fighter2Health');
const fighter2HealthBar = document.getElementById('fighter2HealthBar');
const fighter2Energy = document.getElementById('fighter2Energy');
const fighter2EnergyBar = document.getElementById('fighter2EnergyBar');
const fighter2Defense = document.getElementById('fighter2Defense');
const fighter2DefenseBar = document.getElementById('fighter2DefenseBar');
const fighter2Weapon = document.getElementById('fighter2Weapon');
const fighter2Attack = document.getElementById('fighter2Attack');

const fightButton = document.getElementById('fightButton');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('resultText');

let characters = [];
let armasList = [];

// Cargar datos al iniciar
async function initGame() {
  try {
    const [resPeleadores, resArmas] = await Promise.all([
      fetch(API_PELEADORES),
      fetch(API_ARMAS)
    ]);

    characters = await resPeleadores.json();
    armasList = await resArmas.json();

    loadFighters();
  } catch (error) {
    console.error('Error al conectar con el servidor Java:', error);
  }
}

// Separar Dioses (Jugador 1) y Artistas (Jugador 2)
function loadFighters() {
  fighter1Select.innerHTML = '<option value="">-- SELECCIONAR DIOS --</option>';
  fighter2Select.innerHTML = '<option value="">-- SELECCIONAR ARTISTA --</option>';

  if (characters.length === 0) return;

  const mitad = Math.floor(characters.length / 2);
  const dioses = characters.slice(0, mitad);     
  const artistas = characters.slice(mitad);   

  dioses.forEach(fighter => {
    const option = document.createElement('option');
    option.value = JSON.stringify(fighter);
    option.text = fighter.nombre;
    fighter1Select.appendChild(option);
  });

  artistas.forEach(fighter => {
    const option = document.createElement('option');
    option.value = JSON.stringify(fighter);
    option.text = fighter.nombre;
    fighter2Select.appendChild(option);
  });
}

const ARMAS_ARTISTAS = ['Micrófono de Oro', 'Consola de DJ', 'Guitarra Eléctrica', 'Autotune Pro', 'Teclado MIDI', 'Batería Acústica'];
const ATAQUES_ARTISTAS = ['Flow Master', 'Hit Mundial', 'Verso Letal', 'Drop Explosivo', 'Estribillo Épico', 'Solo de Guitarra'];

function obtenerTextoDinamico(arrayOObjeto, listaFallback, idUnico) {
  if (arrayOObjeto) {
    if (Array.isArray(arrayOObjeto) && arrayOObjeto.length > 0) {
      const item = arrayOObjeto[0];
      if (typeof item === 'string') return item;
      const texto = item.nombre || item.Nombre || item.descripcion || item.titulo;
      if (texto) return texto;
    } else if (typeof arrayOObjeto === 'object') {
      const texto = arrayOObjeto.nombre || arrayOObjeto.Nombre || arrayOObjeto.descripcion;
      if (texto) return texto;
    } else if (typeof arrayOObjeto === 'string' && arrayOObjeto.trim() !== '') {
      return arrayOObjeto;
    }
  }
  const index = (idUnico || 0) % listaFallback.length;
  return listaFallback[index];
}

// Actualizar panel Jugador 1 (DIOSES)
fighter1Select.addEventListener('change', () => {
  if (!fighter1Select.value) return;
  const f = JSON.parse(fighter1Select.value);

  fighter1Name.textContent = f.nombre;
  
  let imgUrl = f.UrlImagen || f.urlImagen || f.imagen || f.img || f.foto;
  fighter1Image.src = (imgUrl && imgUrl !== "null") ? imgUrl : 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f464.png';

  const vida = f.puntosVida || f.vida || f.PuntosVida || f.puntos_vida || 100;
  const energia = f.energia || f.Energia || 50;
  const defensa = f.defensa || f.defensaBase || f.Defensa || 20;

  fighter1Health.textContent = vida;
  fighter1HealthBar.style.width = Math.min((vida / 10000) * 100, 100) + '%'; 

  fighter1Energy.textContent = energia;
  fighter1EnergyBar.style.width = Math.min(energia, 100) + '%';

  fighter1Defense.textContent = defensa;
  fighter1DefenseBar.style.width = Math.min(defensa, 100) + '%';

  const armasDioses = ['Espada Divina', 'Lanza Gungnir', 'Martillo Mjölnir', 'Tridente Sagrado'];
  const ataquesDioses = ['Ira del Olimpo', 'Juicio Final', 'Fulgor Divino', 'Castigo Celestial'];

  fighter1Weapon.textContent = obtenerTextoDinamico(f.Armaspeleador || f.armas, armasDioses, f.id);
  fighter1Attack.textContent = obtenerTextoDinamico(f.Ataquespeleador || f.ataques, ataquesDioses, f.id);
});

// MAPEO ESTRICTO APUNTANDO A LA CARPETA "imagenes"
const mapaImagenesArtistas = {
  "Ariana Grande": "ariana-grande.webp",
  "Bad Bunny": "bad-bunny.webp",
  "Billie Eilish": "billie-eilish.webp",
  "Bizarrap": "bizarrap.webp",
  "Cazzu": "cazzu.jpg",
  "Drake": "drake.webp",
  "Duki": "duki.png",
  "Emilia": "emilia.jpg",
  "Feid": "feid.webp",
  "Taylor Swift": "taylor-swift.webp"
};

// Actualizar panel Jugador 2 (ARTISTAS)
fighter2Select.addEventListener('change', () => {
  if (!fighter2Select.value) return;
  const f = JSON.parse(fighter2Select.value);

  fighter2Name.textContent = f.nombre;

  let rutaImagen = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f464.png';
  
  if (f.UrlImagen && f.UrlImagen !== "null" && String(f.UrlImagen).trim() !== "") {
      rutaImagen = f.UrlImagen; 
  } else if (mapaImagenesArtistas[f.nombre]) {
      // AQUÍ ESTÁ EL CAMBIO CLAVE: apunta a /imagenes/ (con "enes")
      rutaImagen = `/imagenes/${mapaImagenesArtistas[f.nombre]}`;
  } else {
      const nombreFormateado = f.nombre ? f.nombre.toLowerCase().trim().replace(/\s+/g, '-') : 'default';
      rutaImagen = `/imagenes/${nombreFormateado}.webp`;
  }

  fighter2Image.src = rutaImagen;

  const vida = f.puntosVida || f.vida || f.PuntosVida || f.puntos_vida || 100;
  const energia = f.energia || f.Energia || 50;
  const defensa = f.defensa || f.defensaBase || f.Defensa || 20;

  fighter2Health.textContent = vida;
  fighter2HealthBar.style.width = Math.min((vida / 10000) * 100, 100) + '%'; 

  fighter2Energy.textContent = energia;
  fighter2EnergyBar.style.width = Math.min(energia, 100) + '%';

  fighter2Defense.textContent = defensa;
  fighter2DefenseBar.style.width = Math.min(defensa, 100) + '%';

  fighter2Weapon.textContent = obtenerTextoDinamico(f.Armaspeleador || f.armas, ARMAS_ARTISTAS, f.id);
  fighter2Attack.textContent = obtenerTextoDinamico(f.Ataquespeleador || f.ataques, ATAQUES_ARTISTAS, f.id);
});

// Lógica de Batalla
fightButton.addEventListener('click', () => {
  if (!fighter1Select.value || !fighter2Select.value) {
    alert('Seleccioná un luchador para cada bando.');
    return;
  }

  const f1 = JSON.parse(fighter1Select.value);
  const f2 = JSON.parse(fighter2Select.value);

  const power1 = (f1.puntosVida || f1.vida || f1.PuntosVida || 100) + (f1.energia || 50);
  const power2 = (f2.puntosVida || f2.vida || f2.PuntosVida || 100) + (f2.energia || 50);

  let winner = power1 >= power2 ? f1.nombre : f2.nombre;
  if (power1 === power2) winner = "¡Empate técnico!";

  resultText.textContent = `🏆 ¡El ganador es ${winner}! 🥊`;
  resultDiv.classList.remove('hidden');
});

initGame();