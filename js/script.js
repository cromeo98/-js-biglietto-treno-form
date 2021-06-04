// Creiamo un layout come da screenshot, ma personalizzabile.
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9 incluso)
// Prezzo calcolato in base all'esercizio visto in precedenza
// Categoria selezionata dall'utente
// Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
// Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.
// Bonus: aggiungete qualche controllo sui dati di input!
// Buon lavoro e buon viaggio! :monorotaia:

// 1) Creiamo un finto biglietto del treno con:

// prima di tutto dichiaro una variabile per il bottono genera
var genera = document.getElementById('genera');

// aggiungo l'add event listener: gli dico cosa deve fare quando passo sopra la var "genera" (che corrisponde al bottone con id "genera" nell'HTML) e ci clicco sopra (click)

genera.addEventListener("click", function(){

// Nome passeggero
// dichiaro una variabile nella quale salvare il valore dell'input tag con id="name"
    var userName = document.getElementById('name').value;
    console.log(userName);
// inserisco il valore estratto all'interno del tag con id="user-name"
    document.getElementById('user-name').innerHTML = userName;
 
// Codice treno (numero casuale tra 90000 e 100000 escluso)
    var randomNum = Math.floor(Math.random() * 10000 ) + 90000;

// inserisco il valore estratto all'interno del tag con id="codice-cp"
    document.getElementById('codice-cp').innerHTML = randomNum;
})

// Numero carrozza (numero casuale tra 1 e 9 incluso)
// Prezzo calcolato in base all'esercizio visto in precedenza
// Categoria selezionata dall'utente