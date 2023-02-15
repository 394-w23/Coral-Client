import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Subtask = ({ subtaskData }) => {
  // const [count, setCount] = useState(0);

  const subtaskInfo = subtaskData.additionalInformation;
  const subtaskTitle = subtaskData.title;
  const subtaskPhotos = subtaskData.photos;

  return (
    <div className="flex justify-center">
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody>
          <Typography variant="h5" className="mb-2">
            {subtaskTitle}
          </Typography>

          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            {subtaskInfo}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Subtask;
