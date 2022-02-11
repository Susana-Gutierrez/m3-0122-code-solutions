import React from 'react';

class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStopwatch = this.handleStopwatch.bind(this);
    this.state = {
      second: 0,
      isPlayed: false
    };
  }

  startCounting() {
    this.timerID = setInterval(
      () => this.setState({ second: this.state.second + 1 }), 1000
    );
  }

  stopCounting() {
    clearInterval(this.timerID);
    this.timerID = null;
  }

  handlePlay() {
    this.setState(buttonState => ({
      isPlayed: !buttonState.isPlayed
    }));

    if (this.state.isPlayed === false) {
      this.startCounting();
    } else {
      this.stopCounting();
    }
  }

  handleStopwatch() {
    if (this.state.isPlayed === false) {
      this.setState({
        second: 0
      });
    }

  }

  handleButtons() {
    let buttonIcon;

    if (this.state.isPlayed === false) {
      buttonIcon = 'fas fa-caret-right';
    } else {
      buttonIcon = 'fas fa-pause';
    }

    return buttonIcon;

  }

  render() {

    const buttonIcon = this.handleButtons();

    return (
        <div className="watch">
        <div onClick={this.handleStopwatch} className="seconds">{this.state.second}</div>
        <i onClick={this.handlePlay} className={buttonIcon}></i>
        </div>
    );
  }
}

export default Stopwatch;
