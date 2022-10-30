import { useNavigate } from "react-router-dom"

function SignInModal() {

    const navigate = useNavigate()

    return (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

            <div onClick={() => navigate(-1)} className="w-full h-full bg-black/80"></div>

            <div className='absolute bg-white p-8'>
                <p className="text-3xl font-bold">Sign in</p>

                <input type="text" placeholder="Email" className="mt-5 w-full p-2 border"/>
                <input type="text" placeholder="Password" className="mt-5 w-full p-2 border"/>

                <div className="mt-5 flex justify-end">
                    <button className="py-2 px-4 bg-black text-white hover:opacity-70 transition">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default SignInModal