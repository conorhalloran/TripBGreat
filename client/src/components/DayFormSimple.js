import React, { Component } from 'react'
import {
	Button,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'

class DayForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.day.title,
			description: this.props.day.description
		}
	}

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<div className="tile">
				<Form>
					<Input
						className="input"
						type="text"
						name="title"
						placeholder="Enter a Title"
						value={this.state.title}
						onChange={this.handleInput}
					/>
					<Input
						type="textarea"
						className="input"
						name="description"
						placeholder="Describe your Day"
						value={this.state.description}
						onChange={this.handleInput}
					/>
				</Form>
			</div>
		)
	}
}

export default DayForm
