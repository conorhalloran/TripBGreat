import React, { Component } from 'react'
import DaySummary from '../components/DaySummary'
import { Container } from 'reactstrap'

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
				<Container>
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
				</Container>
			</div>
		)
	}
}

export default DaysList
