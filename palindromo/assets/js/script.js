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

/*//Prompt 
let stringPrompt = prompt('Insert a word of your choice');

//Metto in variabile la parola al contrario
let reverseString = prompt('Write backwards the same word');

console.log(stringPrompt, reverseString);


//se sono uguali allora è palindroma
if (stringPrompt === reverseString){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
};*/

//CORREZIONE

let word = prompt('Insert a word');
let wordCase = word.toLowerCase();
console.log(word);

function split_this_word(word) {
    const splitted_word = [];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        splitted_word.push(char);
    }

    return splitted_word
    
}

const my_splitted_word = split_this_word(word);

const reversed_word_as_array = [];

for (let i = my_splitted_word.length - 1; i >= 0; i--) {
    const char = my_splitted_word[i];

    reversed_word_as_array.push(char);
   
}

console.log(reversed_word_as_array);
const reverseWord = reversed_word_as_array.join('')
console.log(reverseWord);


function is_palindrom(word){
    if (word === reverseWord){
    return true
    }else {
    return false
    }
}

if(is_palindrom(word)){
    console.log('Palindrom')
    document.querySelector('.result').innerHTML = 'Palindrom'
}else{
    console.log('Not palindrom')
    document.querySelector('.result').innerHTML = 'Not palindrom'
}