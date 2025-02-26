import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div className="bg-gradient-to-r from-[#4e73df] to-[#1cc88a] text-white py-2">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center justify-center md:justify-start  md:mb-0">
                        <img
                            src="src/assets/footerlogo.png"
                            alt="Logo"
                            className="w-40 mt-20 "
                        />
                        <div className="mt-12">
                            <h2 className="text-4xl font-bold">Paw Care</h2>
                            <p className="text-large max-w-xs text-center md:text-left mt-2">
                                Your Home for Holistic Pet Happiness. We are dedicated to providing comprehensive and
                                compassionate care for your paw companions, ensuring they live happy, healthy, and
                                fulfilling lives. </p>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-6"><u>Contact Us</u></h3>
                        <div className="  md:flex-row  md:justify-start  gap-8 mt-6 text-xl">
                            <div className="flex items-center gap-5 mb-6" >
                                <MdEmail size={24}/>
                                <a href="mailto:nadeesamaraweera2000@gmail.com" className="hover:underline">
                                    pawcare@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-5">
                                <FaPhone size={24}/>
                                <a href="tel:+94716490250">
                                    <span>+94 71-6490250</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Social Media Section */}
                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#4267B2]">
                        <FaFacebook size={30}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#C13584]">
                        <FaInstagram size={30}/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#1DA1F2]">
                    <FaTwitter size={30} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]">
                        <FaLinkedin size={30} />
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-10 text-medium">
                    <p>&copy; 2025 paw Care. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
