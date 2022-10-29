import Header from "../Header"
import { Link, useLocation } from "react-router-dom"

function TopScreen() {

    const location = useLocation()

    return (
        <div>

            <Header />

            <main className="px-3">

                <h1 className="font-bold text-xl">Top</h1>
                <p mt-5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque qui nihil iste esse ipsa impedit quia, molestiae officia recusandae hic inventore unde facilis eaque debitis est. Dolores, aperiam voluptatibus!</p>

                <div className="mt-5 flex gap-6">

                    <Link to='/images/forest' state={{ previousPath: location.pathname }} className="hover:opacity-90 transition">
                        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Forest" className="aspect-video w-96" />
                    </Link>

                    <Link to='/images/river' state={{ previousPath: location.pathname }} className="hover:opacity-90 transition">
                        <img src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="River" className="aspect-video w-96" />
                    </Link>

                    <Link to='/images/mountains' state={{ previousPath: location.pathname }} className="hover:opacity-90 transition">
                        <img src="https://images.unsplash.com/photo-1632167213406-9537c9494ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Mountains" className="aspect-video w-96" />
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default TopScreen