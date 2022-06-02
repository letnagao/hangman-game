//"Apple", "Blueberry", "Mandarin", "Pineapple", "Pomegranate", "Watermelon"

const letterContainer = document.getElementById("letter-container");

const optionsContainer = document.getElementById("options-container");

const userInputSection = document.getElementById("user-input-section");

const newGameContainer = document.getElementById("new-game-container");

const newGameButton = document.getElementById("new-game-btn");

const canvas = document.getElementById("canvas");

const resultText = document.getElementById("result-text");

let options = {
    fruits: [
        "Apple",
        "Blueberry",
        "Mandarim",
        "Pineapple",
        "Pomegranate",
        "Watermelon",
    ],
    animals: [
        "Hedgehog",
        "Rhinoceros",
        "Squirrel",
        "Panther",
        "Walrus",
        "Zebra",
    ],
    countries: [
        "India",
        "Hungary",
        "Kyrgyzstan",
        "Switzerland",
        "Zimbabwe",
        "Dominica",
    ],
};

let winCount = 0;
let count = 0;

let chosenWord = "";

const displayOptions = () => {
    optionsContainer.innerHTML+=`<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for(let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

    optionsButtons.forEach(button => {
        button.disable = true;
    });

    letterButtons.forEach(button => {
        button.disable.true;
    });
    newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() ===
        optionValue) {
            button.classList.add("active");
        }
        button.disable = true;
    }); 

    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];

    
};

const initializer = () => {
    winCount = 0;
    count = 0;

    for(let i =65; i<91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
    }
    displayOptions();
};

newGameButton.addEventListener("click",
initializer);
window.onload = initializer;