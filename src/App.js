import './App.css'
import React, { Component } from 'react'
import Button from './components/Button'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import Experience from './components/Experience'

class App extends Component {
	constructor() {
		super()
		this.toggleMode = this.toggleMode.bind(this)
		this.state = {
			edit: true
		}
	}

	toggleMode() {
		const newEdit = !this.state.edit
		this.setState({
			edit: newEdit
		})
	}

	render() {
        const { edit } = this.state
		return (
			<div className="App">
				<div className='page-content'>
					{edit
						?	<div className='toggle-wrapper'>
								<Button task={this.toggleMode} label='Edit Mode' />
							</div>
						:	<div className='toggle-wrapper'>
								<Button task={this.toggleMode} label='Preview Mode' />
							</div>
					}
                	<h3>PERSONAL INFORMATION</h3>
					<GeneralInfo edit={edit} />
                	<h3>EDUCATION</h3>
					<EducationInfo edit={edit} />
					<h3>EXPERIENCE</h3>
					<Experience edit={edit} />
				</div>
			</div>
		);
	}
}

export default App;
