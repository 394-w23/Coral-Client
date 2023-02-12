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
      <Card className="eventClass w-96 text-centered ">
        <CardHeader floated={false}>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {taskData.title}
          </Typography>
        </CardHeader>
        <CardBody>
          {" "}
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Subtask Info
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Task;
