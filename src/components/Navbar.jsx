import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="mb-2">
            <ul className="flex">
                <li className="flex-auto">
                    <Link to="/" 
                    className="border p-3 block text-center">Über mich</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/texte" className="border p-3 block text-center">Texte</Link>
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