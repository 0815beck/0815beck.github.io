import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="h-fit">
            <ul className="flex">
                <li className="flex-auto">
                    <Link to="/" 
                    className="
                    p-2 block text-center
                    border-solid
                    border-violet-400
                    border-b-2
                    bg-violet-300
                    hover:bg-violet-700
                    hover:text-white
                    font-bold">
                        Home
                    </Link>
                </li>
                <li className="flex-auto">
                    <Link to="/texte" className="
                    p-2 block text-center
                    border-solid
                    border-purple-400
                    border-b-2
                    bg-purple-300
                    hover:bg-purple-700
                    hover:text-white
                    font-bold">Texte</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/blog" className="
                    p-2 block text-center 
                    border-solid
                    border-fuchsia-400
                    border-b-2
                    bg-fuchsia-300
                    hover:bg-fuchsia-700
                    hover:text-white
                    font-bold">Blog</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/resume" className="
                    p-2 block text-center
                    border-solid
                    border-pink-400
                    border-b-2
                    bg-pink-300
                    hover:bg-pink-700
                    hover:text-white
                    font-bold">Resume</Link>
                </li>
                <li className="flex-auto">
                    <Link to="/kontakt" className="
                    p-2 block text-center
                    border-solid
                    border-rose-400
                    border-b-2
                    bg-rose-300
                    hover:bg-rose-700
                    hover:text-white
                    font-bold">Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 