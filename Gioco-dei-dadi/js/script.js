const btnGen = document.getElementById('number-gen');
btnGen.addEventListener('click', function () {
    //Genera due numeri random da 1 a 6
    const numPc = Math.floor(Math.random() * 6) + 1;
    const numUser = Math.floor(Math.random() * 6) + 1;
    // Genera testo con valori numeri
    let text = 'Numero computer: ' + numPc + ' - Numero giocatore: ' + numUser;
    //stampo nel div apposito
    const numPrint = document.getElementById('number-print');
    numPrint.innerHTML = text;
    if (numPc == numUser) {
        text = 'I numeri sono uguali';
    } else if (numPc > numUser) {
        text = 'Il numero del giocatore é minore del numero del PC';
    } else {
        text = 'Il numero del giocatore é maggiore del numero del PC';
    }
    // Div che conterrá stampa risultato
    const divPrint = document.getElementById('print-result');
    divPrint.innerHTML = text;
});