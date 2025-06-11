const dataInput = document.getElementById("data-input");
const targetRegex = document.getElementById("space-length");
const spaceLength = document.getElementById("target-regex");
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
    const regex = new RegExp(targetRegex.value);
    for (span of showArea.children) {
        if (regex.test(span.textContent)) {
            span.style.margin = value;
        }
    }
};

dataInput.addEventListener("input", set_text);
spaceLength.addEventListener("input", update_length);

set_text();
update_length();
