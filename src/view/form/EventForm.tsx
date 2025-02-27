import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Swal from "sweetalert2";
import axios from "axios";

const userId = "U-0001";

function EventForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [eventId, setEventId] = useState("");
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const handleOverlayClick = (event) => {
        if (event.target.id === "modal-overlay") {
            onClose();
        }
    };

    const handleInputs = (e, type) => {
        const value = e.target.value;
        if (type === "eventId") setEventId(value);
        else if (type === "eventName") setEventName(value);
        else if (type === "description") setDescription(value);
        else if (type === "date") setDate(value);
        else if (type === "time") setTime(value);
        else if (type === "location") setLocation(value);
    };

    const validateSubmission = () => {
        if (eventId && eventName && date && time && location) return true;
        Swal.fire({ icon: "error", title: "Invalid Inputs", text: "Please enter all required fields." });
        return false;
    };

    const saveEvent = async () => {
        if (validateSubmission()) {
            try {
                await axios.post("http://localhost:3000/api/event/add", { eventId, eventName, description, date, time, location, userId });
                Swal.fire({ icon: "success", title: "Success!", text: "Event saved successfully." });
            } catch {
                Swal.fire({ icon: "error", title: "Error!", text: "Error saving event." });
            }
        }
    };

    const updateEvent = async () => {
        if (validateSubmission()) {
            try {
                await axios.put(`http://localhost:3000/api/event/update/${eventId}`, { eventId, eventName, description, date, time, location, userId });
                Swal.fire({ icon: "success", title: "Success!", text: "Event updated successfully." });
            } catch {
                Swal.fire({ icon: "error", title: "Error!", text: "Error updating event." });
            }
        }
    };

    const deleteEvent = async () => {
        if (validateSubmission()) {
            try {
                await axios.delete(`http://localhost:3000/api/event/delete/${eventId}`);
                Swal.fire({ icon: "success", title: "Success!", text: "Event deleted successfully." });
            } catch {
                Swal.fire({ icon: "error", title: "Error!", text: "Error deleting event." });
            }
        }
    };

    return (
        <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4" onClick={handleOverlayClick}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-xl p-4 mt-12 shadow-lg w-full max-w-[90%] sm:max-w-[450px] max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-bold text-[#071722]">Event Form</h2>
                    <button onClick={onClose} className="p-1 rounded-full bg-gray-100 hover:bg-gray-300 transition" style={{ zIndex: 50 }}>
                        <IoCloseOutline className="text-[#071722] text-2xl" />
                    </button>
                </div>
                <label className="block text-[#071722] text-md mt-3">User ID: {userId}</label>
                <div className="flex flex-col gap-3 mt-3">
                    <Input label="Event ID:" name="eventId" type="text" value={eventId} callBack={handleInputs} placeholder="E-0001" className="w-full h-8 text-sm" />
                    <Input label="Event Name:" name="eventName" type="text" value={eventName} callBack={handleInputs} placeholder="Ex: Charity Run" className="w-full h-8 text-sm" />
                    <Input label="Description:" name="description" type="text" value={description} callBack={handleInputs} placeholder="Ex: Annual Fundraiser" className="w-full h-8 text-sm" />
                    <Input label="Date:" name="date" type="date" value={date} callBack={handleInputs} className="w-full h-8 text-sm" />
                    <Input label="Time:" name="time" type="time" value={time} callBack={handleInputs} className="w-full h-8 text-sm" />
                    <Input label="Location:" name="location" type="text" value={location} callBack={handleInputs} placeholder="Ex: New York" className="w-full h-8 text-sm" />
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    <CustomButton borderColor="blue" bgColor="white" hoverColor="blue" textColor="blue" textHoverColor="white" text="Save" onClick={saveEvent} />
                    <CustomButton borderColor="#59AE4B" bgColor="white" hoverColor="#59AE4B" textColor="#59AE4B" textHoverColor="white" text="Update" onClick={updateEvent} />
                    <CustomButton borderColor="#D75555" bgColor="white" hoverColor="#D75555" textColor="#D75555" textHoverColor="white" text="Delete" onClick={deleteEvent} />
                </div>
            </motion.div>
        </div>
    );
}

export default EventForm;
