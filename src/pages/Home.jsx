import { Link } from "react-router-dom"
import GradientItem from "../components/GradientItem"
import "./CSS/Home.css"

export default function Home({ gradients, setGradients }) {
  const handleDelete = (id) => {
    setGradients(gradients.filter((g) => g.id !== id))
  }

  return (
    <div className="home-wrapper">
      <div className="home-cont">
        <div className="home">
          <h2>Gradient List</h2>

          <div className="gradients-cont">
            {gradients.map((g) => (
              <GradientItem key={g.id} gradient={g} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
