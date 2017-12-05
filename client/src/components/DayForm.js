import React from 'react'
import { SingleDatePicker } from 'react-dates'
import LocationSearch from './LocationSearch'

class DayForm extends React.Component {
	constructor(props) {
		super(props)

		// INITIAL STATE
		this.state = {
			title: '',
			description: '',
			startDate: null,
			endDate: null,
			location: '',
			focusedInput: null,
			dayLocation: null,
			longitude: null,
			latitude: null
		}
	}

	handlePlacesChanged = place => {
		const { geometry: { location } } = place
		const latitude = location.lat()
		const longitude = location.lng()
		const dayLocation = place.formatted_address
		this.setState({ latitude: latitude, longitude: longitude, dayLocation: dayLocation.toString() })
	}

	handleSubmit = event => {
		event.preventDefault()
		const { currentTarget } = event
		const formData = new FormData(currentTarget)
		this.props.onSubmit({
			title: formData.get('title'),
			description: formData.get('description'),
			start_date: formData.get('startDate'),
			end_date: formData.get('endDate'),
			start_location: this.state.dayLocation,
			start_latitude: this.state.latitude,
			start_longitude: this.state.longitude
		})
    }
    const DayForm = props => {
	const { createDay } = props

	const handleSubmit = event => {
		event.preventDefault()
		const { currentTarget } = event
		const formData = new FormData(currentTarget)
		createDay({
			title: formData.get('title'),
			description: formData.get('description')
		})
	}

	return (
		<form className="DayForm" onSubmit={handleSubmit}>
			<div>
				<text id="title" name="title" placeholder="Enter Day Title" />
			</div>
			<div>
				<textarea
					id="description"
					name="description"
					placeholder="Decription of the Day"
				/>
			</div>
            <SingleDatePicker
					displayFormat={'DD-MM-YYYY'}
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					onDatesChange={({ startDate, endDate }) => {
						this.setState({ startDate, endDate })
					}}
					focusedInput={this.state.focusedInput}
					onFocusChange={focusedInput => this.setState({ focusedInput })}
				/>
				<div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	)
}

export default DayForm
