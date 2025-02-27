import CustomButton from "../../component/input/custom-button.tsx";
import { useNavigate } from "react-router-dom";
import React from "react";
import {FaEye, FaPaw} from "react-icons/fa";
import { MdEvent } from "react-icons/md";

interface EventData {
    EventID: string;
    Title: string;
    Location: string;
    Date: string;
    Time: string;
}

interface EventProps {
    data: EventData[];
}

function ViewPetEvent({ data }: EventProps) {
    const navigate = useNavigate();

    const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("button clicked.");
        navigate("/event_form");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (data.length === 0) {
        return <p className="text-center text-lg mt-6">No data available.</p>;
    }

    return (
        <div className="w-full sm:w-4/5 py-6 px-4 sm:px-6 m-auto border-2 border-gray-100 my-6 bg-white rounded-lg shadow-md">
            {/* Title with Icon */}
            <div className="text-center h-24">
                <p className="text-5xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] shadow-lg flex items-center justify-center">
                    <FaPaw className="mr-4 text-6xl" />
                     Pet Events
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border rounded-2xl text-sm sm:text-base">
                    <thead className="border bg-gray-100 h-[50px] text-[16px] sm:text-[18px]">
                    <tr className="border text-center">
                        <th className="border px-2 py-2">Event ID</th>
                        <th className="border px-2 py-2">Title</th>
                        <th className="border px-2 py-2">Location</th>
                        <th className="border px-2 py-2">Date</th>
                        <th className="border px-2 py-2">Time</th>
                        <th className="border px-2 py-2">Option</th>
                    </tr>
                    </thead>
                    <tbody className="border text-[15px] sm:text-[17px] text-center">
                    {data.map((event, index) => {
                        const eventDate = new Date(event.Date);
                        const today = new Date();
                        const isUpcoming = eventDate >= today;
                        const backgroundColor = isUpcoming ? "bg-emerald-200" : "bg-gray-50";

                        return (
                            <tr key={index} className={`border ${backgroundColor}`}>
                                <td className="border px-3 py-2">{event.EventID}</td>
                                <td className="border px-3 py-2">{event.Title}</td>
                                <td className="border px-3 py-2">{event.Location}</td>
                                <td className="border px-3 py-2">{event.Date}</td>
                                <td className="border px-3 py-2">{event.Time}</td>
                                <td className="flex flex-row justify-center items-center p-2 space-x-2">
                                    <CustomButton
                                        borderColor="#071722"
                                        bgColor="white"
                                        hoverColor="#071722"
                                        textColor="#071722"
                                        textHoverColor="white"
                                        text={<FaEye className="inline-block mr-1" />}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-10">
                <CustomButton
                    borderColor="#59AE4B"
                    bgColor="white"
                    hoverColor="#59AE4B"
                    textColor="#59AE4B"
                    textHoverColor="white"
                    text={<><MdEvent className="inline-block mr-1" /> Event</>}
                    onClick={handleManage}
                />
            </div>
        </div>
    );
}

export default ViewPetEvent;