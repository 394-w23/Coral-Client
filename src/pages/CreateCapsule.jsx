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

import Navigation from "../components/Navigation/Navigation";
import AddInfo from "../components/AddInfo/AddInfo";
import BottomNavBar from "../components/BottomNavBar";

const CreateCapsule = ({ eventID, eventData }) => {
  return (
    <div>
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large"
      >
        Create your capsule
      </Typography>
      <AddInfo title={"memories"} />
      <AddInfo title={"tasks"} />
      <AddInfo title={"goodwill"} />
      <Button>Next</Button>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default CreateCapsule;
