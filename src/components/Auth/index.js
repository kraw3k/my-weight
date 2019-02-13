import React, { Component } from "react";
import firebase, { auth } from "../../firebase";
import firebaseui from "firebaseui";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  componentDidMount = () => {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true;
        },
        uiShown: function() {
          document.getElementById("loader").style.display = "none";
          if (
            document.getElementsByClassName("firebaseui-tospp-full-message")[0]
          ) {
            document.getElementsByClassName(
              "firebaseui-tospp-full-message"
            )[0].innerHTML =
              "<h4>Registration is required to store your weight.</h4><h4>Don't worry, we won't send spam.</h4>";
          }
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "/list",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      tosUrl: "#",
      privacyPolicyUrl: "#"
    };

    // Initialize the FirebaseUI Widget using Firebase.
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) ui = new firebaseui.auth.AuthUI(firebase.auth());

    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  };

  render() {
    return (
      <div id="authDiv">
        <div className="welcome">
          <h1>Weight app</h1>
          <h3>Easily controll your weight</h3>
        </div>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
      </div>
    );
  }
}
