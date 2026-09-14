export default function RankingRow({ player }) {
  return (
    <div className="ranking-row" role="row">
      <span className="ranking-row__rank" role="cell">{String(player.rank).padStart(2, '0')}</span>
      <strong role="cell">{player.playerName}</strong>
      <span role="cell" data-label="Wins">{player.wins}</span>
      <span role="cell" data-label="Goals">{player.goals}</span>
      <span className="ranking-row__points" role="cell" data-label="Points">{player.points}</span>
    </div>
  )
}
