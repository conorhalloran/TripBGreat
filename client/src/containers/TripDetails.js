import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Trip } from "../lib/requests";
import MyFancyComponent from "../components/MyMapComponent";

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
    const { id, title, description, start_date, end_date, location, user = "", aasm_state = "", duration, longitude, latitude } = this.props.trip;
    const { updateAASM, current_user } = this.props;
    return (
      <div className="TripDetails">
        <h1>Trip Details</h1>
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
        <p>Duration : {duration} Days</p>
        <div>
          <h3>
            Status:
            {aasm_state === "completed" ? <span> Completed Trip!</span> : <span />}
            {aasm_state === "published" ? <span> In Progress!</span> : <span />}
            {aasm_state === "pending" ? <span> Pending</span> : <span />}
          </h3>
          {aasm_state === "pending" ? <button onClick={updateAASM}>Start Trip</button> : <span />}
        </div>
        {user === current_user.full_name ? (
          <div>
            <Link to={`/trips/${id}/edit`}>Edit</Link>
            <button onClick={this.deleteTrip}>Delete</button>
          </div>
        ) : (
          <span />
        )}
        <MyFancyComponent lat={latitude} long={longitude} />
      </div>
    );
  }
}

export default TripDetails;
