import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.state = {
      second: 0,
      counter: 0
    };
  }

  controlCarousel() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  controlPreviousImg() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  resetCarousel() {
    this.setState({
      counter: 0
    });
  }

  startMoving() {
    this.timerID = setInterval(
      () => {
        if (this.state.counter === this.props.images.length - 1) {
          this.resetCarousel();
        } else {
          this.controlCarousel();
        }
      }
      , 3000
    );
  }

  stopMoving() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.startMoving();
  }

  handleDotClick(index) {
    this.setState({
      counter: index
    });
    clearInterval(this.timerID);
    this.startMoving();
  }

  getDots() {
    const todoImages = this.props.images;
    const todoListDot = todoImages.map((todo, index) => {
      let dotClassName;

      if (index === this.state.counter) {
        dotClassName = 'fas fa-solid fa-circle';
      } else {
        dotClassName = 'fas fa-regular fa-circle-notch';
      }
      return (
        <div onClick={() => this.handleDotClick(index)} className="dots" key={index}><i className={dotClassName}></i></div>
      );
    });
    return todoListDot;
  }

  handleNext() {
    if (this.state.counter === this.props.images.length - 1) {
      this.resetCarousel();
    } else {
      this.controlCarousel();
    }
    clearInterval(this.timerID);
    this.startMoving();
  }

  handlePrevious() {
    if (this.state.counter === 0) {
      this.setState({
        counter: this.props.images.length - 1
      });
    } else {
      this.controlPreviousImg();
    }
    clearInterval(this.timerID);
    this.startMoving();
  }

  render() {

    const todoImages = this.props.images;
    const dots = this.getDots();

    return (
      <div className="container">
        <div className="card-container">
          <div className="direction-icon left"><i onClick={this.handlePrevious} className="fas fa-solid fa-angle-left"></i></div>
          <div className='image' ><img src={todoImages[this.state.counter].url} /></div>
          <div className="direction-icon right"><i onClick={this.handleNext} className="fas fa-solid fa-angle-right"></i></div>
        </div>
        <div className="dots-row" >{dots}</div>
      </div>

    );
  }

}

export default Carousel;
