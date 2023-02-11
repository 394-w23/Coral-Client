import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const Task = ({ taskID, taskData }) => {
  // const [count, setCount] = useState(0);
  const id = 1;
  return (
    <Card className="eventClass w-96">
      <CardHeader floated={false} className="h-80">
        {taskData.title}
      </CardHeader>
      <CardBody>INSERT SUBTASKS LATER</CardBody>
    </Card>
  );
};

export default Task;
