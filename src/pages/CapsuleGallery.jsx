import logo from "../../public/new_capsule.png";
import CapsuleGalleryCard from "../components/CapsuleGalleryCard";
import { Typography } from "@material-tailwind/react";

const CapsuleGallery = () => {
  return (
    <span className="grid gap-4 grid-cols-1 justify-items-center">
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Your Capsules
      </Typography>
      <CapsuleGalleryCard name="Test1" class="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "600px", height: "auto" }}
        ></img>
      </CapsuleGalleryCard>
      <CapsuleGalleryCard name="Test2" class="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "600px", height: "auto" }}
        ></img>
      </CapsuleGalleryCard>
      <CapsuleGalleryCard name="Test3" class="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "600px", height: "auto" }}
        ></img>
      </CapsuleGalleryCard>
    </span>
  );
}

export default CapsuleGallery;