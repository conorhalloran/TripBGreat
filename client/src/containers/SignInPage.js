import React, { Component } from 'react'
import SignInForm from '../components/SignInForm'
import { Token } from '../lib/tripRequests'

class SignInPage extends Component {
	constructor(props) {
		super(props)
		this.signInUser = this.signInUser.bind(this)
	}

	async signInUser(params) {
		const { onSignIn = () => {} } = this.props
		const data = await Token.create(params)
		if (!data.error) {
			const { jwt } = data
			localStorage.setItem('jwt', jwt)
			onSignIn()
			this.props.history.push('/trips')
		}
	}

	render() {
		return (
			<div className="SignInPage">
				<h1>Sign In</h1>
				<SignInForm onSubmit={this.signInUser} />
			</div>
		)
	}
}

export default SignInPage
