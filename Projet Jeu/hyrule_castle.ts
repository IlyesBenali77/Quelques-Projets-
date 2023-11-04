// Commençons par importer le fichier interface.ts :

import { Players } from "./3_interfaces" ;

// Tout d'abord nous importons les 3 fichiers json :

const fs = require('fs');

const content_bosses = fs.readFileSync('./json/bosses.json','utf-8')
const Bosses_json : Players[] = JSON.parse(content_bosses)

const content_enemies = fs.readFileSync('./json/enemies.json','utf-8')
const Enemies_json : Players[] = JSON.parse(content_enemies)

const content_players = fs.readFileSync('./json/players.json','utf-8')
const Players_json : Players[] = JSON.parse(content_players)

const readline = require('readline-sync') ;


//fonction attaque qui prend en paramètre les HP de l'ennemi et la force du joueur dans 
//laquelle je retourne les dommages infligés par le joueur
function attack(ennemi_hp: number, player_str: number) {
    let damage = ennemi_hp - player_str;
    if (damage <= 0) {
      damage = 0
      return damage
    }
    return damage
}

// fonction heal qui prend en paramètre les HP du joueur dans
// laquelle je retourne les HP du joueur
function heal(player_hp: number){
    let healing = player_hp/2
    let total_healing = player_hp + healing
    if (total_healing > 60) {
      total_healing = 60
      return total_healing
    }
    return total_healing
}

// fonction experience qui retourne et affiche un nombre aléatoire entre un mini et un maxi prédéfinis dans les paramètres
function Experience(min: number, max: number) {
  let XP = Math.floor(Math.random() * (max - min + 1)) + min;
  return XP 
}

// fonction qui prend en paramètre un nombre dont on va lui ajouter un nombre aléatoire puis le retourner et sinon retourne un niveau 


// initialisation des XP
//let XP_initial = 0
    


// fonction fights qui va s'arreter lorsque les pv du personnage tomberont à zéro ou bien si le boss est vaincu
const resetColor = "\x1b[0m"; // On réinitialise la couleur à la couleur par défaut
const redText = "\x1b[31m";   // Texte en rouge
const greenText = "\x1b[32m"; // Texte en vert
const purpleText = "\x1b[35m"; // Texte en violet
const yellowText =  "\x1b[33m" ; // Texte en jaune
const blueText = "\x1b[34m"; // Texte en bleu foncé

function Tower() {
        let niveau = 1
        let fight = 1
        const hp3 = Bosses_json[0].hp
        const hp2 = Players_json[0].hp
        const hp1 = Enemies_json[11].hp
        for (let i = 1 ; i < 100 ; i = i + 1) {
          const AttackOrHeal = readline.question(`${purpleText}\n   ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n \n ${resetColor}`);
          if (AttackOrHeal == "1") {
            console.log(`${blueText}============== FIGHT ${fight} ==============\n${resetColor}`);
            Enemies_json[11].hp = attack(Enemies_json[11].hp, Players_json[0].str);
            Players_json[0].hp = attack(Players_json[0].hp, Enemies_json[11].str)
            console.log(`Hp of Players : ${Math.round(Players_json[0].hp)}\n`)
            console.log(`Hp of Enemy : ${Math.round(Enemies_json[11].hp)}\n`)
            if (Enemies_json[11].hp === 0 && Players_json[0].hp > 0) {
               fight = fight + 1
               console.log("L'énemie Bokoblin est mort !! Bravo, vous passez au niveau",niveau += 1, ".")
               if (niveau == 10) {
                 Bosses()
                 break
               }
            } 
            if (Enemies_json[11].hp === 0) {
              Enemies_json[11].hp = hp1
            }
            if (Players_json[0].hp == 0) {
              console.log(`${redText}Vous n'avez pas Heal à temps donc vous êtes mort !!! \n${resetColor}`)
              const question_fin1 = readline.question(`${yellowText} \n Avez-vous aimé ce jeu ?        1 : oui          2 : non ${resetColor}`)
              const question_fin2 = readline.question(`${yellowText} \n Avez-vous des questions sur les règles du jeu ?        1 : non           2 : non ${resetColor}`)
              console.log(`${yellowText} \n Très bien, au revoir !!!${resetColor}\n`)
              console.log(`${yellowText}Pour information, ce jeu à été réalisé par deux des meilleurs informaticiens au monde ... \n${resetColor}`)
              const restart = readline.question(`${yellowText}         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ${resetColor}`);
              if (restart == '1'){
                Players_json[0].hp = hp2
                Enemies_json[11].hp = hp1
                Bosses_json[0].hp = hp3
                Tower()
              }
              else {
                console.log("Vous n'avez pas repondu 1, le jeu est donc terminé. \n")
              }
              break
            } 
          } 
          else if (AttackOrHeal == "2") {
            Players_json[0].hp = heal(Players_json[0].hp)
            console.log(`Hp of Player : ${Math.round(Players_json[0].hp)}`)
            console.log(`Hp of Enemy : ${Math.round(Enemies_json[11].hp)}`) 
          }
        }
}

