import CapsuleGalleryCard from "../components/CapsuleGalleryCard";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const CapsuleGallery = ({ data }) => {
  const [capsules, setCapsules] = useState([]);
  useEffect(() => {
    const userId = "emmasuuid";
    const currentCapsules = data.users[userId].capsules.slice(1);
    const newCapsules = currentCapsules.map((capsuleId) => ({
      id: capsuleId,
      ...data.capsules[capsuleId],
    }));
    setCapsules(newCapsules);
  }, [data]);

  return (
    <span className="grid gap-4 grid-cols-1 justify-items-center">
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Your Capsules
      </Typography>
      {capsules.map((capsule) => (
        <CapsuleGalleryCard
          key={capsule.id}
          name={capsule.name}
          image={capsule.photoLinks[1]}
          class="flex justify-center"
        ></CapsuleGalleryCard>
      ))}
    </span>
  );
};

export default CapsuleGallery;
