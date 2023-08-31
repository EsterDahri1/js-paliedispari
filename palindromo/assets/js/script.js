//console.log('hello');

/* 
##Palindroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma 

##Tools
- Prompt or input
- function if a word is palindrome or not
*/

/* Technique of dividing, reversing and joining a string in js 

Website: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");

or 

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
*/

//Enunciate the string and the button
const userString = document.getElementById('word').value;

let send = document.querySelector('.send');

send.addEventListener('click', function(){
    console.log(userString);

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    let reverseWord = reverseString(userString);
    console.log(reverseWord);
})
