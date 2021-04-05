import React from 'react'
import PropTypes from 'prop-types'
import './style/Field.css'

const Field = (props) => {
    const { field, edit, val, placeholder, callback } = props
    const sendData = (e) => {
        callback(field, e.target.value)
    }
    const label = field.charAt(0).toUpperCase() + field.slice(1) + ': '

    return (
        <div className = 'field-container'>
            <div className = 'label-container'>
                { label }
            </div>
            {edit
            ?   <input
                    className = 'field-edit'
                    text = 'text'
                    placeholder = { placeholder }
                    value = { val }
                    onChange = { (e) => sendData(e) }
                />
            :   <div className = 'field-preview'>{ val }</div>
            }
        </div>
    )
}

Field.propTypes = {
    field: PropTypes.string,
    cb: PropTypes.func,
    edit: PropTypes.bool,
    placeholder: PropTypes.string
}

export default Field