import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Subtask = ({ subtaskID, subtaskData }) => {
  // const [count, setCount] = useState(0);

  const isSubtaskComplete = subtaskData.isSubtaskComplete;
  const subtaskTitle = subtaskData.subtaskTitle;
  const subtaskDescription = subtaskData.subtaskDescription;

  return (
    <div className="flex justify-center">
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody>
          <Typography variant="h2" className="mb-2">
            {subtaskTitle}
          </Typography>

          <Typography variant="h5" color="blue-gray" className="mb-2">
            {subtaskDescription}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Subtask;
