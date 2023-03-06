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
import DeleteMemoryModal from "../modals/DeleteMemoryModal";
import DeleteTaskModal from "../modals/DeleteTaskModal";
import DeleteCharityModal from "../modals/DeleteCharityModal";
import pic from "../../public/Screenshot 2023-02-19 195026.jpg";
import pic2 from "../../public/templates.png";
import TopNavBar from "../components/TopNavBar";
import EditMemoriesModal from "../modals/EditMemoriesModal";
import { useDbUpdate, useDbData } from "../../utilities/firebase";

const CapsulePreview = ({ userData, capsuleData }) => {
  const capsulePhotos = capsuleData.photoLinks.slice(1);
  const capsuleNotes = capsuleData.notes.slice(1);
  const capsuleGoodwill = capsuleData.goodwill.slice(1);

  const [deleteMemoryModal, setDeleteMemoryModal] = useState(false);
  const openDeleteMemoryModal = () => setDeleteMemoryModal(true);
  const closeDeleteMemoryModal = () => setDeleteMemoryModal(false);

  const [deleteTaskModal, setDeleteTaskModal] = useState(false);
  const openDeleteTaskModal = () => setDeleteTaskModal(true);
  const closeDeleteTaskModal = () => setDeleteTaskModal(false);

  const [deleteCharityModal, setDeleteCharityModal] = useState(false);
  const openDeleteCharityModal = () => setDeleteCharityModal(true);
  const closeDeleteCharityModal = () => setDeleteCharityModal(false);

  const [slideCarousel, setSlideCarousel] = useState(true);
  const slideOn = () => setSlideCarousel(true);
  const slideOff = () => setSlideCarousel(false);

  const handleDeleteMemory = () => {
    slideOff();
    openDeleteMemoryModal();
  };

  const handleDeleteTask = () => {
    slideOff();
    openDeleteTaskModal();
  };

  const handleDeleteCharity = () => {
    slideOff();
    openDeleteCharityModal();
  };

  return (
    <div className="background-white" style={{ height: "200vh" }}>
      <DeleteMemoryModal
        showModal={deleteMemoryModal}
        onCloseModal={closeDeleteMemoryModal}
        capsuleData={capsuleData}
        slideOn={slideOn}
      />
      <DeleteTaskModal
        showModal={deleteTaskModal}
        onCloseModal={closeDeleteTaskModal}
        capsuleData={capsuleData}
        slideOn={slideOn}
      />
      <DeleteCharityModal
        showModal={deleteCharityModal}
        onCloseModal={closeDeleteCharityModal}
        capsuleData={capsuleData}
        slideOn={slideOn}
      />
      <TopNavBar nextLink={"/newCapsule"} backLink={"/createCapsule"} />
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
        className="mb-2 primary-font-large subhead-text"
      >
        Tasks
      </Typography>

      <div
        className=" h-80 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end"
        style={{ objectFit: "cover" }}
      >
        <Button onClick={handleDeleteTask} className="bg-red-500 next-button">
          X
        </Button>
        <Carousel id="tasks" slide={slideCarousel}>
          {capsuleNotes.map((note, index) => {
            return (
              <div
                id="taskCard"
                className="flex h-full items-center justify-center secondary-green-background dark:text-white "
              >
                <PreviewCard
                  title={note.title}
                  description={note.content}
                  key={index}
                  id="currentTask"
                ></PreviewCard>
              </div>
            );
          })}
        </Carousel>
      </div>

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large subhead-text"
      >
        Charity
      </Typography>

      <div
        className=" h-96 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end"
        style={{ objectFit: "cover" }}
      >
        <Button
          onClick={handleDeleteCharity}
          className="bg-red-500 next-button"
        >
          X
        </Button>
        <Carousel id="charities" slide={slideCarousel}>
          {capsuleGoodwill.map((goodwill, index) => {
            return (
              <div
                id="charityCard"
                className="flex h-full items-center justify-center secondary-green-background dark:text-white "
              >
                <PreviewCard
                  title={goodwill.charityName}
                  description={goodwill.request}
                  key={index}
                  id="currentCharity"
                ></PreviewCard>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* <EditMemoriesModal
      showModal={photoModal}
      onCloseModal={closePhotoModal}
      userData={userData}
      capsuleData={capsuleData}
      /> */}

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large subhead-text"
      >
        Memories
      </Typography>

      <div
        className=" h-80 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end"
        style={{ objectFit: "cover" }}
      >
        <Button onClick={handleDeleteMemory} className="bg-red-500 next-button">
          X
        </Button>
        <Carousel id="memories" slide={false}>
          {capsulePhotos.map((url) => {
            return <img src={url} key={url} id="currentMemory"></img>;
          })}
        </Carousel>
      </div>
      <div className="flex justify-evenly my-1">
        {/* <Button onClick={handleDelete} className="bg-red-700 next-button">
          Delete this memory
        </Button> */}
      </div>
    </div>
  );
};

export default CapsulePreview;
