import React, { Component } from 'react'
import DaySummary from '../components/DaySummary'
import { Table } from 'reactstrap'

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
				<Table>
					<thead>
						<tr>
							<th>Day</th>
							<th>Title</th>
							<th>Description</th>
							<th>Start Location</th>
							<th>End Location</th>
						</tr>
					</thead>
					<tbody>
						{this.props.days
							.reverse()
							.map((day, index) => (
								<DaySummary
									key={day.id}
									day={day}
									index={index}
									user={this.props.user}
									{...this.props}
								/>
							))}
					</tbody>
				</Table>
			</div>
		)
	}
}

export default DaysList
