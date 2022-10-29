import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header className="flex justify-between">
            <div>
                <NavLink to='/'>Hello Modal</NavLink>
            </div>

            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Top</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header