// Select elements
const cssInput = document.getElementById('cssInput');
const liveCSS = document.getElementById('liveCSS');

//Correct colors for each circle
const CIRCLE_COUNT = 6;
const CORRECT_COLORS = ["rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(128, 0, 128)"];


// Function to update CSS
function updateCSS(input) {
    css = '#colors {' + input + '}';
    liveCSS.textContent = css
}


// Generate the circles
function loadCircles() {
    const container = document.getElementById('colors');
    const radius = 100;
    const angleIncrement = 360 / CIRCLE_COUNT;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        index = i + 1;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('id', 'color' + index)
        circle.innerText += index
        circle.style.transform = `rotate(${i * angleIncrement}deg) translate(${radius}px) rotate(${-i * angleIncrement}deg)`;
        container.appendChild(circle);
    }
}

// Check if circles match
function checkCircles() {

    //complete gets set false if any of them are wrong
    let complete = true;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        index = i + 1;
        circle = document.getElementById("color" + index)

        if (!circle)
            continue;

        background = window.getComputedStyle(circle).backgroundColor;
        background = background.toString()
        console.log(background)

        if (background != CORRECT_COLORS[i]) {
            complete = false;
        }
    }

    if (complete) {
        alert("You got it!")
    } else {
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



