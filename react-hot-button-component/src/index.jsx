import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {

    let btnColor = 'light-gray';
    let color = 'black';

    if ((this.state.counter > 2) && (this.state.counter < 6)) {
      btnColor = 'blue';
      color = 'white';
    } else if ((this.state.counter > 5) && (this.state.counter < 9)) {
      btnColor = 'purple';
      color = 'white';
    } else if ((this.state.counter > 8) && (this.state.counter < 12)) {
      btnColor = 'red';
      color = 'white';
    } else if ((this.state.counter > 11) && (this.state.counter < 15)) {
      btnColor = 'orange';
      color = 'black';
    } else if ((this.state.counter > 14) && (this.state.counter < 18)) {
      btnColor = 'yellow';
      color = 'black';
    } else if (this.state.counter > 17) {
      btnColor = 'white';
      color = 'black';
    }

    return <button style={{ backgroundColor: btnColor, color }} onClick={this.handleClick}>Hot Button</button>;
  }
}

ReactDOM.render(<HotButton />, document.getElementById('root'));
