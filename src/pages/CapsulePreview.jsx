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

import pic from "../../public/Screenshot 2023-02-19 195026.jpg";
import pic2 from "../../public/templates.png";
import TopNavBar from "../components/TopNavBar";

const CapsulePreview = ({ userData, capsuleData }) => {
  console.log("Checking data: ", capsuleData);
  console.log(capsuleData.photoLinks.slice(1));
  const capsulePhotos = capsuleData.photoLinks.slice(1);
  const capsuleNotes = capsuleData.notes.slice(1);
  const capsuleGoodwill = capsuleData.goodwill.slice(1);

  return (
    <div className="background-white" style={{ height: "200vh" }}>
      <TopNavBar nextLink={'/newCapsule'} backLink={'/'} />
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Your Capsule Preview
      </Typography>
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large header-text"
      >
        Memories
      </Typography>

      <div
        className=" h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden"
        style={{ "object-fit": "cover" }}
      >
        <Carousel>
          {capsulePhotos.map((url) => {
            return <img src={url} key={url}></img>;
          })}
        </Carousel>
      </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large header-text"
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

      <div className="h-80 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {capsuleNotes.map((note) => {
            return (
              <div className="flex h-full items-center justify-center secondary-green-background dark:text-white ">
                <PreviewCard
                  title={note.title}
                  description={note.content}
                ></PreviewCard>
              </div>
            );
          })}
        </Carousel>
      </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large header-text"
      >
        Goodwill
      </Typography>

      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {capsuleGoodwill.map((goodwill) => {
            return (
              <div className="flex h-full items-center justify-center secondary-green-background dark:text-white ">
                <PreviewCard
                  title={goodwill.charityName}
                  description={goodwill.request}
                ></PreviewCard>
              </div>
            );
          })}
        </Carousel>
      </div>

    </div>
  );
};

export default CapsulePreview;
