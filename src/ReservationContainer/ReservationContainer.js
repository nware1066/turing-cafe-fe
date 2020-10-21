import React from 'react';
import ReservationCard from './ReservationCard/ReservationCard.js';


function displayAllReservations(props) {
  const allReservations = props.reservations.map(reservation => {
    return <ReservationCard
    <article className='reservation-card'>
      <p>name={reservation.name}</p>
      <p>date={reservation.date}</p>
      <p>time={reservation.time}</p>
    </article>
    />
  })
  return (
    <section className='all-reservation-display'>
      {allReservations}
    </section>
  )
}


export default ReservationContainer;
