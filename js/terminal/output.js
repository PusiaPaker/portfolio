import { wait } from "../utils/wait.js";

export async function showOutput(output) {
    output.classList.add("visible");
    await wait(80);
}