import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

const Welcome = () => {
    const history = useHistory()
    const clickHandler = () => {
        history.push('../pages/Menu')
    }
    return (
        <div>
            <p className="my-golden p">this is the welcome page found at /welcome</p>
            <Button className="my-red-button">hello</Button>
            <Button 
            content="Menu" 
            icon={{ color: 'red', name: 'utensils' }} 
            onClick={clickHandler}
            />
        </div>
    );
}
export default Welcome;