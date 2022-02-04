import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let button;
    if (this.state.isClicked) {
      button = <button onClick={this.handleClick}>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }
    return button;
  }

}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
