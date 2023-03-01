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
import { v4 as uuidv4 } from 'uuid';

const capsuleId = uuidv4();

const CreateCapsule = ({ user }) => {
  // TODO:
  // Create a new capsule in the database under user and capsule ID = capsuleId
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
        <AddInfo title={"memories"} capsuleId={capsuleId} />
        <AddInfo title={"notes"} capsuleId={capsuleId} />
        <AddInfo title={"goodwill"} capsuleId={capsuleId} />        
      </div>
    </div>
  );
};

export default CreateCapsule;