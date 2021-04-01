import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'
import './style/GeneralInfo.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.updateInfo = this.updateInfo.bind(this)
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    updateInfo(key, newInfo) {
        this.setState({
            [key]: newInfo
        })
    }

    render() {
        const { edit } = this.props
        const { name, email, phone } = this.state
        return(
			<div className = 'general-info'>
                <div className = 'general-name'>
                    <Field
                        field = 'name' 
                        val = {name}
                        callback = {this.updateInfo}
                        edit = {edit}
                        placeholder = 'John Smith'
                    />
                </div>
                <div className = 'general-email'>
                    <Field
                        field = 'email'
                        val = {email}
                        callback = {this.updateInfo}
                        edit = {edit}
                        placeholder = 'johnsmith@email.com'
                    />
                </div>
                <div className = 'general-phone'>
                    <Field
                        field = 'phone'
                        val = {phone}
                        callback = {this.updateInfo}
                        edit = {edit}
                        placeholder = '0123 456 789'
                    />
                </div>
            </div>
        )
    }
}

GeneralInfo.propTypes = {
    edit: PropTypes.bool
}

export default GeneralInfo