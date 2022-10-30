import { Link, NavLink, useLocation } from "react-router-dom"

function Header() {

    const location = useLocation()

    return (
        <header className="flex justify-between p-3 items-center">
            <div>
                <NavLink to='/' className="text-3xl">Hello Modal</NavLink>
            </div>

            <div>
                <ul className="flex gap-6">

                    <li>
                        <NavLink to='/' className="hover:underline">Top</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about' className="hover:underline">About</NavLink>
                    </li>

                    <li>
                        <Link to='/sign-in' state={{ backgroundPath: location.pathname }} className="py-2 px-4 bg-black text-white hover:opacity-70">Sign in</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header