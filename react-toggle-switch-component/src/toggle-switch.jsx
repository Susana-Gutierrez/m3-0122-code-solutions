import React from 'react';

class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isSwitchOn: true };
  }

  handleClick() {
    this.setState(switchState => ({
      isSwitchOn: !switchState.isSwitchOn
    }));
  }

  handlePosition() {

    const switchPosition = {
      togglePosition: '',
      label: ''
    };

    if (this.state.isSwitchOn === true) {
      switchPosition.togglePosition = 'toggleOn';
      switchPosition.label = 'ON';
    } else {
      switchPosition.togglePosition = 'toggleOff';
      switchPosition.label = 'OFF';
    }

    return switchPosition;

  }

  render() {

    const handlePosition = this.handlePosition();

    return (
       <div>
        <input onClick={this.handleClick} type="checkbox" id="switch" className="checkbox" />
        <label htmlFor="switch" className={`toggle ${handlePosition.togglePosition}`}><span className="toggleLable">{handlePosition.label}</span></label>
       </div>

    );
  }
}

export default ToggleSwitch;
