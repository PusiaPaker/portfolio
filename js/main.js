import { playTerminal } from "./terminal/playback.js";
import { setupAnchorScroll } from "./ui/anchor-scroll.js";
import { setupScrollTop } from "./ui/scroll-top.js";

setupAnchorScroll();
setupScrollTop();
playTerminal();