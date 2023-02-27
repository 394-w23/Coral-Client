import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { useDbData } from "../utilities/firebase";
import CreateCapsule from "./pages/CreateCapsule";
import NewCapsule from "./pages/NewCapsule";
import CapsulePreview from "./pages/CapsulePreview";
import CapsuleGallery from "./pages/CapsuleGallery";
import "./App.css";








//add useState for handling the image as a file and then the image as a url from firebase
import storage from "../utilities/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDbUpdate } from "../utilities/firebase";









const App = () => {
  const [data, error] = useDbData("/"); // get whole database

  // if (error) return <h1>Error loading data: {error.toString()}</h1>;
  // if (data === undefined) return <h1>Loading data...</h1>;
  // if (!data) return <h1>No data found</h1>;

  // const eventID = "thisisauuid122233woohoo";
  // const userID = "useruuidemma";
  // console.log("Data: ", data);
  // const userCapsule = data.capsules.emmalovecapsuleuuid;
  // const user = data.users.emmasuuid;
  // console.log("User Capsule: ", userCapsule);
  // console.log("User: ", user);









  const allInputs = { imgUrl: "" };

  const [imageAsFile, setImageAsFile] = useState("");

  const [percent, setPercent] = useState(0);
  const [updateDb] = useDbUpdate("/");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  // console.log(imageAsFile);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please upload an image first!");
    }

    setImageAsFile((imageFile) => file);

    const storageRef = ref(storage, `/files/${file.name}`); 

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("URL: ", url);
          // updateDb({ [`/clubs/${clubId}/picLink`]: (url) });
        });
      });
  }




  return (
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <CreateCapsule userData={user} capsuleData={userCapsule}></CreateCapsule>
    //       }
    //     ></Route>
    //     <Route
    //       path="/newCapsule"
    //       element={
    //         <NewCapsule></NewCapsule>
    //       }
    //     ></Route>
    //     <Route
    //       path="/capsulePreview"
    //       element={
    //         <CapsulePreview userData={user} capsuleData={userCapsule}></CapsulePreview>
    //       }>
    //     </Route>
    //     <Route
    //       path="/capsuleGallery"
    //       element={<CapsuleGallery data={data}></CapsuleGallery>}>
    //     </Route>
    //   </Routes>
    // </Router>
    <div className="App">
      <form>
        <input type="file" onChange={handleUpload} />
      </form>
    </div>    
  );
};

export default App;
