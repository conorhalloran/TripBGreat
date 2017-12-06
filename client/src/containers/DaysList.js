import React, { Component } from 'react'
import DaySummary from '../components/DaySummary'
// import { Button, Container, Row, Col } from 'reactstrap'

class DaysList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			days: []
		}
	}

	render() {
		console.log('DaysList', this.props)
		return (
			<div>
				<h2>Intinerary</h2>
				<ol className="DaysList">
					{this.props.days.map(day => (
						<DaySummary
							key={day.id}
							day={day}
							user={this.props.user}
							{...this.props}
						/>
					))}
				</ol>
			</div>
		)
	}
}

export default DaysList
