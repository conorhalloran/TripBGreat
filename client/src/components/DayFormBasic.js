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

	const startHandlePlacesChanged = place => {
		const { geometry: { location } } = place
		const latitude = location.lat()
		const longitude = location.lng()
		const tripLocation = place.formatted_address
		this.setState({
			startLatitude: latitude,
			startLongitude: longitude,
			startLocation: tripLocation.toString()
		})
	}
	const endHandlePlacesChanged = place => {
		const { geometry: { location } } = place
		const latitude = location.lat()
		const longitude = location.lng()
		const tripLocation = place.formatted_address
		this.setState({
			endLatitude: latitude,
			endLongitude: longitude,
			endLocation: tripLocation.toString()
		})
	}

	return (
		<div className="tile">
			<Form onSubmit={handleSubmit}>
				<FormGroup />
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
				<FormGroup>
					<Label for="startLocation">Start Location</Label>
					<LocationSearch
						onPlacesChanged={startHandlePlacesChanged}
						defaultValue={location}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="endLocation">End Location</Label>
					<LocationSearch
						onPlacesChanged={endHandlePlacesChanged}
						defaultValue={location}
					/>
				</FormGroup>
				<Button>Create Day</Button>
			</Form>
		</div>
	)
}

export default DayFormBasic
