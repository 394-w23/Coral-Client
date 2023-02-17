import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import Navigation from "../components/Navigation/Navigation";
import AddInfo from "../components/AddInfo/AddInfo";

const CreateCapsule = ({ eventID, eventData }) => {
 
  return (
    <div>
      <p>hello</p>
      <AddInfo title={"memories"}/>
      <AddInfo title={"tasks"}/>
      <AddInfo title={"goodwill"}/>

    </div>
  );
};

export default CreateCapsule;
