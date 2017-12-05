import React, { Component } from 'react'
import TripSummary from '../components/TripSummary'

class TripsList extends Component {
	render() {
		return (
			<div className="TripsList">
				<h1>Trips</h1>
				{this.props.trips.map(trip => <TripSummary key={trip.id} trip={trip} user={this.props.user} {...this.props} />)}
			</div>
		)
	}
}

export default TripsList
