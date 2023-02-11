import Task from "../components/Task";
import { useState } from "react";

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
    <div className="eventClass">
      <Task taskID={id} taskData={currentTaskData}></Task>
      <button>Next</button>
    </div>
  );
};

export default Event;
