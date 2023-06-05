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


// Definisco una lista che conterrá i nomi di chi puó accedere
const list = ['user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com', 'user4@gmail.com'];
// rimangio in attesa del click sul bottone
const button = document.getElementById('submit-mail');
const addEmail = document.getElementById('add-new-mail');
const printDiv = document.getElementById('print-email-find');
let text='Non hai inserito nulla, non posso controllare!';
//ottengo email digitata da utente
const emailForm = document.getElementById('email-input');
// Evento:in attesa del click sul bottone
button.addEventListener('click', function () {
    if(emailForm.value == '') {
        text = 'Non hai inserito nulla, non posso controllare!';
    }
    else {
        //leggo la lista e controllo se la mail é presente
        let check=false;
        for (let i = 0; i < list.length && !check; i++) {
            //per ogni elemento della lista controllo se é presente il valore. aggiunto un break per non usare un do - while / while
            if (emailForm.value == list[i]) {
                text = 'la tua email risulta essere presente nella lista';
                addEmail.classList.remove('d-block');
                addEmail.classList.add('d-none');
                check=true;
            }
            else { //mostra bottone aggiungi
                text = 'La tua email non risulta essere presente nella lista';
                addEmail.classList.remove('d-none');
                addEmail.classList.add('d-block');
            }
        }
    }
    printDiv.innerHTML = text;
    //aggiunta email alla lista
});
const addbtn = document.getElementById('add-mail-btn');
addbtn.addEventListener('click',function() {
    list.push(emailForm.value);
    text = 'Email inserita correttamente nella lista';
    printDiv.innerHTML = text;
    addEmail.classList.remove('d-block');
    addEmail.classList.add('d-none');
    console.log(printDiv.innerHtml);
});