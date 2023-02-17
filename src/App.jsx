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
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, error] = useDbData("/"); // get whole database

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  const eventID = "thisisauuid122233woohoo";
  const eventData = data.events[eventID];

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/removed"
          element={
            <Event eventID="thisisauuid122233woohoo" eventData={eventData} />
          }
        ></Route>
        <Route
          path="/createCapsule"
          element={
            <CreateCapsule></CreateCapsule>
          }
        ></Route>
        <Route
          path="/"
          element={
            <NewCapsule></NewCapsule>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
