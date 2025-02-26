import React from "react";
import { Navbar, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, NavbarBrand, NavbarMenuToggle } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { name: "Pet", icon: "🐾" },
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

                const paths = {
                    vet: '/vet_form',
                    org: '/org_form',
                };

                navigate(paths[userRole]);
            } else {
                console.error('Error fetching user data:', response);
            }
        } catch (error) {
            console.error('Error while navigating user profile:', error);
        }
    };

    const handleNavigation = (item) => {
        const paths = {
            Pet: '/view_pet',
            Event: '/view_event',
            Donation: '/view_donation',
            Complaint: '/view_complaint',
            'Lost & Found': '/view_lost',
            'Q & A': '/view_q_a',
        };
        navigate(paths[item]);
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={'h-[80px] bg-blend-color-dodge'}
        >
            <NavbarContent justify="start">
                <NavbarBrand>
                    <img
                        className="logo max-w-[100px] md:max-w-[150px]" // Ensure logo is responsive
                        src="src/assets/logo.png"
                        alt="React.js"
                    />
                        <p className="font-bold text-[24px] text-blue-900 hidden md:block">PAW CARE</p>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Menu */}
            <NavbarContent className="hidden md:flex gap-3" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} className={'navbarItem pl-7 cursor-pointer'}>
                        <Link
                            onClick={() => handleNavigation(item.name)}
                            className={'text-[18px] text-blue-500 font-bold flex items-center hover:text-blue-800 gap-3'}
                        >
                            <span>{item.icon}</span>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Menu Toggle */}
            <NavbarContent className="md:hidden" justify="end">
                <NavbarMenuToggle aria-label="toggle navigation" />
            </NavbarContent>

            {/* User Profile Section */}
            <NavbarContent justify="end" className="hidden md:flex">
                <User
                    className={'rounded-xl cursor-pointer text-blue-600 font-bold text-large pl-36'}
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
                            className="w-full flex items-center gap-3"
                            href="#"
                            size="lg"
                            onClick={() => handleNavigation(item.name)}
                        >
                            <span>{item.icon}</span>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                {/* Mobile User Profile */}
                <NavbarMenuItem>
                    <User
                        className={'rounded-xl cursor-pointer text-blue-600 font-bold text-large'}
                        name="Jane Doe"
                        description="Veterinarian"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                        onClick={navigateUserProfile}
                    />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar;
