import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import WelcomePage from "./view/WelcomePage.tsx";

function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>


            </Routes>
        </BrowserRouter>

    )
}

export default App
