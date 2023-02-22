import { useState } from "react";
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
import BottomNavBar from "../components/BottomNavBar";

import pic from "../../public/Screenshot 2023-02-19 195026.jpg";
import pic2 from "../../public/templates.png";

const CapsulePreview = ({}) => {
  return (
    <div className="background-white" style={{ height: "135vh" }}>
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

      <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Notes
      </Typography>
      {/* <div className="flex flex-col items-center">
        <PreviewCard
          title="To Mr. John Sanchez"
          description="ilysm"
        ></PreviewCard>
        <PreviewCard
          title="To Maya"
          description="Please please please cancel my Hulu sub or ur disowned"
        ></PreviewCard>
      </div> */}

      <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <PreviewCard
              title="To Mr. John Sanchez"
              description="ilysm"
            ></PreviewCard>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <PreviewCard
              title="To Maya"
              description="Please please please cancel my Hulu sub or ur disowned"
            ></PreviewCard>
          </div>
        </Carousel>
      </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Goodwill
      </Typography>

      <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <PreviewCard
              title="Red Cross"
              description="Donate all my money there please"
            ></PreviewCard>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <PreviewCard
              title="Goodwill"
              description="Please donate all my clothes"
            ></PreviewCard>
          </div>
        </Carousel>
      </div>

      <Link to="/newCapsule">
        <Button className="primary-blue-background next-button">Next</Button>
      </Link>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default CapsulePreview;
