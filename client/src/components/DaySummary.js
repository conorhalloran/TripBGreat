import React from 'react'
import { Link } from 'react-router-dom'

function DaySummary(props) {
	const { id, title, description, start_location, end_location } = props.day
	const { tripId } = props
	const { index } = props

	return (
		<tr>
			<th scope="row">{index + 1}</th>
			<td>
				<Link to={`/trips/${tripId}/days/${id}`}>{title}</Link>
			</td>
			<td>{description}</td>
			<td>{start_location}</td>
			<td>{end_location}</td>
		</tr>
	)
}

export default DaySummary
