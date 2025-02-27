import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Swal from "sweetalert2";
import axios from "axios";

const userId = "U-0001";

function EventForm() {
    const [eventId, setEventId] = useState("");
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [formVisible, setFormVisible] = useState(true);

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

    const closeForm = () => {
        setFormVisible(false);
        window.scrollTo(0, 0);
    };

    return (
        formVisible && (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                <form className="w-full max-w-lg bg-blue-100 shadow-xl rounded-xl p-8 border border-gray-300">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-semibold text-gray-700 bg-blue-200 px-4 py-1 rounded-md">
                            User ID: {userId}
                        </span>
                        <button type="button" onClick={closeForm} className="text-gray-600 hover:text-red-500">
                            <IoCloseOutline className="text-[30px]" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <Input label="Event ID:" type="text" value={eventId} callBack={handleInputs} name="eventId" />
                        <Input label="Event Name:" type="text" value={eventName} callBack={handleInputs} name="eventName" />
                        <Input label="Description:" type="text" value={description} callBack={handleInputs} name="description" />
                        <Input label="Date:" type="date" value={date} callBack={handleInputs} name="date" />
                        <Input label="Time:" type="time" value={time} callBack={handleInputs} name="time" />
                        <Input label="Location:" type="text" value={location} callBack={handleInputs} name="location" />
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center mt-6">
                        <CustomButton
                            borderColor="#071722"
                            bgColor="white"
                            hoverColor="blue"
                            textColor="#071722"
                            textHoverColor="white"
                            text="Save"
                            onClick={saveEvent}
                            className="px-6 py-2 rounded-md border hover:bg-blue-600 hover:text-white transition-all"
                        />
                        <CustomButton
                            borderColor="#59AE4B"
                            bgColor="white"
                            hoverColor="green"
                            textColor="#59AE4B"
                            textHoverColor="white"
                            text="Update"
                            onClick={updateEvent}
                            className="px-6 py-2 rounded-md border hover:bg-green-600 hover:text-white transition-all"
                        />
                        <CustomButton
                            borderColor="#D75555"
                            bgColor="white"
                            hoverColor="red"
                            textColor="#D75555"
                            textHoverColor="white"
                            text="Delete"
                            onClick={deleteEvent}
                            className="px-6 py-2 rounded-md border hover:bg-red-600 hover:text-white transition-all"
                        />
                    </div>
                </form>
            </div>
        )
    );
}

export default EventForm;
