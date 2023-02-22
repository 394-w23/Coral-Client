import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import "./NewCapsule/NewCapsule.css";
import logo from "../../public/new_capsule.png";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import BottomNavBar from "../components/BottomNavBar";
import "../App.css";
import TopNavBar from "../components/TopNavBar";

const NewCapsule = ({ name }) => {
  let redirect_Page = (ele) => {
    // ele.value = 'Redirecting in 5 secs ...';
    // ele.disabled = true;
    var base_url = window.location.origin;
    console.log(base_url);
    let tID = setTimeout(function () {
      // redirect page.
      window.location.href = base_url + "/capsuleGallery";

      window.clearTimeout(tID); // clear time out.
    }, 250); // call function after 5000 milliseconds or 5 seconds
  };
  return (
    <div style={{ height: "100vh" }}>
      <TopNavBar />
      <div class="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "600px", height: "auto" }}
        ></img>
      </div>
      <div class="content-center capsule-description">
        <h1 class="user">
          <b>Emma,</b>
        </h1>
        <p class="description">Your capsule of love has been created</p>
      </div>
      <div class="flex justify-center">
        <div class="container form-check form-switch">
          {/* <input 
          class="button-center justify-center form-check-input appearance-none w-36  rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" 
          type="checkbox" 
          role="switch" 
          id="flexSwitchCheckDefault" /> */}

          {/* <input
            class="button-center justify-center form-check-input appearance-none w-36  rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm peer-checked:bg-navyPrimary-600"
            type="checkbox"
            role="switch"
            onClick={redirect_Page}
            id="flexSwitchCheckDefault"
          />
          <label
            class="text-center form-check-label inline-block text-gray-800"
            for="flexSwitchCheckDefault"
          >
            activate capsule
          </label> */}
          <div class="flex items-center justify-center mt-4">
            <label class="relative inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                onClick={redirect_Page}
                class="sr-only peer"
              />
              <div class="w-36 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-greenPrimary dark:peer-focus:ring-navyPrimary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-navyPrimary transition-transform ease-in-out duration-200 checked:translate-x-full peer-checked:after:translate-x-full translate-x-0"></div>
            </label>
            
          </div>
          <div>
            <label class="text-center form-check-label inline-block text-gray-800">
              activate capsule
            </label>
          </div>
        </div>
      </div>
          
      <div className="flex justify-center mt-10">
        <Link to="/capsulePreview">
          <Button className="primary-blue-background next-button">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewCapsule;
