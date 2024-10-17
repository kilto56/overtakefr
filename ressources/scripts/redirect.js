import './shortcut.js';
import { queryAll } from './shortcut.js';

const buttons = queryAll(".en-savoir-plus-btn");
const pages = ["equipes.html", "palmares.html", "showmatchs.html"];

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        window.location.href = pages[i];
    });
});