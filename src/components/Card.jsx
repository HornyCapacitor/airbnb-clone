function Card(props) {
  return (
    <div className="card">
      <img src="../card-1.png" className="card-image" />
      <div className="card-stats">
        <div>
          <img src="../star.png" className="card-star" />
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <div>
          <p>Life Lessons with Katie Zeferes</p>
          <p><span className="bold">From $136 / person</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card