import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="flex-auto">
                    <Link to="/" 
                    className="border p-3 block text-center">Über mich</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="border p-3 block text-center">Mathe & Logik</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="border p-3 block text-center">Blog</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="border p-3 block text-center">Resume</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="border p-3 block text-center">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 