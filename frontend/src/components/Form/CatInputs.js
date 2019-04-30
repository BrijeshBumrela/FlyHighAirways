import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class DynamicForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit();

    const { name, shareholders } = this.state;
    // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
    this.props.onAdd(this.state.shareholders.length);
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
    this.props.onAdd(this.state.shareholders.length);
  };

  render() {
    console.log(this.state.shareholders.length);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company name, e.g. Magic Everywhere LLC"
          value={this.state.name}
          onChange={this.handleNameChange}
          style={{ backgroundColor: "white" }}
        />

        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
              style={{ backgroundColor: "white" }}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
        >
          Add Shareholder
        </button>
        <button
          type="primary"
          htmlType="submit"
          disabled={
            !(
              this.props.isFlightSelected[0] !== null &&
              this.props.isFlightSelected[1] > 0
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
