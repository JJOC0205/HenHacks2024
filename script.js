// Select elements
const cssInput = document.getElementById('cssInput');
const liveCSS = document.getElementById('liveCSS');

//Correct colors for each circle
const CIRCLE_COUNT = 6;
const CORRECT_COLORS = ["rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(128, 0, 128)"];
const CORRECT_COLORS2 = ["rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(128, 0, 128)", "rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)"]

// Function to update CSS
function updateCSS(input) {
    css = '#colors {' + input + '}';
    liveCSS.textContent = css
    console.log(liveCSS);
}


// Generate the circles
function loadCircles() {
    const container = document.getElementById('colors');
    const radius = 190;
    const angleIncrement = 360 / CIRCLE_COUNT;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        index = i + 1;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('id', 'color' + index)
        circle.innerText += index
        circle.style.transform = `rotate(${i * angleIncrement}deg) translate(${radius}px) rotate(${-i * angleIncrement}deg)`;
        circle.addEventListener('click', handleClick);
        container.appendChild(circle);
    }
}

let selectedDivs = [];

function toggleSelection(divId) {
    const index = selectedDivs.indexOf(divId);
    if (index === -1) {
        if (selectedDivs.length < 2) {
            selectedDivs.push(divId);
        }
        if (selectedDivs.length === 2) {
            colorMixer(window.getComputedStyle(document.getElementById(selectedDivs[0])).backgroundColor, window.getComputedStyle(document.getElementById(selectedDivs[1])).backgroundColor)
        }
    }
    else {
        selectedDivs.splice(index, 1)
        color7.style.backgroundColor = "gray";
    }

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        let index = i + 1;
        circle = 'color' + index
        div = document.getElementById(circle);
        if (selectedDivs.includes(circle)) {
            div.classList.add('selected')
        } else {
            div.classList.remove('selected')
        }

    }
}

