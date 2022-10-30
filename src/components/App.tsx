import { Routes, Route, useLocation } from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import ImageModal from './modals/ImageModal'
import TopScreen from './screens/TopScreen'

function App() {

    // 現在アドレスバーに入力されているURL
    const location = useLocation()
    const currentPath = location.pathname

    // ひとつ前のページのURL or ホームのURL
    const state = location.state as { backgroundPath?: string }
    const backgroundPath: string | undefined = state?.backgroundPath ?? "/"

    // Modalの表示のboolean
    const isShowImageModal = currentPath === "/image"

    const isShowModal = isShowImageModal ? true : false

    return (
        <div className='xl:width-xl w-full mx-auto'>

            <Routes location={isShowModal ? backgroundPath : currentPath}>

                <Route path='/' element={<TopScreen />} />
                <Route path='/about' element={<AboutScreen />} />
            </Routes>

            <Routes location={isShowModal ? undefined : ""}>

                <Route path='/image' element={<ImageModal />} />
                <Route path='*' element={<div></div>} />
            </Routes>
        </div>
    )
}

export default App