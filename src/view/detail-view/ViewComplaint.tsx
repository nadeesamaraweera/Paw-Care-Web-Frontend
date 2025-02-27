import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import CustomButton from "../../component/input/custom-button.tsx";
import ComplaintForm from "../form/ComplaintForm.tsx";

interface ComplaintData {
    ComplaintID: string;
    Date: string;
    Location: string;
    Title: string;
    Status: string;
}

interface ViewComplaintProps {
    data: ComplaintData[];
}

function ViewComplaint({ data }: ViewComplaintProps) {
    //const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // const handleManage = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     navigate("/complaint_form");
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    if (data.length === 0) {
        return <p className="text-center text-lg mt-6">No data available.</p>;
    }

    return (
        <div className="w-full sm:w-4/5 py-6 px-4 sm:px-6 m-auto border-2 border-gray-100 my-6 bg-white rounded-lg shadow-md">
            {/* Title with Icon */}
            <div className="text-center h-24">
                <p className="text-5xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] shadow-lg flex items-center justify-center">
                    <MdEvent className="mr-4 text-6xl" /> Complaints
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border rounded-2xl text-sm sm:text-base">
                    <thead className="border bg-gray-100 h-[50px] text-[16px] sm:text-[18px]">
                    <tr className="border text-center">
                        <th className="border px-2 py-2">Complaint ID</th>
                        <th className="border px-2 py-2">Date</th>
                        <th className="border px-2 py-2">Location</th>
                        <th className="border px-2 py-2">Title</th>
                        <th className="border px-2 py-2">Status</th>
                        <th className="border px-2 py-2">Option</th>
                    </tr>
                    </thead>
                    <tbody className="border text-[15px] sm:text-[17px] text-center">
                    {data.map((complaint, index) => (
                        <tr
                            key={index}
                            className={`border ${complaint.Status === "Not Resolved" ? "bg-blue-200" : "bg-white"}`}
                        >
                            <td className="border px-3 py-2">{complaint.ComplaintID}</td>
                            <td className="border px-3 py-2">{complaint.Date}</td>
                            <td className="border px-3 py-2">{complaint.Location}</td>
                            <td className="border px-3 py-2">{complaint.Title}</td>
                            <td className="border px-3 py-2">{complaint.Status}</td>
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
                    ))}
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
                    text={<><MdEvent className="inline-block mr-1" /> Complaint</>}
                    onClick={() => setIsOpen(true)} // Open the popup
                />
            </div>
            {/* Donation Form Popup */}
            <ComplaintForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

    );
}

export default ViewComplaint;
