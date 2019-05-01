import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class DynamicForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Passengers: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handlePassengerNameChange = idx => evt => {
    const newPassengers = this.state.Passengers.map((Passenger, sidx) => {
      if (idx !== sidx) return Passenger;
      return { ...Passenger, name: evt.target.value };
    });

    this.setState({ Passengers: newPassengers });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit();

    const { name, Passengers } = this.state;
    // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddPassenger = () => {
    this.setState({
      Passengers: this.state.Passengers.concat([{ name: "" }])
    });
    this.props.onAdd(this.state.Passengers.length);
  };

  handleRemovePassenger = idx => () => {
    this.setState({
      Passengers: this.state.Passengers.filter((s, sidx) => idx !== sidx)
    });
    this.props.onAdd(this.state.Passengers.length);
  };

  render() {
    console.log(this.state.Passengers[0].name);

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Passengers</h4>

        {this.state.Passengers.map((Passenger, idx) => (
          <div className="shareholder" key={idx}>
            <input
              type="text"
              placeholder={`Passenger #${idx + 1} name`}
              value={Passenger.name}
              onChange={this.handlePassengerNameChange(idx)}
              style={{ backgroundColor: "white" }}
            />
            <button
              type="button"
              onClick={this.handleRemovePassenger(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddPassenger}
          className="small"
        >
          Add Passenger
        </button>
        <button
          type="primary"
          htmlType="submit"
          disabled={
            !(
              this.props.isFlightSelected[0] !== null &&
              this.props.isFlightSelected[1] > 0 &&
              this.props.isFlightSelected[2].email !== null
            )
          }
        >
          Submit
        </button>
      </form>
    );
  }
}
export default DynamicForm;
