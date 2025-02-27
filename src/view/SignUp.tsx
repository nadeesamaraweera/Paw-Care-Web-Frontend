import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";
import { Radio, RadioGroup } from "@nextui-org/react";
import Swal from "sweetalert2";
import axios from "axios";

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('other');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleRoleChange = (value: string) => {
        setSelectedRole(value);
    };

    const addUser = async () => {
        try {
            if (validateSubmission()) {
                const newUser = {
                    username: username, password: password, role: selectedRole, activeState: true,
                };

                console.log("user", newUser); // Log the object directly without stringify

                const response = await axios.post("http://localhost:3000/api/user/add", newUser);
                console.log(response);

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success", title: "Success!", text: "User added successfully!",
                    }).then(() => {
                        clearForm();
                    });

                } else {
                    Swal.fire({
                        icon: "error", title: "Sorry!", text: "Something went wrong. Please try again.",
                    }).then(() => {
                        clearForm();
                    });
                }
            }
        } catch (error) {
            // Handle errors during the user addition process
            console.error('Error during user addition:', error);

            // Show an error message based on the type of error
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Error during user addition",
            }).then(() => {
                clearForm();
            });
        }
    };

    const clearForm = () => {
        setUsername("");
        setPassword("");
        setSelectedRole("other");
    };

    const validateSubmission = () => {
        if (username && password && selectedRole) {
            // You can add more validation logic if needed
            console.log("Valid Inputs");
            return true;
        } else {
            Swal.fire({
                icon: "error", title: "Invalid Inputs", text: "Please enter valid inputs",
            });
            return false;
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 via-white to-teal-100 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-300 opacity-30 blur-3xl animate-pulse"></div>
            <div className="relative bg-white bg-opacity-90 p-5 rounded-xl shadow-lg flex flex-col lg:flex-row w-full max-w-3xl">

                {/* Right Side - Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg mb-6 lg:mb-0">
                    <img
                        src="src/assets/signup.jpeg"
                        alt="Pet Care"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Left Side - SignUp Form */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    {/* Logo */}
                    <div className="mb-2">
                        <img src="src/assets/logo.png" alt="Pet Care Logo" className="w-20 h-20"/>
                    </div>

                    {/* Small description under logo */}
                    <p className="text-lg font-bold text-gray-800 text-center">
                        Welcome!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Join the Paw-some Family!
                    </p>

                    {/* Username Input */}
                    <div className="w-full">
                        <Input
                            type="text"
                            name="username"
                            label="Email :"
                            optional={false}
                            callBack={handleUsernameChange}
                            placeholder="Enter Your Email  "
                        />
                    </div>

                    {/* Password Input */}
                    <div className="w-full mt-4">
                        <Input
                            type="password"
                            name="password"
                            label="Password :"
                            optional={false}
                            callBack={handlePasswordChange}
                            placeholder="Password  "
                        />
                    </div>

                    {/* Role Selection */}
                    <div className="w-full mt-4">
                        <div className="form-group">
                            <RadioGroup
                                label="Select Your Role To Furry Care"
                                orientation="horizontal"
                                value={selectedRole}
                                onChange={(event) => handleRoleChange(event.target.value)}
                            >
                                <Radio value="vet">Vet</Radio>
                                <Radio value="org">Org</Radio>
                                <Radio value="other">Other</Radio>
                            </RadioGroup>
                        </div>
                    </div>

                    {/* Centered Signup Button */}
                    <div className="mt-8 w-300">
                        <CustomButton
                            borderColor={'#2563EB'}
                            bgColor={'#2563EB'}
                            hoverColor={'#1D4ED8'}  // Slightly darker on hover (blue-700)
                            textColor={'white'}
                            textHoverColor={'white'}
                            text={'SIGNUP'}
                            onClick={addUser}
                        />
                    </div>

                    {/* Login Link */}
                    <div className="mt-4 text-center">
                        <p>
                            Already have an account?
                            <Link to="/login" className="text-blue-500 ml-1">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
