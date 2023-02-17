import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";

import Navigation from "../components/Navigation/Navigation";
import AddInfo from "../components/AddInfo/AddInfo";

const CreateCapsule = ({ eventID, eventData }) => {
  return (
    <div>
      <Typography variant="h2" color="blue-gray" className="mb-2 secondary-font-large">
        Create your capsule
      </Typography>
      <div className="templates">
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
      </div>
      <AddInfo title={"memories"} />
      <AddInfo title={"tasks"} />
      <AddInfo title={"goodwill"} />
      <Button>Next</Button>
    </div>
  );
};

export default CreateCapsule;
