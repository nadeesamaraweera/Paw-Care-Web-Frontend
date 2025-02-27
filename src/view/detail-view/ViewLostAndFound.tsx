import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import LostAndFoundCard from "../../component/LostAndFoundCard.tsx";
import ComboBox from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import LostAndFoundForm from "../form/LostAndFoundForm.tsx";

interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petName: string;
    location: string;
    date: string;
}

function ViewLostAndFound({ list }: { list: LostAndFoundItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    if (list.length === 0) {
        return <p className="text-center text-sm mt-4">No data available.</p>;
    }

    return (
        <div className="w-full sm:w-3/4 py-4 px-3 sm:px-5 m-auto border border-gray-200 my-4 bg-white rounded-md shadow-sm">
            {/* Title Section */}
            <div className="text-center h-16 flex items-center justify-center">
                <p className="text-3xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] shadow-sm flex items-center">
                    <MdAnnouncement className="mr-2 text-4xl" /> Lost & Found Notices
                </p>
            </div>

            {/* Filter Section */}
            <div className="w-full md:w-1/2 mx-auto mb-3 flex items-center">
                <FaSearch className="mr-2 text-gray-500" />
                <ComboBox name="found-status" label="Filter By:" options={["All", "Not Found", "Found"]} optional={true} />
            </div>

            {/* Lost & Found Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-3">
                {list.map((item: LostAndFoundItem, index: number) => (
                    <LostAndFoundCard key={index} item={item} />
                ))}
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-6">
                <CustomButton
                    borderColor="#59AE4B"
                    bgColor="white"
                    hoverColor="#59AE4B"
                    textColor="#59AE4B"
                    textHoverColor="white"
                    text={<><MdAnnouncement className="inline-block mr-1" /> Notice</>}
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <LostAndFoundForm isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </div>
    );
}

export default ViewLostAndFound;