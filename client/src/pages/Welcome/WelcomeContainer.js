import React, { Component } from "react";
import Welcome from "./Welcome";
import TableNumber from "../../components/TableNumber";

class WelcomeContainer extends Component {
  render() {
    return (
      <div>
        <TableNumber />
        <Welcome />
      </div>
    );
  }
}
export default WelcomeContainer;
