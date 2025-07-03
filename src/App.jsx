import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import NewGradient from "./pages/NewGradient"
import EditGradient from "./pages/EditGradient"
import { useState } from "react"
import Navbar from "./components/Navbar"

export default function App() {
  const [gradients, setGradients] = useState([])

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home gradients={gradients} setGradients={setGradients} />} />
          <Route path="/new" element={<NewGradient setGradients={setGradients} />} />
          <Route
            path="/edit/:id"
            element={<EditGradient gradients={gradients} setGradients={setGradients} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
