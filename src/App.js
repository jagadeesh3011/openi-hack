import $ from "jquery";

// CSS
import "./assets/css/style.css";
import "./App.css";
import "./assets/css/design.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// Components
import JsLoader from "./components/jsLoader";
import Main from "./components/main";
import Chat from "./components/chat";
import Community from "./components/community";
import Voice from "./components/voicegenerator";
import Navbar from './components/navbar';
import LeftSide from './components/leftSide';

// React Router
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// You can use these libraries directly if needed
$(document).ready(function () {
  console.log("jQuery is ready");
});

function App() {
  return (
    <Router>
      <div>
        <JsLoader />
        <LeftSide />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Main" />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Voice" element={<Voice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
