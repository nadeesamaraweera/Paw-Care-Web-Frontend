import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/input/input.tsx";
import CustomButton from "../component/input/custom-button.tsx";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const login = async () => {
        if (password && username) {
            const user = { username, password };
            console.log(JSON.stringify(user));

            try {
                const response = await fetch('http://localhost:3000/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const data = await response.json();
                if (data.status === 'success') {
                    localStorage.setItem('username', user.username);
                    console.log("saved username in local storage: ", localStorage.getItem('username'));
                    window.location.href = 'home';
                } else {
                    alert(data.message);
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 via-white to-teal-100 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-300 opacity-30 blur-3xl animate-pulse"></div>
            <div className="relative bg-white bg-opacity-90 p-5 rounded-xl shadow-lg w-full max-w-3xl flex flex-col lg:flex-row">

                {/* Right Side - Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg p-4 ">
                    <img
                        src="src/assets/login.jpeg"
                        alt="Pet Care"
                        className="w-full h-full object-cover rounded-b-full"
                    />
                </div>

                {/* Left Side - Login Form */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    {/* Logo */}
                    <div className="mb-4">
                        <img src="src/assets/logo.png" alt="Pet Care Logo" className="w-20 h-20"/>
                    </div>

                    {/* Small description under logo */}
                    <p className="text-md font-bold text-gray-800 text-center">
                        Welcome back!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Please log in to access your account.
                    </p>

                    {/* Username Input */}
                    <div className="w-full mb-4">
                        <Input
                            type="text"
                            name="username"
                            label="Email :"
                            optional={false}
                            callBack={handleUsernameChange}
                            placeholder="Enter Your Email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="w-full mb-4">
                        <Input
                            type="password"
                            name="password"
                            label="Password :"
                            optional={false}
                            callBack={handlePasswordChange}
                            placeholder="Password"
                        />
                    </div>

                    {/* Centered Login Button */}
                    <div className="w-300 mb-4 ">
                        <CustomButton
                            borderColor={'#2563EB'}
                            bgColor={'#2563EB'}
                            hoverColor={'#1D4ED8'}  // Slightly darker on hover (blue-700)
                            textColor={'white'}
                            textHoverColor={'white'}
                            text={'LOGIN'}
                            onClick={login}
                        />
                    </div>

                    {/* Signup Link */}
                    <div className="mt-4 text-center">
                        <p>
                            Don't have an account?
                            <Link to="/signup" className="text-blue-500 ml-1">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
