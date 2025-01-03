import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="h-fit">
            <ul className="flex">
                <li className="flex-auto">
                    <Link to="/" 
                    className="
                    p-3 block text-center
                    border-solid
                    border-violet-300
                    border-b-2
                    bg-violet-200
                    hover:bg-violet-800
                    hover:text-white
                    font-bold">
                        Über mich
                    </Link>
                </li>
                <li className="flex-auto">
                    <Link to="/texte" className="
                    p-3 block text-center
                    border-solid
                    border-purple-300
                    border-b-2
                    bg-purple-200
                    hover:bg-purple-800
                    hover:text-white
                    font-bold">Texte</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="
                    p-3 block text-center 
                    border-solid
                    border-fuchsia-300
                    border-b-2
                    bg-fuchsia-200
                    hover:bg-fuchsia-800
                    hover:text-white
                    font-bold">Blog</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="
                    p-3 block text-center
                    border-solid
                    border-pink-300
                    border-b-2
                    bg-pink-200
                    hover:bg-pink-800
                    hover:text-white
                    font-bold">Resume</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/" className="
                    p-3 block text-center
                    border-solid
                    border-rose-300
                    border-b-2
                    bg-rose-200
                    hover:bg-rose-800
                    hover:text-white
                    font-bold">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 