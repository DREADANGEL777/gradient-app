import { Link } from "react-router-dom"
import './CSS/GradientItem.css'

export default function GradientItem({ gradient, onDelete }) {
  const { id, color1, color2 } = gradient
  return (
    <div className="gradient-cont">
      <div
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
          padding: "1rem",
          margin: "1rem 0",
          borderRadius: "8px",
          color: "#fff",
          width: "100px",
          height: "100px",
        }}
      ></div>
      <div>
        <div>
          {color1} → {color2}
        </div>
        <div className="btn-cont">
          <button onClick={() => onDelete(id)} className="item-btn">
            Delete
          </button>
          <Link to={`/edit/${id}`}>
            <button className="item-btn">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
