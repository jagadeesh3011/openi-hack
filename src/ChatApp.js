import $ from "jquery";

import "./assets/css/style.css";
import "./assets/css/design.css";

// Components
import JsLoader from "./components/jsLoader";
import Navbar from './components/navbar';
import LeftSide from './components/leftSide';
import Chat from './components/chat';
// import RightSide from './components/rightside';

// You can use these libraries directly if needed
$(document).ready(function () {
  console.log("jQuery is ready");
});

function App() {
  return (
    <div className="app-container">
      <JsLoader />
      <Navbar />
        <LeftSide />
        <Chat />
      </div>
  );
}

export default App;
