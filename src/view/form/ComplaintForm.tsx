import {useEffect} from "react";
import { motion } from "framer-motion";
import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Select from "../../component/input/combo-box.tsx";
import { IoCloseOutline } from "react-icons/io5";

const userId: string = `U-0001`;

function ComplaintForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Close modal when clicking outside
    const handleOverlayClick = (event) => {
        if (event.target.id === "modal-overlay") {
            onClose();
        }
    };

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl p-4 mt-12 shadow-lg w-full max-w-[90%] sm:max-w-[450px] max-h-[80vh] overflow-y-auto"
            >
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-bold text-[#071722]">Complaint Form</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-300 transition"
                        style={{ zIndex: 50 }}
                    >
                        <IoCloseOutline className="text-[#071722] text-2xl" />
                    </button>
                </div>

                <label className="block text-[#071722] text-md mt-3">User ID: {userId}</label>

                <div className="flex flex-col gap-3 mt-3">
                    <Input label="Complaint ID:" name="id" type="text" optional={false} placeholder="C-0001" className="w-full h-8 text-sm" />
                    <Input label="Date:" name="date" type="date" optional={false} placeholder="" className="w-full h-8 text-sm" />
                    <Input type="text" name="title" label="Title:" optional={true} placeholder="Ex: This is Title" className="w-full h-8 text-sm" />
                    <Input type="text" name="name" label="Description:" optional={false} placeholder="Ex: Note" className="w-full h-8 text-sm" />
                    <div className="flex flex-row gap-4">
                        <Input type="text" name="location" label="Location:" optional={false} placeholder="Ex: Panadura" className="w-full h-8 text-sm" />
                        <Select name="solution" label="Solved Status:" options={['Solved', 'Not Solved']} optional={false} className="w-full h-8 text-sm" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    <CustomButton borderColor="blue" bgColor="white" hoverColor="blue" textColor="blue" textHoverColor="white" text="Save" />
                    <CustomButton borderColor="#59AE4B" bgColor="white" hoverColor="#59AE4B" textColor="#59AE4B" textHoverColor="white" text="Update" />
                    <CustomButton borderColor="#D75555" bgColor="white" hoverColor="#D75555" textColor="#D75555" textHoverColor="white" text="Delete" />
                </div>
            </motion.div>
        </div>
    );
}

export default ComplaintForm;
