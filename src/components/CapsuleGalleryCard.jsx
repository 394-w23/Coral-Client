import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast('Link to "Emma\'s Last Act of Love" copied to clipboard!');

const CapsuleGalleryCard = ({ name, image }) => {
  return (
    <div>
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <Toaster />
        <CardBody className="flex flex-col">
          <Typography color="blue-gray" className="mb-2 secondary-font-medium">
            {name}
          </Typography>

          <img src={image}></img>
          <div className="flex justify-around">
            <Button
              className="primary-blue-background next-button"
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://coralclient-59585.web.app/emmaslastactoflove"
                );
                notify();
              }}
            >
              Share
            </Button>
            <Link to="/createCapsule">
              <Button className="primary-blue-background next-button">
                Edit
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CapsuleGalleryCard;
