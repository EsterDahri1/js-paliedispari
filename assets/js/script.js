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
let even = document.getElementById('Even').value;
let odd = document.getElementById('Odd').value;

invia.addEventListener('click', function(){
    let userNumber = Number(document.getElementById('userNumber').value);
    console.log(userNumber);

    //Generate a random pcNumber with function
    function rangePcNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let pcNumber = rangePcNumber(1, 5);
    console.log(pcNumber);

    //Use fuction to sum numbers
    function sumPcUser(Pc, User) {
        return Pc + User; 
    }

    let sum = sumPcUser(pcNumber, userNumber);
    console.log(sum);

    even = 'true';
    odd = 'false';

    if (sum % 2 === 0) {
        sum = even
    } else {
        sum = odd
    }

    console.log(sum);

    //Declare who won
    if(sum == even && odd){
        console.log('Hai vinto!');
        document.querySelector('.result').innerHTML = 'Hai vinto!'
    }else {
        console.log('Hai perso!');
        document.querySelector('.result').innerHTML = 'Hai perso!'
    }
});




