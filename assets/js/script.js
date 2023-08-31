//console.log('hello to try link');

/*Pari e Dispari
L’utente sceglie pari o dispari
inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/


/*
#Tools 
- Put inputs in html for user choice
- Generate a random number with function
- Use function to sum numbers
- Use function to determine if even else odd
- Declare who won
*/

//Add button use 
let invia = document.querySelector('.invia');

invia.addEventListener('click', function(){
    let userNumber = Number(document.getElementById('userNumber').value);
    console.log(userNumber);
    
    //Generate a random pcNumber with function
    function rangePcNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let pcNumber = rangePcNumber(1, 5);
    console.log(pcNumber);
})




