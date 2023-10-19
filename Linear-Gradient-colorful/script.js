function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    for (let i = 0; i < 30; i++) {
        const div = document.createElement("div");
        div.className = "gradient-div";
        const color1 = generateRandomColor();
        const color2 = generateRandomColor();
        const angle = Math.floor(Math.random() * 360);
        div.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

        // Create a <span> element for the color code
        const colorCodeSpan = document.createElement("span");
        colorCodeSpan.textContent = `${color1} ${color2}`;
        colorCodeSpan.className = "color-code";

        // Append the color code <span> to the div
        div.appendChild(colorCodeSpan);

        container.appendChild(div);
    }
});
