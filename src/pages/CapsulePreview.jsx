import { useState } from "react";
import PreviewCard from "../components/PreviewCard";
import { Button } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";
import { Typography } from "@material-tailwind/react";
import BottomSlideOverMenu from "../components/BottomSlideOverMenu";
import DeleteMemoryModal from "../modals/DeleteMemoryModal";
import DeleteTaskModal from "../modals/DeleteTaskModal";
import DeleteCharityModal from "../modals/DeleteCharityModal";
import TopNavBar from "../components/TopNavBar";
import { BsFillTrashFill } from "react-icons/bs";
import "./CapsulePreview.css";

const CapsulePreview = ({ userData, capsuleData, mode }) => {
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
      {mode === "create" ? (
        <TopNavBar nextLink={"/newCapsule"} backLink={"/createCapsule"} />
      ) : (
        ""
      )}
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        {mode === "create" ? "Your Capsule Preview" : "Emma's last act of love"}
      </Typography>

      {mode === "receive" ? (
        <div className="p-5">
          Dear Mom,
          <br />
          <br />
          You are probably wondering what the heck this is? Well. It is a
          digital capsule, and my last act of love to you.
          <br />
          <br />
          In it you will find the things we never spoke about or planned for.
          The necessary contact list and administrative favors and I need taken
          care of if something unexpected was to happen. Most importantly it
          contains some of my favorite memories in the form of pictures, videos,
          and letters for you to download and hold on to forever.
          <br />
          <br />
          My hope was never for it to have reached you. But now that it has, I
          hope that it makes things a bit lighter and reminds you how much I
          love you.
          <br />
          <br />
          Much Love,
          <br />
          Emma
        </div>
      ) : (
        ""
      )}

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large subhead-text"
      >
        Tasks
      </Typography>

      <div
        className=" h-80 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end container"
        style={{ objectFit: "cover" }}
      >
        {mode === "create" ? (
          <Button
            onClick={handleDeleteTask}
            className="bg-transparent shadow-none delete-button"
          >
            <BsFillTrashFill />
          </Button>
        ) : (
          ""
        )}

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
        className=" h-96 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end container-charity"
        style={{ objectFit: "cover" }}
      >
        {mode === "create" ? (
          <Button
            onClick={handleDeleteCharity}
            className="bg-transparent shadow-none delete-button"
          >
            <BsFillTrashFill />
          </Button>
        ) : (
          ""
        )}
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

      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 primary-font-large subhead-text"
      >
        Memories
      </Typography>

      <div
        className=" h-80 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden flex flex-col items-end container"
        style={{ objectFit: "cover" }}
      >
        {mode === "create" ? (
          <Button
            onClick={handleDeleteMemory}
            className="bg-transparent shadow-none delete-button"
          >
            <BsFillTrashFill />
          </Button>
        ) : (
          ""
        )}
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
      {mode === "receive" ? <BottomSlideOverMenu /> : ""}
    </div>
  );
};

export default CapsulePreview;
