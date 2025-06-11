const dataInput = document.getElementById("data-input");
const showArea = document.getElementById("show-area");

let startX = 0;
let isDragging = false;
let activeChar = null;

const onMouseDown = (e) => {
    startX = e.clientX;
    isDragging = true;
};

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = endX - startX;
    const orgin = parseInt(activeChar.style.marginLeft.replace("px", ""));
    const value = `${orgin + diff}px`;
    activeChar.style.marginLeft = value;
    startX = e.clientX;
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
    }
});

const setActiveChar = () => {
    if (activeChar !== null) {
        activeChar.classList.toggle("active-char");
    }
    activeChar = document.activeElement;
    activeChar.addEventListener("mousedown", onMouseDown);
    activeChar.classList.toggle("active-char");
};

const setText = () => {
    showArea.innerHTML = "";
    for (c of dataInput.value) {
        let span = document.createElement("span");
        span.textContent = c;
        span.style.marginLeft = "0px";
        span.addEventListener("focus", setActiveChar);
        span.setAttribute("tabindex", "0");
        showArea.appendChild(span);
    }
};

dataInput.addEventListener("input", setText);
setText();
