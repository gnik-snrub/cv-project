import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import EducationBlock from './EducationBlock'
import './style/EducationInfo.css'

const EducationInfo = (props) => {
    const { edit } = props
    const [blockIDs, setBlockIDs] = useState(1)
    const [data, setData] = useState([])

    const newEducationBlock = () => {
        setBlockIDs(blockIDs + 1)
        setData([...data, createEmptyEducationData()])
    }

    const createEmptyEducationData = () => {
        return {
            id: blockIDs,
            school: '',
            major: '',
            graduated: ''
        }
    }

    const findDataIndex = (id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return i
            }
        }
    }

    const updateEducationData = (id, category, newInfo) => {
        const updateIndex = findDataIndex(id)
        const newData = [ ...data ]
        newData[updateIndex] = {
            ...newData[updateIndex],
            [category]: newInfo
        }
        setData(newData)
    }

    const removeEducationBlock = (id) => {
        const removeIndex = findDataIndex(id)
        const newData = [ ...data ]
        newData.splice(removeIndex, 1)
        setData(newData)
    }

    const collectDataAsElements = () => {
        let educationInfo = []
        for (let i = 0; i < data.length; i++) {
            const { id, school, major, graduated } = data[i]
            educationInfo.push(
                <EducationBlock
                    key = { i }
                    edit = { edit }
                    remove = { removeEducationBlock }
                    update = { updateEducationData }
                    id = { id }
                    school = { school }
                    major = { major }
                    graduated = { graduated }                    
                />
            )
        }
        return educationInfo
    }

    return (
        <div className = 'education-info'>
            {collectDataAsElements()}
            {edit &&
                <div className = 'add-education-wrapper'>
                    <div className = 'add-education'>
                        <Button task = { newEducationBlock } label = 'Add Education'/>
                    </div>
                </div>
            }
        </div>
    )
}

EducationInfo.propTypes = {
    edit: PropTypes.bool
}

export default EducationInfo