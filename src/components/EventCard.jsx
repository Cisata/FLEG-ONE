import { CalendarDays, MapPin, Users } from 'lucide-react'
import Button from './Button'

export default function EventCard({ event, onRegister }) {
  return (
    <article className="event-card">
      <div className="event-card__image-wrap">
        <img src={event.image} alt={`${event.name} football event`} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85' }} />
        <span className={`status status--${event.status === 'Registration open' ? 'open' : 'soon'}`}>{event.status}</span>
      </div>
      <div className="event-card__body">
        <h3>{event.name}</h3>
        <div className="event-card__details">
          <span><MapPin size={15} aria-hidden="true" />{event.location}</span>
          <span><CalendarDays size={15} aria-hidden="true" />{event.date}</span>
          <span><Users size={15} aria-hidden="true" />{event.capacity} players</span>
        </div>
        <Button variant="text" onClick={onRegister}>{event.status === 'Registration open' ? 'Register now' : 'Get notified'}</Button>
      </div>
    </article>
  )
}
