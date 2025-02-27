import OrganizationCard from "../../component/OrganizationCard.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import { useNavigate } from "react-router-dom";
import React from "react";

interface OrgItem {
    Name: string;
    Img: string;
    Id: string;
    Contact: string;
    Location: string;
}

function ViewOrganization({ list }: { list: OrgItem[] }) {
    const navigate = useNavigate();

    const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        console.log("button clicked.");
        navigate('/org_form');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full sm:w-4/5 py-10 px-6 mx-auto border border-emerald-400 bg-emerald-50 my-6">
            {/* Title */}
            <div className="flex flex-row justify-center items-center mb-6">
                <p className="text-3xl sm:text-4xl lg:text-[45px] text-[#071722] text-center">Pet Care Organizations</p>
            </div>

            {/* Organization Cards Container */}
            <div className="overflow-x-auto">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                    {list.map((item: OrgItem) => (
                        <div key={item.Id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
                            <OrganizationCard item={item} />
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
                    text="Organization"
                    onClick={handleManage}
                />
            </div>
        </div>
    );
}

export default ViewOrganization;
