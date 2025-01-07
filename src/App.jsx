import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import UeberMich from "./pages/UeberMich";
import Navbar from "./components/Navbar";
import Texte from "./pages/Texte";
import useIsMd from "./hooks/useIsMd";
import MobileNavbar from "./components/MobileNavbar";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";
import Resume from "./pages/Resume";

function App() {
  const isMd = useIsMd();
  const [mobileNavbarIsOpen, setMobileNavbarIsOpen] = useState(false);

  const closeMobileMenuIfOpen = () => {
    if (mobileNavbarIsOpen) {
      setMobileNavbarIsOpen(false);
    }
  };

  return (
    <>
      {isMd ? (
        <Navbar />
      ) : (
        <MobileNavbar
          isOpen={mobileNavbarIsOpen}
          setIsOpen={setMobileNavbarIsOpen}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<UeberMich onClick={closeMobileMenuIfOpen} />}
        />
        <Route
          path="/texte"
          element={<Texte onClick={closeMobileMenuIfOpen} />}
        />
        <Route
          path="/blog"
          element={<Blog onClick={closeMobileMenuIfOpen} />}
        />
        <Route
          path="/resume"
          element={<Resume onClick={closeMobileMenuIfOpen} />}
        />
        <Route
          path="/kontakt"
          element={<Kontakt onClick={closeMobileMenuIfOpen} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
