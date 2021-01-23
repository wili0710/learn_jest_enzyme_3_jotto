import React from 'react';
import PropTypes from 'prop-types'

const GuessedWords = ( props ) =>  {
    let contents
    if ( props.guessedWords.length === 0 ) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret words!
            </span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map(( val, index ) => {
            return(
                <tr data-test="guessed-word" key={index}>
                    <td>
                        { val.guessedWord }
                    </td>
                    <td>
                        { val.letterMatchCount }
                    </td>
                </tr>
            )
        })
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>
                                Guess
                            </th>
                            <th>
                                Matching Letters
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWords: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords