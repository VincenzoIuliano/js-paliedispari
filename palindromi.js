console.log ('Palindromi')

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA 

let userWord = prompt('Inserisci una parola!')
console.log(userWord)

// CREO UNA FUNZIONE PER POTER CONTROLLARE CHE LA PAROLA IN QUESTIONE SIA PALINDROMA 

function wordPalindrome(text) {
    let newWord = ''

    // INVERTO LA STRINGA USERWORD 
    for (let i=0; i < userWord.length; i++) {
    //    console.log(i)
        const char = userWord.at(-i - 1)
		// console.log(i, char)
        newWord += char
    }
    return newWord
}

// CREO UNA VARIABILE A CUI ASSEGNO LA PAROLA AL CONTARIO

const userWordReversed = wordPalindrome(userWord)
console.log (userWordReversed)

// CONTROLLO CHE PAROLA ORIGINALE E PAROLA AL CONTRARIO SIANO UGUALI

if (userWordReversed === userWord) {
    console.log (`La parola ${userWord} è palindroma!`)
} else {
    console.log (`La parola ${userWord} non è palindroma!`)
}