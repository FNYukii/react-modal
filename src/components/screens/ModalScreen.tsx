import { useNavigate } from 'react-router-dom'

function ModalScreen() {

    const navigate = useNavigate()

    return (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex justify-center items-center">

            <div onClick={() => navigate(-1)} className="w-full h-full bg-black/80"></div>
        </div>
    )
}

export default ModalScreen