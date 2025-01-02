import { BrowserRouter, Routes, Route } from "react-router-dom"
import UeberMich from "./pages/UeberMich"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar className=""/>
      <Routes>
        <Route path="/" element={<UeberMich />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
