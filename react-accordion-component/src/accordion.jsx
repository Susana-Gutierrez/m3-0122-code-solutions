import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      previousClick: '',
      currentClick: ''
    };
  }

  handleClick(event) {

    this.setState(topicState => ({
      previousClick: this.state.currentClick,
      currentClick: event
    }));
  }

  handleReset() {
    this.setState(topicReset => ({
      previousClick: ''
    }));
  }

  gettingTopics() {

    const listTopics = this.props.topics;
    const todoList = listTopics.map((todo, index) => {

      if (index === this.state.currentClick) {
        if (this.state.currentClick === this.state.previousClick) {
          return (
            <div key={index}>
              <div className={`topic ${todo.title}`} onClick={() => this.handleReset()}>{todo.title}</div>
              <div className={`topic ${todo.title} hidden`}>{todo.details}</div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className={`topic ${todo.title}`} onClick={() => this.handleClick(index)}>{todo.title}</div>
              <div className={`topic ${todo.title}`}>{todo.details}</div>
            </div>
          );
        }
      } else {
        return (
          <div key={index}>
            <div className={`topic ${todo.title}`} onClick={() => this.handleClick(index)}>{todo.title}</div>
            <div className={`topic ${todo.title} hidden`}>{todo.details}</div>
          </div>
        );

      }
    });

    return todoList;

  }

  render() {
    const todoList = this.gettingTopics();
    return (
      <div className="container">{todoList}</div>
    );
  }
}

export default Accordion;
