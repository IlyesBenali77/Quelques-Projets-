<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>EvanLoto :</title>
</head>

<body>
    <header>
        <h1><b>Bonjour et bienvenue</br></h1>
        <h2>Règle : lancer la page et regarder les nombres en bas à gauche, s'ils sont identiques vous gagner 1 000 000 000 000 000 d'euro !</h2>
    </header>
<main>
      <img class="photo" src="./2288241-casino-jeu-fond-de-jeu-avec-machine-a-sous-et-roulette-roue-gratuit-vectoriel 2.jpg" alt="Chargement du jeu">
      <table>
      <tr>
      <td><?php echo $nb1 = rand(0,50); ?></td>
      <td><?php echo $nb2 = rand(0,50); ?></td>
      <td><?php echo $nb3 = rand(0,50); ?></td>
      </table>
      
      <h2>
      <?php
      if ($nb1 === $nb2 && $nb2 === $nb3) {
        echo "Vous avez gagné !";
      }
      else {
        echo "Perdu, vous pouvez retenter le coup !";
      }
      ?>

      </h2>
</main>
</body>
</html>

<style>

    body {
        background-color: white;
    }
    head, header {
        color : black
    }
    header {
        text-align: center;
    }
    .photo {
        text-align: center;
        width : 40%;
        height : 40%;
        margin-left: 350px;
        margin-top: 50px;
    }
</style>