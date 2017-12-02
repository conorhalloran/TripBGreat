import React, { Component } from 'react'
import { Trip } from '../lib/requests'

import TripsList from './TripsList'

class TripsIndexPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			trips: []
		}
	}

	async componentDidMount() {
		const trips = await Trip.getAll()
		this.setState({ trips })
	}

	render() {
		const { user = {} } = this.props
		return (
			<div className="TripsIndexPage">
				<TripsList user={user} trips={this.state.trips} {...this.props} />
			</div>
		)
	}
}

export default TripsIndexPage
