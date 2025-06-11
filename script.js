const dataInput = document.getElementById("data-input");
const spaceLength = document.getElementById("space-length");
const showArea = document.getElementById("show-area");

const set_text = () => {
    showArea.innerHTML = "";
    for (c of dataInput.value) {
        let span = document.createElement("span");
        span.textContent = c;
        showArea.appendChild(span);
    }
};

const update_length = () => {
    const value = `${spaceLength.value}px`;
    document.documentElement.style.setProperty("--space-length", value);
};

dataInput.addEventListener("input", set_text);
spaceLength.addEventListener("input", update_length);

set_text();
update_length();
