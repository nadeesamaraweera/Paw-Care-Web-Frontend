import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import {IoCloseOutline} from "react-icons/io5";
import {MdAnnouncement} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const userId: string = `U-0001`;

function OrgForm() {
    const navigate = useNavigate();

    const backToDashboard = () => {
        //navigate to dashboard
        console.log("Back to Dashboard");
        navigate('/home')
    }

    return (
        <form className="max-w-3xl mx-auto mt-5 flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg border-l-8 border-r-8 border-gray-300">
            {/* Close Button */}
            <div className="flex justify-end">
                <button className="cursor-pointer" onClick={backToDashboard}>
                    <IoCloseOutline className="text-[#071722] text-[35px] cursor-pointer" />
                </button>
            </div>
            {/* User ID */}
            <div className="text-black mb-2">
                <label className="text-lg font-medium mr-4">User ID: {userId}</label>
            </div>

            {/* Organization Title */}
            <div className="flex flex-col items-center text-center mb-4">
                <p className="text-3xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400">
                    <MdAnnouncement className="mr-2 inline-block text-4xl" />
                    Organization Details
                </p>
            </div>

            {/* Organization Image */}
            <div className="flex flex-col justify-center items-center mb-4">
                <img className="w-36 h-36 border border-gray-300 rounded-full" src="src/assets/org-image.jpg" alt="Organization" />
            </div>

            {/* Form Inputs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input label="Organization ID: " name="id" type="text" optional={false} placeholder="O-0001" />
                <Input label="Organization Name: " name="type" type="text" optional={false} placeholder="Ex: Furry Care" />
            </div>

            <Input type="text" name="name" label="Description: " optional={true} placeholder="Ex: Note" />

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input type="text" name="location" label="Location: " optional={true} placeholder="Ex: Colombo" />
                <Input type="tel" name="contact" label="Contact No: " optional={true} placeholder="Ex: 0786628478" />
            </div>

            <Input type="email" name="email" label="Email: " optional={false} placeholder="Ex: nadee@gmail.com" />

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
                <CustomButton
                    borderColor="blue"
                    bgColor="white"
                    hoverColor="blue"
                    textColor="blue"
                    textHoverColor="white"
                    text="Save"
                />
                <CustomButton
                    borderColor="#59AE4B"
                    bgColor="white"
                    hoverColor="#59AE4B"
                    textColor="#59AE4B"
                    textHoverColor="white"
                    text="Update"
                />
                <CustomButton
                    borderColor="#D75555"
                    bgColor="white"
                    hoverColor="#D75555"
                    textColor="#D75555"
                    textHoverColor="white"
                    text="Delete"
                />
            </div>
        </form>
);

}

export default OrgForm;