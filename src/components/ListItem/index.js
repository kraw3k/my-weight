import React, { Component } from "react";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateWeightUI: false
    };

    this.timezoneOffset = new Date(
      this.props.data.timestamp
    ).getTimezoneOffset();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.newDateValue = React.createRef();
    this.newWeightValue = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateWeight({
      oldTimestamp: this.props.data.timestamp,
      newTimestamp: new Date(this.newDateValue.current.value).getTime(),
      newWeight: this.newWeightValue.current.value
    });
    this.setState({ showUpdateWeightUI: false });
  }

  render() {
    return (
      <div className="weightListItem">
        <div className="main">
          <p className="weight">{this.props.data.weight} kg</p>
          <div className="date">
            <h5>
              {new Date(this.props.data.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })}
            </h5>
            <h4>{`${new Date(
              this.props.data.timestamp
            ).toLocaleDateString()} `}</h4>
          </div>

          <button
            type="button"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                this.props.deleteWeight(this.props.data.timestamp);
            }}
          >
            <i className="material-icons">delete</i>
            <p>delete</p>
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ showUpdateWeightUI: true });
            }}
          >
            <i className="material-icons">edit</i>
            <p>edit</p>
          </button>
        </div>
        {this.state.showUpdateWeightUI ? (
          <section className="updateWeight">
            <div className="header">
              <span />
              <h1>Edit item</h1>
              <i
                className="material-icons closeIcon"
                onClick={() => {
                  this.setState({ showUpdateWeightUI: false });
                }}
              >
                close
              </i>
            </div>
            <form onSubmit={this.handleSubmit}>
              <span />
              <input
                type="datetime-local"
                defaultValue={new Date(
                  this.props.data.timestamp - this.timezoneOffset * 60000
                )
                  .toISOString()
                  .slice(0, -8)}
                ref={this.newDateValue}
                className="inputDate"
                required
                min="2000-01-01T00:00"
                max="2100-01-01T00:00"
              />
              <span />
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="200"
                required
                defaultValue={this.props.data.weight}
                ref={this.newWeightValue}
                className="inputNumber"
              />
              <span />
              <button type="submit">
                <i className="material-icons">check</i>
              </button>
              <span />
            </form>
          </section>
        ) : null}
      </div>
    );
  }
}
