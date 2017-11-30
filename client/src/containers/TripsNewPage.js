import React, { Component } from "react";
import { Trip } from "../lib/requests";
import TripForm from "../components/TripForm";

class TripsNewPage extends Component {
  constructor(props) {
    super(props);
    this.createTrip = this.createTrip.bind(this);
  }

  async createTrip(trip) {
    const data = await Trip.create(trip);
    this.props.history.push(`/trips/${data.id}`);
  }

  render() {
    return (
      <div className="TripsNewPage">
        <h1>New Trip</h1>
        <TripForm onSubmit={this.createTrip} />
      </div>
    );
  }
}

export default TripsNewPage;
