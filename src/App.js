import React, { Component } from "react";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import Panel from "./components/Panel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, isLoaded: false };
    this.logout = this.logout.bind(this);
  }

  componentDidMount = async () => {
    await auth.onAuthStateChanged(user => {
      user
        ? this.setState({ user, isLoaded: true })
        : this.setState({ isLoaded: true });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  render() {
    return this.state.isLoaded ? (
      this.state.user ? (
        <Panel logout={this.logout} />
      ) : (
        <Auth />
      )
    ) : null;
  }
}

export default App;
