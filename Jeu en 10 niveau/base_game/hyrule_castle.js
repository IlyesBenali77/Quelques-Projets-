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
// Créons maintenant la fonction GetRandomenemy qui va prendre un ennemi au hasard
//function GetRandomEnemy() {
//  let enemy_already_choose: string[] = [];
//  const arrayEnemies : Players[]= Enemies_json ;
// for (let i = 0; i < enemy_already_choose.length; i = i + 1){
//     let RandomEnemies = arrayEnemies[Math.floor(Math.random() *arrayEnemies.length)];
//     if (!enemy_already_choose.includes(RandomEnemies.name)) { 
//           return RandomEnemies ;
//       }
//  }
//}
//fonction attaque qui prend en paramètre les HP de l'ennemi et la force du joueur dans laquelle je retourne les dommages infligés par le joueur
function attack(ennemi_hp, player_str) {
    var damage = ennemi_hp - player_str;
    if (damage <= 0) {
        damage = 0;
        return damage;
    }
    return damage;
}
// fonction heal qui prend en paramètre les HP du joueur dans laquelle je retourne les HP du joueur
function heal(player_hp) {
    var healing = player_hp / 2;
    var total_healing = player_hp + healing;
    if (total_healing > 60) {
        total_healing = 60;
        return total_healing;
    }
    return total_healing;
}
// fonction fights qui va s'arreter lorsque les pv du personnage tomberont à zéro ou bien si le boss est vaincu
var resetColor = "\x1b[0m"; // On réinitialise la couleur à la couleur par défaut
var redText = "\x1b[31m"; // Texte en rouge
var greenText = "\x1b[32m"; // Texte en vert
var purpleText = "\x1b[35m"; // Texte en violet
var yellowText = "\x1b[33m"; // Texte en jaune
var blueText = "\x1b[34m"; // Texte en bleu foncé
function Tower() {
    var hp1 = Enemies_json[11].hp;
    var niveau = 1;
    var fight = 1;
    for (var i = 1; i < 20; i = i + 1) {
        var AttackOrHeal = readline.question("".concat(purpleText, "  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n").concat(resetColor));
        console.log("".concat(blueText, "============== FIGHT ").concat(fight, " ==============\n").concat(resetColor));
        if (AttackOrHeal == "1") {
            Enemies_json[11].hp = attack(Enemies_json[11].hp, Players_json[0].str);
            Players_json[0].hp = attack(Players_json[0].hp, Enemies_json[11].str);
            console.log("Hp of Players : ".concat(Players_json[0].hp, "\n"));
            console.log("Hp of Enemy : ".concat(Enemies_json[11].hp, "\n"));
            if (Players_json[0].hp == 0) {
                console.log("Vous n'avez pas Heal à temps donc vous êtes mort !!! \n");
                var restart = readline.question("".concat(yellowText, "           Voulez-vous relancez ?\n\n           1 : oui   /   2 : non ").concat(resetColor));
                if (restart == '1') {
                    Tower();
                }
                else if (restart == '2') {
                    console.log("Vous avez refusé, le jeu est donc terminé.");
                }
            }
            if (Enemies_json[11].hp <= 0) {
                Enemies_json[11].hp = hp1;
                fight = fight + 1;
                console.log("L'énemie Bokoblin est mort !! Bravo, vous passez au niveau ", niveau += 1, ".");
                if (niveau == 10) {
                    Bosses();
                    break;
                }
            }
        }
        else if (AttackOrHeal == "2") {
            Players_json[0].hp = heal(Players_json[0].hp);
            console.log("Hp of Player : ".concat(Players_json[0].hp));
            console.log("Hp of Enemy : ".concat(Enemies_json[11].hp));
        }
    }
}
Tower();
function Bosses() {
    while (Bosses_json[0].hp > 0 && Players_json[0].hp > 0) {
        var AttackOrHeal2 = readline.question("".concat(purpleText, "  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n").concat(resetColor));
        if (AttackOrHeal2 == '1') {
            attack(Bosses_json[0].hp, Players_json[0].str);
            attack(Players_json[0].hp, Bosses_json[0].str);
        }
        else if (AttackOrHeal2 == '2') {
            heal(Players_json[0].hp);
        }
    }
    if (Enemies_json[11].hp === 0) {
        console.log("".concat(greenText, "Bravo !! Vous avez r\u00E9ussi le 10\u00E8me \u00E9tage en vainquant le boss.").concat(resetColor));
    }
    else if (Players_json[0].hp === 0) {
        console.log("".concat(redText, "Le jeu s'arr\u00EAte car \u00EAtes mort contre le boss Ganon du 10\u00E8me \u00E9tage.").concat(resetColor));
    }
}
