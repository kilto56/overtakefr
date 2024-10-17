import './shortcut.js';
import { query, queryAll } from './shortcut.js';

const jeux = queryAll(".logo-jeux");
const teams = queryAll(".logo-team-img");


const resetSelectedGames = () => {
    jeux.forEach((jeu) => {
        jeu.classList.remove("selected-logo-jeux");
    });
};

const showTeam = (array) => {
    for (let i = 0; i < teams.length; i++) {
        teams[i].classList.add("hidden");
    };

    for (let i = 0; i < array.length; i++) {
        teams[array[i]].classList.remove("hidden");
    };
};

jeux.forEach((jeu) => {
    jeu.addEventListener('click', () => {
        if (jeu == jeux[0]) {
            //lol            
            const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[1]) {
            //valo            
            const index = [3, 5, 7, 9, 10];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[2]) {
            //rl            
            const index = [0, 3, 5, 7, 9];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[3]) {
            //r6
            const index = [0, 4];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[4]) {
            //ftn
            const index = [1, 2, 3, 5, 6, 7, 8];
            showTeam(index);
            
            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[5]) {
            //ssb
            const index = [1, 7, 8];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");            
        } else if (jeu == jeux[6]) {
            //2k
            const index = [2];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else if (jeu == jeux[7]) {
            //trackmania
            const index = [2, 7];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        } else {
            //fifa
            const index = [9];
            showTeam(index);

            resetSelectedGames();
            jeu.classList.add("selected-logo-jeux");
        };
    });
});