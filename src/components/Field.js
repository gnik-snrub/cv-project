import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/Field.css'

class Field extends Component {
    constructor(props) {
        super(props)
        this.sendData = this.sendData.bind(this)
    }

    sendData(e) {
        this.props.callback(this.props.field, e.target.value)
    }
    
    render() {
        const { field, edit, placeholder, val } = this.props
        const label = field.charAt(0).toUpperCase() + field.slice(1) + ': '
        return (
            <div className='field-container'>
                <div className='label-container'>
                    {label}
                </div>
                {edit
                    ?   <input
                            className='field-edit'
                            type='text'
                            placeholder={placeholder}
                            value={val}
                            onChange={(e) => this.sendData(e)}
                        />
                    :   <div className='field-preview'>{val}</div>
                }
            </div>
        )
    }
}

Field.propTypes = {
    field: PropTypes.string,
    cb: PropTypes.func,
    edit: PropTypes.bool,
    placeholder: PropTypes.string
}

export default Field