import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const Event = ({ eventID, eventData }) => {
  const [task, setTask] = useState(1);
  const currentTaskData = eventData.tasks[task];
  console.log(currentTaskData);

  const id = 1;

  return (
    <div className="eventClass grid justify-center">
      <Task taskID={id} taskData={currentTaskData}></Task>
      <Button>Next</Button>
    </div>
  );
};

export default Event;
