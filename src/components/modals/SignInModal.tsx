import { useNavigate } from "react-router-dom"
import { MdOutlineClose } from "react-icons/md"


function SignInModal() {

    const navigate = useNavigate()

    return (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

            <div onClick={() => navigate(-1)} className="w-full h-full bg-black/20"></div>

            <div className='absolute bg-white p-8'>

                <button onClick={() => navigate(-1)} className="hover:opacity-60">
                    <MdOutlineClose className="text-2xl text-gray-500" />
                </button>

                <p className="mt-6 text-3xl font-bold">Sign in</p>

                <input type="text" placeholder="Email" className="mt-6 w-full p-2 border" />
                <input type="text" placeholder="Password" className="mt-6 w-full p-2 border" />

                <div className="mt-6 flex justify-end">
                    <button className="py-2 px-4 bg-black text-white hover:opacity-60 transition">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default SignInModal