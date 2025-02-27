import CustomButton from "../../component/input/custom-button.tsx";
import VetCard from "../../component/VetCard.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

interface VetItem {
    Name: string;
    Img: string;
    Id: string;
    NIC: string;
    Contact: string;
    Location: string;
}

function ViewVet({ list }: { list: VetItem[] }) {
    const navigate = useNavigate();

    const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        console.log("button clicked.");
        navigate('/vet_form');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full sm:w-4/5 py-10 px-6 mx-auto border border-emerald-400 bg-emerald-50 my-6">
            {/* Title */}
            <div className="flex flex-row justify-center items-center mb-6">
                <p className="text-3xl sm:text-4xl lg:text-[45px] text-[#071722] text-center">
                    Pet Care Veterinarians
                </p>
            </div>

            {/* Veterinarian Cards Container */}
            <div className="overflow-x-auto">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                    {list.map((item: VetItem) => (
                        <div key={item.Id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
                            <VetCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Manage Button */}
            <div className="flex flex-row justify-center sm:justify-end items-center pt-4 gap-4">
                <CustomButton
                    borderColor="#071722"
                    bgColor="white"
                    hoverColor="#071722"
                    textColor="#071722"
                    textHoverColor="white"
                    text="Veterinarian"
                    onClick={handleManage}
                />
            </div>
        </div>
    );
}

export default ViewVet;
