function Card(props) {
  return (
    <div className="card">
      <img src={`../${props.img}`} className="card-image" />
      <div className="card-stats">
        <div>
          <img src="../star.png" className="card-star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <div>
          <p>{props.title}</p>
          <p><span className="bold">From ${props.price} / person</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card