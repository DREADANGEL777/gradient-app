import { Link } from "react-router-dom"
import "./CSS/GradientItem.css"

export default function GradientItem({ gradient, onDelete }) {
  const { id, color1, color2 } = gradient

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this gradient?")) {
      onDelete(id)
    }
  }

  return (
    <div className="gradient-cont">
      <div
        className="gradient-box"
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      ></div>
      <div className="under-cont">
        <div className="colors">
          {color1} → {color2}
        </div>
        <div className="btn-cont">
          <button onClick={handleDeleteClick} className="item-btn-delete">
            Delete
          </button>

          <button className="item-btn-edit">
            <Link to={`/edit/${id}`} className="item-link">
              Edit
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
