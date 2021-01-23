import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './../src/reducers'
import { middlewares } from './../src/configureStore'

/**
 * Create a testing store with imported reducers, middleware, and initial state,
 * globals: rootReducer, middlewares
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - redux store
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
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