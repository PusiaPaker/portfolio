export function formatLoginDateTime() {
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
    const month = now.toLocaleDateString("en-US", { month: "short" });
    const day = now.getDate();
    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    return `${weekday} ${month} ${day} ${time}`;
}

export function setLoginLine(loginLine) {
    if (!loginLine) return;
    loginLine.textContent = `Last login: ${formatLoginDateTime()} from portfolio gateway`;
}