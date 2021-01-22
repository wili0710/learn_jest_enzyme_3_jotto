import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from './../src/reducers'

/**
 * Create a testing store with imported reducers, middleware, and initial state,
 * globals: rootReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - redux store
 */
export const storeFactory = ( initialState ) => {
    return createStore(rootReducer, initialState)
}
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper. 
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper} 
 */
export const findByTestAttr = ( wrapper, val ) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProp = ( component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        conformingProps, 
        'props', 
        component.name)
    expect(propError).toBeUndefined()
}