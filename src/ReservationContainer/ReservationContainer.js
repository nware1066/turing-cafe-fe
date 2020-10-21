import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js';


function ReservationContainer(props) {
  const allReservations = props.reservations.map(reservation => {
    return  <ReservationCard
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
    />
  })
  return (
    <section className='all-reservation-display'>
      {allReservations}
    </section>
  )
}


export default ReservationContainer;
