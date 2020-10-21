import React from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleInput = (event) => {
    ths.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form className='reservation-form'>
        <div>
        <label htmlFor='user-name'>Name:</label>
        <input
        className='reservation-name'
        type='text'
        placeholder='party name'
        value={this.state.name}
        onChange={this.handleInput}
        />
        </div>
      </form>
    )
  }
}

export default Form;
