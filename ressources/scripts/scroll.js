import "./shortcut.js";
import { query, queryAll } from "./shortcut.js";

const navButtons = queryAll('.nav-button');
const accueil = query('#accueil');
const sections = [accueil, query("#equipes"), query('#palmares'), query('#showmatchs')];
const lengths = [-60, -80, -80, -80]


for (let i = 0; i < sections.length; i++) {
    navButtons[i].addEventListener('click', () => {
        const locationRef = "index.html";
        const loca = window.location.href;

        if (loca.includes(locationRef)) {
            sections[i].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            setTimeout(() => {
                window.scrollBy({
                    top: lengths[i], 
                    left: 0,
                    behavior: 'smooth'
                });
            }, 500);
        } else {
            const indexSections = ["index", "equipes", 'palmares', 'showmatchs'];
            window.location.href = `${indexSections[i]}.html`;
        };
    });
};


const downButton = document.querySelector(".scroll-down-button");

downButton.addEventListener('click', () => {
    console.log(1);
    
    accueil.scrollIntoView({
        behavior:'smooth',
        block:'center'
    });

    setTimeout(() => {
        window.scrollBy({
            top: -30, 
            left: 0,
            behavior: 'smooth'
        });
    }, 500);
});