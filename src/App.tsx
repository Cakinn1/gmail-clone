import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import LeftNav from "./components/leftNav/LeftNav";
import Home from "./components/home/Home";

export default function App() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1 ">
        <LeftNav />
        <Home />
      </div>
    </div>
  );
}
