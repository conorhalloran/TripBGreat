import React, { Component } from 'react'
import { User } from '../lib/tripRequests'
import SignUpForm from '../components/SignUpForm'

class SignUpPage extends Component {
	constructor(props) {
		super(props)

		this.signUpUser = this.signUpUser.bind(this)
	}

	async signUpUser(params) {
		const { onSignUp = () => {} } = this.props
		const data = await User.create(params)
		if (!data.error) {
			const { jwt } = data
			localStorage.setItem('jwt', jwt)
			onSignUp()
			this.props.history.push('/trips')
		}
	}

	render() {
		return (
			<div className="SignUpPage">
				<h1>Sign Up</h1>
				<SignUpForm onSubmit={this.signUpUser} />
			</div>
		)
	}
}

export default SignUpPage
