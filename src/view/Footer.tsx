import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className="bg-gradient-to-r from-[#4e73df] to-[#1cc88a] text-white py-6">
            <div className="container mx-auto px-6">
                {/* Flex Container for Desktop Layout */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">

                    {/* Left Side - Logo & Description */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full md:w-1/3">
                        <img
                            src="src/assets/footerlogo.png"
                            alt="Paw Care Logo"
                            className="w-32 md:w-40"
                        />
                        <div>
                            <h2 className="text-3xl font-bold">Paw Care</h2>
                            <p className="text-lg max-w-xs mt-2">
                                Your Home for Holistic Pet Happiness. We provide compassionate care for your furry friends to ensure they live happy, healthy lives.
                            </p>
                        </div>
                    </div>

                    {/* Center - Social Media Icons */}
                    <div className="flex justify-center gap-6 w-full md:w-1/3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4267B2]">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C13584]">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2]">
                            <FaTwitter size={32} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]">
                            <FaLinkedin size={32} />
                        </a>
                    </div>

                    {/* Right Side - Contact Information */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-2xl font-bold underline mb-3">Contact Us</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <MdEmail size={24} />
                                <a href="mailto:pawcare@gmail.com" className="hover:underline">pawcare@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone size={24} />
                                <a href="tel:+94716490250">+94 71-6490250</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm mt-8">
                    <p>&copy; 2025 Paw Care. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
