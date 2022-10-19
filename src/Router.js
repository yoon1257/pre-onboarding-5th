import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import User from "./pages/User";
import List from "./pages/List";
import Setting from "./pages/Setting";
import Write from "./pages/Write";
import Detail from "./components/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/list" element={<List />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
