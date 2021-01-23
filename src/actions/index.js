

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
}

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessWord  - Guessed Word
 * @returns {function} - redux thunk function
     
 }}
 */

export const guessWord = (guessWord) => {
    return function(dispatch, getState) {

    }
}