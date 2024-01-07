import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Service from "./services/services"
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Link to="">Accueil</Link>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
