import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* En-tête */}
        <div className="photo">
          <img src="./Ma-tete.png" alt="Mon profil" />
        </div>
        <div>
          <div className="nom-prenom"><b>BENALI Ilyes</b></div>
          <div className="numero"><b>Numéro de téléphone : 07.78.84.81.14</b></div>
          <div className="adressmail"><b>Adresse mail : benaliilyes60@gmail.com</b></div>
          <div className="adresse"><b>Adresse : 85 rue de la cocarde, 77550 Moissy-Cramayel</b></div>
          <div className="liensss">
            <ul>
              <li><a href="My-portfolio.html">My portfolio</a></li>
              <li><a href="contact.html">Contact me</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="Pour-les-3">
        {/* Contenu principal */}
        <div className="liens">
          <h2>Liens :</h2>
          <ul>
            <li><a href="https://github.com/IlyesBenali77/Quelques-Projets-">Voici mon GitHub</a></li>
            <li><a href="https://www.youtube.com/watch?v=9qY-UYjvP0s&pp=ygUSdmlkZW8gaW5mb3JtYXRpcXVl">Vidéo de débutant sur l'informatique</a></li>
          </ul>
        </div>

        <div className="les-2">
          <div className="competences">
            <h2>Compétences :</h2>
            <ul>
              {/* Liste des compétences */}
            </ul>
          </div>

          <div className="experiences">
            <h2>Expériences :</h2>
            <ol>
              {/* Liste des expériences */}
            </ol>
            <h2>Parcours scolaire :</h2>
            <ul>
              {/* Liste du parcours scolaire */}
            </ul>
          </div>
        </div>
      </div>

      <footer>
        {/* Pied de page */}
        <p>BENALI Ilyes </p>
      </footer>
    </div>
  );
}

export default App;
