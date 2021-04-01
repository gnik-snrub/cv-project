import React from 'react'
import PropTypes from 'prop-types'
import './style/Button.css'

const Button = (props) => {
    const task = props.task
    const label = props.label
    return (
        <button onClick={task}>{label}</button>
    )
}

Button.propTypes = {
    task: PropTypes.func,
    label: PropTypes.string
}

export default Button