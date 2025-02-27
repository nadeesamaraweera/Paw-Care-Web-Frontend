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
import EventForm from "./view/form/EventForm.tsx";
import ViewPetEvent from "./view/detail-view/ViewPetEvent.tsx";

function App() {

    const routesWithoutNavBarAndFooter = ['/login','/signup','/'];

    const shouldShowNavBarAndFooter = !routesWithoutNavBarAndFooter.includes(
        window.location.pathname
    );

    // for Event view , sample data for event - EventID, Title, Location, Date, Time
    const eventData = [
        {
            EventID: "E-0001",
            Title: "National Dog Show",
            Location: "Panadura",
            Date: "2025-09-10",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0002",
            Title: "Pet Adoption Drive",
            Location: "Colombo",
            Date: "2025-09-11",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0003",
            Title: "Veterinary Awareness Camp",
            Location: "Negombo",
            Date: "2025-09-12",
            Time: "09:30 AM",
        },
        {
            EventID: "E-0004",
            Title: "Canine Training Workshop",
            Location: "Kandy",
            Date: "2025-09-13",
            Time: "11:00 AM",
        },
        {
            EventID: "E-0005",
            Title: "Exotic Pets Exhibition",
            Location: "Galle",
            Date: "2025-09-14",
            Time: "10:30 AM",
        },
        {
            EventID: "E-0006",
            Title: "Pet Health Checkup Camp",
            Location: "Kurunegala",
            Date: "2025-09-15",
            Time: "08:00 AM",
        },
        {
            EventID: "E-0007",
            Title: "Annual Dog Festival",
            Location: "Gampaha",
            Date: "2025-09-16",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0008",
            Title: "Aquatic Pet Expo",
            Location: "Matara",
            Date: "2025-09-17",
            Time: "09:00 AM",
        },
        {
            EventID: "E-0009",
            Title: "Birds & Reptiles Showcase",
            Location: "Anuradhapura",
            Date: "2025-09-18",
            Time: "10:00 AM",
        },
        {
            EventID: "E-0010",
            Title: "Rescue Animals Awareness Drive",
            Location: "Jaffna",
            Date: "2025-09-19",
            Time: "10:00 AM",
        },
    ];



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
                <Route path="/view_event" element={<ViewPetEvent data={eventData}/>}/>
                <Route path="/event_form" element={<EventForm/>}/>





            </Routes>
            {shouldShowNavBarAndFooter && <Footer />}
        </BrowserRouter>

    )
}

export default App
