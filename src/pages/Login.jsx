import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "./NewCapsule/NewCapsule.css";
import "../App.css";
import TopNavBar from "../components/TopNavBar";
import validator from "validator";

const [showSuccessMessage, setShowSuccessMessage] = useState(false);

const handleSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!validator.isEmail(email)) {
        console.log("Email address is not valid");
    } else {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            onCloseModal();
        }, 2000);
    }
}

const Login = ({ email, password }) => {

    return (
        <div style={{ height: "100vh" }}>
            <TopNavBar backLink={"/capsulePreview"} />
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email address:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
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
            <Button onClick={handleSubmit}>
                Login
            </Button>
        </div>
    );
};

export default Login;
