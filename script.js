const dataInput = document.getElementById("data-input");
const spaceLength = document.getElementById("space-length");
const showArea = document.getElementById("show-area");

let activeChar = null;
const setActiveChar = () => {
    if (activeChar !== null) {
        activeChar.classList.toggle("active-char");
    }
    activeChar = document.activeElement;
    activeChar.classList.toggle("active-char");
    spaceLength.value = parseInt(activeChar.style.margin.replace("px", ""));
};

const setText = () => {
    showArea.innerHTML = "";
    for (c of dataInput.value) {
        let span = document.createElement("span");
        span.textContent = c;
        span.addEventListener("focus", setActiveChar);
        span.setAttribute("tabindex", "0");
        showArea.appendChild(span);
    }
};

const updateLength = () => {
    const value = `${spaceLength.value}px`;
    activeChar.style.margin = value;
};

dataInput.addEventListener("input", setText);
spaceLength.addEventListener("input", updateLength);

setText();
updateLength();