Tower() 


function Bosses() {
  while (Bosses_json[0].hp > 0 && Players_json[0].hp > 0) {
    const AttackOrHeal3 = readline.question(`${purpleText}  ---------   OPTIONS   --------- \n  1 : Attack            2 : Heal \n${resetColor}`);
    if (AttackOrHeal3 == '1') {
      Bosses_json[0].hp = attack(Bosses_json[0].hp, Players_json[0].str) 
      Players_json[0].hp = attack(Players_json[0].hp,Bosses_json[0].str)
      console.log(`Hp of Players : ${Math.round(Players_json[0].hp)}\n`)
      console.log(`Hp of Enemy : ${Math.round(Bosses_json[0].hp)}\n`)
    }
    else if (AttackOrHeal3 == '2') {
      Players_json[0].hp = heal(Players_json[0].hp) ;
      console.log(`Hp of Players : ${Math.round(Players_json[0].hp)}`)
      console.log(`Hp of Enemy : ${Math.round(Bosses_json[0].hp)}`)
    }
    if (Players_json[0].hp == 0) {
      console.log(`${redText}Le jeu s'arrête car êtes mort contre le boss Ganon du 10ème étage.${resetColor}`);
      const question_fin3 = readline.question(`${yellowText} \n Avez-vous aimé ce jeu ?        1 : oui          2 : non ${resetColor}`)
      const question_fin4 = readline.question(`${yellowText} \n Avez-vous des questions sur les règles du jeu ?        1 : non           2 : non ${resetColor}`)
      console.log(`${yellowText} \n Très bien, au revoir !!!${resetColor}\n`)
      console.log(`${yellowText}Pour information, ce jeu à été réalisé par deux des meilleurs informaticiens au monde ... \n${resetColor}`)
      const restart = readline.question(`${yellowText}         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ${resetColor}`);
      break
    }
    if (Bosses_json[0].hp === 0) {
      console.log(`${greenText}Bravo !! Vous avez réussi le 10ème étage en vainquant le boss. \n ${resetColor}`);
      const question_fin5 = readline.question(`${yellowText} \n Avez-vous aimé ce jeu ?        1 : oui          2 : non ${resetColor}`)
      const question_fin6 = readline.question(`${yellowText} \n Avez-vous des questions sur les règles du jeu ?        1 : non           2 : non ${resetColor}`)
      console.log(`${yellowText} \n Très bien, au revoir !!!${resetColor}\n`)
      console.log(`${yellowText}Pour information, ce jeu à été réalisé par deux des meilleurs informaticiens au monde ... \n${resetColor}`)
      const restart = readline.question(`${yellowText}         Voulez-vous relancer ?\n\n           1 : oui   /   2 : non \n ${resetColor}`);
      break
    }
    
  }
  
} 
