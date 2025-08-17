import ProjectCard from "./ProjectCard";
import ProgressBar from "./ProgressBar";
import Home from "./Home";
import Education from "./Education";
import InputData from "./InputData";
import Certificate from "./Certificate";
import Footer from "./Footer";
import CanvasTrail from "./CanvasTrail";

function App() {
  return (
    <>
      <div className=" max-w-[1600px] m-auto ">
        <CanvasTrail />
        <Home />
        <Education />
        <ProgressBar />
        <ProjectCard />
        <Certificate />
        <InputData />
        <Footer />
      </div>
    </>
  );
}

export default App;
