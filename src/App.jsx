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
import Login from "./pages/Login";
import "./App.css";
//add useState for handling the image as a file and then the image as a url from firebase
import storage from "../utilities/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDbUpdate } from "../utilities/firebase";
const App = () => {
  const [data, error] = useDbData("/"); // get whole database
  const [userLoggedIn, setUserLoggedIn] = useState();
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  // console.log("Data: ", data);
  
  const user = data.users.emmasuuid;
  // console.log("User Capsule: ", userCapsule);
  if (userLoggedIn) {
    console.log("Logged in:", userLoggedIn)
  }
  else {
    console.log("Logged out")
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userLoggedIn ? <Navigate to="/capsuleGallery" />
              : <Login users={data.users} setUser={setUserLoggedIn} />
          }
        ></Route>
        {/* 
        TODO:
        Change path of createCapsule to /createCapsule/{capsuleId}
         */}
        <Route
          path="/createCapsule/:id"
          element={
            userLoggedIn ? <CreateCapsule user={userLoggedIn}></CreateCapsule>
              : <Login users={data.users} setUser={setUserLoggedIn} />
          }
        ></Route>
        <Route
          path="/newCapsule"
          element={
            userLoggedIn ? <NewCapsule name={data.users[userLoggedIn].name}></NewCapsule>
              : <Login users={data.users} setUser={setUserLoggedIn} />
          }
        ></Route>
        <Route
          path="/capsulePreview"
          element={
            userLoggedIn ? <CapsulePreview userData={userLoggedIn} capsuleId={}></CapsulePreview>
              : <Login users={data.users} setUser={setUserLoggedIn} />
          }>
        </Route>
        <Route
          path="/capsuleGallery"
          element={
            userLoggedIn ? <CapsuleGallery data={data}></CapsuleGallery>
              : <Login users={data.users} setUser={setUserLoggedIn} />
          }>
        </Route>
      </Routes>
    </Router>

  );
};

export default App;
