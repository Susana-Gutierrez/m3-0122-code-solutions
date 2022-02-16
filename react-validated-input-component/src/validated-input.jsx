import React from 'react';

class ValidatedInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      password: '',
      isClicked: false

    };
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  checkInput() {
    let check;
    let passwordMessage = '';

    if (this.state.isClicked === true) {
      check = <span className="x-mark"> &#10005; </span>;
      passwordMessage = 'A password is required';
    }

    if (this.state.password.length > 0) {
      passwordMessage = 'Your password is too short';
    }

    if (this.state.password.length >= 8) {
      check = <span className="check-mark"> &#10003; </span>;
      passwordMessage = '';
    }

    const result = { checkMark: check, message: passwordMessage };

    return (result);

  }

  render() {

    const result = this.checkInput();

    return (
      <div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="password" id="password" className="input-password" value={this.state.password} onClick={this.handleClick} onChange={this.handleChange} />{result.checkMark}
        </div>
        <div><span className="password-msg">{result.message}</span></div>
      </div>
    );
  }
}

export default ValidatedInput;
