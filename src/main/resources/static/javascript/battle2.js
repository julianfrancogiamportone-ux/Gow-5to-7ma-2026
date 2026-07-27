const peleadores = [

    {
        nombre: "Kratos",
        vida: 1000,
        energia: 500,
        defensa: 95,
        arma: "Hacha Leviatan",
        ataque: "Golpe del Leviatan"
    },

    {
        nombre: "Atreus",
        vida: 650,
        energia: 800,
        defensa: 55,
        arma: "Arco de Garra",
        ataque: "Flecha de Luz"
    },

    {
        nombre: "Thor",
        vida: 1200,
        energia: 450,
        defensa: 90,
        arma: "Mjolnir",
        ataque: "Rayo de Mjolnir"
    },

    {
        nombre: "Odin",
        vida: 850,
        energia: 1000,
        defensa: 70,
        arma: "Lanza Draupnir",
        ataque: "Lanza Explosiva"
    },

    {
        nombre: "Freya",
        vida: 800,
        energia: 900,
        defensa: 75,
        arma: "Espadas del Caos",
        ataque: "Furia Espartana"
    },

    {
        nombre: "Baldur",
        vida: 1100,
        energia: 600,
        defensa: 85,
        arma: "Espada de Baldur",
        ataque: "Golpe de Luz"
    },

    {
        nombre: "Heimdall",
        vida: 900,
        energia: 850,
        defensa: 80,
        arma: "Espada de Heimdall",
        ataque: "Reflejo del Futuro"
    },

    {
        nombre: "Tyr",
        vida: 950,
        energia: 700,
        defensa: 85,
        arma: "Espada de Tyr",
        ataque: "Golpe del Dios de la Guerra"
    },

    {
        nombre: "Magni",
        vida: 1000,
        energia: 400,
        defensa: 80,
        arma: "Martillo de Magni",
        ataque: "Martillazo Divino"
    },

    {
        nombre: "Modi",
        vida: 900,
        energia: 450,
        defensa: 75,
        arma: "Espada de Modi",
        ataque: "Ataque Relampago"
    },

    {
        nombre: "Sigrun",
        vida: 950,
        energia: 850,
        defensa: 90,
        arma: "Espada de Sigrun",
        ataque: "Danza de las Valquirias"
    },

    {
        nombre: "Garm",
        vida: 1300,
        energia: 300,
        defensa: 95,
        arma: "Garras de Garm",
        ataque: "Mordida de Garm"
    },

    {
        nombre: "Fenrir",
        vida: 1400,
        energia: 350,
        defensa: 90,
        arma: "Colmillos de Fenrir",
        ataque: "Rugido de Fenrir"
    },

    {
        nombre: "Surtr",
        vida: 1500,
        energia: 500,
        defensa: 100,
        arma: "Espada del Crepusculo",
        ataque: "Llamas del Ragnarok"
    },

    {
        nombre: "Ares",
        vida: 1200,
        energia: 700,
        defensa: 85,
        arma: "Espada del Olimpo",
        ataque: "Espada del Olimpo"
    },

    {
        nombre: "Zeus",
        vida: 1300,
        energia: 1000,
        defensa: 90,
        arma: "Rayo de Zeus",
        ataque: "Rayo Divino"
    },

    {
        nombre: "Hera",
        vida: 850,
        energia: 900,
        defensa: 65,
        arma: "Cetro de Hera",
        ataque: "Ira del Olimpo"
    },

    {
        nombre: "Hades",
        vida: 1250,
        energia: 800,
        defensa: 90,
        arma: "Guadaña de Hades",
        ataque: "Almas del Inframundo"
    },

    {
        nombre: "Poseidon",
        vida: 1400,
        energia: 750,
        defensa: 95,
        arma: "Tridente de Poseidon",
        ataque: "Furia de los Mares"
    },

    {
        nombre: "Athena",
        vida: 900,
        energia: 950,
        defensa: 80,
        arma: "Escudo de Atenea",
        ataque: "Escudo de la Sabiduria"
    }

];


const fighter1Select = document.getElementById("fighter1");
const fighter2Select = document.getElementById("fighter2");


peleadores.forEach(function (peleador, index) {

    const option1 = document.createElement("option");

    option1.value = index;
    option1.textContent = peleador.nombre;

    fighter1Select.appendChild(option1);


    const option2 = document.createElement("option");

    option2.value = index;
    option2.textContent = peleador.nombre;

    fighter2Select.appendChild(option2);

});


fighter1Select.addEventListener("change", function () {

    const peleador = peleadores[this.value];

    if (peleador) {
        actualizarJugador(1, peleador);
    }

});


fighter2Select.addEventListener("change", function () {

    const peleador = peleadores[this.value];

    if (peleador) {
        actualizarJugador(2, peleador);
    }

});


function actualizarJugador(numero, peleador) {

    document.getElementById(
        `fighter${numero}Name`
    ).textContent = peleador.nombre;


    document.getElementById(
        `fighter${numero}Health`
    ).textContent = peleador.vida;


    document.getElementById(
        `fighter${numero}Energy`
    ).textContent = peleador.energia;


    document.getElementById(
        `fighter${numero}Defense`
    ).textContent = peleador.defensa;


    document.getElementById(
        `fighter${numero}Weapon`
    ).textContent = peleador.arma;


    document.getElementById(
        `fighter${numero}Attack`
    ).textContent = peleador.ataque;


    document.getElementById(
        `fighter${numero}HealthBar`
    ).style.width = `${(peleador.vida / 1500) * 100}%`;


    document.getElementById(
        `fighter${numero}EnergyBar`
    ).style.width = `${(peleador.energia / 1000) * 100}%`;


    document.getElementById(
        `fighter${numero}DefenseBar`
    ).style.width = `${peleador.defensa}%`;

}


document.getElementById("fightButton").addEventListener(
    "click",
    function () {

        const jugador1 = peleadores[fighter1Select.value];

        const jugador2 = peleadores[fighter2Select.value];


        if (!jugador1 || !jugador2) {

            alert(
                "¡Tenés que seleccionar a los dos peleadores!"
            );

            return;
        }


        const poderJugador1 =
            jugador1.vida +
            jugador1.energia +
            jugador1.defensa;


        const poderJugador2 =
            jugador2.vida +
            jugador2.energia +
            jugador2.defensa;


        const result = document.getElementById("result");

        const resultTitle =
            document.getElementById("resultTitle");

        const resultText =
            document.getElementById("resultText");


        result.classList.remove("hidden");


        if (poderJugador1 > poderJugador2) {

            resultTitle.textContent =
                `🏆 ¡${jugador1.nombre} ES EL GANADOR! 🏆`;

            resultText.textContent =
                `Poder total: ${poderJugador1} puntos.`;

        } else if (poderJugador2 > poderJugador1) {

            resultTitle.textContent =
                `🏆 ¡${jugador2.nombre} ES EL GANADOR! 🏆`;

            resultText.textContent =
                `Poder total: ${poderJugador2} puntos.`;

        } else {

            resultTitle.textContent =
                "⚔️ ¡EMPATE! ⚔️";

            resultText.textContent =
                "Los dos guerreros tienen el mismo poder.";

        }

    }
);


document.getElementById("restartButton").addEventListener(
    "click",
    function () {

        window.location.reload();

    }
);