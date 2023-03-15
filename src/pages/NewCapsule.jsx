import TopNavBar from "../components/TopNavBar";
import ActivateSwitch from "../components/ActivateSwitch/ActivateSwitch";
import "./NewCapsule/NewCapsule.css";
import "../App.css";

const NewCapsule = ({ name }) => {
  const hideImage = "hideImage";
  const handleClick = () => {
    console.log("activate!");
  };

  return (
    <div style={{ height: "100vh" }}>
      <TopNavBar backLink={"/capsulePreview"} />
      <ActivateSwitch onChange={handleClick} />
    </div>
  );
};

export default NewCapsule;
