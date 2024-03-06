console.log ('Ciao dal file js'); //control js file correctly linked

const userName = prompt ('Come ti chiami?'); //string | null
console.log(userName);

const userSurname = prompt ('Qual è il tuo cognome?'); //string | null
console.log(userSurname);

const userColor = prompt('Qual è il tuo colore preferito?'); //string | null
console.log(userColor);

console.log(userName + userSurname + userColor + 21); //string 

const maxValue = 99; //number
let randomValue = Math.floor((Math.random() * maxValue) + 1); //number
console.log(randomValue) //number

console.log(userName + userSurname + userColor + randomValue); //string 

let passwordGenerated = (userName + userSurname + userColor + randomValue); //string
alert ('La tua password generata è: ' + passwordGenerated ); //string