import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Main from "./pages/Main";
import { ComposeContext } from "./Context/ComposeContext";
import UserMail from "./components/Mail/UserMail";
import AppProvider from "./Context/AppProvider";
import BinContext from "./Context/BinContext";
import FilteredContext from "./Context/FilteredContext";
import DeleteModalContext from "./Context/DeleteModalContext";
import LeftNav from "./components/LeftNav/LeftNav";

export default function App() {
  return (
    <Router>
      <div className="flex flex-1 flex-col min-h-screen relative">
        <DeleteModalContext>
          <ComposeContext>
            <AppProvider>
              <BinContext>
                <FilteredContext>
                  <Nav />
                  <div className="flex flex-1 gap-x-4  ">
                    <LeftNav />
                    <div className="flex flex-1 ml-[320px]">
                      <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/mail/:id" element={<UserMail />} />
                      </Routes>
                    </div>
                  </div>
                </FilteredContext>
              </BinContext>
            </AppProvider>
          </ComposeContext>
        </DeleteModalContext>
      </div>
    </Router>
  );
}
