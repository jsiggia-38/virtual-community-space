import React from 'react'
import '../css/Event.css'

const Event = ({ event }) => {

    const formattedDate = new Date(event.event_date).toLocaleString()

    return (
        <article className='event-information'>
            <img src={event.image} alt={event.title} />
            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p>{formattedDate}</p>
                </div>
            </div>
        </article>
    )
}

export default Event