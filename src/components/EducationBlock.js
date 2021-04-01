import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'
import Button from './Button'
import './style/EducationBlock.css'

class EducationBlock extends Component {
    constructor(props) {
        super(props)
        this.updateEducation = this.updateEducation.bind(this)
        this.deleteSelf = this.deleteSelf.bind(this)
        this.state = {
            id: this.props.id
        }
    }

    updateEducation(category, newInfo) {
        this.props.update(this.state.id, category, newInfo)
    }

    deleteSelf() {
        this.props.delete(this.props.id)
    }

    render() {
        const { edit, school, major, graduated } = this.props
        return(
            <div className='education-block'>
                <div className='edu-content'>
                    <div className='school-wrapper'>
                        <Field 
                            field = 'school' 
                            val = { school }
                            callback = {this.updateEducation}
                            edit = { edit }
                            placeholder = 'RMIT University'
                        />
                    </div>
                    <div className='major-wrapper'>
                        <Field 
                            field = 'major' 
                            val = { major }
                            callback = {this.updateEducation}
                            edit = { edit }
                            placeholder = 'Linguistics'
                        />
                    </div>
                    <div className='graduated-wrapper'>
                        <Field 
                            field = 'graduated' 
                            val = { graduated }
                            callback = {this.updateEducation}
                            edit = { edit }
                            placeholder = '2012'
                        />
                    </div>
                </div>
                {edit && 
                    <div className='remove-button'>
                        <div className='edu-button-wrapper'>
                            <Button task = {this.deleteSelf} label = 'Remove' /> 
                        </div>
                    </div>
                }
            </div>
        )
    }
}

EducationBlock.propTypes = {
    edit: PropTypes.bool,
    delete: PropTypes.func,
    update: PropTypes.func,
    id: PropTypes.number,
    school: PropTypes.string,
    major: PropTypes.string,
    graduated: PropTypes.string
}

export default EducationBlock