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
import ViewDonation from "./view/detail-view/ViewDonation.tsx";
import DonationForm from "./view/form/DonationForm.tsx";
import ViewComplaint from "./view/detail-view/ViewComplaint.tsx";
import ComplaintForm from "./view/form/ComplaintForm.tsx";
import LostAndFoundForm from "./view/form/LostAndFoundForm.tsx";
import ViewLostAndFound from "./view/detail-view/ViewLostAndFound.tsx";
import ViewQA from "./view/detail-view/ViewQA.tsx";
import QAForm from "./view/form/QAForm.tsx";
import VetForm from "./view/form/VetForm.tsx";
import ViewVet from "./view/detail-view/ViewVet.tsx";

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

    const donationData = [
        { DonationID: "D-0001", Date: "2023-12-01", Location: "Panadura", Donor: "Alice", Receiver: "Michael" },
        { DonationID: "D-0002", Date: "2023-12-02", Location: "Colombo", Donor: "Bob", Receiver: "Sophia" },
        { DonationID: "D-0003", Date: "2023-12-03", Location: "Galle", Donor: "Charlie", Receiver: "Liam" },
        { DonationID: "D-0004", Date: "2023-12-04", Location: "Kandy", Donor: "David", Receiver: "Emma" },
        { DonationID: "D-0005", Date: "2023-12-05", Location: "Kurunegala", Donor: "Ella", Receiver: "Noah" },
        { DonationID: "D-0006", Date: "2023-12-06", Location: "Kegalle", Donor: "Frank", Receiver: "Olivia" },
        { DonationID: "D-0007", Date: "2023-12-07", Location: "Gampaha", Donor: "Grace", Receiver: "William" },
        { DonationID: "D-0008", Date: "2023-12-08", Location: "Matara", Donor: "Henry", Receiver: "Ava" },
        { DonationID: "D-0009", Date: "2023-12-09", Location: "Anuradhapura", Donor: "Isla", Receiver: "James" },
        { DonationID: "D-0010", Date: "2023-12-10", Location: "Polonnaruwa", Donor: "Jack", Receiver: "Charlotte" }
    ];

    const data = [
        {
            ComplaintID: "C-0001",
            Date: "2021-09-10",
            Location: "Panadura",
            Title: "Noise Disturbance",
            Status: "Not Resolved",
        }, {
            ComplaintID: "C-0002",
            Date: "2021-09-11",
            Location: "Colombo",
            Title: "Stray Dog Attack",
            Status: "Resolved",
        }, {
            ComplaintID: "C-0003",
            Date: "2021-09-12",
            Location: "Galle",
            Title: "Illegal Pet Trade",
            Status: "Not Resolved",
        }, {
            ComplaintID: "C-0004",
            Date: "2021-09-13",
            Location: "Kandy",
            Title: "Animal Abuse",
            Status: "Resolved",
        }, {
            ComplaintID: "C-0005",
            Date: "2021-09-14",
            Location: "Kurunegala",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        }, {
            ComplaintID: "C-0006",
            Date: "2021-09-15",
            Location: "Kegalle",
            Title: "Stray Dog Issue",
            Status: "Resolved",
        }, {
            ComplaintID: "C-0007",
            Date: "2021-09-16",
            Location: "Gampaha",
            Title: "Pet Theft",
            Status: "Not Resolved",
        }, {
            ComplaintID: "C-0008",
            Date: "2021-09-17",
            Location: "Matara",
            Title: "Noise Disturbance",
            Status: "Resolved",
        }, {
            ComplaintID: "C-0009",
            Date: "2021-09-18",
            Location: "Anuradhapura",
            Title: "Dog Harassment",
            Status: "Not Resolved",
        }, {
            ComplaintID: "C-0010",
            Date: "2021-09-19",
            Location: "Polonnaruwa",
            Title: "Animal Cruelty",
            Status: "Resolved",
        }
    ];

    const LostData = [
        {
            title: "Lost Golden Retriever",
            img: "src/assets/golden_retriever.png",
            id: "L-0001",
            petId: "P-0001",
            petName: "Rex",
            location: "Central Park, NY",
            date: "2024-02-10",
        },
        {
            title: "Lost Beagle",
            img: "src/assets/beagle.png",
            id: "L-0002",
            petId: "P-0002",
            petName: "Max",
            location: "Brooklyn, NY",
            date: "2024-02-11",
        },
        {
            title: "Lost Labrador",
            img: "src/assets/labrador.png",
            id: "L-0003",
            petId: "P-0003",
            petName: "Tom",
            location: "San Francisco, CA",
            date: "2024-02-12",
        },
        {
            title: "Lost Poodle",
            img: "src/assets/poodle.png",
            id: "L-0004",
            petId: "P-0004",
            petName: "Jerry",
            location: "Los Angeles, CA",
            date: "2024-02-13",
        },
        {
            title: "Lost Husky",
            img: "src/assets/husky.png",
            id: "L-0005",
            petId: "P-0005",
            petName: "Spike",
            location: "Seattle, WA",
            date: "2024-02-14",
        },
        {
            title: "Lost German Shepherd",
            img: "src/assets/german_shepherd.png",
            id: "L-0006",
            petId: "P-0006",
            petName: "Scooby",
            location: "Austin, TX",
            date: "2024-02-15",
        },
        {
            title: "Lost Dachshund",
            img: "src/assets/dachshund.png",
            id: "L-0007",
            petId: "P-0007",
            petName: "Rover",
            location: "Chicago, IL",
            date: "2024-02-16",
        },
        {
            title: "Lost Bulldog",
            img: "src/assets/bulldog.png",
            id: "L-0008",
            petId: "P-0008",
            petName: "Bruno",
            location: "Miami, FL",
            date: "2024-02-17",
        },
        {
            title: "Lost Chihuahua",
            img: "src/assets/chihuahua.png",
            id: "L-0009",
            petId: "P-0009",
            petName: "Coco",
            location: "Houston, TX",
            date: "2024-02-18",
        },
        {
            title: "Lost Border Collie",
            img: "src/assets/border_collie.png",
            id: "L-0010",
            petId: "P-0010",
            petName: "Buddy",
            location: "Denver, CO",
            date: "2024-02-19",
        },
        {
            title: "Lost Shiba Inu",
            img: "src/assets/shiba_inu.png",
            id: "L-0011",
            petId: "P-0011",
            petName: "Milo",
            location: "Las Vegas, NV",
            date: "2024-02-20",
        },
        {
            title: "Lost Pug",
            img: "src/assets/pug.png",
            id: "L-0012",
            petId: "P-0012",
            petName: "Luna",
            location: "Boston, MA",
            date: "2024-02-21",
        },
        {
            title: "Lost Cocker Spaniel",
            img: "src/assets/cocker_spaniel.png",
            id: "L-0013",
            petId: "P-0013",
            petName: "Bailey",
            location: "San Diego, CA",
            date: "2024-02-22",
        },
        {
            title: "Lost Rottweiler",
            img: "src/assets/rottweiler.png",
            id: "L-0014",
            petId: "P-0014",
            petName: "Rocky",
            location: "New Orleans, LA",
            date: "2024-02-23",
        },
    ];
    const vetData = [
        {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0001",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Panadura",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0002",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Colombo",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0003",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Galle",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0004",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kandy",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0005",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kurunegala",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0006",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Kegalle",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0007",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Gampaha",
        }, {
            Name: "Dr. John",
            Img: "src/assets/vet2.jpeg",
            Id: "V-0008",
            NIC: "123456789V",
            Contact: "0771234567",
            Location: "Matara",
        }];





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
                <Route path="/view_donation" element={<ViewDonation data={donationData}/>}/>
                <Route path="/donation_form" element={<DonationForm/>}/>
                <Route path="/view_complaint" element={<ViewComplaint data={data}/>}/>
                <Route path="/complaint_form" element={<ComplaintForm/>}/>
                <Route path="/view_lost" element={<ViewLostAndFound list={LostData}/>}/>
                <Route path="/lost_form" element={<LostAndFoundForm/>}/>
                <Route path="/view_q_a" element={<ViewQA/>}/>
                <Route path="/q_form" element={<QAForm/>}/>
                <Route path="/view_vet" element={<ViewVet list={vetData}/>}/>
                <Route path="/vet_form" element={<VetForm/>}/>








            </Routes>
            {shouldShowNavBarAndFooter && <Footer />}
        </BrowserRouter>

    )
}

export default App
