import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import logo from "../../public/new_capsule.png";
import { Link } from "react-router-dom";

const CapsuleGalleryCard = ({ name, image }) => {
  return (
    <div>
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody className="flex flex-col">
          <Typography color="blue-gray" className="mb-2 secondary-font-medium">
            {name}
          </Typography>

          <img src={image}></img>
          <div className="flex justify-around">
            <Button className="primary-blue-background next-button">
              Share
            </Button>
            <Button className="primary-blue-background next-button">
              Preview
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
