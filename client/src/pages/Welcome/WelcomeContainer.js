import React, { Component } from "react";
import Welcome from "./Welcome";
import tableNumber from "../../components/tableNumber";

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <tableNumber />
        <Welcome />
      </div>
    );
  }
}
export default WelcomeContainer;
