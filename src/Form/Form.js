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
      </form>
    )
  }
}

export default Form;
