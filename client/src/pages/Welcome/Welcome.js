import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Input } from "semantic-ui-react";
import styles from "./styles";

const Welcome = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("../pages/Menu");
  };
  return (
    <div className="body">
      <div>
        <img />
        <p className="title">Dim-Sum</p>
      </div>
      <div className="flex">
        <div className="ui input">
          <Input type="text" placeholder="Passcode" />
        </div>
        <Button
          className="btn"
          content="Enter"
          icon={{ color: "red", name: "utensils" }}
          onClick={clickHandler}
        />
      </div>
    </div>
  );
};
export default Welcome;
