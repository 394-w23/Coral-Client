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

import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import "../App.css";
import TopNavBar from "../components/TopNavBar";
import ActivateSwitch from "../components/ActivateSwitch/ActivateSwitch";

const NewCapsule = ({ name }) => {
  
  const hideImage = "hideImage";
  const handleClick = () => {
    console.log("activate!");
  }

  return (
    <div style={{ height: "100vh" }}>
      <TopNavBar backLink={"/capsulePreview"} />
      <ActivateSwitch onChange={handleClick} />  
    
    </div>
  );
};

export default NewCapsule;
