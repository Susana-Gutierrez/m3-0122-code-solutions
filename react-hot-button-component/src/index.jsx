import React from 'react';
import ReactDOM from 'react-dom';

let counter = 0;

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {

    let btnColor = 'light-gray';
    let color = 'black';

    if (this.state.isClicked) {
      counter = counter + 1;
    }

    if ((counter > 2) && (counter < 6)) {
      btnColor = 'blue';
      color = 'white';
    } else if ((counter > 5) && (counter < 9)) {
      btnColor = 'purple';
      color = 'white';
    } else if ((counter > 8) && (counter < 12)) {
      btnColor = 'red';
      color = 'white';
    } else if ((counter > 11) && (counter < 15)) {
      btnColor = 'orange';
      color = 'black';
    } else if ((counter > 14) && (counter < 18)) {
      btnColor = 'yellow';
      color = 'black';
    } else if (counter > 17) {
      btnColor = 'white';
      color = 'black';
    }

    return <button style={{ backgroundColor: btnColor, color }} onClick={this.handleClick}>Hot Button</button>;
  }
}

ReactDOM.render(<HotButton />, document.getElementById('root'));
