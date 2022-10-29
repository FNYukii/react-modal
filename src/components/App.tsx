import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import TopScreen from './screens/TopScreen'


function App() {

    return (
        <div className='xl:width-xl w-full mx-auto'>
            
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<TopScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App