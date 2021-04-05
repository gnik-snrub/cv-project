import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import ExperienceBlock from './ExperienceBlock'
import './style/Experience.css'

const Experience = (props) => {
    const { edit } = props
    const [blockIDs, setBlockIDs] = useState(1)
    const [data, setData] = useState([])

    const newExperienceBlock = () => {
        setBlockIDs(blockIDs + 1)
        setData([...data, createEmptyExperienceData()])
    }

    const createEmptyExperienceData = () => {
        return {
            id: blockIDs,
            title: '',
            company: '',
            tasks: '',
            start: '',
            end: ''
        }
    }

    const findDataIndex = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return i
            }
        }
    }

    const updateExperienceData = (id, category, newInfo) => {
        const updateIndex = findDataIndex(id)
        const newData = [ ...data ]
        newData[updateIndex] = {
            ...newData[updateIndex],
            [category]: newInfo
        }
        setData(newData)
    }

    const removeExperienceBlock = (id) => {
        const removeIndex = findDataIndex(id)
        const newData = [ ...data ]
        newData.splice(removeIndex, 1)
        setData(newData)
    }

    const collectDataAsElements = () => {
        let experience = []
        for (let i = 0; i < data.length; i++) {
            const { id, title, company, tasks, start, end } = data[i]
            experience.push(
                <ExperienceBlock
                    key = { i }
                    edit = { edit }
                    remove = {removeExperienceBlock}
                    update = {updateExperienceData}
                    id = { id }
                    title = { title }
                    company = { company }
                    tasks = { tasks }
                    start = { start }
                    end = { end }
                />
            )
        }
        return experience
    }

    return( 
        <div className = 'experience'>
            {collectDataAsElements()}
            {edit && 
                <div className='add-experience-wrapper'>
                    <div className='add-experience'>
                        <Button task={newExperienceBlock} label='Add Experience' />
                    </div>
                </div>
            }
        </div>
    )
}

Experience.propTypes = {
    edit: PropTypes.bool
}

export default Experience