function colorMixer(color1, color2) {
    const color7 = document.getElementById("color7")
    if ((color1.toString().localeCompare("rgb(255, 0, 0)") === 0 || color1.toString().localeCompare("rgb(255, 165, 0)") === 0) && (color2.toString().localeCompare("rgb(255, 0, 0)") === 0 || color2.toString().localeCompare("rgb(255, 165, 0)") === 0)) {
        color7.style.backgroundColor = "orangered";
    }
    else if ((color1.toString().localeCompare("rgb(255, 0, 0)") === 0 || color1.toString().localeCompare("rgb(255, 255, 0)") === 0) && (color2.toString().localeCompare("rgb(255, 0, 0)") === 0 || color2.toString().localeCompare("rgb(255, 255, 0)") === 0)) {
        color7.style.backgroundColor = "orange";
    }
    else if ((color1.toString().localeCompare("rgb(255, 0, 0)") === 0 || color1.toString().localeCompare("rgb(0, 128, 0)") === 0) && (color2.toString().localeCompare("rgb(255, 0, 0)") === 0 || color2.toString().localeCompare("rgb(0, 128, 0)") === 0)) {
        color7.style.backgroundColor = "saddlebrown";
    }
    else if ((color1.toString().localeCompare("rgb(255, 0, 0)") === 0 || color1.toString().localeCompare("rgb(0, 0, 255)") === 0) && (color2.toString().localeCompare("rgb(255, 0, 0)") === 0 || color2.toString().localeCompare("rgb(0, 0, 255)") === 0)) {
        color7.style.backgroundColor = "purple";
    }
    else if ((color1.toString().localeCompare("rgb(255, 0, 0)") === 0 || color1.toString().localeCompare("rgb(128, 0, 128)") === 0) && (color2.toString().localeCompare("rgb(255, 0, 0)") === 0 || color2.toString().localeCompare("rgb(128, 0, 128)") === 0)) {
        color7.style.backgroundColor = "mediumvioletred";
    }
    else if ((color1.toString().localeCompare("rgb(255, 255, 0)") === 0 || color1.toString().localeCompare("rgb(255, 165, 0)") === 0) && (color2.toString().localeCompare("rgb(255, 255, 0)") === 0 || color2.toString().localeCompare("rgb(255, 165, 0)") === 0)) {
        color7.style.backgroundColor = "gold";
    }
    else if ((color1.toString().localeCompare("rgb(0, 128, 0)") === 0 || color1.toString().localeCompare("rgb(255, 165, 0)") === 0) && (color2.toString().localeCompare("rgb(0, 128, 0)") === 0 || color2.toString().localeCompare("rgb(255, 165, 0)") === 0)) {
        color7.style.backgroundColor = "saddlebrown";
    }
    else if ((color1.toString().localeCompare("rgb(0, 0, 255)") === 0 || color1.toString().localeCompare("rgb(255, 165, 0)") === 0) && (color2.toString().localeCompare("rgb(0, 0, 255)") === 0 || color2.toString().localeCompare("rgb(255, 165, 0)") === 0)) {
        color7.style.backgroundColor = "brown";
    }
    else if ((color1.toString().localeCompare("rgb(128, 0, 128)") === 0 || color1.toString().localeCompare("rgb(255, 165, 0)") === 0) && (color2.toString().localeCompare("rgb(128, 0, 128)") === 0 || color2.toString().localeCompare("rgb(255, 165, 0)") === 0)) {
        color7.style.backgroundColor = "brown";
    }
    else if ((color1.toString().localeCompare("rgb(0, 0, 255)") === 0 || color1.toString().localeCompare("rgb(255, 255, 0)") === 0) && (color2.toString().localeCompare("rgb(0, 0, 255)") === 0 || color2.toString().localeCompare("rgb(255, 255, 0)") === 0)) {
        color7.style.backgroundColor = "green";
    }
    else if ((color1.toString().localeCompare("rgb(128, 0, 128)") === 0 || color1.toString().localeCompare("rgb(255, 255, 0)") === 0) && (color2.toString().localeCompare("rgb(128, 0, 128)") === 0 || color2.toString().localeCompare("rgb(255, 255, 0)") === 0)) {
        color7.style.backgroundColor = "brown";
    }
    else if ((color1.toString().localeCompare("rgb(0, 128, 0)") === 0 || color1.toString().localeCompare("rgb(255, 255, 0)") === 0) && (color2.toString().localeCompare("rgb(0, 128, 0)") === 0 || color2.toString().localeCompare("rgb(255, 255, 0)") === 0)) {
        color7.style.backgroundColor = "yellowgreen";
    }
    else if ((color1.toString().localeCompare("rgb(0, 128 0)") === 0 || color1.toString().localeCompare("rgb(0, 0, 255)") === 0) && (color2.toString().localeCompare("rgb(0, 128, 0)") === 0 || color2.toString().localeCompare("rgb(0, 0, 255)") === 0)) {
        color7.style.backgroundColor = "teal";
    }
    else if ((color1.toString().localeCompare("rgb(0, 128, 0)") === 0 || color1.toString().localeCompare("rgb(128, 0, 128)") === 0) && (color2.toString().localeCompare("rgb(0, 128, 0)") === 0 || color2.toString().localeCompare("rgb(128, 0, 128)") === 0)) {
        color7.style.backgroundColor = "silver";
    }
    else if ((color1.toString().localeCompare("rgb(0, 0, 255)") === 0 || color1.toString().localeCompare("rgb(128, 0, 128)") === 0) && (color2.toString().localeCompare("rgb(0, 0, 255)") === 0 || color2.toString().localeCompare("rgb(128, 0, 128)") === 0)) {
        color7.style.backgroundColor = "blueviolet";
    }
}

function handleClick(event) {
    const divId = event.target.id;
    toggleSelection(divId);
    const div = document.getElementById(divId);
    console.log(selectedDivs)
}

// Check if circles match
function checkCircles() {

    //complete gets set false if any of them are wrong
    let complete = true;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        index = i + 1;
        circle = document.getElementById("color" + index)

        circle.classList.remove('incorrect')

        if (!circle)
            continue;

        background = window.getComputedStyle(circle).backgroundColor;
        background = background.toString();
        console.log(background)

        text = window.getComputedStyle(circle).color;
        text = text.toString();
        console.log(window.location.toString())
        if (currLevel == 1) {
            if (background != CORRECT_COLORS[i]) {
                complete = false;

                circle.classList.add('incorrect')
            }
        } else if (currLevel == 2) {
            if (text != CORRECT_COLORS2[i]) {
                complete = false;

                circle.classList.add('incorrect')
            }
        }
    }

    if (complete && currLevel != 3) {

        let confetti = new Confetti('colors');

        // Edit given parameters
        confetti.setCount(75);
        confetti.setSize(1);
        confetti.setPower(25);
        confetti.setFade(true);
        confetti.destroyTarget(false);

        alert("You got it! Now click any circle for a fun surprise :)")

    }
    else if (currLevel == 3) {
        alert("Sandbox mode, no incorrect answers here!");
    }
    else {
        alert("So close, try again!")
    }
}


let editor = CodeMirror.fromTextArea(cssInput, {
    lineNumbers: false, // Display line numbers
    mode: "css", // Set the syntax highlighting mode to CSS
});
editor.on('change', editor => {
    updateCSS(editor.getValue());
});


// Initial update and load
updateCSS(cssInput.value);
loadCircles();

window.onload = resetLevel(querystring('level'));



