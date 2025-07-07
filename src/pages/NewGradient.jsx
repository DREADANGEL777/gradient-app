import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./CSS/NewGradient.css"

const isValidHex = (color) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)

export default function NewGradient({ setGradients, gradients }) {
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleAdd = () => {
    setSubmitted(true)

    if (color1 === "" && color2 === "") {
      setError("Please fill both fields")
      return
    }

    if (color1 === "") {
      setError("Please fiil first field")
      return
    }

    if (color2 === "") {
      setError("Please fiil second field")
      return
    }

    if (!isValidHex(color1) && !isValidHex(color2)) {
      setError("Each color must be a valid hex code (#xxx or #xxxxxx).")
      return
    }

    if (!isValidHex(color1)) {
      setError("First color must be a valid hex code (#xxx or #xxxxxx).")
      return
    }

    if (!isValidHex(color2)) {
      setError("Second color must be a valid hex code (#xxx or #xxxxxx).")
      return
    }

    const newGradient = { id: uuidv4(), color1, color2 }
    const updated = [...gradients, newGradient]
    setGradients(updated)
    navigate("/")
  }

  const handleColorChange = (setter) => (e) => {
    setter(e.target.value)
    if (submitted) setError("")
  }

  const disabled = !isValidHex(color1) || !isValidHex(color2)

  return (
    <div className="new-wrapper">
      <div className="new-cont">
        <div className="new">
          <h2>ADD NEW GRADIENT</h2>
          <div className="new-mini-cont">
            <div>
              <input value={color1} onChange={handleColorChange(setColor1)} placeholder="#000000" />
              <input value={color2} onChange={handleColorChange(setColor2)} placeholder="#ffffff" />
            </div>

            <button onClick={handleAdd} className="new-btn">
              Add Gradient
            </button>
          </div>
          {submitted && error && <p className="error-msg">{error}</p>}
        </div>
      </div>
    </div>
  )
}
