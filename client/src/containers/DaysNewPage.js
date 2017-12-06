import React, { Component } from 'react'
import { Day } from '../lib/dayRequests'
import DayForm from '../components/DayForm'

class DaysNewPage extends Component {
	constructor(props) {
		super(props)
		this.createDay = this.createDay.bind(this)
	}

	async createDay(trip) {
		const data = await Day.create(trip)
		this.props.history.push(`/trips/${data.id}`)
	}

	render() {
		return (
			<div className="DaysNewPage">
				<h4>Create a New Day</h4>
				<DayForm onSubmit={this.createDay} />
			</div>
		)
	}
}

export default DaysNewPage
