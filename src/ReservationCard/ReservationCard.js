import React from 'react';

function ReservationCard(props) {
  return {
    <article className='reservation-card'>
      <p>name: {props.reservation.name}</p>
      <p>date: {props.reservation.date}</p>
      <p>time: {props.reservation.time}</p>
    </article>
  }
}
//
export default ReservationCard;
