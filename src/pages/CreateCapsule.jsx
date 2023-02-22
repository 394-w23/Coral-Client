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
import AddInfo from "../components/AddInfo/AddInfo";
import BottomNavBar from "../components/BottomNavBar";
import TopNavBar from "../components/TopNavBar";
import templates from "../../public/templates.png";

const CreateCapsule = ({ eventID, eventData }) => {
  return (
    <div className="background-white" style={{ height: "110vh" }}>
      <TopNavBar />
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Create your capsule
      </Typography>
      <img src={templates}></img>
      {/* <div className="templates">
        <p>Templates</p>
        <div className="templateWrapper secondary-blue-background">
          <div className="templateCircle secondary-green-background">
            Free
          </div>
          <div className="templateCircle secondary-green-background">
            Free
          </div>
          <div className="templateCircle secondary-green-background">
            Free
          </div>
          <div className="templateCircle secondary-green-background">
            Pro
          </div>
        </div>
      </div> */}
      <div>
        <AddInfo title={"memories"} />
        <AddInfo title={"tasks"} />
        <AddInfo title={"goodwill"} />

        <div className="flex justify-center mt-10">
          <Link to="/capsulePreview">
            <Button className="primary-blue-background next-button">
              Next
            </Button>
          </Link>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default CreateCapsule;
