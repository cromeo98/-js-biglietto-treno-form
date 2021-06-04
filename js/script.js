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

//Creiamo un finto biglietto del treno con:

// prima di tutto dichiaro una variabile per il bottono genera
var genera = document.getElementById('genera');

// aggiungo l'add event listener: gli dico cosa deve fare quando passo sopra la var "genera" (che corrisponde al bottone con id "genera" nell'HTML) e ci clicco sopra (click)

genera.addEventListener("click", function(){

// Al click su "Genera" appare la schermata con le caratteristiche del biglietto.
    document.getElementById('user-ticket').className = "d-block"

// Nome passeggero
    var userName = document.getElementById('name').value; // dichiaro una variabile nella quale salvare il valore dell'input tag con id="name"

    document.getElementById('user-name').innerHTML = userName; // inserisco il valore estratto all'interno del tag con id="user-name"
 
// Categoria selezionata dall'utente
    var fasciaEta = document.getElementById('fascia-eta').value; // dichiaro una variabile nella quale salvare il valore dell'input tag con id="fascia-eta"

    var fasciaEtaFirstUpp = fasciaEta.charAt(0).toUpperCase() + fasciaEta.slice(1).toLowerCase(); // cambio la prima lettera in lettera maiuscola

// Prezzo calcolato in base all'esercizio visto in precedenza
    var km = document.getElementById('km').value; // dichiaro una variabile nella quale salvare il valore dell'input tag con id="km"

    // calcoli su scontistiche dello scorso esercizio
    var pricePerKm = km * 0.21;

    if (fasciaEta == 'minorenne'){
        pricePerKm = pricePerKm - pricePerKm * 20 / 100;
        document.getElementById('prezzo').innerHTML = pricePerKm.toFixed(2) + ' €';
        document.getElementById('offerta').innerHTML = 'Sconto ' +fasciaEtaFirstUpp; // inserisco il valore estratto all'interno del tag con id="offerta"

    } else if (fasciaEta == 'over65'){
        pricePerKm = pricePerKm - pricePerKm * 40 / 100;
        document.getElementById('prezzo').innerHTML = pricePerKm.toFixed(2) + ' €';
        document.getElementById('offerta').innerHTML = 'Sconto ' +fasciaEtaFirstUpp; // inserisco il valore estratto all'interno del tag con id="offerta"
    } else{
        document.getElementById('prezzo').innerHTML = pricePerKm.toFixed(2) + ' €';
        document.getElementById('offerta').innerHTML = 'Non ci sono offerte attive per la tua fascia d\'età'; // inserisco il valore estratto all'interno del tag con id="offerta"
    }


// Numero carrozza (numero casuale tra 1 e 9 incluso)
    var randomNumCarrozza = Math.floor(Math.random() * 9 ) + 1; //creo num random

    document.getElementById('carrozza').innerHTML = randomNumCarrozza; // inserisco il valore estratto all'interno del tag con id="carrozza"

// Codice treno (numero casuale tra 90000 e 100000 escluso)
    var randomNum = Math.floor(Math.random() * 10000 ) + 90000; //creo num random

    document.getElementById('codice-cp').innerHTML = randomNum; // inserisco il valore estratto all'interno del tag con id="codice-cp"

})

// Al click su "Annulla" dobbiamo ripulire il form e far sparire la sezione che calcola il prezzo del biglietto.
var annulla = document.getElementById('annulla');

// aggiungo l'add event listener: gli dico cosa deve fare quando passo sopra la var "genera" (che corrisponde al bottone con id "annulla" nell'HTML) e ci clicco sopra (click)

annulla.addEventListener("click", function(){

    document.getElementById('user-ticket').className = "d-none"
    document.getElementById('name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('fascia-eta').value = "";

})
