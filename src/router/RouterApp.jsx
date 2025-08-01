import { Router, Routes, Route } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Home } from "../views/Home"
import { Login } from "../views/Login"
import { Register } from "../views/Register"
import { NotFound } from "../views/NotFound"



const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}


export { RouterApp }