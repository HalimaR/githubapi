# GITHUB API

<center>
    <small>Halima Rahimi </small>
</center>

---

## Toegankelijke Scripts

Om het project te starten gebruik je `npm start` in de command line.
Nadat je het project hebt gestart kan je via [http://localhost:3000/githubapi](http://localhost:3000/githubapi) de applicatie in je browser openen.

## ES6 functies

### String extension

Wanneer we de commitList doorgeven naar de `ListCommits.js` wordt de lijst gefilterd en wordt er gekeken of de gezochte term in de
lijst voorkomt, hierbij is de `.includes()` gebruikt. Dit zorgt ervoor dat je op een makkelijke en efficiënte manier kunt zoeken.
Zo moet je geen for-loop opbouwen en elke keer gaan kijken de gezochte term in de lijst voorkomt.

### const keyword

Door heel het project wordt het `const` keyword gebruikt. Op de plaatsen waar het keyword `const` gebruikt
wordt is om te zorgen dat de value van de data niet kan veranderen, het gaat hier oa. over url's en de response van de API.

## runnen van testen

Om de testen te runnen gebruik je `npm test`.
Er zit ook één end-to-end test namelijk `repositories_spec.js` en om deze test te laten runnen gebruik je `npx cypress open`.

## Extra Commentaar

In de `App.js` zijn er twee useEffect methodes die gebruikt worden enerzijds om een api call te doen naar github en de
repositories op te halen en dit gebeurt maar één keer. Anderzijds de call die wordt aangeroepen telkens de `commits_url` aangepast wordt.

Voor het weergeven van de repositories is er gebruik gemaakt van `Card`. Het doorlinken naar de commits is er gebruik gemaakt van `Link`.

Bij `ListCommits.js` wordt er nagekeken of de lijst die we binnen krijgen niet leeg is, als de lijst niet leeg is dan
worden de commits weergegeven en als het wel leeg is dan wordt een message `your list is empty` weergegeven.
