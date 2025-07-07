import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import NewGradient from "./pages/NewGradient"
import EditGradient from "./pages/EditGradient"
import { useState } from "react"
import Navbar from "./components/Navbar"

const getInitialGradients = () => {
  const saved = localStorage.getItem("gradients")
  return saved ? JSON.parse(saved) : []
}

export default function App() {
  const [gradients, setGradients] = useState(getInitialGradients)

  const updateGradients = (newGradients) => {
    setGradients(newGradients)
    localStorage.setItem("gradients", JSON.stringify(newGradients))
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home gradients={gradients} setGradients={updateGradients} />} />
          <Route
            path="/new"
            element={<NewGradient setGradients={updateGradients} gradients={gradients} />}
          />
          <Route
            path="/edit/:id"
            element={<EditGradient setGradients={updateGradients} gradients={gradients} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
