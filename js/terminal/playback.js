import { wait } from "../utils/wait.js";
import { setLoginLine } from "./login.js";
import { typeCommand } from "./typing.js";
import { showOutput } from "./output.js";

export async function playTerminal() {
    const entries = [...document.querySelectorAll(".terminal-entry")];
    const finalLine = document.getElementById("final-line");
    const loginLine = document.querySelector("[data-login-line]");

    setLoginLine(loginLine);

    await wait(180);

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const line = entry.querySelector(".prompt-line");
        const output = entry.querySelector(".output");
        const command = line.dataset.command || "";

        const isFirst = i === 0;
        const typingSpeed = isFirst ? 24 : 12;

        await typeCommand(line, command, typingSpeed);
        await wait(isFirst ? 180 : 55);

        await showOutput(output);

        if (command === "ssh antoni@portfolio.achelsto.com") {
            await wait(360);
        } else if (command === "ls") {
            await wait(100);
        } else if (command === "fastfetch") {
            await wait(320);
        } else if (command === "cat about.txt") {
            await wait(380);
        } else if (command === "./projects --list") {
            await wait(440);
        } else if (command === "contact --show") {
            await wait(200);
        } else if (command === "cat little-fella.txt") {
            await wait(260);
        } else {
            await wait(150);
        }
    }

    finalLine.classList.add("visible");
}