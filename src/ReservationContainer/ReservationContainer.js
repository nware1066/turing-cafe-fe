import React from 'react';
import ReservationCard from './ReservationCard/ReservationCard.js';


function displayAllReservations(props) {
  const allReservations = props.reservations.map(reservation => {
    return <ReservationCard
  })
}


export default ReservationContainer;
