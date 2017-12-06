import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

function DaySummary(props) {
	const { id, title, description } = props.day
	const { tripId } = props

	return (
		<div className="DaySummary">
			<Container>
				<Row>
					<Col>
						<Link to={`/trips/${tripId}/days/${id}`}>{title}</Link>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>{description}</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default DaySummary
