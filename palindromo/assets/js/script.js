//console.log('hello');

/* 
##Palindroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma 

##Tools
- Prompt or input
- function if a word is palindrome or not
*/

/*https://booleancareers.slack.com/archives/C05D4V8PA3U/p1693495939957239*/

//Prompt 
let stringPrompt = prompt('Insert a word of your choice');

//Metto in variabile la parola al contrario
let reverseString = prompt('Write backwards the same word');

console.log(stringPrompt, reverseString);


//se sono uguali allora è palindroma
if (stringPrompt === reverseString){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
};


