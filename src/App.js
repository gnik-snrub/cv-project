import './App.css'
import React, { useState } from 'react'
import Button from './components/Button'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import Experience from './components/Experience'

const App = () => {
	const [edit, setEdit] = useState(true)

	const toggleMode = () => {
		setEdit(!edit)
	}

	return(
		<div className = 'App'>
			<div className = 'page-content'>
				{edit
				?	<div className = 'toggle-wrapper'>
						<Button task = {toggleMode} label = 'Edit Mode' />
					</div>
				:	<div className = 'toggle-wrapper'>
						<Button task = {toggleMode} label = 'Preview Mode' />
					</div>
				}
				<h3>PERSONAL INFORMATION</h3>
				<GeneralInfo edit = { edit } />
				<h3>EDUCATION</h3>
				<EducationInfo edit = { edit } />
				<h3>EXPERIENCE</h3>
				<Experience edit = { edit } />
			</div>
		</div>
	)
}

export default App;
