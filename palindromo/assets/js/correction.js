
/* 
##Palindroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma 
*/

/*Correzione del mattino*/

/*console.log = ('ester'.split(''));
 const word = 'ester'



function split_this_word(word){
    //split usando il for   
    const splitted_word = [];

    for(let i = 0; i < word.length; i++){
        const char = word [i];
        splitted_word.push(char);
    }

    return splitted_word
}

const my_splitted_word = split_this_word('otto');

const reversed_word_as_array =[]
for(let i = my_splitted_word.length - 1; i >= 0; i--){
    const char = my_splitted_word[i];

    reversed_word_as_array.push(char)
}

console.log(reversed_word_as_array);

##Soluzione ideale (primo modo)
#Cos'è un palindromo? è una parola che letta al contrario si legge uguale. es. kayak

const word = ('ester');

//splitto la parola in un array
const splittedWord = word.split('');
//console.log(splittedWord);

//rovescio l'Array
const reversedArray = splittedWord.reverse();
console.log(reversedArray);

//riunisco l'array in una stringa
const reversedWord = reversedArray.join('')
console.log(word, reversedWord);




##-->Con una funzione (secondo modo)
const word = ('ester');

function reverseWord(word) {
    const revWord = word.split('').reverse().join('');
    console.log(revWord);

    oppure

    return word.split('').reverse().join('');
}

//const reversedWord = reverseWord(word);

function is_palindrom(word){
    if (word === reversedWord){
    return true
    }else {
    return false
    }
}

if(is_palindrom(word)){
    console.log('Palindrom')
}else{
    console.log('Not palindrom')
}


*/