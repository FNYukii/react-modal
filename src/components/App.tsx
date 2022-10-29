import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopScreen from './screens/TopScreen'


function App() {

    return (
        <div className='xl:width-xl w-full mx-auto'>
            
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<TopScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App