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

  const handleClickNext = () => {
    if (task != eventData.tasks.length - 1){
      setTask(++task);
    }
    if (task == eventData.tasks.length - 1){
      setNextText("Done")
    }
  };
  const handleClickBack = () => {
    if (task != 0){
      setTask(--task);
    }
    setNextText("Next")
  };

  let [task, setTask] = useState(1);
  let currentTaskData = eventData.tasks[task];

  const id = 1;
  let [nextText, setNextText] = useState("Next")
  return (
    <div>
      <Navigation className="nav-bar" />
      <div className="eventClass grid justify-center">
        <Task taskID={id} taskData={currentTaskData}></Task>
        <div>
          {task != 1 && <Button className="w-[20vw] float-left" onClick={handleClickBack}>Back</Button>}
          <Button className="w-[20vw] float-right ml-auto" onClick={handleClickNext}>
            {nextText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Event;
