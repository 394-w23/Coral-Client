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

const Event = ({ eventID, eventData }) => {
  console.log(eventData.tasks);

  const handleClick = () => {
    setTask(task++);
  };

  let [task, setTask] = useState(1);
  let currentTaskData = eventData.tasks[task];

  const id = 1;

  return (
    <div>
      <Navigation className="nav-bar" />
      <div className="eventClass grid justify-center">
        <Task taskID={id} taskData={currentTaskData}></Task>
        <Button className="w-[20vw] float-right ml-auto" onClick={handleClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Event;
