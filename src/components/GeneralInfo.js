import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'
import './style/GeneralInfo.css'

const GeneralInfo = (props) => {
    const { edit } = props
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const updateInfo = (key, newInfo) => {
        switch(key) {
            case 'name':
                setName(newInfo)
                break
            case 'email':
                setEmail(newInfo)
                break
            case 'phone':
                setPhone(newInfo)
                break
            default:
        }
    }

    return(
        <div className = 'general-info'>
            <div className = 'general-name'>
                <Field
                    field = 'name'
                    val = { name }
                    callback = { updateInfo }
                    edit = { edit }
                    placeholder = 'John Smith'
                />
            </div>
            <div className = 'general-email'>
                <Field
                    field = 'email'
                    val = { email }
                    callback = { updateInfo }
                    edit = { edit }
                    placeholder = 'johnsmith@email.com'
                />
            </div>
            <div className = 'general-phone'>
                <Field
                    field = 'phone'
                    val = { phone }
                    callback = { updateInfo }
                    edit = { edit }
                    placeholder = '0123 456 789'
                />
            </div>
        </div>
    )
}

GeneralInfo.propTypes = {
    edit: PropTypes.bool
}

export default GeneralInfo