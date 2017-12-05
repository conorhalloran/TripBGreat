import React, { Component } from 'react'
import DaySummary from '../components/DaySummary'

class DaysList extends Component {
	render() {
		return (
			<div>
				<h2>Intinerary</h2>
				<ol className="DaysList">{this.props.days.map(day => <DaySummary key={day.id} day={day} user={this.props.user} {...this.props} />)}</ol>
			</div>
		)
	}
}

export default DaysList
