import React, {Fragment, useState, useEffect, Component} from 'react';

export default class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0, 
      timerTime: 0
    };
  }
  
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.props.time
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.props.time
      });
    }, 10);
  };

  componentDidMount(){
    this.startTimer();
  }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
        <Fragment>
            {hours} : {minutes} : {seconds} 
        </Fragment>
      )
  }
}