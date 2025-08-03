import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../views/Dashboard"
import { Home } from "../views/Home"
import { Login } from "../views/Login"
import { Register } from "../views/Register"
import { NotFound } from "../views/NotFound"
import { PrivateRoute } from "../components/PrivateRoute"
import { AboutUs } from "../views/AboutUs"



const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export { RouterApp }