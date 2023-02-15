import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Subtask from "./Subtask";

const Task = ({ taskID, taskData }) => {
  // const [count, setCount] = useState(0);

  const isTaskComplete = taskData.isTaskComplete;
  const taskTitle = taskData.title;
  const taskSubtasks = taskData.subtasks;

  return (
    <div className="flex justify-center">
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            {taskTitle}
          </Typography>

          <Typography variant="h5" color="blue-gray" className="mb-2">
            {taskSubtasks.map((data, index) =>
              <Subtask key={index} subtaskData={data}></Subtask>
            )}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Task;
