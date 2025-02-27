import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import { IoCloseOutline } from "react-icons/io5";

const userId = "U-0001";

function LostAndFoundForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [imagePreview, setImagePreview] = useState(null);

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Close modal when clicking outside
    const handleOverlayClick = (event) => {
        if (event.target.id === "modal-overlay") onClose();
    };

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md max-h-[85vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-semibold text-[#071722]">Lost & Found Form</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-300 transition"
                    >
                        <IoCloseOutline className="text-[#071722] text-2xl" />
                    </button>
                </div>

                {/* User ID */}
                <label className="block text-[#071722] text-md mt-3">
                    <span className="font-semibold">User ID:</span> {userId}
                </label>

                {/* Image Upload Section */}
                <div className="flex flex-col items-center mt-4">
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Uploaded Preview"
                            className="w-32 h-32 border border-gray-300 rounded-lg"
                        />
                    ) : (
                        <div className="w-32 h-32 border border-gray-300 flex items-center justify-center text-gray-400">
                            No Image
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2 text-sm"
                    />
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-3 mt-3">
                    <Input label="Notice ID:" name="id" type="text" optional={false} placeholder="N-0001" />
                    <div className="flex flex-row gap-3">
                        <Input label="Pet ID:" name="petId" type="text" optional={false} placeholder="P-0001" />
                        <Input label="Pet Name:" name="petName" type="text" optional={false} placeholder="Ex: Lacy" />
                    </div>
                    <Input label="Description:" name="desc" type="text" optional={true} placeholder="Ex: Note" />
                    <div className="flex flex-row gap-3">
                        <Input label="Lost Date:" name="date" type="date" optional={false} />
                        <Input label="Lost Time:" name="time" type="time" optional={false} />
                    </div>
                    <div className="flex flex-row gap-3">
                        <Input label="Lost Location:" name="location" type="text" optional={true} placeholder="Ex: Panadura" />
                        <Select name="status" label="Found Status:" options={["Found", "Not Found"]} optional={false} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                    <CustomButton borderColor="blue" bgColor="white" hoverColor="blue" textColor="blue" textHoverColor="white" text="Save" />
                    <CustomButton borderColor="#59AE4B" bgColor="white" hoverColor="#59AE4B" textColor="#59AE4B" textHoverColor="white" text="Update" />
                    <CustomButton borderColor="#D75555" bgColor="white" hoverColor="#D75555" textColor="#D75555" textHoverColor="white" text="Delete" />
                </div>
            </motion.div>
        </div>
    );
}

export default LostAndFoundForm;
