import {ChangeEvent, useRef, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Swal from "sweetalert2";
import axios from "axios";
import * as url from "node:url";

const userId: string = `username1`;


function PetForm() {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [petId, setPetId] = useState<string>("");
    const [petType, setPetType] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [breed, setBreed] = useState<string>("");
    const [colors, setColors] = useState<string>("");
    const [ownershipStatus, setOwnershipStatus] = useState('Has Owner');
    const [injuredStatus, setInjuredStatus] = useState('Not Injured');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(selectedImage?.length)

        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string; // Asserting the type to string
                setSelectedImage(result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleOwnershipChange = (selectedValue: string) => {
        setOwnershipStatus(selectedValue);
        console.log("Selected Value : ", ownershipStatus)
    };

    const handleInjuredStatus = (selectedValue: string) => {
        setInjuredStatus(selectedValue);
        console.log("Selected Value : ", injuredStatus)
    };

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'petId':
                setPetId(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'age':
                setAge(parseInt(e.target.value, 10) || 0);
                break;
            case 'breed':
                setBreed(e.target.value);
                break;
            case 'type':
                setPetType(e.target.value);
                break;
            case 'colors':
                setColors(e.target.value);
                break;
            default :
                break;
        }
    }


    const clearForm = () => {
        setPetId("");
        setPetType("");
        setName("");
        setAge(0);
        setBreed("");
        setColors("");
        setSelectedImage(null);
    }

    const validateSubmission = () => {
        if (petId && petType && name && age && breed && colors) {
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs"
            });
            return false;
        }
    }

    const deletePet = () => {
        if (validateSubmission()) {
            axios.delete(`http://localhost:3000/api/pet/delete/${petId}`)
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Success!", text: "Pet deleted successfully!"
                        });
                        clearForm()
                    } else {
                        Swal.fire({
                            icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                    });
                });
        }
    };

    const searchPet = () => {
        console.log("Search Pet : ", petId);
        axios.get(`http://localhost:3000/api/pet/getById/${petId}`)
            .then((response) => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "Pet found successfully! : " + response.data
                    });
                    setPetType(response.data.petType);
                    setName(response.data.name);
                    setAge(response.data.age);
                    setBreed(response.data.breed);
                    setColors(response.data.colors);
                    setOwnershipStatus(response.data.ownershipStatus);
                    setInjuredStatus(response.data.injuredStatus);
                    setSelectedImage(response.data.imageUrl)
                } else {
                    console.log("Response : ", response);
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error", title: "Sorry!", text: "Something went wrong. " + err
                });
            });

    }

    // =======================================================================================================
    const uploadImage = () => {
        console.log("Uploading image...");
        return new Promise((resolve, reject) => {
            const fileInput = fileInputRef.current;

            if (!fileInput) {
                console.error("File input element not found.");
                reject("File input element not found.");
                return;
            }

            if (fileInput.files && fileInput.files.length > 0) {
                const selectedImage = fileInput.files[0];

                const formData = new FormData();
                formData.append("image", selectedImage);

                axios.post("http://localhost:3000/api/upload/images", formData)
                    .then(response => {
                        console.log("Image uploaded successfully:", response.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.error("Error uploading image:", error);
                        reject("Error uploading image");
                    });
            } else {
                console.error("No file selected.");
                reject("No file selected.");
            }
        });
    };


    const savePet = async () => {
        try {
            console.log("Uploading image...");
            const imageUrl = await uploadImage();
            console.log("Image upload response:", imageUrl);

            // Ensure imageUrl contains the expected field
            console.log("Response url in frontend : ", (imageUrl as { profile_url: string }).profile_url);
            if (!url) {
                throw new Error("Invalid image URL response");
            }

            console.log("Image URL in frontend:", url);

            const pet = {
                id: petId,
                petType,
                name,
                age,
                breed,
                colors,
                ownershipStatus,
                injuredStatus,
                username: userId,
                imageUrl: url
            };

            if (validateSubmission()) {
                console.log("Saving pet...");
                const response = await axios.post("http://localhost:3000/api/pet/add", pet);
                console.log("Pet saved successfully:", response.data);

                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Pet saved successfully."
                });

                clearForm();
            }
        } catch (error) {
            console.error("Error during pet save:", error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: error instanceof Error ? error.message : "Error during pet save"
            });
        }
    };


    const updatePet = async () => {
        try {
            const imageUrl = await uploadImage();
            const url = (imageUrl as { profile_url: string }).profile_url;
            console.log("Url in frontend : ", url);

            const pet = {
                id: petId,
                petType: petType,
                name: name,
                age: age,
                breed: breed,
                colors: colors,
                ownershipStatus: ownershipStatus,
                injuredStatus: injuredStatus,
                username: userId,
                imageUrl: url
            };

            if (validateSubmission()) {
                const response = await axios.put(`http://localhost:3000/api/pet/update/${petId}`, pet);

                console.log("Response url in frontend : ", url);

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "Pet updated successfully!"
                    });
                    clearForm();
                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again."
                    });
                }
            }
        } catch (error) {
            console.error('Error during pet update:', error);

            if (error === 'No file selected.') {
                Swal.fire({
                    icon: "error", title: "Error!", text: "No file selected."
                });
            } else {
                Swal.fire({
                    icon: "error", title: "Error!", text: "Error during pet update"
                });
            }
        }
    };

    const [formVisible, setFormVisible] = useState(true);

    const closeForm = () => {
        setFormVisible(false);
        window.scrollTo(0, 0);
    };
    return (
        <>
            {formVisible && (
                <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
                    <form
                        className="w-full mx-auto mt-3 py-12 bg-blue-100
            flex flex-col gap-6 text-[#071722] text-[18px] pr-4 pl-4 md:pr-14 md:pl-14 border-gray-300 border-[1px] rounded-2xl"
                    >
                        <div className="flex justify-between items-center mt-2">
                            <label className="text-[18px] bg-blue-300 px-5 py-1 rounded-lg">
                                User ID : {userId}
                            </label>
                            <button
                                className="cursor-pointer"
                                type="button"
                                onClick={closeForm}
                            >
                                <IoCloseOutline className="text-[#071722] text-[35px] cursor-pointer" />
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                            <div className="flex flex-col justify-center items-center w-full md:w-1/3">
                                <img
                                    className="w-56 h-56 border border-gray-300 m-auto rounded-[200px]"
                                    src={selectedImage || "src/assets/dog.jpg"}
                                    alt="Dog Image"
                                    id="pet-profile"
                                />
                                <div className="flex flex-col justify-center items-center mt-4 rounded-lg cursor-pointer">
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="border-gray-200 border-[1px] w-3/4"
                                        ref={fileInputRef}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <div className="flex flex-col gap-6 md:gap-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <Input
                                            label="Pet ID : "
                                            type="text"
                                            optional={false}
                                            placeholder="P-0001"
                                            value={petId}
                                            callBack={handleInputs}
                                            name="petId"
                                            onKeyDown={searchPet}
                                        />
                                        <Input
                                            label="Pet Type : "
                                            type="text"
                                            optional={false}
                                            placeholder="Ex:Dog"
                                            value={petType}
                                            callBack={handleInputs}
                                            name="type"
                                        />
                                        <Input
                                            type="text"
                                            label="Pet Name : "
                                            optional={true}
                                            placeholder="Ex:Rex"
                                            value={name}
                                            callBack={handleInputs}
                                            name="name"
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <Input
                                            type="text"
                                            label="Age : "
                                            optional={true}
                                            placeholder="Ex:2"
                                            callBack={handleInputs}
                                            name="age"
                                            value={age.toString()}
                                        />
                                        <Input
                                            type="text"
                                            label="Breed : "
                                            optional={true}
                                            placeholder="Ex:German Shepherd"
                                            value={breed}
                                            callBack={handleInputs}
                                            name="breed"
                                        />
                                        <Input
                                            type="text"
                                            label="Colors : "
                                            optional={true}
                                            placeholder="Ex:Brown,Black"
                                            value={colors}
                                            callBack={handleInputs}
                                            name="colors"
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <Select
                                            name="ownership"
                                            label="Ownership Status :"
                                            options={["Has Owner", "Hasn't Owner"]}
                                            optional={false}
                                            id="ownership"
                                            onChange={handleOwnershipChange}
                                        />
                                        <Select
                                            name="injured"
                                            label="Injured Status :"
                                            options={["Injured", "Not Injured"]}
                                            optional={false}
                                            id="injured"
                                            onChange={handleInjuredStatus}
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center">
                                        <div className="flex flex-wrap gap-6 justify-center">
                                            <CustomButton
                                                borderColor="#071722"
                                                bgColor="white"
                                                hoverColor="blue"
                                                textColor="#071722"
                                                textHoverColor="white"
                                                text="Save"
                                                onClick={savePet}
                                            />
                                            <CustomButton
                                                borderColor="#59AE4B"
                                                bgColor="white"
                                                hoverColor="green"
                                                textColor="#59AE4B"
                                                textHoverColor="white"
                                                text="Update"
                                                onClick={updatePet}
                                            />
                                            <CustomButton
                                                borderColor="#D75555"
                                                bgColor="white"
                                                hoverColor="red"
                                                textColor="#D75555"
                                                textHoverColor="white"
                                                text="Delete"
                                                onClick={deletePet}
                                            />
                                        </div>
                                        <div className="flex flex-wrap gap-4 justify-center mt-3">
                                            <CustomButton
                                                borderColor="#A8A5A5"
                                                bgColor="white"
                                                hoverColor="#A8A5A5"
                                                textColor="#A8A5A5"
                                                textHoverColor="white"
                                                text="Health Record"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}


export default PetForm;

