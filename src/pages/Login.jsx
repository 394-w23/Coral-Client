import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./NewCapsule/NewCapsule.css";
import "../App.css";
import TopNavBar from "../components/TopNavBar";
import validator from "validator";


const Login = ({ users }) => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userEmailPass = users.map((user) => { return {"email": user.email, "password": user.password} });
        const isEmail = users.filter((user) => user.email == email);
        if (!validator.isEmail(email)) {
            setErrorMessage("Email address is not valid");
        }
        else if (isEmail){
            console.log("working");
        } 
        else {
            setErrorMessage("");
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            <TopNavBar backLink={"/capsulePreview"} />
            <form onSubmit={handleSubmit}>
                {errorMessage != "" && (
                    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p className="font-bold">{errorMessage}</p>
                  </div>
                )}
                <label>
                    Email address:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <button type="submit">
                    Login
                </button>
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
