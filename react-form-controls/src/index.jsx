import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
    this.state = { email: '' };

  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSumit(event) {
    console.log('this.state: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
