import { wait } from "../utils/wait.js";

export async function typeCommand(lineEl, command, speed = 38) {
    lineEl.innerHTML = '<span class="prompt">$</span> ';

    const textNode = document.createTextNode("");
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";

    lineEl.appendChild(textNode);
    lineEl.appendChild(cursor);

    let built = "";

    for (const char of command) {
        built += char;
        textNode.textContent = built;

        const variance = Math.random() * 16 - 5;
        await wait(Math.max(10, speed + variance));
    }

    cursor.remove();
}