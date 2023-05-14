import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/Homepage";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";
import Fourthpage from "./pages/Fourthpage";
import Fifthpage from "./pages/Fifthpage";
import SixthPage from "./pages/Sixthpage";
import ResultPage from "./pages/ResultPage";
import WysaPage from "./pages/WysaPage";

function App() {
  const wysaUser = localStorage.getItem("wysaUser");

  return (
    <>
      <ToastContainer />
      <Router>
        <div>
          {wysaUser ? (
            <Routes>
              <Route path="/wysa/:id" element={<WysaPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/question2/:id" element={<Secondpage />} />
              <Route path="/question3/:id" element={<Thirdpage />} />
              <Route path="/question4/:id" element={<Fourthpage />} />
              <Route path="/question5/:id" element={<Fifthpage />} />
              <Route path="/question6/:id" element={<SixthPage />} />
              <Route path="/result/:id" element={<ResultPage />} />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
