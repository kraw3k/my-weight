import React, { Component } from "react";
import firebase from "../../firebase";

export default class Profile extends Component {
  render() {
    console.log(firebase.auth().currentUser);
    return (
      <section className="profile">
        <h1>{firebase.auth().currentUser.displayName}</h1>
        <h2>
          {firebase.auth().currentUser.email
            ? firebase.auth().currentUser.email
            : null}
        </h2>
        <h2>
          {firebase.auth().currentUser.phoneNumber
            ? firebase.auth().currentUser.phoneNumber
            : null}
        </h2>
        <button
          onClick={() => {
            this.props.logout();
          }}
        >
          <p>sign out</p>
          <i className="material-icons">exit_to_app</i>
        </button>
        <h4>
          Last sign in: {firebase.auth().currentUser.metadata.lastSignInTime}
        </h4>
        <h3>
          author:
          <p>
            <a href="http://kacperkrawczyk.pl">kacperkrawczyk.pl</a>
          </p>
          <p>
            <a href="http://fb.com/krawczyk99">fb.com/krawczyk99</a>
          </p>
        </h3>
      </section>
    );
  }
}
