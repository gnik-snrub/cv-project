import React from 'react'
import PropTypes from 'prop-types'
import Field from './Field'
import Button from './Button'
import './style/ExperienceBlock.css'

const ExperienceBlock = (props) => {
    const { id, title, company, tasks, start, end, edit, update, remove } = props

    const updateExperience = (category, newInfo) => {
        update(id, category, newInfo)
    }

    const deleteSelf = () => {
        remove(id)
    }

    return(
        <div className = 'experience-block'>
            <div className = 'exp-content'>
                <div className = 'information-group'>
                    <div className = 'title-wrapper'>
                        <Field
                            field = 'title'
                            val = { title }
                            callback = { updateExperience }
                            edit = { edit }
                            placeholder = 'CEO'
                        />
                    </div>
                    <div className = 'company-wrapper'>
                        <Field
                            field = 'company'
                            val = { company }
                            callback = { updateExperience }
                            edit = { edit }
                            placeholder = 'Amazon'
                        />
                    </div>
                </div>
                <div className = 'information-group'>
                    <div className = 'start-wrapper'>
                        <Field
                            field = 'start'
                            val = { start }
                            callback = { updateExperience }
                            edit = { edit }
                            placeholder = '2017'
                        />
                    </div>
                    <div className = 'end-wrapper'>
                        <Field
                            field = 'end'
                            val = { end }
                            callback = { updateExperience }
                            edit = { edit }
                            placeholder = '2020'
                        />
                    </div>
                </div>
                <div className = 'tasks-wrapper'>
                    <Field
                        field = 'tasks'
                        val = { tasks }
                        callback = { updateExperience }
                        edit = { edit }
                        placeholder = 'Swimming in a pool filled with cash'
                    />
                </div>
            </div>
            {edit &&
                <div className = 'exp-remove-button'>
                    <div className = 'exp-button-wrapper'>
                        <Button task = { deleteSelf } label = 'Remove' />
                    </div>
                </div>
            }
        </div>
    )
}

ExperienceBlock.propTypes = {
    edit: PropTypes.bool,
    delete: PropTypes.func,
    update: PropTypes.func,
    id: PropTypes.number,
    school: PropTypes.string,
    major: PropTypes.string,
    graduated: PropTypes.string
}

export default ExperienceBlock