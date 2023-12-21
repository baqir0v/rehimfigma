import './App.scss'
import Navbar from './layouts/navbar'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './layouts/footer'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
