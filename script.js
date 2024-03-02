// Select elements
const cssInput = document.getElementById('cssInput');
const liveCSS = document.getElementById('liveCSS');

// Function to update CSS
function updateCSS() {
    css = '#container {' + cssInput.value + '}';
    liveCSS.textContent = css
}

function loadCircles() {
    const container = document.getElementById('container');
    const circleCount = 6;
    const radius = 60;
    const angleIncrement = 360 / circleCount;

    for (let i = 0; i < circleCount; i++) {
        index = i + 1;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('id', 'color' + index)
        circle.innerText += index
        circle.style.transform = `rotate(${i * angleIncrement}deg) translate(${radius}px) rotate(${-i * angleIncrement}deg)`;
        container.appendChild(circle);
    }
}

// Event listener for changes in CSS input
cssInput.addEventListener('input', updateCSS);

// Initial update
updateCSS();
loadCircles();
