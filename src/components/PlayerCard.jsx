import { MapPin } from 'lucide-react'

export default function PlayerCard({ player }) {
  return (
    <article className="player-card">
      <div className="player-card__image-wrap">
        <img src={player.image} alt={`${player.name}, ${player.nickname}`} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=85' }} />
        <span className="player-card__rank">#{String(player.ranking).padStart(2, '0')}</span>
      </div>
      <div className="player-card__body">
        <span className="eyebrow">{player.nickname}</span>
        <h3>{player.name}</h3>
        <p className="muted"><MapPin size={14} aria-hidden="true" />{player.location}</p>
        <div className="player-card__stats">
          <span><b>{player.wins}</b> Wins</span>
          <span><b>{player.losses}</b> Losses</span>
          <span><b>{player.goals}</b> Goals</span>
        </div>
      </div>
    </article>
  )
}
