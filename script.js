const roomScene =
document.getElementById("room-scene");

const closetScene =
document.getElementById("closet-scene");

const outsideScene =
document.getElementById("outside-scene");

const openClosetBtn =
document.getElementById("open-closet");

const goOutsideBtn =
document.getElementById("go-outside");

const backRoomBtn =
document.getElementById("back-room");

const confirmOutfitBtn =
document.getElementById("confirm-outfit");

const backInsideBtn =
document.getElementById("back-inside");

const gradeFitBtn =
document.getElementById("grade-fit");

const popup =
document.getElementById("popup");

const playAgainBtn =
document.getElementById("play-again");

const outfitCards =
document.querySelectorAll(".outfit-card");

const roomCharacter =
document.getElementById("room-character");

const outsideCharacter =
document.getElementById("outside-character");

const weatherName =
document.getElementById("weather-name");

const weatherTemp =
document.getElementById("weather-temp");

const outsideWeather =
document.getElementById("outside-weather");

const outsideTemp =
document.getElementById("outside-temp");

const outsideIcon =
document.getElementById("outside-icon");

const gradeTitle =
document.getElementById("grade-title");

const gradeMessage =
document.getElementById("grade-message");

const rain =
document.getElementById("rain");

const snow =
document.getElementById("snow");

const sun =
document.getElementById("sun");

/* Instruction Pop Up */

const instructionsPopup =
document.getElementById(
    "instructions-popup"
);

const startGameBtn =
document.getElementById(
    "start-game"
);

/* Game variables */

let selectedOutfit = null;

let currentWeather = null;

/* Weather types */

const weatherTypes = [

    {
        name:"Sunny",
        icon:"☀️",
        temp:"84°F",
        correct:"summer"
    },

    {
        name:"Rainy",
        icon:"🌧️",
        temp:"65°F",
        correct:"rain"
    },

    {
        name:"Snowy",
        icon:"❄️",
        temp:"28°F",
        correct:"winter"
    },

    {
        name:"Cloudy",
        icon:"☁️",
        temp:"58°F",
        correct:"fall"
    }
];

/* Generate Weather */

function generateWeather(){

    currentWeather =
    weatherTypes[
        Math.floor(
            Math.random() *
            weatherTypes.length
        )
    ];

    weatherName.textContent =
    currentWeather.name;

    weatherTemp.textContent =
    currentWeather.temp;

    outsideWeather.textContent =
    currentWeather.name;

    outsideTemp.textContent =
    currentWeather.temp;

    outsideIcon.textContent =
    currentWeather.icon;

    weatherEffects();
}

/* Weather Animations */

function weatherEffects(){

    rain.style.display = "none";

    snow.style.display = "none";

    sun.style.display = "none";

    if(currentWeather.name === "Rainy"){

        rain.style.display = "block";
    }

    if(currentWeather.name === "Snowy"){

        snow.style.display = "block";
    }

    if(currentWeather.name === "Sunny"){

        sun.style.display = "block";
    }
}

/* Diffrent views */

function showScene(scene){

    roomScene.classList.remove("active");

    closetScene.classList.remove("active");

    outsideScene.classList.remove("active");

    scene.classList.add("active");
}

/* Start */

startGameBtn.onclick = ()=>{

    instructionsPopup.style.display =
    "none";
};

/* Closet  */

openClosetBtn.onclick = ()=>{

    closetScene.style.display = "flex";

    showScene(closetScene);
};

/* Show outside scene */

goOutsideBtn.onclick = ()=>{

    showScene(outsideScene);
};

/* Show room scene */

backRoomBtn.onclick = ()=>{

    closetScene.style.display = "none";

    showScene(roomScene);
};

/* Show room scene */

backInsideBtn.onclick = ()=>{

    showScene(roomScene);
};

/* SELECT OUTFIT */

outfitCards.forEach(card=>{

    card.onclick = ()=>{

        outfitCards.forEach(c=>{

            c.classList.remove("selected");
        });

        card.classList.add("selected");

        selectedOutfit =
        card.dataset.outfit;
    };
});



confirmOutfitBtn.onclick = ()=>{

    if(!selectedOutfit){

        alert("Choose an outfit first!");

        return;
    }

    roomCharacter.src =
    `assets/${selectedOutfit}.png`;

    outsideCharacter.src =
    `assets/${selectedOutfit}.png`;

    closetScene.style.display = "none";

    showScene(roomScene);
};

/* Grade  */

function gradeOutfit(){

    popup.style.display = "flex";

    if(selectedOutfit === currentWeather.correct){

        gradeTitle.textContent =
        "⭐ Perfect Outfit!";

        gradeMessage.textContent =
        `The ${selectedOutfit} outfit is perfect for ${currentWeather.name.toLowerCase()} weather.`;
    }

    else{

        if(currentWeather.name === "Snowy"){

            gradeTitle.textContent =
            "I'm freezing Cold!";

            gradeMessage.textContent =
            "You needed a warmer outfit.";
        }

        else if(currentWeather.name === "Sunny"){

            gradeTitle.textContent =
            "I'm burning up, Too Hot!";

            gradeMessage.textContent =
            "This outfit is too warm for sunny weather.";
        }

        else if(currentWeather.name === "Rainy"){

            gradeTitle.textContent =
            "I'm getting rained on! 😡!";

            gradeMessage.textContent =
            "You forgot my rain outfit.";
        }

        else{

            gradeTitle.textContent =
            "Not Quite!";

            gradeMessage.textContent =
            "This outfit does not match the weather.";
        }
    }
}



gradeFitBtn.onclick = ()=>{

    gradeOutfit();
};

/* restart */

playAgainBtn.onclick = ()=>{

    /* Reset */

    selectedOutfit = null;



    roomCharacter.src =
    "assets/character.png";

    outsideCharacter.src =
    "assets/character.png";



    outfitCards.forEach(card=>{

        card.classList.remove("selected");

    });



    popup.style.display = "none";



    showScene(roomScene);



    generateWeather();
};

/* Rain */

function createRain(){

    for(let i = 0; i < 120; i++){

        const drop =
        document.createElement("span");

        drop.classList.add("drop");

        drop.style.left =
        Math.random() * 100 + "vw";

        drop.style.animationDuration =
        Math.random() * .5 + .5 + "s";

        rain.appendChild(drop);
    }
}

/* Snow */

function createSnow(){

    for(let i = 0; i < 70; i++){

        const snowflake =
        document.createElement("div");

        snowflake.classList.add("snowflake");

        snowflake.innerHTML = "❄";

        snowflake.style.left =
        Math.random() * 100 + "vw";

        snowflake.style.animationDuration =
        Math.random() * 5 + 5 + "s";

        snowflake.style.opacity =
        Math.random();

        snow.appendChild(snowflake);
    }
}

/* Start */

createRain();

createSnow();

generateWeather();