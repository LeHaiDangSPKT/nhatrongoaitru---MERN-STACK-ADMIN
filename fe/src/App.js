import * as React from "react";
import Header from "./components/Header";
import Content_main from "./components/Content_main";
import { Routes, Route } from "react-router-dom";
import Manager from "./components/Manager/Manager";
import ManagerActivity from "./components/Manager/Activity/ManagerActivity";

function App() {
  const check = localStorage.getItem("login");
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="*" element={<Content_main />} />
        {check && <Route path="/manager/" element={<Manager />} />}
        {check && (
          <Route path="/managerActivity/" element={<ManagerActivity />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
