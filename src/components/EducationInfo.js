import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import EducationBlock from './EducationBlock'
import './style/EducationInfo.css'

class EducationInfo extends Component {
    constructor(props) {
        super(props)
        this.addNewEducationBlock = this.addNewEducationBlock.bind(this)
        this.removeEducationBlock = this.removeEducationBlock.bind(this)
        this.updateEducationData = this.updateEducationData.bind(this)
        this.state = {
            educationBlockIds: 1,
            data: []
        }
    }

    addNewEducationBlock() {
        this.setState({
            educationBlockIds: this.state.educationBlockIds + 1,
            data: [...this.state.data, this.createEmptyEducationData()]
        })
    }

    createEmptyEducationData() {
        return {
            id: this.state.educationBlockIds,
            school: '',
            major: '',
            graduated: ''
        }
    }

    findDataIndex(newState, id) {
        for (let i = 0; i < newState.length; i++) {
            if (newState[i].id === id) {
                return i
            }
        }
    }

    updateEducationData(id, category, newData) {
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

    removeEducationBlock(id) {
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
        let educationInfo = []
        for (let i = 0; i < data.length; i++) {
            const { id, school, major, graduated } = data[i]
            educationInfo.push(
                <EducationBlock
                    key = { i }
                    edit = { edit }
                    delete = {this.removeEducationBlock}
                    update = {this.updateEducationData}
                    id = { id }
                    school = { school }
                    major = { major }
                    graduated = { graduated }
                />
            )
        }

        return( 
			<div className = 'education-info'>
                {educationInfo}
                {edit && 
                    <div className='add-education-wrapper'>
                        <div className='add-education'>
                            <Button task={this.addNewEducationBlock} label='Add Education' />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

EducationInfo.propTypes = {
    edit: PropTypes.bool
}

export default EducationInfo