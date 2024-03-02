// Select elements
const cssInput = document.getElementById('cssInput');
const liveCSS = document.getElementById('liveCSS');

// Function to update CSS
function updateCSS() {
    liveCSS.textContent = cssInput.value;
}

// Event listener for changes in CSS input
cssInput.addEventListener('input', updateCSS);

// Initial update
updateCSS();
