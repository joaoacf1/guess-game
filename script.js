let randomNumber = Math.ceil(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 =   document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let attempt = 1;

// events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

document.addEventListener('keydown', handleResetEnter);

// callback functions
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if (inputNumber.value < 1 || inputNumber.value > 10 || inputNumber.value == "") {
        alert("Invalid number")
    }
    else {
        if (randomNumber === Number(inputNumber.value)) {
            toggleScreen();
            screen2.querySelector("h2").innerText = `Got it right in ${attempt} attempts`;
        }
        
        attempt++;
    }
    inputNumber.value = "";

}

function handleResetClick() {
    toggleScreen();
    attempt = 1;
    randomNumber = Math.ceil(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleResetEnter(event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}
