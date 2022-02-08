# GITHUB API

<center>
    <small>Halima Rahimi </small>
</center>

---

## Toegankelijke Scripts

Om het project te starten gebruik je `npm start` in de command line.
Na dat je het project hebt gestart kan je via [http://localhost:3000/githubapi](http://localhost:3000/githubapi) de applicatie in je browser openen.

## ES6 functies

### String extension

Wanneer we de commitList doorgeven naar de `ListCommits.js` worde de lijst gefilterd en wordt gekeken of het gezochte term in de lijst voorkomt, hierbij is de `.includes()` gebruikt. Dit zorgt dat je op makkelijke en efficiënter manier kunt zoeken. Zo moet je geen for-loop opbouwen en elke keer gaan kijken of het gezochte term in lijst voorkomt.

### const keyword

Door heel het project wordt de `const` key-word heel vaak gebruikt. Op de twee plaatsen waar het key-woord `const` gebruikt wordt is vooral om te zorgen dat de value van de data niet veranderd en hier gaat het over url's en het ophalen van data.

## runnen van testen

Om de testen te runnen gebruik je `npm test`.

## Extra Commentaar

In de `App.js` zijn er twee useEffect methodes die gebruikt worden enerzijds om een api call te doen naar github en de repositories op te halen en dit gebeurt maar één keer. De tweede call wordt telkens aangeroepen elke keer als de `commits_url` aangepast wordt.

Voor het weergeven van de repositories is er gebruik gemaakt van `Card`. Het doorlinken naar de commits is er gebruik gemaakt van `Link`.

Bij `ListCommits.js` wordt er nagekeken of de lijst die we binnen krijgen niet leeg is, als de lijst niet leeg is dan worden de commits weergegeven en als het wel leeg is dan wordt een message `your list is empty` weergegeven.
