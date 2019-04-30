// import React from "react";
// class CatInputs extends React.Component {
//   state = {
//     cats: [{ name: "", age: "" }],
//     owner: "",
//     description: ""
//   };
//   handleChange = e => {
//     if (["name", "age"].includes(e.target.className)) {
//       let cats = [...this.state.cats];
//       cats[e.target.dataset.id][
//         e.target.className
//       ] = e.target.value.toUpperCase();
//       this.setState({ cats }, () => console.log(this.state.cats));
//     } else {
//       this.setState({ [e.target.name]: e.target.value.toUpperCase() });
//     }
//   };
//   addCat = e => {
//     this.setState(prevState => ({
//       cats: [...prevState.cats, { name: "", age: "" }]
//     }));
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//   };
//   render() {
//     let { owner, description, cats } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
//         <label htmlFor="name">Owner</label>
//         <input type="text" name="owner" id="owner" value={owner} />
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           name="description"
//           id="description"
//           value={description}
//         />
//         <button onClick={this.addCat}>Add new cat</button>
//         {cats.map((val, idx) => {
//           let catId = `cat-${idx}`,
//             ageId = `age-${idx}`;
//           return (
//             <div key={idx}>
//               <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
//               <input
//                 type="text"
//                 name={catId}
//                 data-id={idx}
//                 id={catId}
//                 value={cats[idx].name}
//                 className="name"
//               />
//               <label htmlFor={ageId}>Age</label>
//               <input
//                 type="text"
//                 name={ageId}
//                 data-id={idx}
//                 id={ageId}
//                 value={cats[idx].age}
//                 className="age"
//               />
//             </div>
//           );
//         })}
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
// export default CatInputs;

import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class CatInputs extends React.Component {
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
        <button type="primary" htmlType="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default CatInputs;
