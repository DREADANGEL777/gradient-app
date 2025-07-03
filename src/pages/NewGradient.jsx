import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./CSS/NewGradient.css"

const isValidHex = (color) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)

export default function NewGradient({ setGradients }) {
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const navigate = useNavigate()

  const handleAdd = () => {
    if (!isValidHex(color1) || !isValidHex(color2)) return
    setGradients((prev) => [...prev, { id: uuidv4(), color1, color2 }])
    navigate("/")
  }

  const disabled = !isValidHex(color1) || !isValidHex(color2)

  return (
    <div className="new-wrapper">
      <div className="new-cont">
        <div className="new">
          <h2>Add New Gradient</h2>
          <input value={color1} onChange={(e) => setColor1(e.target.value)} placeholder="#000000" />
          <input value={color2} onChange={(e) => setColor2(e.target.value)} placeholder="#ffffff" />
          <button onClick={handleAdd} disabled={disabled}>
            Add Gradient
          </button>
        </div>
      </div>
    </div>
  )
}
