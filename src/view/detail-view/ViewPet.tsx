import { useEffect, useState } from "react";
import CustomButton from "../../component/input/custom-button.tsx";
import ComboBox from "../../component/input/combo-box.tsx";
import PetForm from "../form/PetForm.tsx";
import PetCard from "../../component/PetCard.tsx";
import { FaPaw } from "react-icons/fa";
import {MdEvent, MdPets} from "react-icons/md";

interface PetItem {
    id: string;
    name: string;
    imageUrl: string;
    breed: string;
    colors: string;
    ownershipStatus: string;
}

function ViewPet() {
    const [showPetForm, setShowPetForm] = useState(false);
    const [searchOption, setSearchOption] = useState("All");
    const [petData, setPetData] = useState<PetItem[] | null>(null);

    useEffect(() => {
        // Fetch pet data from the backend API
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/pet/getAll");
                const data = await response.json();
                setPetData(data);
            } catch (error) {
                console.error("Error fetching pet data:", error);
            }
        };

        fetchData();
    }, []);

    const handleManage = () => {
        setShowPetForm(true);

        // Scroll to the top of the pet form
        const petHr = document.getElementById(
            "view-pet-end-hr"
        ) as HTMLDivElement;
        petHr.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const handleSearchOption = (selectedValue: string) => {
        setSearchOption(selectedValue);
        console.log("Selected Value : ", searchOption);
    };

    return (
        <div
            className="w-full sm:w-4/5 py-6 px-4 sm:px-6 m-auto border-2 border-gray-100 my-6 bg-white rounded-lg shadow-md">
            {/* Title with Icon */}
            <div className="text-center h-24">
                <p className="text-5xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] shadow-lg flex items-center justify-center">
                    <FaPaw className="mr-4 text-6xl"/>
                    Little Paws
                </p>
            </div>

            {/* ComboBox Filter */}
            <div className="w-full sm:w-1/3 mx-auto my-4">
                <ComboBox
                    id={"found-status"}
                    onChange={handleSearchOption}
                    name={"found-status"}
                    label={"Filter By : "}
                    options={["All", "Has Owner", "Hasn't Owner"]}
                    optional={true}
                />
            </div>

            {/* Pet Cards */}
            <div className="border-t-2 border-gray-200 pt-6 pb-4">
                <div className="flex flex-wrap justify-center gap-6">
                    {petData && petData.length > 0 ? (
                        petData.map((item: PetItem) => (
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" key={item.id}>
                                <PetCard item={item}/>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-500">No pet data available.</p>
                    )}
                </div>
            </div>

            {/* Manage Pet Button */}
            <div className="flex justify-center mt-10">
                <CustomButton
                    borderColor="#59AE4B"
                    bgColor="white"
                    hoverColor="#59AE4B"
                    textColor="#59AE4B"
                    textHoverColor="white"
                    text={<><MdPets className="inline-block mr-1"/> Manage Pet</>}
                    onClick={handleManage} // Open the popup
                />
            </div>

            {/* Show Pet Form */}
            {showPetForm && <PetForm/>}
            <hr id="view-pet-end-hr" className="my-6 border-t-2 border-gray-300"/>
        </div>
    );
}

export default ViewPet;
