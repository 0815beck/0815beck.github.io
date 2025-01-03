import { BrowserRouter, Routes, Route } from "react-router-dom"
import UeberMich from "./pages/UeberMich"
import Navbar from "./components/Navbar"
import Texte from "./pages/Texte" 

function App() {
  return (
    <BrowserRouter>
      <Navbar className=""/>
      <Routes>
        <Route path="/" element={<UeberMich />}/>
        <Route path="/texte" element={<Texte />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
