import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";
import { useDbData } from "../utilities/firebase";

import Event from "./pages/Event";
import CreateCapsule from "./pages/CreateCapsule";
import NewCapsule from "./pages/NewCapsule";
import CapsulePreview from "./pages/CapsulePreview";
import CapsuleGallery from "./pages/CapsuleGallery";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, error] = useDbData("/"); // get whole database

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  const eventID = "thisisauuid122233woohoo";
  const userID = "useruuidemma";
  console.log("Data: ", data);
  const userCapsule = data.capsules.capsuleuuidemmaslovecapsule;
  const user = data.users.useruuidemma;
  console.log("User Capsule: ", userCapsule);
  console.log("User: ", user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CreateCapsule></CreateCapsule>
          }
        ></Route>
        <Route
          path="/newCapsule"
          element={
            <NewCapsule></NewCapsule>
          }
        ></Route>
        <Route
          path="/capsulePreview"
          element={
            <CapsulePreview userData={user} capsuleData={userCapsule}></CapsulePreview>
          }>
        </Route>
        <Route
          path="/capsuleGallery"
          element={<CapsuleGallery></CapsuleGallery>}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
