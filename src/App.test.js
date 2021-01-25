import React from 'react';
import { shallow } from 'enzyme'

import { storeFactory } from './../test/testUtils'
import App from './App'

/**
 * @function setup
 * @param {object} state  - state for this setup
 * @return {shallowwrapper}
 */

const setup = (state={}) => {
    const store = storeFactory(state)
    const wrapper = shallow(<App store={store} />).dive().dive()
    return wrapper
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('has access to `secretWord` state', () => {
        const secretWord = 'party'
        const wrapper = setup({ secretWord })
        const secretWordProp = wrapper.instance().props.secretWord
        expect(secretWordProp).toBe(secretWord)
    })
    test('has access to `guessedWord` state', () => {
        const guessedWords = [
            {
                guessedWord: 'train',
                letterMatchCount: 3
            }
        ]
        const wrapper = setup({ guessedWords })
        const guessedWordsProp = wrapper.instance().props.guessedWords
        expect(guessedWordsProp).toBe(guessedWords)
    })
})
