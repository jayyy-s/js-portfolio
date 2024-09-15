import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "devicon/devicon.min.css";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground";

function App() {
  return (
    <div className="">
      <CanvasBackground />
      <div className="absolute top-0 left-0 w-full md:w-5/6 lg:w-2/3">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
