const dataInput = document.getElementById("data-input");
const showArea = document.getElementById("show-area");
const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");

let startX = 0;
let isDragging = false;
let activeChar = null;

const onMouseDown = (e) => {
    startX = e.clientX;
    isDragging = true;
};

const onMouseMove = (e) => {
    if (!isDragging || activeChar == null) return;
    const diff = e.clientX - startX;
    const orgin = parseInt(activeChar.style.marginLeft.replace("px", ""));
    activeChar.style.marginLeft = `${orgin + diff}px`;
    startX = e.clientX;
};

const onMouseUp = () => {
    if (isDragging) {
        isDragging = false;
    }
};

const activateChar = () => {
    if (activeChar !== null) {
        activeChar.classList.toggle("active-char");
    }
    activeChar = document.activeElement;
    activeChar.addEventListener("mousedown", onMouseDown);
    activeChar.dispatchEvent(new Event("mousedown"));
    activeChar.classList.toggle("active-char");
};

const deactivateChar = () => {
    if (activeChar !== null) {
        activeChar.classList.toggle("active-char");
    }
    activeChar = null;
};

const setText = () => {
    showArea.innerHTML = "";
    for (char of dataInput.value) {
        const span = document.createElement("span");
        [span.textContent, span.style.marginLeft] = [char, "0px"];
        span.addEventListener("focus", activateChar);
        span.setAttribute("tabindex", "0");
        showArea.appendChild(span);
    }
};

const setFontSize = () => {
    const value = `${fontSize.value}px`;
    document.documentElement.style.setProperty("--font-size", value);
};

const setFontFamily = () => {
    const value = fontFamily.value;
    document.documentElement.style.setProperty("--font-family", value);
};

dataInput.addEventListener("input", setText);
fontSize.addEventListener("input", setFontSize);
fontFamily.addEventListener("input", setFontFamily);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

setText();
setFontSize();
setFontFamily();
