import React from 'react';

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClickedBar: false,
      isClickedMenu: true
    };
  }

  handleClick() {
    this.setState(status => ({
      isClickedBar: !status.isClickedBar,
      isClickedMenu: !status.isClickedMenu
    }));
  }

  position() {
    let position;
    let overlayStatus;

    if (this.state.isClickedBar === true) {
      overlayStatus = 'overlay';
      position = 'positionIn';
    } else {
      overlayStatus = 'remove-overlay';
      position = 'positionOut';
    }

    const positions = { position: position, overlayStatus: overlayStatus };
    return positions;

  }

  render() {

    const postAndOver = this.position();

    return (
      <div>
        <div className={postAndOver.overlayStatus} onClick={this.handleClick}></div>

        <div className="container">
          <div className="bar-position">
            <i onClick={this.handleClick} className="fas fa-regular fa-bars"></i>
          </div>

          <div className={`column ${postAndOver.position}`}>
              <div className="menu-title">Menu</div>
              <div onClick={this.handleClick} className="menu">About</div>
              <div onClick={this.handleClick} className="menu">Get Started</div>
              <div onClick={this.handleClick} className="menu">Sign In</div>
          </div>
        </div>

      </div>
    );
  }
}

export default AppDrawer;
