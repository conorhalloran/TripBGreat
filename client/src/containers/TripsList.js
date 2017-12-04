import React, { Component } from 'react'
import TripSummary from '../components/TripSummary'

class TripsList extends Component {
	render() {
		const { user = {} } = this.props
		console.log(user)
		console.log(this.props)
		return (
			<div className="TripsList">
				<h1>Trips</h1>
				{this.props.trips.map(trip => <TripSummary key={trip.id} trip={trip} user={user} {...this.props} />)}
			</div>
		)
	}
}

export default TripsList
