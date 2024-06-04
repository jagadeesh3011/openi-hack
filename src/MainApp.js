import $ from "jquery";
import "./assets/css/style.css";
// Components
import Navbar from './components/navbar';
import LeftSide from './components/leftSide';
import Main from './components/main';
// import RightSide from './components/rightside';

// You can use these libraries directly if needed
$(document).ready(function () {
  console.log("jQuery is ready");
});

function MainApp() {
  return (
    <div className="app-container">
      <Navbar />
      <LeftSide />
      <Main />
      </div>
  );
}

export default MainApp;
