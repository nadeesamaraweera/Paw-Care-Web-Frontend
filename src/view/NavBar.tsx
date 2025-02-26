import React from "react";
import {Navbar, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, NavbarBrand} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { name: "Pet", icon: "🐾" },  // Add icons here for each menu item
        { name: "Event", icon: "🎉" },
        { name: "Donation", icon: "💰" },
        { name: "Complaint", icon: "📄" },
        { name: "Lost & Found", icon: "🔍" },
        { name: "Q & A", icon: "❓" },
    ];

    const navigateUserProfile = async () => {
        try {
            const username = localStorage.getItem('username');
            const response = await axios.get('http://localhost:3000/api/user/getByUsername/' + username);

            if (response.status === 200) {
                const user = response.data;
                localStorage.setItem('user', JSON.stringify(user));

                const userRole = user.role;

                const paths: Record<string, string> = {
                    vet: '/vet_form',
                    org: '/org_form',
                };

                navigate(paths[userRole as keyof typeof paths]);
            } else {
                console.error('Error fetching user data:', response);
            }
        } catch (error) {
            console.error('Error while navigating user profile:', error);
        }
    };

    const handleNavigation = (item: string) => {
        const paths: Record<string, string> = {
            Pet: '/view_pet',
            Event: '/view_event',
            Donation: '/view_donation',
            Complaint: '/view_complaint',
            'Lost & Found': '/view_lost',
            'Q & A': '/view_q_a',
        };

        navigate(paths[item]);
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={'h-[80px] bg-blend-color-dodge'} // Set the navbar background color here
        >
            {/* Navbar Content with Logo aligned to the left */}
            <NavbarContent className="hidden sm:flex gap-3" justify="center">

                <NavbarBrand>
                    <img className="logo" src="src/assets/logo.png" alt="React.js" />
                        <RouterLink to="/home">
                            <p className="font-bold text-[24px] text-blue-900">PAW CARE</p>
                        </RouterLink>
                </NavbarBrand>


                {/* Navbar Items with icons */}
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className={'navbarItem pl-7  cursor-pointer'}>
                        <Link
                            onClick={() => handleNavigation(item.name)}
                            className={'text-[20px] text-blue-500 font-bold flex items-center hover:text-blue-800 gap-3 '}
                        >
                            <span>{item.icon}</span>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            {/* User Profile Section */}
            <NavbarContent justify="end">
                <User
                    className={'rounded-3xl cursor-pointer text-blue-600 font-bold  pl-36 text-xl'}
                    name="Jane Doe"
                    description="Veterinarian"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                    onClick={navigateUserProfile}
                />
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            className="w-full"
                            color={index === menuItems.length - 1 ? "danger" : "foreground"}
                            href="#"
                            size="lg"
                            onClick={() => handleNavigation(item.name)}
                        >
                            <span>{item.icon}</span> {/* Render icon next to text */}
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}

export default NavBar;
