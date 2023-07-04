import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";

const Router = (props) => {
  return (
    <div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
