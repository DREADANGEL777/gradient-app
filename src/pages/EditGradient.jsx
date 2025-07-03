import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "./CSS/EditGradient.css"

const isValidHex = (color) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)

export default function EditGradient({ gradients, setGradients }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")

  useEffect(() => {
    const g = gradients.find((g) => g.id === id)
    if (g) {
      setColor1(g.color1)
      setColor2(g.color2)
    }
  }, [id, gradients])

  const handleEdit = () => {
    if (!isValidHex(color1) || !isValidHex(color2)) return
    setGradients((prev) => prev.map((g) => (g.id === id ? { ...g, color1, color2 } : g)))
    navigate("/")
  }

  const disabled = !isValidHex(color1) || !isValidHex(color2)

  return (
    <div className="edit-wrapper">
      <div className="edit-cont">
        <div className="edit">
          <h2>Edit Gradient</h2>
          <input value={color1} onChange={(e) => setColor1(e.target.value)} />
          <input value={color2} onChange={(e) => setColor2(e.target.value)} />
          <button onClick={handleEdit} disabled={disabled}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
