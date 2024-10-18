console.log ('Pari e dispari')

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log (userNumber)

// CHIEDO ALL'UTENTE DI SCEGLIERE TRA PARI E DISPARI 
let userOddOrEven = prompt('Scegli: la somma sarà pari o dispari?')
console.log (userOddOrEven)

// GENERO UN SECONDO NUMERO DA 1 A 5 CON UNA FUNZIONE 
function randomComputerNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const numberComputer = randomComputerNumber(1,5)
console.log (numberComputer)

// CREO LA FUNZIONE PER VERIFICARE SE IL NUMERO E' PARI
let evenOrOdd = ''
function isEven (n) { 
    const resto = n % 2
    if (resto === 0) {
        evenOrOdd += ('PARI')
    } else {
        evenOrOdd += ('DISPARI')
    }
}

// CONTROLLO SE LA SOMMA DEL NUMERO GENERATO DAL COMPUTER E QUELLO INSERITO DALL'UTENTE E' PARI O MENO 

isEven (userNumber + numberComputer)
console.log (evenOrOdd)

if (userOddOrEven.toUpperCase === evenOrOdd) {
    console.log ('Complimenti, hai vinto!')
} else {
    console.log ('Mi dispiace, stavolta hai perso!')
}




