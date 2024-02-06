import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import LeftNav from "./components/LeftNav/LeftNav";
import { fetchDataWithTimeout } from "./lib/data";
import { useEffect, useContext, useState } from "react";
import Home from "./components/Home/Home";
import { ComposeContext } from "./Context/ComposeContext";
import AppProvider from "./Context/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <div className="flex flex-1 flex-col min-h-screen">
        <Nav />
        <div className="flex flex-1 gap-x-4 ">
          <ComposeContext>
            <LeftNav />
            <Home />
          </ComposeContext>
        </div>
      </div>
    </AppProvider>
  );
}
