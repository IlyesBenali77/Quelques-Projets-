"use strict";
// Commençons par importer le fichier interface.ts :
Object.defineProperty(exports, "__esModule", { value: true });
// Tout d'abord nous importons les 3 fichiers json :
var fs = require('fs');
var content_bosses = fs.readFileSync('./json/bosses.json', 'utf-8');
var Bosses_json = JSON.parse(content_bosses);
var content_enemies = fs.readFileSync('./json/enemies.json', 'utf-8');
var Enemies_json = JSON.parse(content_enemies);
var content_players = fs.readFileSync('./json/players.json', 'utf-8');
var Players_json = JSON.parse(content_players);
var readline = require('readline-sync');
//fonction attaque qui prend en paramètre les HP de l'ennemi et la force du joueur dans 
//laquelle je retourne les dommages infligés par le joueur
function attack(ennemi_hp, player_str) {
    var damage = ennemi_hp - player_str;
    if (damage <= 0) {
        damage = 0;
        return damage;
    }
    return damage;
}
// fonction heal qui prend en paramètre les HP du joueur dans
// laquelle je retourne les HP du joueur
function heal(player_hp) {
    var healing = player_hp / 2;
    var total_healing = player_hp + healing;
    if (total_healing > 60) {
        total_healing = 60;
        return total_healing;
    }
    return total_healing;
}
// fonction experience qui retourne et affiche un nombre aléatoire entre un mini et un maxi prédéfinis dans les paramètres
function Experience(min, max) {
    var XP = Math.floor(Math.random() * (max - min + 1)) + min;
    return XP;
}
// fonction qui prend en paramètre un nombre dont on va lui ajouter un nombre aléatoire puis le retourner et sinon retourne un niveau 
// initialisation des XP
//let XP_initial = 0
// fonction fights qui va s'arreter lorsque les pv du personnage tomberont à zéro ou bien si le boss est vaincu
var resetColor = "\x1b[0m"; // On réinitialise la couleur à la couleur par défaut
var redText = "\x1b[31m"; // Texte en rouge
var greenText = "\x1b[32m"; // Texte en vert
var purpleText = "\x1b[35m"; // Texte en violet
var yellowText = "\x1b[33m"; // Texte en jaune
var blueText = "\x1b[34m"; // Texte en bleu foncé
function Tower() {
    var niveau = 1;
    var fight = 1;
    var hp3 = Bosses_json[0].hp;
    var hp2 = Players_json[0].hp;
    var hp1 = Enemies_json[11].hp;
    for (var i = 1; i < 100; i = i + 1) {
        var AttackOrHeal = readline.question("".concat(purpleText, "\n   ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n \n ").concat(resetColor));
        if (AttackOrHeal == "1") {
            console.log("".concat(blueText, "============== FIGHT ").concat(fight, " ==============\n").concat(resetColor));
            Enemies_json[11].hp = attack(Enemies_json[11].hp, Players_json[0].str);
            Players_json[0].hp = attack(Players_json[0].hp, Enemies_json[11].str);
            console.log("Hp of Players : ".concat(Math.round(Players_json[0].hp), "\n"));
            console.log("Hp of Enemy : ".concat(Math.round(Enemies_json[11].hp), "\n"));
            if (Enemies_json[11].hp === 0 && Players_json[0].hp > 0) {
                fight = fight + 1;
                console.log("L'énemie Bokoblin est mort !! Bravo, vous passez au niveau", niveau += 1, ".");
                if (niveau == 10) {
                    Bosses();
                    break;
                }
            }
            if (Enemies_json[11].hp === 0) {
                Enemies_json[11].hp = hp1;
            }
            if (Players_json[0].hp == 0) {
                console.log("".concat(redText, "Vous n'avez pas Heal \u00E0 temps donc vous \u00EAtes mort !!! \n").concat(resetColor));
                var question_fin1 = readline.question("".concat(yellowText, " \n Avez-vous aim\u00E9 ce jeu ?        1 : oui          2 : non ").concat(resetColor));
                var question_fin2 = readline.question("".concat(yellowText, " \n Avez-vous des questions sur les r\u00E8gles du jeu ?        1 : non           2 : non ").concat(resetColor));
                console.log("".concat(yellowText, " \n Tr\u00E8s bien, au revoir !!!").concat(resetColor, "\n"));
                console.log("".concat(yellowText, "Pour information, ce jeu \u00E0 \u00E9t\u00E9 r\u00E9alis\u00E9 par deux des meilleurs informaticiens au monde ... \n").concat(resetColor));
                var restart = readline.question("".concat(yellowText, "         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ").concat(resetColor));
                if (restart == '1') {
                    Players_json[0].hp = hp2;
                    Enemies_json[11].hp = hp1;
                    Bosses_json[0].hp = hp3;
                    Tower();
                }
                else {
                    console.log("Vous n'avez pas repondu 1, le jeu est donc terminé. \n");
                }
                break;
            }
        }
        else if (AttackOrHeal == "2") {
            Players_json[0].hp = heal(Players_json[0].hp);
            console.log("Hp of Player : ".concat(Math.round(Players_json[0].hp)));
            console.log("Hp of Enemy : ".concat(Math.round(Enemies_json[11].hp)));
        }
    }
}
Tower();
function Bosses() {
    while (Bosses_json[0].hp > 0 && Players_json[0].hp > 0) {
        var AttackOrHeal3 = readline.question("".concat(purpleText, "  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n").concat(resetColor));
        if (AttackOrHeal3 == '1') {
            Bosses_json[0].hp = attack(Bosses_json[0].hp, Players_json[0].str);
            Players_json[0].hp = attack(Players_json[0].hp, Bosses_json[0].str);
            console.log("Hp of Players : ".concat(Math.round(Players_json[0].hp), "\n"));
            console.log("Hp of Enemy : ".concat(Math.round(Bosses_json[0].hp), "\n"));
        }
        else if (AttackOrHeal3 == '2') {
            Players_json[0].hp = heal(Players_json[0].hp);
            console.log("Hp of Players : ".concat(Math.round(Players_json[0].hp)));
            console.log("Hp of Enemy : ".concat(Math.round(Bosses_json[0].hp)));
        }
        if (Players_json[0].hp == 0) {
            console.log("".concat(redText, "Le jeu s'arr\u00EAte car \u00EAtes mort contre le boss Ganon du 10\u00E8me \u00E9tage.").concat(resetColor));
            var question_fin3 = readline.question("".concat(yellowText, " \n Avez-vous aim\u00E9 ce jeu ?        1 : oui          2 : non ").concat(resetColor));
            var question_fin4 = readline.question("".concat(yellowText, " \n Avez-vous des questions sur les r\u00E8gles du jeu ?        1 : non           2 : non ").concat(resetColor));
            console.log("".concat(yellowText, " \n Tr\u00E8s bien, au revoir !!!").concat(resetColor, "\n"));
            console.log("".concat(yellowText, "Pour information, ce jeu \u00E0 \u00E9t\u00E9 r\u00E9alis\u00E9 par deux des meilleurs informaticiens au monde ... \n").concat(resetColor));
            var restart = readline.question("".concat(yellowText, "         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ").concat(resetColor));
            break;
        }
        if (Bosses_json[0].hp === 0) {
            console.log("".concat(greenText, "Bravo !! Vous avez r\u00E9ussi le 10\u00E8me \u00E9tage en vainquant le boss. \n ").concat(resetColor));
            var question_fin5 = readline.question("".concat(yellowText, " \n Avez-vous aim\u00E9 ce jeu ?        1 : oui          2 : non ").concat(resetColor));
            var question_fin6 = readline.question("".concat(yellowText, " \n Avez-vous des questions sur les r\u00E8gles du jeu ?        1 : non           2 : non ").concat(resetColor));
            console.log("".concat(yellowText, " \n Tr\u00E8s bien, au revoir !!!").concat(resetColor, "\n"));
            console.log("".concat(yellowText, "Pour information, ce jeu \u00E0 \u00E9t\u00E9 r\u00E9alis\u00E9 par deux des meilleurs informaticiens au monde ... \n").concat(resetColor));
            var restart = readline.question("".concat(yellowText, "         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ").concat(resetColor));
            break;
        }
    }
}
