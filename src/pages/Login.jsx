import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./NewCapsule/NewCapsule.css";
import "../App.css";
import validator from "validator";
import { Typography } from "@material-tailwind/react";

const Login = ({ users, setUser }) => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const filteredEmail = users.filter((user) => user[1].email == email);
        // console.log(filteredEmail);
        if (!validator.isEmail(email)) {
            setErrorMessage("Email address is not valid");
        }
        else if (filteredEmail.length > 0) {
            if (filteredEmail[0][1].password === password) {
                setErrorMessage("");
                setUser(filteredEmail[0][0]);

            }
            else {
                setErrorMessage("Wrong password");
            }
        }
        else {
            setErrorMessage("");
        }
    }
    users = Object.entries(users);
    // console.log(users);
    return (
        <div style={{ height: "100vh" }}>
            <Typography
                variant="h1"
                color="blue-gray"
                className="mb-2 secondary-font-large header-text"
            >
                MyCapsule
            </Typography>
            <img src=".././public/MyCapsule_Logo.png"></img>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {errorMessage != "" && (
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p className="font-bold">{errorMessage}</p>
                    </div>
                )}
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Email address:
                    <input type="text" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password:
                    <input type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>
                <div className="flex flex-col items-center">
                    <button type="submit" className="secondary-green-background text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        LOGIN
                    </button>
                </div>

            </form>
            {/* <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email address:" />
                </div>
                <TextInput id="login-email" placeholder="" required={true} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Password:" />
                </div>
                <TextInput id="login-password" required={true} />
            </div> */}

        </div>
    );
};

export default Login;
