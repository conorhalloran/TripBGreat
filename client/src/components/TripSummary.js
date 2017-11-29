import React from 'react';
import { Link } from 'react-router-dom';

function TripSummary (props) {
	const {
		id,
		title,
		start_date,
		user,
		aasm_state
	} = props.trip;
	// const current_user = props.user;
	return (
		<div className="TripSummary">
			<p>
				<Link to={`trips/${id}`}>{title}</Link>, By: {user.first_name}. Status: {aasm_state} • Trip Start Date : {start_date}
			</p>
		</div>
	);
};

export default TripSummary;
