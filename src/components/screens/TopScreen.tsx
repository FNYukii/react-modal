import Header from "../Header"
import { Link, useLocation } from "react-router-dom"

function TopScreen() {

    const location = useLocation()

    return (
        <div>

            <Header />

            <main className="px-3">

                <h1 className="font-bold text-xl">Top</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque qui nihil iste esse ipsa impedit quia, molestiae officia recusandae hic inventore unde facilis eaque debitis est. Dolores, aperiam voluptatibus!</p>

                <Link to='/image' state={{ backgroundPath: location.pathname }} className="hover:opacity-90 transition block mt-3">
                    <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Forest" className="aspect-video w-96" />
                </Link>
            </main>
        </div>
    )
}

export default TopScreen