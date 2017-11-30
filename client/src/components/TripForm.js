import React from "react";
import { DateRangePicker } from "react-dates";
import { log } from "core-js/library/web/timers";

// const TripForm = (props) => {
class TripForm extends React.Component {
  constructor(props) {
    super(props);

    // INITIAL STATE
    this.state = {
      title: "",
      description: "",
      startDate: null,
      endDate: null,
      location: "",
      duration: 0,
      focusedInput: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    this.props.onSubmit({
      title: formData.get("title"),
      description: formData.get("description"),
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      location: formData.get("location")
    });
  };

  render() {
    const { title = "", description = "", start_date = "", end_date = "", location = "", duration = "" } = this.props;

    return (
      <form className="TripForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input id="title" name="title" defaultValue={title} />
        </div>
        <div>
          <label htmlFor="description">Description</label> <br />
          <textarea id="description" name="description" defaultValue={description} />
        </div>
        <DateRangePicker
          displayFormat={"DD-MM-YYYY"}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
        <div>
          <label htmlFor="location">Location</label> <br />
          <input id="location" name="location" defaultValue={location} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default TripForm;
