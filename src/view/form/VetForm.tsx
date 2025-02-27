import { ChangeEvent, useRef, useState } from "react";
import Input from "../../component/input/input.tsx";
import Select from "../../component/input/combo-box.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import Swal from "sweetalert2";
import axios from "axios";
import {IoCloseOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {MdAnnouncement} from "react-icons/md";

const userId: string = `username1`;
function VetForm() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const backToDashboard = () => {
        //navigate to dashboard
        console.log("Back to Dashboard");
        navigate('/home')
    }


    const [vetId, setVetId] = useState<string>("");
    const [qualification, setQualification] = useState<string>("");
    const [vetName, setVetName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [nic, setNic] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [contactNo, setContactNo] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showForm, setShowForm] = useState<boolean>(true); // Track form visibility


    const handleGenderChange = (selectedValue: string) => {
        setGender(selectedValue);
        console.log("Selected Value : ", gender)
    };
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

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        switch (type) {
            case 'id':
                setVetId(e.target.value);
                break;
            case 'qualification':
                setQualification(e.target.value);
                break;
            case 'name':
                setVetName(e.target.value);
                break;
            case 'gender':
                setGender(e.target.value);
                break;
            case 'nic':
                setNic(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'contact':
                setContactNo(e.target.value);
                break;
            case 'location':
                setLocation(e.target.value);
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setVetId("");
        setQualification("");
        setVetName("");
        setGender("");
        setNic("");
        setEmail("");
        setContactNo("");
        setLocation("");
    };

    const validateSubmission = () => {
        if (vetId && qualification && vetName && gender && nic && email && contactNo && location) {
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs"
            });
            return false;
        }
    }

    const uploadImage = () => {
        console.log("in Upload Image method")
        return new Promise((resolve, reject) => {
            const fileInput = fileInputRef.current;
            if (!fileInput) {
                reject('File input element not found.');
                return;
            }
            if (fileInput.files && fileInput.files.length > 0) {
                const selectedImage = fileInput.files[0];

                const formData = new FormData();
                formData.append('image', selectedImage);

                const config = {
                    method: 'post',
                    url: 'http://localhost:3000/api/upload/images',
                    data: formData,
                };
                axios.request(config)
                    .then(response => {
                        console.log('=====================================');
                        console.log("Test in backend : ", JSON.stringify(response.data));
                        console.log('=====================================');
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.error('Error uploading image:', error);
                        reject('Error uploading image');
                    });
            } else {
                console.error('No file selected.');
                reject('No file selected.');
            }
        });
    };
    const saveVet = async () => {
        try {
            // Implement image upload logic if needed...
            const imageUrl = await uploadImage(); // Assuming you have an uploadImage function

            // Extracting the URL from the response
            const url = (imageUrl as { profile_url: string }).profile_url;

            const vetData = {
                id: vetId,
                qualification: qualification,
                name: vetName,
                gender: gender,
                nic: nic,
                email: email,
                contact: contactNo,
                location: location,
                imageUrl: url,
                username: userId
            };
            // Validate the form data before making the API call
            if (validateSubmission()) {
                const response = await axios.post("http://localhost:3000/api/vet/add", vetData);

                // Handle the success response
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Vet saved successfully.",
                    });

                    // Clear the form or perform other actions if needed
                    clearForm();
                } else {
                    // Handle other response statuses if needed
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong. Please try again.",
                    });
                }
            }
        } catch (error) {
            // Handle errors during the save process
            console.error('Error during vet save:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during vet save",
            });
        }
    };
    const updateVet = async () => {
        try {
            // Implement image upload logic if needed...
            const imageUrl = await uploadImage(); // Assuming you have an uploadImage function

            // Extracting the URL from the response
            const url = (imageUrl as { profile_url: string }).profile_url;

            const vetData = {
                id: vetId,
                qualification: qualification,
                vetName: vetName,
                gender: gender,
                nic: nic,
                email: email,
                contactNo: contactNo,
                location: location,
                imageUrl: url,
                // Add other properties if needed...
            };

            // Validate the form data before making the API call
            if (validateSubmission()) {
                const response = await axios.put(`http://localhost:3000/api/vet/update/${vetId}`, vetData);

                // Handle the success response
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Vet updated successfully!",
                    });

                    // Clear the form or perform other actions if needed
                    clearForm();
                } else {
                    // Handle other response statuses if needed
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong. Please try again.",
                    });
                }
            }
        } catch (error) {
            // Handle errors during the update process
            console.error('Error during vet update:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during vet update",
            });
        }
    };
    const deleteVet = async () => {
        try {
            // Validate the form data before making the API call
            if (validateSubmission()) {
                const response = await axios.delete(`http://localhost:3000/api/vet/delete/${vetId}`);

                // Handle the success response
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Vet deleted successfully!",
                    });

                    // Clear the form or perform other actions if needed
                    clearForm();
                } else {
                    // Handle other response statuses if needed
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Something went wrong. Please try again.",
                    });
                }
            }
        } catch (error) {
            // Handle errors during the delete process
            console.error('Error during vet delete:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during vet delete",
            });
        }
    };
    const searchVet = () => {

        try {
            // Validate the form data before making the API call
            if (validateSubmission()) {
                axios.get(`http://localhost:3000/api/vet/getById/${vetId}`)
                    .then((response) => {
                        if (response.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Success!",
                                text: "Vet found successfully! : " + response.data,
                            });

                            // Update the state with the retrieved data
                            setQualification(response.data.qualification);
                            setVetName(response.data.name);
                            setGender(response.data.gender);
                            setNic(response.data.nic);
                            setEmail(response.data.email);
                            setContactNo(response.data.contact);
                            setLocation(response.data.location);
                            setSelectedImage(response.data.imageUrl);

                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Sorry!",
                                text: "Something went wrong. Please try again.",
                            });
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: "error",
                            title: "Sorry!",
                            text: "Something went wrong. " + err,
                        });
                    });
            }
        } catch (error) {
            // Handle errors during the search process
            console.error('Error during vet search:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during vet search",
            });
        }
    };
    return (
        <form className="max-w-3xl mx-auto mt-5 flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg border-l-8 border-r-8 border-gray-300">
            {/* User ID */}
            <div className='flex justify-end '>
                <button className={'cursor-pointer'} onClick={backToDashboard}>
                    <IoCloseOutline className='text-[#071722] text-[35px] cursor-pointer'/>
                </button>
            </div>
            <div className="text-black ">
                <label className='text-lg font-medium mr-4'>User ID: {userId}</label>
            </div>
            {/* Title */}
            <div className='flex flex-col items-center text-center'>
                <p className="text-3xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400">
                    <MdAnnouncement className="mr-2 inline-block text-4xl"/> Vet Details
                </p>
                {/* Image Upload */}
                <div className='flex flex-col items-center mt-4'>
                    <img className="w-40 h-40 border border-gray-300 rounded-full"
                         src={selectedImage || "src/assets/vet.jpg"} alt="Vet"/>
                    <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef}
                           className="mt-2 border p-1 rounded"/>
                </div>

            </div>
            {/* Form Fields */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Input label="Veterinarian ID:" name='id' type='text' optional={false} placeholder='V-0001'
                       value={vetId} callBack={handleInputs} onKeyDown={searchVet}/>
                <Input label="Qualification:" name='qualification' type='text' optional={false} placeholder=''
                       value={qualification} callBack={handleInputs}/>
            </div>

            <Input type='text' name='name' label='Veterinarian Name:' optional={false} placeholder='Ex:Dr. John Doe'
                   value={vetName} callBack={handleInputs}/>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Select name='gender' label='Gender:' options={['Male', 'Female']} optional={false}
                        onChange={handleGenderChange} id='gender'/>
                <Input type='text' name='nic' label='NIC:' optional={false} placeholder='Ex:200076900989' value={nic}
                       callBack={handleInputs}/>
            </div>

            <Input type='email' name='email' label='Email:' optional={false} placeholder='Ex:ruvini925@gmail.com'
                   value={email} callBack={handleInputs}/>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Input label="Contact No:" name='contact' type='tel' optional={false} placeholder='Ex:0787628489'
                       value={contactNo} callBack={handleInputs}/>
                <Input label="Location:" name='location' type='text' optional={false} placeholder='Panadura'
                       value={location} callBack={handleInputs}/>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
                <CustomButton borderColor="blue" bgColor="white" hoverColor="blue" textColor="blue"
                              textHoverColor="white" text="Save" onClick={saveVet}/>
                <CustomButton borderColor="#59AE4B" bgColor="white" hoverColor="#59AE4B" textColor="#59AE4B"
                              textHoverColor="white" text="Update" onClick={updateVet}/>
                <CustomButton borderColor="#D75555" bgColor="white" hoverColor="#D75555" textColor="#D75555"
                              textHoverColor="white" text="Delete" onClick={deleteVet}/>
            </div>
        </form>
    );
}

export default VetForm;
