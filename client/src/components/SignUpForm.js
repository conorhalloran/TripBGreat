import React from 'react'

const SignUpForm = props => {
	const { onSubmit = () => {} } = props

	const handleSubmit = event => {
		event.preventDefault()
		const { currentTarget } = event
		const formData = new FormData(currentTarget)
		onSubmit({
			first_name: formData.get('first_name'),
			last_name: formData.get('last_name'),
			email: formData.get('email'),
			password: formData.get('password'),
			password_confirmation: formData.get('password_confirmation')
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="first_name">First Name</label> <br />
				<input type="first_name" id="first_name" name="first_name" />
			</div>

			<div>
				<label htmlFor="last_name">Last Name</label> <br />
				<input type="last_name" id="last_name" name="last_name" />
			</div>

			<div>
				<label htmlFor="email">Email</label> <br />
				<input type="email" id="email" name="email" />
			</div>

			<div>
				<label htmlFor="password">Password</label> <br />
				<input type="password" id="password" name="password" />
			</div>

			<div>
				<label htmlFor="password_confirmation">Password Confirmation</label> <br />
				<input type="password" id="password_confirmation" name="password_confirmation" />
			</div>

			<div>
				<input type="submit" value="Sign Up" />
			</div>
		</form>
	)
}

export default SignUpForm
