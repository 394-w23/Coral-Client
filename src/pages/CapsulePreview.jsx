import { useState } from "react";
import pic from "../../public/Screenshot 2023-02-19 195026.jpg";
import PreviewCard from "../components/PreviewCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CapsulePreview = ({}) => {
  return (
    <div>
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Your Capsule Summary
      </Typography>
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Memories
      </Typography>
      <div>
        <img src={pic}></img>
      </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img src={pic} alt="..." />
            <img src={pic} alt="..." />
            <img src={pic} alt="..." />
            <img src={pic} alt="..." />
            <img src={pic} alt="..." />
          </Carousel>
        </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Notes
      </Typography>
      <div className="flex flex-col items-center">
        <PreviewCard
          title="To Mr. John Sanchez"
          description="ilysm"
        ></PreviewCard>
        <PreviewCard
          title="To Maya"
          description="Please please please cancel my Hulu sub or ur disowned"
        ></PreviewCard>
      </div>
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Goodwill
      </Typography>
      <div className="flex flex-col items-center">
        <PreviewCard
          title="Red Cross"
          description="Donate all my money there please"
        ></PreviewCard>
      </div>
      <Link to="/newCapsule">
        <Button className="primary-blue-background next-button">Next</Button>
      </Link>
    </div>
  );
};

export default CapsulePreview;
