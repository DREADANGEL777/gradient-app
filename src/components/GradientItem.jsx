import { Link } from "react-router-dom"

export default function GradientItem({ gradient, onDelete }) {
  const { id, color1, color2 } = gradient
  return (
    <div
      className="gradient-cont"
      style={{
        display: "flex",
      }}
    >
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
        <button onClick={() => onDelete(id)}>Delete</button>
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  )
}
