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
import LandingPage from "./pages/LandingPage";
import "./App.css";

const App = () => {
  console.log(process.env);

  const [data, error] = useDbData("/"); // get whole database
  const [userLoggedIn, setUserLoggedIn] = useState();
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  // console.log("Data: ", data);
  const userCapsule = data.capsules.emmalovecapsuleuuid;
  const user = data.users.emmasuuid;
  // console.log("User Capsule: ", userCapsule);
  // console.log("User: ", user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userLoggedIn ? (
              <Navigate to="/createCapsule" />
            ) : (
              <Login users={data.users} setUser={setUserLoggedIn} />
            )
          }
        ></Route>
        <Route
          path="/createCapsule"
          element={
            <CreateCapsule
              userData={user}
              capsuleData={userCapsule}
            ></CreateCapsule>
          }
        ></Route>
        <Route path="/newCapsule" element={<NewCapsule></NewCapsule>}></Route>
        <Route
          path="/capsulePreview"
          element={
            <CapsulePreview
              userData={user}
              capsuleData={userCapsule}
              mode="create"
            ></CapsulePreview>
          }
        ></Route>
        <Route
          path="/emmaslastactoflove"
          element={
            <CapsulePreview
              userData={user}
              capsuleData={userCapsule}
              mode="receive"
            ></CapsulePreview>
          }
        ></Route>
        <Route
          path="/capsuleGallery"
          element={<CapsuleGallery data={data}></CapsuleGallery>}
        ></Route>
        <Route
          path="/landingPage"
          element={<LandingPage data={data}></LandingPage>}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
