console.log ('Palindromi')

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA 

let userWord = prompt('Inserisci una parola!')
console.log(userWord)

// CREO UNA FUNZIONE PER POTER CONTROLLARE CHE LA PAROLA IN QUESTIONE SIA PALINDROMA 

function isWordPalindrome(text) {
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

const userWordReversed = isWordPalindrome(userWord)
console.log (userWordReversed)

if (userWordReversed === userWord) {
    console.log (`La parola ${userWord} è palindroma!`)
} else {
    console.log (`La parola ${userWord} non è palindroma!`)
}