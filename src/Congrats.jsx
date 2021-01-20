import React from 'react';
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @paramg {object} props - React Props.
 * @return {JSX.Element} - Rendered component (or null)
 */
const Congrats = (props) =>{
    if ( props.success ) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulaions! You guessed the word!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats