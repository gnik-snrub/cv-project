import React from 'react'
import PropTypes from 'prop-types'
import Field from './Field'
import Button from './Button'
import './style/EducationBlock.css'

const EducationBlock = (props) => {
    const { id, school, major, graduated, edit, update, remove } = props

    const updateEducation = (category, newInfo) => {
        update(id, category, newInfo)
    }

    const deleteSelf = () => {
        remove(id)
    }

    return(
        <div className = 'education-block'>
            <div className = 'edu-content'>
                <div className = 'school-wrapper'>
                    <Field
                        field = 'school'
                        val = { school }
                        callback = { updateEducation }
                        edit = { edit }
                        placeholder = 'RMIT Univeristy'
                    />
                </div>
                <div className = 'major-wrapper'>
                    <Field
                        field = 'major'
                        val = { major }
                        callback = { updateEducation }
                        edit = { edit }
                        placeholder = 'Linguistics'
                    />
                </div>
                <div className = 'graduated-wrapper'>
                    <Field
                        field = 'graduated'
                        val = { graduated }
                        callback = { updateEducation }
                        edit = { edit }
                        placeholder = '2012'
                    />
                </div>
            </div>
            {edit &&
                <div className = 'remove-button'>
                    <div className = 'edu-button-wrapper'>
                        <Button task = { deleteSelf } label = 'Remove'/>
                    </div>
                </div>
            }
        </div>
    )
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