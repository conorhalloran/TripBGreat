import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

function TripSummary(props) {
	const { id, title, start_date, user = {}, aasm_state, duration } = props.trip

	return (
		<Col xs="6" sm="4" md="3" className="TripSummary">
			<Link to={`trips/${id}`}>{title}</Link>
			<p>
				By: {user.first_name} {user.last_name}
				<br />
				Status: {aasm_state} • Start Date : {start_date} • Duration : {duration}
				Days
			</p>
		</Col>
	)
}

export default TripSummary
