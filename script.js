const dataInput = document.getElementById("data-input");
const showArea = document.getElementById("show-area");

let startX = 0;
let isDragging = false;
let activeChar = null;

const onMouseDown = (e) => {
    startX = e.clientX;
    isDragging = true;
};

const onMouseMove = (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = endX - startX;
    const orgin = parseInt(activeChar.style.marginLeft.replace("px", ""));
    const value = `${orgin + diff}px`;
    activeChar.style.marginLeft = value;
    startX = e.clientX;
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
    for (c of dataInput.value) {
        let span = document.createElement("span");
        span.textContent = c;
        span.style.marginLeft = "0px";
        span.addEventListener("focus", activeChar);
        span.setAttribute("tabindex", "0");
        showArea.appendChild(span);
    }
};

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", () => (isDragging = false));
dataInput.addEventListener("input", setText);

setText();
