import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProp } from './../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords:[
        { guessedWords: "train", letterMatchCount: 3 }
    ]
}

/**
 * Factory funtion to create a ShallowWrapper for the GuessedWords component
 * @Function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */

const setup = ( props = {} ) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow( <GuessedWords { ...setupProps } />)
}

test('does not throw warning with expected props', () => {
    checkProp( GuessedWords, defaultProps )
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })
    test('render without error', () => {
        const component = findByTestAttr( wrapper, 'component-guessed-words' )
        expect( component.length ).toBe(1)
    })
    test('render instructions to guess a word', () => {
        const instructions = findByTestAttr( wrapper, 'guess-instructions' )
        expect( instructions.text().length ).not.toBe(0)
    })
})

describe('if there are words guessed', () => {

})