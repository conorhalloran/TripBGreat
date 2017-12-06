import React, { Component } from 'react'
import TripSummary from '../components/TripSummary'
import { Container, Row, Col, Button } from 'reactstrap'

class TripsList extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<h1>Trips</h1>
					<Row className="TripsList">
						{this.props.trips.map(trip => (
							<TripSummary
								key={trip.id}
								trip={trip}
								user={this.props.user}
								{...this.props}
							/>
						))}
					</Row>
				</Container>
			</div>
		)
	}
}

export default TripsList
