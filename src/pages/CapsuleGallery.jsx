import logo from "../../public/new_capsule.png";
import CapsuleGalleryCard from "../components/CapsuleGalleryCard";

const CapsuleGallery = () => {
  return (
    <span className="grid gap-4 grid-cols-1 justify-items-center">
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