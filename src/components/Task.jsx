import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Task = ({ taskID, taskData }) => {
  // const [count, setCount] = useState(0);

  const isTaskComplete = taskData.isTaskComplete;
  const taskTitle = taskData.taskTitle;
  const taskSubtasks = taskData.substasks;

  return (
    <div className="flex justify-center">
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody>
          <Typography variant="h2" className="mb-2">
            {taskData.title}
          </Typography>

          <Typography variant="h5" color="blue-gray" className="mb-2">
            Subtask Info cards map here
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Task;
