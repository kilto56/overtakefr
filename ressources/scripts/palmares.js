import './shortcut.js';

import { query, queryAll } from './shortcut.js';

const logos = queryAll(".logo-team-img");
const palmarès = [query(".bds"), query('.bkrog'), query('.gameward'), query('.gentlemates'), query('.izi-dream'), query('.karminecorp'), query('.mces'), query('.solary'), query(".teamgo"), query('.vitality'), query('.zerance')];
console.log(palmarès);
logos.forEach((logo, i) => {
    logo.addEventListener('click', () => {
        palmarès[i].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});