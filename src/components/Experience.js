import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import ExperienceBlock from './ExperienceBlock'
import './style/Experience.css'

class Experience extends Component {
    constructor(props) {
        super(props)
        this.addNewExperienceBlock = this.addNewExperienceBlock.bind(this)
        this.removeExperienceBlock = this.removeExperienceBlock.bind(this)
        this.updateExperienceData = this.updateExperienceData.bind(this)
        this.state = {
            experienceBlockIds: 1,
            data: []
        }
    }

    addNewExperienceBlock() {
        this.setState({
            experienceBlockIds: this.state.experienceBlockIds + 1,
            data: [...this.state.data, this.createEmptyExperienceData()]
        })
    }

    createEmptyExperienceData() {
        return {
            id: this.state.experienceBlockIds,
            title: '',
            company: '',
            tasks: '',
            start: '',
            end: ''
        }
    }

    findDataIndex(newState, id) {
        for (let i = 0; i < newState.length; i++) {
            if (newState[i].id === id) {
                return i
            }
        }
    }

    updateExperienceData(id, category, newData) {
        const stateUpdate = this.state.data
        const updateIndex = this.findDataIndex(stateUpdate, id)
        stateUpdate[updateIndex] = {
            ...stateUpdate[updateIndex],
            [category]: newData
        }
        this.setState({
            data: stateUpdate
        })
    }

    removeExperienceBlock(id) {
        const stateUpdate = this.state.data
        const removeIndex = this.findDataIndex(stateUpdate, id)
        stateUpdate.splice(removeIndex, 1)
        this.setState({
            data: stateUpdate
        })
    }

    render() {
        const { edit } = this.props
        const data = this.state.data
        let experience = []
        for (let i = 0; i < data.length; i++) {
            const { id, title, company, tasks, start, end } = data[i]
            experience.push(
                <ExperienceBlock
                    key = { i }
                    edit = { edit }
                    delete = {this.removeExperienceBlock}
                    update = {this.updateExperienceData}
                    id = { id }
                    title = { title }
                    company = { company }
                    tasks = { tasks }
                    start = { start }
                    end = { end }
                />
            )
        }

        return( 
			<div className = 'experience'>
                {experience}
                {edit && 
                    <div className='add-experience-wrapper'>
                        <div className='add-experience'>
                            <Button task={this.addNewExperienceBlock} label='Add Experience' />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

Experience.propTypes = {
    edit: PropTypes.bool
}

export default Experience