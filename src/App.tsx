import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import WelcomePage from "./view/WelcomePage.tsx";
import Login from "./view/Login.tsx";
import Signup from "./view/SignUp.tsx";
import NavBar from "./view/NavBar.tsx";
import Footer from "./view/Footer.tsx";
import About from "./view/About.tsx";
import ViewPet from "./view/detail-view/ViewPet.tsx";
import PetForm from "./view/form/PetForm.tsx";

function App() {

    const routesWithoutNavBarAndFooter = ['/login','/signup','/'];

    const shouldShowNavBarAndFooter = !routesWithoutNavBarAndFooter.includes(
        window.location.pathname
    );

    return (
        <BrowserRouter>
                {shouldShowNavBarAndFooter && <NavBar />}
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="home" element={<About/>}/>
                <Route path="/view_pet" element={<ViewPet/>}/>
                <Route path="/pet_form" element={<PetForm/>}/>



            </Routes>
            {shouldShowNavBarAndFooter && <Footer />}
        </BrowserRouter>

    )
}

export default App
