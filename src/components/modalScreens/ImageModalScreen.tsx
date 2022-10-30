import { useNavigate } from 'react-router-dom'

function ImageModalScreen() {

    const navigate = useNavigate()

    return (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

            <div onClick={() => navigate(-1)} className="w-full h-full bg-black/80"></div>

            <div className='absolute'>
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Forest" />
            </div>
        </div>
    )
}

export default ImageModalScreen