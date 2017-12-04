import React, { Component } from 'react'
import { Trip } from '../lib/tripRequests'
import MapComponent from '../components/MyMapComponent'
import { Container, Row, Col, Button } from 'reactstrap'

class TripDetails extends Component {
	constructor(props) {
		super(props)

		this.deleteTrip = this.deleteTrip.bind(this)
	}

	async deleteTrip(event) {
		event.preventDefault()
		await Trip.destroy(this.props.trip.id)
		this.props.history.push('/trips')
	}

	render() {
		const { id, title, description, start_date, end_date, location, user = {}, aasm_state = '', duration, longitude, latitude } = this.props.trip
		const { updateAASM, current_user } = this.props
		console.log({ user })
		return (
			<Container>
				<Row className="TripDetails">
					<Col>
						<h1>Trip Details</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>{title}</h2>
						<p>{description}</p>
						<p>{location}</p>
						<p>
							<em>By : {this.props.trip.user}</em>
						</p>
						<p>
							<strong>Start Date : </strong>
							{start_date}
						</p>
						<p>
							<strong>End Date : </strong>
							{end_date}
						</p>
						<p>Duration : {duration} Days</p>
						<div>
							<h3>
								Status:
								{aasm_state === 'completed' ? <span> Completed Trip!</span> : <span />}
								{aasm_state === 'published' ? <span> In Progress!</span> : <span />}
								{aasm_state === 'pending' ? <span> Pending</span> : <span />}
							</h3>
							{aasm_state === 'pending' ? <Button onClick={updateAASM}>Start Trip</Button> : <span />}
						</div>
						{user === current_user.full_name ? (
							<div>
								<Button href={`/trips/${id}/edit`}>Edit</Button>
								<Button onClick={this.deleteTrip}>Delete</Button>
							</div>
						) : (
							<span />
						)}
					</Col>
					<Col>{latitude && longitude && <MapComponent lat={latitude} long={longitude} />}</Col>
				</Row>
			</Container>
		)
	}
}

export default TripDetails
