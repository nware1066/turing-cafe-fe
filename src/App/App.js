import React, { Component } from 'react';
import {getReservations} from '../apiCalls'
import './App.css';
import ReservationCard from './ReservationCard/ReservationCard.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(reservations => this.setState({reservations: reservations}))
    .catch(error => console.log('set error', error))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
