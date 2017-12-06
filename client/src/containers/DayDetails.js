import React, { Component } from 'react'
import MapComponent from '../components/MyMapComponent'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import DaysNewPage from './DaysNewPage'

class DayDetails extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { user = {}, day = {}, current_user } = this.props
		const {
			id,
			title,
			description,
			start_location,
			end_location,
			start_longitude,
			start_latitude,
			end_longitude,
			end_latitude
		} = this.props.day
		console.log(this.props, 'Day Details')
		console.log(this.props.day, 'Day items')
		return (
			<Container className="container-fluid">
				<Row className="DayDetails">
					<Col>
						<h1>Day Details</h1>
					</Col>
				</Row>
				<Row>
					<Col sm="5">
						<h2>{title}</h2>
						<p>{description}</p>
						<p>Start Location: {start_location}</p>
						<p>End Location: {start_location}</p>
					</Col>
					<Col sm="7">
						{start_latitude &&
							start_longitude && (
								<MapComponent lat={start_latitude} long={start_longitude} />
							)}
					</Col>
				</Row>
				<Row>
					<Col />
				</Row>
			</Container>
		)
	}
}

export default DayDetails
