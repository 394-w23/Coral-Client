import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import AddInfo from "../components/AddInfo";
import TopNavBar from "../components/TopNavBar";
import templates from "../../public/templates.png";

const CreateCapsule = ({ userData, capsuleData }) => {
  return (
    <div className="background-white" style={{ height: "120vh" }}>
      <TopNavBar nextLink={'/capsulePreview'} />
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Create your capsule
      </Typography>
      <img src={templates}></img>     
      <div>
        <AddInfo title={"memories"} userData={userData} capsuleData={capsuleData} />
        <AddInfo title={"tasks"} userData={userData} capsuleData={capsuleData} />
        <AddInfo title={"charities"} userData={userData} capsuleData={capsuleData} />        
      </div>
    </div>
  );
};

export default CreateCapsule;