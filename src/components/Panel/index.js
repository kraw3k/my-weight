import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import firebase from "../../firebase";
import WeightList from "../List";
import WeightGraphs from "../Graphs";
import Profile from "../Profile";
import Spinner from "../Spinner";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userWeight: {},
      isLoadedUserWeight: false
    };

    //functions bind
    this.reigsterNewUser = this.reigsterNewUser.bind(this);
    this.deleteWeight = this.deleteWeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.addNewWeight = this.addNewWeight.bind(this);

    //firebase
    this.currentUser = firebase.auth().currentUser;
    this.userPath = firebase
      .database()
      .ref()
      .child(`users/${this.currentUser.uid}`);
  }

  addNewWeight(value) {
    let tempDate = Date.now();

    this.userPath.child(`data/weight/${tempDate}`).set({
      weight: value,
      timestamp: tempDate
    });
  }

  deleteWeight(doc) {
    this.userPath.child(`data/weight/${doc}`).remove();
  }

  updateWeight(doc) {
    this.userPath.child(`data/weight/${doc.oldTimestamp}`).remove();

    this.userPath
      .child(`data/weight/${doc.newTimestamp}`)
      .set({ weight: doc.newWeight, timestamp: doc.newTimestamp });
  }

  reigsterNewUser = () => {
    this.userPath.child("account").set({
      isRegistered: true,
      displayName: this.currentUser.displayName,
      email: this.currentUser.email
    });
  };

  componentWillMount = () => {
    //checking is current user registered (has it got 'isRegistered === true')
    this.userPath.child("account").once("value", elements => {
      if (elements.val() && elements.val().isRegistered === true) {
        return 0;
        // if (elements.val().isRegistered === true) return 0;
        // else this.reigsterNewUser();
      } else this.reigsterNewUser();
    });
  };

  componentDidMount = () => {
    //now, user exist (even if has been already registered)
    //so let's download their weight data
    this.userPath.child("data/weight").on("value", elements => {
      console.log("event 'on value' works! ");
      //elements.val() is an object including objectes, so convert it to array
      this.setState({ isLoadedUserWeight: false });
      let tempArray = [];
      for (var key in elements.val()) {
        if (elements.val().hasOwnProperty(key)) {
          tempArray.push(elements.val()[key]);
        }
      }
      //reverse array to display newest weight first
      this.setState({
        userWeight: tempArray.reverse(),
        isLoadedUserWeight: true
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <div className="menu">
            <NavLink to="/list" activeClassName="selected">
              <div>
                <i className="material-icons">format_list_bulleted</i>
                <p>List</p>
              </div>
            </NavLink>
            <NavLink to="/graphs" activeClassName="selected">
              <div>
                <i className="material-icons">timeline</i>
                <p>Graphs</p>
              </div>
            </NavLink>
            <NavLink to="/profile" activeClassName="selected">
              <div>
                <i className="material-icons">account_circle</i>
                <p>Profile</p>
              </div>
            </NavLink>
          </div>

          <div className="routerContent">
            <Route
              path="/list"
              render={props =>
                this.state.isLoadedUserWeight ? (
                  <WeightList
                    {...props}
                    data={this.state.userWeight}
                    addNewWeight={this.addNewWeight}
                    deleteWeight={this.deleteWeight}
                    updateWeight={this.updateWeight}
                  />
                ) : (
                  <Spinner />
                )
              }
            />
            <Route
              path="/graphs"
              render={props =>
                this.state.isLoadedUserWeight ? (
                  <WeightGraphs {...props} data={this.state.userWeight} />
                ) : (
                  <Spinner />
                )
              }
            />
            <Route
              path="/profile"
              render={() => <Profile logout={this.props.logout} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default Panel;
