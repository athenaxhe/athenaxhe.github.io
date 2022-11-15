function toggleTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}

let darkModeButton = document.getElementById("toggleButton");
darkModeButton.onclick = toggleTheme;