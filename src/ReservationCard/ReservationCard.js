import React from 'react';
import './reservationCard.css'

function ReservationCard(props) {
  return (
    <article className='reservation-card'>
      <p>name: {props.name}</p>
      <p>date: {props.date}</p>
      <p>time: {props.time}</p>
    </article>
  )
}
//
export default ReservationCard;
