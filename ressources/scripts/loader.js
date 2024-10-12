import "./shortcut.js";
import { query } from "./shortcut.js";

const loader = query(".loader");
const body = query("body");

window.addEventListener("load", () => {
    loader.classList.toggle("hiddenning");
    body.scrollIntoView({
        block: "start"
    });
    setTimeout(() => {
        loader.classList.toggle("hidden");
        body.scrollIntoView({
            block: "start"
        });
    }, 1500);
});