import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "devicon/devicon.min.css";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <CanvasBackground />
      <div className="absolute top-0 left-0 pointer-events-none">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
