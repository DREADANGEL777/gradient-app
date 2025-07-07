import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./CSS/EditGradient.css"

const isValidHex = (color) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)

export default function EditGradient({ gradients, setGradients }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const gradientToEdit = gradients.find((g) => g.id === id)
  const [color1, setColor1] = useState(gradientToEdit?.color1 || "")
  const [color2, setColor2] = useState(gradientToEdit?.color2 || "")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleEdit = () => {
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

    const updated = gradients.map((g) => (g.id === id ? { ...g, color1, color2 } : g))
    setGradients(updated)
    navigate("/")
  }

  const handleColorChange = (setter) => (e) => {
    setter(e.target.value)
    if (submitted) setError("") // очистити помилку при зміні, якщо вже натиснуто кнопку
  }

  const disabled = !isValidHex(color1) || !isValidHex(color2)

  return (
    <div className="edit-wrapper">
      <div className="edit-cont">
        <div className="edit">
          <h2>Edit Gradient</h2>
          <div className="edit-mini-cont">
            <div>
              <input value={color1} onChange={handleColorChange(setColor1)} />
              <input value={color2} onChange={handleColorChange(setColor2)} />

              <button onClick={handleEdit} className="edit-btn">
                Save Changes
              </button>
            </div>
          </div>
          {submitted && error && <p className="error-msg">{error}</p>}
        </div>
      </div>
    </div>
  )
}
