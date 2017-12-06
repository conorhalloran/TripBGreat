import React, { Component } from 'react'
import {
	Button,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'

const DayFormBasic = props => {
	const { createDay } = props

	const handleSubmit = event => {
		event.preventDefault()
		const { currentTarget } = event
		const formData = new FormData(currentTarget)
		createDay({
			title: formData.get('title'),
			description: formData.get('description')
		})
	}

	return (
		<div className="tile">
			<Form onSubmit={handleSubmit}>
				<Input
					className="input"
					type="text"
					name="title"
					placeholder="Enter a Title"
				/>
				<Input
					type="textarea"
					className="input"
					name="description"
					placeholder="Describe your Day"
				/>
				<Button>Create Day</Button>
			</Form>
		</div>
	)
}

export default DayFormBasic
