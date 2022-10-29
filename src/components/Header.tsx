import { NavLink } from "react-router-dom"

function Header() {

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
                </ul>
            </div>
        </header>
    )
}

export default Header