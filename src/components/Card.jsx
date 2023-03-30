function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../${props.item.coverImg}`} className="card-image" />
      <div className="card-stats">
        <div>
          <img src="../star.png" className="card-star" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • </span>
          <span className="gray">{props.item.location}</span>
        </div>
        <div>
          <p>{props.item.title}</p>
          <p><span className="bold">From ${props.item.price} / person</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card