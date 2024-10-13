import "./shortcut.js";
import { query } from "./shortcut.js";

const form = query("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = {
        name: query("#name"),
        email: query("#email"),
        title: query("#titre"),
        description: query("#description"),
        submit: query("#submit")
    };

    if (inputs.name.checkValidity() && inputs.title.checkValidity() && inputs.description.checkValidity() && validEmail(inputs.email.value)) {
        createComment(inputs.name.value, inputs.email.value, inputs.title.value, inputs.description.value)
    } else {
        window.alert("EN : Please enter a valid email.\nFR : Entrez un email valide s'il vous plaît.");
    };
});

const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const createComment = (name, email, title, description) => {
    const date = new Date();
    const datetime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const avisContainer = query(".avis-publics");

    const newComment = document.createElement("div");
    newComment.classList.add("avis-public");
    newComment.innerHTML = `
        <h3 class="titre-avis">${title}</h3>
        <q><p class="description-avis">${description}</p></q>
        <p class="infos-avis">Écrit par ${name} (${email})</p>
        <p class="date">${datetime}</p>
    `;

    avisContainer.appendChild(newComment);
};

const initComment = (name, email, title, description, datetime) => {
    const avisContainer = query(".avis-publics");

    const newComment = document.createElement("div");
    newComment.classList.add("avis-public");
    newComment.innerHTML = `
        <h3 class="titre-avis">${title}</h3>
        <q><p class="description-avis">${description}</p></q>
        <p class="infos-avis">Écrit par ${name} (${email})</p>
        <p class="date">${datetime}</p>
    `;

    avisContainer.appendChild(newComment);
};

initComment("John Doe", "john.doe@mail.com", "Beau site!", "Je l'aime beaucoup !", "15/01/2022");
initComment("Marc Bidôt", "mark.bidot@blablamail.com", "Très enrichissant de savoir tout ça !", "Vraiment bien de mettre cette facette de la France en évidence !", "21/01/204");
