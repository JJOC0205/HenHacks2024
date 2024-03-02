const container = document.getElementById('frame');
const iframe = container.contentWindow.document.getElementById("div");
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
console.log('color-wheel.js loaded');
