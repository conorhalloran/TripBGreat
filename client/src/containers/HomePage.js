import React, { Component } from 'react'
import SignInForm from '../components/SignInForm'
import { Token } from '../lib/tripRequests'
import { Container, Row, Col, Button } from 'reactstrap'
import jwtDecode from 'jwt-decode'

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.signInUser = this.signInUser.bind(this)

		this.state = {
			user: {}
		}
	}

	componentDidMount() {
		this.signIn()
	}

	signIn() {
		const jwt = localStorage.getItem('jwt')
		if (jwt) {
			const payload = jwtDecode(jwt)
			this.setState({ user: payload })
		}
	}

	isSignedIn() {
		return !!this.state.user.id
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
			<div className="HomePage">
				<h1>Welcome to TripBGreat</h1>
				<Container>
					{this.isSignedIn() ? (
						<Row>
							<Col>
								<h2>Trip Planning Made Ease</h2>
								<p>TripBGreat was designed with you in mind. </p>
							</Col>
						</Row>
					) : (
						<Row>
							<Col>
								<h2>Trip Planning Made Ease</h2>
								<p>TripBGreat was designed with you in mind. </p>
							</Col>

							<Col>
								<SignInForm onSubmit={this.signInUser} />
							</Col>
						</Row>
					)}
				</Container>
			</div>
		)
	}
}

export default HomePage
