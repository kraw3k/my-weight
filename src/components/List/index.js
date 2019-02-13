import React, { Component } from "react";
import ListItem from "../ListItem";
// import ListItem2 from "../ListItem2";
export default class WeightList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAddWeightUI: false, inputValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.deleteWeight = this.deleteWeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.addWeight = this.addWeight.bind(this);
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  deleteWeight = doc => {
    this.props.deleteWeight(doc);
  };

  updateWeight = doc => {
    this.props.updateWeight(doc);
  };

  addWeight = () => {
    this.props.addNewWeight(this.state.inputValue);
    this.setState({ showAddWeightUI: false, inputValue: "" });
  };

  render() {
    return (
      <section className="weightList">
        {this.state.showAddWeightUI ? (
          <section className="addWeight">
            <div className="header">
              <span />
              <h1>Insert new weight (kg)</h1>
              <i
                className="material-icons closeIcon"
                onClick={() => {
                  this.setState({ showAddWeightUI: false });
                }}
              >
                close
              </i>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.addWeight();
              }}
            >
              <span />
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="200"
                required
                value={this.state.inputValue}
                onChange={this.handleChange}
                ref={function(input) {
                  if (input != null) {
                    input.focus();
                  }
                }}
              />
              <button type="submit">
                <i className="material-icons">check</i>
              </button>
            </form>
          </section>
        ) : (
          <div
            className="addWeightIcon"
            onClick={() => {
              this.setState({ showAddWeightUI: true });
            }}
          >
            <p>+ Add new weight</p>
          </div>
        )}
        {this.props.data.map((elem, i) => {
          return (
            <ListItem
              data={elem}
              key={i}
              deleteWeight={this.deleteWeight}
              updateWeight={this.updateWeight}
            />
          );
        })}
      </section>
    );
  }
}
