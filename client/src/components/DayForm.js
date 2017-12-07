import React from 'react'
import LocationSearch from './LocationSearch'
// import { SingleDayPicker } from 'react-dates'
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

class DayForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			startLocation: null,
			startLongitude: null,
			startLatitude: null,
			endLocation: null,
			endLongitude: null,
			endLatitude: null
		}
	}

	startHandlePlacesChanged = place => {
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
	endHandlePlacesChanged = place => {
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

	handleSubmit = event => {
		event.preventDefault()
		const { currentTarget } = event
		const formData = new FormData(currentTarget)
		this.props.createDay({
			title: formData.get('title'),
			description: formData.get('description'),
			start_location: this.state.startLocation,
			start_latitude: this.state.startLatitude,
			start_longitude: this.state.startLongitude,
			end_location: this.state.endLocation,
			end_latitude: this.state.endLatitude,
			end_longitude: this.state.endLongitude
		})
		// this.refs.form.reset()
	}

	render() {
		const { title = '', description = '', location = '' } = this.props
		return (
			<Container>
				<Row>
					<Col>
						<Form className="TripForm" onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label for="title">Title: </Label>
								<Input id="title" name="title" defaultValue={title} />
							</FormGroup>
							<FormGroup>
								<Label for="description" ref="description">
									Description:
								</Label>
								<Input
									type="textarea"
									id="description"
									name="description"
									defaultValue={description}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="startLocation">Start Location</Label>
								<LocationSearch
									onPlacesChanged={this.startHandlePlacesChanged}
									defaultValue={location}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="endLocation">End Location</Label>
								<LocationSearch
									onPlacesChanged={this.endHandlePlacesChanged}
									defaultValue={location}
								/>
							</FormGroup>
							<Button className="btn btn-outline-info">Create Day</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default DayForm
