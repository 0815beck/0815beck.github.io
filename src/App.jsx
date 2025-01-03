import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import UeberMich from "./pages/UeberMich"
import Navbar from "./components/Navbar"
import Texte from "./pages/Texte"
import useIsMd from "./hooks/useIsMd" 
import MobileNavbar from "./components/MobileNavbar"

function App() {
  const isMd = useIsMd()
  const [mobileNavbarIsOpen, setMobileNavbarIsOpen] = useState(false)

  const closeMobileMenuIfOpen = () => {
    if (mobileNavbarIsOpen) { setMobileNavbarIsOpen(false) }
  }

  return (
    <BrowserRouter>
      {isMd ? <Navbar /> : <MobileNavbar 
          isOpen={mobileNavbarIsOpen}
          setIsOpen={setMobileNavbarIsOpen}/>
      }
      <Routes>
        <Route path="/" element={<UeberMich onClick={closeMobileMenuIfOpen}/>}/>
        <Route path="/texte" element={<Texte onClick={closeMobileMenuIfOpen}/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
