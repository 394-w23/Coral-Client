import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import "./NewCapsule/NewCapsule.css";
import logo from "../../public/new_capsule.png";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import "../App.css";
import TopNavBar from "../components/TopNavBar";
import ActivateSwitch from "../components/ActivateSwitch/ActivateSwitch";

const NewCapsule = ({ name }) => {
  
  return (
    <div style={{ height: "100vh" }}>
      <TopNavBar />
      <div class="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "600px", height: "auto" }}
        ></img>
      </div>
      <div class="content-center capsule-description">
        <h1 class="user">
          <b>Emma,</b>
        </h1>
        <p class="description">Your capsule of love has been created</p>
      </div>
      <br />
      <ActivateSwitch />

      <div className="flex justify-center mt-10">
        <Link to="/capsulePreview">
          <Button className="primary-blue-background next-button">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewCapsule;
