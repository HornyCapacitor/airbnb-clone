import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Data from "./Data.jsx"

function App() {

  const cards = Data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        // {...item} I can use this instead of item={item} in order to receive the same result of items being imported as different values from Data.jsx. If so, I should clean my code whenever I put "props.item.xyz" to set it back to "props.xyz".
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}

export default App
