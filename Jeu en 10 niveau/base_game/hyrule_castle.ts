// Commençons par importer le fichier interface.ts :

import { Players } from "./interfaces" ;

// Tout d'abord nous importons les 3 fichiers json :

const fs = require('fs');

const content_bosses = fs.readFileSync('./json/bosses.json','utf-8')
const Bosses_json : Players[] = JSON.parse(content_bosses)

const content_enemies = fs.readFileSync('./json/enemies.json','utf-8')
const Enemies_json : Players[] = JSON.parse(content_enemies)

const content_players = fs.readFileSync('./json/players.json','utf-8')
const Players_json : Players[] = JSON.parse(content_players)

const readline = require('readline-sync') ;

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
function attack(ennemi_hp: number, player_str: number) {
    let damage = ennemi_hp - player_str;
    if (damage <= 0) {
      damage = 0
      return damage
    }
    return damage
}

// fonction heal qui prend en paramètre les HP du joueur dans laquelle je retourne les HP du joueur
function heal(player_hp: number){
    let healing = player_hp/2
    let total_healing = player_hp + healing
    if (total_healing > 60) {
      total_healing = 60
      return total_healing
    }
    return total_healing
}
    


// fonction fights qui va s'arreter lorsque les pv du personnage tomberont à zéro ou bien si le boss est vaincu
const resetColor = "\x1b[0m"; // On réinitialise la couleur à la couleur par défaut
const redText = "\x1b[31m";   // Texte en rouge
const greenText = "\x1b[32m"; // Texte en vert
const purpleText = "\x1b[35m"; // Texte en violet
const yellowText =  "\x1b[33m" ; // Texte en jaune
const blueText = "\x1b[34m"; // Texte en bleu foncé

function Tower() {

        const hp1 = Enemies_json[11].hp;
        let niveau = 1
        let fight = 1

        for (let i = 1 ; i < 20 ; i = i + 1) {
          const AttackOrHeal = readline.question(`${purpleText}  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n${resetColor}`);
          console.log(`${blueText}============== FIGHT ${fight} ==============\n${resetColor}`);
          if (AttackOrHeal == "1") {
            Enemies_json[11].hp = attack(Enemies_json[11].hp, Players_json[0].str);
            Players_json[0].hp = attack(Players_json[0].hp, Enemies_json[11].str)
            console.log(`Hp of Players : ${Players_json[0].hp}\n`)
            console.log(`Hp of Enemy : ${Enemies_json[11].hp}\n`)
            if (Players_json[0].hp == 0) {
              console.log("Vous n'avez pas Heal à temps donc vous êtes mort !!! \n");
              const restart = readline.question(`${yellowText}           Voulez-vous relancez ?\n\n           1 : oui   /   2 : non ${resetColor}`);
              if (restart == '1'){
                Tower()
              }
              else if (restart == '2') {
                console.log("Vous avez refusé, le jeu est donc terminé.")
              }

            } 
            if (Enemies_json[11].hp <= 0) {
              Enemies_json[11].hp = hp1;
              fight = fight + 1
              console.log("L'énemie Bokoblin est mort !! Bravo, vous passez au niveau ",niveau += 1,".")
              if (niveau == 10) {
                Bosses()
                break
              }
            } 
          } 
          else if (AttackOrHeal == "2") {
            Players_json[0].hp = heal(Players_json[0].hp)
            console.log(`Hp of Player : ${Players_json[0].hp}`)
            console.log(`Hp of Enemy : ${Enemies_json[11].hp}`) 
          }
        }

}

Tower() 


function Bosses() {
  while (Bosses_json[0].hp > 0 && Players_json[0].hp > 0) {
    const AttackOrHeal2 = readline.question(`${purpleText}  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n${resetColor}`);
    if (AttackOrHeal2 == '1') {
      attack(Bosses_json[0].hp, Players_json[0].str) 
      attack(Players_json[0].hp,Bosses_json[0].str)
    }
    else if (AttackOrHeal2 == '2') {
      heal(Players_json[0].hp) ;
    }
  }
  if (Enemies_json[11].hp === 0) {
    console.log(`${greenText}Bravo !! Vous avez réussi le 10ème étage en vainquant le boss.${resetColor}`);
  }
  else if (Players_json[0].hp === 0) {
    console.log(`${redText}Le jeu s'arrête car êtes mort contre le boss Ganon du 10ème étage.${resetColor}`);
  }
}


