/**
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - Secret Word 
 * @param {number} secretWord - Number of letters matched between guessed word and secret word 
 */

export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetterSet = new Set(secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [ ...secretLetterSet].filter( letter => guessedLetterSet.has( letter )).length
}