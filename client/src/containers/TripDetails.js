import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Trip } from "../lib/requests";

class TripDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteTrip = this.deleteTrip.bind(this);
  }

  async deleteTrip(event) {
    event.preventDefault();
    await Trip.destroy(this.props.trip.id);
    this.props.history.push("/trips");
  }

  render() {
    const { id, title, description, start_date, end_date, location, user = "", aasm_state = "", duration } = this.props.trip;
    const { updateAASM, current_user } = this.props;
    return (
      <div className="TripDetails">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{location}</p>
        <p>
          <em>By : {this.props.trip.user}</em>
        </p>
        <p>
          <strong>Start Date : </strong>
          {start_date}
        </p>
        <p>
          <strong>End Date : </strong>
          {end_date}
        </p>
        <h3>Status : </h3>
        {aasm_state === "completed" ? <h4>Completed Trip!</h4> : <span />}
        {aasm_state === "published" ? <h4>In Progress!</h4> : <span />}
        <h4>Ends {end_date}</h4>
        {aasm_state === "pending" ? <button onClick={updateAASM}>Start Trip</button> : <span />}
        {user === current_user.full_name ? (
          <div>
            <Link to={`/trips/${id}/edit`}>Edit</Link>
            <button onClick={this.deleteTrip}>Delete</button>
          </div>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

export default TripDetails;
